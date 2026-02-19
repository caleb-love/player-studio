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
  intro: string[];
  brief: string;
  approach: string[];
  deliverables: string[];
  results: WorkResult[];
  images: WorkImage[];
  credits: string[];
  featured: boolean;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    "slug": "zerolith",
    "client": "Zerolith",
    "year": "2026",
    "sectors": [
      "Crypto",
      "Security"
    ],
    "services": [
      "Brand",
      "Digital",
      "Product"
    ],
    "headline": "Zero-knowledge security, made legible.",
    "summary": "A brand and docs overhaul for a ZK monitoring stack used by rollup teams.",
    "intro": [
      "Zerolith built a serious product: runtime monitoring for zero-knowledge systems. The problem was the surface. Everything read like research notes, and teams evaluating the tool could not tell what was opinionated, what was configurable, and what was proven.",
      "We rebuilt the story around one idea: fewer leaps of faith. Then we shipped a visual system, a docs experience, and a launch site that treats technical buyers like adults."
    ],
    "brief": "Refresh positioning and the full digital surface so security teams can evaluate Zerolith in minutes, not days.",
    "approach": [
      "Run a narrative sprint with founders and two design partners to map objections, proof points, and the minimum credible claims.",
      "Design a visual system that feels precise without slipping into \u201centerprise grey\u201d.",
      "Rebuild docs IA around jobs-to-be-done: evaluate, install, integrate, monitor, escalate."
    ],
    "deliverables": [
      "Positioning and message map",
      "Identity system and type rules",
      "Docs redesign with component library",
      "Next.js marketing site with MDX docs shell",
      "Launch kit for X and community posts"
    ],
    "results": [
      {
        "label": "Time-to-first-integration",
        "value": "from ~1 day to ~2 hours"
      },
      {
        "label": "Docs bounce rate",
        "value": "down 28%"
      },
      {
        "label": "Security team trial sign-ups",
        "value": "up 19% month-on-month"
      }
    ],
    "images": [
      {
        "src": "/work/zerolith/hero.png",
        "alt": "Zerolith brand poster with grid and cyan accent",
        "caption": "A tighter identity built for technical trust."
      },
      {
        "src": "/work/zerolith/a.png",
        "alt": "Zerolith web layout mock image with modules",
        "caption": "Homepage modules for proof, product, and integration."
      },
      {
        "src": "/work/zerolith/b.png",
        "alt": "Zerolith docs UI mock image",
        "caption": "Docs layout prioritising setup paths and alert workflows."
      }
    ],
    "credits": [
      "Strategy, identity, web design, development",
      "Motion templates and social system"
    ],
    "featured": true,
    "accent": "#4DE1FF"
  },
  {
    "slug": "kitewire",
    "client": "Kitewire",
    "year": "2026",
    "sectors": [
      "AI",
      "DevTools"
    ],
    "services": [
      "Brand",
      "Digital",
      "Campaign"
    ],
    "headline": "Agent orchestration that feels human.",
    "summary": "Launch identity and site for an AI agent platform built for ops teams, not demos.",
    "intro": [
      "Kitewire sits in an awkward gap: too technical for the \u201cAI magic\u201d crowd, too new for risk-averse enterprise buyers. The product was strong, but the story did not explain why it mattered on a Tuesday afternoon when ops is on fire.",
      "We anchored the narrative on reliability and control. Then we designed a system that can flex from product UI to social clips without losing clarity."
    ],
    "brief": "Build a brand and launch presence that turns \u201cagents\u201d into a practical operations tool.",
    "approach": [
      "Translate product primitives into plain language: triggers, guardrails, audit trails, handoff.",
      "Create a visual language that can show flow without resorting to generic node diagrams.",
      "Write a launch sequence that works for X, newsletter, and partner announcements."
    ],
    "deliverables": [
      "Naming refinement and tagline system",
      "Visual identity and icon set",
      "Launch website with interactive flow blocks",
      "Demo deck template for founder sales",
      "Social kit for a 3-week launch run"
    ],
    "results": [
      {
        "label": "Waitlist conversion",
        "value": "18% from launch traffic"
      },
      {
        "label": "Qualified demo requests",
        "value": "3.2\u00d7 increase"
      },
      {
        "label": "Partner co-marketing",
        "value": "6 integrations announced"
      }
    ],
    "images": [
      {
        "src": "/work/kitewire/hero.png",
        "alt": "Kitewire hero poster with lime accent",
        "caption": "A system that stays sharp in motion."
      },
      {
        "src": "/work/kitewire/a.png",
        "alt": "Kitewire landing page modules mock image",
        "caption": "Flow-first layout, built for scanning."
      },
      {
        "src": "/work/kitewire/b.png",
        "alt": "Kitewire deck and social templates mock image",
        "caption": "Launch assets designed for iteration, not perfection."
      }
    ],
    "credits": [
      "Narrative, naming, identity, web design",
      "Launch copy and campaign system"
    ],
    "featured": true,
    "accent": "#A0FF4D"
  },
  {
    "slug": "fablemesh",
    "client": "FableMesh",
    "year": "2025",
    "sectors": [
      "Crypto",
      "Consumer"
    ],
    "services": [
      "Brand",
      "Digital"
    ],
    "headline": "Loyalty, without the cringe.",
    "summary": "A tokenised loyalty product for creators that needed restraint, not hype.",
    "intro": [
      "FableMesh makes loyalty portable. Creators can reward supporters across platforms without forcing anyone into a new app. The team asked for a brand that could sit next to consumer products without shouting \u201ccrypto\u201d.",
      "We built a warm identity and a website that explains the system with concrete examples instead of buzzwords."
    ],
    "brief": "Create a consumer-grade brand and site that makes onchain loyalty feel normal.",
    "approach": [
      "Define a voice that is direct, not evangelical.",
      "Design a brand kit that can be used by creators with minimal guidance.",
      "Build a landing site that teaches through scenarios: drop, reward, redeem."
    ],
    "deliverables": [
      "Brand identity and creator toolkit",
      "Illustration style and badge system",
      "Marketing site with template gallery",
      "Creator one-pagers and onboarding emails"
    ],
    "results": [
      {
        "label": "Creator onboarding completion",
        "value": "up 24%"
      },
      {
        "label": "Supporter redemption rate",
        "value": "41% in first 30 days"
      },
      {
        "label": "Brand recall (survey)",
        "value": "top-2 box 68%"
      }
    ],
    "images": [
      {
        "src": "/work/fablemesh/hero.png",
        "alt": "FableMesh poster with orange accent",
        "caption": "Friendly, but still sharp."
      },
      {
        "src": "/work/fablemesh/a.png",
        "alt": "FableMesh creator toolkit mock image",
        "caption": "A kit creators can use without a designer in the room."
      },
      {
        "src": "/work/fablemesh/b.png",
        "alt": "FableMesh scenario-based landing page mock image",
        "caption": "Teaching the product through real flows."
      }
    ],
    "credits": [
      "Brand system, creator toolkit",
      "Web design and build"
    ],
    "featured": true,
    "accent": "#FF9A4D"
  },
  {
    "slug": "shardwell",
    "client": "Shardwell",
    "year": "2025",
    "sectors": [
      "Crypto",
      "Gaming"
    ],
    "services": [
      "Brand",
      "Campaign"
    ],
    "headline": "A rollup with taste.",
    "summary": "Ecosystem launch kit for a gaming-focused L2 that needed culture, not charts.",
    "intro": [
      "Shardwell was launching into a noisy corner of crypto. The tech story was solid, but the public story was indistinguishable from every other chain announcement.",
      "We built an identity rooted in play and craft, then packaged it into a launch kit that partners could actually use."
    ],
    "brief": "Design an ecosystem-facing identity and campaign system for a public mainnet launch.",
    "approach": [
      "Build a visual language around \u201cplayable infrastructure\u201d.",
      "Create modular campaign assets for partner announcements and dev grants.",
      "Focus on a builder-first website that makes incentives easy to understand."
    ],
    "deliverables": [
      "Visual identity and motion rules",
      "Launch site and partner announcement templates",
      "Builder grant page system",
      "Merch concepts and event collateral"
    ],
    "results": [
      {
        "label": "Partner announcements shipped",
        "value": "20+ in launch week"
      },
      {
        "label": "Builder applications",
        "value": "480 in 14 days"
      },
      {
        "label": "Community growth",
        "value": "+32% followers"
      }
    ],
    "images": [
      {
        "src": "/work/shardwell/hero.png",
        "alt": "Shardwell poster with purple accent",
        "caption": "Culture-forward identity for a technical launch."
      },
      {
        "src": "/work/shardwell/a.png",
        "alt": "Shardwell campaign templates mock image",
        "caption": "Partner kits designed for reuse."
      },
      {
        "src": "/work/shardwell/b.png",
        "alt": "Shardwell builder page mock image",
        "caption": "Clear incentives, less jargon."
      }
    ],
    "credits": [
      "Identity, campaign design, motion direction",
      "Website design"
    ],
    "featured": false,
    "accent": "#B24DFF"
  },
  {
    "slug": "driftbyte",
    "client": "Driftbyte",
    "year": "2025",
    "sectors": [
      "AI",
      "Audio"
    ],
    "services": [
      "Brand",
      "Digital",
      "Product"
    ],
    "headline": "Voice AI for real products.",
    "summary": "Brand and web for a voice API built for latency, not novelty.",
    "intro": [
      "Driftbyte\u2019s API was fast and stable, but the public site felt like a weekend hackathon. The team needed to land credibility with developers and product leaders.",
      "We designed a brand system that feels modern without leaning on sci\u2011fi tropes, then built a site that makes performance claims easy to verify."
    ],
    "brief": "Rebuild Driftbyte\u2019s brand and site to support developer adoption and enterprise pilots.",
    "approach": [
      "Rewrite messaging around measurable performance: latency, uptime, and guardrails.",
      "Create a UI-forward visual language that pairs with technical docs.",
      "Design a demo flow that shows intent and failure modes."
    ],
    "deliverables": [
      "Brand identity and tone guide",
      "Landing site with benchmark modules",
      "Demo UI concepts and motion snippets",
      "Docs theme and component set"
    ],
    "results": [
      {
        "label": "Enterprise pilot leads",
        "value": "+14 in 6 weeks"
      },
      {
        "label": "Docs search usage",
        "value": "up 37%"
      },
      {
        "label": "Demo completion rate",
        "value": "62%"
      }
    ],
    "images": [
      {
        "src": "/work/driftbyte/hero.png",
        "alt": "Driftbyte poster with blue accent",
        "caption": "Performance-first positioning."
      },
      {
        "src": "/work/driftbyte/a.png",
        "alt": "Driftbyte benchmark page mock image",
        "caption": "Benchmarks presented like product, not marketing."
      },
      {
        "src": "/work/driftbyte/b.png",
        "alt": "Driftbyte docs UI mock image",
        "caption": "Docs and demos designed as one experience."
      }
    ],
    "credits": [
      "Positioning, identity, web design and build",
      "Product demo direction"
    ],
    "featured": false,
    "accent": "#4D7CFF"
  },
  {
    "slug": "vanta-relay",
    "client": "Vanta Relay",
    "year": "2025",
    "sectors": [
      "Crypto",
      "DePIN"
    ],
    "services": [
      "Brand",
      "Digital"
    ],
    "headline": "DePIN that does not cosplay telecom.",
    "summary": "Identity and website for a connectivity network that needed trust at street level.",
    "intro": [
      "Vanta Relay connects physical hotspots into a single network. The buyer is not just a protocol team, it is also operators putting hardware on rooftops and in shops.",
      "We balanced two audiences: builders who care about architecture, and operators who care about uptime and payouts."
    ],
    "brief": "Create an identity and site that can speak to both protocol teams and node operators.",
    "approach": [
      "Design a mark and type system that feels physical, not abstract.",
      "Build an operator section that explains rewards, maintenance, and support.",
      "Create a brand kit that partners can use for regional activations."
    ],
    "deliverables": [
      "Identity system and signage rules",
      "Marketing site with operator hub",
      "Operator onboarding PDF and quickstart",
      "Partner co-brand templates"
    ],
    "results": [
      {
        "label": "Operator applications",
        "value": "+1,100 in 30 days"
      },
      {
        "label": "Support tickets (setup)",
        "value": "down 33%"
      },
      {
        "label": "Partner regions launched",
        "value": "8"
      }
    ],
    "images": [
      {
        "src": "/work/vanta-relay/hero.png",
        "alt": "Vanta Relay poster with red accent",
        "caption": "A brand that can live on hardware."
      },
      {
        "src": "/work/vanta-relay/a.png",
        "alt": "Vanta Relay operator hub mock image",
        "caption": "Operator-first information architecture."
      },
      {
        "src": "/work/vanta-relay/b.png",
        "alt": "Vanta Relay partner templates mock image",
        "caption": "Templates for regional teams and co-brands."
      }
    ],
    "credits": [
      "Identity and web design",
      "Operator comms and templates"
    ],
    "featured": false,
    "accent": "#FF4D6D"
  },
  {
    "slug": "solace-exchange",
    "client": "Solace Exchange",
    "year": "2026",
    "sectors": [
      "Crypto",
      "Trading"
    ],
    "services": [
      "Digital",
      "Campaign"
    ],
    "headline": "A perps brand that does not yell.",
    "summary": "A calmer digital identity and launch system for a perps venue built for pros.",
    "intro": [
      "Solace was building a serious trading venue, but the space is saturated with neon charts and aggressive language. The team wanted the opposite: confidence, composure, and a brand that looks good in a screenshot.",
      "We designed a restrained interface-first system, then created a launch kit for listings, incentives, and partner drops."
    ],
    "brief": "Design a product-forward brand and campaign system for a perps launch and ongoing feature drops.",
    "approach": [
      "Lean into negative space and typographic hierarchy.",
      "Create motion rules for price and position states without typical trading clich\u00e9s.",
      "Build a campaign cadence that ships weekly without burning the team."
    ],
    "deliverables": [
      "Design system for product marketing",
      "Landing pages for launch, incentives, and listings",
      "Motion templates for updates",
      "Partner drop toolkit"
    ],
    "results": [
      {
        "label": "Launch week sign-ups",
        "value": "32,400"
      },
      {
        "label": "KYC completion",
        "value": "74%"
      },
      {
        "label": "Weekly feature update cadence",
        "value": "sustained for 10 weeks"
      }
    ],
    "images": [
      {
        "src": "/work/solace-exchange/hero.png",
        "alt": "Solace Exchange poster with yellow accent",
        "caption": "Confidence over noise."
      },
      {
        "src": "/work/solace-exchange/a.png",
        "alt": "Solace Exchange landing pages mock image",
        "caption": "A modular page system for constant shipping."
      },
      {
        "src": "/work/solace-exchange/b.png",
        "alt": "Solace Exchange motion templates mock image",
        "caption": "Motion built around states traders actually care about."
      }
    ],
    "credits": [
      "Digital design system",
      "Campaign creative direction"
    ],
    "featured": false,
    "accent": "#FFD24D"
  },
  {
    "slug": "aurora-matrix",
    "client": "Aurora Matrix",
    "year": "2026",
    "sectors": [
      "AI",
      "Marketplace"
    ],
    "services": [
      "Brand",
      "Digital"
    ],
    "headline": "Compute buyers are not impressed by gradients.",
    "summary": "Repositioning and web build for an inference marketplace with a trust problem.",
    "intro": [
      "Aurora Matrix connected buyers to inference providers. The product worked, but new visitors could not tell how pricing, reliability, and data handling were managed.",
      "We rebuilt the experience around transparency: clear service levels, plain-language data policy, and a UI that makes the marketplace feel governed."
    ],
    "brief": "Rebuild the website and story so buyers can evaluate the marketplace quickly and safely.",
    "approach": [
      "Rewrite messaging around the three concerns buyers raise first: performance, privacy, and predictability.",
      "Design \u201ctrust modules\u201d that show policy and service levels up front.",
      "Create a visual system that feels governed and calm."
    ],
    "deliverables": [
      "Positioning and proof framework",
      "Website redesign and Next.js build",
      "Pricing and SLA layout system",
      "Provider profile page templates"
    ],
    "results": [
      {
        "label": "Pricing page exits",
        "value": "down 21%"
      },
      {
        "label": "Buyer sign-ups",
        "value": "+26%"
      },
      {
        "label": "Provider applications",
        "value": "+18%"
      }
    ],
    "images": [
      {
        "src": "/work/aurora-matrix/hero.png",
        "alt": "Aurora Matrix poster with teal accent",
        "caption": "Trust is a design job."
      },
      {
        "src": "/work/aurora-matrix/a.png",
        "alt": "Aurora Matrix pricing and SLA mock image",
        "caption": "SLA-first layout for serious buyers."
      },
      {
        "src": "/work/aurora-matrix/b.png",
        "alt": "Aurora Matrix provider profile mock image",
        "caption": "Profiles built for comparison."
      }
    ],
    "credits": [
      "Positioning and digital design",
      "Web build and information architecture"
    ],
    "featured": false,
    "accent": "#4DFFD2"
  },
  {
    "slug": "cinder-id",
    "client": "Cinder ID",
    "year": "2025",
    "sectors": [
      "Crypto",
      "Identity"
    ],
    "services": [
      "Brand",
      "Product"
    ],
    "headline": "Reputation without the theatre.",
    "summary": "Identity and product surfaces for an onchain reputation layer.",
    "intro": [
      "Cinder ID helps communities and protocols separate signal from spam. It is sensitive work: too much surveillance vibe and people bounce, too little clarity and teams cannot trust the output.",
      "We built a brand that feels neutral and modern, then designed product surfaces that explain scoring without exposing user data."
    ],
    "brief": "Create an identity and product UI patterns for an onchain reputation layer.",
    "approach": [
      "Design a mark that reads as infrastructure, not social network.",
      "Create visual patterns for confidence and risk without \u201cred means bad\u201d panic.",
      "Build a UI kit that can be embedded in partner apps."
    ],
    "deliverables": [
      "Identity system and iconography",
      "Embeddable UI kit (Figma + components)",
      "Partner integration screens",
      "Short-form explainer assets"
    ],
    "results": [
      {
        "label": "Partner integrations",
        "value": "9 in first quarter"
      },
      {
        "label": "Manual review workload",
        "value": "down 40%"
      },
      {
        "label": "False positive disputes",
        "value": "down 17%"
      }
    ],
    "images": [
      {
        "src": "/work/cinder-id/hero.png",
        "alt": "Cinder ID poster with copper accent",
        "caption": "A neutral, infrastructure-first identity."
      },
      {
        "src": "/work/cinder-id/a.png",
        "alt": "Cinder ID UI kit mock image",
        "caption": "Embeddable patterns for trust and risk."
      },
      {
        "src": "/work/cinder-id/b.png",
        "alt": "Cinder ID partner integration mock image",
        "caption": "Integration screens designed for partner teams."
      }
    ],
    "credits": [
      "Brand and product design",
      "Component and integration system"
    ],
    "featured": false,
    "accent": "#FF6F4D"
  },
  {
    "slug": "fjord-treasury",
    "client": "Fjord Treasury",
    "year": "2025",
    "sectors": [
      "Crypto",
      "FinOps"
    ],
    "services": [
      "Brand",
      "Digital",
      "Product"
    ],
    "headline": "Treasury tools that feel calm.",
    "summary": "Brand and product refresh for a treasury console used by DAOs and foundations.",
    "intro": [
      "Treasury dashboards are often designed like trading terminals. Fjord Treasury needed the opposite. The users are stewards managing runways, contributors, and risk.",
      "We rebuilt the visual language around calm states, clear permissions, and better reporting primitives."
    ],
    "brief": "Refresh the brand and key product surfaces to reduce error and increase confidence for treasury operators.",
    "approach": [
      "Audit the most common failure modes: wrong wallet, wrong network, wrong permission.",
      "Create UI patterns for approvals and checkpoints.",
      "Align product UI and marketing site so the story stays consistent."
    ],
    "deliverables": [
      "Brand refresh and product UI rules",
      "Dashboard redesign concepts",
      "Marketing site redesign",
      "Reporting templates for monthly updates"
    ],
    "results": [
      {
        "label": "Approval mistakes",
        "value": "down 22%"
      },
      {
        "label": "Monthly report creation time",
        "value": "from 3 hours to 45 minutes"
      },
      {
        "label": "User retention",
        "value": "+11%"
      }
    ],
    "images": [
      {
        "src": "/work/fjord-treasury/hero.png",
        "alt": "Fjord Treasury poster with icy blue accent",
        "caption": "Designed for calm operators."
      },
      {
        "src": "/work/fjord-treasury/a.png",
        "alt": "Fjord Treasury dashboard mock image",
        "caption": "A dashboard that reduces panic."
      },
      {
        "src": "/work/fjord-treasury/b.png",
        "alt": "Fjord Treasury reporting templates mock image",
        "caption": "Reporting templates for foundations and DAOs."
      }
    ],
    "credits": [
      "Brand refresh and product design",
      "Web design"
    ],
    "featured": false,
    "accent": "#4DD2FF"
  },
  {
    "slug": "nova-commons",
    "client": "Nova Commons",
    "year": "2025",
    "sectors": [
      "Community",
      "Crypto"
    ],
    "services": [
      "Brand",
      "Campaign",
      "Digital"
    ],
    "headline": "Community, but organised.",
    "summary": "A brand and campaign system for an ecosystem hub built to reduce chaos.",
    "intro": [
      "Nova Commons was built to coordinate contributors across protocols. The existing brand looked like a forum. The product, however, was closer to an operating system for community work.",
      "We rebuilt the identity around structure and momentum, then shipped a campaign kit to onboard partners without constant design requests."
    ],
    "brief": "Rebrand and relaunch the ecosystem hub with a clearer story and a scalable campaign kit.",
    "approach": [
      "Define a voice that respects contributors\u2019 time.",
      "Design a brand system that can live inside product UI, not just marketing.",
      "Create templates for weekly updates, bounties, and events."
    ],
    "deliverables": [
      "Rebrand and visual system",
      "Website and onboarding pages",
      "Campaign kit for bounties, events, and updates",
      "Community playbook PDF"
    ],
    "results": [
      {
        "label": "Contributor sign-ups",
        "value": "+29%"
      },
      {
        "label": "Bounty completion rate",
        "value": "up 16%"
      },
      {
        "label": "Partner ecosystems onboarded",
        "value": "12"
      }
    ],
    "images": [
      {
        "src": "/work/nova-commons/hero.png",
        "alt": "Nova Commons poster with pink accent",
        "caption": "A system that can scale with the community."
      },
      {
        "src": "/work/nova-commons/a.png",
        "alt": "Nova Commons campaign templates mock image",
        "caption": "Templates that keep momentum without chaos."
      },
      {
        "src": "/work/nova-commons/b.png",
        "alt": "Nova Commons onboarding pages mock image",
        "caption": "Onboarding designed for contributors, not tourists."
      }
    ],
    "credits": [
      "Brand and campaign system",
      "Web design"
    ],
    "featured": false,
    "accent": "#FF4DCA"
  },
  {
    "slug": "moonvault",
    "client": "Moonvault",
    "year": "2025",
    "sectors": [
      "Crypto",
      "Consumer"
    ],
    "services": [
      "Digital",
      "Product"
    ],
    "headline": "Self-custody that feels obvious.",
    "summary": "Product and onboarding redesign for a wallet built for everyday users.",
    "intro": [
      "Moonvault had good fundamentals, but onboarding was doing too much too soon. New users hit seed phrases, networks, and fees before they had any momentum.",
      "We redesigned the onboarding and key flows so users can do one meaningful thing quickly, then learn the rest in context."
    ],
    "brief": "Reduce onboarding friction and redesign the key flows for a consumer wallet.",
    "approach": [
      "Audit the first 10 minutes: where do users drop, and why.",
      "Design progressive disclosure for risk and security.",
      "Build a UI kit that supports future features without redesigning everything."
    ],
    "deliverables": [
      "Onboarding flow redesign",
      "Core wallet screens and component set",
      "Marketing site refresh",
      "In-app education patterns"
    ],
    "results": [
      {
        "label": "Onboarding completion",
        "value": "up 27%"
      },
      {
        "label": "First transaction success",
        "value": "up 19%"
      },
      {
        "label": "Support requests (seed phrase)",
        "value": "down 35%"
      }
    ],
    "images": [
      {
        "src": "/work/moonvault/hero.png",
        "alt": "Moonvault poster with violet accent",
        "caption": "Clarity beats complexity."
      },
      {
        "src": "/work/moonvault/a.png",
        "alt": "Moonvault onboarding screens mock image",
        "caption": "Progressive disclosure for real people."
      },
      {
        "src": "/work/moonvault/b.png",
        "alt": "Moonvault in-app education patterns mock image",
        "caption": "Education built into the flow."
      }
    ],
    "credits": [
      "Product UX and UI",
      "Marketing refresh"
    ],
    "featured": false,
    "accent": "#8F7CFF"
  }
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
