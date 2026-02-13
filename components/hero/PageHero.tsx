import Image from "next/image";
import { FadeInHero } from "@/components/shared/FadeIn";
import { ReactNode } from "react";

interface PageHeroProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    variant?: "default" | "home";
    children?: ReactNode;
    footer?: ReactNode;
}

export default function PageHero({
    backgroundImage,
    title,
    subtitle,
    variant = "default",
    children,
    footer,
}: PageHeroProps) {
    const isHome = variant === "home";

    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-black">
                <Image
                    src={backgroundImage}
                    alt="Batik Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div
                    className={`absolute inset-0 ${
                        isHome
                            ? "bg-gradient-to-b from-black/40 via-black/20 to-black/60"
                            : "bg-gradient-to-b from-black/40 via-black/30 to-black/60"
                    }`}
                />
            </div>

            <div className="flex flex-1 items-center">
                <div className="container mx-auto max-w-7xl px-6 md:px-12 w-full">
                    <div
                        className={`max-w-4xl ${
                            isHome ? "py-20" : "pt-20 pb-20 md:pt-32"
                        }`}
                    >
                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div
                                className={`mb-8 h-px bg-white/40 ${
                                    isHome
                                        ? "w-32 md:mb-10 md:w-48"
                                        : "w-full max-w-2xl"
                                }`}
                            />
                        </FadeInHero>

                        {/* Main heading */}
                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1
                                className={`font-serif font-light leading-[1.1] tracking-tight text-white ${
                                    isHome
                                        ? "max-w-4xl text-4xl drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]"
                                        : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                                }`}
                            >
                                {title}
                            </h1>
                        </FadeInHero>

                        {/* Subtitle */}
                        <FadeInHero delay={0.5} duration={0.8}>
                            <p
                                className={`font-serif font-light italic leading-relaxed text-white/90 ${
                                    isHome
                                        ? "mt-6 max-w-2xl text-lg drop-shadow-lg md:mt-8 md:text-xl lg:text-2xl"
                                        : "mt-6 max-w-xl text-lg md:mt-8 md:text-xl lg:text-2xl"
                                }`}
                            >
                                {subtitle}
                            </p>
                        </FadeInHero>

                        {/* Additional content (CTAs, contact info, etc.) */}
                        {children}
                    </div>
                </div>
            </div>

            {/* Footer - only render if provided */}
            {footer && (
                <div className="relative pb-8 pt-4">
                    <div className="container mx-auto max-w-7xl px-6 md:px-12">
                        {footer}
                    </div>
                </div>
            )}
        </section>
    );
}
