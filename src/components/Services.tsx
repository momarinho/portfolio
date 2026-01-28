"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            ...t.services.items.leadGen,
            difficulty: "High"
        },
        {
            ...t.services.items.docIntel,
            difficulty: "Medium"
        },
        {
            ...t.services.items.seo,
            difficulty: "High"
        }
    ];

    return (
        <section id="services" className="py-12 md:py-20 px-4 max-w-5xl mx-auto bg-[#0a0a14]">
            <div className="text-center mb-12">
                <h2 className="font-press-start text-2xl md:text-3xl text-[#00f3ff] inline-block border-b-4 border-[#ffd700] pb-4">
                    {t.services.title}
                </h2>
                <p className="mt-4 font-vt323 text-xl text-gray-400">{t.services.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#1a1a2e] border-2 border-dashed border-gray-600 p-6 relative hover:border-[#39ff14] transition-all"
                    >
                        <div className="absolute top-2 right-2 text-xs text-gray-500 font-press-start">
                            {t.common.rank}: {service.difficulty === "High" ? "S" : "A"}
                        </div>
                        <h3 className="font-press-start text-[#ffd700] text-sm mb-4 leading-relaxed">{service.title}</h3>
                        <p className="font-vt323 text-xl text-gray-300 mb-6">{service.desc}</p>
                        <div className="border-t border-gray-700 pt-4">
                            <span className="text-[#39ff14] text-sm font-bold font-mono">{t.common.reward}:</span>
                            <p className="font-vt323 text-lg text-white">{service.reward}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
