import type { Metadata } from "next"
import { ArrowUpRightIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { MotionProvider, Stagger, StaggerItem } from "@/components/motion"
import { Plate, WallLabel } from "@/components/plate"
import { buttonVariants } from "@/components/ui/button"
import { site } from "@/content"
import { liveUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: `Treatment pages | ${site.clinic.name}`,
  robots: { index: false, follow: false },
}

const nudge =
  "transition-transform duration-300 ease-gallery group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 motion-reduce:transition-none"

/**
 * The root of the main deployment (not an ad landing page): every concern
 * page hung as a plate, each opening in a new tab. The live address (SITE_URL)
 * sends its root to the clinic's website instead, and treatment subdomains
 * show this; their root is their own page (see proxy.ts).
 */
export default function TreatmentIndex() {
  return (
    <MotionProvider>
      <header className="border-b border-copy">
        <div className="shell flex h-16 items-center">
          <Logo logo={site.brand.logo} />
        </div>
      </header>
      <main className="bg-background">
        <div className="shell py-14 lg:py-24">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
            <h1 className="text-[2.5rem] leading-[1.08] sm:text-6xl lg:col-span-6 lg:text-7xl">
              Treatment pages
            </h1>
            <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed lg:col-span-5 lg:col-start-8">
              One page for each advert, in {site.clinic.name}&apos;s own
              photography. Each opens in a new tab, and also answers at its live
              address once the DNS record is in place.
            </p>
          </div>

          <Stagger
            as="ul"
            gap={0.09}
            className="mt-12 grid gap-x-8 gap-y-16 border-t border-copy pt-10 md:grid-cols-2 lg:mt-16 lg:pt-12 xl:grid-cols-3"
          >
            {site.concerns.map((page) => {
              const live = liveUrl(page)
              return (
                <StaggerItem as="li" key={page.slug}>
                  <figure>
                    <a
                      href={`/${page.slug}`}
                      target="_blank"
                      rel="noopener"
                      tabIndex={-1}
                      aria-hidden
                      className="block"
                    >
                      <Plate
                        reveal
                        zoom
                        image={page.hero.image}
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="aspect-[4/3]"
                      />
                    </a>
                    <WallLabel className="text-mark-ink">
                      {live?.replace(/^https:\/\//, "") ??
                        "Live address not set"}
                    </WallLabel>
                  </figure>
                  <h2 className="mt-6 text-[1.75rem] leading-tight sm:text-[2rem]">
                    {page.concern}
                  </h2>
                  <p className="mt-2 max-w-[44ch] leading-relaxed">
                    {page.hero.defaultHeadline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <a
                      href={`/${page.slug}`}
                      target="_blank"
                      rel="noopener"
                      className={buttonVariants({ size: "cta" })}
                    >
                      Open page
                      <ArrowUpRightIcon aria-hidden className={nudge} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener"
                        className={buttonVariants({
                          size: "cta",
                          variant: "outline",
                        })}
                      >
                        Live address
                        <ArrowUpRightIcon aria-hidden className={nudge} />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </main>
    </MotionProvider>
  )
}
