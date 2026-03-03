"use client";

import React from "react";
import { Github } from "lucide-react";
import { useRetroSound } from "@/hooks/useRetroSound";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { playClick } = useRetroSound();
  const { t } = useLanguage();

  const projectsData = [
    {
      id: "cat_diet_planner",
      stack: "Flutter, Riverpod, ML Kit, Hive",
      link: "https://github.com/momarinho/cat_diet_planner",
      translation: t.projects.items.catDietPlanner,
    },
    {
      id: "RepEngine",
      stack: "Flutter, Clean Architecture",
      link: "#",
      translation: t.projects.items.repEngine,
    },
    {
      id: "lead-scraper-doe",
      stack: "Python, DOE, Pydantic, Maps API",
      link: "https://github.com/momarinho/lead-scraper-doe",
      translation: t.projects.items.leadScraper,
    },
    {
      id: "doc_ai_doe",
      stack: "Python, LLMs, OCR",
      link: "https://github.com/momarinho/doc_ai_doe",
      translation: t.projects.items.docAi,
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-press-start text-2xl md:text-3xl text-[#ffd700]">
          {t.projects.title}
        </h2>
        <div className="h-1 bg-gray-700 flex-grow"></div>
        <span className="font-vt323 text-xl text-gray-500">
          {projectsData.length} {t.common.activeQuests}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="pixel-card bg-[#1a1a2e] p-6 group hover:bg-[#20203a] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-[#b026ff] uppercase tracking-wider block mb-1">
                  {project.translation.type}
                </span>
                <h3 className="font-press-start text-white text-lg md:text-xl line-clamp-1">
                  {project.id}
                </h3>
              </div>
              <div className="bg-[#b026ff] text-black text-xs px-2 py-1 font-bold shrink-0 ml-2">
                {t.common.xp} +500
              </div>
            </div>

            <p className="font-vt323 text-xl text-gray-300 mb-6 min-h-[3rem]">
              {project.translation.desc}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.translation.bullets.map((bullet, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 border border-gray-600"
                  >
                    {bullet}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-[#39ff14] text-sm font-mono max-w-[60%] truncate">
                  [{project.stack.split(",")[0]}...]
                </span>
                <a
                  href={project.link}
                  target={project.link === "#" ? "_self" : "_blank"}
                  rel={project.link === "#" ? "" : "noreferrer"}
                  onClick={playClick}
                  className="flex items-center gap-2 text-white hover:text-[#ffd700] transition-colors font-press-start text-xs shrink-0"
                >
                  <Github size={16} />
                  {t.common.viewQuest}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
