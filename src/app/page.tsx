import { preload } from "react-dom";
import { getAppBySlug, getSiteUiCopy } from "../config/apps";
import { Hero } from "../components/Hero";
import { ProblemPain } from "../components/ProblemPain";
import { HowItWorks } from "../components/HowItWorks";
import { FeatureGrid } from "../components/FeatureGrid";
import { LanguageDictionaryLinks } from "../components/LanguageDictionaryLinks";
import { SocialProof } from "../components/SocialProof";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { FAQ } from "../components/FAQ";
import { PrivacyBadge } from "../components/PrivacyBadge";
import { SupportCards } from "../components/SupportCards";
import { DownloadCTA } from "../components/DownloadCTA";
import { studio } from "../config/studio";

export default function HomePage() {
    const app = getAppBySlug("verbik", "en");
    const uiCopy = getSiteUiCopy("en");

    if (!app) {
        throw new Error("Verbik configuration is missing");
    }

    preload(app.heroWallpaper, { as: "image", fetchPriority: "high" });

    const pageUrl = new URL("/", studio.siteUrl).toString();
    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: app.appName,
        description: app.description,
        applicationCategory: "ReferenceApplication",
        operatingSystem: "iOS 17.0 or later",
        url: pageUrl,
        downloadUrl: app.appStoreUrl,
        sameAs: app.appStoreUrl,
        image: new URL(app.iconImage, studio.siteUrl).toString(),
        screenshot: app.galleryImages.map((image) => new URL(image, studio.siteUrl).toString()),
        softwareVersion: "1.2",
        featureList: app.features.map((feature) => feature.title),
        offers: [
            {
                "@type": "Offer",
                name: "Verbik",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
            {
                "@type": "Offer",
                name: "Verbik Pro Lifetime",
                price: "14.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
            },
        ],
        publisher: {
            "@type": "Organization",
            name: studio.developerName,
            url: studio.siteUrl,
        },
    };
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Verbik",
        url: studio.siteUrl,
        description: app.description,
        inLanguage: "en-US",
    };
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (app.faqItems ?? []).map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <div style={{ "--accent": app.accentColor, "--accent-light": app.accentColorLight } as React.CSSProperties}>
            {[softwareApplicationSchema, websiteSchema, faqSchema].map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Hero app={app} copy={uiCopy.hero} downloadLabel={uiCopy.downloadCta.buttonLabel} />
            <ProblemPain app={app} />
            <HowItWorks app={app} copy={uiCopy.workflow} />
            <FeatureGrid app={app} />
            <LanguageDictionaryLinks />
            <SocialProof app={app} />
            <FeatureShowcase app={app} />
            <FAQ app={app} />
            <PrivacyBadge message={app.privacyMessage} app={app} />
            <SupportCards app={app} />
            <DownloadCTA app={app} copy={uiCopy.downloadCta} />
        </div>
    );
}
