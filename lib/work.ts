export type WorkImage = {
  src: string;
  alt: string;
  caption: string;
};

export type WorkResult = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  year: string;
  sectors: string[];
  services: string[];
  headline: string;
  summary: string;
  overview: string[];
  keyInsight: string;
  concept: string[];
  deliverables: string[];
  results: WorkResult[];
  images: WorkImage[];
  credits: string[];
  featured: boolean;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zerolith",
    client: "Zerolith",
    year: "2026",
    sectors: ["Security", "SaaS"],
    services: ["Brand", "Digital"],
    headline: "Infrastructure security, made legible.",
    summary:
      "A brand and documentation overhaul for a monitoring platform used by engineering teams.",
    overview: [
      "Zerolith built a serious product: runtime monitoring for distributed security systems. The problem was the surface. Everything read like research notes, and teams evaluating the tool couldn't tell what was opinionated, what was configurable, and what was proven.",
      "We rebuilt the story around one idea: fewer leaps of faith. Then we shipped a visual system, a documentation experience, and a launch site that treats technical buyers like adults.",
    ],
    keyInsight:
      "Engineering teams don't want to be sold to — they want to evaluate. The entire surface needed to be structured around proof, not promise.",
    concept: [
      "We designed a visual system that feels precise without slipping into lifeless enterprise grey. The documentation was restructured around jobs-to-be-done: evaluate, install, integrate, monitor, escalate.",
      "Typography, spacing, and colour were chosen to create a sense of rigour. Every page answers the question a buyer is actually asking at that stage of their evaluation.",
    ],
    deliverables: [
      "Positioning and message map",
      "Identity system and type rules",
      "Docs redesign with component library",
      "Marketing site with integrated docs shell",
      "Launch kit for social and community",
    ],
    results: [
      { label: "Time-to-first-integration", value: "from ~1 day to ~2 hours" },
      { label: "Docs bounce rate", value: "down 28%" },
      { label: "Trial sign-ups", value: "up 19% month-on-month" },
    ],
    images: [
      {
        src: "/work/zerolith/hero.png",
        alt: "Zerolith brand poster with grid and cyan accent",
        caption: "A tighter identity built for technical trust.",
      },
      {
        src: "/work/zerolith/a.png",
        alt: "Zerolith web layout with product modules",
        caption: "Homepage modules for proof, product, and integration.",
      },
      {
        src: "/work/zerolith/b.png",
        alt: "Zerolith docs UI layout",
        caption: "Docs layout prioritising setup paths and alert workflows.",
      },
    ],
    credits: [
      "Strategy, identity, web design, development",
      "Motion templates and social system",
    ],
    featured: true,
    accent: "#4DE1FF",
  },
  {
    slug: "kitewire",
    client: "Kitewire",
    year: "2026",
    sectors: ["AI", "DevTools"],
    services: ["Brand", "Digital", "Campaign"],
    headline: "Automation that feels human.",
    summary:
      "Launch identity and site for an AI platform built for operations teams, not demos.",
    overview: [
      "Kitewire sits in an awkward gap: too technical for the mainstream AI crowd, too new for risk-averse enterprise buyers. The product was strong, but the story didn't explain why it mattered on a Tuesday afternoon when ops is on fire.",
      "We anchored the narrative on reliability and control. Then we designed a system that can flex from product UI to social clips without losing clarity.",
    ],
    keyInsight:
      "The AI space is saturated with 'magic' language. Ops teams don't want magic — they want predictable, auditable automation they can trust in production.",
    concept: [
      "We translated product primitives into plain language: triggers, guardrails, audit trails, handoff. The visual language shows flow without resorting to generic node diagrams.",
      "The launch sequence was designed to work across social, newsletter, and partner announcements simultaneously, giving the team three weeks of coordinated content from a single system.",
    ],
    deliverables: [
      "Naming refinement and tagline system",
      "Visual identity and icon set",
      "Launch website with interactive flow blocks",
      "Demo deck template for founder sales",
      "Social kit for a 3-week launch run",
    ],
    results: [
      { label: "Waitlist conversion", value: "18% from launch traffic" },
      { label: "Qualified demo requests", value: "3.2\u00d7 increase" },
      { label: "Partner co-marketing", value: "6 integrations announced" },
    ],
    images: [
      {
        src: "/work/kitewire/hero.png",
        alt: "Kitewire hero poster with lime accent",
        caption: "A system that stays sharp in motion.",
      },
      {
        src: "/work/kitewire/a.png",
        alt: "Kitewire landing page modules",
        caption: "Flow-first layout, built for scanning.",
      },
      {
        src: "/work/kitewire/b.png",
        alt: "Kitewire deck and social templates",
        caption: "Launch assets designed for iteration, not perfection.",
      },
    ],
    credits: [
      "Narrative, naming, identity, web design",
      "Launch copy and campaign system",
    ],
    featured: true,
    accent: "#A0FF4D",
  },
  {
    slug: "fablemesh",
    client: "FableMesh",
    year: "2025",
    sectors: ["Consumer", "Technology"],
    services: ["Brand", "Digital"],
    headline: "Loyalty, without the gimmicks.",
    summary:
      "A loyalty platform for creators that needed restraint, not hype.",
    overview: [
      "FableMesh makes loyalty portable. Creators can reward supporters across platforms without forcing anyone into a new app. The team asked for a brand that could sit next to consumer products without shouting about the technology underneath.",
      "We built a warm identity and a website that explains the system with concrete examples instead of buzzwords.",
    ],
    keyInsight:
      "Creator audiences are allergic to anything that feels like a scheme. The brand had to feel approachable and honest, like a product they'd actually recommend to their audience.",
    concept: [
      "The voice was defined as direct, not evangelical. The brand kit was designed so creators could use it with minimal guidance — badges, reward cards, and announcement templates that feel native to any platform.",
      "The landing site teaches through scenarios: drop, reward, redeem. No jargon walls, no whitepaper links above the fold.",
    ],
    deliverables: [
      "Brand identity and creator toolkit",
      "Illustration style and badge system",
      "Marketing site with template gallery",
      "Creator one-pagers and onboarding emails",
    ],
    results: [
      { label: "Creator onboarding completion", value: "up 24%" },
      { label: "Supporter redemption rate", value: "41% in first 30 days" },
      { label: "Brand recall (survey)", value: "top-2 box 68%" },
    ],
    images: [
      {
        src: "/work/fablemesh/hero.png",
        alt: "FableMesh poster with orange accent",
        caption: "Friendly, but still sharp.",
      },
      {
        src: "/work/fablemesh/a.png",
        alt: "FableMesh creator toolkit",
        caption: "A kit creators can use without a designer in the room.",
      },
      {
        src: "/work/fablemesh/b.png",
        alt: "FableMesh scenario-based landing page",
        caption: "Teaching the product through real flows.",
      },
    ],
    credits: ["Brand system, creator toolkit", "Web design and build"],
    featured: true,
    accent: "#FF9A4D",
  },
  {
    slug: "shardwell",
    client: "Shardwell",
    year: "2025",
    sectors: ["Gaming", "Technology"],
    services: ["Brand", "Campaign"],
    headline: "Gaming infrastructure with taste.",
    summary:
      "An ecosystem launch kit for a gaming platform that needed culture, not charts.",
    overview: [
      "Shardwell was launching into a noisy corner of gaming infrastructure. The tech story was solid, but the public story was indistinguishable from every other platform announcement.",
      "We built an identity rooted in play and craft, then packaged it into a launch kit that partners could actually use.",
    ],
    keyInsight:
      "In a market flooded with technical announcements, the brands that win are the ones developers want to be associated with. Culture beats specs for community growth.",
    concept: [
      "The visual language was built around 'playable infrastructure' — technical rigour wrapped in a creative, culture-forward identity that developers and creators actually want to share.",
      "Modular campaign assets let partners announce integrations and grants using consistent, on-brand templates without needing design support from the core team.",
    ],
    deliverables: [
      "Visual identity and motion rules",
      "Launch site and partner announcement templates",
      "Developer grant page system",
      "Merch concepts and event collateral",
    ],
    results: [
      { label: "Partner announcements shipped", value: "20+ in launch week" },
      { label: "Developer applications", value: "480 in 14 days" },
      { label: "Community growth", value: "+32% followers" },
    ],
    images: [
      {
        src: "/work/shardwell/hero.png",
        alt: "Shardwell poster with purple accent",
        caption: "Culture-forward identity for a technical launch.",
      },
      {
        src: "/work/shardwell/a.png",
        alt: "Shardwell campaign templates",
        caption: "Partner kits designed for reuse.",
      },
      {
        src: "/work/shardwell/b.png",
        alt: "Shardwell developer page",
        caption: "Clear incentives, less jargon.",
      },
    ],
    credits: [
      "Identity, campaign design, motion direction",
      "Website design",
    ],
    featured: false,
    accent: "#B24DFF",
  },
  {
    slug: "driftbyte",
    client: "Driftbyte",
    year: "2025",
    sectors: ["AI", "SaaS"],
    services: ["Brand", "Digital", "Product"],
    headline: "Voice AI for real products.",
    summary:
      "Brand and web for a voice API built for latency, not novelty.",
    overview: [
      "Driftbyte's API was fast and stable, but the public site felt like a weekend hackathon. The team needed to land credibility with developers and product leaders simultaneously.",
      "We designed a brand system that feels modern without leaning on sci-fi tropes, then built a site that makes performance claims easy to verify.",
    ],
    keyInsight:
      "Developer tools live or die on credibility. If the site looks thrown together, buyers assume the product is too. The brand had to match the engineering quality of the API itself.",
    concept: [
      "Messaging was rewritten around measurable performance: latency, uptime, and guardrails. The visual language pairs a UI-forward aesthetic with technical documentation.",
      "A demo flow was designed to show intent and failure modes, not just the happy path. Benchmarks are presented like product, not marketing.",
    ],
    deliverables: [
      "Brand identity and tone guide",
      "Landing site with benchmark modules",
      "Demo UI concepts and motion snippets",
      "Docs theme and component set",
    ],
    results: [
      { label: "Enterprise pilot leads", value: "+14 in 6 weeks" },
      { label: "Docs search usage", value: "up 37%" },
      { label: "Demo completion rate", value: "62%" },
    ],
    images: [
      {
        src: "/work/driftbyte/hero.png",
        alt: "Driftbyte poster with blue accent",
        caption: "Performance-first positioning.",
      },
      {
        src: "/work/driftbyte/a.png",
        alt: "Driftbyte benchmark page",
        caption: "Benchmarks presented like product, not marketing.",
      },
      {
        src: "/work/driftbyte/b.png",
        alt: "Driftbyte docs UI",
        caption: "Docs and demos designed as one experience.",
      },
    ],
    credits: [
      "Positioning, identity, web design and build",
      "Product demo direction",
    ],
    featured: false,
    accent: "#4D7CFF",
  },
  {
    slug: "vanta-relay",
    client: "Vanta Relay",
    year: "2025",
    sectors: ["Infrastructure", "IoT"],
    services: ["Brand", "Digital"],
    headline: "Connectivity that earns trust at street level.",
    summary:
      "Identity and website for a distributed network that needed to speak to two very different audiences.",
    overview: [
      "Vanta Relay connects physical hotspots into a single managed network. The buyer isn't just an engineering team — it's also operators putting hardware on rooftops and in shops.",
      "We balanced two audiences: technical teams who care about architecture, and operators who care about uptime and payouts.",
    ],
    keyInsight:
      "When your product lives in the physical world, the brand has to feel physical too. Abstract technology branding fails when the end user is mounting hardware on a rooftop.",
    concept: [
      "The mark and type system was designed to feel tangible, not abstract. An operator-facing section explains rewards, maintenance, and support in plain language.",
      "A partner brand kit allows regional teams to run activations with consistent, professional collateral without needing central approval for every asset.",
    ],
    deliverables: [
      "Identity system and signage rules",
      "Marketing site with operator hub",
      "Operator onboarding PDF and quickstart",
      "Partner co-brand templates",
    ],
    results: [
      { label: "Operator applications", value: "+1,100 in 30 days" },
      { label: "Support tickets (setup)", value: "down 33%" },
      { label: "Partner regions launched", value: "8" },
    ],
    images: [
      {
        src: "/work/vanta-relay/hero.png",
        alt: "Vanta Relay poster with red accent",
        caption: "A brand that can live on hardware.",
      },
      {
        src: "/work/vanta-relay/a.png",
        alt: "Vanta Relay operator hub",
        caption: "Operator-first information architecture.",
      },
      {
        src: "/work/vanta-relay/b.png",
        alt: "Vanta Relay partner templates",
        caption: "Templates for regional teams and co-brands.",
      },
    ],
    credits: ["Identity and web design", "Operator comms and templates"],
    featured: false,
    accent: "#FF4D6D",
  },
  {
    slug: "solace-exchange",
    client: "Solace Exchange",
    year: "2026",
    sectors: ["Fintech", "Trading"],
    services: ["Digital", "Campaign"],
    headline: "A trading brand that doesn't yell.",
    summary:
      "A calmer digital identity and launch system for a professional trading venue.",
    overview: [
      "Solace was building a serious trading venue, but the space is saturated with neon charts and aggressive language. The team wanted the opposite: confidence, composure, and a brand that looks good in a screenshot.",
      "We designed a restrained, interface-first system, then created a launch kit for listings, incentives, and partner announcements.",
    ],
    keyInsight:
      "Professional traders don't respond to hype — they respond to clarity and composure. The brand needed to feel like the product: fast, precise, and calm under pressure.",
    concept: [
      "Negative space and typographic hierarchy do the heavy lifting. Motion rules handle price and position states without the usual trading-platform clichés.",
      "A campaign cadence was built so the team could ship weekly feature updates without burning out the design function.",
    ],
    deliverables: [
      "Design system for product marketing",
      "Landing pages for launch, incentives, and listings",
      "Motion templates for feature updates",
      "Partner announcement toolkit",
    ],
    results: [
      { label: "Launch week sign-ups", value: "32,400" },
      { label: "Verification completion", value: "74%" },
      { label: "Weekly update cadence", value: "sustained for 10 weeks" },
    ],
    images: [
      {
        src: "/work/solace-exchange/hero.png",
        alt: "Solace Exchange poster with yellow accent",
        caption: "Confidence over noise.",
      },
      {
        src: "/work/solace-exchange/a.png",
        alt: "Solace Exchange landing pages",
        caption: "A modular page system for constant shipping.",
      },
      {
        src: "/work/solace-exchange/b.png",
        alt: "Solace Exchange motion templates",
        caption: "Motion built around states traders actually care about.",
      },
    ],
    credits: ["Digital design system", "Campaign creative direction"],
    featured: false,
    accent: "#FFD24D",
  },
  {
    slug: "aurora-matrix",
    client: "Aurora Matrix",
    year: "2026",
    sectors: ["AI", "Marketplace"],
    services: ["Brand", "Digital"],
    headline: "Compute buyers aren't impressed by gradients.",
    summary:
      "Repositioning and web build for an inference marketplace with a trust problem.",
    overview: [
      "Aurora Matrix connected buyers to inference providers. The product worked, but new visitors couldn't tell how pricing, reliability, and data handling were managed.",
      "We rebuilt the experience around transparency: clear service levels, plain-language data policy, and a UI that makes the marketplace feel governed.",
    ],
    keyInsight:
      "In a marketplace, trust is the product. Buyers need to understand pricing, reliability, and data handling before they'll commit — and the answers need to be obvious, not buried.",
    concept: [
      "Messaging was restructured around the three concerns buyers raise first: performance, privacy, and predictability. 'Trust modules' show policy and service levels up front.",
      "The visual system feels governed and calm. Provider profiles were designed for comparison, not decoration.",
    ],
    deliverables: [
      "Positioning and proof framework",
      "Website redesign and build",
      "Pricing and SLA layout system",
      "Provider profile page templates",
    ],
    results: [
      { label: "Pricing page exits", value: "down 21%" },
      { label: "Buyer sign-ups", value: "+26%" },
      { label: "Provider applications", value: "+18%" },
    ],
    images: [
      {
        src: "/work/aurora-matrix/hero.png",
        alt: "Aurora Matrix poster with teal accent",
        caption: "Trust is a design job.",
      },
      {
        src: "/work/aurora-matrix/a.png",
        alt: "Aurora Matrix pricing and SLA layout",
        caption: "SLA-first layout for serious buyers.",
      },
      {
        src: "/work/aurora-matrix/b.png",
        alt: "Aurora Matrix provider profile",
        caption: "Profiles built for comparison.",
      },
    ],
    credits: [
      "Positioning and digital design",
      "Web build and information architecture",
    ],
    featured: false,
    accent: "#4DFFD2",
  },
  {
    slug: "cinder-id",
    client: "Cinder ID",
    year: "2025",
    sectors: ["Identity", "SaaS"],
    services: ["Brand", "Product"],
    headline: "Reputation without the theatre.",
    summary:
      "Identity and product surfaces for a trust and reputation platform.",
    overview: [
      "Cinder ID helps communities and platforms separate signal from spam. It's sensitive work: too much surveillance energy and people leave, too little clarity and teams can't trust the output.",
      "We built a brand that feels neutral and modern, then designed product surfaces that explain scoring without exposing user data.",
    ],
    keyInsight:
      "Reputation systems only work if people trust them. The design had to feel like infrastructure — impartial and reliable — not like a social network passing judgement.",
    concept: [
      "The mark reads as infrastructure, not social network. Visual patterns for confidence and risk avoid the 'red means bad' panic that undermines trust in sensitive systems.",
      "An embeddable UI kit lets partner apps integrate reputation signals with a consistent, neutral visual language.",
    ],
    deliverables: [
      "Identity system and iconography",
      "Embeddable UI kit (Figma + components)",
      "Partner integration screens",
      "Short-form explainer assets",
    ],
    results: [
      { label: "Partner integrations", value: "9 in first quarter" },
      { label: "Manual review workload", value: "down 40%" },
      { label: "False positive disputes", value: "down 17%" },
    ],
    images: [
      {
        src: "/work/cinder-id/hero.png",
        alt: "Cinder ID poster with copper accent",
        caption: "A neutral, infrastructure-first identity.",
      },
      {
        src: "/work/cinder-id/a.png",
        alt: "Cinder ID UI kit",
        caption: "Embeddable patterns for trust and risk.",
      },
      {
        src: "/work/cinder-id/b.png",
        alt: "Cinder ID partner integration",
        caption: "Integration screens designed for partner teams.",
      },
    ],
    credits: [
      "Brand and product design",
      "Component and integration system",
    ],
    featured: false,
    accent: "#FF6F4D",
  },
  {
    slug: "fjord-treasury",
    client: "Fjord Treasury",
    year: "2025",
    sectors: ["Fintech", "SaaS"],
    services: ["Brand", "Digital", "Product"],
    headline: "Financial tools that feel calm.",
    summary:
      "Brand and product refresh for a treasury console used by finance teams and foundations.",
    overview: [
      "Treasury dashboards are often designed like trading terminals. Fjord Treasury needed the opposite. The users are stewards managing runways, contributors, and risk — not day traders.",
      "We rebuilt the visual language around calm states, clear permissions, and better reporting primitives.",
    ],
    keyInsight:
      "When people manage other people's money, the interface needs to reduce anxiety, not create it. Every design decision was filtered through the question: does this help them feel in control?",
    concept: [
      "The most common failure modes were audited first: wrong account, wrong network, wrong permission. UI patterns for approvals and checkpoints were designed to catch mistakes before they happen.",
      "Product UI and marketing site were aligned so the story stays consistent from first visit through daily use.",
    ],
    deliverables: [
      "Brand refresh and product UI rules",
      "Dashboard redesign concepts",
      "Marketing site redesign",
      "Reporting templates for monthly updates",
    ],
    results: [
      { label: "Approval mistakes", value: "down 22%" },
      {
        label: "Monthly report creation time",
        value: "from 3 hours to 45 minutes",
      },
      { label: "User retention", value: "+11%" },
    ],
    images: [
      {
        src: "/work/fjord-treasury/hero.png",
        alt: "Fjord Treasury poster with icy blue accent",
        caption: "Designed for calm operators.",
      },
      {
        src: "/work/fjord-treasury/a.png",
        alt: "Fjord Treasury dashboard",
        caption: "A dashboard that reduces panic.",
      },
      {
        src: "/work/fjord-treasury/b.png",
        alt: "Fjord Treasury reporting templates",
        caption: "Reporting templates for foundations and finance teams.",
      },
    ],
    credits: ["Brand refresh and product design", "Web design"],
    featured: false,
    accent: "#4DD2FF",
  },
  {
    slug: "nova-commons",
    client: "Nova Commons",
    year: "2025",
    sectors: ["Community", "Technology"],
    services: ["Brand", "Campaign", "Digital"],
    headline: "Community, but organised.",
    summary:
      "A brand and campaign system for an ecosystem hub built to reduce chaos.",
    overview: [
      "Nova Commons was built to coordinate contributors across technology ecosystems. The existing brand looked like a forum. The product, however, was closer to an operating system for community work.",
      "We rebuilt the identity around structure and momentum, then shipped a campaign kit to onboard partners without constant design requests.",
    ],
    keyInsight:
      "Community platforms fail when they look informal. Contributors take the work seriously — the brand needs to match that energy with structure, not just enthusiasm.",
    concept: [
      "The voice was defined to respect contributors' time. The brand system lives inside product UI, not just marketing — every update, bounty, and event uses the same visual language.",
      "Templates for weekly updates, bounties, and events let the team scale communications without scaling the design function.",
    ],
    deliverables: [
      "Rebrand and visual system",
      "Website and onboarding pages",
      "Campaign kit for bounties, events, and updates",
      "Community playbook PDF",
    ],
    results: [
      { label: "Contributor sign-ups", value: "+29%" },
      { label: "Bounty completion rate", value: "up 16%" },
      { label: "Partner ecosystems onboarded", value: "12" },
    ],
    images: [
      {
        src: "/work/nova-commons/hero.png",
        alt: "Nova Commons poster with pink accent",
        caption: "A system that can scale with the community.",
      },
      {
        src: "/work/nova-commons/a.png",
        alt: "Nova Commons campaign templates",
        caption: "Templates that keep momentum without chaos.",
      },
      {
        src: "/work/nova-commons/b.png",
        alt: "Nova Commons onboarding pages",
        caption: "Onboarding designed for contributors, not tourists.",
      },
    ],
    credits: ["Brand and campaign system", "Web design"],
    featured: false,
    accent: "#FF4DCA",
  },
  {
    slug: "moonvault",
    client: "Moonvault",
    year: "2025",
    sectors: ["Fintech", "Consumer"],
    services: ["Digital", "Product"],
    headline: "Finance that feels obvious.",
    summary:
      "Product and onboarding redesign for a digital wallet built for everyday users.",
    overview: [
      "Moonvault had good fundamentals, but onboarding was doing too much too soon. New users hit security prompts, account tiers, and fee structures before they had any momentum.",
      "We redesigned the onboarding and key flows so users can do one meaningful thing quickly, then learn the rest in context.",
    ],
    keyInsight:
      "People abandon products that make them feel stupid. The first 10 minutes need to build confidence, not test patience. Security can be introduced progressively.",
    concept: [
      "The first 10 minutes were audited: where do users drop, and why. Progressive disclosure was designed for risk and security — show what matters now, teach the rest later.",
      "A UI kit supports future features without requiring a full redesign. Education patterns are built into the flow, not bolted on as tooltips.",
    ],
    deliverables: [
      "Onboarding flow redesign",
      "Core wallet screens and component set",
      "Marketing site refresh",
      "In-app education patterns",
    ],
    results: [
      { label: "Onboarding completion", value: "up 27%" },
      { label: "First transaction success", value: "up 19%" },
      { label: "Support requests (setup)", value: "down 35%" },
    ],
    images: [
      {
        src: "/work/moonvault/hero.png",
        alt: "Moonvault poster with violet accent",
        caption: "Clarity beats complexity.",
      },
      {
        src: "/work/moonvault/a.png",
        alt: "Moonvault onboarding screens",
        caption: "Progressive disclosure for real people.",
      },
      {
        src: "/work/moonvault/b.png",
        alt: "Moonvault in-app education patterns",
        caption: "Education built into the flow.",
      },
    ],
    credits: ["Product UX and UI", "Marketing refresh"],
    featured: false,
    accent: "#8F7CFF",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getAllSectors(): string[] {
  const s = new Set<string>();
  for (const cs of caseStudies) {
    cs.sectors.forEach((v) => s.add(v));
  }
  return Array.from(s).sort();
}

export function getAllServices(): string[] {
  const s = new Set<string>();
  for (const cs of caseStudies) {
    cs.services.forEach((v) => s.add(v));
  }
  return Array.from(s).sort();
}
