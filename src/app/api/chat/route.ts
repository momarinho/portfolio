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
      "I can answer about projects, stack, DevOps, contact info, and current work. Try asking about cat_diet_planner or Mateus's current stack.",
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
      "Featured project: cat_diet_planner. It is the most recent active product and shows clear Flutter/cross-platform direction.",
    devops:
      "DevOps angle: deploy and hosting with Vercel, Firebase Hosting, Docker, and production delivery workflows.",
    recruiter:
      "Recruiter summary: strong Flutter/Dart focus, real cross-platform product work, and practical TypeScript/Next.js, Laravel, and Docker experience.",
    client:
      "Client summary: product-minded delivery with Flutter, plus web/backend/ops support when the project needs TypeScript, Next.js, Laravel, or Docker.",
    experience:
      "Current experience spans mobile, web, and production delivery, with emphasis on Flutter/Dart and practical deployment workflows.",
    experienceLead: "Professional profile:",
    fitLead:
      "Best fit for teams that need product thinking, implementation, and production delivery in the same profile.",
    availability:
      "Current positioning: Flutter / Dart with TypeScript, Next.js, Laravel, and Docker.",
    suggestionsLead: "You can also ask:",
  },
  pt: {
    intro: "Posso ajudar com projetos, stack, experiência e contato.",
    fallback:
      "Posso responder sobre projetos, stack, DevOps, contato e trabalho atual. Tente perguntar sobre cat_diet_planner ou sobre a stack atual do Mateus.",
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
      "Projeto em destaque: cat_diet_planner. É o produto ativo mais recente e mostra direção clara em Flutter e cross-platform.",
    devops:
      "Ângulo DevOps: deploy e hosting com Vercel, Firebase Hosting, Docker e rotinas de entrega em produção.",
    recruiter:
      "Resumo para recrutador: foco forte em Flutter/Dart, produto cross-platform real e experiência prática com TypeScript/Next.js, Laravel e Docker.",
    client:
      "Resumo para cliente: entrega orientada a produto com Flutter, mais suporte em web/backend/operação quando o projeto pede TypeScript, Next.js, Laravel ou Docker.",
    experience:
      "A experiência atual cruza mobile, web e entrega em produção, com ênfase em Flutter/Dart e rotinas práticas de deploy.",
    experienceLead: "Perfil profissional:",
    fitLead:
      "Melhor encaixe em times que precisam de visão de produto, implementação e entrega em produção no mesmo perfil.",
    availability:
      "Posicionamento atual: Flutter / Dart com TypeScript, Next.js, Laravel e Docker.",
    suggestionsLead: "Você também pode perguntar:",
  },
  es: {
    intro: "Puedo ayudar con proyectos, stack, experiencia y contacto.",
    fallback:
      "Puedo responder sobre proyectos, stack, DevOps, contacto y trabajo actual. Prueba preguntar por cat_diet_planner o por el stack actual de Mateus.",
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
      "Proyecto destacado: cat_diet_planner. Es el producto activo más reciente y muestra una dirección clara en Flutter y cross-platform.",
    devops:
      "Ángulo DevOps: deploy y hosting con Vercel, Firebase Hosting, Docker y flujos de entrega en producción.",
    recruiter:
      "Resumen para reclutador: foco fuerte en Flutter/Dart, producto cross-platform real y experiencia práctica con TypeScript/Next.js, Laravel y Docker.",
    client:
      "Resumen para cliente: entrega orientada a producto con Flutter, más soporte en web/backend/operación cuando el proyecto necesita TypeScript, Next.js, Laravel o Docker.",
    experience:
      "La experiencia actual cruza mobile, web y entrega en producción, con énfasis en Flutter/Dart y rutinas prácticas de deploy.",
    experienceLead: "Perfil profesional:",
    fitLead:
      "Mejor encaje en equipos que necesitan visión de producto, implementación y entrega en producción en el mismo perfil.",
    availability:
      "Posicionamiento actual: Flutter / Dart con TypeScript, Next.js, Laravel y Docker.",
    suggestionsLead: "También puedes preguntar:",
  },
};

const SUGGESTIONS: Record<Language, string[]> = {
  en: [
    "What is Mateus's current stack?",
    "Tell me about cat_diet_planner",
    "How does Mateus work with DevOps?",
    "How can I contact Mateus?",
    "Why is Mateus a good fit for this role?",
    "What can Mateus build for a client?",
  ],
  pt: [
    "Qual é a stack atual do Mateus?",
    "Me fale do cat_diet_planner",
    "Como o Mateus trabalha com DevOps?",
    "Como posso entrar em contato?",
    "Por que o Mateus é um bom fit para a vaga?",
    "O que o Mateus pode construir para um cliente?",
  ],
  es: [
    "¿Cuál es el stack actual de Mateus?",
    "Cuéntame sobre cat_diet_planner",
    "¿Cómo trabaja Mateus con DevOps?",
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
    "Laravel",
    "Docker",
  ];
  const uniqueStack = Array.from(new Set(stack));
  return `${copy.stack} ${uniqueStack.join(", ")}.`;
}

function getCurrentWork(copy: ChatCopy) {
  return `${copy.currentWork} Flutter/Dart, TypeScript/Next.js, Laravel, Docker, deploy, hosting, and production operations.`;
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
