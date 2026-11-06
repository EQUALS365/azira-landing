"use client"

import { useEffect, useState } from "react"

import { BookButton, ENQUIRY_ANCHOR } from "@/components/cta"
import { cn } from "@/lib/utils"

/**
 * The sticky header's Book button (desktop only). It stays out of the way
 * while the enquiry form is on screen and fades in once the form has scrolled
 * up under the header, so the way back to the form is always one click away.
 * Like every Book button, it scrolls to the form; it never leaves the page.
 */
export function HeaderBook() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const form = document.getElementById(ENQUIRY_ANCHOR)
    if (!form) return
    const observer = new IntersectionObserver(
      ([entry]) =>
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      // The header is 4rem tall: count the form as gone once it's under it
      { rootMargin: "-64px 0px 0px 0px" }
    )
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      inert={!show}
      className={cn(
        "hidden transition-[opacity,translate] duration-300 ease-gallery motion-reduce:transition-none md:block",
        show ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
      )}
    >
      <BookButton size="cta" className="h-10 px-5">
        Book a consultation
      </BookButton>
    </div>
  )
}
