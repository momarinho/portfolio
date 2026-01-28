"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundContext } from "@/context/SoundContext";
import { useRetroSound } from "@/hooks/useRetroSound";

export function AudioController() {
    const { isMuted, toggleMute, audioEnabled } = useSoundContext();
    const { playClick } = useRetroSound();

    if (!audioEnabled) return null; // Don't show until game started

    const handleClick = () => {
        toggleMute();
        if (isMuted) {
            // If we are unmuting, try to play a test sound
            playClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 right-4 z-40 w-12 h-12 flex items-center justify-center border-2 border-[#b026ff] bg-black hover:bg-[#1a1a2e] text-[#b026ff] transition-colors pixel-border"
            title={isMuted ? "Enable Sound" : "Mute Sound"}
        >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
    );
}
