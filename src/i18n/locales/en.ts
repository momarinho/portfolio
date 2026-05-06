import { Translations } from "../types";

export const en: Translations = {
  common: {
    start: "Start",
    loading: "Loading...",
    enableAudio: "(Enable Audio for Best Experience)",
    viewQuest: "VIEW QUEST",
    activeQuests: "ACTIVE QUESTS",
    rank: "Rank",
    reward: "REWARD",
    xp: "XP",
  },
  nav: {
    status: "STATUS",
    skills: "SKILLS",
    services: "SERVICES",
    experience: "EXPERIENCE",
    log: "LOG",
    guild: "CONTACT",
  },
  startScreen: {
    role: "Backend Developer · Go · Linux · APIs · Infrastructure",
    pressStart: "PRESS START",
  },
  hud: {
    level: "LVL27",
    class: "BACKEND / GO / LINUX",
    hp: "HP (Coffee)",
    mp: "SP (Stamina)",
  },
  character: {
    title: "CHARACTER SHEET",
    classLabel: "CLASS",
    specialtyLabel: "SPECIALTY",
    bioLabel: "BIO",
    bioText1:
      "Backend developer focused on Go, Linux, REST APIs, and production-grade systems engineering.",
    bioText2:
      "Currently delivering public-sector software in Brazil with Laravel services, JWT/OAuth2 secured APIs, relational databases, Dockerized environments, and Linux server operations.",
    currentStatus: "CURRENT STATUS",
    statusValue: "GO, LARAVEL, REST APIS, DOCKER, LINUX AND DATABASE-BACKED SYSTEMS",
    attributesTitle: "ATTRIBUTES",
  },
  skills: {
    title: "SKILL TREE",
    core: "CORE DISCIPLINE",
    support: "SUPPORT",
    frontline: "FRONTLINE",
  },
  services: {
    title: "AVAILABLE QUESTS",
    subtitle: "Services & Solutions Offered",
    items: {
      mobileDev: {
        title: "Backend API Development",
        desc: "REST APIs, authentication, database-backed workflows, and integration-ready services.",
        reward: "Production APIs",
      },
      nativeIntel: {
        title: "AI & Workflow Automation",
        desc: "LLM tooling, n8n automations, and backend systems that connect products to real operational flows.",
        reward: "Automated Workflows",
      },
      architecture: {
        title: "Infrastructure & Operations",
        desc: "Dockerized environments, Linux server routines, relational databases, and deployment support.",
        reward: "Reliable Delivery",
      },
    },
  },
  projects: {
    title: "QUEST LOG",
    items: {
      repengine: {
        type: "Featured Quest - Go / Backend Platform",
        desc: "Full-stack training routine platform with a Go + Fiber API, SvelteKit frontend, JWT auth, and versioned workflow CRUD. Benchmarked at p95 4.45 ms locally.",
        bullets: [
          "Go, Fiber, SvelteKit",
          "JWT authentication",
          "Versioned workflow CRUD",
        ],
      },
      aiopsDesktop: {
        type: "Strong Quest - Observability / AI",
        desc: "Desktop full-stack observability app with a Go backend, Svelte UI, real-time host metrics via SSE, guarded container actions, and an AI explanation layer powered by Claude API.",
        bullets: [
          "Go, Svelte, Electron",
          "SSE host metrics",
          "Claude API layer",
        ],
      },
      pulseGo: {
        type: "Strong Quest - Backend Systems",
        desc: "Go systems project with consumer groups, per-group offset tracking, publish/consume/ack/nack APIs, dead-letter inspection, WAL durability, and a terminal UI client.",
        bullets: [
          "Go, Nix",
          "Consumer groups",
          "WAL persistence",
        ],
      },
      portfolio: {
        type: "Strong Quest - Professional Showcase",
        desc: "TypeScript and Next.js portfolio deployed on Vercel and structured as the central hub for projects, positioning, and contact paths.",
        bullets: ["TypeScript", "Next.js", "Vercel showcase"],
      },
      containerManager: {
        type: "Technical Quest - Docker Operations",
        desc: "Full-stack web dashboard for Docker container management with a Python REST backend, React frontend, and operator-focused workflow UI.",
        bullets: ["Python", "React", "Docker management"],
      },
      catDietPlanner: {
        type: "Technical Quest - Cross-Platform Mobile",
        desc: "Cross-platform mobile app in Flutter and Dart for cat nutrition tracking across multiple profiles, focused on UI flows and state handling.",
        bullets: ["Flutter", "Dart", "State handling"],
      },
    },
  },
  experience: {
    title: "EXPERIENCE",
    items: [
      {
        role: "Software Developer",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "Feb 2026 - Present",
        bullets: [
          "Leading full-stack development of the Diario Oficial Portal across Next.js frontend flows and Laravel backend services.",
          "Designed and maintained REST APIs with JWT/OAuth2 authentication for dashboards and public-facing integrations.",
          "Implemented database-backed workflows, Dockerized services, deployment routines, and migration processes.",
          "Managed Linux server environments including NixOS and Ubuntu for development and production stability.",
        ],
      },
      {
        role: "Administrative Assistant",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "May 2025 - Feb 2026",
        bullets: [
          "Coordinated internal processes and optimized digital workflows in a public-sector environment.",
          "Transitioned into a software development role after demonstrating technical initiative.",
        ],
      },
      {
        role: "Reservations Agent",
        company: "Hotel Balneario · Cabo Frio, RJ",
        period: "Dec 2024 - Mar 2025",
        bullets: [
          "Managed guest reservations, availability, and communication across booking channels.",
        ],
      },
    ],
  },
  guild: {
    title: "LET'S BUILD",
    intro:
      "If you need backend APIs, workflow automation, Linux operations, or production-minded full-stack delivery, this is the best place to reach me.",
    form: {
      sendMessage: "START A CONVERSATION",
      namePlaceholder: "YOUR NAME",
      emailPlaceholder: "YOUR EMAIL",
      messagePlaceholder: "PROJECT, ROLE, OR PRODUCT CONTEXT...",
      submit: "SEND",
    },
    socials: {
      email: "EMAIL",
      linkedin: "LINKEDIN",
      github: "GITHUB",
    },
  },
};
