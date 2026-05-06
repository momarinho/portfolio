import { NextRequest, NextResponse } from "next/server";
import portfolioData from "@/data/portfolio.json";

type Language = "en" | "pt" | "es";
type Role = "user" | "bot";
type Message = { role: Role; text: string };
type Project = {
  name: string;
  description: string;
  tech: string;
};

type PortfolioLocale = {
  profile: {
    name: string;
    role: string;
    email: string;
    linkedin: string;
    github: string;
  };
  about: string[];
  skills: {
    core: string[];
    support: string[];
    frontline: string[];
  };
  projects: Project[];
};

type ChatCopy = {
  intro: string;
  fallback: string;
  contact: string;
  linkedin: string;
  github: string;
  role: string;
  stack: string;
  currentWork: string;
  projectLead: string;
  projectSummary: string;
  projectListLead: string;
  highlightLead: string;
  devops: string;
  recruiter: string;
  client: string;
  experience: string;
  experienceLead: string;
  fitLead: string;
  availability: string;
  suggestionsLead: string;
};

const COPY: Record<Language, ChatCopy> = {
  en: {
    intro: "I can help with projects, stack, experience, and contact info.",
    fallback:
      "I can answer about projects, stack, infrastructure, contact info, and current work. Try asking about repengine or Mateus's current backend stack.",
    contact: "You can reach Mateus at",
    linkedin: "LinkedIn",
    github: "GitHub",
    role: "Mateus is positioned as",
    stack: "Current stack:",
    currentWork: "Current work combines",
    projectLead: "Project",
    projectSummary: "Summary",
    projectListLead: "Main projects:",
    highlightLead:
      "Featured project: repengine. It shows Go backend delivery with a Fiber API, SvelteKit frontend, JWT auth, versioned workflow CRUD, and a local p95 benchmark at 4.45 ms.",
    devops:
      "Infrastructure angle: Dockerized environments, Linux server operations, relational databases, deployment routines, and production delivery workflows.",
    recruiter:
      "Recruiter summary: backend developer focused on Go, Linux, REST APIs, Laravel services, Docker, and production-minded system delivery.",
    client:
      "Client summary: API-first delivery for backend services, workflow automation, integrations, Linux operations, and full-stack support when the product needs it.",
    experience:
      "Current experience centers on public-sector software delivery: Next.js frontend flows, Laravel backend services, JWT/OAuth2 APIs, Dockerized services, database workflows, and Linux operations.",
    experienceLead: "Professional profile:",
    fitLead:
      "Best fit for teams that need product thinking, implementation, and production delivery in the same profile.",
    availability:
      "Current positioning: Backend Developer with Go, Linux, REST APIs, Laravel, Docker, and relational databases.",
    suggestionsLead: "You can also ask:",
  },
  pt: {
    intro: "Posso ajudar com projetos, stack, experiência e contato.",
    fallback:
      "Posso responder sobre projetos, stack, infraestrutura, contato e trabalho atual. Tente perguntar sobre repengine ou sobre a stack backend atual do Mateus.",
    contact: "Você pode falar com Mateus em",
    linkedin: "LinkedIn",
    github: "GitHub",
    role: "O posicionamento atual do Mateus é",
    stack: "Stack atual:",
    currentWork: "Hoje o trabalho combina",
    projectLead: "Projeto",
    projectSummary: "Resumo",
    projectListLead: "Projetos principais:",
    highlightLead:
      "Projeto em destaque: repengine. Ele mostra entrega backend em Go com API Fiber, frontend SvelteKit, autenticação JWT, CRUD versionado de workflows e benchmark local p95 de 4.45 ms.",
    devops:
      "Ângulo de infraestrutura: ambientes Dockerizados, operação de servidores Linux, bancos relacionais, rotinas de deploy e fluxos de entrega em produção.",
    recruiter:
      "Resumo para recrutador: desenvolvedor backend focado em Go, Linux, APIs REST, serviços Laravel, Docker e entrega de sistemas com mentalidade de produção.",
    client:
      "Resumo para cliente: entrega API-first para serviços backend, automação de workflows, integrações, operação Linux e suporte full-stack quando o produto precisa.",
    experience:
      "A experiência atual se concentra em software para setor público: fluxos frontend em Next.js, serviços backend Laravel, APIs JWT/OAuth2, serviços Dockerizados, workflows com banco de dados e operação Linux.",
    experienceLead: "Perfil profissional:",
    fitLead:
      "Melhor encaixe em times que precisam de visão de produto, implementação e entrega em produção no mesmo perfil.",
    availability:
      "Posicionamento atual: Desenvolvedor Backend com Go, Linux, APIs REST, Laravel, Docker e bancos relacionais.",
    suggestionsLead: "Você também pode perguntar:",
  },
  es: {
    intro: "Puedo ayudar con proyectos, stack, experiencia y contacto.",
    fallback:
      "Puedo responder sobre proyectos, stack, infraestructura, contacto y trabajo actual. Prueba preguntar por repengine o por el stack backend actual de Mateus.",
    contact: "Puedes contactar a Mateus en",
    linkedin: "LinkedIn",
    github: "GitHub",
    role: "El posicionamiento actual de Mateus es",
    stack: "Stack actual:",
    currentWork: "Hoy el trabajo combina",
    projectLead: "Proyecto",
    projectSummary: "Resumen",
    projectListLead: "Proyectos principales:",
    highlightLead:
      "Proyecto destacado: repengine. Muestra entrega backend en Go con API Fiber, frontend SvelteKit, autenticación JWT, CRUD versionado de workflows y benchmark local p95 de 4.45 ms.",
    devops:
      "Ángulo de infraestructura: entornos Dockerizados, operación de servidores Linux, bases relacionales, rutinas de deploy y flujos de entrega en producción.",
    recruiter:
      "Resumen para reclutador: desarrollador backend centrado en Go, Linux, APIs REST, servicios Laravel, Docker y entrega de sistemas con mentalidad de producción.",
    client:
      "Resumen para cliente: entrega API-first para servicios backend, automatización de workflows, integraciones, operación Linux y soporte full-stack cuando el producto lo necesita.",
    experience:
      "La experiencia actual se centra en software para sector público: flujos frontend en Next.js, servicios backend Laravel, APIs JWT/OAuth2, servicios Dockerizados, workflows con base de datos y operación Linux.",
    experienceLead: "Perfil profesional:",
    fitLead:
      "Mejor encaje en equipos que necesitan visión de producto, implementación y entrega en producción en el mismo perfil.",
    availability:
      "Posicionamiento actual: Desarrollador Backend con Go, Linux, APIs REST, Laravel, Docker y bases relacionales.",
    suggestionsLead: "También puedes preguntar:",
  },
};

const SUGGESTIONS: Record<Language, string[]> = {
  en: [
    "What is Mateus's current stack?",
    "Tell me about repengine",
    "How does Mateus work with infrastructure?",
    "How can I contact Mateus?",
    "Why is Mateus a good fit for this role?",
    "What can Mateus build for a client?",
  ],
  pt: [
    "Qual é a stack atual do Mateus?",
    "Me fale do repengine",
    "Como o Mateus trabalha com infraestrutura?",
    "Como posso entrar em contato?",
    "Por que o Mateus é um bom fit para a vaga?",
    "O que o Mateus pode construir para um cliente?",
  ],
  es: [
    "¿Cuál es el stack actual de Mateus?",
    "Cuéntame sobre repengine",
    "¿Cómo trabaja Mateus con infraestructura?",
    "¿Cómo puedo contactarlo?",
    "¿Por qué Mateus encaja bien en este rol?",
    "¿Qué puede construir Mateus para un cliente?",
  ],
};

const LOCALES = portfolioData as Record<Language, PortfolioLocale>;

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getLocale(language?: string): Language {
  return language === "pt" || language === "es" ? language : "en";
}

function buildProjectLinks(
  project: Project,
  locale: PortfolioLocale,
  copy: ChatCopy,
) {
  const repoUrl = `${locale.profile.github}/${project.name}`;
  return `${copy.projectLead}: ${project.name}\n${copy.projectSummary}: ${project.description}\nStack: ${project.tech}\n${copy.github}: ${repoUrl}`;
}

function listProjects(projects: Project[], copy: ChatCopy) {
  return `${copy.projectListLead} ${projects.map((project) => project.name).join(", ")}.`;
}

function buildStack(locale: PortfolioLocale, copy: ChatCopy) {
  const stack = [
    ...locale.skills.core,
    ...locale.skills.support,
    ...locale.skills.frontline,
  ];
  const uniqueStack = Array.from(new Set(stack));
  return `${copy.stack} ${uniqueStack.join(", ")}.`;
}

function getCurrentWork(copy: ChatCopy) {
  return `${copy.currentWork} Go, Laravel, REST APIs, JWT/OAuth2, relational databases, Docker, Linux operations, and production deployment routines.`;
}

function getContact(locale: PortfolioLocale, copy: ChatCopy) {
  return `${copy.contact} ${locale.profile.email}. ${copy.linkedin}: ${locale.profile.linkedin}. ${copy.github}: ${locale.profile.github}`;
}

function getAbout(locale: PortfolioLocale, copy: ChatCopy) {
  return `${copy.role} ${locale.profile.role}. ${locale.about.join(" ")}`;
}

function getExperience(copy: ChatCopy) {
  return `${copy.experienceLead} ${copy.experience} ${copy.fitLead}`;
}

function getRecentUserMessage(history: Message[]) {
  const recentUserMessages = history
    .filter((message) => message.role === "user")
    .slice(-3)
    .map((message) => normalize(message.text));
  return recentUserMessages.join(" ");
}

function findProject(query: string, projects: Project[]) {
  return projects.find((project) => {
    const name = normalize(project.name);
    const description = normalize(project.description);
    return (
      query.includes(name) ||
      name.includes(query) ||
      description.includes(query)
    );
  });
}

function buildSuggestions(language: Language, copy: ChatCopy) {
  return `${copy.suggestionsLead} ${SUGGESTIONS[language].join(" | ")}`;
}

function answerChat(
  message: string,
  history: Message[],
  language: Language,
): { text: string; suggestions: string[] } {
  const locale = LOCALES[language];
  const copy = COPY[language];
  const query = normalize(message);
  const context = getRecentUserMessage(history);
  const combinedQuery = `${context} ${query}`.trim();
  const project = findProject(combinedQuery, locale.projects);

  if (project) {
    return {
      text: `${buildProjectLinks(project, locale, copy)} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /contact|contato|correo|email|mail|linkedin|github|hire|contratar/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${getContact(locale, copy)} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /stack|skill|skills|habilidade|habilidades|tecnologia|tecnologias|tecnologia|tech/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${buildStack(locale, copy)} ${getCurrentWork(copy)} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /devops|docker|deploy|deployment|hosting|infra|infrastructure|firebase|vercel/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${copy.devops} ${getCurrentWork(copy)} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /recruiter|recruiters|recrutador|recrutadores|contratacion|why|por que|porque|why mateus/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${copy.recruiter} ${copy.highlightLead} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /client|cliente|clientes|freelance|servico|servicos|service|services|build|construir|projeto para cliente/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${copy.client} ${copy.highlightLead} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /experience|experiencia|experiencia profesional|experiencia profissional|career|carreira|background profissional|professional/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${getExperience(copy)} ${getAbout(locale, copy)} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /highlight|featured|destaque|principal|best project|melhor projeto/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${copy.highlightLead} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (
    /work|current|atual|today|hoje|currently|background|sobre|about|perfil|experience|experiencia/.test(
      combinedQuery,
    )
  ) {
    return {
      text: `${getAbout(locale, copy)} ${copy.availability} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  if (/projects|projetos|proyectos|portfolio/.test(combinedQuery)) {
    return {
      text: `${listProjects(locale.projects, copy)} ${copy.highlightLead} ${buildSuggestions(language, copy)}`,
      suggestions: SUGGESTIONS[language],
    };
  }

  return {
    text: `${copy.intro} ${copy.fallback} ${buildSuggestions(language, copy)}`,
    suggestions: SUGGESTIONS[language],
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history)
      ? (body.history as Message[])
      : [];
    const language = getLocale(body.language);

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const response = answerChat(message, history, language);
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
