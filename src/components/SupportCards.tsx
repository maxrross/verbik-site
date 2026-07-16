import Link from "next/link";
import { AppConfig } from "../config/apps";
import { studio } from "../config/studio";
import { ArrowRight, BookOpenText, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function SupportCards({ app }: { app: AppConfig }) {
    return (
        <section className="container py-16 sm:py-20 md:py-24 text-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                <small className="inline-flex gap-2 font-semibold text-[#007AFF] uppercase tracking-wider text-xs">
                    Help
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">Have questions that need answers?</h2>
                <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-zinc-600">
                    Check docs first, then contact us with details so we can help quickly.
                </p>
            </div>

            <div className="grid md:grid-cols-6 gap-5 sm:gap-6 md:gap-10">
                <div className="group col-span-6 lg:col-span-2 bg-gray-50 shadow-outline rounded-2xl h-full">
                    <div className="flex h-full flex-col items-center gap-4 py-7 sm:py-9 px-6 sm:px-11 text-base sm:text-lg text-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-outline animate-float-gentle">
                            <BookOpenText className="w-10 h-10 text-zinc-700" weight="duotone" />
                        </span>
                        <b className="font-semibold text-xl sm:text-2xl text-zinc-900">Docs</b>
                        <p className="max-w-[24ch] text-zinc-600">
                            Step-by-step guides and troubleshooting for {app.appName}.
                        </p>
                        <p className="mt-auto pt-6 mb-2">
                            <Link
                                href={`/help/${app.slug}`}
                                className="flex items-center gap-2 font-medium px-4 py-2 text-[#007AFF] border border-transparent group-hover:border-[#007AFF]/50 group-hover:bg-white rounded-full transition"
                            >
                                <span>View Docs</span>
                                <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="group col-span-6 md:col-span-3 lg:col-span-2 bg-gray-50 shadow-outline rounded-2xl h-full">
                    <div className="flex h-full flex-col items-center gap-4 py-7 sm:py-9 px-6 sm:px-11 text-base sm:text-lg text-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-outline animate-float-gentle">
                            <EnvelopeSimple className="w-10 h-10 text-zinc-700" weight="duotone" />
                        </span>
                        <b className="font-semibold text-xl sm:text-2xl text-zinc-900">Contact</b>
                        <p className="max-w-[24ch] text-zinc-600">
                            Reach us directly for bug reports, word corrections, or product questions.
                        </p>
                        <p className="mt-auto pt-6 mb-2">
                            <a
                                href={`mailto:${studio.supportEmail}?subject=Question about ${app.appName}`}
                                className="flex items-center gap-2 font-medium px-4 py-2 text-[#007AFF] border border-transparent group-hover:border-[#007AFF]/50 group-hover:bg-white rounded-full transition"
                            >
                                <span>Email Support</span>
                                <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                            </a>
                        </p>
                    </div>
                </div>

                <div className="group col-span-6 md:col-span-3 lg:col-span-2 bg-gray-50 shadow-outline rounded-2xl h-full">
                    <div className="flex h-full flex-col items-center gap-4 py-7 sm:py-9 px-6 sm:px-11 text-base sm:text-lg text-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-outline animate-float-gentle">
                            <ShieldCheck className="w-10 h-10 text-zinc-700" weight="duotone" />
                        </span>
                        <b className="font-semibold text-xl sm:text-2xl text-zinc-900">Privacy</b>
                        <p className="max-w-[24ch] text-zinc-600">
                            See what stays on-device, what may sync with iCloud, and what optional support sends.
                        </p>
                        <p className="mt-auto pt-6 mb-2">
                            <Link
                                href="/privacy"
                                className="flex items-center gap-2 font-medium px-4 py-2 text-[#007AFF] border border-transparent group-hover:border-[#007AFF]/50 group-hover:bg-white rounded-full transition"
                            >
                                <span>Read Policy</span>
                                <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
