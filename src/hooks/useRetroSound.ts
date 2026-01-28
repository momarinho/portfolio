"use client";

import { useRef, useEffect } from "react";
import { useSoundContext } from "@/context/SoundContext";

export function useRetroSound() {
    const { isMuted, audioEnabled } = useSoundContext();
    const audioCtxRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        if (audioEnabled && !audioCtxRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioContextClass) {
                audioCtxRef.current = new AudioContextClass();
            }
        }
    }, [audioEnabled]);

    const playOscillator = (
        type: OscillatorType,
        freqStart: number,
        freqEnd: number,
        duration: number,
        vol: number = 0.1
    ) => {
        if (isMuted || !audioEnabled || !audioCtxRef.current) return;

        // Resume context if suspended (common browser policy)
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, ctx.currentTime);
        if (freqEnd !== freqStart) {
            osc.frequency.exponentialRampToValueAtTime(freqEnd, ctx.currentTime + duration);
        }

        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    };

    const playHover = () => {
        // High pitch blip
        playOscillator("square", 400, 400, 0.05, 0.05);
    };

    const playClick = () => {
        // "Select" sound
        playOscillator("square", 220, 880, 0.1, 0.1);
    };

    const playBack = () => {
        // "Cancel/Back" sound
        playOscillator("sawtooth", 150, 50, 0.15, 0.1);
    };

    const playOpen = () => {
        // "Menu Open" sound
        playOscillator("triangle", 300, 600, 0.2, 0.05);
    };

    return { playHover, playClick, playBack, playOpen };
}
