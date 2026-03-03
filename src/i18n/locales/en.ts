import { Translations } from '../types';

export const en: Translations = {
    common: {
        start: 'Start',
        loading: 'Loading...',
        enableAudio: '(Enable Audio for Best Experience)',
        viewQuest: 'VIEW QUEST',
        activeQuests: 'ACTIVE QUESTS',
        rank: 'Rank',
        reward: 'REWARD',
        xp: 'XP'
    },
    nav: {
        status: 'STATUS',
        skills: 'SKILLS',
        services: 'SERVICES',
        log: 'LOG',
        guild: 'GUILD'
    },
    startScreen: {
        role: 'Flutter & Full-Stack Developer',
        pressStart: 'PRESS START'
    },
    hud: {
        level: 'LVL27',
        class: 'FLUTTER DEVELOPER',
        hp: 'HP (Coffee)',
        mp: 'SP (Stamina)'
    },
    character: {
        title: 'CHARACTER SHEET',
        classLabel: 'CLASS',
        specialtyLabel: 'SPECIALTY',
        bioLabel: 'BIO',
        bioText1: 'Specialized in creating complex mobile applications with native integrations, ML, and scalable architecture. I bridge the gap between complex logic and scalable mobile systems.',
        bioText2: 'Experienced in cross-platform production projects and transitioning from full-stack web development to mobile mastery.',
        currentStatus: 'CURRENT STATUS',
        statusValue: 'OPEN TO WORK',
        attributesTitle: 'ATTRIBUTES'
    },
    skills: {
        title: 'SKILL TREE',
        core: 'CORE DISCIPLINE',
        support: 'SUPPORT',
        frontline: 'FRONTLINE'
    },
    services: {
        title: 'AVAILABLE QUESTS',
        subtitle: 'Services & Solutions Offered',
        items: {
            mobileDev: {
                title: 'Mobile App Development',
                desc: 'Cross-platform applications using Flutter and Dart.',
                reward: 'High Performance Apps'
            },
            nativeIntel: {
                title: 'Native Integrations & ML',
                desc: 'Implementing Google ML Kit and hardware APIs within mobile.',
                reward: 'Advanced Features'
            },
            architecture: {
                title: 'Scalable Architecture',
                desc: 'Clean architecture, Riverpod state management.',
                reward: 'Maintainable Code'
            }
        }
    },
    projects: {
        title: 'QUEST LOG',
        items: {
            catDietPlanner: {
                type: 'Core Quest – Mobile App Flutter',
                desc: 'Nutritional planning app for cats allowing tutors to manage diet, feeding schedules, photo history, and generate vet reports.',
                bullets: ['Flutter, Riverpod, Hive', 'Google ML Kit (Image Recognition)', 'PDF Generation, Notifications']
            },
            repEngine: {
                type: 'Quest – Mobile App (In Development)',
                desc: '[Pending public release] Focus on complex business logics and reactive UI.',
                bullets: ['Flutter', 'Advanced State Management', 'Clean Architecture']
            },
            leadScraper: {
                type: 'Legacy Web Quest – Lead Gen Engine',
                desc: 'Scraping engine with DOE architecture. Google Maps integration and intelligent retries.',
                bullets: ['Python, DOE, Pydantic', 'Robust Orchestration', 'Fault-tolerant']
            },
            docAi: {
                type: 'Legacy Web Quest – Doc Intelligence',
                desc: 'Document processing pipeline with structured data extraction using LLMs.',
                bullets: ['Complex PDF Analysis', 'LLMs, OCR', 'High Precision']
            }
        }
    },
    guild: {
        title: 'GUILD HALL',
        intro: "Join the party to discuss your next epic automation.",
        form: {
            sendMessage: 'SEND MESSAGE',
            namePlaceholder: 'PLAYER NAME',
            emailPlaceholder: 'COMM-LINK (EMAIL)',
            messagePlaceholder: 'QUEST DETAILS...',
            submit: 'TRANSMIT'
        },
        socials: {
            email: 'EMAIL',
            linkedin: 'LINKEDIN',
            github: 'GITHUB'
        }
    }
};