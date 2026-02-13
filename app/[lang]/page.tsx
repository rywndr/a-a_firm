import { getDictionary } from "@/utils/get-dictionary";
import { getCanonicalUrl } from "@/utils/canonical";
import Link from "next/link";
import { FadeInHero } from "@/components/shared/FadeIn";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/hero/PageHero";
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
            canonical: getCanonicalUrl(lang, ""),
        },
    };
}

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <PageHero
            backgroundImage="/images/backgrounds/batik-main-bg.webp"
            title={dict.home.title}
            subtitle={dict.home.description}
            variant="home"
            footer={
                <FadeInHero delay={0.9}>
                    <Footer variant="transparent" />
                </FadeInHero>
            }
        >
            {/* CTA */}
            <FadeInHero delay={0.7} duration={0.8}>
                <div className="mt-8 flex flex-row flex-wrap gap-3 sm:gap-4 md:mt-14">
                    <Link
                        className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:px-10 sm:text-base"
                        href={`/${lang}/contact-us`}
                    >
                        {dict.navigation.contact}
                    </Link>
                    <Link
                        className="group inline-flex h-11 items-center justify-center px-4 text-sm font-medium text-white transition-all sm:h-14 sm:px-6 sm:text-base"
                        href={`/${lang}/practice-area`}
                    >
                        <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-white">
                            {dict.navigation.practices}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </Link>
                </div>
            </FadeInHero>
        </PageHero>
    );
}
