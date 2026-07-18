import type { Metadata } from "next";
import { studio } from "./studio";

export const defaultSiteTitle = "Verbik: Offline Verb Dictionary for iPhone";
export const defaultSiteDescription = "An offline Russian, Spanish, Italian, French, European Portuguese, and Hebrew verb dictionary for iPhone. Search any word form and see complete grammar tables.";

export function buildPageMetadata({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    const normalizedPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
    const absoluteUrl = new URL(normalizedPath, studio.siteUrl).toString();
    return {
        title,
        description,
        alternates: { canonical: normalizedPath },
        openGraph: {
            type: "website",
            url: absoluteUrl,
            siteName: "Verbik",
            title,
            description,
        },
        twitter: { card: "summary_large_image", title, description },
    };
}
