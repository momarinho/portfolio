import { Translations } from "../types";

export const pt: Translations = {
  common: {
    start: "Iniciar",
    loading: "Carregando...",
    enableAudio: "(Ative o áudio para melhor experiência)",
    viewQuest: "VER QUEST",
    activeQuests: "QUESTS ATIVAS",
    rank: "Rank",
    reward: "RECOMPENSA",
    xp: "XP",
  },
  nav: {
    status: "STATUS",
    skills: "SKILLS",
    services: "MISSOES",
    experience: "EXPERIENCIA",
    log: "DIARIO",
    guild: "CONTATO",
  },
  startScreen: {
    role: "Desenvolvedor Backend · Go · Linux · APIs · Infraestrutura",
    pressStart: "PRESS START",
  },
  hud: {
    level: "NIV27",
    class: "BACKEND / GO / LINUX",
    hp: "HP (Café)",
    mp: "SP (Estamina)",
  },
  character: {
    title: "FICHA DE PERSONAGEM",
    classLabel: "CLASSE",
    specialtyLabel: "ESPECIALIDADE",
    bioLabel: "BIO",
    bioText1:
      "Desenvolvedor backend focado em Go, Linux, APIs REST e engenharia de sistemas em nivel de producao.",
    bioText2:
      "Atualmente entrego software para o setor publico no Brasil com servicos Laravel, APIs protegidas por JWT/OAuth2, bancos relacionais, ambientes Docker e operacao de servidores Linux.",
    currentStatus: "STATUS ATUAL",
    statusValue: "GO, LARAVEL, APIS REST, DOCKER, LINUX E SISTEMAS COM BANCO DE DADOS",
    attributesTitle: "ATRIBUTOS",
  },
  skills: {
    title: "ARVORE DE HABILIDADES",
    core: "DISCIPLINA CENTRAL",
    support: "SUPORTE",
    frontline: "LINHA DE FRENTE",
  },
  services: {
    title: "QUESTS DISPONIVEIS",
    subtitle: "Serviços e Soluções Oferecidos",
    items: {
      mobileDev: {
        title: "Desenvolvimento de APIs Backend",
        desc: "APIs REST, autenticacao, workflows persistidos em banco e servicos prontos para integracao.",
        reward: "APIs de Producao",
      },
      nativeIntel: {
        title: "IA & Automacao de Workflows",
        desc: "LLM tooling, automacoes com n8n e sistemas backend conectados a fluxos operacionais reais.",
        reward: "Workflows Automatizados",
      },
      architecture: {
        title: "Infraestrutura & Operacao",
        desc: "Ambientes Docker, rotinas em servidores Linux, bancos relacionais e suporte a deploy.",
        reward: "Entrega Confiavel",
      },
    },
  },
  projects: {
    title: "DIARIO DE QUESTS",
    items: {
      repengine: {
        type: "Quest Principal - Go / Plataforma Backend",
        desc: "Plataforma full-stack de rotinas de treino com API Go + Fiber, frontend em SvelteKit, autenticacao JWT e CRUD versionado de workflows. Benchmark local em p95 de 4.45 ms.",
        bullets: [
          "Go, Fiber, SvelteKit",
          "Autenticacao JWT",
          "CRUD versionado",
        ],
      },
      aiopsDesktop: {
        type: "Quest Forte - Observabilidade / IA",
        desc: "Aplicativo desktop full-stack de observabilidade com backend em Go, interface Svelte, metricas do host em tempo real via SSE, acoes protegidas em containers e camada de explicacao por IA com Claude API.",
        bullets: [
          "Go, Svelte, Electron",
          "Metricas via SSE",
          "Camada Claude API",
        ],
      },
      pulseGo: {
        type: "Quest Forte - Sistemas Backend",
        desc: "Projeto de sistemas em Go com consumer groups, offsets por grupo, APIs de publish/consume/ack/nack, inspecao de dead-letter, durabilidade com WAL e cliente TUI.",
        bullets: [
          "Go, Nix",
          "Consumer groups",
          "Persistencia WAL",
        ],
      },
      portfolio: {
        type: "Quest Forte - Vitrine Profissional",
        desc: "Portfolio em TypeScript e Next.js no Vercel, organizado como hub central de projetos, posicionamento profissional e canais de contato.",
        bullets: ["TypeScript", "Next.js", "Vitrine no Vercel"],
      },
      containerManager: {
        type: "Quest Tecnica - Operacao Docker",
        desc: "Dashboard web full-stack para gerenciamento de containers Docker com backend REST em Python, frontend React e UI focada no fluxo do operador.",
        bullets: ["Python", "React", "Gestao Docker"],
      },
      catDietPlanner: {
        type: "Quest Tecnica - Mobile Cross-Platform",
        desc: "Aplicativo mobile multiplataforma em Flutter e Dart para acompanhamento nutricional de gatos em multiplos perfis, focado em fluxos de UI e estado.",
        bullets: ["Flutter", "Dart", "Estado e UI"],
      },
    },
  },
  experience: {
    title: "EXPERIENCIA",
    items: [
      {
        role: "Software Developer",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "Fev 2026 - Atual",
        bullets: [
          "Lideranca no desenvolvimento full-stack do Diario Oficial Portal em fluxos Next.js e servicos backend Laravel.",
          "Desenho e manutencao de APIs REST com autenticacao JWT/OAuth2 para dashboards e integracoes publicas.",
          "Implementacao de workflows persistidos em banco, servicos Dockerizados, rotinas de deploy e processos de migracao.",
          "Operacao de ambientes Linux, incluindo NixOS e Ubuntu, para estabilidade em desenvolvimento e producao.",
        ],
      },
      {
        role: "Administrative Assistant",
        company: "Prefeitura Municipal de Arraial do Cabo · Arraial do Cabo, RJ",
        period: "Mai 2025 - Fev 2026",
        bullets: [
          "Coordenacao de processos internos e otimizacao de workflows digitais em ambiente de setor publico.",
          "Transicao para desenvolvimento de software apos demonstrar iniciativa tecnica.",
        ],
      },
      {
        role: "Reservations Agent",
        company: "Hotel Balneario · Cabo Frio, RJ",
        period: "Dez 2024 - Mar 2025",
        bullets: [
          "Gestao de reservas, disponibilidade e comunicacao com hospedes em multiplos canais.",
        ],
      },
    ],
  },
  guild: {
    title: "VAMOS CONSTRUIR",
    intro:
      "Se voce precisa de APIs backend, automacao de workflows, operacao Linux ou entrega full-stack com foco em producao, esta e a melhor forma de falar comigo.",
    form: {
      sendMessage: "INICIAR CONVERSA",
      namePlaceholder: "SEU NOME",
      emailPlaceholder: "SEU EMAIL",
      messagePlaceholder: "CONTEXTO DO PROJETO, VAGA OU IDEIA...",
      submit: "ENVIAR",
    },
    socials: {
      email: "EMAIL",
      linkedin: "LINKEDIN",
      github: "GITHUB",
    },
  },
};
