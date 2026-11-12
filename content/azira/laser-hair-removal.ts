import type { ConcernPageInput } from "../schema"

// DRAFT COPY for the laser hair removal page, written for review by the clinic.
// From the clinic's own videos (docs/azira-video-facts.md): the Diolaze diode
// laser on the InMode Optimas Max, its instant cooling ("quite a comfortable
// treatment. It's not too painful"), the six-session protocol at one a month or
// every four to six weeks, Aylish presenting the film, and her line about not
// taking a razor this year. Figures marked "draft" are typical UK figures and
// must be confirmed; prices and anything else the clinic hasn't told us stay
// bracketed.
export const laserHairRemoval = {
  slug: "laser-hair-removal",
  concern: "Laser hair removal",
  // Off at the clinic's request (2026-11-12) until its Diolaze before and
  // afters arrive; turn back on when the placeholders below are filled
  showResults: false,
  hideResultsForMeta: false,
  meta: {
    title: "Diode laser hair removal in Newport | Azira Aesthetics",
    description:
      "Nurse-led laser hair removal in Newport. A cooled diode laser gives long-lasting hair reduction over up to six sessions, starting with a complimentary consultation.",
    index: true,
  },
  hero: {
    defaultHeadline: "Laser hair removal that lets you put the razor down",
    intro:
      "Long-lasting hair reduction with a cooled, medical-grade diode laser, delivered by our award-winning nurses in Newport. We assess your skin and hair first.",
    // Ad group slugs are drafts until the ads team confirms them
    headlines: [
      {
        adGroup: "leg-laser-hair-removal",
        headline: "Laser hair removal for smoother legs, without shaving",
        intro:
          "Long-lasting hair reduction on your legs with a cooled diode laser, delivered by our award-winning nurses in Newport.",
        concernOption: "Legs",
      },
      {
        adGroup: "underarm-laser-hair-removal",
        headline: "Underarm laser hair removal, without the daily shave",
        intro:
          "Long-lasting hair reduction on your underarms with a cooled diode laser, delivered by our award-winning nurses in Newport.",
        concernOption: "Underarms",
      },
      {
        adGroup: "bikini-laser-hair-removal",
        headline: "Bikini line laser hair removal, carried out by nurses",
        intro:
          "Long-lasting hair reduction along your bikini line with a cooled diode laser, delivered discreetly by our award-winning nurses in Newport.",
        concernOption: "Bikini line",
      },
    ],
    image: {
      id: "hero-laser-hair-removal",
      src: "/assets/azira/hero-laser-hair-removal.jpg",
      alt: "A blue-gloved hand gliding the Diolaze laser handpiece over gel on a patient's leg",
      note: "Clinic's own treatment shot: blue-gloved hand moving the Diolaze handpiece over gel on a leg",
      caption: "Diolaze laser hair removal · Treatment room",
    },
  },
  form: {
    title: "Tell us which areas you'd like treated",
    intro:
      "A team member will call you back to talk it through, with no obligation.",
    concernLabel: "Area to treat",
    concernOptions: [
      "Legs",
      "Underarms",
      "Bikini line",
      "Face",
      "Several areas",
      "Not sure yet",
    ],
    defaultOption: "Not sure yet",
    treatedBeforeOptions: ["No, first time", "Yes, elsewhere", "Yes, at Azira"],
    startWhenOptions: ["Right away", "1–3 months", "Just looking"],
    submitLabel: "Request consultation",
  },
  causes: {
    heading: "Why laser hair removal takes up to six sessions",
    intro:
      "Every hair grows in a cycle, and each follicle keeps its own timing. The laser can only reach a hair while it's growing, so a course catches each one in turn.",
    items: [
      {
        title: "Growing",
        body: "The hair is attached to its root and full of pigment. This is the only phase the laser can reach.",
      },
      {
        title: "Transition",
        body: "The hair loosens from its root and stops growing, so the laser has little to act on.",
      },
      {
        title: "Resting",
        body: "The follicle rests before a new hair starts to grow. Hairs at this stage aren't affected.",
      },
      {
        title: "Up to six sessions",
        body: "Only some hairs are growing at any one time. Sessions about a month apart reach each follicle as it starts to grow.",
      },
    ],
  },
  treatments: {
    heading: "Diolaze laser hair removal at Azira",
    intro:
      // Aylish's own words from her intro video; confirm she's happy for it
      // to be used here
      "It's our nurse Aylish's favourite treatment to receive: \"This is the first year that I have not taken a razor and it's been a game changer.\" Your nurse sets the laser to suit your skin and hair, and you'll see the exact price before you decide.",
    film: {
      id: "film-laser-hair-removal",
      title: "Diolaze laser hair removal with Aylish",
      description:
        "Aylish, a nurse at Azira Aesthetics in Newport, introduces the Diolaze diode laser and its six-session protocol while treating a leg.",
      durationSeconds: 30,
      uploadDate: "2026-11-05",
      poster: {
        id: "poster-film-laser-hair-removal",
        src: "/assets/azira/poster-film-laser-hair-removal.jpg",
        alt: "Aylish beside the InMode Optimas Max in the treatment room",
        note: "Still from the laser film: Aylish beside the InMode Optimas Max",
      },
      src: "/assets/azira/film-laser-hair-removal.mp4",
    },
    items: [
      {
        id: "diolaze",
        name: "Diolaze laser hair removal",
        kind: "Diode laser with instant cooling",
        image: {
          id: "treatment-diolaze",
          src: "/assets/azira/treatment-diolaze.jpg",
          alt: "A blue-gloved hand gliding the Diolaze laser handpiece over cooling gel on a patient's leg",
          note: "Diolaze handpiece on the leg over cooling gel, gloved hand",
          caption: "Diolaze handpiece · Treatment room",
        },
        summary:
          "Laser hair removal with a medical-grade diode laser on the InMode Optimas Max. It targets the pigment in growing hairs for long-lasting hair reduction, and instant cooling keeps it comfortable.",
        sessions: "Up to 6, one a month, or every 4–6 weeks",
        // draft: typical figure, confirm with clinic
        downtime: "None for most. Mild redness for a few hours",
        // draft: typical figure, confirm with clinic
        results: "Treated hairs shed over 1–3 weeks and thin with each session",
        bestFor: "Darker hair on the legs, underarms, bikini line or face",
        // Clinic's price, 2026-11-12
        fromPrice: 50,
        prescriptionOnly: false,
      },
    ],
  },
  suitability: {
    goodFit: [
      "You're tired of shaving, waxing or ingrowing hairs on one or more areas",
      "Your hair is darker than your skin. We check this at your consultation",
      "You can commit to a course of up to six sessions, about a month apart",
      "You can keep the area out of the sun and free of fake tan around your sessions",
    ],
    whenWeSayNo: [
      "You're pregnant or breastfeeding",
      "You have an active skin infection, cold sore or broken skin on the area",
      "Your hair is light blonde, grey, red or white. Lasers can't target it reliably, and we'll tell you honestly",
      // Clinic's wording, 2026-11-12
      "A contraindication or implanted device. We check this at your consultation",
    ],
  },
  clinicianId: 1,
  results: {
    heading: "Laser hair removal results from our clinic",
    items: [
      {
        kind: "placeholder",
        treatmentId: "diolaze",
        note: "Consented before/after: lower legs. Across the three, show a range of skin tones",
      },
      {
        kind: "placeholder",
        treatmentId: "diolaze",
        note: "Consented before/after: underarms. Across the three, show a range of skin tones",
      },
      {
        kind: "placeholder",
        treatmentId: "diolaze",
        note: "Consented before/after: face (upper lip or chin). Across the three, show a range of skin tones",
      },
    ],
  },
  steps: {
    heading: "What happens when you get in touch",
    items: [
      {
        title: "We call you back",
        body: "A team member rings to understand which areas you'd like treated and answer your first questions.",
      },
      {
        title: "Your consultation",
        // Patch test policy from the clinic's own laser prep posts (GHL media)
        body: "A face-to-face assessment of your skin, your hair and your medical history, with a patch test 24 hours before your first session. Your consultation is complimentary.",
      },
      {
        title: "Your written plan",
        body: "Your areas, the number of sessions and the exact price, in writing to take away.",
      },
      {
        title: "You decide",
        body: "Take your time. There's no pressure to book on the day.",
      },
    ],
  },
  faqs: {
    heading: "Laser hair removal questions, answered",
    items: [
      {
        question: "How many laser hair removal sessions will I need?",
        // draft: occasional top-ups are typical, confirm with clinic
        answer:
          "The protocol is up to six sessions. We recommend one a month for around six months, though sessions can be four to six weeks apart. The laser only reaches hairs in their growing phase, so a course catches each follicle in turn. Some people need an occasional top-up later. Results vary.",
      },
      {
        question: "Does laser hair removal hurt?",
        answer:
          "The Diolaze laser has instant cooling, so it's quite a comfortable treatment and not too painful. Most people feel a brief warmth with each pass. Your nurse checks in with you throughout and can pause at any time.",
      },
      {
        question: "How much does laser hair removal cost?",
        answer:
          "Diolaze laser hair removal starts from £50. Your exact price depends on the areas and the number of sessions, and you'll have it in writing before you decide anything. Your consultation is complimentary.",
      },
      {
        question: "How do I prepare for laser hair removal?",
        // From the clinic's own laser prep posts (GHL media, "Laser 1-7")
        answer:
          "Shave the area 12 to 24 hours before your session, and don't wax or tweeze for three weeks beforehand, so the root is there for the laser to find. Keep the area out of the sun and off sunbeds for four weeks, and avoid fake tan for two weeks. On the day, skip deodorant and other products on the area, and save exercise for another day. Your first session starts with a patch test 24 hours before.",
      },
      {
        question: "Is there any downtime?",
        // draft: typical figure, confirm with clinic
        answer:
          "Most people go straight back to their day. The skin may look a little pink for a few hours. Keep the area out of the sun and avoid fake tan around your sessions, and your nurse will give you aftercare to follow.",
      },
      {
        question: "Who is laser hair removal not suitable for?",
        answer:
          "The laser targets the pigment in the hair, so it works best on darker hair. Light blonde, grey, red and white hair respond poorly to lasers, and we'll tell you honestly if that's you. We also won't treat you if you have a contraindication or an implanted device. Your nurse assesses your skin and hair type at your consultation, tailors the settings to you and does a patch test before your first session.",
      },
      {
        question: "How long do the results last?",
        // draft: typical outcome, confirm with clinic
        answer:
          "Laser hair removal gives long-lasting hair reduction rather than removing every hair. Most people see much less regrowth, and hair that does return tends to be finer and lighter. Hormonal changes can bring new growth, so some people have an occasional top-up. Results vary from person to person.",
      },
    ],
  },
  closing: {
    headline: "Smoother skin starts with a conversation",
    body: "Tell us which areas you'd like treated. A team member will call you back, and you'll know your plan and price before you commit to anything.",
  },
} satisfies ConcernPageInput
