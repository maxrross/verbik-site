import { studio } from "../../config/studio";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Terms of Use",
    description: "Terms for using the Verbik dictionary app and website, including the free tier, lifetime Pro purchase, dictionary content, and Apple services.",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <div className="container pb-16 md:pb-24">
            <article className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-5 shadow-outline sm:p-7 md:p-10">
                <small className="mb-4 inline-flex font-semibold uppercase tracking-wider text-[#5A00F5]">Legal</small>
                <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">Verbik Terms of Use</h1>
                <p className="mb-10 text-zinc-500">Last updated: July 16, 2026</p>

                <div className="space-y-7 leading-relaxed text-zinc-700 md:space-y-9">
                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Agreement</h2>
                        <p>
                            These Terms govern your use of the Verbik iOS app and verbik.app, operated by {studio.developerName}. By downloading, purchasing, or using Verbik, you agree to these Terms and the <a className="font-medium text-[#5A00F5]" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple Standard End User License Agreement</a>. If they conflict, Apple&apos;s terms control where required.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">What Verbik provides</h2>
                        <p>
                            Verbik is a language-reference app for searching Russian, Spanish, Italian, and Hebrew words and forms, viewing definitions and grammar, listening to pronunciation, and saving favorites and recents. It is a reference tool, not a course, translator for every sentence, or guarantee of linguistic correctness.
                        </p>
                    </section>

                    <section className="rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
                        <h2 className="mb-3 text-xl font-semibold text-zinc-900">Free access and Verbik Pro</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Verbik is free to download and includes a limited sample of dictionary entries.</li>
                            <li>Verbik Pro is one non-consumable lifetime unlock. It is not a subscription and has no free trial.</li>
                            <li>The price and local currency shown by the App Store at purchase time control. The current U.S. price is $14.99.</li>
                            <li>Apple processes payment, purchase restoration, taxes, family or account eligibility, and refund requests.</li>
                            <li>A “lifetime” unlock means access for as long as Verbik remains offered and technically supported; it does not promise perpetual availability of every device, operating system, source, or third-party service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">License</h2>
                        <p>
                            Subject to these Terms and Apple&apos;s rules, you receive a personal, limited, non-exclusive, non-transferable, revocable license to use Verbik on Apple devices you own or control as permitted by the App Store. You may not sell, rent, sublicense, redistribute, scrape, bulk-extract, or create a competing database from Verbik except where law expressly permits it.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Dictionary content and accuracy</h2>
                        <p>
                            Dictionary entries combine licensed or permissibly sourced lexical data, source attributions, normalization, search indexes, and Verbik presentation. Languages change, source data can disagree, and entries, examples, stress, transliteration, pronunciation, meanings, or forms may be incomplete or incorrect. Verify important academic, professional, legal, medical, or safety-critical language with an appropriate authoritative source or qualified speaker.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Offline and third-party services</h2>
                        <p>
                            Core dictionary features are designed to work offline. App Store purchasing and restoration use Apple services. Optional native-speaker audio can be downloaded from Wikimedia Commons, and feedback or support uses hosting, email, and support providers. Those services may be unavailable and have their own terms. Verbik does not control them.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Feedback</h2>
                        <p>
                            You may send bug reports, feature requests, and word corrections. Do not send confidential or unlawful material. You keep ownership of your message, but grant us a worldwide, royalty-free permission to use it to investigate, correct, support, and improve Verbik. We are not required to implement a suggestion or compensate you for it.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Acceptable use</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Do not interfere with, probe, overload, or bypass security or purchase controls.</li>
                            <li>Do not use automated systems to extract substantial portions of Verbik or its website.</li>
                            <li>Do not use support or feedback channels for spam, harassment, malware, or unlawful content.</li>
                            <li>Comply with applicable law and third-party rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Intellectual property</h2>
                        <p>
                            Verbik&apos;s app code, design, original text, branding, and compiled presentation are owned by {studio.developerName} or applicable licensors. Source dictionary and audio material remains subject to its original license and attribution. No trademark or ownership right transfers to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Changes and availability</h2>
                        <p>
                            We may add, correct, remove, or change entries and features; release updates; change future pricing; or discontinue services. Purchased access will not be converted into a recurring subscription without a separate, affirmative purchase. Some updates may require a newer iOS version or device.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Disclaimers</h2>
                        <p className="uppercase">
                            To the maximum extent permitted by law, Verbik and the website are provided “as is” and “as available,” without warranties of accuracy, completeness, availability, merchantability, fitness for a particular purpose, or non-infringement. Some jurisdictions do not allow certain exclusions, so they may not apply to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Limitation of liability</h2>
                        <p className="uppercase">
                            To the maximum extent permitted by law, {studio.developerName} and licensors will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost data, profits, or goodwill arising from Verbik. Any aggregate liability will not exceed the amount you paid for Verbik during the twelve months before the claim. Rights that cannot legally be limited remain unaffected.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Termination and changes to these Terms</h2>
                        <p>
                            Your license ends if you materially violate these Terms. Provisions that should survive termination will survive. We may update these Terms as Verbik changes; the date above identifies the current version. Continued use after an update constitutes acceptance where permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Contact</h2>
                        <p>
                            Questions: <a href={`mailto:${studio.supportEmail}?subject=Verbik terms question`} className="font-medium text-[#5A00F5]">{studio.supportEmail}</a>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
