"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { useRetroSound } from "@/hooks/useRetroSound";
import { useLanguage } from "@/context/LanguageContext";

export function ChatWidget() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { playClick, playOpen } = useRetroSound();

    // Reset messages when language changes
    useEffect(() => {
        const greetings = {
            en: 'Greetings! I am the Portfolio Assistant. Ask me about skills, projects, or contact info.',
            pt: 'Saudações! Sou o Assistente de Portfólio. Pergunte sobre habilidades, projetos ou contato.',
            es: '¡Saludos! Soy el Asistente de Portafolio. Pregunta sobre habilidades, proyectos o contacto.'
        };
        setMessages([{ role: 'bot', text: greetings[language] }]);
    }, [language]);

    const toggleChat = () => {
        if (!isOpen) playOpen();
        else playClick();
        setIsOpen(!isOpen);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);
        playClick();

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, language })
            });

            const data = await res.json();
            const botText = data.text || "Error: Failed to fetch response.";

            setMessages(prev => [...prev, { role: 'bot', text: botText }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: 'bot', text: "Connection Error. The mainframe is unresponsive." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <div className="fixed bottom-4 right-16 z-50 flex items-center justify-center">
                <button
                    onClick={toggleChat}
                    className={`w-12 h-12 flex items-center justify-center border-2 border-[#39ff14] bg-black text-[#39ff14] hover:bg-[#11111b] transition-all pixel-border ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <MessageSquare size={20} />
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 md:right-16 w-80 md:w-96 h-96 z-50 flex flex-col bg-[#050510] border-4 border-[#39ff14] shadow-[0_0_20px_rgba(57,255,20,0.3)] animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-[#39ff14] text-black p-2 flex justify-between items-center font-press-start text-xs">
                        <span>AI_ASSISTANT_V1</span>
                        <button onClick={toggleChat} className="hover:text-white"><X size={16} /></button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-vt323 custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-2 border-2 ${msg.role === 'user' ? 'border-[#b026ff] text-[#b026ff]' : 'border-gray-500 text-gray-300'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && <div className="text-[#39ff14] animate-pulse">Processing...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-2 border-t-2 border-gray-700 bg-[#11111b] flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter query..."
                            className="flex-1 bg-black border border-gray-600 text-[#39ff14] font-vt323 p-1 outline-none focus:border-[#39ff14]"
                        />
                        <button type="submit" disabled={isLoading} className="text-[#39ff14] hover:text-white disabled:opacity-50">
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #39ff14; }
      `}</style>
        </>
    );
}
