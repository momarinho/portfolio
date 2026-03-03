import { Translations } from '../types';

export const es: Translations = {
    common: {
        start: 'Comenzar',
        loading: 'Cargando...',
        enableAudio: '(Activa el audio para la mejor experiencia)',
        viewQuest: 'VER PARTE',
        activeQuests: 'MISIONES ACTIVAS',
        rank: 'Rango',
        reward: 'RECOMPENSA',
        xp: 'XP'
    },
    nav: {
        status: 'ESTADO',
        skills: 'HABILIDADES',
        services: 'MISIONES',
        log: 'DIARIO',
        guild: 'GREMIO'
    },
    startScreen: {
        role: 'Desarrollador Flutter & Full-Stack',
        pressStart: 'PULSA START'
    },
    hud: {
        level: 'NIV27',
        class: 'DESARROLLADOR FLUTTER',
        hp: 'PV (Café)',
        mp: 'PE (Estamina)'
    },
    character: {
        title: 'HOJA DE PERSONAJE',
        classLabel: 'CLASE',
        specialtyLabel: 'ESPECIALIDAD',
        bioLabel: 'BIO',
        bioText1: 'Especializado en crear aplicaciones móviles complejas con integraciones nativas, ML y arquitectura escalable. Cubro la brecha entre lógica compleja y sistemas móviles escalables.',
        bioText2: 'Experiencia comprobada en proyectos cross-platform de producción, y en transición del desarrollo full-stack web a la maestría móvil.',
        currentStatus: 'ESTADO ACTUAL',
        statusValue: 'DISPONIBLE PARA TRABAJAR',
        attributesTitle: 'ATRIBUTOS'
    },
    skills: {
        title: 'ARBOL DE HABILIDADES',
        core: 'DISCIPLINA BASICA',
        support: 'APOYO',
        frontline: 'VANGUARDIA'
    },
    services: {
        title: 'MISIONES DISPONIBLES',
        subtitle: 'Servicios y Soluciones Ofrecidos',
        items: {
            mobileDev: {
                title: 'Desarrollo de Apps Móviles',
                desc: 'Aplicaciones cross-platform usando Flutter y Dart.',
                reward: 'Apps de Alto Rendimiento'
            },
            nativeIntel: {
                title: 'Integraciones Nativas y ML',
                desc: 'Implementación de Google ML Kit y APIs nativas en mobile.',
                reward: 'Características Avanzadas'
            },
            architecture: {
                title: 'Arquitectura Escalable',
                desc: 'Clean architecture y gestión de estados con Riverpod.',
                reward: 'Código Sostenible'
            }
        }
    },
    projects: {
        title: 'DIARIO DE MISIONES',
        items: {
            catDietPlanner: {
                type: 'Parte Central – App Móvil Flutter',
                desc: 'Aplicación de planificación nutricional para gatos que permite gestionar dieta, horarios, historial fotográfico y generar informes PDF.',
                bullets: ['Flutter, Riverpod, Hive', 'Google ML Kit (Reconocimiento de IA)', 'Generación PDF, Notificaciones']
            },
            repEngine: {
                type: 'Parte – App Móvil (En Desarrollo)',
                desc: '[Pendiente lanzamiento público] Enfoque en lógicas de negocio complejas y UI reactiva.',
                bullets: ['Flutter', 'Gestión de Estados Avanzada', 'Clean Architecture']
            },
            leadScraper: {
                type: 'Parte Web Legacy – Motor de Generación de Leads',
                desc: 'Motor de scraping con arquitectura DOE. Integración con Google Maps y reintentos inteligentes.',
                bullets: ['Python, DOE, Pydantic', 'Orquestación Robusta', 'Scraping Tolerante']
            },
            docAi: {
                type: 'Parte Web Legacy – Inteligencia Documental',
                desc: 'Pipeline de procesamiento de documentos con extracción usando LLMs.',
                bullets: ['Análisis de PDFs Complejos', 'LLMs, OCR', 'Alta Precisión']
            }
        }
    },
    guild: {
        title: 'SALON DEL GREMIO',
        intro: "Únete al grupo para discutir tu próxima automatización épica.",
        form: {
            sendMessage: 'ENVIAR MENSAJE',
            namePlaceholder: 'NOMBRE JUGADOR',
            emailPlaceholder: 'ENLACE-COM (EMAIL)',
            messagePlaceholder: 'DETALLES DE LA MISION...',
            submit: 'TRANSMITIR'
        },
        socials: {
            email: 'CORREO',
            linkedin: 'LINKEDIN',
            github: 'GITHUB'
        }
    }
};