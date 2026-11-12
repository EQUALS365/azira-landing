import type { ClinicInput } from "../schema"

// Shared across every concern page.
// Phone, address, awards and "NMC-registered nurses" are taken from
// azira-aesthetics.co.uk and need confirming with the clinic. The team,
// HIW registration and complimentary consultation come from the clinic's own
// videos (docs/azira-video-facts.md). Bracketed values are placeholders:
// never replace them with invented facts.
export const clinic = {
  name: "Azira Aesthetics",
  website: "https://www.azira-aesthetics.co.uk/",
  domain: "azira-aesthetics.co.uk",
  phone: { display: "01633 258 080", dial: "+441633258080" },
  address: "135 Commercial Street, Newport NP20 1LY",
  location: "Newport",
  credentials: [
    { label: "Best Clinic in Wales 2025", award: true },
    { label: "Registered nurses (NMC)" },
    { label: "HIW registered clinic" },
    { label: "Nurse-led clinic" },
  ],
  consultationFee: "Your consultation is complimentary.",
  // Confirmed by the clinic, 2026-11-12
  callbackPromise: "We call back within one working day.",
  awards: [
    "Winner, Best Clinic in Wales 2025",
    "Highly Commended, Best Clinic in Wales 2024",
  ],
  trustLogos: [
    {
      id: "trust-award-2025",
      // The clinic named the awards body on 2026-11-12; the logo file is
      // still to come
      alt: "Safety in Beauty Awards",
      note: "Safety in Beauty Awards logo",
    },
    {
      id: "trust-award-2024",
      alt: "[Awards body] 2024",
      note: "Award logo: Highly Commended 2024",
    },
    {
      id: "trust-press-1",
      alt: "[Publication]",
      note: "Press or review platform logo",
    },
    {
      id: "trust-press-2",
      alt: "[Publication]",
      note: "Press or review platform logo",
    },
  ],
  // 0: Grace, 1: Aylish. Quotes are their own words from their intro videos.
  clinicians: [
    {
      name: "Grace",
      qualifications:
        "Registered Nurse and Independent Nurse Prescriber. Owner of Azira Aesthetics and Azira Aesthetics Academy. Founding Director of The Aesthetics Network and Key Opinion Leader for Croma Pharma.",
      portrait: {
        id: "portrait-grace",
        alt: "Grace, owner and Clinical Director, in the Azira Aesthetics clinic",
        note: "Grace in clinic, from her intro video",
        caption: "Grace · Owner and Clinical Director",
        src: "/assets/azira/portrait-grace.jpg",
      },
      philosophy:
        "Within our clinic we are passionate about providing safe results. We only use the highest-grade medical products, and all of our products are prescribed from independent aesthetic pharmacies.",
      qualification: "Independent Nurse Prescriber",
      role: "Owner and Clinical Director",
      years: "11+ years nursing, from intensive care",
      video: {
        id: "intro-grace",
        title: "Meet Grace, owner and Clinical Director",
        description:
          "Grace introduces Azira Aesthetics: a nurse-led, HIW-registered clinic in Newport, and how the team works.",
        durationSeconds: 41,
        uploadDate: "2026-11-05",
        poster: {
          id: "portrait-grace",
          alt: "Grace, owner and Clinical Director, in the Azira Aesthetics clinic",
          note: "Grace in clinic, from her intro video",
          src: "/assets/azira/portrait-grace.jpg",
        },
        src: "/assets/azira/intro-grace.mp4",
      },
    },
    {
      name: "Aylish",
      qualifications: "Registered Nurse at Azira Aesthetics.",
      portrait: {
        id: "portrait-aylish",
        alt: "Aylish, aesthetics nurse, in the Azira Aesthetics clinic",
        note: "Aylish in clinic, from her intro video",
        caption: "Aylish · Aesthetics Nurse",
        src: "/assets/azira/portrait-aylish.jpg",
      },
      philosophy:
        // Said of microneedling in her intro; confirm she's happy for it to
        // stand as her approach
        "What I like about it is that it's evidence-based, and it can really make a big difference.",
      qualification: "Registered Nurse",
      role: "Aesthetics Nurse",
      years: "Nursing since 2016, aesthetics since 2023",
      video: {
        id: "intro-aylish",
        title: "Meet Aylish, aesthetics nurse",
        description:
          "Aylish, a nurse at Azira Aesthetics since 2023, on her favourite treatments and why she works in aesthetics.",
        durationSeconds: 43,
        uploadDate: "2026-11-05",
        poster: {
          id: "portrait-aylish",
          alt: "Aylish, aesthetics nurse, in the Azira Aesthetics clinic",
          note: "Aylish in clinic, from her intro video",
          src: "/assets/azira/portrait-aylish.jpg",
        },
        src: "/assets/azira/intro-aylish.mp4",
      },
    },
  ],
  privacyNotice: [
    "We use the details you send only to reply to your enquiry and arrange a consultation. We don't add you to marketing lists unless you ask us to.",
    "Your enquiry also records which advert and page brought you here, so we can tell which adverts help people find us. It doesn't identify you on other websites.",
    "While you fill in the form, your answers are kept in this browser tab so they survive a reload. They are cleared when you send the form or close the tab.",
    "With your permission, we use cookies (the Meta Pixel) to see which adverts bring people to this page. They stay off unless you accept, and you can change your choice at any time with Cookie settings at the foot of the page.",
    // The clinic has no published privacy policy or set retention period
    // (2026-11-12). Add a link and the period here when it has them
    "You can ask us to delete your enquiry details at any time by calling the clinic.",
  ],
} satisfies ClinicInput
