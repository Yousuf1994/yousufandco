
// Mock data for the consulting website

export interface Service {
  id: string;
  title: string;
  timeline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "audit",
    title: "The Revenue Integrity Audit",
    timeline: "Phase 1",
    description: "A deep-dive diagnostic into your funnel, attribution signals, and data quality to find immediate 'Found Money'.",
    idealFor: "Brands losing track of true ROI.",
    deliverables: [
      "Funnel Decomposition",
      "Attribution Signal Review",
      "Data Quality Assessment",
      "Immediate ROI Opportunities"
    ],
    cta: "Explore Audit"
  },
  {
    id: "blueprint",
    title: "The Technical Architecture Blueprint",
    timeline: "Phase 2",
    description: "I design the 'plumbing'—from CRM mapping to Identity Resolution—so your tech team has a bulletproof execution roadmap.",
    idealFor: "Teams with disconnected enterprise tools.",
    deliverables: [
      "CRM Data Mapping",
      "Identity Resolution Strategy",
      "Tech Stack Rationalization",
      "Execution Roadmap"
    ],
    cta: "Explore Blueprint"
  },
  {
    id: "orchestration",
    title: "AI & Automation Orchestration",
    timeline: "Phase 3",
    description: "Implementing LLM-driven workflows and API integrations (n8n/OpenAI) to automate personalization and scale your lead nurturing.",
    idealFor: "Companies ready to scale through automation.",
    deliverables: [
      "LLM Workflow Design",
      "API Integrations (n8n)",
      "Automated Lead Nurturing",
      "Personalization at Scale"
    ],
    cta: "Explore Orchestration"
  }
];

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics?: string;
  isSample: boolean;
  context: string;
  signals: string[];
  hypotheses: string[];
  testPlan: string[];
  roadmap: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "auto-vendor",
    title: "Slashed marketing analytics spend by 40%",
    category: "Automotive",
    description: "Through strategic vendor rationalization for a global automotive brand.",
    metrics: "Spend -40% → Same Analytics Quality",
    isSample: true,
    context: "A global automotive brand was paying for redundant enterprise analytics tools.",
    signals: [
      "Overlapping CDP and CRM capabilities",
      "Low utilization of premium features",
      "High licensing costs"
    ],
    hypotheses: [
      "Consolidating tools could reduce costs without impacting data fidelity.",
      "The team was only using 20% of the tools they paid for.",
      "Vendor overlap was causing confusion, not clarity."
    ],
    testPlan: [
      "Audit all existing marketing tech contracts and usage.",
      "Map required capabilities against core tools.",
      "Negotiate exits or downgrades for unused software."
    ],
    roadmap: [
      "Month 1: Vendor Audit.",
      "Month 2: Capability Mapping.",
      "Month 3: Implementation & Consolidation."
    ]
  },
  {
    id: "attribution-signal",
    title: "Improved attribution signal quality by 11%",
    category: "E-commerce",
    description: "Leading to a measurable 2% increase in digitally influenced sales.",
    metrics: "Signal +11% → Sales +2%",
    isSample: true,
    context: "A brand had 'Attribution Blindness' leading to inefficient ad spend.",
    signals: [
      "Sales figures didn't match platform dashboards",
      "High percentage of 'Direct' traffic masking true sources",
      "Rising CAC across paid channels"
    ],
    hypotheses: [
      "First-party data wasn't being correctly passed back to ad platforms.",
      "Identity resolution was failing across devices.",
      "Multi-touch attribution models were misconfigured."
    ],
    testPlan: [
      "Implement server-side tracking via CAPI.",
      "Fix identity resolution gaps in the CRM.",
      "Calibrate attribution models to match backend sales data."
    ],
    roadmap: [
      "Month 1: Tracking infrastructure overhaul.",
      "Month 2: Identity mapping.",
      "Month 3: Attribution model training."
    ]
  },
  {
    id: "tiktok-gtm",
    title: "Orchestrated regional GTM strategies",
    category: "Social Media",
    description: "For platforms like TikTok, driving billions of views and millions in follower growth.",
    metrics: "Billions of views → Millions of followers",
    isSample: true,
    context: "A global platform needed to localize and accelerate their GTM strategy.",
    signals: [
      "Slow adoption in key emerging markets",
      "Content not resonating with local nuances",
      "High creator acquisition cost"
    ],
    hypotheses: [
      "A localized, culturally relevant GTM playbook would accelerate growth.",
      "Empowering local micro-creators would drive more organic views.",
      "Automating content amplification would scale reach."
    ],
    testPlan: [
      "Design localized content pillars and creator incentives.",
      "Deploy AI-driven content moderation and trend identification.",
      "Structure a regional launch playbook for rapid deployment."
    ],
    roadmap: [
      "Phase 1: Market Research & Playbook Design.",
      "Phase 2: Creator Network Seeding.",
      "Phase 3: Scale & Optimization."
    ]
  }
];

export const frameworkSteps = [
  {
    number: "01",
    title: "Funnel Decomposition",
    description: "We break down your user journey into granular steps to find exactly where users drop off."
  },
  {
    number: "02",
    title: "Channel Efficiency Map",
    description: "We audit every acquisition channel to understand true ROI and scalability limits."
  },
  {
    number: "03",
    title: "Measurement Gap Review",
    description: "We identify blind spots in your data that are preventing confident decision making."
  },
  {
    number: "04",
    title: "Leverage-Point Prioritization",
    description: "We rank potential fixes by impact vs. effort to focus your roadmap on big wins."
  },
  {
    number: "05",
    title: "90-Day Execution Roadmap",
    description: "We build a step-by-step plan for your team to execute, with clear success metrics."
  }
];

export const faqs = [
  {
    question: "Who is this for?",
    answer: "This is primarily for two types of companies:\n\n1. Seed to Series B startups that have found some product-market fit but are struggling to scale efficiently. Typically, you have a product, some traction, but growth feels chaotic or unpredictable.\n\n2. Established, traditional businesses that need a new way of doing things. You're looking to improve efficiencies, modernize operations, and drive real outcomes rather than just burning through marketing budgets."
  },
  {
    question: "What is the timeline?",
    answer: "The Growth Diagnostic takes 30 days. Implementation projects typically run 4-8 weeks. Advisory is an ongoing monthly engagement with a 3-month minimum."
  },
  {
    question: "What access do you need?",
    answer: "I'll need read-only access to your analytics (GA4, Mixpanel, Amplitude), ad accounts (Meta, Google, LinkedIn), and CRM (HubSpot, Salesforce). I treat all data with strict confidentiality."
  },
  {
    question: "How does pricing work?",
    answer: "Engagements start at $5k for diagnostics. Advisory retainers are customized based on the level of involvement required."
  }
];

export const posts = [
  {
    id: 1,
    title: "The fallacy of 'More Traffic'",
    excerpt: "Why pouring money into the top of the funnel won't fix a broken retention bucket.",
    date: "Oct 12, 2024"
  },
  {
    id: 2,
    title: "Metric Trees vs. Dashboards",
    excerpt: "How to structure your data so it actually answers questions instead of just looking pretty.",
    date: "Sep 28, 2024"
  },
  {
    id: 3,
    title: "When to hire a Head of Growth",
    excerpt: "Don't hire a senior leader until you have these 3 things in place.",
    date: "Sep 15, 2024"
  }
];
