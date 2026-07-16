import type { Metadata } from "next";
import { studio } from "./studio";

export const defaultSiteTitle = "Verbik — Offline Dictionary for iPhone";
export const defaultSiteDescription = "Search Russian, Spanish, Italian, and Hebrew by the form you actually see. Verbik explains the match and works offline.";

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
        twitter: { card: "summary", title, description },
    };
}
