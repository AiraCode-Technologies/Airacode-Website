// Tools we work with, grouped for the "Our stack" section.
// Family names only (no version numbers) so the list doesn't go out of date.
export interface StackGroup {
  id: string;
  title: string;
  description: string;
  tools: string[];
}

export const techStack: StackGroup[] = [
  {
    id: "ai-models",
    title: "AI models",
    description: "The leading AI models, picked to fit each job and budget.",
    tools: ["Claude", "GPT", "Gemini", "Llama", "Mistral", "DeepSeek", "Qwen", "Whisper", "ElevenLabs"],
  },
  {
    id: "ai-platforms",
    title: "AI platforms & tooling",
    description: "How we connect models to your data and tools, safely.",
    tools: [
      "Anthropic API",
      "OpenAI API",
      "Vertex AI",
      "AWS Bedrock",
      "Azure OpenAI",
      "Hugging Face",
      "Ollama",
      "vLLM",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "Vercel AI SDK",
      "MCP",
      "LangSmith",
    ],
  },
  {
    id: "vector",
    title: "Search & memory",
    description: "Lets AI find the right information from your documents.",
    tools: ["pgvector", "Pinecone", "Qdrant", "Weaviate", "Chroma", "Elasticsearch", "Algolia"],
  },
  {
    id: "frontend",
    title: "Websites & apps",
    description: "Fast websites, web apps and mobile apps.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Vue",
      "Svelte",
      "Astro",
      "React Native",
      "Expo",
      "Flutter",
      "Three.js",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "The engine behind your product.",
    tools: ["Node.js", "Python", "FastAPI", "Django", "NestJS", "Express", "Go", "GraphQL", "tRPC", "WebSockets"],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Where your data lives, safely backed up.",
    tools: ["PostgreSQL", "Supabase", "Firebase", "MongoDB", "MySQL", "Redis", "Neon", "DynamoDB", "Prisma", "Drizzle"],
  },
  {
    id: "cloud",
    title: "Cloud & hosting",
    description: "Reliable hosting that grows with you.",
    tools: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "Railway",
      "Render",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    id: "data",
    title: "Data & dashboards",
    description: "Turning raw data into clear answers.",
    tools: ["BigQuery", "Snowflake", "Databricks", "dbt", "Airflow", "Kafka", "Spark", "ClickHouse", "Metabase", "Power BI", "Looker Studio"],
  },
  {
    id: "automation",
    title: "Automation & integrations",
    description: "Connecting the tools your team already uses.",
    tools: [
      "n8n",
      "Make",
      "Zapier",
      "Airtable",
      "Notion",
      "Slack",
      "HubSpot",
      "Salesforce",
      "Shopify",
      "WordPress",
      "Webflow",
      "Stripe",
      "Twilio",
      "WhatsApp API",
    ],
  },
  {
    id: "quality",
    title: "Monitoring & testing",
    description: "Catching problems before your customers do.",
    tools: ["Sentry", "Datadog", "Grafana", "PostHog", "OpenTelemetry", "Playwright", "Vitest", "Jest"],
  },
];
