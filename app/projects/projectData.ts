export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    roleFocus: string; // SWE framing
    tech: string[];
    bullets: string[];
    impact: string[];
    architecture: string[];
    links: { label: string; href: string }[];
  };
  
  export const projects: Project[] = [
    {
      slug: "clinical-referral-ai-assistant",
      title: "Clinical Referral AI Assistant",
      subtitle: "LLM + Retrieval backend for fast, context-aware recommendations",
      roleFocus:
        "Backend-focused: low-latency APIs, retrieval performance, observability, containerization",
      tech: ["FastAPI", "Python", "FAISS", "LangChain", "Docker", "Logging/Metrics"],
      bullets: [
        "Built a backend service that powers context-aware referral recommendations over structured healthcare data.",
        "Implemented FAISS vector indexing for efficient retrieval (sub-second responses under concurrent load).",
        "Designed modular internal APIs used by downstream components; added robust error handling.",
        "Containerized with Docker and optimized initialization/data loading to reduce cold-start latency (~31%).",
      ],
      impact: [
        "Sub-second retrieval under concurrent access (with vector index + efficient request paths).",
        "Reduced cold-start latency by ~31% via container/runtime optimizations.",
        "Improved reliability via structured logging + metrics hooks for debugging/monitoring.",
      ],
      architecture: [
        "Client → FastAPI gateway",
        "Request → Retriever (FAISS index) → Context builder → LLM reasoning",
        "Observability: logs + metrics emitted at key stages (retrieval, generation, errors)",
        "Docker image optimized for fast startup + predictable deploys",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/singhneel27" }, // replace with exact repo if public
      ],
    },
    {
      slug: "healthcare-referral-analytics-platform",
      title: "Healthcare Referral Analytics Platform",
      subtitle: "ETL + graph representation layer over 4M+ records",
      roleFocus:
        "Backend/data engineering: scalable pipelines, query latency, reliability, observability",
      tech: ["Python", "SQL", "ETL", "Graph data modeling", "Monitoring/Logging"],
      bullets: [
        "Built and maintained scalable ETL and backend services processing 4M+ healthcare records.",
        "Engineered graph-based data representation to support high-throughput analytics workloads.",
        "Optimized data retrieval paths to reduce query latency and improve throughput.",
        "Added observability tooling (logging, metrics, debugging hooks) to improve developer visibility and reliability.",
      ],
      impact: [
        "4M+ records processed with improved throughput/reliability for downstream analytics.",
        "Lower query latency by optimizing retrieval paths and data representation.",
        "Better developer velocity via observability and debuggability improvements.",
      ],
      architecture: [
        "Ingestion → ETL transforms → storage",
        "Graph representation layer → analytics queries/services",
        "Observability: logs/metrics + debugging hooks around pipeline stages",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/singhneel27" }, // replace if you have a repo
      ],
    },
    {
      slug: "autonomous-overtaking-in-carla",
      title: "Autonomous Overtaking in CARLA",
      subtitle: "Deep RL improvements with measurable simulation outcomes",
      roleFocus:
        "SWE framing: experimentation pipeline, measurable improvements, reproducibility in simulation",
      tech: ["Python", "Deep RL (DDQN)", "CARLA Simulator"],
      bullets: [
        "Enhanced a lane-keeping DRL model to perform lane-changing and overtaking in dynamic traffic.",
        "Designed a custom reward function to improve safe overtaking and lane-change behavior.",
        "Improved overtaking success by ~17% and lane-change accuracy from ~83% to ~89%.",
      ],
      impact: [
        "Overtaking success improved ~17% with reward shaping + policy tuning.",
        "Lane-change accuracy improved from ~83% → ~89% in CARLA scenarios.",
      ],
      architecture: [
        "Simulator (CARLA) → state extraction → DDQN policy",
        "Reward function + training loop → evaluation suite → metrics tracking",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/singhneel27" }, // replace if you have a repo
      ],
    },
  ];
  