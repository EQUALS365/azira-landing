import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the PRP page, written for review by the clinic.
// From the clinic's PRP video (docs/azira-video-facts.md): Aylish takes 18ml
// of blood, it spins in the centrifuge for around five minutes, about 8ml of
// plasma ("the liquid gold") is injected back in, the treatment takes around
// 10 to 15 minutes, and it can be microneedled in or injected under the eye,
// on the face, the neck or anywhere on the body. Session numbers, downtime
// and results timing are typical figures and must be confirmed; prices stay
// bracketed until the clinic supplies them.
export const prp = {
  slug: "prp",
  concern: "PRP",
  showResults: true,
  hideResultsForMeta: false,
  meta: {
    title: "PRP Hair and Skin Treatment in Newport | Azira Aesthetics",
    description:
      "Nurse-led PRP in Newport for thinning hair and tired skin, using plasma from your own blood. The treatment usually takes around 10 to 15 minutes.",
    index: true,
  },
  hero: {
    defaultHeadline:
      "PRP for thinning hair and tired skin, from your own blood",
    intro:
      "Our nurses separate the platelet-rich plasma from a small sample of your blood and return it where it can help. We check the cause first, then show you honest options and prices.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "prp-hair-treatment",
        headline: "PRP hair treatment in Newport, led by nurses",
        intro:
          "We check what's behind your thinning first. If PRP suits you, it uses plasma from your own blood and usually takes around 10 to 15 minutes.",
        concernOption: "Thinning hair",
      },
      {
        adGroup: "receding-hairline",
        headline: "A receding hairline? Start by finding out why",
        intro:
          "Our nurses look at the cause of your hair loss before suggesting anything, then show you honest options and prices.",
        concernOption: "Receding hairline",
      },
      {
        adGroup: "prp-under-eye",
        headline: "PRP for tired under-eyes, using your own plasma",
        intro:
          "Plasma from your own blood, placed carefully under the eye to help support skin quality. We assess your skin first, then show you honest options and prices.",
        concernOption: "Under-eye area",
      },
    ],
    image: {
      id: "hero-prp",
      src: "/assets/azira/hero-prp.jpg",
      alt: "Three small syringes of golden plasma held up in blue-gloved hands",
      note: "Clinic's own shot from the PRP film: blue-gloved hands holding up three syringes of separated plasma",
      caption: "Platelet-rich plasma · Treatment room",
    },
  },
  form: {
    title: "Tell us about your hair or skin",
    intro:
      "A team member will call you back to talk it through, with no obligation.",
    concernLabel: "What would you like help with?",
    concernOptions: [
      "Thinning hair",
      "Receding hairline",
      "Under-eye area",
      "Skin quality",
      "Not sure yet",
    ],
    defaultOption: "Not sure yet",
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Why hair thins and skin tires, and where PRP fits",
    intro:
      "Thinning hair and tired skin usually change gradually, and the cause matters. PRP can help some of these changes but not all, so we check what's behind yours first.",
    items: [
      {
        title: "Follicles shrink",
        body: "Hair follicles can gradually shrink, so each new hair grows back finer and shorter than the last.",
      },
      {
        title: "The growth cycle shortens",
        body: "The growing phase of each hair gets shorter, so fewer hairs are growing at any one time.",
      },
      {
        title: "Skin renews more slowly",
        body: "With age, skin repairs itself more slowly and can look thinner and more tired, especially under the eyes.",
      },
      {
        title: "Your platelets carry growth factors",
        body: "Platelets carry natural growth factors involved in repair. PRP concentrates them from your own blood, which may support hair and skin.",
      },
    ],
  },
  treatments: {
    heading: "PRP for hair, PRP for skin",
    intro:
      "We take 18ml of your blood and spin it in a centrifuge for around five minutes, leaving about 8ml of plasma, often called liquid gold. Your plan may use it for your hair, your skin or both, and you'll see exact prices before you decide.",
    film: {
      id: "film-prp",
      title: "PRP for hair restoration with Aylish",
      description:
        "Aylish, a nurse at Azira Aesthetics in Newport, takes a blood sample, spins it in a centrifuge and injects the plasma into a patient's scalp for hair restoration.",
      durationSeconds: 58,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-prp",
        src: "/assets/azira/poster-film-prp.jpg",
        // The clinic asked for a better still of Aylish (2026-11-12)
        alt: "Aylish, in black scrubs, smiling beside the centrifuge in the treatment room",
        note: "Still from the PRP film: Aylish smiling to camera beside the centrifuge",
      },
      src: "/assets/azira/film-prp.mp4",
    },
    items: [
      {
        id: "prp-hair",
        name: "PRP for hair",
        kind: "Platelet-rich plasma, injected into the scalp",
        image: {
          id: "treatment-prp-hair",
          src: "/assets/azira/treatment-prp-hair.jpg",
          alt: "A gloved hand injecting platelet-rich plasma into a man's scalp",
          note: "Clinic's own treatment shot: a gloved hand injecting PRP into a man's scalp, tight crop",
          caption: "PRP for hair · Treatment room",
        },
        summary:
          "Plasma from your own blood, injected into the scalp to help support thinning hair. The treatment usually takes around 10 to 15 minutes.",
        // draft: typical figure, confirm with clinic
        sessions:
          "Usually a course of 3 to 4, about a month apart, then maintenance",
        // draft: typical figure, confirm with clinic
        downtime: "Scalp tenderness and redness for a day or so",
        // draft: typical figure, confirm with clinic
        results: "Changes are gradual and usually assessed over 3 to 6 months",
        bestFor:
          "Early thinning or a receding hairline, once the cause is checked",
        // Clinic's price, 2026-11-12
        fromPrice: 200,
        prescriptionOnly: false,
      },
      {
        id: "prp-skin",
        name: "PRP for skin",
        kind: "Platelet-rich plasma, microneedled or injected",
        image: {
          id: "treatment-prp-skin",
          src: "/assets/azira/treatment-prp-skin.jpg",
          // Replaces a shot of the Morpheus8 machine, at the clinic's request
          // (2026-11-12)
          alt: "A blue-gloved hand holding up a syringe of separated golden plasma",
          note: "Clinic's own shot from the PRP film: the separated plasma held up in a gloved hand",
          caption: "Separated plasma · Treatment room",
        },
        summary:
          "Plasma from your own blood, microneedled into the skin or injected under the eye, on the face or neck, to help support skin quality.",
        // draft: typical figure, confirm with clinic
        sessions: "Usually 3, about 4 to 6 weeks apart",
        // draft: typical figure, confirm with clinic
        downtime: "Redness for 1 to 2 days, and possible small bruises",
        // draft: typical figure, confirm with clinic
        results: "Build gradually over around 3 months",
        bestFor:
          "Tired under-eyes, and dull or crepey skin on the face and neck",
        // Clinic's price, 2026-11-12
        fromPrice: 200,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You've noticed early thinning, a widening parting or a receding hairline",
      "You'd like to support tired skin under the eyes, on the face or neck",
      "You can commit to a course of treatment and understand that results vary",
      "You're in good general health",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      "You have an active infection, or broken or inflamed skin, in the area",
      "Your hair loss needs a different approach, such as a medical cause your GP should look at. We'll tell you honestly",
      // Clinic's wording, 2026-11-12
      "A contraindication or implanted device. We check this at your consultation",
    ],
  },
  clinicianId: 1,
  results: {
    // One result for now, at the clinic's request (2026-11-12)
    heading: "PRP result from our clinic",
    items: [
      // Real result from the clinic's GHL media ("John B&A PRP": first and last
      // photos of the series); consent confirmed by the agency for the clinic
      // on 2026-11-06
      {
        kind: "photo",
        treatmentId: "prp-hair",
        consentConfirmed: true,
        before: {
          id: "result-prp-hair-1-before",
          alt: "The crown of a man's head before PRP, with thinning hair and visible scalp",
          note: "PRP hair before, crown",
          src: "/assets/azira/result-prp-hair-1-before.jpg",
        },
        after: {
          id: "result-prp-hair-1-after",
          alt: "The same crown after a course of PRP, with fuller hair covering the scalp",
          note: "PRP hair after, crown",
          src: "/assets/azira/result-prp-hair-1-after.jpg",
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
        body: "A face-to-face assessment of your hair or skin, your medical history and what you'd like to change. Your consultation is complimentary.",
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
    heading: "PRP questions, answered",
    items: [
      {
        question: "How many PRP sessions will I need?",
        // draft: typical figure, confirm with clinic
        answer:
          "For hair, most people start with a course of three to four sessions about a month apart, followed by maintenance sessions. For skin, it's usually three sessions four to six weeks apart. We'll confirm what's right for you at your consultation.",
      },
      {
        question: "Does PRP hurt?",
        // draft: typical figure, confirm with clinic (numbing)
        answer:
          "Taking the blood feels like a routine blood test. We can numb the area before the plasma goes in, and most people find it very manageable. Your nurse checks in with you throughout and can pause at any time.",
      },
      {
        question: "How much does PRP cost?",
        answer:
          "PRP for hair starts from £200 and PRP for skin from £200. Your exact price depends on the area and the number of sessions you need, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "Is there any downtime?",
        // draft: typical figure, confirm with clinic
        answer:
          "Very little. The treatment usually takes around 10 to 15 minutes. Your scalp may feel tender for a day or so, and skin can look red for a day or two, sometimes with small bruises where it was injected. Most people go back to their day.",
      },
      {
        question: "Will PRP work for my hair loss?",
        // draft: typical figure, confirm with clinic (results timing)
        answer:
          "It depends on the cause. PRP tends to suit early thinning best, and it isn't a cure for all hair loss. We check what's behind your thinning at your consultation and tell you honestly if PRP isn't the right option. Any change is gradual, usually assessed over three to six months, and results vary from person to person.",
      },
      {
        question: "Who is PRP not suitable for?",
        answer:
          "We won't treat you if you have a contraindication or an implanted device. We check this at your consultation, before anything is booked.",
      },
    ],
  },
  closing: {
    headline: "Find out if PRP is right for you",
    body: "Tell us what you've noticed in your hair or skin. A team member will call you back to check the cause, and you'll know whether PRP suits you before you commit to anything.",
  },
} satisfies ConcernPageInput
