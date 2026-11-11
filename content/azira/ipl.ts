import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the Lumecca IPL page, written for review by the clinic.
// From the clinic's notes of 2026-11-12 ("Updates to landing pages"): it
// treats pigmentation, rosacea and vascular lesions; these appear through age
// spots, sun damage, a medical condition or broken capillaries; from £70; up
// to 3 sessions; and the before/afters sit higher on the page.
// From the clinic's InMode film (docs/azira-video-facts.md): Lumecca is an IPL
// device on the Optimas Max that treats vascular lesions, rosacea, sun damage
// and pigmentation, and needs fewer sessions than traditional IPL.
// The clinic confirmed on 2026-11-12: no downtime, one month between sessions
// and results are best after three sessions.
// Fields marked "draft" are typical figures to confirm with the clinic. The
// images are stills from that film until the clinic sends Lumecca photos.
export const ipl = {
  slug: "ipl",
  concern: "Lumecca IPL",
  showResults: true,
  hideResultsForMeta: false,
  meta: {
    title: "Lumecca IPL in Newport | Azira Aesthetics",
    description:
      "Nurse-led Lumecca IPL in Newport for pigmentation, rosacea and broken capillaries. Up to three sessions, starting with a complimentary consultation.",
    index: true,
  },
  hero: {
    defaultHeadline: "Lumecca IPL for clearer, more even-looking skin",
    intro:
      "Our award-winning nurses assess your pigmentation or redness first, then show you honest options and prices.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "pigmentation-treatment",
        headline: "Pigmentation treatment that starts with knowing the cause",
        intro:
          "Our award-winning nurses assess your pigmentation first. If Lumecca IPL suits your skin, you'll see honest options and prices before you decide.",
        concernOption: "Pigmentation or sun damage",
      },
      {
        adGroup: "rosacea-treatment",
        headline: "Calmer-looking skin for rosacea and redness",
        intro:
          "Our award-winning nurses assess your skin first. If Lumecca IPL suits you, you'll see honest options and prices before you decide.",
        concernOption: "Rosacea or redness",
      },
      {
        adGroup: "thread-veins",
        headline: "Broken capillaries treated with Lumecca IPL",
        intro:
          "Our award-winning nurses assess the area first, then show you honest options and prices.",
        concernOption: "Broken capillaries",
      },
    ],
    image: {
      id: "hero-ipl",
      src: "/assets/azira/hero-ipl.jpg",
      alt: "Grace, in black scrubs, standing beside the InMode Optimas Max in the treatment room",
      note: "Interim still from the InMode film: Grace beside the Optimas Max. Replace with a Lumecca treatment shot when the clinic sends one",
      caption: "Lumecca IPL · Treatment room",
    },
  },
  form: {
    title: "Tell us about your skin",
    intro:
      "A team member will call you back to talk it through, with no obligation.",
    concernLabel: "What you'd like to improve",
    concernOptions: [
      "Pigmentation or sun damage",
      "Rosacea or redness",
      "Broken capillaries",
      "Not sure yet",
    ],
    defaultOption: "Not sure yet",
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Why pigmentation and redness appear",
    intro:
      "Uneven tone usually comes down to one of four things. We look at which applies to you before suggesting anything.",
    items: [
      {
        title: "Sun damage",
        body: "Years of sun exposure leave patches of uneven pigment, most often on the face, chest and hands.",
      },
      {
        title: "Age spots",
        body: "Flat, darker spots that build up over time on skin that has seen the most sun.",
      },
      {
        title: "A medical condition",
        body: "Conditions such as rosacea cause lasting redness and flushing, usually across the cheeks and nose.",
      },
      {
        title: "Broken capillaries",
        body: "Small blood vessels close to the surface widen and show through as fine red lines.",
      },
    ],
  },
  treatments: {
    heading: "Lumecca IPL at Azira",
    intro:
      "Watch Grace introduce Lumecca on our InMode Optimas Max. Your nurse sets the treatment to suit your skin, and you'll see your exact price before you decide.",
    film: {
      id: "film-ipl",
      title: "Lumecca IPL at Azira Aesthetics, with Grace",
      description:
        "Grace, Clinical Director at Azira Aesthetics in Newport, introduces Lumecca IPL on the InMode Optimas Max for vascular lesions, rosacea, sun damage and pigmentation.",
      durationSeconds: 17,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-ipl",
        src: "/assets/azira/poster-film-ipl.jpg",
        alt: "Grace in the treatment room, talking about Lumecca IPL",
        note: "Still from the InMode film: Grace talking about Lumecca",
      },
      src: "/assets/azira/film-ipl.mp4",
    },
    items: [
      {
        id: "lumecca",
        name: "Lumecca IPL",
        kind: "Intense pulsed light",
        image: {
          id: "treatment-lumecca",
          src: "/assets/azira/treatment-lumecca.jpg",
          alt: "The touchscreen of the InMode Optimas Max",
          note: "Interim still from the InMode film: the Optimas Max screen. Replace with the Lumecca handpiece in use when the clinic sends one",
          caption: "InMode Optimas Max · Treatment room",
        },
        summary:
          "Intense pulsed light on our InMode Optimas Max. It targets pigment and visible blood vessels to even out tone, and needs fewer sessions than traditional IPL.",
        // Clinic's figures, 2026-11-12
        sessions: "Up to 3, one month apart",
        downtime: "None",
        results: "Best after 3 sessions",
        bestFor: "Pigmentation, rosacea and vascular lesions",
        // Clinic's price, 2026-11-12
        fromPrice: 70,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You have pigmentation, age spots or sun damage you'd like to fade",
      "You have rosacea, redness or broken capillaries",
      "You can commit to a course of up to three sessions and the aftercare",
      // draft: typical requirement, confirm with clinic
      "You can keep the area out of the sun and free of fake tan around your sessions",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      // draft: typical requirement, confirm with clinic
      "The area is tanned, or has fake tan on it. We'll wait until it has faded",
      "Another treatment would suit your skin better. We'll tell you honestly and explain why",
      // Clinic's wording, 2026-11-12
      "A contraindication or implanted device. We check this at your consultation",
    ],
  },
  clinicianId: 0,
  results: {
    heading: "Lumecca IPL results from our clinic",
    // The clinic asked for these higher on the page (2026-11-12)
    placement: "early",
    items: [
      // Real results from the clinic's shared folder ("Pictures / IPL -
      // Lumecca"); consent confirmed by the agency for the clinic on
      // 2026-11-12. Shown as the clinic framed them, before above after
      {
        kind: "photo",
        treatmentId: "lumecca",
        layout: "stacked",
        consentConfirmed: true,
        before: {
          id: "result-ipl-1-before",
          alt: "A woman's cheek before Lumecca IPL, with patches of brown pigmentation",
          note: "Lumecca IPL, pigmentation on the cheek, before",
          src: "/assets/azira/result-ipl-1-before.jpg",
        },
        after: {
          id: "result-ipl-1-after",
          alt: "The same cheek after Lumecca IPL, with a more even skin tone",
          note: "Lumecca IPL, pigmentation on the cheek, after",
          src: "/assets/azira/result-ipl-1-after.jpg",
        },
      },
      {
        kind: "photo",
        treatmentId: "lumecca",
        layout: "stacked",
        consentConfirmed: true,
        before: {
          id: "result-ipl-2-before",
          alt: "A woman's cheek before Lumecca IPL, with redness across the cheek",
          note: "Lumecca IPL, redness on the cheek, before",
          src: "/assets/azira/result-ipl-2-before.jpg",
        },
        after: {
          id: "result-ipl-2-after",
          alt: "The same cheek after Lumecca IPL, with less redness",
          note: "Lumecca IPL, redness on the cheek, after",
          src: "/assets/azira/result-ipl-2-after.jpg",
        },
      },
      {
        kind: "photo",
        treatmentId: "lumecca",
        layout: "stacked",
        consentConfirmed: true,
        before: {
          id: "result-ipl-3-before",
          alt: "A woman's nose and cheeks before Lumecca IPL, with visible broken capillaries",
          note: "Lumecca IPL, broken capillaries on the nose and cheeks, before",
          src: "/assets/azira/result-ipl-3-before.jpg",
        },
        after: {
          id: "result-ipl-3-after",
          alt: "The same nose and cheeks after Lumecca IPL, with fewer visible capillaries",
          note: "Lumecca IPL, broken capillaries on the nose and cheeks, after",
          src: "/assets/azira/result-ipl-3-after.jpg",
        },
      },
    ],
  },
  steps: {
    heading: "What happens when you get in touch",
    items: [
      {
        title: "We call you back",
        body: "A team member rings to understand what you've noticed and answer your first questions.",
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
    heading: "Lumecca IPL questions, answered",
    items: [
      {
        question: "How many Lumecca IPL sessions will I need?",
        answer:
          "You need up to three sessions, one month apart. Lumecca needs fewer sessions than traditional IPL. Your nurse will confirm the right number for your skin at your consultation.",
      },
      {
        question: "How much does Lumecca IPL cost?",
        answer:
          "Lumecca IPL starts from £70. Your exact price depends on the area and the number of sessions you need, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "Does Lumecca IPL hurt?",
        // draft: typical description, confirm with clinic
        answer:
          "Most people describe each pulse as a quick, warm snap, like an elastic band against the skin. Your nurse checks in with you throughout and can pause at any time.",
      },
      {
        question: "Is there downtime?",
        answer:
          "No. There's no downtime, so you can go straight back to your day. Your nurse will give you aftercare to follow.",
      },
      {
        question: "When will I see results?",
        answer:
          "Results are best after three sessions. Results vary from person to person, and we'll be honest about what your skin can achieve.",
      },
      {
        question: "Who is Lumecca IPL not suitable for?",
        // Clinic's wording, 2026-11-12
        answer:
          "We won't treat you if you have a contraindication or an implanted device. We check this at your consultation.",
      },
    ],
  },
  closing: {
    headline: "Clearer skin starts with a conversation",
    body: "Tell us what you'd like to improve. A team member will call you back, and you'll know your options and price before you commit to anything.",
  },
} satisfies ConcernPageInput
