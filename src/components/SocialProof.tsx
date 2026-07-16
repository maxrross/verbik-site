import { AppConfig } from "../config/apps";

export function SocialProof({ app }: { app: AppConfig }) {
    if (!app.socialProof) {
        return null;
    }

    return (
        <section className="container py-16 sm:py-20 md:py-24 text-center">
            <div className="flex flex-col items-center gap-5 sm:gap-6 mb-12 sm:mb-14">
                <small
                    className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs"
                    style={{ color: app.accentColor }}
                >
                    Loved By
                </small>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900">
                    Trusted by {app.socialProof.userCount} people
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {app.socialProof.testimonials.map((testimonial) => (
                    <blockquote
                        key={testimonial.quote}
                        className="rounded-2xl p-5 sm:p-6 text-left shadow-outline bg-gray-50"
                    >
                        <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                        <cite className="not-italic text-zinc-500 mt-4 block">&mdash; {testimonial.author}</cite>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}
