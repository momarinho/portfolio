"use client";

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GuildHall() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-12 md:py-24 px-4 bg-[#050510] relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b026ff] rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#39ff14] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-press-start text-3xl md:text-4xl text-white mb-6">
          {t.guild.title}
        </h2>
        <p className="font-vt323 text-2xl md:text-3xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.guild.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#11111b] p-8 border-4 border-[#39ff14] shadow-[0_0_20px_rgba(57,255,20,0.2)]">
            <h3 className="font-press-start text-[#39ff14] text-xl mb-6">
              {t.guild.form.sendMessage}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.guild.form.namePlaceholder}
                className="w-full bg-[#050510] border-2 border-gray-600 p-3 text-white font-vt323 text-xl focus:border-[#39ff14] outline-none placeholder-gray-600"
              />
              <input
                type="email"
                placeholder={t.guild.form.emailPlaceholder}
                className="w-full bg-[#050510] border-2 border-gray-600 p-3 text-white font-vt323 text-xl focus:border-[#39ff14] outline-none placeholder-gray-600"
              />
              <textarea
                rows={4}
                placeholder={t.guild.form.messagePlaceholder}
                className="w-full bg-[#050510] border-2 border-gray-600 p-3 text-white font-vt323 text-xl focus:border-[#39ff14] outline-none placeholder-gray-600"
              ></textarea>
              <button className="w-full bg-[#39ff14] text-black font-press-start py-4 hover:bg-[#32cc12] transition-colors">
                {t.guild.form.submit}
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <a
              href="mailto:mateusomarinho@gmail.com"
              className="bg-[#11111b] p-6 border-2 border-gray-700 w-full hover:border-[#b026ff] transition-colors group cursor-pointer text-center block"
            >
              <Mail
                className="mx-auto mb-2 text-gray-400 group-hover:text-[#b026ff]"
                size={32}
              />
              <h4 className="font-press-start text-white mb-1">
                {t.guild.socials.email}
              </h4>
              <p className="font-vt323 text-xl text-gray-500">
                mateusomarinho@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/momarinho94/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#11111b] p-6 border-2 border-gray-700 w-full hover:border-[#00f3ff] transition-colors group cursor-pointer text-center block"
            >
              <Linkedin
                className="mx-auto mb-2 text-gray-400 group-hover:text-[#00f3ff]"
                size={32}
              />
              <h4 className="font-press-start text-white mb-1">
                {t.guild.socials.linkedin}
              </h4>
              <p className="font-vt323 text-xl text-gray-500">
                /in/momarinho94
              </p>
            </a>

            <a
              href="https://github.com/momarinho"
              target="_blank"
              rel="noreferrer"
              className="bg-[#11111b] p-6 border-2 border-gray-700 w-full hover:border-[#ffd700] transition-colors group cursor-pointer text-center block"
            >
              <Github
                className="mx-auto mb-2 text-gray-400 group-hover:text-[#ffd700]"
                size={32}
              />
              <h4 className="font-press-start text-white mb-1">
                {t.guild.socials.github}
              </h4>
              <p className="font-vt323 text-xl text-gray-500">@momarinho</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
