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
        xp: "XP"
    },
    nav: {
        status: "STATUS",
        skills: "SKILLS",
        services: "MISSOES",
        log: "DIARIO",
        guild: "GUILDA"
    },
    startScreen: {
        role: "Guerreiro da Automação & Desenvolvedor IA",
        pressStart: "PRESS START"
    },
    hud: {
        level: "NIV27",
        class: "GUERREIRO DA AUTOMACAO",
        hp: "HP (Café)",
        mp: "SP (Estamina)"
    },
    character: {
        title: "FICHA DE PERSONAGEM",
        classLabel: "CLASSE",
        specialtyLabel: "ESPECIALIDADE",
        bioLabel: "BIO",
        bioText1: "Especializado em forjar pipelines de automação robustos e agentes inteligentes para negócios reais. Eu cubro a lacuna entre lógica de IA complexa e sistemas de produção escaláveis.",
        bioText2: "Desde conquistar as profundezas ocultas da web até comandar agentes autônomos, construo sistemas que lutam enquanto você dorme.",
        currentStatus: "STATUS ATUAL",
        statusValue: "DISPONÍVEL PARA TRABALHO",
        attributesTitle: "ATRIBUTOS"
    },
    skills: {
        title: "ARVORE DE HABILIDADES",
        core: "DISCIPLINA CENTRAL",
        support: "SUPORTE",
        frontline: "LINHA DE FRENTE"
    },
    services: {
        title: "QUESTS DISPONIVEIS",
        subtitle: "Serviços e Soluções Oferecidos",
        items: {
            leadGen: {
                title: "Automação de Lead Gen",
                desc: "Motores de ponta a ponta para raspar, enriquecer e qualificar leads automaticamente.",
                reward: "Leads de Alta Qualidade"
            },
            docIntel: {
                title: "Inteligência Documental",
                desc: "Extração de dados estruturados de PDFs/Imagens usando DOE + LLMs.",
                reward: "Entrada de Dados Automatizada"
            },
            seo: {
                title: "Agentes de Pesquisa SEO",
                desc: "Agentes de pesquisa profunda que analisam concorrentes e palavras-chave.",
                reward: "Domínio de Mercado"
            }
        }
    },
    projects: {
        title: "DIARIO DE QUESTS",
        items: {
            leadScraper: {
                type: "Quest Central – Motor de Lead Generation",
                desc: "Motor de scraping com arquitetura DOE (Diretiva/Orquestração/Execução). Integração Google Maps e retries inteligentes.",
                bullets: ["Orquestração Robusta", "Enriquecimento de Dados", "Scraping tolerante a falhas"]
            },
            docAi: {
                type: "Quest – Inteligência Documental",
                desc: "Pipeline de processamento de documentos com extração de dados estruturada usando LLMs e visão computacional.",
                bullets: ["Análise de PDFs Complexos", "Extração JSON Estruturada", "Alta Precisão"]
            },
            proposalEngine: {
                type: "Quest – Motor de Propostas",
                desc: "Geração automática de propostas comerciais baseadas em dados de pesquisa e inteligência documental. (Repo Privado)",
                bullets: ["Personalização Automática", "Integração CRM", "Geração Dinâmica de PDF"]
            },
            deepResearch: {
                type: "Quest – Agente de Pesquisa de Vendas",
                desc: "Automação de pesquisa profunda de prospects, criando dossiês detalhados para equipes de vendas. (Repo Privado)",
                bullets: ["Múltiplos Buscadores", "Resumo Executivo", "Score de Relevância"]
            },
            seoAnalyzer: {
                type: "Quest – Suite de Inteligência SEO",
                desc: "Análise de SEO guiada por agentes para auditar sites e sugerir melhorias de conteúdo.",
                bullets: ["Auditoria Técnica", "Lacuna de Conteúdo", "Relatórios Automáticos"]
            },
            fractalRide: {
                type: "Quest – Interface de Loja Frontend",
                desc: "Frontend moderno para e-commerce Fractal Ride, focado em UX e preparado para automações futuras.",
                bullets: ["UI Responsiva", "Performance Otimizada", "Integração Stripe"]
            }
        }
    },
    guild: {
        title: "GUILDA",
        intro: "\"Junte-se ao grupo para discutir sua próxima automação épica.\"",
        form: {
            sendMessage: "ENVIAR MENSAGEM",
            namePlaceholder: "NOME DO PLAYER",
            emailPlaceholder: "COMM-LINK (EMAIL)",
            messagePlaceholder: "DETALHES DA QUEST...",
            submit: "TRANSMITIR"
        },
        socials: {
            email: "EMAIL",
            linkedin: "LINKEDIN",
            github: "GITHUB"
        }
    }
};
