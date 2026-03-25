
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
  challenge: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "auto-revenue",
    title: "Global Automotive Revenue Efficiency",
    category: "Automotive",
    challenge: "A major automotive brand faced a fragmented marketing tech stack and 'invisible' attribution gaps during a high-stakes regional launch.",
    solution: "Led the digital Go-to-Market (GTM) strategy by applying funnel diagnostics and CPA-based optimization to reallocate spend across regional markets.",
    result: "Reduced the marketing analytics budget by ~40% through vendor rationalization while improving media efficiency by 5%."
  },
  {
    id: "identity-resolution",
    title: "Identity Resolution & Attribution Accuracy",
    category: "Data & Analytics",
    challenge: "Digital media impact on vehicle sales was difficult to measure accurately due to poor attribution signal quality.",
    solution: "Implemented a CDP-based identity matching framework to bridge the gap between digital intent and physical sales.",
    result: "Improved attribution signal quality by 11% and drove a 2% increase in digitally influenced sales."
  },
  {
    id: "content-growth",
    title: "Large-Scale Content & Partnership Growth",
    category: "Social Media",
    challenge: "A leading social platform needed to scale high-intent sports content and translate partnerships into measurable ad products.",
    solution: "Architected strategic partnerships with premium publishers and integrated CPA benchmarks directly into media packages.",
    result: "Generated 6 Billion views for a single activation and boosted viewership by 50% across South Asian markets."
  },
  {
    id: "product-adoption",
    title: "High-Velocity Product Adoption",
    category: "SaaS",
    challenge: "Facing high market entry barriers and competitor saturation for complex technical SaaS solutions.",
    solution: "Pivoted the sales strategy from 'feature-selling' to value-based consulting and deep-dive cost-benefit analysis.",
    result: "Ranked Top 10 globally for product adoption and secured the #2 all-time sales record for two consecutive months."
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
