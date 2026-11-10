import type { MetadataRoute } from "next"
import { headers } from "next/headers"

import { indexedPagesForHost, pageOrigin } from "@/lib/seo"

/**
 * Per host: the live address (SITE_URL, or a treatment subdomain) gets its
 * sitemap once indexing is on; every other host (previews, vercel.app) asks
 * crawlers to stay out. Ad platform crawlers like AdsBot ignore the * group,
 * so ads still review fine.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const [page] = indexedPagesForHost((await headers()).get("host"))
  if (!page) return { rules: { userAgent: "*", disallow: "/" } }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${pageOrigin(page)}/sitemap.xml`,
  }
}
