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
        xp: "XP"
    },
    nav: {
        status: "ESTADO",
        skills: "HABILIDADES",
        services: "MISIONES",
        log: "DIARIO",
        guild: "GREMIO"
    },
    startScreen: {
        role: "Guerrero de Automatización y Desarrollador IA",
        pressStart: "PULSA START"
    },
    hud: {
        level: "NIV27",
        class: "GUERRERO AUTOMATIZACION",
        hp: "PV (Café)",
        mp: "PE (Estamina)"
    },
    character: {
        title: "HOJA DE PERSONAJE",
        classLabel: "CLASE",
        specialtyLabel: "ESPECIALIDAD",
        bioLabel: "BIO",
        bioText1: "Especializado en forjar pipelines de automatización robustos y agentes inteligentes para negocios reales. Cubro la brecha entre lógica de IA compleja y sistemas de producción escalables.",
        bioText2: "Desde conquistar las profundidades ocultas de la web hasta comandar agentes autónomos, construyo sistemas que luchan mientras duermes.",
        currentStatus: "ESTADO ACTUAL",
        statusValue: "DISPONIBLE PARA TRABAJAR",
        attributesTitle: "ATRIBUTOS"
    },
    skills: {
        title: "ARBOL DE HABILIDADES",
        core: "DISCIPLINA BASICA",
        support: "APOYO",
        frontline: "VANGUARDIA"
    },
    services: {
        title: "MISIONES DISPONIBLES",
        subtitle: "Servicios y Soluciones Ofrecidos",
        items: {
            leadGen: {
                title: "Automatización Lead Gen",
                desc: "Motores de extremo a extremo para raspar, enriquecer y calificar leads automáticamente.",
                reward: "Leads de Alta Calidad"
            },
            docIntel: {
                title: "Inteligencia Documental",
                desc: "Extracción de datos estructurados de PDFs/Imágenes usando DOE + LLMs.",
                reward: "Entrada de Datos Automatizada"
            },
            seo: {
                title: "Agentes de Investigación SEO",
                desc: "Agentes de investigación profunda que analizan competidores y palabras clave.",
                reward: "Dominio de Mercado"
            }
        }
    },
    projects: {
        title: "DIARIO DE MISIONES",
        items: {
            leadScraper: {
                type: "Parte Central – Motor de Generación de Leads",
                desc: "Motor de scraping con arquitectura DOE (Directiva/Orquestación/Ejecución). Integración con Google Maps y reintentos inteligentes.",
                bullets: ["Orquestación Robusta", "Enriquecimiento de Datos", "Scraping tolerante a fallos"]
            },
            docAi: {
                type: "Parte – Inteligencia Documental",
                desc: "Pipeline de procesamiento de documentos con extracción estructurada de datos usando LLMs y visión por computadora.",
                bullets: ["Análisis de PDFs Complejos", "Extracción JSON Estructurada", "Alta Precisión"]
            },
            proposalEngine: {
                type: "Parte – Motor de Propuestas",
                desc: "Generación automática de propuestas comerciales basadas en datos de investigación e inteligencia documental. (Repo Privado)",
                bullets: ["Personalización Automática", "Integración CRM", "Generación Dinámica de PDF"]
            },
            deepResearch: {
                type: "Parte – Agente de Investigación de Ventas",
                desc: "Automatización de investigación profunda de prospectos, creando expedientes detallados para equipos de ventas. (Repo Privado)",
                bullets: ["Buscadores Múltiplos", "Resumen Ejecutivo", "Puntuación de Relevancia"]
            },
            seoAnalyzer: {
                type: "Parte – Suite de Inteligencia SEO",
                desc: "Análisis SEO guiado por agentes para auditar sitios y sugerir mejoras de contenido.",
                bullets: ["Auditoría Técnica", "Brecha de Contenido", "Informes Automáticos"]
            },
            fractalRide: {
                type: "Parte – Interfaz de Tienda Frontend",
                desc: "Frontend moderno para e-commerce Fractal Ride, enfocado en UX y preparado para futuras automatizaciones.",
                bullets: ["UI Responsiva", "Rendimiento Optimizado", "Integración Stripe"]
            }
        }
    },
    guild: {
        title: "SALON DEL GREMIO",
        intro: "\"Únete al grupo para discutir tu próxima automatización épica.\"",
        form: {
            sendMessage: "ENVIAR MENSAJE",
            namePlaceholder: "NOMBRE JUGADOR",
            emailPlaceholder: "ENLACE-COM (EMAIL)",
            messagePlaceholder: "DETALLES DE LA MISION...",
            submit: "TRANSMITIR"
        },
        socials: {
            email: "CORREO",
            linkedin: "LINKEDIN",
            github: "GITHUB"
        }
    }
};
