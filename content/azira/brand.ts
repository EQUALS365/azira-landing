import type { BrandInput } from "../schema"

// Azira Aesthetics brand, taken from azira-aesthetics.co.uk (Wix theme) on
// 2026-10-17. Only the brand comes across: their site menu, layout, popup
// discount and stock imagery do not (see the landing page rules in CLAUDE.md).
export const brand = {
  source: "https://www.azira-aesthetics.co.uk/",
  logo: {
    id: "logo",
    alt: "Azira Aesthetics",
    note: "Azira Aesthetics logo: ask the clinic for SVG or a high-res PNG",
  },
  colours: {
    // "Stone & Espresso", chosen by the clinic from the colour review on
    // 2026-11-06 (the "cream brown" scheme): warm stone panels, deep espresso
    // bands and a latte accent.
    surface: "#ffffff",
    ink: "#1b1714",
    text: "#4a433d",
    panel: "#f3f0ec",
    hairline: "#d8d1c9",
    line: "#4a433d",
    room: "#26201c",
    roomInk: "#ffffff",
    roomText: "#c8beb4",
    accent: "#b39a7c",
    accentInk: "#76603f",
    destructive: "#b3261e",
  },
  // Square corners, like the outlined buttons on their site
  radius: "0rem",
  button: { textTransform: "uppercase", letterSpacing: "0.16em" },
  fonts: {
    heading: "Quicksand (their heading face)",
    body: "Jost, the closest Google Font to the Futura and Avenir on their site",
  },
  photoStyle:
    "The clinic's own photography: black-gloved hands at work, instruments, neutral and skin tones on clean or dark grounds. Never stock.",
  voice: [
    "Calm, expert and reassuring; nurse-led rather than salesy",
    "Plain English with clinical accuracy; no hype or guarantees",
    "Natural results: looking like yourself, not looking done",
  ],
} satisfies BrandInput
