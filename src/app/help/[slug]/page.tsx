import { notFound } from "next/navigation";
import { getAllSupportSlugs, getSupportAppBySlug } from "../../../config/apps";
import { studio } from "../../../config/studio";
import { buildPageMetadata } from "../../../config/metadata";

export async function generateStaticParams() {
    return getAllSupportSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const app = getSupportAppBySlug(slug);

    if (!app) {
        return { title: "Not Found" };
    }

    return buildPageMetadata({
        title: `${app.appName} Help`,
        description: `Support documentation for ${app.appName}`,
        path: `/help/${slug}`,
    });
}

export default async function AppHelpPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const app = getSupportAppBySlug(slug);

    if (!app) {
        notFound();
    }

    return (
        <article className="scroll-mt-3 sm:scroll-mt-5 rounded-3xl bg-gray-50 shadow-outline p-5 sm:p-7 md:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <img src={app.iconImage} alt={`${app.appName} icon`} width={52} height={52} className="rounded-[14px]" />
                <div>
                    <small className="inline-flex gap-2 font-semibold uppercase tracking-wider text-xs" style={{ color: app.accentColor }}>
                        App Help
                    </small>
                    <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">{app.appName}</h1>
                </div>
            </div>

            <p className="text-zinc-600 text-base sm:text-lg mb-8 md:mb-10 max-w-3xl">{app.description}</p>

            <section className="rounded-2xl bg-[#EEF7FF] border border-[#CFE6FF] p-5 sm:p-6 mb-8 md:mb-10">
                <h2 className="text-xl font-semibold text-zinc-900 mb-3">Privacy and Offline Guarantee</h2>
                <ul className="list-disc pl-5 text-zinc-700 space-y-2">
                    <li>We do not use your personal content to train any AI model.</li>
                    <li>We do not send your personal content to any AI provider.</li>
                    <li>Your data stays on your device and does not leave your device for AI processing.</li>
                    <li>Core app workflows are designed to run fully offline on supported devices.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Feature overview</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {app.features.map((feature) => (
                        <div key={feature.title} className="rounded-2xl bg-white shadow-outline p-4 sm:p-5">
                            <h3 className="font-semibold text-zinc-900 mb-2">{feature.title}</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">{feature.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {app.faqItems?.length ? (
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Common questions</h2>
                    <div className="space-y-3">
                        {app.faqItems.map((faq) => (
                            <details key={faq.question} className="rounded-2xl bg-white shadow-outline p-4 sm:p-5 group">
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium text-zinc-900">
                                    {faq.question}
                                    <span className="text-zinc-500 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="text-zinc-600 text-sm leading-relaxed mt-3">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            ) : null}

            <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-zinc-900 mb-3">Still stuck?</h2>
                <p className="text-zinc-600">
                    Email <a href={`mailto:${studio.supportEmail}`} className="font-medium text-[#007AFF]">{studio.supportEmail}</a> and include your iOS version, device model, and a short description of what happened.
                </p>
            </section>
        </article>
    );
}
