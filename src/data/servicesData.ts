export interface ServiceItem {
  id: string;
  title: string;
  /** Short name used in tight spaces (selects, pills). */
  shortTitle: string;
  slug: string;
  category: "ai-systems" | "cloud-data" | "modernization";
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  useCases: string[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  servicesUsed: string[];
  stack: string[];
  quote: string;
  author: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-website-dev",
    slug: "ai-website-development",
    title: "AI-Powered Websites",
    shortTitle: "AI Website",
    category: "ai-systems",
    tagline: "Fast, modern websites with smart search and chat built in",
    description:
      "We design and build fast websites that help visitors find what they need, with smart search, AI chat assistants and content that adapts to each visitor.",
    badge: "Websites",
    iconName: "Globe",
    metrics: [
      { label: "Timeline", value: "1–2 months" },
      { label: "Speed score", value: "90+" },
      { label: "You own", value: "All code" },
    ],
    deliverables: [
      "Smart search that understands what people mean",
      "AI chat assistant trained on your content",
      "Pages that load fast on any phone",
      "Easy-to-edit content (CMS) with AI writing help",
      "SEO set up from day one",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity"],
    useCases: [
      "Company and product websites",
      "Online stores with smarter product search",
      "Help centres that answer questions instantly",
    ],
  },
  {
    id: "ai-product-dev",
    slug: "ai-product-development",
    title: "AI Apps & Products",
    shortTitle: "AI App / Product",
    category: "ai-systems",
    tagline: "From idea to a working AI product your customers can use",
    description:
      "We turn your idea into a working web or mobile app with AI at its core, from the first version (MVP) through to a product ready for paying customers.",
    badge: "Products",
    iconName: "Sparkles",
    metrics: [
      { label: "Timeline", value: "2–4 months" },
      { label: "Updates", value: "Every 2 wks" },
      { label: "You own", value: "All code" },
    ],
    deliverables: [
      "A working first version (MVP) within the first month",
      "User accounts, payments and subscriptions",
      "Admin dashboard to manage users and data",
      "Web and mobile apps from one codebase",
      "Usage tracking so you know what's working",
    ],
    techStack: ["Next.js", "React Native", "Python", "FastAPI", "PostgreSQL", "Stripe"],
    useCases: [
      "SaaS tools for a specific industry",
      "AI assistants for documents, legal or finance work",
      "Internal tools that replace spreadsheets",
    ],
  },
  {
    id: "web-maintenance-opt",
    slug: "website-maintenance-optimization",
    title: "Website Care & Speed-Up",
    shortTitle: "Maintenance",
    category: "modernization",
    tagline: "Keep your site fast, secure and always online",
    description:
      "We look after your website or app every month: updates, security fixes, speed improvements and monitoring, so problems are fixed before your customers notice.",
    badge: "Care plans",
    iconName: "ShieldCheck",
    metrics: [
      { label: "Monitoring", value: "24/7" },
      { label: "Billing", value: "Monthly" },
      { label: "Reports", value: "Monthly" },
    ],
    deliverables: [
      "24/7 uptime monitoring with instant alerts",
      "Security updates and backups",
      "Speed fixes: images, caching, code clean-up",
      "Safe updates with one-click rollback",
      "A monthly report in plain English",
    ],
    techStack: ["Cloudflare", "Sentry", "Grafana", "GitHub Actions", "Vercel"],
    useCases: [
      "Busy online stores during sales",
      "Older sites that feel slow",
      "Teams without an in-house developer",
    ],
  },
  {
    id: "ai-fine-tuning",
    slug: "ai-fine-tuning-model-optimization",
    title: "Custom AI Models",
    shortTitle: "Custom AI Model",
    category: "ai-systems",
    tagline: "AI trained on your data, so it speaks your business",
    description:
      "We adapt AI models to your own documents and data, so answers are more accurate for your field, cheaper to run, and can stay inside your own cloud account.",
    badge: "AI models",
    iconName: "Cpu",
    metrics: [
      { label: "Timeline", value: "1–3 months" },
      { label: "Runs in", value: "Your cloud" },
      { label: "Data", value: "Stays private" },
    ],
    deliverables: [
      "A model trained on your examples and tone",
      "Tests that measure accuracy before launch",
      "Lower running costs than off-the-shelf APIs",
      "Option to run fully inside your own cloud",
      "Guardrails so answers stay on-topic",
    ],
    techStack: ["PyTorch", "Hugging Face", "vLLM", "Llama", "Mistral", "Weights & Biases"],
    useCases: [
      "Answering questions from internal documents",
      "Industry-specific writing and review",
      "Private AI where data can't leave your company",
    ],
  },
  {
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure-multi-cloud",
    title: "Cloud Setup & Hosting",
    shortTitle: "Cloud Setup",
    category: "cloud-data",
    tagline: "Reliable hosting on AWS, Google Cloud or Azure",
    description:
      "We set up and move your systems to the cloud so they stay online, grow with your traffic and don't cost more than they should.",
    badge: "Cloud",
    iconName: "Cloud",
    metrics: [
      { label: "Timeline", value: "1–2 months" },
      { label: "Providers", value: "AWS · GCP · Azure" },
      { label: "Backups", value: "Automatic" },
    ],
    deliverables: [
      "Cloud setup written as code, easy to repeat",
      "Automatic scaling when traffic grows",
      "Backups and a tested recovery plan",
      "Secure access and secret management",
      "Automatic deploys every time code changes",
    ],
    techStack: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    useCases: [
      "Moving off an old server",
      "Cutting a cloud bill that keeps growing",
      "Getting ready for a big launch",
    ],
  },
  {
    id: "data-engineering",
    slug: "data-analysis-data-engineering",
    title: "Data & Dashboards",
    shortTitle: "Data & Dashboards",
    category: "cloud-data",
    tagline: "Bring your data together and see what's really happening",
    description:
      "We connect data from all your tools into one place and build clear dashboards, so you can make decisions from real numbers instead of guesswork.",
    badge: "Data",
    iconName: "Database",
    metrics: [
      { label: "Timeline", value: "1–3 months" },
      { label: "Dashboards", value: "Live" },
      { label: "Sources", value: "Any tool" },
    ],
    deliverables: [
      "All your data in one central place",
      "Automatic daily (or live) data updates",
      "Dashboards your whole team can read",
      "Alerts when numbers look unusual",
      "Checks that catch bad or missing data",
    ],
    techStack: ["BigQuery", "Snowflake", "dbt", "Airflow", "PostgreSQL", "Metabase"],
    useCases: [
      "Sales and marketing reporting",
      "Stock and delivery tracking",
      "Spotting customers likely to leave",
    ],
  },
  {
    id: "workflow-automation",
    slug: "enterprise-workflow-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    category: "modernization",
    tagline: "Stop copy-pasting: let your tools talk to each other",
    description:
      "We automate repetitive tasks like data entry, follow-ups, invoices and reports by connecting the tools you already use, with tools like n8n, Make and Zapier.",
    badge: "Automation",
    iconName: "Workflow",
    metrics: [
      { label: "Timeline", value: "1–2 months" },
      { label: "Works with", value: "Your tools" },
      { label: "Runs", value: "24/7" },
    ],
    deliverables: [
      "Your apps connected: CRM, email, Slack, accounting",
      "AI that reads documents and fills in forms",
      "Approvals sent to Slack or Teams",
      "Alerts if anything fails, with automatic retries",
      "A clear log of everything that ran",
    ],
    techStack: ["n8n", "Make", "Zapier", "Node.js", "Airtable", "Slack"],
    useCases: [
      "New customer onboarding",
      "Syncing stock between Shopify, Amazon and your ERP",
      "Invoice and expense processing",
    ],
  },
  {
    id: "agentic-ai",
    slug: "agentic-ai-autonomous-workflows",
    title: "AI Agents",
    shortTitle: "AI Agents",
    category: "ai-systems",
    tagline: "AI assistants that complete tasks, not just answer questions",
    description:
      "We build AI agents that can handle multi-step work on their own: reading requests, looking things up, using your tools and asking a person when they're unsure.",
    badge: "Agents",
    iconName: "Bot",
    metrics: [
      { label: "Timeline", value: "1–3 months" },
      { label: "Human check", value: "Built in" },
      { label: "Works", value: "24/7" },
    ],
    deliverables: [
      "Agents that plan, act and check their own work",
      "Safe access to your tools and data",
      "Memory of past conversations and context",
      "A person approves anything important",
      "A full log of every action taken",
    ],
    techStack: ["Claude", "GPT", "Gemini", "LangGraph", "MCP", "pgvector"],
    useCases: [
      "Customer support that resolves issues end-to-end",
      "Checking and reconciling financial reports",
      "Reviewing code and triaging bugs",
    ],
  },
];

export const getServiceById = (id: string) => servicesData.find((s) => s.id === id);

export const clientCaseStudies: CaseStudyItem[] = [
  {
    id: "apex-fintech",
    slug: "fintech-fraud-detection",
    client: "Apex Financial Core",
    industry: "FinTech & Banking",
    headline: "Real-time fraud checks on a 14-year-old banking system",
    summary:
      "We moved a 14-year-old transaction system to the cloud piece by piece and added an AI risk checker, without stopping a single payment.",
    challenge:
      "An old, all-in-one transaction system was too slow to check payments for fraud in real time, and any downtime meant lost transactions.",
    approach: [
      "Copied live data into a new, modern system while the old one kept running",
      "Moved features over one at a time, so nothing had to switch off",
      "Added a private AI model that scores every transaction for risk",
      "Switched traffic over gradually, with an instant way back",
    ],
    outcome: "Payments are checked for fraud in under 85ms, and queries run 74% faster.",
    metrics: [
      { label: "Query speed", value: "74% faster" },
      { label: "Fraud check", value: "<85ms" },
      { label: "Cost savings", value: "$1.8M" },
    ],
    servicesUsed: ["agentic-ai", "cloud-infrastructure", "data-engineering"],
    stack: ["AWS", "Google Cloud", "Kafka", "PostgreSQL", "Python", "Kubernetes"],
    quote: "AIRACODE transformed our core systems without a single second of transactional downtime.",
    author: "Chief Technology Officer, Apex Financial",
  },
  {
    id: "synthetix-health",
    slug: "healthtech-clinical-triage",
    client: "Synthetix Health Network",
    industry: "HealthTech",
    headline: "AI that summarises patient records and cuts triage backlogs",
    summary:
      "A private AI model, trained for medical records, reads unstructured patient notes and helps clinicians triage faster, cutting the backlog by 80%.",
    challenge:
      "Clinicians were buried in unstructured patient records, and strict privacy rules meant public AI tools couldn't be used.",
    approach: [
      "Trained a private AI model on medical language, inside the client's own cloud",
      "Built an assistant that summarises records and flags urgent cases",
      "Kept a clinician in the loop to approve every decision",
      "Logged every step for compliance reviews",
    ],
    outcome: "Triage backlog cut by 80%, with patient data never leaving the client's cloud.",
    metrics: [
      { label: "Triage backlog", value: "80% less" },
      { label: "Accuracy", value: "99.1%" },
      { label: "Data", value: "Private cloud" },
    ],
    servicesUsed: ["ai-fine-tuning", "ai-product-dev", "workflow-automation"],
    stack: ["Llama", "vLLM", "Python", "FastAPI", "PostgreSQL", "Azure"],
    quote: "The autonomous agent workflows engineered by AIRACODE set a new benchmark for clinical reliability.",
    author: "Head of Medical Informatics, Synthetix Health",
  },
  {
    id: "strata-retail",
    slug: "retail-black-friday-scale",
    client: "Strata Global Retail",
    industry: "Retail & E-commerce",
    headline: "A faster store that stayed online through Black Friday",
    summary:
      "We rebuilt the storefront for speed and automated the back office, handling 50M+ events on Black Friday with no downtime.",
    challenge:
      "Flash sales caused checkout slowdowns and systems falling out of sync during the busiest days of the year.",
    approach: [
      "Rebuilt the storefront with Next.js so pages load instantly",
      "Set up hosting that adds capacity automatically during traffic spikes",
      "Automated order, stock and customer workflows with n8n",
      "Load-tested at 10x normal traffic before the sale",
    ],
    outcome: "52M events handled on peak day with 100% uptime and a 34% lift in conversions.",
    metrics: [
      { label: "Peak volume", value: "52M/day" },
      { label: "Conversions", value: "+34%" },
      { label: "Uptime", value: "100%" },
    ],
    servicesUsed: ["ai-website-dev", "cloud-infrastructure", "web-maintenance-opt"],
    stack: ["Next.js", "Vercel", "Kubernetes", "n8n", "PostgreSQL", "Cloudflare"],
    quote: "Our frontend feels instantaneous. Customer engagement surged across every key market.",
    author: "VP of Digital Engineering, Strata Retail",
  },
  {
    id: "omni-freight",
    slug: "logistics-ai-dispatch",
    client: "OmniLogistics Worldwide",
    industry: "Logistics",
    headline: "AI agents that dispatch freight automatically",
    summary:
      "We replaced 4 disconnected manual tracking systems with AI agents that coordinate dispatch, backed by one live data platform.",
    challenge:
      "Freight tracking was spread across disconnected systems, so dispatch was slow, manual and error-prone.",
    approach: [
      "Brought tracking data from every system into one live platform",
      "Built AI agents that plan routes and assign drivers",
      "Sent exceptions to a dispatcher for approval in Slack",
      "Added dashboards showing every shipment in real time",
    ],
    outcome: "92% of dispatches now happen automatically, saving $4.2M a year.",
    metrics: [
      { label: "Yearly savings", value: "$4.2M" },
      { label: "Auto-dispatch", value: "92%" },
      { label: "ETA accuracy", value: "99.4%" },
    ],
    servicesUsed: ["agentic-ai", "workflow-automation", "data-engineering"],
    stack: ["LangGraph", "Claude", "Kafka", "Snowflake", "n8n", "Slack"],
    quote: "AIRACODE turned our chaotic logistics tracking into an autonomous, self-orchestrating machine.",
    author: "Chief Operations Officer, OmniLogistics",
  },
];

export const getCaseStudyBySlug = (slug: string) => clientCaseStudies.find((c) => c.slug === slug);
