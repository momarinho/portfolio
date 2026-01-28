"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    audioEnabled: boolean;
    enableAudio: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [isMuted, setIsMuted] = useState(true); // Default muted until interaction
    const [audioEnabled, setAudioEnabled] = useState(false);

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    const enableAudio = () => {
        setAudioEnabled(true);
        setIsMuted(false);
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, audioEnabled, enableAudio }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSoundContext() {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error("useSoundContext must be used within a SoundProvider");
    }
    return context;
}
