import { getDictionary } from "@/utils/get-dictionary";
import Image from "next/image";
import BatikFooter from "@/components/BatikFooter";
import FadeIn, { FadeInHero } from "@/components/FadeIn";

const CONTENT_BG_IMAGE = "/images/backgrounds/CONTENT-BG.webp";

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen">
            {/* Hero section */}
            <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-screen">
                <div className="absolute inset-0 -z-10 bg-black">
                    <Image
                        src="/images/backgrounds/batik-about-bg.webp"
                        alt="Batik Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                </div>

                <div className="container mx-auto max-w-7xl px-6 md:px-12">
                    <div className="max-w-4xl pt-20">
                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div className="mb-8 h-px w-full max-w-2xl bg-white/40" />
                        </FadeInHero>

                        {/* Main heading */}
                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                {dict.about.title}
                            </h1>
                        </FadeInHero>

                        {/* Sub */}
                        <FadeInHero delay={0.5} duration={0.8}>
                            <p className="mt-8 max-w-xl text-lg font-light italic leading-relaxed text-white/90 md:text-xl lg:text-2xl">
                                {dict.about.subtitle}
                            </p>
                        </FadeInHero>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative bg-white [clip-path:inset(0)]">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                {/* Background Image Placeholder */}
                {CONTENT_BG_IMAGE && (
                    <div
                        className="fixed inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    >
                        <Image
                            src={CONTENT_BG_IMAGE}
                            alt=""
                            fill
                            className="object-cover opacity-[0.03]"
                        />
                    </div>
                )}

                <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-start">
                        {/* Text column */}
                        <div className="lg:col-span-7 space-y-10 relative">
                            {/* Section label */}
                            <FadeIn direction="left" distance={40}>
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-12 bg-gray-900" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                                        {dict.about.sectionLabel}
                                    </span>
                                </div>
                            </FadeIn>

                            {/* Main content - paragraphs */}
                            <div className="space-y-8">
                                {dict.about.paragraphs.map(
                                    (paragraph, index) => (
                                        <FadeIn
                                            key={index}
                                            delay={0.1 + index * 0.08}
                                        >
                                            <p className="text-lg leading-[1.9] text-gray-600 md:text-xl font-light">
                                                {paragraph.hasFirmName && (
                                                    <strong className="font-semibold text-gray-900">
                                                        {dict.about.firmName}
                                                    </strong>
                                                )}
                                                {paragraph.hasFirmNameInText ? (
                                                    <>
                                                        {paragraph.text
                                                            .split(
                                                                "AUDY & ANTONI",
                                                            )
                                                            .map(
                                                                (
                                                                    part,
                                                                    i,
                                                                    arr,
                                                                ) => (
                                                                    <span
                                                                        key={i}
                                                                    >
                                                                        {part}
                                                                        {i <
                                                                            arr.length -
                                                                                1 && (
                                                                            <strong className="font-semibold text-gray-900">
                                                                                AUDY
                                                                                &
                                                                                ANTONI
                                                                            </strong>
                                                                        )}
                                                                    </span>
                                                                ),
                                                            )}
                                                    </>
                                                ) : (
                                                    paragraph.text
                                                )}
                                            </p>
                                        </FadeIn>
                                    ),
                                )}
                            </div>

                            {/* Decorative tagline */}
                            <FadeIn delay={0.6} direction="left" distance={30}>
                                <div className="pt-8">
                                    <div className="inline-flex items-center gap-3 border-l-2 border-gray-900 pl-6">
                                        <div className="space-y-1">
                                            <p className="font-serif text-2xl font-light text-gray-900 italic md:text-3xl">
                                                {dict.about.tagline}
                                            </p>
                                            <p className="text-sm text-gray-500 tracking-wide font-light">
                                                {dict.about.taglineSubtext}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Image column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-28">
                            <FadeIn delay={0.2} direction="right" distance={50}>
                                <div className="relative">
                                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/5]">
                                        <Image
                                            src="/images/backgrounds/batik-team-bg.webp"
                                            alt="Batik Pattern"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Overlay text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="border-l-4 border-white pl-6">
                                                <p className="font-serif text-3xl font-light leading-tight text-white drop-shadow-lg md:text-4xl">
                                                    Unlocking potential,
                                                    <br />
                                                    <span className="text-white/90 italic">
                                                        safeguarding success.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative accent */}
                                    <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gray-900 rounded-full opacity-5 blur-3xl -z-10" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
