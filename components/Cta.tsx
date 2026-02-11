import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Dictionary } from "@/dictionaries/types";

type CtaProps = {
    lang: "en" | "id";
    dict: Dictionary;
};

export default async function Cta({ lang, dict }: CtaProps) {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A]">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.15] bg-[url('/images/backgrounds/noise.png')] mix-blend-overlay" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
                <FadeIn direction="up" distance={30}>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-serif text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
                            {dict.cta.title}
                        </h3>
                        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent opacity-60" />
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                            {dict.cta.description}
                        </p>

                        <Link
                            href={`/${lang}/contact-us`}
                            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-gray-900 transition-transform hover:scale-105 active:scale-95"
                        >
                            {dict.cta.button}
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
