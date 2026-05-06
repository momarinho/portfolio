"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-press-start text-2xl md:text-3xl text-[#00f3ff]">
          {t.experience.title}
        </h2>
        <div className="h-1 bg-gray-700 flex-grow"></div>
      </div>

      <div className="space-y-6">
        {t.experience.items.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="pixel-card bg-[#11111b] border-2 border-gray-700 p-6 hover:border-[#39ff14] transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <p className="font-press-start text-[#ffd700] text-sm md:text-base leading-relaxed">
                  {item.role}
                </p>
                <p className="font-vt323 text-xl text-[#00f3ff] mt-2">
                  {item.company}
                </p>
              </div>
              <span className="font-mono text-xs text-[#39ff14] border border-gray-600 px-3 py-2 shrink-0">
                {item.period}
              </span>
            </div>

            <ul className="space-y-3 font-vt323 text-xl text-gray-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="text-[#b026ff] shrink-0">►</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
