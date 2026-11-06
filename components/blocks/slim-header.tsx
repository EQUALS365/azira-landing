import { PhoneIcon } from "lucide-react"

import { HeaderBook } from "@/components/blocks/header-book"
import { Logo } from "@/components/logo"
import type { Clinic, ImageAsset } from "@/content/schema"

/**
 * Block 1: logo and phone only. No menu: nothing that leads off the page.
 * On desktop it stays pinned to the top, and a Book button joins the phone
 * once the enquiry form has scrolled away. Phones get the bottom action bar
 * instead, so the header scrolls away there.
 */
export function SlimHeader({
  logo,
  phone,
}: {
  logo: ImageAsset
  phone: Clinic["phone"]
}) {
  return (
    <header className="z-30 border-b border-copy bg-background md:sticky md:top-0">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Logo logo={logo} />
        <div className="flex items-center gap-6">
          <a
            href={`tel:${phone.dial}`}
            className="group flex min-h-11 items-center gap-2.5 text-foreground no-underline"
          >
            <PhoneIcon aria-hidden className="size-4 stroke-[1.5]" />
            <span className="caption hidden text-copy md:inline">
              Call the clinic
            </span>
            <span className="figures underline-draw text-[0.9375rem] tracking-[0.06em]">
              {phone.display}
            </span>
          </a>
          <HeaderBook />
        </div>
      </div>
    </header>
  )
}
