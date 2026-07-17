import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import type { DictionaryPageConfig } from "../config/languages";
import { dictionaryPages } from "../config/languages";
import { studio } from "../config/studio";
import { buildPageMetadata } from "../config/metadata";
import { apps, getSiteUiCopy } from "../config/apps";
import { twilightPanelBackground } from "./panelStyles";
import { SearchDemo, type DemoScenario } from "./SearchDemo";
import { DownloadCTA } from "./DownloadCTA";

const app = apps[0];

const demoScenariosBySlug: Record<string, DemoScenario[]> = {
    "spanish-verb-dictionary": [
        { flag: "🇪🇸", language: "Spanish", query: "hablo", lemma: "hablar", translation: "to speak, to talk", chips: ["present", "1st person", "singular"] },
        { flag: "🇪🇸", language: "Spanish", query: "sepa", lemma: "saber", translation: "to know", chips: ["present subjunctive", "irregular"] },
        { flag: "🇺🇸", language: "Spanish", query: "to understand", lemma: "entender", translation: "to understand", chips: ["English search", "e → ie verb"] },
    ],
    "russian-verb-dictionary": [
        { flag: "🇷🇺", language: "Russian", query: "говорю", lemma: "говори́ть", translation: "to speak, to talk", chips: ["present", "1st person", "singular"] },
        { flag: "🇷🇺", language: "Russian", query: "книги", lemma: "кни́га", translation: "book", chips: ["plural / genitive"], pos: "noun" },
        { flag: "🇷🇺", language: "Russian", query: "govorit", lemma: "говори́ть", translation: "to speak, to talk", chips: ["transliteration"] },
    ],
    "italian-verb-dictionary": [
        { flag: "🇮🇹", language: "Italian", query: "andiamo", lemma: "andare", translation: "to go", chips: ["present", "1st person plural"] },
        { flag: "🇮🇹", language: "Italian", query: "sono", lemma: "essere", translation: "to be", chips: ["present", "irregular"] },
        { flag: "🇺🇸", language: "Italian", query: "to choose", lemma: "scegliere", translation: "to choose", chips: ["English search", "irregular"] },
    ],
    "hebrew-verb-dictionary": [
        { flag: "🇮🇱", language: "Hebrew", query: "לומד", lemma: "ללמוד", translation: "to learn", chips: ["present", "masculine singular"], rtl: true },
        { flag: "🇮🇱", language: "Hebrew", query: "ואכלתי", lemma: "לאכול", translation: "to eat", chips: ["past", "1st person", "attached ו־ prefix"], rtl: true },
        { flag: "🇮🇱", language: "Hebrew", query: "lilmod", lemma: "ללמוד", translation: "to learn", chips: ["transliteration"] },
    ],
    "french-verb-dictionary": [
        { flag: "🇫🇷", language: "French", query: "parlons", lemma: "parler", translation: "to speak, to talk", chips: ["present", "1st person plural"] },
        { flag: "🇫🇷", language: "French", query: "était", lemma: "être", translation: "to be", chips: ["imperfect", "irregular"] },
        { flag: "🇫🇷", language: "French", query: "une", lemma: "un", translation: "a, an", chips: ["feminine"], pos: "article" },
    ],
    "portuguese-verb-dictionary": [
        { flag: "🇵🇹", language: "Portuguese", query: "falámos", lemma: "falar", translation: "to speak, to talk", chips: ["preterite", "1st person plural"] },
        { flag: "🇵🇹", language: "Portuguese", query: "são", lemma: "ser", translation: "to be", chips: ["present", "irregular"] },
        { flag: "🇵🇹", language: "Portuguese", query: "estamos", lemma: "estar", translation: "to be", chips: ["present", "1st person plural"] },
    ],
};

export function dictionaryPageMetadata(page: DictionaryPageConfig): Metadata {
    return buildPageMetadata({
        title: page.title,
        description: page.description,
        path: `/${page.slug}`,
    });
}

export function DictionaryLandingPage({ page }: { page: DictionaryPageConfig }) {
    const uiCopy = getSiteUiCopy("en");
    const pageUrl = new URL(`/${page.slug}`, studio.siteUrl).toString();
    const demoScenarios = demoScenariosBySlug[page.slug];
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.title,
            description: page.description,
            url: pageUrl,
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

            <section className="container pb-10 pt-3 sm:pb-14 sm:pt-8">
                <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-gray-50 p-6 shadow-outline sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
                    <div>
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
                            <Link href="/" className="hover:text-zinc-900">Verbik</Link>
                            <span aria-hidden="true" className="px-2">/</span>
                            <span>{page.name} dictionary</span>
                        </nav>
                        <small className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F1ECFF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A00F5]">
                            <span aria-hidden="true" className="text-sm leading-none">{page.flag}</span>
                            {page.name} · {page.entryCount.toLocaleString("en-US")} entries
                        </small>
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
                    <div
                        className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-[1.75rem] p-6 shadow-[0_24px_50px_rgba(23,5,56,0.28)] sm:p-8 lg:max-w-[440px]"
                        style={{
                            backgroundImage: `url('${app.heroWallpaper}'), linear-gradient(135deg, ${app.accentGradient.from}, ${app.accentGradient.via || app.accentGradient.to}, ${app.accentGradient.to})`,
                            backgroundSize: "cover, cover",
                            backgroundPosition: "center, center",
                        }}
                    >
                        <span className="pointer-events-none absolute inset-0 rounded-[1.75rem] shadow-outline-superbright" />
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-4 -top-8 select-none text-[9rem] font-black leading-none text-white opacity-10 -rotate-6"
                        >
                            {page.scriptGlyph}
                        </span>
                        <div className="relative mx-auto aspect-[920/2000] w-[62vw] max-w-[300px]">
                            {page.imageIsRaw ? (
                                <div className="absolute inset-0 rounded-[13%] bg-gradient-to-b from-zinc-700 via-black to-zinc-800 p-[1.5%] drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)]">
                                    <div className="relative h-full overflow-hidden rounded-[11.5%] bg-white">
                                        <Image
                                            src={page.image}
                                            alt={page.imageAlt}
                                            fill
                                            sizes="(max-width: 639px) 62vw, 300px"
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
                                    sizes="(max-width: 639px) 62vw, 300px"
                                    priority
                                    fetchPriority="high"
                                    className="object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)]"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-6 sm:py-8">
                <div
                    className="relative grid overflow-hidden rounded-3xl shadow-outline sm:grid-cols-3"
                    style={{ backgroundImage: "linear-gradient(135deg, #F1ECFF 0%, #FFFFFF 55%, #F1ECFF 100%)" }}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-3 -top-6 select-none text-[7rem] font-black leading-none text-[#5A00F5] opacity-[0.07] rotate-6"
                    >
                        {page.scriptGlyph}
                    </span>
                    <div className="border-b border-[#5A00F5]/10 p-6 text-center sm:border-b-0 sm:border-r">
                        <strong className="block text-3xl font-bold text-[#5A00F5] sm:text-4xl">{page.entryCount.toLocaleString("en-US")}</strong>
                        <span className="mt-1 block text-sm text-zinc-600">{page.name} dictionary entries</span>
                    </div>
                    <div className="border-b border-[#5A00F5]/10 p-6 text-center sm:border-b-0 sm:border-r">
                        <strong className="block text-3xl font-bold text-[#5A00F5] sm:text-4xl">{page.verbCount.toLocaleString("en-US")}</strong>
                        <span className="mt-1 block text-sm text-zinc-600">verb entries</span>
                    </div>
                    <div className="p-6 text-center">
                        <strong className="block text-3xl font-bold text-[#5A00F5] sm:text-4xl">Offline</strong>
                        <span className="mt-1 block text-sm text-zinc-600">core search and grammar</span>
                    </div>
                </div>
                <p className="mt-3 text-center text-xs text-zinc-500">Counts reflect Verbik 1.2 and may grow in later dictionary updates.</p>
            </section>

            <section className="container py-14 sm:py-20">
                <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
                    <small className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F1ECFF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A00F5]">
                        Inflected-form search
                    </small>
                    <h2 className="text-3xl font-bold text-zinc-900 md:text-5xl">Search the word you have—not the lemma you do not know</h2>
                </div>
                <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    {demoScenarios && <SearchDemo app={app} scenarios={demoScenarios} />}
                    <ul className="flex flex-col gap-4">
                        {page.searchExamples.map((example) => (
                            <li key={example.query} className="rounded-2xl bg-gray-50 p-5 shadow-outline sm:p-6">
                                <div className="flex flex-wrap items-center gap-2 text-base font-semibold">
                                    <span className="rounded-lg bg-white px-2.5 py-1 text-zinc-800 shadow-outline">{example.query}</span>
                                    <ArrowRight className="h-4 w-4 shrink-0 text-[#5A00F5]" weight="bold" />
                                    <span className="rounded-lg bg-[#F1ECFF] px-2.5 py-1 text-[#5A00F5]">{example.result}</span>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{example.explanation}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="container py-14 sm:py-20">
                <div
                    className="relative overflow-hidden rounded-[2rem] p-6 shadow-[0_28px_60px_rgba(23,5,56,0.3)] sm:p-10 lg:p-14"
                    style={{ background: twilightPanelBackground }}
                >
                    <span className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-outline-superbright" />
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-4 -top-10 select-none text-[11rem] font-black leading-none text-white opacity-[0.06] rotate-6"
                    >
                        {page.scriptGlyph}
                    </span>
                    <small className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9CCFF]">
                        Inside the {page.name} dictionary
                    </small>
                    <h2 className="relative mt-5 max-w-4xl text-3xl font-bold text-white sm:text-5xl">Grammar that follows the language</h2>
                    <div className="relative mt-10 grid gap-4 md:grid-cols-2">
                        {page.grammarFeatures.map((feature) => (
                            <article key={feature.title} className="rounded-2xl bg-white/5 p-5 shadow-outline-bright sm:p-6">
                                <div className="flex gap-3">
                                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6A3D]" weight="fill" />
                                    <div>
                                        <h3 className="font-semibold text-white">{feature.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-[#CFC3F2]">{feature.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container py-14 sm:py-20">
                <div className="mx-auto mb-10 max-w-4xl text-center">
                    <small className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F1ECFF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A00F5]">
                        FAQ
                    </small>
                    <h2 className="text-3xl font-bold text-zinc-900 sm:text-5xl">{page.name} dictionary questions</h2>
                </div>
                <div className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-4 shadow-outline sm:p-5 md:p-7">
                    <div className="flex flex-col gap-3">
                        {page.faq.map((item) => (
                            <details key={item.question} className="group rounded-2xl bg-white px-4 py-4 shadow-outline sm:px-5 md:px-6 md:py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zinc-900 sm:text-lg">
                                    <span>{item.question}</span>
                                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1ECFF] text-[#5A00F5] shadow-outline transition-transform group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="pt-4 leading-relaxed text-zinc-600">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container pb-14 pt-6 sm:pb-20 sm:pt-8">
                <h2 className="mb-6 text-center text-2xl font-bold text-zinc-900 sm:text-3xl">Explore all Verbik dictionaries</h2>
                <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
                    {dictionaryPages.filter((candidate) => candidate.slug !== page.slug).map((candidate) => (
                        <Link
                            key={candidate.slug}
                            href={`/${candidate.slug}`}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 p-5 shadow-outline transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_36px_rgba(12,34,74,0.08)]"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-2 -top-3 select-none text-[4.5rem] font-black leading-none text-[#5A00F5] opacity-[0.07] transition duration-300 rotate-6 group-hover:-rotate-3 group-hover:scale-110"
                            >
                                {candidate.scriptGlyph}
                            </span>
                            <span className="text-3xl" aria-hidden="true">{candidate.flag}</span>
                            <span className="mt-3 font-semibold text-zinc-900">{candidate.name} verb dictionary</span>
                            <span className="mt-1 text-sm text-zinc-600">{candidate.entryCount.toLocaleString("en-US")} entries</span>
                            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#5A00F5]">
                                Explore {candidate.name}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" weight="bold" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <DownloadCTA app={app} copy={uiCopy.downloadCta} />
        </div>
    );
}
