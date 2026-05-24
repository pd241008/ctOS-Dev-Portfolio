export interface Project {
  id: string;
  title: string;
  type?: string;
  description?: string;
  desc?: string;
  tags: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  isDraft?: boolean;
}

export const MAJOR_PROJECTS: Project[] = [
  {
    "id": "expresskit",
    "title": "ExpressKit CLI",
    "type": "Developer Tooling",
    "description": "A production-grade CLI and framework wrapper for Express.js, designed to formalize backend architecture through convention over configuration. ExpressKit automates the scaffolding of enterprise-ready service layers, JWT-based authentication, and centralized error handling. It implements a robust dependency injection pattern and standardized middleware stacks to ensure consistency across microservices.",
    "tags": [
      "Node.js",
      "Express",
      "TypeScript",
      "CLI",
      "Shell Scripting",
      "JWT Auth",
      "Service Mesh",
      "NPM SDK",
      "Architecture Patterns"
    ],
    "status": "LIVE_ON_NPM",
    "githubUrl": "https://github.com/pd241008/ExpressKit",
    "liveUrl": "https://www.npmjs.com/package/@pd241008/expresskit",
    "docUrl": "/expresskit-docs.pdf"
  },
  {
    "id": "intellidoc",
    "title": "IntelliDoc Query Engine",
    "type": "AI & Search",
    "description": "An advanced RAG (Retrieval-Augmented Generation) infrastructure for semantic document analysis. Built on a vector-database backbone, IntelliDoc orchestrates context-aware document chunking and embedding generation to provide deep insights from unstructured data. Features an asynchronous processing queue for multi-document ingestion and a high-fidelity citation system for AI-generated answers.",
    "tags": [
      "LLMs",
      "Pinecone/Vector DB",
      "FastAPI",
      "Next.js",
      "Python",
      "LangChain",
      "OpenAI/Gemini",
      "Redis Queue",
      "Semantic Search"
    ],
    "status": "SHIPPING",
    "githubUrl": "https://github.com/pd241008/IntelliDoc-Query",
    "liveUrl": "#",
    "docUrl": "/intellidoc-docs.pdf"
  },
  {
    "id": "omega",
    "title": "Project Omega",
    "type": "Distributed Systems",
    "description": "Experimental enterprise-grade distributed ledger and high-throughput micro-transaction system. Engineered with a focus on partitioning tolerance and horizontal scalability, Omega utilizes a custom consensus layer to manage distributed state across multiple nodes. It features automated circuit-breaking and advanced telemetry for monitoring transactional consistency in financial environments.",
    "tags": [
      "Go",
      "Distributed Systems",
      "GRPC",
      "Kafka",
      "PostgreSQL",
      "Architecture",
      "FinTech",
      "Scalability",
      "Observability"
    ],
    "status": "RESEARCH",
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/project-omega.pdf",
    "isDraft": true
  },
  {
    "id": "milan",
    "title": "Milan Core Platform",
    "type": "Event Infrastructure",
    "description": "The primary high-concurrency ticketing and event management infrastructure for SRM University. Architected for peak loads during university festivals, Milan handles thousands of concurrent WebSocket connections and dual-authentication flows (Internal/External). Implements advanced rate-limiting via Redis and an automated AWS-backed deployment pipeline for high availability.",
    "tags": [
      "Next.js",
      "Node.js",
      "AWS EC2/S3",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Deployment Ops",
      "Security Protocols",
      "Full-Stack"
    ],
    "status": "STABLE_DEPLOYMENT",
    "githubUrl": "https://github.com/TechTeam-Official/milanDSA-frontend",
    "liveUrl": "https://www.srmmilan.in/",
    "docUrl": "/milan-docs.pdf"
  },
  {
    "id": "devtrace",
    "title": "DevTrace",
    "type": "Developer Observability",
    "tags": [
      "Rust",
      "Tokio",
      "Hyper",
      "Next.js",
      "Express",
      "TypeScript",
      "CQRS",
      "Event Sourcing",
      "WebSockets"
    ],
    "githubUrl": "https://github.com/pd241008/DevTrace",
    "liveUrl": "#",
    "docUrl": "/devtrace-docs.pdf",
    "description": "A high-performance, developer-centric observability platform engineered to capture, analyze, replay, and introspect API traffic in real time. Unlike traditional logging tools, DevTrace operates as an inline programmable proxy layer with a CQRS architecture, separating high-throughput capture from analytical visualization. Features a Rust-based interception engine, a plugin architecture for custom analyzers, and time-travel debugging powered by immutable event sourcing."
  },
  {
    "id": "aegis",
    "title": "Aegis",
    "type": "Distributed Systems",
    "desc": "Distributed telemetry engine — Go ring-buffer edge agents, Scala/Akka actor brain, RAG diagnostic briefings via gRPC/Protobuf.",
    "tags": [
      "Go",
      "Scala",
      "Akka",
      "gRPC",
      "Protobuf",
      "Distributed Systems",
      "Telemetry",
      "RAG"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/aegis-docs.pdf"
  },
  {
    "id": "omnistat",
    "title": "OmniStat",
    "type": "Observability",
    "desc": "Polyglot observability pipeline — Scala GitHub GraphQL ingestion, Go BFF gateway, neo-brutalist terminal HUD.",
    "tags": [
      "Scala",
      "GraphQL",
      "Go",
      "Observability",
      "Pipeline",
      "Terminal"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/omnistat-docs.pdf"
  },
  {
    "id": "primevector",
    "title": "PrimeVector",
    "type": "Data Engineering",
    "desc": "Go LSH structural vectorization engine — cosine similarity, Kafka → Protobuf → Scala risk intelligence pipeline.",
    "tags": [
      "Go",
      "Kafka",
      "Protobuf",
      "Scala",
      "Vectorization",
      "Data Engineering"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/primevector-docs.pdf"
  },
  {
    "id": "neoui",
    "title": "NeoUI",
    "type": "Developer Tooling",
    "tags": [
      "Rust",
      "CLI",
      "Radix UI",
      "Vitest",
      "Storybook",
      "React",
      "TypeScript",
      "TailwindCSS"
    ],
    "githubUrl": "#",
    "liveUrl": "https://www.npmjs.com/package/@pd241008/neoui",
    "docUrl": "/neoui-docs.pdf",
    "description": "A comprehensive neo-brutalist component library and design system. NeoUI features a high-performance Rust-based CLI for scaffolding components, built on top of Radix UI primitives for full accessibility. It includes a robust testing suite using Vitest and comprehensive documentation via Storybook, enabling rapid and consistent UI development."
  },
  {
    "id": "neuro-compiler",
    "title": "NEURO",
    "type": "Compiler Infrastructure",
    "tags": [
      "C#",
      "Rust",
      "C++",
      "LLVM",
      "Compiler Design",
      "Security",
      "Infrastructure"
    ],
    "githubUrl": "https://github.com/pd241008/Neuro",
    "liveUrl": "#",
    "docUrl": "/neuro-compiler-docs.pdf",
    "description": "Zero-trust polyglot compiler pipeline — C# hand-written recursive descent parser → Rust security auditor → C++ LLVM IR translator. Mathematically guarantees memory safety before codegen."
  },
  {
    "id": "neoshell",
    "title": "NeoShell",
    "type": "Developer Tooling",
    "tags": [
      "Rust",
      "Tauri",
      "Neovim",
      "RPC",
      "Session Management",
      "Desktop App",
      "Developer Tooling"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/neoshell-docs.pdf",
    "isDraft": true,
    "description": "A lightweight, zero-config IDE shell built around Neovim, designed to eliminate terminal friction and configuration overhead. Powered by a Tauri desktop framework with an embedded Neovim instance controlled via RPC, NeoShell provides a GUI project manager, automatic session intelligence for state restoration, and a built-in command engine for project-specific scripts. Leverages the DevTrace engine for deep editor observability and event reconstruction."
  },
  {
    "id": "gamify",
    "title": "Gamify",
    "type": "Backend Infrastructure",
    "tags": [
      "Go",
      "GitHub Actions",
      "Cassandra",
      "Upstash",
      "Serverless",
      "Time-Series"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/gamify-docs.pdf",
    "description": "Serverless esports tracking pipeline — Go + GitHub Actions cron ingestion, Cassandra (DataStax Astra) for time-series match data, Upstash QStash for zero-worker delayed notifications."
  },
  {
    "id": "syntaxflow",
    "title": "SyntaxFlow",
    "type": "Developer Tooling",
    "tags": [
      "Go",
      "WASM",
      "Web Workers",
      "Algorithms",
      "Graph Theory",
      "Tooling"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/syntaxflow-docs.pdf",
    "description": "Text-to-diagram engine — Go/TinyGo WASM parser, DFS cycle breaking, A* orthogonal routing, ELK layout in Web Workers."
  }
];

export const MINOR_PROJECTS: Project[] = [
  {
    "id": "neuro",
    "title": "NeuroTrack",
    "tags": [
      "Next.js",
      "Convex DB",
      "LangChain",
      "Sentimental Analysis",
      "AI/ML",
      "React",
      "State Management",
      "Encryption"
    ],
    "githubUrl": "https://github.com/pd241008/NeuroTrack",
    "liveUrl": "https://neuro-track-lime.vercel.app/",
    "docUrl": "/neurotrack-docs.pdf",
    "desc": "An AI-driven mental wellness dashboard focusing on affective computing. Uses LangChain to orchestrate sentiment analysis over personal journal entries, providing users with mood-trajectory insights. Features a secure, encrypted storage layer and a minimal, distraction-free writing environment."
  },
  {
    "id": "aqi",
    "title": "AI-Powered AQI Prediction",
    "desc": "A comprehensive MLOps pipeline for estimating Air Quality Index across multiple geographical nodes. Integrates trained scikit-learn models with a FastAPI backend for real-time inference. Features automated data cleaning scripts and a responsive monitoring dashboard for visual telemetry.",
    "tags": [
      "Machine Learning",
      "Scikit-Learn",
      "FastAPI",
      "Next.js",
      "Data Visualization",
      "Python",
      "Predictive Modeling",
      "Pandas"
    ],
    "githubUrl": "https://github.com/pd241008/AQI-Preditcion-Model",
    "liveUrl": "https://aqi-preditcion-model.vercel.app/",
    "docUrl": "/aqi-docs.pdf"
  },
  {
    "id": "intellivod",
    "title": "IntelliVOD",
    "type": "Media Infrastructure",
    "desc": "A sophisticated Video-on-Demand (VoD) orchestration engine engineered for low-latency content delivery and intelligent resource allocation. The system leverages distributed caching mechanisms and a custom transcoding pipeline to ensure seamless 4K streaming across varied network conditions. It integrates deep-learning models for predictive pre-loading and user-behavior-based recommendation weighting.",
    "tags": [
      "Next.js",
      "Distributed Systems",
      "Redis Cache",
      "FFmpeg",
      "Node.js",
      "PostgreSQL",
      "HLS Streaming",
      "Cloudflare Workers",
      "React Query"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/intellivod-v2.pdf",
    "isDraft": true
  },
  {
    "id": "codequest",
    "title": "CodeQuest Playground",
    "type": "Algorithmic Engine",
    "desc": "A gamified, interactive coding environment designed for real-time algorithmic execution and learning. It features an isolated runtime using WebContainers and a custom-built scoring engine that evaluates code efficiency and complexity on the fly. Designed to bridge the gap between static theory and dynamic practice.",
    "tags": [
      "Next.js",
      "WebContainers",
      "Monaco Editor",
      "Node.js",
      "Algorithmic Analysis",
      "React",
      "Web Workers",
      "Sandboxing"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/codequest-docs.pdf",
    "isDraft": true
  },
  {
    "id": "journee",
    "title": "Journee",
    "type": "AI Travel Engine",
    "desc": "An AI-centric travel companion that revolutionizes itinerary planning through semantic understanding of user preferences. By utilizing RAG (Retrieval-Augmented Generation) over specialized travel datasets, Journee generates context-aware travel paths, budget estimates, and real-time journaling prompts. Features a sleek, offline-first mobile-responsive interface for travelers on the go.",
    "tags": [
      "Next.js",
      "OpenAI API",
      "RAG",
      "FastAPI",
      "Vector Database",
      "TailwindCSS",
      "Mobile-First Design",
      "LangChain",
      "Python"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/journee-docs.pdf",
    "isDraft": true
  },
  {
    "id": "collabstory",
    "title": "CollabStory",
    "type": "Real-time SaaS",
    "desc": "A real-time collaborative workspace for digital narratives, bridging the gap between isolated writing and dynamic co-creation. Built on an Operational Transformation (OT) synchronization engine, it allows multiple authors to edit shared worlds simultaneously without conflicts. Includes integrated version-branching for alternative plotlines and AI-assisted character consistency checks.",
    "tags": [
      "Next.js",
      "Socket.io",
      "Real-time Sync",
      "CRDTs",
      "ProseMirror",
      "Node.js",
      "Redis",
      "TypeScript",
      "Vercel AI SDK"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/collabstory-docs.pdf",
    "isDraft": true
  },
  {
    "id": "ai-tictactoe",
    "title": "AI-TicTacToe",
    "desc": "A high-performance Tic-Tac-Toe engine powered by a recursive Minimax search algorithm. The AI evaluates thousands of potential board states in milliseconds to ensure optimal play. Features a premium glassmorphic UI with CSS-in-JS animations and a localized state persistence layer for statistics.",
    "tags": [
      "TypeScript",
      "Minimax Algorithm",
      "Next.js",
      "Algorithms",
      "Game Dev",
      "Framer Motion",
      "Logic Engineering"
    ],
    "githubUrl": "https://github.com/pd241008/AI-TicTacToe",
    "liveUrl": "https://quzzie-nine.vercel.app/",
    "docUrl": "/ai-tictactoe-docs.pdf"
  },
  {
    "id": "roadmap",
    "title": "AI Roadmap Generator",
    "desc": "An intelligent curriculum architect that transforms broad learning objectives into structured, chronological roadmaps. Utilizing the LLM inference (Gemini 1.5 Flash), the system generates multi-phase skill trees and resource links tailored to the user's proficiency level. Features internal PDF exporting and interactive progress tracking.",
    "tags": [
      "Next.js",
      "Gemini AI",
      "TypeScript",
      "Educational Tech",
      "Generative AI",
      "Structured Output",
      "React Hooks"
    ],
    "githubUrl": "https://github.com/pd241008/RoadMap-Genrator",
    "liveUrl": "https://road-map-genrator.vercel.app/",
    "docUrl": "/roadmap-docs.pdf"
  },
  {
    "id": "color",
    "title": "Color Palette Generator",
    "desc": "A design-centric utility focused on mathematical color harmony. The system calculates complementary, analogous, and triadic color schemes based on a single base input. Optimized for developers, it provides one-click CSS variable exports and accessibility-standard contrast checks.",
    "tags": [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Design Tools",
      "Visual Design",
      "Accessibility/WCAG",
      "Frontend Engine"
    ],
    "githubUrl": "https://github.com/pd241008/Color-Palate-Generator",
    "liveUrl": "https://color-palate-generate.vercel.app/",
    "docUrl": "/color-docs.pdf"
  },
  {
    "id": "ctos-dev",
    "title": "ctOS Dev Portfolio",
    "desc": "A high-fidelity, interactive terminal emulator and developer portfolio designed to showcase projects through a 'cyber-security' lens. Implements an interactive CLI, a virtual filesystem, and a custom command-line interface (CLI) to provide an immersive user experience.",
    "tags": [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "CLI Engine",
      "UX Architecture",
      "System Emulation"
    ],
    "githubUrl": "https://github.com/pd241008/ctOS-Dev-Portfolio",
    "liveUrl": "https://ct-os-dev-porfolio.vercel.app/",
    "docUrl": "/ctos-docs.pdf"
  },
  {
    "id": "expense-manager-e-wallet",
    "title": "Expense Manager E-Wallet",
    "desc": "A production-grade expense management platform with real-time transaction tracking and category-based analytics. Built on Next.js 14 with Convex for serverless backend operations and Clerk for secure authentication. Features a responsive dashboard with yearly expense history, dark mode support, and smooth Framer Motion transitions for a premium financial management experience.",
    "tags": [
      "Next.js",
      "Convex",
      "Clerk Auth",
      "TypeScript",
      "Framer Motion",
      "TailwindCSS",
      "Serverless",
      "Financial Tools"
    ],
    "githubUrl": "#",
    "liveUrl": "https://expense-tracker-e-wallet.vercel.app/",
    "docUrl": "/expense-manager-docs.pdf"
  },
  {
    "id": "analysis-agent",
    "title": "Analysis Agent",
    "type": "Multi-Agent Intelligence",
    "desc": "A multi-agent supply chain risk intelligence system designed to monitor global news, social media, and logistics data in real time. Multiple specialized AI agents collaborate to detect supply chain disruptions early, assess impact severity, suggest alternative suppliers, and automate preventive actions — enabling companies to mitigate delays and reduce losses before disruptions cascade.",
    "tags": [
      "Python",
      "FastAPI",
      "Multi-Agent Systems",
      "NLP",
      "Real-time Analytics",
      "Risk Intelligence",
      "Next.js",
      "TypeScript"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/analysis-agent-docs.pdf",
    "isDraft": true
  },
  {
    "id": "gram-sewek",
    "title": "Gram Sewek",
    "type": "Civic Infrastructure",
    "desc": "A scalable complaint management system designed for rural governance, connecting Villagers (Clients) with Gram Sevaks (Admins). Built on a dual-backend architecture with a TypeScript + Express + MongoDB auth layer and a Python FastAPI microservice for AI-driven complaint categorization. Features a Next.js frontend with Zod-validated request schemas and role-based access control for hierarchical complaint resolution workflows.",
    "tags": [
      "TypeScript",
      "Express",
      "MongoDB",
      "FastAPI",
      "Python",
      "Next.js",
      "Zod",
      "RBAC",
      "Microservices"
    ],
    "githubUrl": "https://github.com/pd241008/Gram-Sevak",
    "liveUrl": "#",
    "docUrl": "/gram-sewek-docs.pdf"
  },
  {
    "id": "taskiee",
    "title": "Taskiee",
    "type": "Team Management SaaS",
    "desc": "A role-based task management portal designed for engineering teams with a high-contrast Neo-Brutalism design language. Features a Kanban board with drag-and-drop task orchestration, hierarchical role management (President → Admin → Member), deadline tracking, and per-member task views. Built on a Next.js + Express + MongoDB stack with strict TypeScript typing and dnd-kit for fluid board interactions.",
    "tags": [
      "Next.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "dnd-kit",
      "Kanban",
      "RBAC",
      "TailwindCSS"
    ],
    "githubUrl": "https://github.com/pd241008/Taskiee",
    "liveUrl": "#",
    "docUrl": "/taskiee-docs.pdf"
  },
  {
    "id": "taskiee-ai-ops",
    "title": "Taskiee AI-Ops Board",
    "type": "Platform Expansion",
    "desc": "Expanding Taskiee with event-driven monitoring & AI root-cause analysis.",
    "tags": [
      "AI",
      "Event-Driven",
      "Monitoring",
      "Next.js",
      "Expansion"
    ],
    "githubUrl": "#",
    "liveUrl": "#",
    "isDraft": true,
    "docUrl": "/taskiee-ai-ops-docs.pdf"
  }
];
export function getProjects(includeDrafts = false) {
  const major = includeDrafts ? MAJOR_PROJECTS : MAJOR_PROJECTS.filter(p => !p.isDraft);
  const minor = includeDrafts ? MINOR_PROJECTS : MINOR_PROJECTS.filter(p => !p.isDraft);
  return { major, minor };
}
