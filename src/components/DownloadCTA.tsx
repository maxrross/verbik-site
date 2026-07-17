import { AppConfig, SiteUiCopy } from "../config/apps";
import { twilightPanelBackground } from "./panelStyles";

function interpolate(template: string, values: Record<string, string>): string {
    return template.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_match, token: string) => values[token] ?? "");
}

export function DownloadCTA({ app, copy }: { app: AppConfig; copy: SiteUiCopy["downloadCta"] }) {
    const hasExternalStoreUrl = app.appStoreUrl.startsWith("http");

    return (
        <section className="container pb-16 md:pb-24">
            <div
                className="relative overflow-hidden rounded-3xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center shadow-[0_28px_60px_rgba(23,5,56,0.3)]"
                style={{ background: twilightPanelBackground }}
            >
                <span className="absolute inset-0 rounded-3xl shadow-outline-superbright pointer-events-none" />
                <small className="relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs mb-6 bg-white/10 text-[#D9CCFF]">
                    {copy.eyebrow}
                </small>
                <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-4">
                    {interpolate(copy.title, { appName: app.appName })}
                </h2>
                <p className="relative text-base sm:text-lg md:text-2xl text-white/75 mb-8 sm:mb-10 max-w-4xl mx-auto">
                    {interpolate(copy.subtitle, { appName: app.appName })}
                </p>

                <a
                    href={app.appStoreUrl}
                    target={hasExternalStoreUrl ? "_blank" : undefined}
                    rel={hasExternalStoreUrl ? "noopener noreferrer" : undefined}
                    className="relative inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white font-medium text-zinc-900 visited:text-zinc-900 active:text-zinc-900 hover:text-zinc-900 hover:bg-[#F1ECFF] transition shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
                >
                    <img src="/icons/apple-logo-white.svg" alt="" aria-hidden="true" className="relative -top-px h-5 w-5 shrink-0 object-contain invert" />
                    <span className="leading-none">{copy.buttonLabel}</span>
                </a>
            </div>
        </section>
    );
}
