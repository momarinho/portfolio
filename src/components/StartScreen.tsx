"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundContext } from "@/context/SoundContext";
import { useRetroSound } from "@/hooks/useRetroSound";
import { useLanguage } from "@/context/LanguageContext";

export function StartScreen({ onStart }: { onStart: () => void }) {
    const { enableAudio } = useSoundContext();
    const { playClick } = useRetroSound();
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(true);

    const handleStart = () => {
        enableAudio();
        // Manual oscillator for immediate feedback
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
            const audioCtx = new AudioContextClass();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.1);
        }

        setIsVisible(false);
        setTimeout(onStart, 1000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-8 p-4"
                    >
                        <h1 className="font-press-start text-3xl md:text-5xl text-col-neon-purple text-[#b026ff] animate-pulse">
                            MATEUS MARINHO
                        </h1>
                        <p className="font-vt323 text-2xl md:text-3xl text-gray-400">
                            {t.startScreen.role}
                        </p>

                        <div className="mt-12">
                            <button
                                onClick={handleStart}
                                className="group relative px-8 py-4 bg-transparent border-4 border-white text-white font-press-start text-sm md:text-xl hover:bg-white hover:text-black transition-colors duration-200"
                            >
                                <span className="absolute -inset-2 border-2 border-[#b026ff] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                                {t.startScreen.pressStart}
                            </button>
                        </div>

                        <p className="mt-8 text-xs text-gray-600 font-vt323 uppercase">
                            {t.common.enableAudio}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
