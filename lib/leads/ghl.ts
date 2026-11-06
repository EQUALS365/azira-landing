import { flattenLead, type FlatLead, type Lead } from "./lead"

// GoHighLevel (HighLevel / LeadConnector) API v3, with a sub-account Private
// Integration token. Scopes: contacts.write, opportunities.write and
// opportunities.readonly. Setup is in docs/TRACKING.md.
const API = "https://services.leadconnectorhq.com"
const VERSION = "v3"

type Env = {
  token: string
  locationId: string
  /** Set the id, or leave it out and the pipeline is found by name */
  pipelineId?: string
  pipelineName: string
  /** Defaults to the pipeline's first stage */
  stageId?: string
  /** Flat lead key → GHL contact custom field id, e.g. { "gclid": "abc123" } */
  contactFields: Record<string, string>
}

function readEnv(): Env {
  const token = process.env.GHL_PRIVATE_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) {
    throw new Error(
      "The ghl destination needs GHL_PRIVATE_TOKEN and GHL_LOCATION_ID"
    )
  }
  let contactFields: Record<string, string> = {}
  if (process.env.GHL_CONTACT_FIELDS) {
    try {
      contactFields = JSON.parse(process.env.GHL_CONTACT_FIELDS)
    } catch {
      throw new Error(
        'GHL_CONTACT_FIELDS must be JSON, like {"gclid":"<field id>"}'
      )
    }
  }
  return {
    token,
    locationId,
    pipelineId: process.env.GHL_PIPELINE_ID || undefined,
    pipelineName: process.env.GHL_PIPELINE_NAME || "Ads Pipeline",
    stageId: process.env.GHL_PIPELINE_STAGE_ID || undefined,
    contactFields,
  }
}

async function call<T>(
  env: Env,
  method: "GET" | "POST",
  path: string,
  body?: unknown
): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    method,
    headers: {
      authorization: `Bearer ${env.token}`,
      version: VERSION,
      accept: "application/json",
      ...(body ? { "content-type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(10_000),
  })
  if (!response.ok) {
    // GHL error messages describe fields, never values, so they're safe to log
    let detail = ""
    try {
      const error = (await response.json()) as { message?: string | string[] }
      detail = [error.message ?? []].flat().join("; ")
    } catch {
      // No body
    }
    throw new Error(
      `GHL ${method} ${path.split("?")[0]} → ${response.status} ${detail}`.trim()
    )
  }
  return (await response.json()) as T
}

type Pipeline = { pipelineId: string; stageId: string }
type PipelineList = {
  pipelines?: {
    id: string
    name: string
    stages?: { id: string; name: string; position?: number }[]
  }[]
}

let pipelineCache: Promise<Pipeline> | undefined

/**
 * The ads pipeline and the stage new leads land in. With both ids set this is
 * free; otherwise the pipeline is looked up once per instance by id or name
 * (opportunities.readonly), and new leads go to its first stage.
 */
function resolvePipeline(env: Env): Promise<Pipeline> {
  if (env.pipelineId && env.stageId) {
    return Promise.resolve({ pipelineId: env.pipelineId, stageId: env.stageId })
  }
  pipelineCache ??= (async () => {
    const query = new URLSearchParams({ locationId: env.locationId })
    const { pipelines = [] } = await call<PipelineList>(
      env,
      "GET",
      `/opportunities/pipelines?${query}`
    )
    const wanted = env.pipelineName.trim().toLowerCase()
    const pipeline = pipelines.find((p) =>
      env.pipelineId
        ? p.id === env.pipelineId
        : p.name.trim().toLowerCase() === wanted
    )
    if (!pipeline) {
      throw new Error(
        `No GHL pipeline ${env.pipelineId ? `with id ${env.pipelineId}` : `named "${env.pipelineName}"`}`
      )
    }
    const stages = [...(pipeline.stages ?? [])].sort(
      (a, b) => (a.position ?? 0) - (b.position ?? 0)
    )
    const stageId = env.stageId ?? stages[0]?.id
    if (!stageId)
      throw new Error(`GHL pipeline "${pipeline.name}" has no stages`)
    return { pipelineId: pipeline.id, stageId }
  })().catch((error) => {
    pipelineCache = undefined
    throw error
  })
  return pipelineCache
}

/** UK mobile 07700900123 → +447700900123 */
function e164(mobile: string) {
  return mobile.startsWith("0") ? `+44${mobile.slice(1)}` : mobile
}

/** Where the click came from, for tags and the opportunity name */
function adSource(flat: FlatLead) {
  const source = flat.utm_source.toLowerCase()
  if (flat.gclid || source.includes("google")) return "google"
  if (flat.fbclid || /facebook|instagram|meta|^fb$|^ig$/.test(source)) {
    return "meta"
  }
  return source || "direct"
}

const tag = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

/** Everything about the enquiry, readable on the contact in GHL */
function noteBody(flat: FlatLead) {
  const rows: [string, string][] = [
    ["Treatment page", flat.concern_page],
    ["Answer", flat.concern],
    ["Treated before", flat.treated_before],
    ["Wants to start", flat.start_when],
    ["Ad group", flat.ad_group],
    ["Page", flat.page],
    ["Landing page", flat.landing_page],
    ["UTM source", flat.utm_source],
    ["UTM medium", flat.utm_medium],
    ["UTM campaign", flat.utm_campaign],
    ["UTM term", flat.utm_term],
    ["UTM content", flat.utm_content],
    ["GCLID", flat.gclid],
    ["FBCLID", flat.fbclid],
    ["Lead ID", flat.lead_id],
    ["Received", flat.received_at],
  ]
  return [
    "Website enquiry (ads landing page)",
    ...rows.filter(([, value]) => value).map(([k, v]) => `${k}: ${v}`),
  ].join("\n")
}

/**
 * Sends one lead into GHL:
 * 1. upserts the contact (matched on phone/email by the location's rules),
 *    with tracking in any custom fields mapped in GHL_CONTACT_FIELDS;
 * 2. adds tags (upsert would replace existing ones): ads, the treatment and
 *    the ad platform;
 * 3. opens an opportunity in the ads pipeline, unless the contact already has
 *    an open one there (a repeat enquiry);
 * 4. adds a note with every answer and the full tracking.
 */
export async function sendLeadToGhl(lead: Lead) {
  const env = readEnv()
  const { pipelineId, stageId } = await resolvePipeline(env)
  const flat = flattenLead(lead)
  const [firstName, ...rest] = flat.name.split(/\s+/)
  const source = adSource(flat)

  const customFields = Object.entries(env.contactFields)
    .filter(([key]) => flat[key as keyof FlatLead])
    .map(([key, id]) => ({ id, fieldValue: flat[key as keyof FlatLead] }))

  const { contact } = await call<{ contact: { id: string } }>(
    env,
    "POST",
    "/contacts/upsert",
    {
      locationId: env.locationId,
      firstName,
      lastName: rest.join(" ") || undefined,
      name: flat.name,
      phone: e164(flat.mobile),
      email: flat.email || undefined,
      country: "GB",
      source: `Ads landing page: ${flat.concern_page}`,
      customFields: customFields.length ? customFields : undefined,
    }
  )

  await call(env, "POST", `/contacts/${contact.id}/tags`, {
    tags: ["ads", tag(flat.concern_page), `source-${tag(source)}`],
  })

  let hasOpen = false
  try {
    const query = new URLSearchParams({
      locationId: env.locationId,
      contactId: contact.id,
      pipelineId,
      status: "open",
    })
    const found = await call<{ opportunities?: unknown[] }>(
      env,
      "GET",
      `/opportunities/search?${query}`
    )
    hasOpen = (found.opportunities?.length ?? 0) > 0
  } catch (error) {
    // Without the read scope, fall back to opening one each time
    console.warn(
      `[leads] ghl opportunity search failed for lead ${lead.leadId}: ${error instanceof Error ? error.message : error}`
    )
  }

  if (!hasOpen) {
    await call(env, "POST", "/opportunities/", {
      locationId: env.locationId,
      pipelineId,
      pipelineStageId: stageId,
      contactId: contact.id,
      name: `${flat.name} · ${flat.concern_page} · ${source}`,
      status: "open",
    })
  }

  await call(env, "POST", `/contacts/${contact.id}/notes`, {
    body: noteBody(flat),
  })
}
