"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useRetroSound } from "@/hooks/useRetroSound";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const { playClick, playHover } = useRetroSound();

    const handleLangChange = (lang: "en" | "pt" | "es") => {
        playClick();
        setLanguage(lang);
    };

    return (
        <div className="fixed top-20 md:top-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {(["pt", "en", "es"] as const).map((lang) => (
                <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    onMouseEnter={playHover}
                    className={`
            font-press-start text-xs px-2 py-1 border-2 transition-all
            ${language === lang
                            ? "bg-[#39ff14] text-black border-[#39ff14]"
                            : "bg-black text-gray-500 border-gray-700 hover:border-white hover:text-white"
                        }
          `}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
