"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MagnifyingGlass, SpeakerHigh } from "@phosphor-icons/react/dist/ssr";
import { AppConfig } from "../config/apps";

export type DemoScenario = {
    flag: string;
    language: string;
    query: string;
    lemma: string;
    translation: string;
    chips: string[];
    rtl?: boolean;
    pos?: string;
};

const defaultScenarios: DemoScenario[] = [
    {
        flag: "🇷🇺",
        language: "Russian",
        query: "говорю",
        lemma: "говори́ть",
        translation: "to speak, to talk",
        chips: ["present", "1st person", "singular"],
    },
    {
        flag: "🇪🇸",
        language: "Spanish",
        query: "sepa",
        lemma: "saber",
        translation: "to know",
        chips: ["present subjunctive", "irregular"],
    },
    {
        flag: "🇮🇱",
        language: "Hebrew",
        query: "לומד",
        lemma: "ללמוד",
        translation: "to learn",
        chips: ["present", "masculine singular"],
        rtl: true,
    },
    {
        flag: "🇮🇹",
        language: "Italian",
        query: "sono",
        lemma: "essere",
        translation: "to be",
        chips: ["present", "1st person", "irregular"],
    },
];

const TYPE_START_MS = 500;
const TYPE_CHAR_MS = 130;
const RESULT_DELAY_MS = 320;
const RESULT_HOLD_MS = 3200;

export function SearchDemo({ app, scenarios = defaultScenarios }: { app: AppConfig; scenarios?: DemoScenario[] }) {
    const reducedMotion = useReducedMotion();
    const [index, setIndex] = useState(0);
    const [typedCount, setTypedCount] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (reducedMotion) {
            setIndex(0);
            setTypedCount([...scenarios[0].query].length);
            setShowResult(true);
            return;
        }

        const timers: number[] = [];
        const run = (rawIndex: number) => {
            const nextIndex = rawIndex % scenarios.length;
            const chars = [...scenarios[nextIndex].query];
            setIndex(nextIndex);
            setTypedCount(0);
            setShowResult(false);
            chars.forEach((_, i) => {
                timers.push(window.setTimeout(() => setTypedCount(i + 1), TYPE_START_MS + i * TYPE_CHAR_MS));
            });
            const typedDone = TYPE_START_MS + chars.length * TYPE_CHAR_MS;
            timers.push(window.setTimeout(() => setShowResult(true), typedDone + RESULT_DELAY_MS));
            timers.push(window.setTimeout(() => run(nextIndex + 1), typedDone + RESULT_DELAY_MS + RESULT_HOLD_MS));
        };
        run(0);
        return () => timers.forEach(clearTimeout);
    }, [reducedMotion, scenarios]);

    const scenario = scenarios[index] ?? scenarios[0];
    const flagsAreDistinct = new Set(scenarios.map((s) => s.flag)).size === scenarios.length;
    const typed = [...scenario.query].slice(0, typedCount).join("");

    return (
        <div
            className="relative overflow-hidden rounded-3xl p-4 sm:p-6 shadow-outline"
            style={{
                backgroundImage: `url('${app.heroWallpaper}'), linear-gradient(135deg, ${app.accentGradient.from}, ${app.accentGradient.via || app.accentGradient.to}, ${app.accentGradient.to})`,
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
            }}
        >
            <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/10 pointer-events-none" />

            <div className="relative rounded-2xl bg-white/95 backdrop-blur p-4 sm:p-5 shadow-[0_18px_40px_rgba(23,5,56,0.28)]">
                <div className="flex items-center gap-2.5 rounded-xl bg-gray-100 px-3.5 py-3 shadow-outline">
                    <MagnifyingGlass className="h-[18px] w-[18px] shrink-0 text-zinc-500" weight="bold" />
                    <span
                        className={`flex-1 text-base font-medium text-zinc-900 ${scenario.rtl ? "text-right" : "text-left"}`}
                        dir={scenario.rtl ? "rtl" : "ltr"}
                    >
                        {typed.length ? typed : <span className="font-normal text-zinc-400">Search any form…</span>}
                        {!reducedMotion && typed.length > 0 && <span className="demo-caret" aria-hidden="true" />}
                    </span>
                    <span aria-hidden="true">{scenario.flag}</span>
                </div>

                <div className="relative mt-3 h-[168px] sm:h-[160px]" aria-hidden="true">
                    <AnimatePresence mode="wait">
                        {showResult && (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex flex-col gap-2 rounded-xl bg-white p-4 text-left shadow-outline"
                            >
                                <div className={`flex items-baseline justify-between gap-3 ${scenario.rtl ? "flex-row-reverse" : ""}`}>
                                    <span className="text-2xl font-bold text-zinc-900" dir={scenario.rtl ? "rtl" : "ltr"}>
                                        {scenario.lemma}
                                    </span>
                                    <SpeakerHigh className="h-5 w-5 shrink-0" weight="fill" style={{ color: app.accentColor }} />
                                </div>
                                <span className="text-sm text-zinc-500">
                                    {scenario.translation} · {scenario.language} {scenario.pos ?? "verb"}
                                </span>
                                <div className="mt-auto flex flex-wrap gap-1.5">
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.25, delay: 0.12 }}
                                        className="rounded-full bg-[#FFEDE6] px-2.5 py-1 text-xs font-semibold text-[#C2410C]"
                                    >
                                        matched “{scenario.query}”
                                    </motion.span>
                                    {scenario.chips.map((chip, i) => (
                                        <motion.span
                                            key={chip}
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.25, delay: 0.2 + i * 0.08 }}
                                            className="rounded-full px-2.5 py-1 text-xs font-semibold"
                                            style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                                        >
                                            {chip}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-3.5 flex items-center justify-center gap-2.5" aria-hidden="true">
                    {scenarios.map((s, i) =>
                        flagsAreDistinct ? (
                            <span
                                key={`${s.language}-${i}`}
                                className={`text-base transition duration-300 ${i === index ? "scale-110 opacity-100" : "opacity-30"}`}
                            >
                                {s.flag}
                            </span>
                        ) : (
                            <span
                                key={`${s.query}-${i}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6" : "w-2.5 bg-zinc-300"}`}
                                style={i === index ? { backgroundColor: app.accentColor } : undefined}
                            />
                        )
                    )}
                </div>
            </div>

            <ul className="sr-only">
                {scenarios.map((s, i) => (
                    <li key={`${s.query}-${i}`}>
                        Search “{s.query}” in {s.language} and Verbik finds {s.lemma} — {s.translation} ({s.chips.join(", ")}).
                    </li>
                ))}
            </ul>
        </div>
    );
}
