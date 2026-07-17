"use client";

import { AppConfig } from "../config/apps";
import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { twilightPanelBackground } from "./panelStyles";

export function ProblemPain({ app }: { app: AppConfig }) {
    if (!app.painPoints?.length || !app.solutions?.length) {
        return null;
    }

    return (
        <section className="container py-16 sm:py-20 md:py-24 text-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 mb-10 sm:mb-14">
                <small
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                >
                    Why This Exists
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
                    Sound familiar?
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-3xl text-left shadow-[0_28px_60px_rgba(23,5,56,0.3)]"
                style={{ background: twilightPanelBackground }}
            >
                <span className="absolute inset-0 rounded-3xl shadow-outline-superbright pointer-events-none" />

                <div className="relative grid md:grid-cols-2">
                    <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:p-8 md:p-11 lg:p-12 border-b border-white/10 md:border-b-0 md:border-r">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/50">
                            Without {app.appName}
                        </h3>
                        <ul className="space-y-4 md:space-y-5">
                            {app.painPoints.map((pain, i) => (
                                <motion.li
                                    key={pain}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                                    className="flex items-start gap-3.5 text-sm sm:text-base md:text-[1.1rem] leading-relaxed text-[#B4A6E3]"
                                >
                                    <XCircle weight="fill" className="w-5 h-5 mt-1 shrink-0 text-white/30" />
                                    <span>{pain}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:p-8 md:p-11 lg:p-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
                            With {app.appName}
                        </h3>
                        <ul className="space-y-4 md:space-y-5">
                            {app.solutions.map((solution, i) => (
                                <motion.li
                                    key={solution}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                                    className="flex items-start gap-3.5 text-sm sm:text-base md:text-[1.1rem] leading-relaxed text-white/95"
                                >
                                    <CheckCircle weight="fill" className="w-5 h-5 mt-1 shrink-0 text-[#FF6A3D]" />
                                    <span>{solution}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
