import { getDictionary } from "../../get-dictionary";
import Image from "next/image";
import batikBg from "../../assets/images/batik4.jpg";
import BatikFooter from "../../components/BatikFooter";
import FadeIn, {
    FadeInHero,
    FadeInStagger,
    FadeInStaggerItem,
} from "../../components/FadeIn";

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
            {/* Hero Section */}
            <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-screen">
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

                <div className="container mx-auto max-w-7xl px-6 md:px-12">
                    <div className="max-w-4xl pt-20">
                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div className="mb-8 h-px w-full max-w-2xl bg-white/40" />
                        </FadeInHero>

                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                {dict.practices.title}
                            </h1>
                        </FadeInHero>

                        <FadeInHero delay={0.5} duration={0.8}>
                            <p className="mt-8 max-w-xl font-serif text-lg font-light italic leading-relaxed text-white/90 md:text-xl lg:text-2xl">
                                {dict.practices.subtitle}
                            </p>
                        </FadeInHero>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white">
                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    {/* Description */}
                    <FadeIn>
                        <div className="mb-20 max-w-3xl md:mb-28">
                            <p className="text-xl font-light leading-relaxed text-gray-600 md:text-2xl">
                                {dict.practices.description}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Practice Areas */}
                    <div className="mb-20 md:mb-28">
                        <FadeIn direction="left" distance={40}>
                            <div className="mb-12 flex items-center gap-6">
                                <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    {dict.practices.areasTitle}
                                </h2>
                                <div className="hidden h-px flex-1 bg-gray-200 sm:block" />
                            </div>
                        </FadeIn>

                        <FadeInStagger
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            staggerDelay={0.08}
                        >
                            {dict.practices.areas.map((area, index) => (
                                <FadeInStaggerItem key={index}>
                                    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:border-gray-200 hover:shadow-lg">
                                        {/* Placeholder Image */}
                                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="currentColor"
                                                    className="h-12 w-12 text-gray-300"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                    />
                                                </svg>
                                            </div>
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gray-900/0 transition-colors group-hover:bg-gray-900/10" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="mb-2 flex items-center gap-3">
                                                <span className="font-mono text-xs font-medium text-gray-400">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-medium leading-snug text-gray-900 transition-colors group-hover:text-gray-700">
                                                {area}
                                            </h3>
                                        </div>
                                    </div>
                                </FadeInStaggerItem>
                            ))}
                        </FadeInStagger>
                    </div>
                </div>
            </section>

            {/* Business Sectors */}
            <section className="border-t border-gray-100 bg-gray-50">
                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <FadeIn direction="left" distance={40}>
                        <div className="mb-12 flex items-center gap-6">
                            <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                                {dict.practices.sectorsTitle}
                            </h2>
                            <div className="hidden h-px flex-1 bg-gray-300 sm:block" />
                        </div>
                    </FadeIn>

                    <FadeInStagger
                        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                        staggerDelay={0.06}
                    >
                        {dict.practices.sectors.map((sector, index) => (
                            <FadeInStaggerItem key={index}>
                                <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
                                    {/* Placeholder Image */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                className="h-10 w-10 text-gray-300"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                />
                                            </svg>
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gray-900/0 transition-colors group-hover:bg-gray-900/5" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <span className="text-sm font-medium text-gray-700 md:text-base">
                                            {sector}
                                        </span>
                                    </div>
                                </div>
                            </FadeInStaggerItem>
                        ))}
                    </FadeInStagger>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
