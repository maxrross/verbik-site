"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "../config/apps";
import { studio } from "../config/studio";

export function SiteNav() {
    const pathname = usePathname();

    return (
        <header className="relative container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-4 gap-y-3 sm:gap-y-4 pt-2.5 sm:pt-4 md:pt-6 pb-3 sm:pb-8 md:pb-12 text-sm z-20">
            <div className="sm:hidden w-full flex items-center justify-between">
                <h1 className="flex mr-2">
                    <Link href="/" className="inline-flex items-center gap-2 font-bold text-zinc-900 tracking-tight">
                        <img
                            src={studio.logoPath}
                            alt={`${studio.name} logo`}
                            width={24}
                            height={24}
                            className="rounded-[7px]"
                        />
                        <span className="text-replay text-base">{studio.name}</span>
                    </Link>
                </h1>

                <Link
                    href="/help"
                    className={`shrink-0 px-3 h-8 rounded-full flex items-center text-black/80 hover:text-black/90 hover:bg-gray-50 transition ${pathname.startsWith("/help") ? "bg-gray-50 shadow-outline" : ""}`}
                >
                    Help
                </Link>
            </div>

            <h1 className="hidden sm:flex sm:flex-1 mr-2 sm:mr-0">
                <Link href="/" className="inline-flex items-center gap-2 font-bold text-zinc-900 tracking-tight">
                    <img
                        src={studio.logoPath}
                        alt={`${studio.name} logo`}
                        width={24}
                        height={24}
                        className="rounded-[7px]"
                    />
                    <span className="text-replay text-base">{studio.name}</span>
                </Link>
            </h1>

            <div className="order-3 sm:order-none sm:hidden w-full overflow-x-auto no-scrollbar">
                <div className="mx-auto flex w-max items-center justify-center gap-2.5 px-1 pt-0.5 pb-1">
                    {apps.map((app) => {
                        const appPath = app.slug === "verbik" ? "/" : `/${app.slug}`;
                        const active = pathname === appPath;
                        return (
                            <Link
                                key={`mobile-${app.slug}`}
                                href={appPath}
                                aria-label={app.appName}
                                className={`relative shrink-0 flex items-center justify-center w-9 h-9 transition-transform duration-200 ${active
                                    ? "scale-[1.3] opacity-100 z-10"
                                    : "scale-100 opacity-75 hover:opacity-100 hover:z-10 hover:scale-110"
                                    }`}
                            >
                                <img
                                    src={app.iconImage}
                                    alt={`${app.appName} icon`}
                                    width={24}
                                    height={24}
                                    className="rounded-[8px] shadow-[0_2px_6px_rgba(15,23,42,0.1)]"
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="hidden sm:flex sm:flex-1 items-center justify-center gap-x-2 sm:gap-x-3 py-3">
                {apps.map((app) => {
                    const appPath = app.slug === "verbik" ? "/" : `/${app.slug}`;
                    const active = pathname === appPath;
                    return (
                        <Link
                            key={app.slug}
                            href={appPath}
                            aria-label={app.appName}
                            className={`relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-200 ${active
                                ? "scale-[1.95] opacity-100 z-10"
                                : "scale-150 opacity-80 hover:opacity-100 hover:z-10 hover:scale-[1.95]"
                                }`}
                        >
                            <img
                                src={app.iconImage}
                                alt={`${app.appName} icon`}
                                width={22}
                                height={22}
                                className="rounded-[7px] shadow-[0_10px_24px_rgba(15,23,42,0.16),0_3px_8px_rgba(15,23,42,0.10)]"
                            />
                        </Link>
                    );
                })}
            </div>

            <div className="hidden sm:flex items-center gap-1 ml-auto sm:ml-0 sm:flex-1 sm:justify-end">
                <Link
                    href="/help"
                    className={`px-3 sm:px-4 h-8 sm:h-10 rounded-full flex items-center text-black/80 hover:text-black/90 hover:bg-gray-50 transition ${pathname.startsWith("/help") ? "bg-gray-50 shadow-outline" : ""}`}
                >
                    Help
                </Link>
                <Link
                    href="/privacy"
                    className={`hidden md:flex px-3 sm:px-4 h-8 sm:h-10 rounded-full items-center text-black/70 hover:text-black hover:bg-gray-50 transition ${pathname === "/privacy" ? "bg-gray-50 shadow-outline" : ""}`}
                >
                    Privacy
                </Link>
                <Link
                    href="/terms"
                    className={`hidden md:flex px-3 sm:px-4 h-8 sm:h-10 rounded-full items-center text-black/70 hover:text-black hover:bg-gray-50 transition ${pathname === "/terms" ? "bg-gray-50 shadow-outline" : ""}`}
                >
                    Terms
                </Link>
            </div>
        </header>
    );
}
