import type { MetadataRoute } from "next"
import { headers } from "next/headers"

import { pageForHost, pageOrigin, shouldIndex } from "@/lib/seo"

/**
 * Per host: a treatment subdomain that may be indexed gets its sitemap;
 * every other host (previews, vercel.app) asks crawlers to stay out. Ad
 * platform crawlers like AdsBot ignore the * group, so ads still review fine.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const page = pageForHost((await headers()).get("host"))
  if (!page || !shouldIndex(page)) {
    return { rules: { userAgent: "*", disallow: "/" } }
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${pageOrigin(page)}/sitemap.xml`,
  }
}
