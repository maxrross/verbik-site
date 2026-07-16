import { AppConfig } from "../config/apps";
import { AnimatedIcon } from "./AnimatedIcon";

export function FeatureGrid({ app }: { app: AppConfig }) {
    const heading = "Find the form. Understand the word.";

    return (
        <section id="features" className="container py-16 sm:py-20 md:py-24">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-14">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor }}
                >
                    Capabilities
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">{heading}</h2>
                <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-zinc-600">
                    Core functionality focused on speed, privacy, and output quality.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {app.features.slice(0, 3).map((feature) => (
                    <article
                        key={feature.title}
                        className="group bg-gray-50 rounded-3xl shadow-outline p-6 sm:p-7 md:p-9 text-left transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                        <div className="mb-6 inline-flex rounded-2xl p-3" style={{ backgroundColor: `${app.accentColor}16` }}>
                            <AnimatedIcon iconSymbol={feature.icon} color={app.accentColor} size="md" variant="light" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                        <p className="text-zinc-600 leading-relaxed">{feature.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
