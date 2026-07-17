import { AppConfig } from "../config/apps";
import { studio } from "../config/studio";

export function FAQ({ app }: { app: AppConfig }) {
    if (!app.faqItems?.length) {
        return null;
    }

    return (
        <section className="container py-16 sm:py-20 md:py-24">
            <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-14 text-center">
                <small
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                >
                    Support
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">Frequently asked questions</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl shadow-outline p-4 sm:p-5 md:p-7">
                <div className="flex flex-col gap-3">
                    {app.faqItems.map((item) => (
                        <details key={item.question} className="bg-white rounded-2xl shadow-outline px-4 sm:px-5 py-4 md:px-6 md:py-5 group">
                            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-zinc-900 font-semibold text-base sm:text-lg">
                                <span>{item.question}</span>
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full shadow-outline group-open:rotate-45 transition-transform"
                                    style={{ color: app.accentColor, backgroundColor: app.accentColorLight }}
                                >
                                    +
                                </span>
                            </summary>
                            <p className="pt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">{item.answer}</p>
                        </details>
                    ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white shadow-outline p-5 sm:p-6 text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">Still stuck?</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        Email <a className="font-medium" style={{ color: app.accentColor }} href={`mailto:${studio.supportEmail}`}>{studio.supportEmail}</a> and include
                        your iOS version, device model, and what happened.
                    </p>
                </div>
            </div>
        </section>
    );
}
