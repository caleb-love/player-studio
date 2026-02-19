export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    role: "Co-founder",
    company: "Kitewire",
    quote:
      "We had a strong product and a weak story. Player Studio helped us find the language that made our platform make sense to the people who actually buy it. The launch site converted from day one.",
    initials: "MC",
  },
  {
    name: "James Aldridge",
    role: "Head of Marketing",
    company: "Driftbyte",
    quote:
      "They didn't just hand us a brand — they handed us a system we could run without them. Six months later, our team is still shipping with the templates and guidelines they built.",
    initials: "JA",
  },
  {
    name: "Sophie Tran",
    role: "CEO",
    company: "FableMesh",
    quote:
      "Most agencies in our space default to hype. Player Studio did the opposite — they gave us a brand that felt real and approachable, and our creator onboarding numbers proved it worked.",
    initials: "ST",
  },
  {
    name: "Daniel Okafor",
    role: "VP of Product",
    company: "Aurora Matrix",
    quote:
      "The rebrand wasn't cosmetic. They restructured how we communicate trust to buyers, and it showed in the numbers within weeks. The website finally matches the quality of our product.",
    initials: "DO",
  },
  {
    name: "Lara Novak",
    role: "Founder",
    company: "Fjord Treasury",
    quote:
      "Our dashboard looked like a trading terminal. Player Studio redesigned it around calm and clarity. Our operators make fewer mistakes and the support queue dropped almost overnight.",
    initials: "LN",
  },
  {
    name: "Tom Whitfield",
    role: "Growth Lead",
    company: "Nova Commons",
    quote:
      "They gave us a campaign kit that actually scales. We used to need a designer for every announcement — now our team ships weekly updates with the system they left behind.",
    initials: "TW",
  },
];
