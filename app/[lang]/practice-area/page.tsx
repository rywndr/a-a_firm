import { getDictionary } from "@/utils/get-dictionary";
import { getCanonicalUrl } from "@/utils/canonical";
import Image from "next/image";
import BatikFooter from "@/components/layout/BatikFooter";
import PracticeAreaClient from "@/components/shared/PracticeAreaClient";
import PageHero from "@/components/hero/PageHero";
import BusinessSectors from "@/components/shared/BusinessSectors";
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";

    return {
        alternates: {
            canonical: getCanonicalUrl(lang, "practice-area"),
        },
    };
}

export default async function PracticeArea({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen">
            <PageHero
                backgroundImage="/images/backgrounds/batik-practices-bg.webp"
                title={dict.practices.title}
                subtitle={dict.practices.subtitle}
            />

            {/* Practice Areas */}
            <div className="relative" style={{ clipPath: "inset(0)" }}>
                {/* Background Image */}
                <div
                    className="fixed inset-0 pointer-events-none z-0"
                    aria-hidden="true"
                >
                    <Image
                        src="/images/backgrounds/CONTENT-BG-3.webp"
                        alt=""
                        fill
                        className="object-cover opacity-[0.07]"
                    />
                </div>

                <PracticeAreaClient
                    headerText={dict.practices.headerText}
                    corporateTitle={dict.practices.corporate.title}
                    corporateAreas={dict.practices.corporate.areas}
                    litigationTitle={dict.practices.litigation.title}
                    litigationAreas={dict.practices.litigation.areas}
                    learnMoreText={dict.practices.learnMore}
                />
            </div>

            <BusinessSectors
                label={dict.practices.sectors.label}
                title={dict.practices.sectors.title}
                description={dict.practices.sectors.description}
                sectors={dict.practices.sectors.list}
            />

            <BatikFooter />
        </div>
    );
}
