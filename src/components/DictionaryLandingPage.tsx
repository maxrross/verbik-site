import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { DictionaryPageConfig } from "../config/languages";
import { dictionaryPages } from "../config/languages";
import { studio } from "../config/studio";
import { buildPageMetadata } from "../config/metadata";
import { apps } from "../config/apps";

const app = apps[0];

export function dictionaryPageMetadata(page: DictionaryPageConfig): Metadata {
    return buildPageMetadata({
        title: page.title,
        description: page.description,
        path: `/${page.slug}`,
    });
}

export function DictionaryLandingPage({ page }: { page: DictionaryPageConfig }) {
    const pageUrl = new URL(`/${page.slug}`, studio.siteUrl).toString();
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.title,
            description: page.description,
            url: pageUrl,
            citation: page.sourceUrl,
            isPartOf: { "@type": "WebSite", name: "Verbik", url: studio.siteUrl },
            about: {
                "@type": "SoftwareApplication",
                name: "Verbik",
                applicationCategory: "ReferenceApplication",
                operatingSystem: "iOS 17.0 or later",
                downloadUrl: app.appStoreUrl,
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Verbik", item: studio.siteUrl },
                { "@type": "ListItem", position: 2, name: `${page.name} dictionary`, item: pageUrl },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
        },
    ];

    return (
        <div>
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}

            <section className="container pb-14 pt-3 sm:pb-20 sm:pt-8">
                <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-gray-50 p-6 shadow-outline sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
                    <div>
                        <nav aria-label="Breadcrumb" className="mb-7 text-sm text-zinc-500">
                            <Link href="/" className="hover:text-zinc-900">Verbik</Link>
                            <span aria-hidden="true" className="px-2">/</span>
                            <span>{page.name} dictionary</span>
                        </nav>
                        <div className="mb-5 text-5xl" aria-hidden="true">{page.flag}</div>
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">{page.heading}</h1>
                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-xl">{page.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <a
                                href={app.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-zinc-800"
                                style={{ color: "#fff" }}
                            >
                                <img src="/icons/apple-logo-white.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                                Download on the App Store
                            </a>
                            <span className="text-sm text-zinc-500">Free to download · $14.99 lifetime Pro unlock</span>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[390px] lg:max-w-[440px]">
                        <div className="absolute inset-8 rounded-full bg-[#5A00F5]/20 blur-3xl" />
                        <div className="relative mx-auto aspect-[920/2000] w-[74vw] max-w-[440px]">
                            {page.imageIsRaw ? (
                                <div className="absolute inset-0 rounded-[13%] bg-gradient-to-b from-zinc-700 via-black to-zinc-800 p-[1.5%] drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]">
                                    <div className="relative h-full overflow-hidden rounded-[11.5%] bg-white">
                                        <Image
                                            src={page.image}
                                            alt={page.imageAlt}
                                            fill
                                            sizes="(max-width: 639px) 74vw, (max-width: 1023px) 390px, 440px"
                                            priority
                                            fetchPriority="high"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={page.image}
                                    alt={page.imageAlt}
                                    fill
                                    sizes="(max-width: 639px) 74vw, (max-width: 1023px) 390px, 440px"
                                    priority
                                    fetchPriority="high"
                                    className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.28)]"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-14 sm:py-20">
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl bg-gray-50 p-6 text-center shadow-outline">
                        <strong className="block text-3xl text-zinc-900">{page.entryCount.toLocaleString("en-US")}</strong>
                        <span className="mt-1 block text-sm text-zinc-600">{page.name} dictionary entries</span>
                    </div>
                    <div className="rounded-3xl bg-gray-50 p-6 text-center shadow-outline">
                        <strong className="block text-3xl text-zinc-900">{page.verbCount.toLocaleString("en-US")}</strong>
                        <span className="mt-1 block text-sm text-zinc-600">verb entries</span>
                    </div>
                    <div className="rounded-3xl bg-gray-50 p-6 text-center shadow-outline">
                        <strong className="block text-3xl text-zinc-900">Offline</strong>
                        <span className="mt-1 block text-sm text-zinc-600">core search and grammar</span>
                    </div>
                </div>
                <p className="mt-3 text-center text-xs text-zinc-500">Counts reflect Verbik 1.3 and may grow in later dictionary updates.</p>
                {page.sourceSummary && (
                    <aside className="mx-auto mt-6 max-w-4xl rounded-2xl border border-violet-200 bg-violet-50 p-5 text-sm leading-relaxed text-zinc-700 sm:p-6">
                        <strong className="block text-base text-zinc-900">Source-backed dictionary data</strong>
                        <p className="mt-2">{page.sourceSummary}</p>
                        {page.sourceUrl && (
                            <a href={page.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-semibold text-[#5A00F5] hover:underline">
                                View the pinned source provider
                            </a>
                        )}
                    </aside>
                )}
            </section>

            <section className="container py-14 sm:py-20">
                <div className="mb-10 max-w-3xl">
                    <small className="font-semibold uppercase tracking-wider text-[#5A00F5]">Inflected-form search</small>
                    <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-5xl">Search the word you have—not the lemma you do not know</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {page.searchExamples.map((example) => (
                        <article key={example.query} className="rounded-3xl bg-gray-50 p-6 shadow-outline">
                            <div className="flex items-center gap-3 text-xl font-semibold text-zinc-900">
                                <span>{example.query}</span>
                                <ArrowRight className="h-4 w-4 text-[#5A00F5]" weight="bold" />
                                <span>{example.result}</span>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-600">{example.explanation}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container py-14 sm:py-20">
                <div className="rounded-[2rem] bg-zinc-950 p-6 text-white sm:p-10 lg:p-14">
                    <small className="font-semibold uppercase tracking-wider text-violet-300">Inside the {page.name} dictionary</small>
                    <h2 className="mt-4 max-w-4xl text-3xl font-bold sm:text-5xl">Grammar that follows the language</h2>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {page.grammarFeatures.map((feature) => (
                            <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                                <div className="flex gap-3">
                                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" weight="fill" />
                                    <div>
                                        <h3 className="font-semibold text-white">{feature.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container py-14 sm:py-20">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-3xl font-bold text-zinc-900 sm:text-5xl">{page.name} dictionary questions</h2>
                    <div className="mt-10 space-y-3">
                        {page.faq.map((item) => (
                            <details key={item.question} className="group rounded-2xl bg-gray-50 p-5 shadow-outline sm:p-6">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-900">
                                    {item.question}
                                    <span className="text-zinc-500 transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-4 leading-relaxed text-zinc-600">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container pb-16 pt-14 sm:pb-24 sm:pt-20">
                <div className="rounded-3xl bg-gray-50 p-6 shadow-outline sm:p-10">
                    <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Explore all Verbik dictionaries</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {dictionaryPages.filter((candidate) => candidate.slug !== page.slug).map((candidate) => (
                            <Link key={candidate.slug} href={`/${candidate.slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-outline hover:text-[#5A00F5]">
                                {candidate.flag} {candidate.name} verb dictionary
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
