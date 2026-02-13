/**
 * Partner image mappings
 * Centralized location for all partner profile images
 */
export const partnerImages: Record<string, string> = {
    "andelton-antoni": "/images/profiles/andelton-antoni.webp",
    "audy-rahmat": "/images/profiles/audy-rahmat.webp",
};

/**
 * Get partner image by ID
 * @param id - Partner ID
 * @returns Image path or undefined if not found
 */
export function getPartnerImage(id: string): string | undefined {
    return partnerImages[id];
}
