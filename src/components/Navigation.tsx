"use client";

import React from "react";
import { useRetroSound } from "@/hooks/useRetroSound";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
    const { playHover, playClick } = useRetroSound();
    const { t } = useLanguage();

    const navItems = [
        { id: "about", label: t.nav.status },
        { id: "skills", label: t.nav.skills },
        { id: "services", label: t.nav.services },
        { id: "projects", label: t.nav.log },
        { id: "contact", label: t.nav.guild },
    ];

    return (
        <nav className="w-full bg-[#11111b] border-b-2 border-gray-700 sticky top-[84px] md:top-[88px] z-20 overflow-x-auto no-scrollbar">
            <ul className="flex justify-center min-w-max p-2 md:p-0">
                {navItems.map((item) => (
                    <li key={item.id} className="mx-1 md:mx-4">
                        <button
                            onMouseEnter={playHover}
                            onClick={() => {
                                playClick();
                                onNavigate(item.id);
                            }}
                            className={`
                px-4 py-2 font-vt323 text-lg md:text-2xl transition-all duration-100 border-2
                ${activeSection === item.id
                                    ? "bg-[#b026ff] text-white border-white shadow-[0_0_10px_#b026ff]"
                                    : "bg-transparent text-gray-400 border-transparent hover:border-gray-500 hover:text-white"
                                }
              `}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
