import { studio } from "../../config/studio";
import { apps } from "../../config/apps";
import { buildPageMetadata } from "../../config/metadata";

export const metadata = buildPageMetadata({
    title: "Help Center",
    description: "Browse support docs, troubleshooting guides, and account help for Grove apps.",
    path: "/help",
});

export default function HelpIndex() {
    return (
        <div className="scroll-mt-3 sm:scroll-mt-5 rounded-3xl bg-gray-50 shadow-outline p-5 sm:p-7 md:p-10">
            <small className="inline-flex gap-2 font-semibold uppercase tracking-wider text-[#007AFF] mb-4">
                Help Center
            </small>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Help & Support</h1>
            <p className="text-zinc-600 text-base sm:text-lg mb-8 md:mb-10 max-w-3xl">
                Shared support for all Grove apps. App-specific help pages below are generated from the live app registry so this stays current as new apps ship.
            </p>

            <div className="space-y-5 md:space-y-6">
                <section className="rounded-2xl bg-[#EEF7FF] border border-[#CFE6FF] p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Privacy and Offline Guarantee</h2>
                    <ul className="list-disc pl-5 text-zinc-700 space-y-2">
                        <li>We do not use your personal content to train any AI model.</li>
                        <li>We do not send your personal content to any AI provider.</li>
                        <li>Your data stays on your device and does not leave your device for AI processing.</li>
                        <li>Core app workflows are designed to run fully offline on supported devices.</li>
                    </ul>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Getting Started</h2>
                    <ol className="list-decimal pl-5 text-zinc-600 space-y-2">
                        <li>Open the app you want to use and grant required permissions.</li>
                        <li>Choose a workflow or template and generate your first output.</li>
                        <li>Review results, edit where needed, and export/share.</li>
                    </ol>
                    <p className="text-zinc-600 mt-3">
                        Most apps do not require sign-in. If account features exist, they are explained in-app.
                    </p>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Permissions and Data</h2>
                    <ul className="list-disc pl-5 text-zinc-600 space-y-2">
                        <li>Check iOS permission settings for the app if content is missing.</li>
                        <li>When iCloud is enabled, downloads may take time before files are available.</li>
                        <li>App preferences and usage counters are stored locally on your device.</li>
                        <li>We do not send your personal content to any AI provider.</li>
                    </ul>
                    <p className="text-zinc-600 mt-3">
                        More details: <a href="/privacy" className="text-[#007AFF] font-medium">Privacy Policy</a>
                    </p>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Purchases and Billing</h2>
                    <p className="text-zinc-600 mb-3">
                        Purchases are managed by Apple through the App Store.
                    </p>
                    <ul className="list-disc pl-5 text-zinc-600 space-y-2">
                        <li>Most Grove apps use one-time unlock purchases (non-consumable), not recurring subscriptions.</li>
                        <li>Use App Store → profile to restore prior purchases on a reinstall or new device.</li>
                        <li>Refund requests are handled by Apple.</li>
                    </ul>
                    <p className="text-zinc-600 mt-3">
                        More details: <a href="/terms" className="text-[#007AFF] font-medium">Terms of Service</a>
                    </p>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">App-Specific Help</h2>
                    <p className="text-zinc-600 mb-4">
                        These pages are generated from the main app config and expand as we publish new apps.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {apps.map((app) => (
                            <div key={app.slug} className="rounded-xl border border-zinc-200 bg-white p-4">
                                <h3 className="font-semibold text-zinc-900">{app.appName}</h3>
                                <p className="text-sm text-zinc-600 mt-1">{app.tagline}</p>
                                <a href={`/help/${app.slug}`} className="inline-block mt-3 text-sm font-medium text-[#007AFF]">
                                    Open {app.appName} help
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Troubleshooting</h2>
                    <ul className="list-disc pl-5 text-zinc-600 space-y-2">
                        <li>Force close and reopen the app.</li>
                        <li>Restart your device.</li>
                        <li>Update iOS and update the app to the latest version.</li>
                        <li>If a feature depends on device capability, behavior may vary by model.</li>
                    </ul>
                </section>

                <section className="rounded-2xl bg-white shadow-outline p-5 sm:p-6">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact</h2>
                    <p className="text-zinc-600">
                        Email <a href={`mailto:${studio.supportEmail}`} className="text-[#007AFF] font-medium">{studio.supportEmail}</a> and include your app name, iOS version, device model, and a short issue description.
                    </p>
                </section>
            </div>
        </div>
    );
}
