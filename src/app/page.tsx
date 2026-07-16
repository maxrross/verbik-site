import { preload } from "react-dom";
import { cookies, headers } from "next/headers";
import {
    getAppBySlug,
    getSiteUiCopy,
    resolveSiteLocale,
} from "../config/apps";
import { Hero } from "../components/Hero";
import { ProblemPain } from "../components/ProblemPain";
import { HowItWorks } from "../components/HowItWorks";
import { FeatureGrid } from "../components/FeatureGrid";
import { SocialProof } from "../components/SocialProof";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { FAQ } from "../components/FAQ";
import { PrivacyBadge } from "../components/PrivacyBadge";
import { SupportCards } from "../components/SupportCards";
import { DownloadCTA } from "../components/DownloadCTA";
import { studio } from "../config/studio";

export default async function HomePage({
    searchParams,
}: {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const cookieStore = await cookies();
    const headerStore = await headers();
    const locale = resolveSiteLocale({
        queryLocale: resolvedSearchParams.lang ?? resolvedSearchParams.locale,
        cookieLocale: cookieStore.get("site_locale")?.value,
        acceptLanguage: headerStore.get("accept-language"),
    });
    const app = getAppBySlug("verbik", locale);
    const uiCopy = getSiteUiCopy(locale);

    if (!app) {
        throw new Error("Verbik configuration is missing");
    }

    for (const imageSrc of [app.iconImage, app.heroWallpaper, app.heroPreview, ...app.galleryImages, ...(app.detailFeatures?.map((feature) => feature.imageSrc) ?? [])]) {
        preload(imageSrc, { as: "image" });
    }

    const pageUrl = new URL(locale === "es" ? "/?lang=es" : "/", studio.siteUrl).toString();
    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: app.appName,
        description: app.description,
        applicationCategory: "ReferenceApplication",
        operatingSystem: "iOS 17 or later",
        url: pageUrl,
        downloadUrl: app.appStoreUrl,
        image: new URL(app.iconImage, studio.siteUrl).toString(),
        offers: {
            "@type": "Offer",
            price: "14.99",
            priceCurrency: "USD",
        },
        publisher: {
            "@type": "Organization",
            name: studio.organizationName,
            url: studio.siteUrl,
        },
    };

    return (
        <div style={{ "--accent": app.accentColor, "--accent-light": app.accentColorLight } as React.CSSProperties}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
            <Hero app={app} copy={uiCopy.hero} downloadLabel={uiCopy.downloadCta.buttonLabel} />
            <ProblemPain app={app} />
            <HowItWorks app={app} copy={uiCopy.workflow} />
            <FeatureGrid app={app} />
            <SocialProof app={app} />
            <FeatureShowcase app={app} />
            <FAQ app={app} />
            <PrivacyBadge message={app.privacyMessage} app={app} />
            <SupportCards app={app} />
            <DownloadCTA app={app} copy={uiCopy.downloadCta} />
        </div>
    );
}
