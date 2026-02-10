import { getDictionary } from "../../get-dictionary";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import batikBg from "../../assets/images/batik2.png";
import andeltonImg from "../../assets/images/our-people/andelton-antoni.jpeg";
import BatikFooter from "../../components/BatikFooter";
import FadeIn, {
    FadeInHero,
    FadeInStagger,
    FadeInStaggerItem,
} from "../../components/FadeIn";

const partnerImages: Record<string, StaticImageData> = {
    "andelton-antoni": andeltonImg,
};

export default async function Partners({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-screen">
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-black">
                    <Image
                        src={batikBg}
                        alt="Batik Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                </div>

                <div className="container mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
                    <div className="max-w-4xl pt-28 pb-16 sm:pt-32 sm:pb-20">
                        <FadeInHero delay={0.1} direction="none">
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 sm:hidden">
                                Our People
                            </p>
                        </FadeInHero>

                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div className="mb-5 h-px w-12 bg-white/40 sm:mb-8 sm:w-full sm:max-w-2xl" />
                        </FadeInHero>

                        {/* Main heading */}
                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1 className="font-serif text-[2.75rem] font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                {dict.partners.title}
                            </h1>
                        </FadeInHero>

                        {/* Sub */}
                        <FadeInHero delay={0.5} duration={0.8}>
                            <p className="mt-5 max-w-sm text-base font-light italic leading-relaxed text-white/90 sm:mt-8 sm:max-w-xl sm:text-lg md:text-xl lg:text-2xl">
                                {dict.partners.subtitle}
                            </p>
                        </FadeInHero>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="bg-gray-50">
                <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
                    {/* Section Header */}
                    <FadeIn direction="up" distance={30}>
                        <div className="mb-12 text-center md:mb-20">
                            <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                                Meet Your Allies
                            </h2>
                            <div className="mx-auto mt-4 h-px w-16 bg-gray-900 md:mt-6" />
                        </div>
                    </FadeIn>

                    {/* Partners Cards */}
                    <FadeInStagger
                        className="grid gap-8 md:gap-10 lg:grid-cols-2"
                        staggerDelay={0.2}
                    >
                        {dict.partners.list.map((partner) => (
                            <FadeInStaggerItem key={partner.id}>
                                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                                    <div className="flex flex-col sm:flex-row">
                                        {/* Image Column */}
                                        <div className="relative w-full shrink-0 sm:w-48 md:w-56 lg:w-64">
                                            <div className="relative aspect-[4/5] w-full overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto">
                                                {partnerImages[partner.id] ? (
                                                    <Image
                                                        src={
                                                            partnerImages[
                                                                partner.id
                                                            ]
                                                        }
                                                        alt={partner.name}
                                                        fill
                                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                                        <span className="font-serif text-6xl font-light text-gray-300">
                                                            {partner.name.charAt(
                                                                0,
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                                {/* Oerlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent sm:bg-gradient-to-r" />
                                            </div>
                                        </div>

                                        {/* Content Column */}
                                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                                            {/* Title Badge */}
                                            <div className="mb-3">
                                                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gray-600">
                                                    {partner.title}
                                                </span>
                                            </div>

                                            {/* Name */}
                                            <h3 className="font-serif text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                                {partner.name}
                                            </h3>

                                            {/* Bio Excerpt */}
                                            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-4 sm:text-base">
                                                {partner.bio[0]}
                                            </p>

                                            {/* View Profile Button */}
                                            <div className="mt-6">
                                                <Link
                                                    href={`/${lang}/our-people/${partner.id}`}
                                                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 transition-colors hover:text-gray-600"
                                                >
                                                    <span className="relative">
                                                        {
                                                            dict.partners
                                                                .readProfile
                                                        }
                                                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gray-900 transition-all duration-300 group-hover/btn:w-full" />
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accent line */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gray-900 transition-all duration-500 group-hover:w-full" />
                                </div>
                            </FadeInStaggerItem>
                        ))}
                    </FadeInStagger>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900">
                <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
                    <FadeIn direction="up" distance={30}>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="font-serif text-2xl font-light text-white sm:text-3xl md:text-4xl">
                                {dict.cta.title}
                            </h3>
                            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
                                {dict.cta.description}
                            </p>
                            <Link
                                href={`/${lang}/contact-us`}
                                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:px-10 sm:text-base"
                            >
                                {dict.cta.button}
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
