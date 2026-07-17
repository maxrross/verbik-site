import { AppConfig, SiteUiCopy } from "../config/apps";
import { SearchDemo } from "./SearchDemo";

export function HowItWorks({ app, copy }: { app: AppConfig; copy: SiteUiCopy["workflow"] }) {
    if (!app.steps?.length) {
        return null;
    }

    return (
        <section id="workflow" className="container py-16 sm:py-20 md:py-24">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-14">
                <small
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                >
                    {copy.badge}
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">{copy.title}</h2>
                <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-zinc-600">{copy.subtitle}</p>
            </div>

            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <SearchDemo app={app} />

                <ol className="flex flex-col text-left">
                    {app.steps.map((step, index) => {
                        const isLast = index === app.steps!.length - 1;
                        return (
                            <li key={step.title} className="relative flex gap-5">
                                <div className="flex flex-col items-center">
                                    <span
                                        className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${app.accentColor}, ${app.accentColor}B3)`,
                                            boxShadow: `0 0 0 4px ${app.accentColorLight}`,
                                        }}
                                    />
                                    {!isLast && (
                                        <span
                                            className="w-px flex-1"
                                            style={{
                                                backgroundImage: `linear-gradient(to bottom, ${app.accentColor}55, ${app.accentColor}0D)`,
                                            }}
                                        />
                                    )}
                                </div>
                                <div className={`flex flex-col gap-1.5 ${isLast ? "" : "pb-8"}`}>
                                    <small
                                        className="text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: app.accentColor }}
                                    >
                                        Step {index + 1}
                                    </small>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">{step.title}</h3>
                                    <p className="leading-relaxed text-zinc-600">{step.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
