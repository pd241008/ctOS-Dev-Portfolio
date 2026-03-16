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
    "tags": ["Node.js", "Express", "TypeScript", "CLI", "Shell Scripting", "JWT Auth", "Service Mesh", "NPM SDK", "Architecture Patterns"],
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
    "tags": ["LLMs", "Pinecone/Vector DB", "FastAPI", "Next.js", "Python", "LangChain", "OpenAI/Gemini", "Redis Queue", "Semantic Search"],
    "status": "BUILDING",
    "githubUrl": "https://github.com/pd241008/IntelliDoc-Query",
    "liveUrl": "#",
    "docUrl": "/intellidoc-docs.pdf"
  },
  {
    "id": "omega",
    "title": "Project Omega",
    "type": "Distributed Systems",
    "description": "Experimental enterprise-grade distributed ledger and high-throughput micro-transaction system. Engineered with a focus on partitioning tolerance and horizontal scalability, Omega utilizes a custom consensus layer to manage distributed state across multiple nodes. It features automated circuit-breaking and advanced telemetry for monitoring transactional consistency in financial environments.",
    "tags": ["Go", "Distributed Systems", "GRPC", "Kafka", "PostgreSQL", "Architecture", "FinTech", "Scalability", "Observability"],
    "status": "RESEARCH",
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/project-omega.pdf"
  },
  {
    "id": "milan",
    "title": "Milan Core Platform",
    "type": "Event Infrastructure",
    "description": "The primary high-concurrency ticketing and event management infrastructure for SRM University. Architected for peak loads during university festivals, Milan handles thousands of concurrent WebSocket connections and dual-authentication flows (Internal/External). Implements advanced rate-limiting via Redis and an automated AWS-backed deployment pipeline for high availability.",
    "tags": ["Next.js", "Node.js", "AWS EC2/S3", "MongoDB", "Redis", "Socket.io", "Deployment Ops", "Security Protocols", "Full-Stack"],
    "status": "STABLE_DEPLOYMENT",
    "githubUrl": "https://github.com/TechTeam-Official/milanDSA-frontend",
    "liveUrl": "https://www.srmmilan.in/",
    "docUrl": "/milan-docs.md"
  }
];

export const MINOR_PROJECTS: Project[] = [
  {
    "id": "aqi",
    "title": "AI-Powered AQI Prediction",
    "desc": "A comprehensive MLOps pipeline for estimating Air Quality Index across multiple geographical nodes. Integrates trained scikit-learn models with a FastAPI backend for real-time inference. Features automated data cleaning scripts and a responsive monitoring dashboard for visual telemetry.",
    "tags": ["Machine Learning", "Scikit-Learn", "FastAPI", "Next.js", "Data Visualization", "Python", "Predictive Modeling", "Pandas"],
    "githubUrl": "https://github.com/pd241008/AQI-Preditcion-Model",
    "liveUrl": "https://aqi-preditcion-model.vercel.app/"
  },
  {
    "id": "neuro",
    "title": "NeuroTrack",
    "desc": "An AI-driven mental wellness dashboard focusing on affective computing. Uses LangChain to orchestrate sentiment analysis over personal journal entries, providing users with mood-trajectory insights. Features a secure, encrypted storage layer and a minimal, distraction-free writing environment.",
    "tags": ["Next.js", "Convex DB", "LangChain", "Sentimental Analysis", "AI/ML", "React", "State Management", "Encryption"],
    "githubUrl": "https://github.com/pd241008/NeuroTrack",
    "liveUrl": "#"
  },
  {
    "id": "intellivod",
    "title": "IntelliVOD",
    "type": "Media Infrastructure",
    "desc": "A sophisticated Video-on-Demand (VoD) orchestration engine engineered for low-latency content delivery and intelligent resource allocation. The system leverages distributed caching mechanisms and a custom transcoding pipeline to ensure seamless 4K streaming across varied network conditions. It integrates deep-learning models for predictive pre-loading and user-behavior-based recommendation weighting.",
    "tags": ["Next.js", "Distributed Systems", "Redis Cache", "FFmpeg", "Node.js", "PostgreSQL", "HLS Streaming", "Cloudflare Workers", "React Query"],
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
    "tags": ["Next.js", "WebContainers", "Monaco Editor", "Node.js", "Algorithmic Analysis", "React", "Web Workers", "Sandboxing"],
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
    "tags": ["Next.js", "OpenAI API", "RAG", "FastAPI", "Vector Database", "TailwindCSS", "Mobile-First Design", "LangChain", "Python"],
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
    "tags": ["Next.js", "Socket.io", "Real-time Sync", "CRDTs", "ProseMirror", "Node.js", "Redis", "TypeScript", "Vercel AI SDK"],
    "githubUrl": "#",
    "liveUrl": "#",
    "docUrl": "/collabstory-docs.pdf",
    "isDraft": true
  },
  {
    "id": "ai-tictactoe",
    "title": "AI-TicTacToe",
    "desc": "A high-performance Tic-Tac-Toe engine powered by a recursive Minimax search algorithm. The AI evaluates thousands of potential board states in milliseconds to ensure optimal play. Features a premium glassmorphic UI with CSS-in-JS animations and a localized state persistence layer for statistics.",
    "tags": ["TypeScript", "Minimax Algorithm", "Next.js", "Algorithms", "Game Dev", "Framer Motion", "Logic Engineering"],
    "githubUrl": "https://github.com/pd241008/AI-TicTacToe",
    "liveUrl": "https://quzzie-nine.vercel.app/"
  },
  {
    "id": "roadmap",
    "title": "AI Roadmap Generator",
    "desc": "An intelligent curriculum architect that transforms broad learning objectives into structured, chronological roadmaps. Utilizing the LLM inference (Gemini 1.5 Flash), the system generates multi-phase skill trees and resource links tailored to the user's proficiency level. Features internal PDF exporting and interactive progress tracking.",
    "tags": ["Next.js", "Gemini AI", "TypeScript", "Educational Tech", "Generative AI", "Structured Output", "React Hooks"],
    "githubUrl": "https://github.com/pd241008/RoadMap-Genrator",
    "liveUrl": "https://road-map-genrator.vercel.app/"
  },
  {
    "id": "color",
    "title": "Color Palette Generator",
    "desc": "A design-centric utility focused on mathematical color harmony. The system calculates complementary, analogous, and triadic color schemes based on a single base input. Optimized for developers, it provides one-click CSS variable exports and accessibility-standard contrast checks.",
    "tags": ["Next.js", "TailwindCSS", "TypeScript", "Design Tools", "Visual Design", "Accessibility/WCAG", "Frontend Engine"],
    "githubUrl": "https://github.com/pd241008/Color-Palate-Generator",
    "liveUrl": "https://color-palate-generate.vercel.app/"
  },
  {
    "id": "ctos-dev",
    "title": "ctOS Dev Portfolio",
    "desc": "A high-fidelity, interactive terminal emulator and developer portfolio designed to showcase projects through a 'cyber-security' lens. Implements an interactive CLI, a virtual filesystem, and a custom command-line interface (CLI) to provide an immersive user experience.",
    "tags": ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "CLI Engine", "UX Architecture", "System Emulation"],
    "githubUrl": "https://github.com/pd241008/ctOS-Dev-Portfolio",
    "liveUrl": "https://ct-os-dev-porfolio.vercel.app/",
    "docUrl": "/ctos-docs.md"
  }
];

export function getProjects(includeDrafts = false) {
  const major = includeDrafts ? MAJOR_PROJECTS : MAJOR_PROJECTS.filter(p => !p.isDraft);
  const minor = includeDrafts ? MINOR_PROJECTS : MINOR_PROJECTS.filter(p => !p.isDraft);
  return { major, minor };
}
