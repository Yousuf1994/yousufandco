
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
    id: "diagnostic",
    title: "Growth Diagnostic & Decision Blueprint",
    timeline: "30 Days",
    description: "A comprehensive audit of your growth systems to identify leakage and prioritize high-leverage fixes.",
    idealFor: "Founders & Heads of Growth who feel their data is messy and roadmap is reactive.",
    deliverables: [
      "Full Funnel Decomposition",
      "Channel Efficiency Audit",
      "Measurement Gap Analysis",
      "90-Day Execution Roadmap"
    ],
    cta: "Explore Diagnostic"
  },
  {
    id: "setup",
    title: "Measurement & Decision Intelligence Setup",
    timeline: "2–4 Weeks",
    description: "Building the infrastructure you need to make data-backed decisions without drowning in dashboards.",
    idealFor: "Teams that have GA4/Mixpanel but don't trust the numbers.",
    deliverables: [
      "Tracking Plan Implementation",
      "Core KPI Dashboard Construction",
      "Attribution Model Setup",
      "Team Training on Data Usage"
    ],
    cta: "Explore Setup"
  },
  {
    id: "advisory",
    title: "Fractional Growth Advisory",
    timeline: "Monthly Retainer",
    description: "Ongoing strategic guidance to keep your team focused on outcomes, not just activity.",
    idealFor: "Scale-ups needing senior growth leadership without the full-time headcount.",
    deliverables: [
      "Weekly Strategy Syncs",
      "Experiment Design Review",
      "Hiring & Team Structure Support",
      "Board Deck Preparation"
    ],
    cta: "Explore Advisory"
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
    id: "ecommerce-rev",
    title: "Scaling Revenue While Stabilizing CAC",
    category: "Ecommerce",
    description: "How a D2C brand grew revenue 40% while keeping acquisition costs flat through better retention loops.",
    metrics: "Traffic up, Revenue flat → Revenue up",
    isSample: true,
    context: "A D2C home goods brand was scaling ad spend aggressively but seeing diminishing returns. Revenue was plateauing despite higher traffic.",
    signals: [
      "CAC increased by 35% in 3 months",
      "Second-purchase rate dropped from 25% to 15%",
      "Email open rates were healthy, but CTR was low"
    ],
    hypotheses: [
      "The acquisition mix was too reliant on broad targeting, bringing in low-intent users.",
      "The post-purchase email flow was generic and didn't incentivize the second purchase soon enough.",
      "Landing pages were optimized for clicks, not AOV."
    ],
    testPlan: [
      "Audit and restructure Meta ad account to focus on LTV-based lookalikes.",
      "Implement a personalized 'replenishment' email flow based on product category.",
      "A/B test landing page bundles to increase initial AOV."
    ],
    roadmap: [
      "Month 1: Ad account restructure & tracking fix.",
      "Month 2: Email automation overhaul.",
      "Month 3: Landing page CRO & bundle testing."
    ]
  },
  {
    id: "b2b-lead-gen",
    title: "Fixing the Leaky Bucket in B2B Lead Gen",
    category: "SaaS / Lead Gen",
    description: "Diagnosing why rising CPL wasn't translating to pipeline, and implementing a qualification layer.",
    metrics: "CPL rising, Pipeline flat → Qualified Pipeline +30%",
    isSample: true,
    context: "A B2B SaaS company was generating plenty of leads through LinkedIn ads, but the sales team complained about lead quality.",
    signals: [
      "MQL to SQL conversion rate dropped to < 5%",
      "Sales cycle length increased by 20%",
      "High bounce rate on pricing page"
    ],
    hypotheses: [
      "Ad copy promised features that were only available in the Enterprise plan, attracting wrong fit.",
      "Lead forms were too short, allowing low-intent submissions.",
      "Nurture sequences were not segmenting by industry."
    ],
    testPlan: [
      "Add qualification fields (Company Size, Role) to lead forms.",
      "Rewrite ad copy to be more specific about the ideal customer profile.",
      "Create industry-specific landing pages."
    ],
    roadmap: [
      "Week 1-2: Form & Tracking Setup.",
      "Week 3-4: Ad Copy & Landing Page refresh.",
      "Month 2: Nurture sequence segmentation."
    ]
  },
  {
    id: "app-activation",
    title: "Turning Installs into Active Users",
    category: "Mobile App",
    description: "Revamping the onboarding flow to focus on the 'Aha!' moment rather than just signups.",
    metrics: "Installs high, Activation low → Activation +15%",
    isSample: true,
    context: "A productivity app had great organic install growth but 60% of users churned within Day 1.",
    signals: [
      "High drop-off at the 'Connect Calendar' step during onboarding.",
      "Users who completed onboarding but didn't create a task churned at 90%.",
      "Support tickets related to 'how to start' were high."
    ],
    hypotheses: [
      "The 'Connect Calendar' permission request was too early and scary.",
      "Users needed to experience the core value (creating a task) *before* being forced to configure settings.",
      "The empty state was uninspiring."
    ],
    testPlan: [
      "Move permission requests to *after* the first successful task creation.",
      "Add a 'template task' to the empty state so users aren't staring at a blank screen.",
      "Implement a progressive onboarding checklist."
    ],
    roadmap: [
      "Sprint 1: Onboarding flow re-ordering.",
      "Sprint 2: Empty state design & implementation.",
      "Sprint 3: Permission prompt optimization."
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
    answer: "This is for Seed to Series B startups that have found some product-market fit but are struggling to scale efficiently. Typically, you have a product, some traction, but growth feels chaotic or unpredictable."
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
