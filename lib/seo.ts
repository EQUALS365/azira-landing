import type { Metadata } from "next"

import { site } from "@/content"
import type {
  Clinician,
  ConcernPage,
  ImageAsset,
  VideoAsset,
} from "@/content/schema"

// Search metadata and structured data for concern pages. A page lives at
// /<slug> on the deployment's own address (SITE_URL, e.g.
// https://offers.azira-aesthetics.co.uk/morpheus8), or, if it sets
// `subdomain`, at the root of its own treatment subdomain instead.

/**
 * Indexing is opt-in per deployment: set SITE_INDEXING=1 on production once
 * its address is live. Preview builds never ask to be indexed.
 */
const indexingEnabled = process.env.SITE_INDEXING === "1"

/** The deployment's own address, without a trailing slash */
const siteUrl = process.env.SITE_URL?.trim().replace(/\/$/, "") || undefined

function hostName(host: string | null | undefined) {
  return host?.split(":")[0].toLowerCase() || undefined
}

/** True when a request is for SITE_URL's host (not a preview or vercel.app) */
export function isSiteHost(host: string | null | undefined) {
  const name = hostName(host)
  if (!name || !siteUrl) return false
  try {
    return new URL(siteUrl).hostname === name
  } catch {
    return false
  }
}

/** The page's own subdomain host, e.g. morpheus8.azira-aesthetics.co.uk */
export function subdomainHost(page: ConcernPage) {
  const domain = site.clinic.domain
  return page.subdomain && domain ? `${page.subdomain}.${domain}` : undefined
}

/** The page that a treatment subdomain serves at its root */
export function pageForHost(host: string | null | undefined) {
  const name = hostName(host)
  if (!name) return undefined
  return site.concerns.find((page) => subdomainHost(page) === name)
}

/** Where the page lives in production, without a trailing slash */
export function pageOrigin(page: ConcernPage) {
  const host = subdomainHost(page)
  if (host) return `https://${host}`
  const fallback =
    siteUrl ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined)
  return fallback?.replace(/\/$/, "")
}

/** The canonical URL: the subdomain root, or /<slug> on the site's origin */
export function pageUrl(page: ConcernPage) {
  const origin = pageOrigin(page)
  if (!origin) return undefined
  return subdomainHost(page) ? `${origin}/` : `${origin}/${page.slug}`
}

/** The page's public address, once its subdomain or SITE_URL is set */
export function liveUrl(page: ConcernPage) {
  return subdomainHost(page) || siteUrl ? pageUrl(page) : undefined
}

/** Indexed only at a real address: its own subdomain, or SITE_URL */
export function shouldIndex(page: ConcernPage) {
  return indexingEnabled && page.meta.index && !!liveUrl(page)
}

/**
 * The pages a host lists in its sitemap: a treatment subdomain's own page,
 * or on SITE_URL every page that lives there. Other hosts list none.
 */
export function indexedPagesForHost(host: string | null | undefined) {
  const own = pageForHost(host)
  if (own) return shouldIndex(own) ? [own] : []
  if (!isSiteHost(host)) return []
  return site.concerns.filter(
    (page) => !subdomainHost(page) && shouldIndex(page)
  )
}

/** Title, description, canonical, robots and social cards for one page */
export function pageMetadata(
  page: ConcernPage,
  { variant = false }: { variant?: boolean } = {}
): Metadata {
  const origin = pageOrigin(page)
  const url = pageUrl(page)
  const { title, description } = page.meta
  const image = page.hero.image.src
    ? [{ url: page.hero.image.src, alt: page.hero.image.alt }]
    : undefined

  return {
    title,
    description,
    metadataBase: origin ? new URL(origin) : undefined,
    alternates: url ? { canonical: url } : undefined,
    // Headline variants are the same page for search: never index them
    robots:
      !variant && shouldIndex(page)
        ? {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
          }
        : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: site.clinic.name,
      title,
      description,
      url,
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image,
    },
  }
}

// --- Structured data (schema.org JSON-LD) ------------------------------------

function absolute(path: string | undefined, origin: string | undefined) {
  if (!path) return undefined
  return origin ? new URL(path, origin).toString() : path
}

/** 67 → "PT1M7S" */
function isoDuration(seconds: number) {
  return `PT${Math.floor(seconds / 60)}M${seconds % 60}S`
}

function postalAddress(address: string) {
  const postcode = address.match(/[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i)?.[0]
  return {
    "@type": "PostalAddress",
    streetAddress: address.split(",")[0].trim(),
    addressLocality: site.clinic.location,
    postalCode: postcode,
    addressCountry: "GB",
  }
}

function imageObject(image: ImageAsset, origin: string | undefined) {
  return image.src ? absolute(image.src, origin) : undefined
}

function videoObject(video: VideoAsset, origin: string | undefined) {
  if (!video.src || !video.poster.src) return undefined
  return {
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: absolute(video.poster.src, origin),
    contentUrl: absolute(video.src, origin),
    uploadDate: video.uploadDate,
    duration: isoDuration(video.durationSeconds),
    inLanguage: "en-GB",
  }
}

/** One graph per page: the clinic, the page, its treatments, FAQs and films */
export function pageJsonLd(page: ConcernPage, clinician?: Clinician) {
  const { clinic } = site
  const origin = pageOrigin(page)
  const url = pageUrl(page)
  const clinicId = `${clinic.website ?? url ?? ""}#clinic`

  const clinicNode = {
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: clinic.name,
    url: clinic.website,
    telephone: clinic.phone.dial,
    address: postalAddress(clinic.address),
    award: clinic.awards,
  }

  const person = clinician && {
    "@type": "Person",
    name: clinician.name,
    jobTitle: clinician.role,
    worksFor: { "@id": clinicId },
    image: imageObject(clinician.portrait, origin),
  }

  const videos = [page.treatments.film, clinician?.video]
    .filter((video): video is VideoAsset => !!video)
    .map((video) => videoObject(video, origin))
    .filter(Boolean)

  const webPage = {
    "@type": "MedicalWebPage",
    "@id": url ? `${url}#page` : undefined,
    url,
    name: page.meta.title,
    description: page.meta.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": clinicId },
    primaryImageOfPage: imageObject(page.hero.image, origin),
    about: page.treatments.items.map((treatment) => ({
      "@type": "MedicalProcedure",
      name: treatment.name,
      alternateName: treatment.kind,
      description: treatment.summary,
      howPerformed: treatment.summary,
      image: imageObject(treatment.image, origin),
    })),
    author: person,
    video: videos.length ? videos : undefined,
  }

  const faq = {
    "@type": "FAQPage",
    mainEntity: page.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return {
    "@context": "https://schema.org",
    "@graph": [clinicNode, webPage, faq],
  }
}

/** Serialises JSON-LD safely for a <script> tag */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
