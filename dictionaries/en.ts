import type { Dictionary } from "@/lib/types";

export const en: Dictionary = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "AI, Cybersecurity & Professional Experience",
    description:
      "Work faster, protect your family, monetize your expertise — 09:30 Session, 7.77 Program, Skills Center Mobilis Chlef.",
  },
  ui: {
    counter: "{current} / {total}",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    swipeHint: "Swipe to navigate",
    keyboardHint: "Use ← → to navigate",
    fullscreenAria: "Fullscreen",
    exitFullscreenAria: "Exit fullscreen",
    langLabel: "Language",
    footer: "7.77 Program · Skills Center Mobilis Chlef",
    startLabel: "Slide",
    qrLabel: "Scan to open the presentation",
  },
  slides: [
    {
      title: "AI, Cybersecurity & Professional Experience",
      subtitle: "Work faster, protect your family, monetize your expertise",
      body: "**Speaker:** Mahfoudh Arous — Skills Center Mobilis Chlef · 7.77 Program",
    },
    {
      title: "This Morning's Question",
      body: `*Which administrative task takes you 2 hours every week and wears you out?*

- Writing endless meeting reports
- Follow-up letters and hierarchical correspondence
- Summarizing regulatory documents or specifications

**The finding:** your high-value time is being absorbed by bureaucratic friction.`,
    },
    {
      title: "Beyond the Gadget Illusion",
      body: `**The common illusion:** "AI is going to do my job for me."

**The reality in 3 levels (AI Fluency Framework):**
1. **Assistance (Low added value)** — Translating text, summarizing raw notes, rephrasing an email. Useful, but everyone can do it.
2. **Augmentation (High added value)** — AI becomes your critical sparring partner. It challenges your strategy, spots your contractual blind spots, and audits your arguments.
3. **Autonomy (AI agency)** — AI runs a chain of sequential tasks alone (sorting, preliminary analysis, draft replies) — essential for anyone managing a team.`,
    },
    {
      title: "The 4 Skills of a Professional",
      body: `1. **Delegation** — Know exactly which chore to hand to the machine and which strategic human decision to keep.
2. **Description** — Give the full business context, posture, and the level of legal or hierarchical constraint.
3. **Discernment** — Instantly spot factual errors, invented legal claims, or contextual inconsistencies (taste, intuition, experience...).
4. **Diligence** — Stay legally and professionally accountable for what goes out under your signature.`,
    },
    {
      title: "Bad Prompt vs Good Prompt",
      body: `**The bad reflex:**
> "Write me a letter to chase up a late supplier."

**Result:** A hollow, impersonal, robotic text, completely disconnected from Algerian contractual and administrative realities.

**Why it fails:** AI extrapolates into a vacuum if you don't impose a tight framework on it.`,
    },
    {
      title: "The RCTFC Method (The Pro Standard)",
      body: `- **R — Role:** Experienced administrative assistant, used to contractual negotiations in the Algerian public/private sector.
- **C — Context:** Company / institution based in Chlef; an equipment order has an unjustified 3-week delivery delay.
- **T — Task:** Draft a formal, firm notice while preserving the future business partnership.
- **F — Format:** Standard administrative letter, about 130 words, formal and direct French.
- **C — Constraints:** Do not immediately threaten late-payment penalties, but demand a firm commitment schedule within 48 hours.`,
    },
    {
      title: "Hands-on Workshop",
      subtitle: "30 min — Pair work",
      body: `1. Take out your smartphones and log in to \`chatgpt.com\` or \`claude.ai\`.
2. Pick a real administrative chore you dealt with this week in Chlef.
3. Write your prompt by rigorously applying the **RCTFC** model.
4. Read the generated result and spot **at least 2 flaws** (e.g. an overly aggressive tone, a reference to a non-existent law, too casual a tone).
5. Adjust in a single iteration so you leave with a document ready to print or send.`,
    },
    {
      title: "The Wall of Hallucinations",
      body: `**The hallucination phenomenon:** AI hates a vacuum. When it doesn't have the exact answer, rather than admitting it, it sometimes invents information out of thin air to satisfy your request.

**The invisible danger:** it usually doesn't produce obvious nonsense. Instead it generates false but extremely credible content (fake reports, fake legal articles, fake statistics).

**The golden rule:** AI is a "plausibility machine", not a truth machine. You are the domain expert. Never validate a source, figure, or legal reference without external verification.`,
    },
    {
      title: "Cybersecurity — The Trap of Malicious Links and QR Codes",
      body: `**The QR code danger (Quishing):** Scanning a QR code in a public place or on an unverified document can redirect you to a fraudulent site or silently download malware.

**Deceptive links (Phishing):** Be wary of links received by SMS (Smishing), email, or social media. Hackers often clone official sites (banks, public services) to steal your credentials.

**Good reflexes:**
1. **Check the URL** — Before entering a password or data, make sure the site address is exact.
2. **Don't scan blindly** — Avoid suspicious QR codes or ones stuck over other displays.
3. **Prefer direct access** — Type the service's web address yourself instead of clicking a received link.`,
    },
    {
      title: 'The "Vibe Coding" Trap',
      body: `**What is Vibe Coding?** The trend of building applications by generating all the code through AI, often without the technical skills to understand it.

**Major dangers:**
- **Hardcoded credentials** — AI can generate code containing your passwords or API keys "in the clear", exposing them to everyone if the code is published.
- **Ignored security flaws** — By blindly copy-pasting generated code, users leave major security holes that are easily exploited by attackers.

**The golden rule (securing your keys):**
- Always store your API keys and passwords in a \`.env\` file.
- **Crucial:** add that \`.env\` file to your \`.gitignore\` so it is never accidentally published on GitHub.
- Always have your application's security validated before publishing it.`,
    },
    {
      title: "Family Risks — BaridiMob & Voice Cloning",
      body: `**BaridiMob fraud:**
- **Absolute rule:** the SMS / OTP code is strictly personal and secret. No agent from Algérie Poste or any bank will ever ask for it over the phone.
- **The silent OTP theft:** beware of malicious mobile apps (especially outside official stores). If an app is granted permission to read your SMS, it can intercept your codes in the background and send them to attackers.

**Typical scam:** the scammer contacts you through a fake profile (Facebook, WhatsApp) using a relative's name. They invent an emergency and ask for an immediate BaridiMob transfer.

**The immediate antidote:** don't trust the profile picture or the displayed name. Always call the person directly on their real phone number to verify the information out loud.`,
    },
    {
      title: "Your Children and AI",
      body: `**On the ground:** your middle- and high-schoolers are already using ChatGPT, Perplexity, or AI filters — often faster than you. Strict bans never work.

**The real risk:** it's not the tool, it's what gets fed into it (personal photos, family name, school, location).

**Prevention:** photos and audio can be hijacked (deepfakes, school blackmail). Children need to know they can talk to you about it without fear of punishment or losing screen time.`,
    },
    {
      title: "Taboo Data",
      subtitle: "What you must NEVER give an AI",
      body: `**Never paste into a public cloud tool:**
- Confidential internal documents and non-public company statements
- ID cards, passport numbers, driving licenses
- Bank details, IBAN/RIB, account statements
- Medical records, prescriptions
- Personal data about colleagues or third parties

**Golden rule:** *Write your prompt as if your boss or your neighbor could read it tomorrow on a billboard.*`,
    },
    {
      title: "Immediate Action — Secure Your Mailbox",
      body: `**Why the mailbox?** It's the keystone of your entire digital life. Whoever controls it can reset your banking, social media, and administrative accounts.

**Live procedure (2 minutes):**
1. Check whether your credentials have already leaked on [haveibeenpwned.com](https://haveibeenpwned.com).
2. Open your Google / Microsoft account settings on your smartphone.
3. Turn on two-step verification (**2FA**).`,
    },
    {
      title: "Showcase Your Expertise and Visibility",
      body: `- **Build your online visibility** — Don't stay in the shadows. Speak up on professional networks to share your experience and ideas.
- **Build a solid portfolio** — Gather and document your achievements, projects, and experiments to concretely prove your know-how.
- **Create and experiment** — Learning happens through practice. Launch projects, test new ideas, and openly share what you learn.
- **Network and connect with people** — The end goal stays human. Use these tools to identify your peers, start conversations, and build genuine relationships.`,
    },
    {
      title: "Staying Current Without Losing Your Evenings",
      body: `**The trap:** information overload. New models and tools launch every week.

**The minimalist, sustainable method:**
- Not 10 newsletters: just one focused read (e.g. [TLDR AI](https://tldr.tech/ai) in 5 minutes, or [Superhuman AI](https://www.joinsuperhuman.ai/)).
- **For video:** follow one relevant channel (e.g. [Entrepreneur DZ](https://www.youtube.com/@Entrepreneurdz/)).
- One single ritual: 10 minutes every Sunday evening or Monday at 8:00 AM.

> "You don't need to know everything. You need to know where to look the day you need it."`,
    },
    {
      title: "Your Commitment Starting Today",
      body: `1. **One automated administrative task** by Monday, using the RCTFC structure.
2. **A saved prompt template** in your personal notes.
3. **2FA turned on** on your main account, with a family backup password set at home.`,
    },
    {
      title: "Resources & Contact",
      body: `- **Website:** [mahfoudh.dev](https://mahfoudh.dev)
- **YouTube:** \`@mahfoudh_arous\` (French) · ورشة البرمجة مع محفوظ (Arabic)
- **7.77 National Program:** further information from the Skills Center Mobilis Chlef facilitators.
- **Discussion & Q&A:** open floor.`,
    },
  ],
};
