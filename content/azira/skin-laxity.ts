import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the skin laxity page, written for review by the clinic.
// On 2026-11-12 the clinic merged its Morpheus8 and RF microneedling pages
// into this one (their old addresses redirect here, see `aliases`), and
// supplied the price, the results timing and the wording for contraindications
// ("Updates to landing pages" document). The clinic then confirmed the page
// is Morpheus8 only: no skin boosters, no Forma.
// From the clinic's own videos (docs/azira-video-facts.md): radiofrequency and
// microneedling in the same treatment, different depths to stimulate the
// collagen layers, lower face contouring, the jowls and sagging skin, an hour
// of numbing cream first, Dermalux LED aftercare, three treatments for optimum
// results, delivery by medical professionals and the complimentary
// consultation. Fields marked "draft" are typical figures to confirm.
export const skinLaxity = {
  slug: "skin-laxity",
  aliases: ["morpheus8", "rf-microneedling"],
  concern: "Skin laxity",
  showResults: true,
  hideResultsForMeta: false,
  meta: {
    title: "Skin laxity treatment with Morpheus8 in Newport | Azira Aesthetics",
    description:
      "Nurse-led Morpheus8 skin tightening in Newport. We start with why your skin has loosened, then show you honest options and prices.",
    index: true,
  },
  hero: {
    defaultHeadline: "Firmer skin starts with knowing why it loosened",
    intro:
      "Our award-winning nurses assess every layer of your face first, then show you honest options and prices.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "neck-tightening",
        headline: "Neck tightening that starts with knowing why",
        intro:
          "Our award-winning nurses assess why your neck has loosened before suggesting anything, then show you honest options and prices.",
        concernOption: "Neck",
      },
      {
        adGroup: "jawline",
        headline: "A sharper-looking jawline, without looking done",
        intro:
          "Our award-winning nurses assess what has changed along your jaw first, then show you honest options and prices.",
        concernOption: "Jowls or jawline",
      },
      {
        adGroup: "skin-tightening",
        headline: "Skin tightening that starts with knowing why",
        concernOption: "Skin laxity",
      },
    ],
    image: {
      // The clinic asked for a frame where Grace isn't mid-sentence (2026-11-12)
      id: "hero-skin-laxity",
      alt: "Grace, in black scrubs and blue gloves, holding the Morpheus8 handpiece and looking down at her patient",
      note: "Clinic's own treatment shot from the Morpheus8 film: Grace with the handpiece, looking down at her patient",
      caption: "Morpheus8 in clinic · Newport",
      src: "/assets/azira/hero-skin-laxity.jpg",
    },
  },
  form: {
    title: "Tell us about your concern",
    intro:
      "A team member will call you back to talk it through, with no obligation.",
    concernOptions: [
      "Skin laxity",
      "Jowls or jawline",
      "Neck",
      "Fine lines and texture",
      "Something else",
    ],
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Your skin isn't the only thing that's changed",
    intro:
      "Loose skin is the last of four changes, and the visible one. Treating only the surface is why some results disappoint, so we assess every layer first.",
    items: [
      {
        title: "Skin",
        body: "Collagen and elastin production slows down, so skin becomes thinner and less springy.",
      },
      {
        title: "Ligaments",
        body: "The ligaments that anchor skin to the deeper structures loosen, so tissue sits lower.",
      },
      {
        title: "Fat pads",
        body: "The deep fat pads of the cheek shrink and slide down, and the face loses its lift.",
      },
      {
        title: "Bone",
        body: "The facial skeleton slowly loses volume, leaving less structure for everything above it.",
      },
    ],
  },
  treatments: {
    heading: "Morpheus8 at Azira",
    intro:
      "Watch Grace perform a Morpheus8 treatment, through to the LED aftercare. Every treatment here is delivered by medical professionals, and you'll see your exact price before you decide.",
    film: {
      id: "film-morpheus8",
      title: "Morpheus8 at Azira Aesthetics",
      description:
        "Grace performs a Morpheus8 treatment on patient Eva, who explains why she trusts the clinic, followed by a Dermalux LED aftercare session.",
      durationSeconds: 67,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-morpheus8",
        src: "/assets/azira/poster-film-morpheus8.jpg",
        alt: "The Morpheus8 tip on a patient's forehead, the InMode screen behind",
        note: "Morpheus8 tip on the forehead, InMode screen behind, from the Morpheus8 film",
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
          caption: "Morpheus8 · Treatment room",
        },
        summary:
          "Radiofrequency and microneedling in one treatment. We work at different depths to stimulate the collagen layers, to tighten the skin and improve its texture.",
        // draft: typical figure, confirm with clinic (the 3 treatments are from the clinic's video; the spacing is not)
        sessions: "3 for optimum results, about 4 to 6 weeks apart",
        // draft: typical figure, confirm with clinic
        downtime: "Redness for 1 to 3 days, which LED aftercare can calm",
        // Clinic's wording, 2026-11-12
        results: "Optimal results up to 90 days after your third treatment",
        bestFor:
          "Skin tightening along the jaw, lower face and neck, and improved texture",
        // Clinic's price, 2026-11-12
        fromPrice: 350,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You've noticed early to moderate loosening along your jaw, neck or lower face",
      "You'd like improved texture and skin tightening",
      "You can commit to a course of three treatments and the aftercare",
      "You're in good general health",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      "You have an active breakout, cold sore or skin infection in the area. We'll wait until it has settled",
      "Your laxity would be better served by surgery. We'll tell you honestly and can suggest where to go",
      // Clinic's wording, 2026-11-12
      "A contraindication or implanted device. We check this at your consultation",
    ],
  },
  clinicianId: 0,
  results: {
    heading: "Morpheus8 results from our clinic",
    items: [
      // Real results from the clinic's GHL media ("Paula J Morpheus8 B&A" and
      // "Morpheus8"); consent confirmed by the agency for the clinic on 2026-11-06
      {
        kind: "photo",
        treatmentId: "morpheus8",
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
        treatmentId: "morpheus8",
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
      // From the clinic's shared folder ("Pictures / Morpheus8 - RF
      // microneedling"); consent confirmed by the agency for the clinic on
      // 2026-11-12
      {
        kind: "photo",
        treatmentId: "morpheus8",
        consentConfirmed: true,
        before: {
          id: "result-jawline-3-before",
          alt: "Three-quarter view of a woman's lower face and jawline before Morpheus8",
          note: "Morpheus8, lower face and jawline, before",
          src: "/assets/azira/result-jawline-3-before.jpg",
        },
        after: {
          id: "result-jawline-3-after",
          alt: "The same view after Morpheus8, with a firmer lower face and jawline",
          note: "Morpheus8, lower face and jawline, after",
          src: "/assets/azira/result-jawline-3-after.jpg",
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
        body: "A face-to-face assessment of all four layers, your medical history and what you'd like to change. Your consultation is complimentary.",
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
    heading: "Questions before you book",
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
          "Most people have some redness for one to three days. We can finish with a Dermalux LED session to calm your skin, reduce the redness and enhance your results. We'll plan your sessions around your diary.",
      },
      {
        question: "How much does Morpheus8 cost?",
        answer:
          "Morpheus8 starts from £350. Your exact price depends on the area and the number of sessions you need, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "When will I see results?",
        answer:
          "Morpheus8 works by stimulating your own collagen, so change is gradual. Optimal results are achieved up to 90 days after your third treatment. Results vary from person to person, and we'll be honest about what your skin can achieve.",
      },
      {
        question: "Will I look different?",
        answer:
          "You should look like yourself, rested and firmer. We aim for gradual change that friends notice without being able to say why, and we'll tell you if a treatment can't give you the result you want.",
      },
      {
        question: "Is it right for my skin tone?",
        answer:
          "Morpheus8 can be used on all skin tones. Darker skin can be more prone to pigmentation changes after some treatments, so we assess your skin carefully and adjust the settings for you.",
      },
      {
        question: "Who is Morpheus8 not suitable for?",
        // Clinic's wording, 2026-11-12
        answer:
          "We won't treat you if you have a contraindication or an implanted device. We check this at your consultation.",
      },
    ],
  },
  closing: {
    headline: "Start with a conversation",
    body: "Tell us what you've noticed. A team member will call you back, and you'll know your options before you commit to anything.",
  },
} satisfies ConcernPageInput
