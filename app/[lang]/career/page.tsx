import { getDictionary } from "@/utils/get-dictionary";
import { getCanonicalUrl } from "@/utils/canonical";
import Image from "next/image";
import BatikFooter from "@/components/layout/BatikFooter";
import FadeIn, { FadeInHero } from "@/components/shared/FadeIn";
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
            canonical: getCanonicalUrl(lang, "career"),
        },
    };
}

export default async function Career({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    const contentBgImage = "/images/backgrounds/CONTENT-BG-4.webp";

    return (
        <div className="min-h-screen">
            <PageHero
                backgroundImage="/images/backgrounds/career-main-bg.webp"
                title={dict.career.title}
                subtitle={dict.career.subtitle}
            >
                {/* Email */}
                <FadeInHero delay={0.7} duration={0.8}>
                    <div className="mt-12 md:mt-16">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                            {dict.career.emailLabel}
                        </p>
                        <a
                            href={`mailto:${dict.career.email}`}
                            className="font-serif text-2xl font-light text-white transition-colors hover:text-white/80 md:text-3xl"
                        >
                            {dict.career.email}
                        </a>
                    </div>
                </FadeInHero>
            </PageHero>

            {/* Content Section */}
            <section className="relative bg-white">
                {contentBgImage && (
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src={contentBgImage}
                            alt=""
                            fill
                            className="object-cover opacity-[0.05]"
                        />
                    </div>
                )}

                <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Header & Description */}
                        <FadeIn direction="up" distance={30}>
                            <div>
                                <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    {dict.career.headerText}
                                </h2>
                                <div className="mt-6 h-px w-24 bg-gray-900" />
                                <p className="mt-8 text-lg leading-relaxed text-gray-600">
                                    {dict.career.description}
                                </p>
                            </div>
                        </FadeIn>

                        {/* How to Apply */}
                        <FadeIn delay={0.2} direction="up" distance={30}>
                            <div className="rounded-2xl border border-gray-100 p-8">
                                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                                    {dict.career.applyTitle}
                                </h3>
                                <p className="text-base leading-relaxed text-gray-600">
                                    {dict.career.applyDescription}
                                </p>
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                                        {dict.career.emailLabel}
                                    </p>
                                    <a
                                        href={`mailto:${dict.career.email}`}
                                        className="text-lg font-medium text-gray-900 hover:underline"
                                    >
                                        {dict.career.email}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
