"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useRetroSound } from "@/hooks/useRetroSound";
import { useLanguage } from "@/context/LanguageContext";

type Role = "user" | "bot";
type ChatMessage = { role: Role; text: string };
type ChatResponse = { text?: string; suggestions?: string[]; error?: string };

const CHAT_STORAGE_KEY = "portfolio-chat-history";

const UI_COPY = {
  en: {
    greeting:
      "Greetings. I am the Portfolio Assistant. Ask about projects, stack, DevOps, or contact info.",
    title: "AI_ASSISTANT_V2",
    loading: "Reviewing portfolio data...",
    placeholder: "Ask about projects or stack...",
    empty:
      "Ask direct questions about projects, current stack, DevOps, or contact details.",
    reset: "Reset",
    quickPrompts: "Quick prompts",
    showPrompts: "Show prompts",
    hidePrompts: "Hide prompts",
  },
  pt: {
    greeting:
      "Saudações. Sou o Assistente do Portfólio. Pergunte sobre projetos, stack, DevOps ou contato.",
    title: "AI_ASSISTANT_V2",
    loading: "Consultando dados do portfólio...",
    placeholder: "Pergunte sobre projetos ou stack...",
    empty:
      "Faça perguntas diretas sobre projetos, stack atual, DevOps ou contato.",
    reset: "Limpar",
    quickPrompts: "Perguntas rápidas",
    showPrompts: "Mostrar prompts",
    hidePrompts: "Ocultar prompts",
  },
  es: {
    greeting:
      "Saludos. Soy el Asistente del Portafolio. Pregunta sobre proyectos, stack, DevOps o contacto.",
    title: "AI_ASSISTANT_V2",
    loading: "Consultando datos del portafolio...",
    placeholder: "Pregunta por proyectos o stack...",
    empty:
      "Haz preguntas directas sobre proyectos, stack actual, DevOps o contacto.",
    reset: "Limpiar",
    quickPrompts: "Preguntas rápidas",
    showPrompts: "Mostrar prompts",
    hidePrompts: "Ocultar prompts",
  },
} as const;

const DEFAULT_SUGGESTIONS = {
  en: [
    "What is Mateus's current stack?",
    "Tell me about cat_diet_planner",
    "How does Mateus work with DevOps?",
    "How can I contact Mateus?",
    "Why is Mateus a good fit for this role?",
    "What can Mateus build for a client?",
  ],
  pt: [
    "Qual é a stack atual do Mateus?",
    "Me fale do cat_diet_planner",
    "Como o Mateus trabalha com DevOps?",
    "Como posso entrar em contato?",
    "Por que o Mateus é um bom fit para a vaga?",
    "O que o Mateus pode construir para um cliente?",
  ],
  es: [
    "¿Cuál es el stack actual de Mateus?",
    "Cuéntame sobre cat_diet_planner",
    "¿Cómo trabaja Mateus con DevOps?",
    "¿Cómo puedo contactarlo?",
    "¿Por qué Mateus encaja bien en este rol?",
    "¿Qué puede construir Mateus para un cliente?",
  ],
} as const;

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="text-[#39ff14] underline break-all"
        >
          {part}
        </a>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}

export function ChatWidget() {
  const { language } = useLanguage();
  const copy = UI_COPY[language];
  const defaultSuggestions = DEFAULT_SUGGESTIONS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    ...defaultSuggestions,
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { playClick, playOpen } = useRetroSound();

  const greetingMessage = useMemo<ChatMessage>(
    () => ({ role: "bot", text: copy.greeting }),
    [copy.greeting],
  );

  useEffect(() => {
    const storedHistory = localStorage.getItem(
      `${CHAT_STORAGE_KEY}-${language}`,
    );
    const parsedHistory = storedHistory
      ? (JSON.parse(storedHistory) as ChatMessage[])
      : [];

    if (parsedHistory.length > 0) {
      setMessages(parsedHistory);
    } else {
      setMessages([greetingMessage]);
    }

    setSuggestions([...defaultSuggestions]);
    setShowSuggestions(true);
  }, [defaultSuggestions, greetingMessage, language]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        `${CHAT_STORAGE_KEY}-${language}`,
        JSON.stringify(messages),
      );
    }
  }, [language, messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, messages, isLoading]);

  const toggleChat = () => {
    if (!isOpen) {
      playOpen();
    } else {
      playClick();
    }
    setIsOpen((prev) => !prev);
  };

  const resetChat = () => {
    playClick();
    setMessages([greetingMessage]);
    setSuggestions([...defaultSuggestions]);
    setShowSuggestions(true);
    localStorage.removeItem(`${CHAT_STORAGE_KEY}-${language}`);
  };

  const submitMessage = async (userText: string) => {
    const trimmed = userText.trim();

    if (!trimmed || isLoading) {
      return;
    }

    const nextMessages = [
      ...messages,
      { role: "user" as const, text: trimmed },
    ];
    setInput("");
    setMessages(nextMessages);
    setIsLoading(true);
    setShowSuggestions(false);
    playClick();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          language,
          history: nextMessages.slice(-6),
        }),
      });

      const data = (await res.json()) as ChatResponse;
      const botText =
        data.text ??
        (language === "pt"
          ? "Falha ao gerar resposta."
          : language === "es"
            ? "No se pudo generar respuesta."
            : "Failed to generate response.");

      setMessages((prev) => [...prev, { role: "bot", text: botText }]);

      if (Array.isArray(data.suggestions) && data.suggestions.length > 0) {
        setSuggestions(data.suggestions);
      }
    } catch {
      const errorText =
        language === "pt"
          ? "Erro de conexão. O terminal do assistente não respondeu."
          : language === "es"
            ? "Error de conexión. El terminal del asistente no respondió."
            : "Connection error. The assistant terminal did not respond.";

      setMessages((prev) => [...prev, { role: "bot", text: errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitMessage(input);
  };

  return (
    <>
      <div className="fixed bottom-4 right-16 z-50 flex items-center justify-center">
        <button
          onClick={toggleChat}
          className={`w-12 h-12 flex items-center justify-center border-2 border-[#39ff14] bg-black text-[#39ff14] hover:bg-[#11111b] transition-all pixel-border ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <MessageSquare size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 md:right-16 w-[22rem] md:w-[28rem] h-[34rem] z-50 flex flex-col bg-[#050510] border-4 border-[#39ff14] shadow-[0_0_20px_rgba(57,255,20,0.3)] animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-[#39ff14] text-black p-2 flex justify-between items-center font-press-start text-xs">
            <span>{copy.title}</span>
            <div className="flex items-center gap-3">
              <button onClick={resetChat} className="hover:text-white">
                {copy.reset}
              </button>
              <button onClick={toggleChat} className="hover:text-white">
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="px-3 py-2 border-b border-gray-800 bg-[#0c0c16]">
            <p className="font-vt323 text-lg text-gray-300">{copy.empty}</p>
          </div>

          <div className="px-3 py-2 border-b border-gray-800 bg-[#090912]">
            <button
              type="button"
              onClick={() => setShowSuggestions((prev) => !prev)}
              className="w-full flex items-center justify-between text-[#ffd700] font-vt323 text-lg"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={16} />
                {copy.quickPrompts}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-300">
                {showSuggestions ? copy.hidePrompts : copy.showPrompts}
                {showSuggestions ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </span>
            </button>

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 mt-3 max-h-24 overflow-y-auto custom-scrollbar pr-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void submitMessage(suggestion)}
                    disabled={isLoading}
                    className="text-left text-xs leading-snug px-2 py-1 border border-[#b026ff] text-[#d8b4fe] hover:bg-[#1a1026] transition-colors disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-vt323 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={`${msg.role}-${idx}`}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] p-3 border-2 whitespace-pre-wrap leading-7 text-[1.05rem] ${
                    msg.role === "user"
                      ? "border-[#b026ff] text-[#f5d0fe] bg-[#14091f]"
                      : "border-gray-500 text-gray-100 bg-[#0e0e18]"
                  }`}
                >
                  {renderTextWithLinks(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-[#39ff14] animate-pulse font-vt323 text-xl">
                {copy.loading}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-2 border-t-2 border-gray-700 bg-[#11111b] flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={copy.placeholder}
              className="flex-1 bg-black border border-gray-600 text-[#39ff14] font-vt323 text-lg p-2 outline-none focus:border-[#39ff14]"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="text-[#39ff14] hover:text-white disabled:opacity-50 px-2"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #39ff14;
        }
      `}</style>
    </>
  );
}
