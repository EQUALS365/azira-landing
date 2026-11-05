import { BookButton } from "@/components/cta"
import { Film } from "@/components/film"
import { FadeUp } from "@/components/motion"
import { Plate, WallLabel } from "@/components/plate"
import type { ConcernPage, Treatment } from "@/content/schema"
import { cn } from "@/lib/utils"

/**
 * Block 7: at most two options, with honest specs and a "from" price. The
 * clinic's film of the treatment, when there is one, leads the block.
 */
export function TreatmentOptions({
  treatments,
}: {
  treatments: ConcernPage["treatments"]
}) {
  const items = treatments.items.slice(0, 2)
  const single = items.length === 1

  return (
    <section
      aria-labelledby="treatments-heading"
      className="bg-room text-room-muted"
    >
      <FadeUp className="shell py-20 lg:py-32">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2
            id="treatments-heading"
            className="text-[2rem] leading-[1.12] text-room-foreground sm:text-[2.5rem] lg:col-span-6 lg:text-5xl"
          >
            {treatments.heading}
          </h2>
          <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed lg:col-span-5 lg:col-start-8">
            {treatments.intro}
          </p>
        </div>

        {treatments.film && (
          <Film
            video={treatments.film}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="mt-12 aspect-video lg:mt-16"
          />
        )}

        <div
          className={cn(
            "mt-12 grid gap-14 lg:mt-16",
            !single && "md:grid-cols-2 md:gap-8 lg:gap-12"
          )}
        >
          {items.map((treatment) => (
            <TreatmentPlate
              key={treatment.id}
              treatment={treatment}
              layout={single ? "split" : "stack"}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-room-foreground/20 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-[44ch] leading-relaxed">
            {single
              ? "Not sure it's right for you? That's what the consultation is for."
              : "Not sure which suits you? That's what the consultation is for."}
          </p>
          <BookButton size="cta" variant="inverse" className="sm:w-auto">
            Book consultation
          </BookButton>
        </div>
      </FadeUp>
    </section>
  )
}

/**
 * One option. "stack" sets the plate above the specs (two side by side);
 * "split" sets them side by side when the page has a single treatment.
 */
function TreatmentPlate({
  treatment,
  layout,
}: {
  treatment: Treatment
  layout: "stack" | "split"
}) {
  const specs = [
    ["Sessions", treatment.sessions],
    ["Downtime", treatment.downtime],
    ["Results", treatment.results],
    ["Best for", treatment.bestFor],
  ] as const
  const split = layout === "split"

  return (
    <article
      aria-labelledby={`treatment-${treatment.id}`}
      className={cn(split && "md:grid md:grid-cols-12 md:items-start md:gap-8")}
    >
      <figure className={cn(split && "md:col-span-6")}>
        <Plate
          image={treatment.image}
          sizes={
            split
              ? "(min-width: 768px) 50vw, 100vw"
              : "(min-width: 768px) 45vw, 100vw"
          }
          className="aspect-[4/3]"
        />
        {treatment.image.caption && (
          <WallLabel className="text-room-muted">
            {treatment.image.caption}
          </WallLabel>
        )}
      </figure>
      <div
        className={cn(
          split && "md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8"
        )}
      >
        <div
          className={cn(
            "mt-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3",
            split && "md:mt-0"
          )}
        >
          <div>
            <h3
              id={`treatment-${treatment.id}`}
              className="text-[1.75rem] leading-tight text-room-foreground sm:text-[2rem]"
            >
              {treatment.name}
            </h3>
            <p className="mt-1.5 text-sm text-room-muted">{treatment.kind}</p>
          </div>
          <p className="flex items-baseline gap-2.5 text-room-foreground">
            <span className="caption text-room-muted">From</span>
            <span className="figures font-heading text-[2.25rem] leading-none">
              {treatment.fromPrice === null
                ? "£[price]"
                : `£${treatment.fromPrice.toLocaleString("en-GB")}`}
            </span>
          </p>
        </div>
        <p className="mt-4 max-w-[46ch] leading-relaxed">{treatment.summary}</p>

        <dl className="mt-6 border-t border-room-foreground/25">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[7rem_1fr] gap-4 border-b border-room-foreground/15 py-3.5 sm:grid-cols-[8.5rem_1fr]"
            >
              <dt className="caption pt-0.5 text-room-muted">{label}</dt>
              <dd className="leading-snug text-room-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
