import { studio } from "../../config/studio";
import { apps } from "../../config/apps";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Privacy Policy",
    description: "Read how Verbik handles permissions, local data, and on-device processing.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <div className="container pb-16 md:pb-24">
            <article className="rounded-3xl bg-gray-50 shadow-outline p-5 sm:p-7 md:p-10 max-w-4xl mx-auto">
                <small className="inline-flex gap-2 font-semibold uppercase tracking-wider text-[#007AFF] mb-4">
                    Legal
                </small>
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">Privacy Policy</h1>
                <p className="text-zinc-500 mb-10">Last updated: July 9, 2026</p>

                <div className="space-y-6 md:space-y-8 text-zinc-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Summary</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Most of our iOS apps do not require account creation or sign-in.</li>
                            <li>Personal content is processed on-device and does not leave your device for AI processing.</li>
                            <li>We do not send your personal content to any AI provider.</li>
                            <li>We do not use your personal content to train AI models.</li>
                            <li>Core app workflows are designed to run fully offline on supported devices.</li>
                            <li>We do not sell your personal information or run third-party ad tracking SDKs.</li>
                        </ul>
                    </section>

                    <section className="rounded-2xl bg-[#EEF7FF] border border-[#CFE6FF] p-5 sm:p-6">
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">On-Device and Offline Guarantee</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Your personal content stays on your device.</li>
                            <li>Your personal content is not sent to external AI providers.</li>
                            <li>We do not use your content for AI model training.</li>
                            <li>Core AI features are designed to run completely offline on supported devices.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Apps Covered by This Policy</h2>
                        <p className="mb-3">
                            This policy applies to Verbik.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            {apps.map((app) => (
                                <li key={app.slug}>
                                    <strong>{app.appName}</strong>: {app.tagline}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Information We Access</h2>
                        <p className="mb-3">
                            Depending on the app and features you use, we may request access to device permissions such as Photos, microphone, or files.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Content is processed on your device to provide core app functionality.</li>
                            <li>We do not upload your personal photos, recordings, or documents to our servers for analysis.</li>
                            <li>When iCloud is enabled, Apple may download originals to your device as needed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">App Data Stored On Device</h2>
                        <p className="mb-3">
                            Our apps may store local data to function properly, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>App preferences and settings</li>
                            <li>Feature usage counters (including free-tier limits where applicable)</li>
                            <li>Local generation history or recent activity</li>
                        </ul>
                        <p className="mt-3">
                            This data is stored in local app storage unless you explicitly share details with support.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">AI Features</h2>
                        <p>
                            Some apps include AI-assisted features. These features are designed to run on-device via Apple-provided frameworks, without sending your personal content to external AI providers. Availability may vary by device, iOS version, and Apple settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Purchases and Subscriptions</h2>
                        <p>
                            If an app offers subscriptions or in-app purchases, payments are processed by Apple through the App Store. We do not receive payment card information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Analytics, Tracking, and Advertising</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We do not sell personal information.</li>
                            <li>We do not run third-party advertising SDKs in our apps.</li>
                            <li>We do not intentionally track you across apps and websites.</li>
                        </ul>
                        <p className="mt-3">
                            Apple may provide diagnostic information to developers depending on your device settings. Apple controls those systems under its own policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Data Retention and Deletion</h2>
                        <p>
                            Because data is primarily stored on-device, you can remove most local data by deleting the app. Subscription and billing records are maintained by Apple as part of your App Store account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Children&apos;s Privacy</h2>
                        <p>
                            Our apps are not directed to children under 13, and we do not knowingly collect personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised Last updated date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Contact</h2>
                        <p>
                            Questions: <a href={`mailto:${studio.supportEmail}`} className="text-[#007AFF] font-medium">{studio.supportEmail}</a>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
