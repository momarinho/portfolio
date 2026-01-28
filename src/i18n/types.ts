export type Language = 'en' | 'pt' | 'es';

export interface Translations {
    common: {
        start: string;
        loading: string;
        enableAudio: string;
        viewQuest: string;
        activeQuests: string;
        rank: string;
        reward: string;
        xp: string;
    };
    nav: {
        status: string;
        skills: string;
        services: string;
        log: string;
        guild: string;
    };
    startScreen: {
        role: string;
        pressStart: string;
    };
    hud: {
        level: string;
        class: string;
        hp: string;
        mp: string;
    };
    character: {
        title: string;
        classLabel: string;
        specialtyLabel: string;
        bioLabel: string;
        bioText1: string;
        bioText2: string;
        currentStatus: string;
        statusValue: string;
        attributesTitle: string;
    };
    skills: {
        title: string;
        core: string;
        support: string;
        frontline: string;
    };
    services: {
        title: string;
        subtitle: string;
        items: {
            leadGen: { title: string; desc: string; reward: string };
            docIntel: { title: string; desc: string; reward: string };
            seo: { title: string; desc: string; reward: string };
        };
    };
    projects: {
        title: string;
        items: {
            leadScraper: { type: string; desc: string; bullets: string[] };
            docAi: { type: string; desc: string; bullets: string[] };
            proposalEngine: { type: string; desc: string; bullets: string[] };
            deepResearch: { type: string; desc: string; bullets: string[] };
            seoAnalyzer: { type: string; desc: string; bullets: string[] };
            fractalRide: { type: string; desc: string; bullets: string[] };
        };
    };
    guild: {
        title: string;
        intro: string;
        form: {
            sendMessage: string;
            namePlaceholder: string;
            emailPlaceholder: string;
            messagePlaceholder: string;
            submit: string;
        };
        socials: {
            email: string;
            linkedin: string;
            github: string;
        };
    };
}
