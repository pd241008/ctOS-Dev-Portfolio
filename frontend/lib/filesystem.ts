import { FSDir } from "@/types/terminal";

export const filesystem: FSDir = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        "about.txt": {
          type: "file",
          content: [
            "╔══════════════════════════════════════════════╗",
            "║       OPERATOR PROFILE: PRATHMESH DESAI      ║",
            "╚══════════════════════════════════════════════╝",
            "",
            "DESIGNATION:  Backend-Focused Full Stack Developer",
            "EDUCATION:    B.Tech Computer Science (2023–2027)",
            "INSTITUTION:  SRM University",
            "",
            "CLEARANCE:    ADMIN",
            "STATUS:       ACTIVE",
            "",
            "> Architecting robust backend systems,",
            "  developer tooling, and scalable cloud infrastructure.",
          ].join("\n"),
        },
        "skills.txt": {
          type: "file",
          content: [
            "SYS_CORE_STACK:",
            "",
            "LANGUAGES:    JavaScript · TypeScript · Python · C++ · Java",
            "FRONTEND:     Next.js · React.js · Tailwind CSS",
            "BACKEND:      Node.js · Express.js · FastAPI",
            "DATABASES:    MongoDB · PostgreSQL",
            "INFRA:        AWS EC2 · PM2 · Docker",
          ].join("\n"),
        },
        "contact.txt": {
          type: "file",
          content: [
            "╔══════════════════════════════════════════════╗",
            "║            COMM-LINK ENDPOINTS               ║",
            "╚══════════════════════════════════════════════╝",
            "",
            "EMAIL:      prathmeshpdesai@gmail.com",
            "LINKEDIN:   linkedin.com/in/pd241008",
            "GITHUB:     github.com/pd241008",
          ].join("\n"),
        },
      },
    },

    archive: {
      type: "dir",
      children: {
        "expresskit.txt": {
          type: "file",
          content: [
            "PROJECT:  ExpressKit CLI",
            "TYPE:     Developer Tooling",
            "STATUS:   LIVE_ON_NPM",
            "",
            "A production-grade CLI and framework wrapper for Express.js,",
            "designed to formalize backend architecture through convention",
            "over configuration. Automates scaffolding of service layers,",
            "JWT-based authentication, and centralized error handling.",
            "",
            "STACK:  Node.js · Express · TypeScript · CLI · Shell · JWT",
            "NPM:    npmjs.com/package/@pd241008/expresskit",
            "REPO:   github.com/pd241008/ExpressKit",
          ].join("\n"),
        },
        "intellidoc.txt": {
          type: "file",
          content: [
            "PROJECT:  IntelliDoc Query Engine",
            "TYPE:     AI & Search",
            "STATUS:   BUILDING",
            "",
            "Advanced RAG infrastructure for semantic document analysis.",
            "Orchestrates context-aware chunking and embedding",
            "generation for deep insights from unstructured data.",
            "Features asynchronous ingestion and citation systems.",
            "",
            "STACK:  LLMs · Pinecone · FastAPI · Next.js · LangChain",
            "REPO:   github.com/pd241008/IntelliDoc-Query",
          ].join("\n"),
        },
        "aqi.txt": {
          type: "file",
          content: [
            "PROJECT:  AI-Powered AQI Prediction",
            "TYPE:     MLOps & Data Science",
            "STATUS:   PRODUCTION",
            "",
            "Comprehensive MLOps pipeline for AQI estimation across",
            "geographical nodes. Integrates scikit-learn with FastAPI.",
            "Features automated cleaning and visual telemetry.",
            "",
            "STACK:  Machine Learning · Scikit-Learn · FastAPI · Next.js",
            "LIVE:   aqi-preditcion-model.vercel.app",
            "REPO:   github.com/pd241008/AQI-Preditcion-Model",
          ].join("\n"),
        },
        "neurotrack.txt": {
          type: "file",
          content: [
            "PROJECT:  NeuroTrack",
            "TYPE:     AI & Wellness",
            "STATUS:   DEVELOPMENT",
            "",
            "AI-driven wellness dashboard. Uses LangChain for",
            "sentiment analysis over journal entries. Features",
            "encrypted storage and mood-trajectory monitoring.",
            "",
            "STACK:  Next.js · Convex DB · LangChain · AI/ML",
            "REPO:   github.com/pd241008/NeuroTrack",
          ].join("\n"),
        },
        "intellivod.txt": {
          type: "file",
          content: [
            "PROJECT:  IntelliVOD",
            "TYPE:     Media Infrastructure",
            "STATUS:   ALPHA",
            "",
            "Sophisticated VoD orchestration engine for low-latency delivery.",
            "Leverages distributed caching and custom transcoding pipelines.",
            "Integrates deep-learning for predictive pre-loading.",
            "",
            "STACK:  Next.js · Distributed Systems · Redis · FFmpeg",
            "DOCS:   intellivod-v2.pdf",
            "REPO:   [ ACCESS_RESTRICTED ]",
          ].join("\n"),
        },
        "codequest.txt": {
          type: "file",
          content: [
            "PROJECT:  CodeQuest Playground",
            "TYPE:     Algorithmic Engine",
            "STATUS:   DRAFT",
            "",
            "Gamified coding environment for algorithmic execution.",
            "Features WebContainer runtime and efficiency scoring.",
            "",
            "STACK:  Next.js · WebContainers · Monaco · Node.js",
            "DOCS:   codequest-docs.pdf",
          ].join("\n"),
        },
        "journee.txt": {
          type: "file",
          content: [
            "PROJECT:  Journee",
            "TYPE:     AI Travel Engine",
            "STATUS:   STABLE",
            "",
            "AI-centric travel companion. Utilizes RAG for context-aware",
            "itinerary planning and real-time journaling prompts.",
            "Features a sleek, offline-first responsive interface.",
            "",
            "STACK:  Next.js · OpenAI · RAG · FastAPI · Vector DB",
            "REPO:   [ ACCESS_RESTRICTED ]",
          ].join("\n"),
        },
        "collabstory.txt": {
          type: "file",
          content: [
            "PROJECT:  CollabStory",
            "TYPE:     Real-time SaaS",
            "STATUS:   BETA",
            "",
            "Real-time collaborative workspace for digital narratives.",
            "Built on an OT synchronization engine. Includes integrated",
            "version-branching and character consistency checks.",
            "",
            "STACK:  Next.js · Socket.io · Real-time Sync · CRDTs",
            "REPO:   [ ACCESS_RESTRICTED ]",
          ].join("\n"),
        },
        "ai-tictactoe.txt": {
          type: "file",
          content: [
            "PROJECT:  AI-TicTacToe",
            "TYPE:     Logic Engineering",
            "STATUS:   STABLE",
            "",
            "High-performance engine powered by recursive Minimax.",
            "Evaluates thousands of states in milliseconds.",
            "Features glassmorphic UI with CSS-in-JS animations.",
            "",
            "STACK:  TypeScript · Minimax · Next.js · Framer Motion",
            "LIVE:   quzzie-nine.vercel.app",
            "REPO:   github.com/pd241008/AI-TicTacToe",
          ].join("\n"),
        },
        "roadmap.txt": {
          type: "file",
          content: [
            "PROJECT:  AI Roadmap Generator",
            "TYPE:     AI & Education",
            "STATUS:   STABLE",
            "",
            "Intelligent curriculum architect. Uses Gemini 1.5 Flash",
            "to generate multi-phase skill trees. Features internal",
            "PDF exporting and interactive progress tracking.",
            "",
            "STACK:  Next.js · Gemini AI · TypeScript · GenAI",
            "LIVE:   road-map-genrator.vercel.app",
            "REPO:   github.com/pd241008/RoadMap-Genrator",
          ].join("\n"),
        },
        "color-palette.txt": {
          type: "file",
          content: [
            "PROJECT:  Color Palette Generator",
            "TYPE:     Design Tools",
            "STATUS:   STABLE",
            "",
            "Mathematical color harmony utility. Calculates schemes",
            "based on base inputs. Includes CSS variable exports",
            "and accessibility (WCAG) contrast checks.",
            "",
            "STACK:  Next.js · TailwindCSS · TypeScript · Design",
            "LIVE:   color-palate-generate.vercel.app",
            "REPO:   github.com/pd241008/Color-Palate-Generator",
          ].join("\n"),
        },
        "milan.txt": {
          type: "file",
          content: [
            "PROJECT:  Milan Core Platform",
            "TYPE:     Event Infrastructure",
            "STATUS:   STABLE_DEPLOYMENT",
            "",
            "High-concurrency infrastructure for SRM University.",
            "Handles thousands of WebSocket connections and dual-auth.",
            "Implements Redis rate-limiting and AWS auto-scaling.",
            "",
            "STACK:  Next.js · Node.js · AWS · MongoDB · Redis",
            "LIVE:   www.srmmilan.in",
            "REPO:   github.com/TechTeam-Official/milanDSA-frontend",
            "DOCS:   milan-docs.md",
          ].join("\n"),
        },
        "omega.txt": {
          type: "file",
          content: [
            "PROJECT:  Project Omega",
            "TYPE:     Distributed Systems",
            "STATUS:   RESEARCH",
            "",
            "Experimental distributed ledger and transaction system.",
            "Engineered for partitioning tolerance and horizontal",
            "scalability. Features custom consensus and telemetry.",
            "",
            "STACK:  Go · Distributed Systems · GRPC · Kafka",
          ].join("\n"),
        },
        "ctos-dev.txt": {
          type: "file",
          content: [
            "PROJECT:  ctOS Dev Portfolio",
            "TYPE:     System Interface / UX Architecture",
            "STATUS:   PRODUCTION-STABLE",
            "",
            "High-fidelity interactive terminal emulator designed",
            "with a cyber-security aesthetic. Implements a virtual",
            "filesystem and a custom CLI engine.",
            "",
            "STACK:  Next.js · TypeScript · TailwindCSS · Framer Motion",
            "LIVE:   ct-os-dev-porfolio.vercel.app",
            "REPO:   github.com/pd241008/ctOS-Dev-Portfolio",
            "DOCS:   ctos-docs.md",
          ].join("\n"),
        },
      },
    },

    sandbox: {
      type: "dir",
      children: {
        "expresskit-demo.txt": {
          type: "file",
          content: [
            "╔══════════════════════════════════════════════╗",
            "║      SANDBOX: EXPRESSKIT CLI SIMULATOR       ║",
            "╚══════════════════════════════════════════════╝",
            "",
            "Run 'gui' and navigate to /sandbox to try the",
            "interactive ExpressKit installation simulator.",
            "",
            "  > npx @pd241008/expresskit init",
            "",
            "Watch the scaffolding process in real-time.",
          ].join("\n"),
        },
      },
    },

    uplink: {
      type: "dir",
      children: {
        "github-stats.log": {
          type: "file",
          content: "Loading telemetry data... Use 'cat' to fetch live data.",
          asyncContent: async () => {
            const username =
              process.env.NEXT_PUBLIC_GITHUB_USERNAME || "pd241008";
            const res = await fetch(
              `https://api.github.com/users/${username}`,
            );
            if (!res.ok) throw new Error("Telemetry fetch failed");
            const data = await res.json();
            return [
              "╔══════════════════════════════════════════════╗",
              "║        GITHUB TELEMETRY — LIVE DATA          ║",
              "╚══════════════════════════════════════════════╝",
              "",
              `  PUBLIC REPOS:   ${data.public_repos}`,
              `  FOLLOWERS:      ${data.followers}`,
              `  FOLLOWING:      ${data.following}`,
              `  ACCOUNT SINCE:  ${data.created_at?.slice(0, 10) ?? "N/A"}`,
              "",
              `  PROFILE:  github.com/${username}`,
            ].join("\n");
          },
        },
        "links.txt": {
          type: "file",
          content: [
            "UPLINK CHANNELS:",
            "",
            "  - GitHub     github.com/pd241008",
            "  - LinkedIn   linkedin.com/in/pd241008",
            "  - Email      prathmeshpdesai@gmail.com",
            "  - Resume     Prathmesh_Desai_Resume.pdf",
          ].join("\n"),
        },
      },
    },
  },
};

/**
 * Resolve a path array (e.g. ["archive"]) against the filesystem root.
 * Returns the FSNode at that path, or null if not found.
 */
export function resolvePath(
  pathSegments: string[],
): import("@/types/terminal").FSNode | null {
  let current: import("@/types/terminal").FSNode = filesystem;
  for (const segment of pathSegments) {
    if (current.type !== "dir" || !current.children[segment]) return null;
    current = current.children[segment];
  }
  return current;
}
