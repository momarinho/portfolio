import { Translations } from "../types";

export const es: Translations = {
  common: {
    start: "Comenzar",
    loading: "Cargando...",
    enableAudio: "(Activa el audio para la mejor experiencia)",
    viewQuest: "VER PARTE",
    activeQuests: "MISIONES ACTIVAS",
    rank: "Rango",
    reward: "RECOMPENSA",
    xp: "XP",
  },
  nav: {
    status: "ESTADO",
    skills: "HABILIDADES",
    services: "MISIONES",
    experience: "EXPERIENCIA",
    log: "DIARIO",
    guild: "CONTACTO",
  },
  startScreen: {
    role: "Desarrollador Backend · Go · Linux · APIs · Infraestructura",
    pressStart: "PULSA START",
  },
  hud: {
    level: "NIV27",
    class: "BACKEND / GO / LINUX",
    hp: "PV (Café)",
    mp: "PE (Estamina)",
  },
  character: {
    title: "HOJA DE PERSONAJE",
    classLabel: "CLASE",
    specialtyLabel: "ESPECIALIDAD",
    bioLabel: "BIO",
    bioText1:
      "Desarrollador backend centrado en Go, Linux, APIs REST e ingenieria de sistemas a nivel de produccion.",
    bioText2:
      "Actualmente entrego software para el sector publico en Brasil con servicios Laravel, APIs protegidas con JWT/OAuth2, bases relacionales, entornos Docker y operacion de servidores Linux.",
    currentStatus: "ESTADO ACTUAL",
    statusValue: "GO, LARAVEL, APIS REST, DOCKER, LINUX Y SISTEMAS CON BASE DE DATOS",
    attributesTitle: "ATRIBUTOS",
  },
  skills: {
    title: "ARBOL DE HABILIDADES",
    core: "DISCIPLINA BASICA",
    support: "APOYO",
    frontline: "VANGUARDIA",
  },
  services: {
    title: "MISIONES DISPONIBLES",
    subtitle: "Servicios y Soluciones Ofrecidos",
    items: {
      mobileDev: {
        title: "Desarrollo de APIs Backend",
        desc: "APIs REST, autenticacion, workflows persistidos en base de datos y servicios listos para integracion.",
        reward: "APIs de Produccion",
      },
      nativeIntel: {
        title: "IA y Automatizacion de Workflows",
        desc: "LLM tooling, automatizaciones con n8n y sistemas backend conectados a flujos operativos reales.",
        reward: "Workflows Automatizados",
      },
      architecture: {
        title: "Infraestructura y Operacion",
        desc: "Entornos Docker, rutinas en servidores Linux, bases relacionales y soporte de deploy.",
        reward: "Entrega Confiable",
      },
    },
  },
  projects: {
    title: "DIARIO DE MISIONES",
    items: {
      repengine: {
        type: "Mision Principal - Go / Plataforma Backend",
        desc: "Plataforma full-stack de rutinas de entrenamiento con API Go + Fiber, frontend en SvelteKit, autenticacion JWT y CRUD versionado de workflows. Benchmark local p95 de 4.45 ms.",
        bullets: [
          "Go, Fiber, SvelteKit",
          "Autenticacion JWT",
          "CRUD versionado",
        ],
      },
      aiopsDesktop: {
        type: "Mision Fuerte - Observabilidad / IA",
        desc: "Aplicacion desktop full-stack de observabilidad con backend en Go, interfaz Svelte, metricas del host en tiempo real via SSE, acciones protegidas en contenedores y capa de explicacion con Claude API.",
        bullets: [
          "Go, Svelte, Electron",
          "Metricas via SSE",
          "Capa Claude API",
        ],
      },
      pulseGo: {
        type: "Mision Fuerte - Sistemas Backend",
        desc: "Proyecto de sistemas en Go con grupos de consumidores, offsets por grupo, APIs de publish/consume/ack/nack, inspeccion de dead-letter, durabilidad WAL y cliente TUI.",
        bullets: [
          "Go, Nix",
          "Consumer groups",
          "Persistencia WAL",
        ],
      },
      portfolio: {
        type: "Mision Fuerte - Vitrina Profesional",
        desc: "Portafolio en TypeScript y Next.js desplegado en Vercel y organizado como hub central de proyectos, posicionamiento profesional y canales de contacto.",
        bullets: ["TypeScript", "Next.js", "Vitrina en Vercel"],
      },
      containerManager: {
        type: "Mision Tecnica - Operacion Docker",
        desc: "Dashboard web full-stack para gestion de contenedores Docker con backend REST en Python, frontend React e interfaz enfocada en el flujo del operador.",
        bullets: ["Python", "React", "Gestion Docker"],
      },
      catDietPlanner: {
        type: "Mision Tecnica - Mobile Cross-Platform",
        desc: "Aplicacion movil multiplataforma en Flutter y Dart para seguimiento nutricional de gatos en multiples perfiles, centrada en flujos de UI y estado.",
        bullets: ["Flutter", "Dart", "Estado y UI"],
      },
    },
  },
  experience: {
    title: "EXPERIENCIA",
    items: [
      {
        role: "Software Developer",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "Feb 2026 - Actual",
        bullets: [
          "Liderazgo en el desarrollo full-stack del Diario Oficial Portal con flujos Next.js y servicios backend Laravel.",
          "Diseno y mantenimiento de APIs REST con autenticacion JWT/OAuth2 para dashboards e integraciones publicas.",
          "Implementacion de workflows persistidos en base de datos, servicios Dockerizados, rutinas de deploy y procesos de migracion.",
          "Operacion de entornos Linux, incluyendo NixOS y Ubuntu, para estabilidad en desarrollo y produccion.",
        ],
      },
      {
        role: "Administrative Assistant",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "May 2025 - Feb 2026",
        bullets: [
          "Coordinacion de procesos internos y optimizacion de workflows digitales en entorno de sector publico.",
          "Transicion a desarrollo de software despues de demostrar iniciativa tecnica.",
        ],
      },
      {
        role: "Reservations Agent",
        company: "Hotel Balneario · Cabo Frio, RJ",
        period: "Dic 2024 - Mar 2025",
        bullets: [
          "Gestion de reservas, disponibilidad y comunicacion con huespedes en multiples canales.",
        ],
      },
    ],
  },
  guild: {
    title: "CONSTRUYAMOS",
    intro:
      "Si necesitas APIs backend, automatizacion de workflows, operacion Linux o entrega full-stack con foco en produccion, este es el mejor lugar para hablar conmigo.",
    form: {
      sendMessage: "INICIAR CONVERSACION",
      namePlaceholder: "TU NOMBRE",
      emailPlaceholder: "TU EMAIL",
      messagePlaceholder: "CONTEXTO DEL PROYECTO, ROL O IDEA...",
      submit: "ENVIAR",
    },
    socials: {
      email: "CORREO",
      linkedin: "LINKEDIN",
      github: "GITHUB",
    },
  },
};
