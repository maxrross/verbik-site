"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

const sections = [
    ["Getting started", "getting-started"],
    ["Searching forms", "search"],
    ["Offline & privacy", "offline"],
    ["Pronunciation", "pronunciation"],
    ["Favorites & iCloud", "favorites"],
    ["Verbik Pro", "pro"],
    ["Troubleshooting", "troubleshooting"],
    ["Corrections", "corrections"],
] as const;

export function HelpSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const handleNavigate = () => setIsOpen(false);

    return (
        <>
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen((value) => !value)}
                    className="w-full rounded-2xl bg-gray-50 shadow-outline px-4 py-3.5 flex items-center justify-between text-left font-medium text-zinc-800"
                >
                    Help sections
                    <CaretDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} weight="bold" />
                </button>
            </div>

            <aside
                className={`mt-3 md:mt-0 md:sticky md:top-6 rounded-3xl bg-gray-50 shadow-outline p-5 md:p-6 ${isOpen ? "block" : "hidden md:block"}`}
            >
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Verbik help</p>
                    <Link
                        href="/help"
                        onClick={handleNavigate}
                        className={`block rounded-full px-4 py-2 text-sm transition ${pathname === "/help"
                            ? "bg-white shadow-outline text-zinc-900"
                            : "text-zinc-600 hover:bg-white"
                            }`}
                    >
                        Help overview
                    </Link>
                    <div className="mt-2 space-y-1">
                        {sections.map(([label, anchor]) => (
                            <Link key={anchor} href={`/help#${anchor}`} onClick={handleNavigate} className="block rounded-full px-4 py-2 text-sm text-zinc-600 transition hover:bg-white hover:text-zinc-900">
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-200">
                        <div className="space-y-2">
                            <Link
                                href="/privacy"
                                onClick={handleNavigate}
                                className={`block rounded-full px-4 py-2 text-sm transition ${pathname === "/privacy"
                                    ? "bg-white shadow-outline text-zinc-900"
                                    : "text-zinc-600 hover:bg-white"
                                    }`}
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/terms"
                                onClick={handleNavigate}
                                className={`block rounded-full px-4 py-2 text-sm transition ${pathname === "/terms"
                                    ? "bg-white shadow-outline text-zinc-900"
                                    : "text-zinc-600 hover:bg-white"
                                    }`}
                            >
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
