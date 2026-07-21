import Link from "next/link";
import { studio } from "../../config/studio";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Help & Support",
    description: "Verbik help for searching word forms, offline dictionaries, pronunciation, favorites, iCloud sync, the lifetime Pro unlock, restoration, and troubleshooting.",
    path: "/help",
});

const commonQuestions = [
    { question: "Does Verbik need an internet connection?", answer: "No for core use. Search, dictionary entries, grammar tables, favorites, recents, and synthetic pronunciation work offline. StoreKit purchases, feedback, and optional native-speaker recordings need a connection." },
    { question: "Is Verbik a subscription?", answer: "No. Verbik is free to download, and Verbik Pro is one non-consumable lifetime purchase. There is no trial or recurring subscription." },
    { question: "How do I restore Verbik Pro?", answer: "Open Verbik, choose More, then tap Restore purchases while signed into the Apple Account that made the purchase." },
    { question: "Can I report a wrong word or form?", answer: "Yes. Open More, choose Request a Feature or Fix, select Word correction, and include the word, language, and what appears wrong." },
];

export default function HelpIndex() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: commonQuestions.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <article className="scroll-mt-3 rounded-3xl bg-gray-50 p-5 shadow-outline sm:p-7 md:p-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <small className="mb-4 inline-flex font-semibold uppercase tracking-wider text-[#5A00F5]">Verbik Help Center</small>
            <h1 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">Help & Support</h1>
            <p className="mb-9 max-w-3xl text-base text-zinc-600 sm:text-lg">
                Learn how to search real word forms, use Verbik offline, manage favorites and purchases, and report a dictionary correction.
            </p>

            <div className="space-y-5 md:space-y-6">
                <section id="getting-started" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Getting started</h2>
                    <ol className="list-decimal space-y-2 pl-5 text-zinc-600">
                        <li>Open Search and choose Russian, Spanish, Italian, French, European Portuguese, or Hebrew.</li>
                        <li>Choose the language in which you want definitions where translated glosses are available.</li>
                        <li>Type a headword, conjugated or declined form, transliteration, or meaning.</li>
                        <li>Open a result to see why it matched, then review grammar, pronunciation, examples, frequency, and related entries.</li>
                        <li>Tap the star to keep an entry in Favorites.</li>
                    </ol>
                    <p className="mt-3 text-zinc-600">No account or sign-in is required.</p>
                </section>

                <section id="search" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Searching word forms</h2>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-600">
                        <li><strong className="text-zinc-800">Spanish, Italian, French, and European Portuguese:</strong> enter a conjugated form to find its infinitive and complete verb table.</li>
                        <li><strong className="text-zinc-800">Russian:</strong> search Cyrillic, an inflected form, an English meaning, or learner transliteration.</li>
                        <li><strong className="text-zinc-800">Hebrew:</strong> search with or without niqqud, common typed apostrophes, attached prefixes, or transliteration.</li>
                        <li><strong className="text-zinc-800">Meanings:</strong> use a translated meaning when you do not know the headword.</li>
                    </ul>
                    <p className="mt-3 text-zinc-600">A match label identifies the form or grammar that led to an entry when that information is available.</p>
                </section>

                <section id="offline" className="scroll-mt-24 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Offline use and privacy</h2>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-700">
                        <li>The six dictionaries, search index, grammar tables, favorites, recents, and synthetic speech are bundled or processed on-device.</li>
                        <li>Verbik has no account, ads, or third-party tracking SDK.</li>
                        <li>Favorites, recent entries, and language choices may sync through your Apple iCloud account.</li>
                        <li>Purchases, optional native audio, and feedback require a network connection.</li>
                    </ul>
                    <p className="mt-3 text-zinc-700">Read the complete <Link href="/privacy" className="font-medium text-[#5A00F5]">Privacy Policy</Link>.</p>
                </section>

                <section id="pronunciation" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Pronunciation, stress, and niqqud</h2>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Tap the speaker on an entry to listen.</li>
                        <li>Verbik prefers a compatible native-speaker recording when one is available and your device is online.</li>
                        <li>If no recording is available, Verbik uses Apple&apos;s on-device language-aware speech, including an IPA or Hebrew-aware fallback where supported.</li>
                        <li>Russian stress, transliteration, Hebrew niqqud, and IPA appear only where the source entry provides reliable data.</li>
                    </ul>
                </section>

                <section id="favorites" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Favorites, recents, and iCloud</h2>
                    <p className="text-zinc-600">
                        Tap an entry&apos;s star to add or remove it from Favorites. Verbik also keeps up to 50 recently viewed entries. If iCloud is available, favorites, recents, and language preferences can follow you to another device signed into the same Apple Account. Sync timing is controlled by Apple and may not be immediate.
                    </p>
                </section>

                <section id="pro" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Verbik Pro and purchases</h2>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-600">
                        <li>The free tier exposes a useful sample from each word category and language.</li>
                        <li>Verbik Pro unlocks every entry, grammar table, example, and pronunciation feature for one lifetime purchase.</li>
                        <li>There is no subscription or free trial.</li>
                        <li>To restore, open <strong className="text-zinc-800">More → Restore purchases</strong> while signed into the purchasing Apple Account.</li>
                        <li>Apple handles charges and refunds. Request a refund at <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#5A00F5]">reportaproblem.apple.com</a>.</li>
                    </ul>
                </section>

                <section id="troubleshooting" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Troubleshooting</h2>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-600">
                        <li><strong className="text-zinc-800">Dictionary will not open:</strong> force-close Verbik, reopen it, and use Retry if shown. If the bundled database still fails, reinstall the latest App Store version.</li>
                        <li><strong className="text-zinc-800">No result:</strong> remove punctuation, try the headword or transliteration, switch to the correct learning language, or search a translated meaning.</li>
                        <li><strong className="text-zinc-800">Audio will not play:</strong> raise media volume, stop another audio session, and connect to the internet if the entry uses a native recording.</li>
                        <li><strong className="text-zinc-800">Pro is missing:</strong> confirm the Apple Account, connect to the internet, then use More → Restore purchases.</li>
                        <li><strong className="text-zinc-800">Sync is delayed:</strong> confirm iCloud is enabled, then reopen Verbik on both devices.</li>
                    </ul>
                </section>

                <section id="corrections" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold text-zinc-900">Report a word correction or bug</h2>
                    <p className="mb-3 text-zinc-600">
                        Open <strong className="text-zinc-800">More → Request a Feature or Fix</strong>. For a word correction, include the language, headword or form, the section that looks wrong, and the expected correction or source if you have one.
                    </p>
                    <p className="text-zinc-600">The form sends your message with app/build, iOS, device model, and selected language details. Email is optional. See the Privacy Policy before sending.</p>
                </section>

                <section id="questions" className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-outline sm:p-6">
                    <h2 className="mb-4 text-xl font-semibold text-zinc-900">Common questions</h2>
                    <div className="space-y-3">
                        {commonQuestions.map((item) => (
                            <details key={item.question} className="group rounded-xl bg-gray-50 p-4 shadow-outline">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-zinc-900">
                                    {item.question}<span className="transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section id="contact" className="scroll-mt-24 rounded-2xl bg-zinc-950 p-5 text-white sm:p-6">
                    <h2 className="mb-3 text-xl font-semibold">Still need help?</h2>
                    <p className="text-zinc-300">
                        Email <a href={`mailto:${studio.supportEmail}?subject=Verbik support`} className="font-medium text-violet-300">{studio.supportEmail}</a>. Include your Verbik version, iOS version, device model, learning language, and a short description. Screenshots help when the issue is visual.
                    </p>
                </section>
            </div>
        </article>
    );
}
