import { AppConfig, SiteUiCopy } from "../config/apps";

function interpolate(template: string, values: Record<string, string>): string {
    return template.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (_match, token: string) => values[token] ?? "");
}

export function DownloadCTA({ app, copy }: { app: AppConfig; copy: SiteUiCopy["downloadCta"] }) {
    const hasExternalStoreUrl = app.appStoreUrl.startsWith("http");

    return (
        <section className="container pb-16 md:pb-24">
            <div className="rounded-3xl bg-gray-50 shadow-outline px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs mb-6"
                    style={{ color: app.accentColor }}
                >
                    {copy.eyebrow}
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
                    {interpolate(copy.title, { appName: app.appName })}
                </h2>
                <p className="text-base sm:text-lg md:text-2xl text-zinc-600 mb-8 sm:mb-10 max-w-4xl mx-auto">
                    {interpolate(copy.subtitle, { appName: app.appName })}
                </p>

                <a
                    href={app.appStoreUrl}
                    target={hasExternalStoreUrl ? "_blank" : undefined}
                    rel={hasExternalStoreUrl ? "noopener noreferrer" : undefined}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-zinc-900 text-white visited:text-white active:text-white hover:text-white font-medium hover:bg-zinc-800 transition"
                >
                    <img src="/icons/apple-logo-white.svg" alt="" aria-hidden="true" className="relative -top-px h-5 w-5 shrink-0 object-contain" />
                    <span className="text-white leading-none">{copy.buttonLabel}</span>
                </a>
            </div>
        </section>
    );
}
