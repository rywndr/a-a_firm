/**
 * Business sector image mappings
 * Centralized location for all business sector images
 */

export interface BusinessSector {
    name: string;
    image: string;
}

export const businessSectorImages: Record<string, string> = {
    mining: "/images/business-sectors/mining.webp",
    "oil-gas": "/images/business-sectors/oil-gas.webp",
    banking: "/images/business-sectors/banking.webp",
    "energy-renewables": "/images/business-sectors/energy-renewables.webp",
    "land-property": "/images/business-sectors/land-property.webp",
    fnb: "/images/business-sectors/fnb.webp",
    shipping: "/images/business-sectors/shipping.webp",
    fmcg: "/images/business-sectors/fmcg.webp",
    insurance: "/images/business-sectors/insurance.webp",
    agriculture: "/images/business-sectors/agriculture.webp",
    "leisure-hospitality": "/images/business-sectors/leisure-hospitality.webp",
    technology: "/images/business-sectors/technology.webp",
    forestry: "/images/business-sectors/forestry.webp",
    healthcare: "/images/business-sectors/healthcare.webp",
    automotive: "/images/business-sectors/automotive.webp",
    "media-entertainment": "/images/business-sectors/media-entertainment.webp",
    construction: "/images/business-sectors/construction.webp",
    retail: "/images/business-sectors/retail.webp",
};

/**
 * Get business sector image by sector key
 * @param key - Sector key (e.g., "mining", "oil-gas")
 * @returns Image path
 */
export function getBusinessSectorImage(key: string): string {
    return businessSectorImages[key] || "/images/business-sectors/default.webp";
}

/**
 * Create a sector key from a sector name
 * @param name - Sector name (e.g., "Oil & Gas", "Food & Beverages")
 * @returns Sector key (e.g., "oil-gas", "fnb")
 */
export function getSectorKey(name: string): string {
    const keyMap: Record<string, string> = {
        mining: "mining",
        "oil & gas": "oil-gas",
        banking: "banking",
        "energy & renewables": "energy-renewables",
        "land & property": "land-property",
        "food & beverages": "fnb",
        shipping: "shipping",
        fmcg: "fmcg",
        insurance: "insurance",
        agriculture: "agriculture",
        "leisure & hospitality": "leisure-hospitality",
        technology: "technology",
        forestry: "forestry",
        healthcare: "healthcare",
        automotive: "automotive",
        "media & entertainment": "media-entertainment",
        construction: "construction",
        retail: "retail",
    };

    return keyMap[name.toLowerCase()] || name.toLowerCase().replace(/\s+/g, "-");
}
