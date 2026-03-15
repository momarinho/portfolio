"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function CharacterSheet() {
  const { t } = useLanguage();

  const stats = [
    { label: "Flutter", val: 83 },
    { label: "Dart", val: 81 },
    { label: "TypeScript", val: 78 },
    { label: "Next.js", val: 74 },
    { label: "Laravel", val: 70 },
    { label: "Docker / DevOps", val: 72 },
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-4 max-w-5xl mx-auto">
      <div className="pixel-card bg-[#11111b] p-6 md:p-10 text-[#e0e0e0]">
        <h2 className="font-press-start text-2xl md:text-3xl text-[#ffd700] mb-8 text-center border-b-4 border-[#39ff14] pb-4 inline-block">
          {t.character.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Bio */}
          <div className="font-vt323 text-xl md:text-2xl space-y-6">
            <div className="bg-[#050510] p-4 border border-gray-700">
              <p className="text-[#39ff14] mb-2">
                {">"} {t.character.classLabel}: {t.hud.class}
              </p>
              <p className="text-[#00f3ff] mb-2">
                {">"} {t.character.specialtyLabel}: Flutter, Dart, TypeScript,
                Next.js, Laravel, Docker
              </p>
              <p className="text-gray-400">
                {">"} {t.character.bioLabel}:
              </p>
              <p className="mt-2 text-white leading-relaxed">
                {t.character.bioText1}
              </p>
              <p className="mt-4 text-white leading-relaxed">
                {t.character.bioText2}
              </p>
            </div>

            <div className="bg-[#050510] p-4 border border-gray-700">
              <span className="text-yellow-400">
                {t.character.currentStatus}:
              </span>{" "}
              {t.character.statusValue}
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="space-y-4 font-vt323 text-xl">
            <h3 className="text-[#b026ff] text-2xl mb-4 text-center decoration-wavy underline">
              {t.character.attributesTitle}
            </h3>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-1">
                  <span>{stat.label}</span>
                  <span>{stat.val}/100</span>
                </div>
                <div className="h-4 bg-gray-800 border border-gray-600">
                  <div
                    className="h-full bg-gradient-to-r from-[#b026ff] to-[#00f3ff]"
                    style={{ width: `${stat.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
