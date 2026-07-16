import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { studio } from "../config/studio";
import { defaultSiteDescription, defaultSiteTitle } from "../config/metadata";

export const metadata: Metadata = {
    metadataBase: new URL(studio.siteUrl),
    title: { default: defaultSiteTitle, template: `%s — Verbik` },
    description: defaultSiteDescription,
    applicationName: "Verbik",
    authors: [{ name: studio.organizationName }],
    creator: studio.organizationName,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: studio.siteUrl,
        siteName: "Verbik",
        title: defaultSiteTitle,
        description: defaultSiteDescription,
        images: [{ url: "/app-icons/verbik.png", width: 1024, height: 1024, alt: "Verbik app icon" }],
    },
    twitter: {
        card: "summary",
        title: defaultSiteTitle,
        description: defaultSiteDescription,
        images: ["/app-icons/verbik.png"],
    },
    robots: { index: true, follow: true },
    icons: {
        icon: [{ url: "/app-icons/verbik.png", type: "image/png" }],
        apple: [{ url: "/app-icons/verbik.png", type: "image/png" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex min-h-dvh flex-col antialiased text-base text-zinc-600 leading-relaxed selection:bg-black selection:text-white">
                <SiteNav />
                <main className="flex-1 flex flex-col w-full">{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
