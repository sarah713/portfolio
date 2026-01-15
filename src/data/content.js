export const profile = {
  name: "Sarah Kulsoom",
  role: "Product-minded Software Engineer",
  location: "Sharjah, UAE",
  blurb:
    "Software engineer with 2+ years shipping features for millions of users on market-scale consumer systems. I combine technical execution with product instincts—using data, cross-functional collaboration, and user empathy to build reliable, high-quality products that solve real problems.",
  links: {
    email: "mailto:sarahkulsoom18@gmail.com",
    github: "https://github.com/sarah713",
    linkedin: "https://linkedin.com/in/sarahk18",
    resume: "/Sarah_Kulsoom_Product_Associate.pdf",
  },
};

export const projects = [
  {
    title: "HP Smart – Internal Developer Tools",
    description:
      "Built and enhanced internal tools for debugging and diagnostics that improved workflow efficiency by ~10× for engineering and support teams working on a consumer app used by millions worldwide.",
    tags: [".NET", "Java", "Developer Tools", "Productivity"],
    company: "HP Inc",
    year: "2024-2025",
    impact: "~10× productivity improvement",
    links: {
      live: null,
      repo: null,
    },
  },
  {
    title: "Distributed Observability with OpenTelemetry",
    description:
      "Led contributions to a distributed observability Proof of Concept using OpenTelemetry, improving service traceability and significantly reducing time-to-debug for production issues across backend services.",
    tags: ["OpenTelemetry", "Observability", "Distributed Systems"],
    company: "HP Inc",
    year: "2024",
    impact: "Reduced time-to-debug for production issues",
    links: {
      live: null,
      repo: null,
    },
  },
  {
    title: "Eventually – Decision Closure Product",
    description:
      "Owned end-to-end product development from problem discovery to MVP. Built a decision-closure flow with a rules-based intent engine generating action nudges in <300ms. Delivered production-quality MVP in 72 hours to validate user behavior.",
    tags: ["Product Strategy", "React", "Intent Engine", "UX"],
    company: "Personal",
    year: "2024",
    impact: "72-hour MVP delivery",
    links: {
      live: null,
      repo: null,
    },
  },
  {
    title: "WhatsApp Business Automation",
    description:
      "Built a WhatsApp automation system enabling businesses to programmatically manage customer messages using webhooks and REST APIs. Designed for reliability with message retries, validation, and secure asynchronous workflows.",
    tags: ["Node.js", "REST APIs", "Webhooks", "Automation"],
    company: "Personal",
    year: "2023",
    impact: "Full-stack automation system",
    links: {
      live: null,
      repo: null,
    },
  },
  {
    title: "Backend Configuration Automation",
    description:
      "Built Java-based automation tools for enterprise retail loss-prevention systems. Automated manual configuration workflows for 1000+ JSON files, reducing setup time and operational errors by ~40%.",
    tags: ["Java", "Automation", "SQL", "Enterprise"],
    company: "Checkpoint Systems",
    year: "2022-2023",
    impact: "~40% reduction in setup time",
    links: {
      live: null,
      repo: null,
    },
  },
];

export const caseStudies = [
  {
    slug: "eventually-decision-closure-product",
    title: "Eventually – Building a Decision-Closure Product from 0 to 1",
    summary:
      "Owned end-to-end product development from problem discovery to MVP launch. Built a decision-closure flow addressing cognitive blockers, with a sub-300ms intent engine and production-quality delivery in 72 hours.",
    role: "Product Owner & Engineer",
    timeline: "72 hours (MVP)",
    stack: ["Product Strategy", "React", "Intent Engine", "Experimentation"],
    highlights: [
      "Defined problem through user research: decision paralysis in knowledge workers",
      "Built rules-based intent engine generating explainable action nudges in <300ms",
      "Defined 3 core product metrics to evaluate behavioral impact",
      "Delivered production-quality MVP in 72 hours to validate hypothesis",
    ],
    sections: [
      {
        heading: "Problem & Discovery",
        body:
          "Knowledge workers face decision paralysis—not from lack of information, but from cognitive blockers: fear of wrong choices, information gaps, unclear dependencies, and overthinking. I hypothesized that converting ambiguous decisions into atomic, actionable next steps would reduce this friction and increase decision velocity.",
      },
      {
        heading: "Product Approach",
        body:
          "I designed a decision-closure flow that addresses 4 cognitive blockers systematically. Users input a decision, and the system breaks it down into concrete next actions with clear reasoning. The key insight: people don't need the system to make decisions for them—they need clarity on what to do next.",
      },
      {
        heading: "Technical Execution",
        body:
          "Built a rules-based intent engine that generates explainable action nudges in under 300ms. I prioritized transparency and user trust over black-box automation—every suggestion includes clear reasoning. The architecture was designed for speed and reliability, not complexity.",
      },
      {
        heading: "Success Metrics",
        body:
          "Defined 3 core product metrics: (1) decision-closure rate (% of decisions converted to actions), (2) time-to-first-action (speed from input to action), and (3) drop-off points (where users abandon the flow). These metrics focus on behavioral change, not vanity metrics.",
      },
      {
        heading: "Outcome & Learning",
        body:
          "Delivered a production-quality MVP in 72 hours, intentionally scoped to validate user behavior before investing in scale. The exercise reinforced my belief in shipping fast, measuring impact, and iterating based on real user data—not assumptions.",
      },
    ],
    links: {
      read: "/case-studies/eventually-decision-closure-product",
    },
  },
  {
    slug: "hp-smart-production-reliability",
    title: "HP Smart – Improving Production Reliability at Scale",
    summary:
      "Diagnosed and fixed 75+ critical production defects impacting millions of users. Built distributed observability infrastructure and improved cross-functional debugging workflows for a market-leading consumer application.",
    role: "Software Engineer",
    timeline: "Feb 2024 – Dec 2024",
    stack: ["Java", ".NET", "OpenTelemetry", "Observability", "REST APIs"],
    highlights: [
      "Diagnosed 75+ critical production defects using log analysis and root-cause investigation",
      "Led OpenTelemetry PoC improving service traceability and reducing time-to-debug",
      "Built internal tools improving debugging productivity by ~10× for engineering teams",
      "Collaborated with PM, QA, and platform teams to prioritize fixes by user impact",
    ],
    sections: [
      {
        heading: "Context & Challenge",
        body:
          "HP Smart is a market-leading consumer application used by millions of users worldwide for device setup, scanning, and printer management. With high traffic and complex backend services (.NET and Java), production stability directly impacts user trust and retention. My role focused on diagnosing defects, improving observability, and building tools to prevent future issues.",
      },
      {
        heading: "Defect Resolution & Root-Cause Analysis",
        body:
          "I diagnosed and fixed 75+ critical production defects across backend services and application components. This required deep log analysis, debugging distributed systems, and understanding cross-service dependencies. Each fix improved end-user stability and reduced support escalations.",
      },
      {
        heading: "Observability Infrastructure",
        body:
          "Led contributions to a distributed observability Proof of Concept using OpenTelemetry. This improved service traceability across microservices and significantly reduced time-to-debug for production issues. The infrastructure gave engineering teams visibility into request flows, latency bottlenecks, and failure points.",
      },
      {
        heading: "Internal Developer Tools",
        body:
          "Built and enhanced internal tools for debugging, diagnostics, and workflow automation. These tools improved productivity by ~10× for engineering and support teams, reducing manual investigation time and enabling faster incident response.",
      },
      {
        heading: "Cross-Functional Collaboration",
        body:
          "Worked closely with product managers and engineering leads to prioritize fixes based on user impact and business risk. Used logs, metrics, and dashboards to support data-informed decisions around reliability improvements and incident prevention. Operated within Agile sprints, balancing feature delivery with stability work.",
      },
    ],
    links: {
      read: "/case-studies/hp-smart-production-reliability",
    },
  },
  {
    slug: "reducing-fake-and-scam-job-listings-dubizzle",
    title: "Product Case Study: Reducing Fake & Scam Job Listings on dubizzle (self-initiated)",
    summary:
      "Designing product and policy levers to reduce scam job listings while keeping the marketplace accessible for legitimate employers.",
    role: "Product-minded Software Engineer",
    timeline: "Discovery + experimentation",
    stack: ["Product Strategy", "Experimentation", "Risk & Trust"],
    highlights: [
      "Explored the problem through the lens of user harm and marketplace health, not just content policy",
      "Defined clear primary and secondary success metrics for a hypothetical scam reduction initiative",
      "Sketched a layered system of verification, education, and behavioral detection as a speculative solution",
    ],
    sections: [
      {
        heading: "Context & problem",
        body:
          "For this self-initiated product exercise, I picked dubizzle, a large online classifieds marketplace connecting job seekers with employers across multiple industries. Because it’s relatively easy to post jobs, the platform is vulnerable to fake or scam listings that ask for money, personal documents, or push users into off-platform conversations. While payment is required to post a job, that alone does not verify an employer’s identity or intent, and from a job seeker’s perspective there are few visible trust signals to distinguish legitimate roles from scams.",
      },
      {
        heading: "User harm & platform risk",
        body:
          "Fake and scam listings disproportionately impact vulnerable users: first-time job seekers and people urgently looking for work. The harm ranges from direct financial loss and emotional distress to misuse of personal data. At a platform level, this erodes trust, could damage dubizzle’s reputation, and can reduce engagement from genuine job seekers and employers—weakening the marketplace over time. In this case study I’m exploring how I would frame and tackle that risk from the outside, using public information and reasonable assumptions.",
      },
      {
        heading: "Goal & success metrics",
        body:
          "The goal for this exercise was to imagine how I would reduce the presence and impact of fake or scam job listings while maintaining accessibility for legitimate employers. I defined hypothetical primary metrics around the percentage of job listings flagged as scams and scam reports per 1,000 listings. Secondary metrics included time-to-removal for flagged listings, job seeker engagement (applications and messages), repeat visits to the jobs category, and employer approval and posting completion rates.",
      },
      {
        heading: "Hypotheses & solutions",
        body:
          "First, I hypothesized that adding friction for high-risk posters would reduce scam activity, leading to a tiered employer verification system: verified businesses receive increased visibility and trust badges, while unverified posters face limits and additional checks. Second, I hypothesized that proactive user education could prevent harm before it happens, so I drafted contextual safety warnings during browsing and messaging that clearly state, for example, that legitimate employers do not charge application fees. Third, I hypothesized that behavioral patterns would be more reliable than content checks alone, so I outlined how signals like rapid posting, repeated account creation, and frequent off-platform contact requests could be used to automatically flag listings for review.",
      },
      {
        heading: "Trade-offs & risks",
        body:
          "The main trade-offs I considered were added friction for legitimate employers, the risk of false positives temporarily blocking genuine roles, and increased operational cost from moderation. To mitigate this in a hypothetical rollout, I focused on targeted checks for high-risk segments instead of blanket rules, fast appeal paths for verified employers, and a phased launch to measure impact before expanding.",
      },
      {
        heading: "Validation plan",
        body:
          "Because this is a self-initiated concept, I focused on how I would validate it if it were live: A/B tests around safety warnings and verification visibility, monitoring changes in scam reports and time-to-removal. Alongside this, I’d track post-implementation job seeker engagement and retention, as well as false positive rates and employer feedback, and use those signals to refine thresholds, messaging, and verification flows over time.",
      },
    ],
    links: {
      read: "/case-studies/reducing-fake-and-scam-job-listings-dubizzle",
    },
  },
  {
    slug: "improving-listing-to-contact-conversion-bayut",
    title:
      "Product Case Study: Improving Listing-to-Contact Conversion on Bayut (self-initiated)",
    summary:
      "A self-initiated exploration of how to reduce decision friction on property listing pages and nudge more confident, high-intent contacts to agents.",
    role: "Product-minded Software Engineer",
    timeline: "Concept + funnel analysis",
    stack: ["Product Strategy", "Experimentation", "Marketplace Funnels"],
    highlights: [
      "Framed listing-to-contact as a decision confidence problem, not just a CTA placement issue",
      "Defined a clear primary conversion metric and supporting behavioral signals",
      "Outlined product changes around relevance, cost clarity, and trust signals",
    ],
    sections: [
      {
        heading: "Context & problem",
        body:
          "For this self-initiated concept, I looked at Bayut, a property marketplace where users browse listings and connect with agents. Users spend meaningful time exploring properties, but a noticeable portion never take the final step of contacting an agent—signal of decision friction at the most critical point in the funnel. This matters to the business because contacting an agent is the primary conversion event that drives lead generation, agent ROI, and ultimately platform revenue.",
      },
      {
        heading: "User pain",
        body:
          "Through this lens, I treated the main user problem as hesitation at the moment of commitment. People are unsure whether the viewed property is the right or final choice, anxious about potentially high or unclear agent commissions, and wondering if other platforms might offer better or more competitive options. All of this adds up to decision paralysis exactly when the user should be confident enough to contact an agent.",
      },
      {
        heading: "Goal & success metrics",
        body:
          "The goal for this exercise was to increase the percentage of users who contact an agent after viewing a property listing, without harming trust or perceived transparency. I chose listing-to-contact conversion rate as the primary metric, supported by secondary metrics like time spent on listing pages, number of listings viewed before contact, and bounce rate from the listing page.",
      },
      {
        heading: "Hypotheses & solutions",
        body:
          "My first hypothesis was that reducing decision uncertainty would increase user confidence. To support that, I proposed a 'Why this property matches you' section on the listing page, pulling in signals like similarity to recent searches, alignment with saved filters, relative pricing within the area, and basic popularity indicators. The second hypothesis was that reducing cost ambiguity would reduce hesitation, which led to lightweight commission transparency near the contact CTA—showing a typical commission range with a short, plain-language tooltip. The third hypothesis was that reinforcing market confidence would reduce cross-platform doubt, so I suggested surfacing trust signals like whether a listing is exclusive, how its price sits within a local market range, and how recently it was updated.",
      },
      {
        heading: "Trade-offs & risks",
        body:
          "The main trade-offs I anticipated were information overload, the risk that commission visibility could discourage some users, and the dependency on accurate, reliable market data for confidence signals. To manage that, I leaned on progressive disclosure—making new information scannable and collapsible—and recommended starting with a small, high-quality subset of data sources before expanding coverage.",
      },
      {
        heading: "Validation plan",
        body:
          "As with the dubizzle exercise, I treated this as a thought experiment for how I would validate changes if they shipped. I would A/B test the current listing page against an enhanced version, measure changes in listing-to-contact conversion, and monitor secondary metrics like bounce rate, session duration, and downstream engagement. Based on those results, I’d iterate on which signals to keep, how prominently to show cost information, and how much explanation is needed before contact feels like a safe next step.",
      },
    ],
    links: {
      read: "/case-studies/improving-listing-to-contact-conversion-bayut",
    },
  },
];


