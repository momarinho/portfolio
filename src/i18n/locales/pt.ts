import { Translations } from '../types';

export const pt: Translations = {
    common: {
        start: 'Iniciar',
        loading: 'Carregando...',
        enableAudio: '(Ative o áudio para melhor experiência)',
        viewQuest: 'VER QUEST',
        activeQuests: 'QUESTS ATIVAS',
        rank: 'Rank',
        reward: 'RECOMPENSA',
        xp: 'XP'
    },
    nav: {
        status: 'STATUS',
        skills: 'SKILLS',
        services: 'MISSOES',
        log: 'DIARIO',
        guild: 'GUILDA'
    },
    startScreen: {
        role: 'Desenvolvedor Flutter & Full-Stack',
        pressStart: 'PRESS START'
    },
    hud: {
        level: 'NIV27',
        class: 'DESENVOLVEDOR FLUTTER',
        hp: 'HP (Café)',
        mp: 'SP (Estamina)'
    },
    character: {
        title: 'FICHA DE PERSONAGEM',
        classLabel: 'CLASSE',
        specialtyLabel: 'ESPECIALIDADE',
        bioLabel: 'BIO',
        bioText1: 'Especializado em criar aplicações mobile complexas com integrações nativas, ML e arquitetura escalável. Eu crio a ponte entre lógica complexa e sistemas mobile escaláveis.',
        bioText2: 'Experiência comprovada em projetos cross-platform de produção, em transição de desenvolvimento full-stack web para maestria mobile.',
        currentStatus: 'STATUS ATUAL',
        statusValue: 'DISPONÍVEL PARA TRABALHO',
        attributesTitle: 'ATRIBUTOS'
    },
    skills: {
        title: 'ARVORE DE HABILIDADES',
        core: 'DISCIPLINA CENTRAL',
        support: 'SUPORTE',
        frontline: 'LINHA DE FRENTE'
    },
    services: {
        title: 'QUESTS DISPONIVEIS',
        subtitle: 'Serviços e Soluções Oferecidos',
        items: {
            mobileDev: {
                title: 'Desenvolvimento Mobile',
                desc: 'Aplicações cross-platform usando Flutter e Dart.',
                reward: 'Apps de Alta Performance'
            },
            nativeIntel: {
                title: 'Integrações Nativas & ML',
                desc: 'Implementação de Google ML Kit e APIs nativas no mobile.',
                reward: 'Funcionalidades Avançadas'
            },
            architecture: {
                title: 'Arquitetura Escalável',
                desc: 'Clean architecture, gerenciamento de estado Riverpod.',
                reward: 'Código Sustentável'
            }
        }
    },
    projects: {
        title: 'DIARIO DE QUESTS',
        items: {
            catDietPlanner: {
                type: 'Quest Central – App Mobile Flutter',
                desc: 'Aplicativo de planejamento nutricional para gatos que permite gerenciar dieta, horários, histórico fotográfico e gerar relatórios em PDF.',
                bullets: ['Flutter, Riverpod, Hive', 'Google ML Kit (Reconhecimento)', 'Geração PDF, Notificações']
            },
            repEngine: {
                type: 'Quest – App Mobile (Em Desenvolvimento)',
                desc: '[Pendente lançamento público] Foco em lógicas de negócio complexas e UI reativa.',
                bullets: ['Flutter', 'Gerenciamento de Estado Avançado', 'Clean Architecture']
            },
            leadScraper: {
                type: 'Quest Web Legacy – Motor de Lead Generation',
                desc: 'Motor de scraping com arquitetura DOE. Integração Google Maps e retries inteligentes.',
                bullets: ['Python, DOE, Pydantic', 'Orquestração Robusta', 'Scraping Tolerante']
            },
            docAi: {
                type: 'Quest Web Legacy – Inteligência Documental',
                desc: 'Pipeline de processamento de documentos com extração usando LLMs.',
                bullets: ['Análise de PDFs Complexos', 'LLMs, OCR', 'Alta Precisão']
            }
        }
    },
    guild: {
        title: 'GUILDA',
        intro: "Junte-se ao grupo para discutir sua próxima automação épica.",
        form: {
            sendMessage: 'ENVIAR MENSAGEM',
            namePlaceholder: 'NOME DO PLAYER',
            emailPlaceholder: 'COMM-LINK (EMAIL)',
            messagePlaceholder: 'DETALHES DA QUEST...',
            submit: 'TRANSMITIR'
        },
        socials: {
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            github: 'GITHUB'
        }
    }
};