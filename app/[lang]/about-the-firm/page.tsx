import { getDictionary } from "../../get-dictionary";
import Image from "next/image";
import batikBg from "../../assets/images/batik5.jpg";
import batikBg2 from "../../assets/images/batik2.png";
import BatikFooter from "../../components/BatikFooter";
import FadeIn, { FadeInHero } from "../../components/FadeIn";

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
                        src={batikBg}
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
            <section className="relative bg-white">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
                        {/* Text column */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Section label */}
                            <FadeIn direction="left" distance={40}>
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-12 bg-gray-900" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                                        {dict.about.sectionLabel}
                                    </span>
                                </div>
                            </FadeIn>

                            {/* Main content */}
                            <div className="space-y-8">
                                <FadeIn delay={0.1}>
                                    <div className="group">
                                        <p className="text-xl leading-[1.9] text-gray-700 md:text-2xl font-light">
                                            {dict.about.description1}
                                        </p>
                                    </div>
                                </FadeIn>

                                <FadeIn delay={0.2}>
                                    <div className="h-px w-24 bg-gray-200 my-10" />
                                </FadeIn>

                                <FadeIn delay={0.3}>
                                    <div className="group">
                                        <p className="text-lg leading-[1.9] text-gray-600 md:text-xl font-light">
                                            {dict.about.description2}
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Decorative element */}
                            <FadeIn delay={0.4} direction="left" distance={30}>
                                <div className="pt-8">
                                    <div className="inline-flex items-center gap-3 border-l-2 border-gray-900 pl-6">
                                        <div className="space-y-1">
                                            <p className="font-serif text-2xl font-light text-gray-900 italic md:text-3xl">
                                                Excellence in every case.
                                            </p>
                                            <p className="text-sm text-gray-500 tracking-wide font-light">
                                                Our commitment to you
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Image column */}
                        <FadeIn
                            className="lg:col-span-5"
                            delay={0.2}
                            direction="right"
                            distance={50}
                        >
                            <div className="relative">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/5]">
                                    <Image
                                        src={batikBg2}
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
            </section>

            <BatikFooter />
        </div>
    );
}
