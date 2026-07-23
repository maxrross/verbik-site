import { studio } from "../../config/studio";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Privacy Policy",
    description: "How Verbik handles offline dictionary searches, privacy-preserving analytics and attribution, purchases, iCloud-synced preferences, feedback, and support email.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <div className="container pb-16 md:pb-24">
            <article className="mx-auto max-w-4xl rounded-3xl bg-gray-50 p-5 shadow-outline sm:p-7 md:p-10">
                <small className="mb-4 inline-flex font-semibold uppercase tracking-wider text-[#5A00F5]">Legal</small>
                <h1 className="mb-3 text-3xl font-bold text-zinc-900 md:text-4xl">Verbik Privacy Policy</h1>
                <p className="mb-10 text-zinc-500">Last updated: July 23, 2026</p>

                <div className="space-y-7 leading-relaxed text-zinc-700 md:space-y-9">
                    <section className="rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
                        <h2 className="mb-3 text-xl font-semibold text-zinc-900">The short version</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Verbik requires no account, includes no advertising, and does not track you across other companies&apos; apps or websites.</li>
                            <li>Core dictionary search, grammar tables, favorites, recents, and synthetic pronunciation work on your device.</li>
                            <li>Exact search terms, viewed words, and favorite entry identifiers are not sent to our analytics provider.</li>
                            <li>Favorites, recents, and language preferences may sync through your Apple iCloud account.</li>
                            <li>Privacy-restricted analytics measure launches, aggregate feature use, campaign performance, and purchases without collecting the advertising identifier.</li>
                            <li>We do not sell personal information or use it for advertising.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Scope and operator</h2>
                        <p>
                            This policy applies to the Verbik iOS app and the website at verbik.app. Verbik is developed and operated by {studio.developerName}. It does not apply to third-party websites or services that you open separately.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Core dictionary use</h2>
                        <p>
                            Verbik&apos;s Russian, Spanish, Italian, French, European Portuguese, and Hebrew dictionary database is bundled with the app. Search queries, viewed entries, grammar tables, favorites, and synthetic text-to-speech are processed locally. We do not receive exact search terms, headwords, dictionary entry identifiers, or favorite entry identifiers, and we do not maintain a server-side search history.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Data stored on your device and in iCloud</h2>
                        <p className="mb-3">Verbik stores the following app data so its features work:</p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>favorites and recently viewed entries;</li>
                            <li>selected learning and definition languages;</li>
                            <li>appearance and other app preferences;</li>
                            <li>a local successful-lookup counter used to decide when to ask for an App Store review; and</li>
                            <li>purchase entitlement information supplied by Apple.</li>
                        </ul>
                        <p className="mt-3">
                            Favorites, recent entries, and language preferences may be copied to Apple&apos;s iCloud key-value store when you are signed into iCloud and iCloud is available. Apple processes that data under its own privacy policy. You can stop iCloud access in your device settings and remove local app data by deleting Verbik. App Store transaction records remain with Apple.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Optional pronunciation downloads</h2>
                        <p>
                            On-device speech is available without sending the word to us. Some entries also offer an optional native-speaker recording from Wikimedia Commons. If you tap that recording, your device requests the audio file from upload.wikimedia.org. Wikimedia may receive ordinary request information such as your IP address and user agent under its own policies. Verbik temporarily downloads the audio for playback and does not build a server-side listening profile.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Analytics and campaign measurement</h2>
                        <p className="mb-3">
                            Verbik uses the Strict version of the AppsFlyer SDK for analytics and attribution. This version does not include IDFA collection or the AdSupport framework. Verbik does not request App Tracking Transparency permission and does not provide AppsFlyer with an account ID, email address, exact search term, viewed word, or favorite entry identifier.
                        </p>
                        <p className="mb-3">AppsFlyer receives limited product-interaction and purchase information:</p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>app launches and SDK operational information;</li>
                            <li>the selected dictionary language, whether a submitted search returned a result, and the number of results—but not the search text;</li>
                            <li>generic dictionary-entry-view and favorite-added events without the entry or word;</li>
                            <li>the Verbik Pro product identifier, price, currency, and quantity when a purchase succeeds; and</li>
                            <li>campaign and attribution information needed to measure whether advertising resulted in an install or purchase.</li>
                        </ul>
                        <p className="mt-3">
                            We use this information to understand aggregate feature use, measure campaign effectiveness, and compare advertising cost with purchase revenue. AppsFlyer&apos;s Advanced Privacy settings restrict partner data sharing for people who have not consented to tracking. Our AppLovin connection imports campaign cost data into AppsFlyer; AppLovin is not embedded as an advertising SDK in Verbik, and Verbik does not display AppLovin ads.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Feedback and word corrections</h2>
                        <p className="mb-3">
                            The in-app “Request a Feature or Fix” form is optional. When you press Send, it transmits:
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>the feedback category and message you entered;</li>
                            <li>your email address, only if you choose to provide it;</li>
                            <li>the Verbik version and build number;</li>
                            <li>your iOS version and device model identifier; and</li>
                            <li>the learning language selected in Verbik.</li>
                        </ul>
                        <p className="mt-3">
                            Our server processes the submission and forwards it to a private support channel hosted by Discord. We use it only to investigate the report, correct dictionary data, reply when requested, and improve Verbik. Do not include passwords or sensitive personal information. We retain support records only as long as reasonably needed for those purposes and operational records.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Purchases</h2>
                        <p>
                            Verbik Pro is a non-consumable in-app purchase processed by Apple through StoreKit. Apple handles your Apple Account, payment method, billing, refunds, and transaction records. Verbik receives only the product and entitlement information needed to unlock Pro; we do not receive your card number.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Website and support email</h2>
                        <p>
                            The website does not use an analytics or advertising tracker. Its hosting provider, Vercel, may process normal technical request data such as IP address, browser type, requested URL, and timestamps to deliver and secure the site. Emails sent to {studio.supportEmail} are routed through Cloudflare Email Routing and delivered to a Google Gmail mailbox. Those providers process messages and routing data under their own terms and policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">No tracking, ads, or sale of data</h2>
                        <p>
                            Verbik does not contain third-party advertising, collect IDFA, track you across other companies&apos; apps or websites, or sell or share personal information for cross-context behavioral advertising. Analytics and attribution are not used to build an advertising profile about you. Apple may provide developers with aggregated sales, crash, or diagnostic information according to your Apple settings; Apple controls that collection.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Retention, deletion, and your choices</h2>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>Delete favorites or recent entries in the app where controls are available, or delete Verbik to remove its local data.</li>
                            <li>Manage Verbik&apos;s iCloud access in iOS Settings.</li>
                            <li>Exact search terms and viewed words do not need a server deletion request because Verbik does not send them to us or AppsFlyer.</li>
                            <li>Do not submit the optional feedback form if you do not want its listed information sent.</li>
                            <li>Email us to request deletion of a feedback or support record you previously sent. We may need enough information to locate it and may retain records required for security or legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Children</h2>
                        <p>
                            Verbik is a general-audience reference app and is not directed to children under 13. We do not knowingly collect personal information from children. A parent or guardian who believes a child sent information through feedback may contact us for deletion.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Security and changes</h2>
                        <p>
                            We use reasonable safeguards, but no electronic transmission or storage system is completely secure. We may update this policy as Verbik changes. The revised date at the top will identify the latest version, and material changes will be communicated where required.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-2 text-xl font-semibold text-zinc-900">Contact</h2>
                        <p>
                            Privacy questions or deletion requests: <a href={`mailto:${studio.supportEmail}?subject=Verbik privacy request`} className="font-medium text-[#5A00F5]">{studio.supportEmail}</a>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
