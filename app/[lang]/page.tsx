import { getDictionary } from "@/utils/get-dictionary";
import { getCanonicalUrl } from "@/utils/canonical";
import Image from "next/image";
import Link from "next/link";
import { FadeInHero } from "@/components/FadeIn";
import Footer from "@/components/Footer";
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
        <div className="relative flex min-h-screen flex-col overflow-hidden font-sans text-white">
            {/* Batik bg */}
            <div className="absolute inset-0 -z-10 bg-black">
                <Image
                    src="/images/backgrounds/batik-main-bg.webp"
                    alt="Batik Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            <main className="relative z-10 flex flex-1 items-center">
                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12">
                    {/* Top line */}
                    <FadeInHero delay={0.2} direction="left" distance={50}>
                        <div className="mb-8 h-px w-32 bg-white/60 md:mb-10 md:w-48" />
                    </FadeInHero>

                    {/* Main heading */}
                    <FadeInHero delay={0.3} duration={0.8}>
                        <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.15] tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                            {dict.home.title}
                        </h1>
                    </FadeInHero>

                    {/* Sub */}
                    <FadeInHero delay={0.5} duration={0.8}>
                        <p className="mt-6 max-w-2xl font-serif text-lg font-light italic leading-relaxed text-white/90 drop-shadow-lg md:mt-8 md:text-xl lg:text-2xl">
                            {dict.home.description}
                        </p>
                    </FadeInHero>

                    {/* CTA */}
                    <FadeInHero delay={0.7} duration={0.8}>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-14">
                            <Link
                                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95"
                                href={`/${lang}/contact-us`}
                            >
                                {dict.navigation.contact}
                            </Link>
                            <Link
                                className="group inline-flex h-14 items-center justify-center px-6 text-base font-medium text-white transition-all"
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
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 pb-8 pt-4">
                <div className="container mx-auto max-w-7xl px-6 md:px-12">
                    <FadeInHero delay={0.9}>
                        <Footer variant="transparent" />
                    </FadeInHero>
                </div>
            </footer>
        </div>
    );
}
