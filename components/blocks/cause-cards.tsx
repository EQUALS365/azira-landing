import { DrawnRule, FadeUp, Stagger, StaggerItem } from "@/components/motion"
import type { ConcernPage } from "@/content/schema"

/**
 * Block 6: explain the cause, not the treatment. The four causes read as a
 * section through the face, from the surface you see down to the bone; the
 * axis labels carry the order, so the causes need no numbers. As it scrolls
 * in, the gold axis draws downward and each layer arrives as the line
 * reaches it.
 */
export function CauseCards({ causes }: { causes: ConcernPage["causes"] }) {
  return (
    <section aria-labelledby="causes-heading">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <FadeUp className="lg:col-span-5">
          <div className="lg:sticky lg:top-12">
            <h2
              id="causes-heading"
              className="text-[2rem] leading-[1.12] sm:text-[2.5rem] lg:text-5xl"
            >
              {causes.heading}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed">
              {causes.intro}
            </p>
          </div>
        </FadeUp>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="caption text-mark-ink" aria-hidden>
            Surface
          </p>
          <Stagger className="relative mt-3" gap={0.24}>
            <DrawnRule
              axis="y"
              className="absolute inset-y-0 left-0 w-px bg-mark"
            />
            <ol
              aria-label="From the surface to the deepest layer"
              className="pb-2"
            >
              {causes.items.map((cause) => (
                <StaggerItem
                  as="li"
                  key={cause.title}
                  className="relative pt-1 pl-8 not-last:pb-12 sm:pl-12"
                >
                  <span
                    aria-hidden
                    className="absolute top-[1.15rem] left-0 h-px w-5 bg-mark sm:w-8"
                  />
                  <h3 className="text-[1.75rem] leading-tight sm:text-[2rem]">
                    {cause.title}
                  </h3>
                  <p className="mt-2 max-w-[48ch] leading-relaxed">
                    {cause.body}
                  </p>
                </StaggerItem>
              ))}
            </ol>
          </Stagger>
          <p className="caption mt-3 text-mark-ink" aria-hidden>
            Deep
          </p>
        </div>
      </div>
    </section>
  )
}
