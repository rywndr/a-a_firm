import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A&A Counsellors at Law | Audy & Antoni",
    description:
        "AUDY & ANTONI Counsellors at Law - A trusted Indonesian law firm specializing in corporate law, litigation, dispute resolution, and commercial legal services. Unlocking potential, safeguarding success.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.audyantonilaw.com",
        siteName: "A&A Counsellors at Law",
        title: "A&A Counsellors at Law | Audy & Antoni",
        description:
            "AUDY & ANTONI Counsellors at Law - A trusted Indonesian law firm specializing in corporate law, litigation, dispute resolution, and commercial legal services.",
        images: [
            {
                url: "/images/backgrounds/batik-main-bg.webp",
                width: 1200,
                height: 630,
                alt: "A&A Counsellors at Law - Indonesian Law Firm",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "A&A Counsellors at Law | Audy & Antoni",
        description:
            "AUDY & ANTONI Counsellors at Law - A trusted Indonesian law firm specializing in corporate law, litigation, and dispute resolution.",
        images: ["/images/backgrounds/batik-main-bg.webp"],
    },
    alternates: {
        canonical: "https://www.audyantonilaw.com/en",
    },
};

export default function RootPage() {
    redirect("/en");
}
