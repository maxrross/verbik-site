"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "../config/apps";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

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
                <div className="mb-6 md:mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">General</p>
                    <Link
                        href="/help"
                        onClick={handleNavigate}
                        className={`block rounded-full px-4 py-2 text-sm transition ${pathname === "/help"
                            ? "bg-white shadow-outline text-zinc-900"
                            : "text-zinc-600 hover:bg-white"
                            }`}
                    >
                        Overview
                    </Link>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Apps</p>
                    <div className="space-y-2">
                        {apps.map((app) => {
                            const active = pathname === `/help/${app.slug}`;
                            return (
                                <Link
                                    key={app.slug}
                                    href={`/help/${app.slug}`}
                                    onClick={handleNavigate}
                                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${active
                                        ? "bg-white shadow-outline text-zinc-900"
                                        : "text-zinc-600 hover:bg-white"
                                        }`}
                                >
                                    <img src={app.iconImage} alt={`${app.appName} icon`} width={16} height={16} className="rounded-[5px]" />
                                    <span className="truncate">{app.appName}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-200">
                        <div className="space-y-2">
                            <Link
                                href="/help"
                                onClick={handleNavigate}
                                className={`block rounded-full px-4 py-2 text-sm transition ${pathname === "/help"
                                    ? "bg-white shadow-outline text-zinc-900"
                                    : "text-zinc-600 hover:bg-white"
                                    }`}
                            >
                                Help
                            </Link>
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
