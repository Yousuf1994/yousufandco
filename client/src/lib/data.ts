
// Site content data

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
    title: "AI Readiness Diagnostic",
    timeline: "Phase 1 · Fixed scope · 2–3 weeks",
    description: "A structured assessment of your organization's AI readiness — where your data lives, what's connected, where the gaps are, and which AI use cases would deliver the highest ROI fastest. You get a prioritized report you can actually act on.",
    idealFor: "Organizations with an AI mandate but no clear starting point.",
    deliverables: [
      "Data infrastructure inventory",
      "Use case identification and feasibility scoring",
      "Prioritized AI opportunity roadmap",
      "Recommended next steps with effort/impact matrix"
    ],
    cta: "Start with a Diagnostic"
  },
  {
    id: "fractional",
    title: "Fractional AI Product Manager",
    timeline: "Phase 2 · Ongoing · Min 3 months",
    description: "Embedded part-time as your AI PM. I own the use case from discovery through deployment — coordinating engineering, data, and agency teams, making sure every decision stays tied to the commercial goal.",
    idealFor: "Teams with a use case defined but no one to drive it end-to-end.",
    deliverables: [
      "Weekly stakeholder alignment",
      "Use case scoping and requirements",
      "Vendor and agency coordination",
      "Launch and adoption planning",
      "Performance measurement framework"
    ],
    cta: "Explore Fractional Engagement"
  },
  {
    id: "advisory",
    title: "Strategic Advisory",
    timeline: "Ongoing · Monthly retainer",
    description: "Ongoing guidance on AI product strategy — reviewing decisions, pressure-testing ideas, and helping leadership navigate the gap between what's technically possible and what's commercially valuable.",
    idealFor: "Leaders who need a trusted external perspective on AI decisions.",
    deliverables: [
      "Monthly strategy sessions",
      "On-demand input on key decisions",
      "AI landscape and vendor guidance",
      "Team capability building"
    ],
    cta: "Explore Advisory"
  }
];

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  oneLiner: string;
  expanded: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "warehouse-ai",
    tag: "AI Architecture · INFINITI MENA · 2024–Present",
    title: "Warehouse-Native AI Marketing Architecture",
    oneLiner: "Designed end-to-end AI infrastructure connecting data warehouse, CDP, and GenAI layers.",
    expanded: `Most enterprises connect AI to fragmented data sources and wonder why outputs are inconsistent. I designed this architecture to solve that — a warehouse-first approach where all data unifies before any AI or activation layer touches it.

The architecture flows from multiple data sources (web analytics, CRM, connected vehicle data, surveys) through cloud infrastructure and ETL pipelines into a central Snowflake data warehouse — the single source of truth. From there, identity resolution and data science models run on clean data. An AI layer connects both native in-warehouse LLMs and external GenAI services (AWS Bedrock, Claude, RAG) directly to the warehouse. A CDP handles activation — segment building, real-time events, identity matching — and outputs feed into paid media, CRM journeys, BI dashboards, and GenAI-powered NLQ insights.

My role: Designed the architecture through deep research, technical conversations with the data engineering team, and AI-assisted architectural thinking. Proposed it internally. Global team independently arrived at the same solution — validating the approach.

Why warehouse-native: All data unified before activation. AI runs on clean, verified data. Audiences built on golden profiles, not probabilistic guesses.`
  },
  {
    id: "reporting-infra",
    tag: "Data Product · INFINITI MENA · 2024–Present",
    title: "From Spreadsheet to Real-Time Decision Infrastructure",
    oneLiner: "Diagnosed why leadership dashboards weren't used — then rebuilt the entire reporting infrastructure.",
    expanded: `INFINITI's regional funnel reporting ran on manual Excel sheets submitted by dealerships weekly. The data existed — but it arrived late, nobody trusted it, and CRM activations were firing on stale information.

I didn't inherit a brief to fix this. I noticed it wasn't being used and went to find out why. I sat with the team, listened to how they talked about data in meetings, and mapped the gap between what the dashboard showed and what leadership actually needed in 30 seconds.

What I found: Data arrived late via manual uploads. The table structure required too much mental effort. No model or market level drill-down. CRM had no real-time signal to act on.

Phase 1 — Redesigned reporting: Three new dashboard views — a funnel tracking QA to leads to footfall to private sales by model and market, a sub-topic breakdown, and a market distribution view. Color-coded tracking status so performance was readable at a glance.

Phase 2 — Automated data ingestion: Integrated social media lead sources directly into the platform and connected dealership systems — eliminating manual uploads entirely. Data now flows in real time. CRM activations trigger on live signals.

Phase 3 (in progress) — Closing the loop: Working with dealerships to implement standardized lead status documentation so qualified, disqualified, and converted statuses update automatically.

The real lesson: The data was never the problem. The problem was that nobody had built the infrastructure to make it trustworthy, timely, and readable.`
  },
  {
    id: "app-launch",
    tag: "Product Launch · GCC · 2024",
    title: "Zero-Budget App Launch — 27% Activation in Week One",
    oneLiner: "Business-side PM for INFINITI Beyond membership app across GCC. 27% activation. Zero launch budget.",
    expanded: `INFINITI Beyond is a membership program for INFINITI owners across GCC — free to join, exclusive benefits. The app was built to bring that membership to life digitally.

My role: Focal point on the business side throughout the entire project. Sat in all key decisions and approvals alongside the GM. Worked directly with the app development team to ensure design was executed as intended and features were prioritized around actual business needs. Led CRM strategy and timelines with the CRM agency. Owned the launch coordination and release approval process.

The hard part: Getting customers to download and activate an app they didn't know existed — with zero launch budget. No paid media. No sponsored push.

What we did: Built a 360 activation plan using only what we had — organic social content coordinated with the marketing team, and a targeted CRM communications sequence to existing INFINITI owners. Sequenced around intent signals and ownership milestones to make outreach feel relevant, not generic.

The outcome: 27% user activation in week one across GCC markets.

The real lesson: A launch doesn't need budget. It needs a clear audience, a relevant message, and someone making sure every team is moving in the same direction at the same time.`
  }
];

export const frameworkSteps = [
  {
    number: "01",
    title: "Understand the problem",
    description: "Before anything else, I want to know what's actually broken — not the symptom, but the root cause. This means stakeholder interviews, reviewing existing data, and mapping the gap between what leadership thinks is happening and what the data actually shows."
  },
  {
    number: "02",
    title: "Inventory what exists",
    description: "What data do you have? Where does it live? What tools are connected — and which ones aren't talking to each other? What have you already tried? I need to understand the full landscape before designing anything."
  },
  {
    number: "03",
    title: "Map feasibility",
    description: "Not every AI idea is worth building. I assess technical feasibility against your existing infrastructure, data quality, team capability, and commercial return. I won't propose a solution that can't be deployed."
  },
  {
    number: "04",
    title: "Design the solution",
    description: "With the problem understood and feasibility mapped, I design the solution architecture — use case definition, data flow, tooling, integration points, and success metrics. Everything tied to a commercial outcome."
  },
  {
    number: "05",
    title: "Drive to deployment",
    description: "I don't hand over a slide deck and disappear. I stay in the room — coordinating engineering, agencies, and leadership until the solution is live, adopted, and measurable."
  }
];

export const faqs = [
  {
    question: "Who is this for?",
    answer: "I work with two types of organizations:\n\n1. Enterprises with an AI mandate — you've been told to 'do AI' but nobody can bridge the gap between what IT can build and what the business actually needs.\n\n2. Scale-ups with data debt — you have data everywhere but it's fragmented, untrustworthy, and nobody uses the dashboards. You know there's value in there. You need someone to find it."
  },
  {
    question: "What are the timelines?",
    answer: "The AI Readiness Diagnostic takes 2–3 weeks. Fractional PM engagements are ongoing with a minimum 3-month commitment. Advisory is a monthly retainer."
  },
  {
    question: "What access do you need?",
    answer: "For a diagnostic, I need read-only access to your analytics platforms, ad accounts, and CRM. I treat all data with strict confidentiality and can sign an NDA before any access is granted."
  },
  {
    question: "How does pricing work?",
    answer: "Engagements start at $1000 for diagnostics. Advisory retainers are customized based on the level of involvement required."
  }
];

export const products = [
  {
    id: "finance-dashboard",
    status: "LIVE",
    title: "Personal Finance Intelligence Dashboard",
    builtWith: "Claude Code · Python · Streamlit",
    description: "I had a problem — multiple bank accounts, multiple currencies, no clear picture of where money was going. So I built a solution. Upload any bank statement (PDF or Excel) and get an instant financial dashboard: total income, spend, savings rate, net worth, spending by category, year-by-year trends, and outlier detection. Multi-account support. Auto-categorization with manual override. Built entirely through Claude Code prompting in 3 intensive days. The hardest part was statement parsing — UAE bank formats are inconsistent. Solved it iteratively through prompting.",
    cta: "Request demo",
    ctaHref: "mailto:yousufmukhtar05@gmail.com"
  },
  {
    id: "use-case-tool",
    status: "COMING SOON",
    title: "AI Use Case Discovery Tool",
    builtWith: "Claude API · In development",
    description: "Most companies don't fail at AI because of the technology. They fail at use case discovery. This tool guides business teams through a structured diagnostic — inventory your data, map your workflows, score feasibility, and get a prioritized report of your highest-ROI AI opportunities. Built on the same methodology I've used at INFINITI. Launching Q4 2026.",
    cta: "Join waitlist",
    ctaHref: "mailto:yousufmukhtar05@gmail.com"
  },
  {
    id: "ask-me",
    status: "LIVE",
    title: "Ask Me — Personal AI Clone",
    builtWith: "Claude API",
    description: "A chatbot trained on my background, skills, working style, and honest limitations. It tells my story, answers questions about my experience, and qualifies visitors — hiring managers and potential clients alike. When the conversation goes deep, it redirects to a real call. Try it in the Ask Me section.",
    cta: "Try it now",
    ctaHref: "/askme"
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
