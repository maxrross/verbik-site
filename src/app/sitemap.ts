import type { MetadataRoute } from "next";
import { studio } from "../config/studio";
import { dictionaryPages } from "../config/languages";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-07-17T12:00:00-04:00");
    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: studio.siteUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${studio.siteUrl}/help`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${studio.siteUrl}/privacy`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${studio.siteUrl}/terms`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const dictionaryRoutes = dictionaryPages.map((page) => ({
        url: `${studio.siteUrl}/${page.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...baseRoutes, ...dictionaryRoutes];
}
