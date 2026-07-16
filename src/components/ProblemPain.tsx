"use client";

import { AppConfig } from "../config/apps";
import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

export function ProblemPain({ app }: { app: AppConfig }) {
    if (!app.painPoints?.length || !app.solutions?.length) {
        return null;
    }

    return (
        <section className="container py-16 sm:py-20 md:py-24 text-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider"
                    style={{ color: app.accentColor }}
                >
                    Why This Exists
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
                    Sound familiar?
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col rounded-3xl text-[#750D0D] bg-gradient-to-b from-[#FDF5F5] to-[#FBE7E7] shadow-outline"
                >
                    <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:p-8 md:p-11 lg:p-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-left">
                            Without {app.appName}
                        </h3>
                        <ul className="space-y-4 md:space-y-5 text-left">
                            {app.painPoints.map((pain, i) => (
                                <motion.li
                                    key={pain}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                                    className="flex items-start gap-3.5 text-sm sm:text-base md:text-[1.1rem] leading-relaxed"
                                >
                                    <XCircle weight="fill" className="w-5 h-5 mt-1 shrink-0 text-[#EF4444]" />
                                    <span>{pain}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-col rounded-3xl text-zinc-800 shadow-outline"
                    style={{
                        background: `linear-gradient(to bottom, ${app.accentColorLight} 0%, ${app.accentColor}18 100%)`,
                    }}
                >
                    <div className="flex flex-col gap-6 sm:gap-7 p-6 sm:p-8 md:p-11 lg:p-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-left">
                            With {app.appName}
                        </h3>
                        <ul className="space-y-4 md:space-y-5 text-left">
                            {app.solutions.map((solution, i) => (
                                <motion.li
                                    key={solution}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                                    className="flex items-start gap-3.5 text-sm sm:text-base md:text-[1.1rem] leading-relaxed"
                                >
                                    <CheckCircle weight="fill" className="w-5 h-5 mt-1 shrink-0" style={{ color: app.accentColor }} />
                                    <span>{solution}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
