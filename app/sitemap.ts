import { MetadataRoute } from "next";

const BASE_URL = "https://www.audyantonilaw.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = ["en", "id"];

    const routes = [
        "",
        "/about-the-firm",
        "/our-people",
        "/practice-area",
        "/career",
        "/contact-us",
    ];

    const partnerIds = ["audy-rahmat", "andelton-antoni"];

    const sitemap: MetadataRoute.Sitemap = [];

    // Add main routes for each language
    for (const lang of languages) {
        for (const route of routes) {
            sitemap.push({
                url: `${BASE_URL}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: route === "" ? "weekly" : "monthly",
                priority: route === "" ? 1.0 : 0.8,
            });
        }

        // Add individual partner pages
        for (const partnerId of partnerIds) {
            sitemap.push({
                url: `${BASE_URL}/${lang}/our-people/${partnerId}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
            });
        }
    }

    // Add root redirect
    sitemap.push({
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    });

    return sitemap;
}
