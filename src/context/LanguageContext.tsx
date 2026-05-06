"use client";

import React, { createContext, useContext, useState } from "react";
import { Translations, Language } from "../i18n/types";
import { en } from "../i18n/locales/en";
import { pt } from "../i18n/locales/pt";
import { es } from "../i18n/locales/es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries: Record<Language, Translations> = {
    en,
    pt,
    es,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") return "pt";
        const savedLang = localStorage.getItem("rpg-portfolio-lang") as Language;
        return savedLang && dictionaries[savedLang] ? savedLang : "pt";
    });

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("rpg-portfolio-lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
