import { studio } from "../../config/studio";
import { apps } from "../../config/apps";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Terms of Use",
    description: "Review Grove's terms for app usage, subscriptions, and user responsibilities.",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <div className="container pb-16 md:pb-24">
            <article className="rounded-3xl bg-gray-50 shadow-outline p-5 sm:p-7 md:p-10 max-w-4xl mx-auto">
                <small className="inline-flex gap-2 font-semibold uppercase tracking-wider text-[#007AFF] mb-4">
                    Legal
                </small>
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">Terms of Service</h1>
                <p className="text-zinc-500 mb-10">Last updated: February 24, 2026</p>

                <div className="space-y-6 md:space-y-8 text-zinc-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using our apps and website, you agree to these Terms of Service. If you do not agree, do not use the services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">The Apps</h2>
                        <p>
                            Our apps help you generate, organize, and share content using on-device workflows and Apple platform capabilities.
                        </p>
                    </section>

                    <section className="rounded-2xl bg-[#EEF7FF] border border-[#CFE6FF] p-5 sm:p-6">
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Data Use and Offline Processing</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We do not use your personal content to train AI models.</li>
                            <li>We do not send your personal content to external AI providers.</li>
                            <li>Your personal content stays on your device for AI processing.</li>
                            <li>Core app workflows are designed to run completely offline on supported devices.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Apps Covered by These Terms</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {apps.map((app) => (
                                <li key={app.slug}>
                                    <strong>{app.appName}</strong>: {app.tagline}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Accounts and Permissions</h2>
                        <p className="mb-3">
                            Most apps do not require account creation. Some features require device permissions, such as Photos or microphone.
                        </p>
                        <p>
                            You can grant or revoke permissions in iOS Settings. Features may not function without required permissions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Subscriptions and Purchases</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Purchases are processed by Apple through the App Store.</li>
                            <li>Pricing, free trials, billing period, and renewal terms are shown before purchase.</li>
                            <li>Subscriptions auto-renew unless canceled at least 24 hours before the current period ends.</li>
                            <li>Refunds and billing disputes are handled by Apple under Apple policies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Your Content and Responsibilities</h2>
                        <p className="mb-3">
                            You are responsible for the content you create, edit, or share using our apps.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Use the apps only for lawful purposes.</li>
                            <li>Only use materials you own or have rights to use.</li>
                            <li>Do not infringe privacy, publicity, or copyright rights.</li>
                            <li>Follow the rules of third-party platforms you post to.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">AI and Generated Content</h2>
                        <p className="mb-3">
                            AI suggestions and generated outputs may be inaccurate or incomplete. You are responsible for reviewing outputs before sharing or relying on them.
                        </p>
                        <p>
                            Our AI processing is designed to run on-device, and we do not send your personal content to external AI providers or use it to train AI models.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Intellectual Property</h2>
                        <p>
                            The apps, code, designs, and features are owned by us or our licensors and protected by law. You retain rights to your own content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">License to Use the Apps</h2>
                        <p>
                            We grant you a personal, limited, non-exclusive, non-transferable, revocable license to use the apps for personal, non-commercial use, subject to these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Prohibited Conduct</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Do not reverse engineer the apps except as allowed by law.</li>
                            <li>Do not circumvent security features or access services in unauthorized ways.</li>
                            <li>Do not use the apps to distribute malware or disrupt operations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Third-Party Services</h2>
                        <p>
                            Our apps may integrate with third-party services you choose to use. Those services are governed by their own terms and policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Availability and Updates</h2>
                        <p>
                            We may change, suspend, or discontinue features at any time and may update these Terms. Continued use after updates means you accept the revised Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Disclaimers</h2>
                        <p>
                            THE APPS ARE PROVIDED AS IS AND AS AVAILABLE, WITHOUT WARRANTIES OF ANY KIND, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA, PROFITS, OR GOODWILL ARISING FROM USE OF THE APPS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 mb-2">Apple Terms</h2>
                        <p>
                            Your use of iOS apps is also subject to Apple terms, including Apple Media Services Terms and Apple Standard EULA where applicable.
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
