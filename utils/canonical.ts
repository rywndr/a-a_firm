/**
 * Generates the canonical URL for a page
 * @param lang - The language code (en or id)
 * @param pathname - The pathname of the page
 * @returns The full canonical URL
 */
export function getCanonicalUrl(lang: "en" | "id", pathname: string): string {
    const baseUrl = "https://www.audyantonilaw.com";

    // Remove leading slash if present
    const cleanPathname = pathname.startsWith("/")
        ? pathname.slice(1)
        : pathname;

    // For homepage (empty pathname)
    if (!cleanPathname) {
        return `${baseUrl}/${lang}`;
    }

    // For all other pages
    return `${baseUrl}/${lang}/${cleanPathname}`;
}
