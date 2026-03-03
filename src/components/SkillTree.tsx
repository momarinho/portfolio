"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";

export function SkillTree() {
  const context = useLanguage() as any;
  const t = context.t;
  const language = context.language || "en";
  const currentLang =
    language in portfolioData ? (language as keyof typeof portfolioData) : "en";
  const skillsList = portfolioData[currentLang].skills;

  return (
    <section id="skills" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-press-start text-2xl md:text-3xl text-[#39ff14] inline-block border-b-4 border-[#b026ff] pb-4">
          {t.skills.title}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 relative">
        {/* Connector Lines for Desktop */}
        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-gray-700 z-0"></div>

        {/* Core Magic */}
        <SkillNode
          title={t.skills.core}
          color="text-[#b026ff]"
          skills={skillsList.core}
          icon="🔮"
          delay={0}
        />

        {/* Support */}
        <SkillNode
          title={t.skills.support}
          color="text-[#00f3ff]"
          skills={skillsList.support}
          icon="🛡️"
          delay={0.2}
        />

        {/* Frontline */}
        <SkillNode
          title={t.skills.frontline}
          color="text-[#ffd700]"
          skills={skillsList.frontline}
          icon="⚔️"
          delay={0.4}
        />
      </div>
    </section>
  );
}

function SkillNode({
  title,
  color,
  skills,
  icon,
  delay,
}: {
  title: string;
  color: string;
  skills: string[];
  icon: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-[#11111b] border-2 border-gray-600 p-6 w-full md:w-80 relative z-10 hover:border-[#b026ff] transition-colors"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050510] border-2 border-gray-600 p-2 rounded-full z-20">
        <span className="text-2xl">{icon}</span>
      </div>

      <h3 className={`font-press-start text-center mt-6 mb-6 ${color} text-lg`}>
        {title}
      </h3>

      <ul className="space-y-3 font-vt323 text-xl">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 group">
            <span className="opacity-50 group-hover:opacity-100 group-hover:text-[#39ff14] transition-all">
              ►
            </span>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
