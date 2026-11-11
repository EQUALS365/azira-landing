import { NextResponse, type NextRequest } from "next/server"

import {
  getConcern,
  getConcernByAlias,
  getVariant,
  type ConcernPage,
} from "@/content"
import { site } from "@/content"
import { isSiteHost, pageForHost, subdomainHost } from "@/lib/seo"
import { isMetaTraffic, readAdGroup } from "@/lib/tracking"

/**
 * Keeps concern pages fully static while matching the ad:
 * - Pages live at /<slug> (offers.<clinic domain>/morpheus8). A page that
 *   sets a treatment subdomain (morpheus8.<clinic domain>) is served at that
 *   root instead, with the address bar unchanged.
 * - /<concern>?h=<ad group> is rewritten to a prebuilt variant, so the
 *   visitor gets the matched headline in the first HTML.
 * - Meta traffic gets a variant without results when the page asks for it.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get("host")
  const hostPage = pageForHost(host)

  if (hostPage) {
    // The subdomain root is the page; keep its address clean
    if (pathname === "/") return servePage(request, hostPage)
    if (pathname === `/${hostPage.slug}`) {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url, 308)
    }
  } else if (pathname === "/") {
    // No advert points at the bare live address (offers.<domain>), so it
    // sends visitors to the clinic's own website: temporary (307) in case the
    // clinic wants a page there later. Previews and vercel.app keep the index
    // of treatment pages (app/page.tsx) for review.
    if (isSiteHost(host) && site.clinic.website) {
      return NextResponse.redirect(site.clinic.website, 307)
    }
    return NextResponse.next()
  }

  const page = getConcern(pathname.slice(1))
  if (!page) {
    // A retired address (a page merged into another) leads to its new home.
    // Temporary (307) so the clinic can bring the old page back; the query
    // string, and with it the ad tracking, is kept.
    const merged = getConcernByAlias(pathname.slice(1))
    if (!merged) return NextResponse.next()
    const url = request.nextUrl.clone()
    url.pathname = `/${merged.slug}`
    return NextResponse.redirect(url, 307)
  }

  // On a clinic subdomain, another treatment's path goes to its own subdomain
  const ownHost = subdomainHost(page)
  if (hostPage && ownHost && ownHost !== host?.split(":")[0]) {
    const url = new URL(`https://${ownHost}/`)
    url.search = request.nextUrl.search
    return NextResponse.redirect(url, 308)
  }

  return servePage(request, page)
}

/** The default page, or its prebuilt variant for the ad group and audience */
function servePage(request: NextRequest, page: ConcernPage) {
  const { pathname, searchParams } = request.nextUrl
  const adGroup = readAdGroup(searchParams)
  const headline = getVariant(page, adGroup) ? adGroup! : "default"
  const audience =
    page.hideResultsForMeta && isMetaTraffic(searchParams) ? "meta" : "all"

  const url = request.nextUrl.clone()
  if (headline === "default" && audience === "all") {
    if (pathname === `/${page.slug}`) return NextResponse.next()
    url.pathname = `/${page.slug}`
  } else {
    url.pathname = `/${page.slug}/v/${headline}/${audience}`
  }
  return NextResponse.rewrite(url)
}

export const config = {
  // Page routes only: skip Next internals, assets and files with extensions
  matcher: ["/((?!_next/|assets/|favicon.ico|.*\\..*).*)"],
}
