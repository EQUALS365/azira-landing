import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the Morpheus8 resurfacing page, written for review by the
// clinic. Served at morpheus8.azira-aesthetics.co.uk. The angle is skin
// quality (texture, pores, scarring, fine lines, dullness); lifting and
// sagging are covered by the RF microneedling page.
// From the clinic's own videos (docs/azira-video-facts.md): the resurfacing
// tip works on the upper layers to stimulate collagen and elastin, Grace's
// list of who it suits, an hour of numbing cream first, Dermalux LED
// aftercare, three treatments for optimum results, delivery by medical
// professionals, HIW registration and the complimentary consultation.
// Fields marked "draft" are typical figures to confirm; prices and anything
// else the clinic hasn't told us stay bracketed.
export const morpheus8 = {
  slug: "morpheus8",
  concern: "Morpheus8",
  subdomain: "morpheus8",
  showResults: true,
  hideResultsForMeta: false,
  meta: {
    title: "Morpheus8 Resurfacing in Newport | Azira Aesthetics",
    description:
      "Nurse-led Morpheus8 resurfacing in Newport to improve acne scarring, open pores, fine lines and uneven texture. Honest prices and a complimentary consultation.",
    index: true,
  },
  hero: {
    defaultHeadline:
      "Morpheus8 resurfacing for smoother, brighter-looking skin",
    intro:
      "Nurse-led Morpheus8 in Newport. Our award-winning nurses assess your skin first, then show you honest options and prices.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "acne-scarring",
        headline: "Acne scarring treatment that works with your own collagen",
        intro:
          "Morpheus8 resurfacing stimulates new collagen in the upper layers of the skin to soften the look of scarring. Our nurses assess your skin first, then show you honest options and prices.",
        concernOption: "Acne or other scarring",
      },
      {
        adGroup: "skin-texture",
        headline: "Smoother texture and less noticeable pores",
        intro:
          "Our award-winning nurses use Morpheus8 resurfacing to refine uneven texture and open pores, after assessing your skin first.",
        concernOption: "Texture and open pores",
      },
      {
        adGroup: "dull-skin",
        headline: "For skin that's lost its glow",
        intro:
          "Morpheus8 resurfacing helps stimulate collagen and elastin for fresher, brighter-looking skin. Our nurses assess your skin first, then show you honest options and prices.",
        concernOption: "Dull skin that's lost its glow",
      },
    ],
    image: {
      id: "hero-morpheus8",
      src: "/assets/azira/hero-morpheus8.jpg",
      alt: "Grace, in black scrubs and blue gloves, treating a patient's face with the Morpheus8 handpiece",
      note: "Grace in black scrubs and blue gloves treating a patient's face with the Morpheus8 handpiece, from the clinic's film",
      caption: "Morpheus8 resurfacing · Newport",
    },
  },
  form: {
    title: "Tell us about your skin",
    intro: "A nurse will call you back to talk it through, with no obligation.",
    concernLabel: "What you'd like to improve",
    concernOptions: [
      "Acne or other scarring",
      "Texture and open pores",
      "Fine lines",
      "Dull skin that's lost its glow",
      "Not sure yet",
    ],
    defaultOption: "Not sure yet",
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Why skin loses its smoothness and glow",
    intro:
      "Texture, scarring and dullness usually come down to a few changes beneath the surface. We look at which ones apply to you before suggesting anything.",
    items: [
      {
        title: "Collagen slows",
        body: "With age we make less collagen and elastin, so skin looks thinner, less firm and fine lines settle in.",
      },
      {
        title: "Scarring",
        body: "Deep or inflamed spots can damage the collagen beneath them as they heal, leaving dips and uneven texture.",
      },
      {
        title: "Enlarged pores",
        body: "Pores look larger when the skin around them loses its support, and oily skin tends to show them more.",
      },
      {
        title: "Slower renewal",
        body: "Skin cells renew more slowly with age and sun exposure, so dull cells linger on the surface and skin loses its glow.",
      },
    ],
  },
  treatments: {
    heading: "Morpheus8 resurfacing at Azira",
    intro:
      "Watch Grace perform a Morpheus8 resurfacing treatment, through to the LED aftercare. Every treatment here is delivered by medical professionals, and you'll see your exact price before you decide.",
    film: {
      id: "film-morpheus8",
      title: "Morpheus8 resurfacing at Azira Aesthetics",
      description:
        "Grace performs a Morpheus8 resurfacing treatment on patient Eva, who explains why she trusts the clinic, followed by a Dermalux LED aftercare session.",
      durationSeconds: 67,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-morpheus8",
        src: "/assets/azira/poster-film-morpheus8.jpg",
        alt: "The Morpheus8 resurfacing tip on a patient's forehead, the InMode screen behind",
        note: "Morpheus8 resurfacing tip on the forehead, InMode screen behind, from the Morpheus8 film",
      },
      src: "/assets/azira/film-morpheus8.mp4",
    },
    items: [
      {
        id: "morpheus8",
        name: "Morpheus8",
        kind: "Radiofrequency microneedling",
        image: {
          id: "treatment-morpheus8",
          src: "/assets/azira/treatment-morpheus8.jpg",
          alt: "A gloved hand holding the Morpheus8 handpiece to a patient's forehead",
          note: "Close-up: gloved hand holding the Morpheus8 handpiece to a patient's forehead",
          caption: "Morpheus8 resurfacing · Treatment room",
        },
        summary:
          "Radiofrequency and microneedling in one treatment. The resurfacing tip focuses on the upper layers of the skin to help stimulate collagen and elastin.",
        // draft: typical figure, confirm with clinic (the 3 treatments are from the clinic's video; the spacing is not)
        sessions: "3 for optimum results, about 4 to 6 weeks apart",
        // draft: typical figure, confirm with clinic
        downtime: "Redness for 1 to 3 days, calmed by LED aftercare",
        // draft: typical figure, confirm with clinic
        results: "Build gradually over around 3 months",
        bestFor:
          "Uneven texture, open pores, acne and other scarring, fine lines and dull skin",
        fromPrice: null,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You'd like to improve texture, open pores, scarring, fine lines or dull skin",
      "You want a gradual change that still looks like you",
      "You can commit to a course of three treatments and the aftercare",
      "You're in good general health",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      "You have an active breakout, cold sore or skin infection in the area. We'll wait until it has settled",
      "A medical condition, medication or implanted device such as a pacemaker makes treatment unsafe. We check this at your consultation",
      "Another treatment would suit your skin better. We'll tell you honestly and explain why",
    ],
  },
  clinicianId: 0,
  results: {
    heading: "Morpheus8 results from our clinic",
    items: [
      {
        kind: "placeholder",
        treatmentId: "morpheus8",
        sessions: "[3 sessions]",
        timeBetweenPhotos: "[12 weeks]",
        note: "Consented before/after: acne scarring on the cheeks. Across the three, show a range of skin tones",
      },
      {
        kind: "placeholder",
        treatmentId: "morpheus8",
        sessions: "[3 sessions]",
        timeBetweenPhotos: "[12 weeks]",
        note: "Consented before/after: skin texture and open pores. Across the three, show a range of skin tones",
      },
      {
        kind: "placeholder",
        treatmentId: "morpheus8",
        sessions: "[3 sessions]",
        timeBetweenPhotos: "[12 weeks]",
        note: "Consented before/after: fine lines or dull skin. Across the three, show a range of skin tones",
      },
    ],
  },
  steps: {
    heading: "What happens when you get in touch",
    items: [
      {
        title: "We call you back",
        body: "A nurse rings to understand what you've noticed and answer your first questions.",
      },
      {
        title: "Your consultation",
        body: "A face-to-face assessment of your skin, your medical history and what you'd like to change. Your consultation is complimentary.",
      },
      {
        title: "Your written plan",
        body: "Your options, the number of sessions and the exact price, in writing to take away.",
      },
      {
        title: "You decide",
        body: "Take your time. There's no pressure to book on the day.",
      },
    ],
  },
  faqs: {
    heading: "Morpheus8 questions, answered",
    items: [
      {
        question: "How many Morpheus8 sessions will I need?",
        // draft: typical figure, confirm with clinic (the spacing; three treatments is from the clinic's video)
        answer:
          "We recommend three treatments for optimum results, usually about four to six weeks apart. Your nurse will confirm the right number for your skin at your consultation.",
      },
      {
        question: "Does Morpheus8 hurt?",
        answer:
          "We apply numbing cream for an hour before we start, so you shouldn't feel too much. Your nurse checks in with you throughout and can pause at any time.",
      },
      {
        question: "Is there downtime?",
        // draft: typical figure, confirm with clinic
        answer:
          "Most people have some redness for one to three days. We finish with a Dermalux LED session to calm your skin, reduce the redness and enhance your results. We'll plan your sessions around your diary.",
      },
      {
        question: "How much does Morpheus8 cost in Newport?",
        answer:
          "Morpheus8 resurfacing starts from £[price]. Your exact price depends on the area and the number of sessions you need, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "When will I see results?",
        // draft: typical figure, confirm with clinic
        answer:
          "Morpheus8 works by stimulating your own collagen, so change is gradual and builds over around three months. Results vary from person to person, and we'll be honest about what your skin can achieve.",
      },
      {
        question: "Who is Morpheus8 not suitable for?",
        answer:
          "We won't treat you while you're pregnant or breastfeeding, or if you have an active breakout or infection in the area. Some medical conditions, medications and implanted devices also rule it out. We check all of this at your consultation.",
      },
    ],
  },
  closing: {
    headline: "Your skin, in safe hands",
    body: "Tell us what you'd like to improve. A nurse will call you back, and you'll know your options and price before you commit to anything.",
  },
} satisfies ConcernPageInput
