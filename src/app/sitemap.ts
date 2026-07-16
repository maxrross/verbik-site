import type { MetadataRoute } from "next";
import { getAllSlugs, getAllSupportSlugs } from "../config/apps";
import { studio } from "../config/studio";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: studio.siteUrl,
            lastModified: now,
        },
        {
            url: `${studio.siteUrl}/help`,
            lastModified: now,
        },
        {
            url: `${studio.siteUrl}/privacy`,
            lastModified: now,
        },
        {
            url: `${studio.siteUrl}/terms`,
            lastModified: now,
        },
    ];

    const appRoutes = getAllSlugs().map((slug) => ({
        url: `${studio.siteUrl}/${slug}`,
        lastModified: now,
    }));

    const helpRoutes = getAllSupportSlugs().map((slug) => ({
        url: `${studio.siteUrl}/help/${slug}`,
        lastModified: now,
    }));

    return [...baseRoutes, ...appRoutes, ...helpRoutes];
}
