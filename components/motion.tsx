"use client"

import { LazyMotion, MotionConfig } from "motion/react"
import * as m from "motion/react-m"

const loadFeatures = () =>
  import("./motion-features").then((module) => module.default)

/** One easing for every moment: calm exponential ease-out */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const

/**
 * Loads only Motion's DOM animation features (LazyMotion + domAnimation),
 * fetched after the first paint, and honours prefers-reduced-motion: with it
 * set, Motion drops movement and keeps only short opacity changes.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}

/** Shared "once, when it's properly in view" trigger */
const ONCE = { once: true, amount: 0.2 } as const

/**
 * A list that arrives as a list: children (StaggerItem) rise in turn, about
 * 70ms apart. Use it only where the items are read in order (causes, steps,
 * the page index), never as a blanket section entrance.
 */
export function Stagger({
  children,
  className,
  as = "div",
  gap = 0.07,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "ol" | "ul"
  /** Seconds between items; keep the whole list under about a second */
  gap?: number
} & Pick<React.HTMLAttributes<HTMLElement>, "aria-label">) {
  const Tag = as === "ol" ? m.ol : as === "ul" ? m.ul : m.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={ONCE}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "li"
}) {
  const Tag = as === "li" ? m.li : m.div
  return (
    <Tag
      data-fade
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </Tag>
  )
}

/**
 * A ruled line that draws itself as its Stagger list arrives: "x" from the
 * left (ledger rules), "y" from the top (the cause axis).
 */
export function DrawnRule({
  axis,
  className,
}: {
  axis: "x" | "y"
  className?: string
}) {
  const transition = { duration: axis === "x" ? 0.7 : 1.1, ease: EASE_OUT }
  return (
    <m.span
      aria-hidden
      data-fade
      className={className}
      style={{ transformOrigin: axis === "x" ? "left" : "top" }}
      variants={
        axis === "x"
          ? { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition } }
          : { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition } }
      }
    />
  )
}

/**
 * The page's signature moment, "hanging the plate": a photograph is unveiled
 * once from the bottom edge up while the print settles from slightly close.
 * Never used on the hero (LCP). Reduced motion and no-JS show it at once
 * (see globals.css and the root layout).
 *
 * The viewport is watched by an unclipped wrapper: Chrome's
 * IntersectionObserver honours the target's own clip-path, so a plate clipped
 * to nothing would never count as "in view".
 */
export function RevealFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <m.div
        data-reveal
        className="size-full"
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 1, ease: EASE_OUT },
          },
        }}
      >
        <m.div
          className="relative size-full"
          variants={{
            hidden: { scale: 1.08 },
            visible: {
              scale: 1,
              transition: { duration: 1.6, ease: EASE_OUT },
            },
          }}
        >
          {children}
        </m.div>
      </m.div>
    </m.div>
  )
}

/**
 * Section fade-up on scroll: once, 12px, about 400ms. Never use it on the hero
 * headline, hero image or form, so LCP stays fast.
 */
export function FadeUp({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <m.div
      data-fade
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  )
}
