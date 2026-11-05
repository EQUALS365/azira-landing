import type { Metadata } from "next"
import { ArrowUpRightIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content"
import { subdomainHost } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Treatment pages | ${site.clinic.name}`,
  robots: { index: false, follow: false },
}

/**
 * The root of the main deployment (not an ad landing page): every concern
 * page, each opening in a new tab. Treatment subdomains never show this;
 * their root is their own page (see proxy.ts).
 */
export default function TreatmentIndex() {
  return (
    <main className="min-h-dvh bg-background">
      <div className="shell py-12 lg:py-20">
        <Logo logo={site.brand.logo} />
        <h1 className="mt-12 text-[2.25rem] leading-[1.1] sm:text-5xl">
          Treatment pages
        </h1>
        <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-copy">
          Each page is built for one advert and opens in a new tab. Pages with a
          subdomain will also answer at their own address once its DNS record is
          live.
        </p>

        <ul className="mt-12 border-t border-copy">
          {site.concerns.map((page) => {
            const host = subdomainHost(page)
            return (
              <li
                key={page.slug}
                className="grid gap-4 border-b border-hairline py-6 md:grid-cols-12 md:items-center md:gap-8"
              >
                <div className="md:col-span-7">
                  <h2 className="text-2xl leading-tight">{page.concern}</h2>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-copy">
                    {page.hero.defaultHeadline}
                  </p>
                  <p className="caption mt-3 text-mark-ink">
                    {host ?? "No subdomain"}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 md:col-span-5 md:justify-end">
                  <a
                    href={`/${page.slug}`}
                    target="_blank"
                    rel="noopener"
                    className={cn(buttonVariants({ size: "cta" }), "gap-2")}
                  >
                    Open page
                    <ArrowUpRightIcon aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  {host && (
                    <a
                      href={`https://${host}/`}
                      target="_blank"
                      rel="noopener"
                      className={cn(
                        buttonVariants({ size: "cta", variant: "outline" }),
                        "gap-2"
                      )}
                    >
                      Subdomain
                      <ArrowUpRightIcon aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
