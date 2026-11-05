import { flattenLead, type FlatLead, type Lead } from "./lead"

// GoHighLevel (HighLevel / LeadConnector) API v3, with a sub-account Private
// Integration token. Scopes: contacts.write, opportunities.write and
// opportunities.readonly. Setup is in docs/TRACKING.md.
const API = "https://services.leadconnectorhq.com"
const VERSION = "v3"

type Env = {
  token: string
  locationId: string
  pipelineId: string
  stageId?: string
  /** Flat lead key → GHL contact custom field id, e.g. { "gclid": "abc123" } */
  contactFields: Record<string, string>
}

function readEnv(): Env {
  const token = process.env.GHL_PRIVATE_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  const pipelineId = process.env.GHL_PIPELINE_ID
  if (!token || !locationId || !pipelineId) {
    throw new Error(
      "The ghl destination needs GHL_PRIVATE_TOKEN, GHL_LOCATION_ID and GHL_PIPELINE_ID"
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
    pipelineId,
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
      pipelineId: env.pipelineId,
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
      pipelineId: env.pipelineId,
      pipelineStageId: env.stageId,
      contactId: contact.id,
      name: `${flat.name} · ${flat.concern_page} · ${source}`,
      status: "open",
    })
  }

  await call(env, "POST", `/contacts/${contact.id}/notes`, {
    body: noteBody(flat),
  })
}
