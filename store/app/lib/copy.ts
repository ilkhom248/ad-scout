/**
 * copy.ts — single source of truth for all NeckReset storefront copy.
 *
 * SOURCE: NeckReset passport (reports/creatives-2026-07-06.md, section 4).
 * LANGUAGE: English (US/UK/EU-neutral).
 *
 * GATE 1 (HALAL + NON-MEDICAL): only "relieves tension / eases tightness"
 * language. No "cures/treats hernia", no "fixes posture permanently",
 * no "medical device". Contraindications block is mandatory. Do NOT add
 * copy beyond the passport.
 */

export const brand = {
  umbrella: "Quelra",
  line: "NeckReset",
  tagline: "10 minutes against a day at the screen",
};

export const hero = {
  eyebrow: "Quelra · NeckReset",
  headline: "10 minutes against a day at the screen",
  mechanismLine:
    "Gentle cervical traction under the weight of your own head — 10 minutes lying down.",
  sub: "For desk workers whose neck turns to stone by evening. Not a massager that kneads — a device that eases the tension the day builds up.",
  ctaPrimary: "Get NeckReset — $44.99",
  ctaSecondary: "See how it works",
  ratingPlaceholder: "REAL_REVIEW_PLACEHOLDER — star rating + review count (owner fills with real data)",
  underCta: "30-night guarantee · ships in 2–4 business days",
};

export const problem = {
  heading: "By evening your neck is stone and your head feels heavy",
  timelapse:
    "A timelapse of the workday: the head drifts toward the screen, hour after hour.",
  // Honest, physics-based education point from the passport ("45° = 22 kg").
  loadFact: {
    stat: "45°",
    equals: "≈ 22 kg (48 lb) of load on your neck",
    note:
      "The further your head tilts toward the screen, the more strain your neck carries. Typical, not a diagnosis.",
  },
  body: [
    "Massage pillows, spiky mats, foam rollers — most homes have a graveyard of them.",
    "They all miss the same thing: they knead the muscle, but they don't decompress it.",
  ],
};

export const mechanism = {
  heading: "Passive traction by your own weight — named, not magic",
  name: "Bodyweight Cervical Traction",
  points: [
    "No motor. No jerks. No sudden pulls.",
    "Your head rests on the device; it creates a gentle 10–15° lengthening.",
    "Muscles let go gradually over 10 minutes lying down.",
  ],
  differentiator:
    "That's the difference from massagers: they knead muscle without removing the compression. NeckReset works with the stretch.",
};

export const protocol = {
  heading: "A 14-day protocol in the box — the part nobody else ships",
  body:
    "NeckReset comes with a 14-day program: how long, at what angle, and a short daily log so you can feel the change instead of guessing. The protocol is the differentiator — the rest of the niche sells only a device.",
  days: [
    { range: "Days 1–3", label: "Get used to it", note: "Short sessions, lowest angle. First days can feel unfamiliar — that's normal." },
    { range: "Days 4–9", label: "Build the habit", note: "10 minutes each evening, angle as the protocol guides." },
    { range: "Days 10–14", label: "Lock it in", note: "Full sessions + daily log to track how your evenings feel." },
  ],
};

export const objections = {
  heading: "Straight answers to the questions that matter",
  safety: {
    q: "Isn't it dangerous to stretch your neck?",
    a: "It's the question everyone asks. NeckReset uses passive traction by your own head's weight — no motor, no jerks — with an adjustable angle you control. Move slowly, follow the protocol, and stop if anything feels sharp.",
  },
  notForYou: {
    heading: "Who it's NOT for",
    body: "If you have an acute disc herniation, a recent neck injury, or any diagnosed spinal condition, talk to your doctor before using NeckReset. This is a comfort device for everyday tension — not a treatment.",
  },
  effectiveness: {
    q: "How do I know it's doing anything?",
    a: "The 14-day protocol plus the daily log are there so you can feel the difference across your own evenings, not take our word for it.",
  },
  price: {
    q: "Why does it cost what it costs?",
    a: "One physiotherapy traction session typically runs about $85; a course of ten around $850. NeckReset is a one-time $45 — about $0.12/day over the first year. ('Typical' physio figures, not a comparison of outcomes.)",
  },
};

export const socialProof = {
  heading: "What early users say",
  disclaimer:
    "We only publish real reviews and real UGC. No paid advertorial characters, no invented experts.",
  placeholders: [
    "REAL_REVIEW_PLACEHOLDER #1 — real customer review (owner fills)",
    "REAL_REVIEW_PLACEHOLDER #2 — real customer review (owner fills)",
    "REAL_REVIEW_PLACEHOLDER #3 — real customer review (owner fills)",
  ],
};

export const offer = {
  heading: "Choose your NeckReset",
  priceAnchor:
    "Physio traction: ~$85 per session · ~$850 for a course of ten (typical). NeckReset: $45, once — about $0.12/day in year one.",
  tiers: [
    {
      id: "core",
      name: "Core",
      price: "$44.99",
      blurb: "Device + 14-day protocol.",
      features: ["NeckReset device", "14-day protocol booklet", "Daily progress log"],
      highlight: false,
      cta: "Get Core",
    },
    {
      id: "bump",
      name: "Day Kit",
      price: "$69.99",
      blurb: "Core + laptop stand — daytime prevention + evening recovery.",
      features: ["Everything in Core", "Laptop stand (raise the screen, tilt less by day)", "The full day kit: prevent by day, recover by night"],
      highlight: true,
      badge: "Most popular",
      cta: "Get the Day Kit",
    },
    {
      id: "family",
      name: "Family ×2",
      price: "$79",
      blurb: "Two devices — one for you, one for the household.",
      features: ["2× NeckReset device", "2× 14-day protocol", "Best per-unit value"],
      highlight: false,
      cta: "Get Family ×2",
    },
  ],
};

export const guarantee = {
  heading: "30 nights. No difference by morning — we refund everything.",
  body:
    "Use NeckReset for 30 nights following the protocol. If you don't feel a difference in how your evenings and mornings go, contact us for a full refund. No graveyard of gadgets — if it's not for you, it goes back.",
};

export const faq = {
  heading: "FAQ",
  items: [
    {
      q: "Isn't stretching my neck risky?",
      a: "It's the first thing most people ask. The traction is passive — your own head's weight, no motor and no jerks — and the angle is adjustable. Start slow, follow the protocol, and stop if anything feels sharp. See the contraindications below.",
    },
    {
      q: "How is this different from a neck massager?",
      a: "Massagers knead the muscle but leave the compression. NeckReset gently lengthens the neck 10–15°, so the muscles release rather than just getting rubbed.",
    },
    {
      q: "How long until I feel a difference?",
      a: "The device ships with a 14-day protocol and a daily log so you can track your own evenings. Everyone's different; the program is built to be used for the full two weeks.",
    },
    {
      q: "How long is each session?",
      a: "About 10 minutes lying down. The protocol tells you the angle and duration for each stage.",
    },
    {
      q: "Who should NOT use it?",
      a: "If you have an acute disc herniation, a recent neck injury, or a diagnosed spinal condition, check with your doctor first. NeckReset is a comfort device for everyday tension, not a medical treatment.",
    },
    {
      q: "Does it need batteries or a motor?",
      a: "No. There's no motor and nothing to charge — it works by passive traction under the weight of your head.",
    },
    {
      q: "What's the guarantee?",
      a: "30 nights. Follow the protocol; if you don't feel a difference by morning, we refund everything.",
    },
    {
      q: "Which markets do you ship to?",
      a: "United States, United Kingdom, and Australia. Shipping times and the exact figures are shown at checkout.",
    },
  ],
};

export const disclaimer = {
  heading: "Important — please read",
  body: [
    "NeckReset is a comfort and relaxation device intended to relieve everyday muscular tension and tightness in the neck and shoulders. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or condition.",
    "NeckReset does not cure or treat herniated discs and does not permanently correct posture or spinal alignment.",
    "Do not use NeckReset if you have an acute disc herniation, a recent neck or spine injury, severe osteoporosis, vertebral instability, or any diagnosed spinal condition, without first consulting a qualified healthcare professional. Stop immediately and seek advice if you feel sharp pain, numbness, tingling, or dizziness.",
    "The physiotherapy prices referenced on this page are typical market figures shown for cost comparison only and are not a claim about clinical outcomes.",
  ],
};

export const footer = {
  brandLine: "Quelra — everyday tension relief.",
  contactPlaceholder: "REAL_REVIEW_PLACEHOLDER — support email / business address (owner fills)",
};
