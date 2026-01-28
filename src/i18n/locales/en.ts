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
        xp: "XP"
    },
    nav: {
        status: "STATUS",
        skills: "SKILLS",
        services: "SERVICES",
        log: "LOG",
        guild: "GUILD"
    },
    startScreen: {
        role: "Automation Warrior & AI Developer",
        pressStart: "PRESS START"
    },
    hud: {
        level: "LVL27",
        class: "AUTOMATION WARRIOR",
        hp: "HP (Coffee)",
        mp: "SP (Stamina)"
    },
    character: {
        title: "CHARACTER SHEET",
        classLabel: "CLASS",
        specialtyLabel: "SPECIALTY",
        bioLabel: "BIO",
        bioText1: "Specialized in forging robust automation pipelines and intelligent agents for real-world businesses. I bridge the gap between complex AI logic and scalable production systems.",
        bioText2: "From conquering the hidden depths of the web to commanding autonomous agents, I build systems that fight while you sleep.",
        currentStatus: "CURRENT STATUS",
        statusValue: "OPEN TO WORK",
        attributesTitle: "ATTRIBUTES"
    },
    skills: {
        title: "SKILL TREE",
        core: "CORE DISCIPLINE",
        support: "SUPPORT",
        frontline: "FRONTLINE"
    },
    services: {
        title: "AVAILABLE QUESTS",
        subtitle: "Services & Solutions Offered",
        items: {
            leadGen: {
                title: "Lead Gen Automation",
                desc: "End-to-end engines to scrape, enrich, and qualify leads automatically.",
                reward: "High Quality Leads"
            },
            docIntel: {
                title: "Doc Intelligence",
                desc: "Extract structured data from PDFs/Images using DOE + LLMs.",
                reward: "Automated Data Entry"
            },
            seo: {
                title: "SEO Research Agents",
                desc: "Deep research agents that analyze competitors and keywords.",
                reward: "Market Dominance"
            }
        }
    },
    projects: {
        title: "QUEST LOG",
        items: {
            leadScraper: {
                type: "Core Quest – Lead Generation Engine",
                desc: "Scraping engine with DOE (Directive/Orchestration/Execution) architecture. Google Maps integration and intelligent retries.",
                bullets: ["Robust Orchestration", "Data Enrichment", "Fault-tolerant scraping"]
            },
            docAi: {
                type: "Quest – Document Intelligence",
                desc: "Document processing pipeline with structured data extraction using LLMs and computer vision.",
                bullets: ["Complex PDF Analysis", "Structured JSON Extraction", "High Precision"]
            },
            proposalEngine: {
                type: "Quest – Proposal Engine",
                desc: "Automatic generation of commercial proposals based on research data and document intelligence. (Private Repo)",
                bullets: ["Auto Personalization", "CRM Integration", "Dynamic PDF Generation"]
            },
            deepResearch: {
                type: "Quest – Sales Research Agent",
                desc: "Deep prospect research automation, creating detailed dossiers for sales teams. (Private Repo)",
                bullets: ["Multiple Search Engines", "Executive Summary", "Relevance Score"]
            },
            seoAnalyzer: {
                type: "Quest – SEO Intelligence Suite",
                desc: "Agent-driven SEO analysis to audit sites and suggest content improvements.",
                bullets: ["Technical Audit", "Content Gap", "Automatic Reports"]
            },
            fractalRide: {
                type: "Quest – Frontend Shop Interface",
                desc: "Modern frontend for Fractal Ride e-commerce, focused on UX and prepared for future automations.",
                bullets: ["Responsive UI", "Optimized Performance", "Stripe Integration"]
            }
        }
    },
    guild: {
        title: "GUILD HALL",
        intro: "\"Join the party to discuss your next epic automation.\"",
        form: {
            sendMessage: "SEND MESSAGE",
            namePlaceholder: "PLAYER NAME",
            emailPlaceholder: "COMM-LINK (EMAIL)",
            messagePlaceholder: "QUEST DETAILS...",
            submit: "TRANSMIT"
        },
        socials: {
            email: "EMAIL",
            linkedin: "LINKEDIN",
            github: "GITHUB"
        }
    }
};
