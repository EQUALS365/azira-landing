import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the RF microneedling page, written for review by the clinic.
// Note to the clinic: we've read your "RF microneedling" page as InMode
// radiofrequency tightening on the Optimas Max (Morpheus8 at depth, plus
// Forma), aimed at jowls, lower face contouring and loose skin on the face
// and neck. The Morpheus8 resurfacing page covers texture, scarring and pores.
// Please confirm this split.
// Facts quoted or paraphrased from the clinic's own videos
// (docs/azira-video-facts.md): Morpheus8 for lower face contouring, the jowls
// and sagging skin; radiofrequency and microneedling in the same treatment;
// different depths to stimulate the collagen layers; three treatments for
// optimum results; Forma heating the collagen and elastin fibres, anywhere on
// the face, eyes, neck or body; the Optimas Max results quote; an hour of
// numbing cream before Morpheus8; treatment by medical professionals only;
// the complimentary consultation. Other figures are typical and marked for
// confirmation. Prices and anything else not supplied stay bracketed.
export const rfMicroneedling = {
  slug: "rf-microneedling",
  concern: "RF microneedling",
  showResults: true,
  hideResultsForMeta: false,
  meta: {
    title: "Radiofrequency Microneedling in Newport | Azira Aesthetics",
    description:
      "Nurse-led RF microneedling in Newport with Morpheus8 and Forma, to firm loose skin along the jaw and neck. Start with a complimentary consultation.",
    index: true,
  },
  hero: {
    defaultHeadline: "RF microneedling for a firmer-looking jaw and neck",
    intro:
      "Our award-winning nurses use Morpheus8 and Forma radiofrequency to tighten loose skin along the jaw and neck. We assess you first, then show you honest options and prices.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "jowl-tightening",
        headline: "Jowl tightening that starts with knowing why",
        intro:
          "Morpheus8 is really good for the jowl area and lower face contouring. Our nurses assess what has changed along your jaw first, then show you honest options and prices.",
        concernOption: "Jowls or jawline",
      },
      {
        adGroup: "neck-tightening",
        headline: "Firmer-looking skin on your neck, without surgery",
        intro:
          "Our nurses use radiofrequency to encourage new collagen in loose skin on the neck. We assess you first, then show you honest options and prices.",
        concernOption: "Neck",
      },
      {
        adGroup: "rf-skin-tightening",
        headline: "Radiofrequency skin tightening, led by nurses",
        intro:
          "Morpheus8 and Forma use radiofrequency to heat the collagen and elastin in your skin. Our nurses assess you first, then show you honest options and prices.",
        concernOption: "Lower face",
      },
    ],
    image: {
      id: "hero-rf-microneedling",
      src: "/assets/azira/hero-rf-microneedling.jpg",
      alt: "The InMode Optimas Max touchscreen glowing with its treatment options",
      note: "The InMode Optimas Max touchscreen glowing with its treatment hexagons",
      caption: "InMode Optimas Max · Treatment room",
    },
  },
  form: {
    title: "Tell us what you'd like to tighten",
    intro: "A nurse will call you back to talk it through, with no obligation.",
    concernLabel: "Area to tighten",
    concernOptions: [
      "Jowls or jawline",
      "Neck",
      "Lower face",
      "Around the eyes",
      "Somewhere on the body",
      "Not sure yet",
    ],
    defaultOption: "Not sure yet",
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Why skin loosens along the jaw and neck",
    intro:
      "Sagging comes from changes in four places. Radiofrequency works on the first two, so we assess all four before recommending anything.",
    items: [
      {
        title: "Collagen",
        body: "Collagen production slows with age, so the skin's inner support thins.",
      },
      {
        title: "Elastin",
        body: "Elastin fibres lose their spring, so skin no longer settles back into place.",
      },
      {
        title: "Deeper support",
        body: "The ligaments and fat pads beneath the skin loosen and descend, and tissue gathers along the jaw.",
      },
      {
        title: "Daily wear",
        body: "Sun, weight changes and years of movement speed all of this up, most visibly on the neck.",
      },
    ],
  },
  treatments: {
    heading: "Two ways to firm and lift",
    intro:
      'Both treatments run on our InMode Optimas Max, which we chose because it "has given us the best results for our patients here at Azira". Your plan may use one, both, or neither, and you\'ll see exact prices before you decide.',
    film: {
      id: "film-rf-microneedling",
      title: "Inside our InMode Optimas Max, with Aylish and Grace",
      description:
        "Aylish and Grace walk through the InMode Optimas Max at Azira Aesthetics in Newport: Diolaze laser, Lumecca IPL, Forma radiofrequency and Morpheus8.",
      durationSeconds: 101,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-rf-microneedling",
        src: "/assets/azira/poster-film-rf-microneedling.jpg",
        alt: "Morpheus8 treatment on a patient's forehead, the InMode Optimas Max screen behind",
        note: "Morpheus8 on the forehead with the InMode screen behind, from the InMode film",
      },
      src: "/assets/azira/film-rf-microneedling.mp4",
    },
    items: [
      {
        id: "morpheus8-tightening",
        name: "Morpheus8",
        kind: "Radiofrequency microneedling",
        image: {
          id: "treatment-rf-morpheus8",
          src: "/assets/azira/treatment-rf-morpheus8.jpg",
          alt: "A hand with pink nails holding the Morpheus8 handpiece with its purple tip",
          note: "Hand with pink nails holding the Morpheus8 handpiece, purple tip, light background",
          caption: "Morpheus8 handpiece · Treatment room",
        },
        summary:
          "Radiofrequency and microneedling within the same treatment. We work at different depths to stimulate the collagen layers, for lower face contouring, the jowls and sagging skin.",
        // draft: typical figure, confirm with clinic (spacing; "3" is from the video)
        sessions: "3 for optimum results, about 4 to 6 weeks apart",
        // draft: typical figure, confirm with clinic
        downtime: "Redness and swelling for 2 to 3 days",
        // draft: typical figure, confirm with clinic
        results: "Build gradually over around 3 months",
        bestFor: "Jowls, lower face contouring and sagging skin on the neck",
        fromPrice: null,
        prescriptionOnly: false,
      },
      {
        id: "forma",
        name: "Forma",
        kind: "Radiofrequency skin tightening, no needles",
        image: {
          id: "treatment-forma",
          src: "/assets/azira/treatment-forma.jpg",
          alt: "A hand holding the Forma radiofrequency handpiece",
          note: "Hand holding the Forma handpiece, light background",
          caption: "Forma handpiece · Treatment room",
        },
        summary:
          "Radiofrequency that heats the collagen and elastin fibres to encourage new collagen. It can be used on the face, around the eyes, on the neck or on the body.",
        // draft: typical figure, confirm with clinic
        sessions: "Usually 6, about 1 to 2 weeks apart",
        // draft: typical figure, confirm with clinic
        downtime: "Little or none. Skin may look pink for a few hours",
        // draft: typical figure, confirm with clinic
        results: "Build gradually across the course and the weeks after",
        bestFor:
          "Early loosening, the area around the eyes, or if you'd rather avoid needles",
        fromPrice: null,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You've noticed early to moderate sagging along your jaw, jowls or neck",
      "You want a gradual change that still looks like you, rather than surgery",
      "You can commit to a course of treatment and the aftercare",
      "You're in good general health",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      "You have an active skin infection, cold sore or open wound in the area",
      "A medical condition, medication or implant such as a pacemaker makes radiofrequency unsafe. We check this at your consultation",
      "Your laxity would be better served by surgery. We'll tell you honestly and can suggest where to go",
    ],
  },
  clinicianId: 1,
  results: {
    heading: "Skin tightening results from our clinic",
    items: [
      // Real results from the clinic's GHL media ("Paula J Morpheus8 B&A" and
      // "Morpheus8"); consent confirmed by the agency for the clinic on 2026-11-06
      {
        kind: "photo",
        treatmentId: "morpheus8-tightening",
        sessions: "[3 sessions]",
        timeBetweenPhotos: "[12 weeks]",
        consentConfirmed: true,
        before: {
          id: "result-jawline-1-before",
          alt: "Side profile of a woman's jowls and jawline before Morpheus8",
          note: "Morpheus8 before, side profile",
          src: "/assets/azira/result-jawline-1-before.jpg",
        },
        after: {
          id: "result-jawline-1-after",
          alt: "The same side profile after Morpheus8, with a firmer, more defined jawline",
          note: "Morpheus8 after, side profile",
          src: "/assets/azira/result-jawline-1-after.jpg",
        },
      },
      {
        kind: "photo",
        treatmentId: "morpheus8-tightening",
        sessions: "[3 sessions]",
        timeBetweenPhotos: "[12 weeks]",
        consentConfirmed: true,
        before: {
          id: "result-jawline-2-before",
          alt: "Three-quarter view of a woman's jawline and neck before Morpheus8",
          note: "Morpheus8 before, jawline and neck",
          src: "/assets/azira/result-jawline-2-before.jpg",
        },
        after: {
          id: "result-jawline-2-after",
          alt: "The same view after Morpheus8, with a tighter jawline and smoother neck",
          note: "Morpheus8 after, jawline and neck",
          src: "/assets/azira/result-jawline-2-after.jpg",
        },
      },
      {
        kind: "placeholder",
        treatmentId: "forma",
        sessions: "[6 sessions]",
        timeBetweenPhotos: "[8 weeks]",
        note: "Consented before/after: lower face or around the eyes. Across the three, show a range of skin tones",
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
        body: "A face-to-face assessment of your skin, jaw and neck, your medical history and what you'd like to change. Your consultation is complimentary.",
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
    heading: "RF microneedling questions, answered",
    items: [
      {
        question: "What is RF microneedling?",
        answer:
          "RF microneedling combines radiofrequency and microneedling within the same treatment. Morpheus8 delivers radiofrequency heat through fine needles at different depths, which stimulates the collagen layers of the skin. Forma uses radiofrequency without needles. At Azira both are delivered by medical professionals only.",
      },
      {
        // draft: typical figure, confirm with clinic (Forma course and Morpheus8 spacing)
        question: "How many sessions will I need?",
        answer:
          "For Morpheus8 we recommend three treatments for optimum results, usually four to six weeks apart. Forma is usually a course of around six sessions, one to two weeks apart. Results vary, and your nurse will suggest a plan for your skin at your consultation.",
      },
      {
        // draft: typical figure, confirm with clinic (how Forma feels)
        question: "Does RF microneedling hurt?",
        answer:
          "Before Morpheus8 you have around an hour of numbing cream, so most people feel warmth and pressure rather than pain. Forma feels like a warm massage and needs no numbing. Your nurse checks in with you throughout and can pause at any time.",
      },
      {
        // draft: typical figure, confirm with clinic
        question: "Is there downtime?",
        answer:
          "After Morpheus8 most people have redness and swelling for two to three days, and some have small marks for a little longer. After Forma your skin may look pink for a few hours, and you can usually carry on with your day. We'll plan your sessions around your diary.",
      },
      {
        question: "How much does RF microneedling cost?",
        answer:
          "Morpheus8 starts from £[price] and Forma from £[price]. Your exact price depends on the area and the number of sessions you need, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "Who is it not suitable for?",
        answer:
          "We don't treat you if you're pregnant or breastfeeding, or if you have an active infection or open wound in the area. Some medical conditions, medicines and implants such as a pacemaker rule out radiofrequency, so we go through your medical history at your consultation. If surgery would serve you better, we'll tell you honestly.",
      },
    ],
  },
  closing: {
    headline: "Start with an honest assessment",
    body: "Tell us what you've noticed along your jaw or neck. A nurse will call you back, and you'll know your options before you commit to anything.",
  },
} satisfies ConcernPageInput
