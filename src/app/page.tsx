"use client";

import { useState, useEffect } from "react";
import { SoundProvider } from "@/context/SoundContext";
import { StartScreen } from "@/components/StartScreen";
import { HUD } from "@/components/HUD";
import { Navigation } from "@/components/Navigation";
import { CharacterSheet } from "@/components/CharacterSheet";
import { SkillTree } from "@/components/SkillTree";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { GuildHall } from "@/components/GuildHall";
import { AudioController } from "@/components/AudioController";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // HUD height + Nav height compensation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Optional: Intersection Observer to update activeSection on scroll
  useEffect(() => {
    if (!gameStarted) return;

    const handleScroll = () => {
      const sections = ["about", "skills", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 250; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [gameStarted]);

  return (
    <LanguageProvider>
      <SoundProvider>
        <main className="min-h-screen relative pb-20 selection:bg-[#b026ff] selection:text-white">
          <LanguageSwitcher />
          {!gameStarted && <StartScreen onStart={() => setGameStarted(true)} />}

          {gameStarted && (
            <div className="animate-in fade-in duration-1000">
              {/* CRT Overlay Effect */}
              <div className="fixed inset-0 pointer-events-none z-50 crt-overlay opacity-40"></div>

              <HUD />
              <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

              <div className="relative z-10 space-y-12 md:space-y-0">
                <CharacterSheet />
                <SkillTree />
                <Services />
                <Projects />
                <GuildHall />
              </div>

              <ChatWidget />
              <AudioController />
            </div>
          )}
        </main>
      </SoundProvider>
    </LanguageProvider>
  );
}
