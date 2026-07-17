import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { AppConfig } from "../config/apps";

export function PrivacyBadge({ message, app }: { message?: string; app?: AppConfig }) {
    const accentColor = app?.accentColor ?? "#007AFF";
    return (
        <section className="container py-16 sm:py-20 md:py-24">
            <div
                className="group relative overflow-hidden rounded-3xl shadow-outline px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 md:gap-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_34px_rgba(12,34,74,0.08)]"
                style={{
                    background: `linear-gradient(135deg, ${accentColor}08 0%, rgb(249 250 251) 40%, rgb(249 250 251) 100%)`,
                }}
            >
                <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-outline flex items-center justify-center animate-float-gentle transition-transform duration-300 group-hover:scale-105"
                    style={{ color: accentColor }}
                >
                    <ShieldCheck weight="duotone" className="w-9 h-9" />
                </div>
                <div className="flex-1">
                    <small
                        className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs mb-3"
                        style={{ color: accentColor, backgroundColor: app?.accentColorLight ?? "#F1ECFF" }}
                    >
                        Privacy
                    </small>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-zinc-900 mb-4">Private by design</h2>
                    <p className="text-base sm:text-lg md:text-2xl text-zinc-600 max-w-4xl leading-relaxed">
                        {message ||
                            "Your data stays on your device. No cloud upload, no analytics tracking, and no account required."}
                    </p>
                </div>
            </div>
        </section>
    );
}
