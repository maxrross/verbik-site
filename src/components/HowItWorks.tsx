import { AppConfig, SiteUiCopy } from "../config/apps";

export function HowItWorks({ app, copy }: { app: AppConfig; copy: SiteUiCopy["workflow"] }) {
    if (!app.steps?.length) {
        return null;
    }

    return (
        <section id="workflow" className="container py-16 sm:py-20 md:py-24">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-14">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor }}
                >
                    {copy.badge}
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">{copy.title}</h2>
                <p className="text-base sm:text-lg md:text-2xl max-w-4xl text-zinc-600">{copy.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {app.steps.map((step, index) => (
                    <article
                        key={step.title}
                        className="group bg-gray-50 rounded-3xl shadow-outline p-6 sm:p-8 md:p-9 text-left transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_34px_rgba(12,34,74,0.08)]"
                    >
                        <span
                            className="inline-flex items-center justify-center h-10 w-10 rounded-full text-white font-semibold mb-6 animate-float-gentle"
                            style={{ backgroundImage: `linear-gradient(135deg, ${app.accentColor}, ${app.accentColor}B3)` }}
                        >
                            {index + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-3">{step.title}</h3>
                        <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
