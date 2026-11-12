import Image from "next/image"
import { AwardIcon } from "lucide-react"

import { FadeUp } from "@/components/motion"
import type { Clinic } from "@/content/schema"
import { cn } from "@/lib/utils"

/** Block 5: borrowed credibility straight after the first screen, in grey */
export function TrustStrip({
  awards,
  logos,
}: {
  awards: Clinic["awards"]
  logos: Clinic["trustLogos"]
}) {
  // One logo sits beside the awards it stands for; several share a row
  const single = logos.length === 1
  return (
    <section
      aria-label="Awards and recognition"
      className="border-y border-hairline"
    >
      <FadeUp
        className={cn(
          "shell gap-6 py-8 lg:py-10",
          single
            ? "flex flex-col sm:flex-row sm:items-center sm:gap-8"
            : "grid lg:grid-cols-12 lg:items-center lg:gap-8"
        )}
      >
        <ul className={cn("grid gap-2", !single && "lg:col-span-4")}>
          {awards.map((award) => (
            <li
              key={award}
              className="flex items-start gap-2.5 text-foreground"
            >
              <AwardIcon
                aria-hidden
                className="mt-0.5 size-[1.125rem] shrink-0 stroke-[1.25] text-mark-ink"
              />
              <span className="leading-snug">{award}</span>
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            "grid gap-px border border-hairline bg-hairline",
            single
              ? "order-first w-60 shrink-0"
              : "grid-cols-2 sm:grid-cols-4 lg:col-span-8"
          )}
        >
          {logos.map((logo) => (
            <li
              key={logo.id}
              className={cn(
                "relative flex items-center justify-center bg-background px-4 grayscale",
                single ? "h-28 px-5" : "h-20"
              )}
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="240px"
                  className={cn(
                    "object-contain",
                    single ? "px-5 py-3 opacity-90" : "p-5 opacity-70"
                  )}
                />
              ) : (
                <span
                  data-placeholder={logo.id}
                  className="text-center text-sm leading-tight text-copy"
                >
                  <span className="caption block text-[0.6875rem]">
                    Logo placeholder
                  </span>
                  {logo.alt}
                </span>
              )}
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  )
}
