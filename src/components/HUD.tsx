"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HUD() {
    const { t } = useLanguage();

    return (
        <div className="w-full bg-[#050510] border-b-4 border-b-[#b026ff] p-4 flex flex-col md:flex-row justify-between items-center font-vt323 text-xl sticky top-0 z-30 shadow-[0_0_15px_rgba(176,38,255,0.5)]">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 border-2 border-white overflow-hidden relative group">
                    <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="text-[#ffd700] text-2xl leading-none font-press-start tracking-tighter">MATEUS</h2>
                    <p className="text-[#39ff14] text-sm md:text-base tracking-widest mt-1">
                        {t.hud.level} {t.hud.class}
                    </p>
                </div>
            </div>

            <div className="flex gap-6 mt-2 md:mt-0 text-[#e0e0e0]">
                <div className="flex flex-col items-end">
                    <span className="text-xs mb-1 text-red-400 font-bold">{t.hud.hp}</span>
                    <div className="w-24 md:w-32 h-4 bg-[#11111b] border-2 border-[#555] relative">
                        <div className="absolute top-0 left-0 h-full bg-red-600 w-[85%] shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs mb-1 text-blue-400 font-bold">{t.hud.mp}</span>
                    <div className="w-24 md:w-32 h-4 bg-[#11111b] border-2 border-[#555] relative">
                        <div className="absolute top-0 left-0 h-full bg-blue-500 w-[100%] shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
