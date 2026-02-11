import { getDictionary } from "@/utils/get-dictionary";
import Image from "next/image";
import BatikFooter from "@/components/BatikFooter";
import FadeIn, { FadeInHero } from "@/components/FadeIn";

export default async function Contact({
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
                        src="/images/backgrounds/batik-main-bg.webp"
                        alt="Batik Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                </div>

                <div className="container mx-auto max-w-7xl px-6 md:px-12">
                    <div className="max-w-4xl pt-32 pb-20">
                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div className="mb-8 h-px w-full max-w-2xl bg-white/40" />
                        </FadeInHero>

                        {/* Main heading */}
                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                {dict.contact.title}
                            </h1>
                        </FadeInHero>

                        {/* Sub */}
                        <FadeInHero delay={0.5} duration={0.8}>
                            <p className="mt-6 max-w-xl text-lg font-light italic leading-relaxed text-white/90 md:mt-8 md:text-xl lg:text-2xl">
                                {dict.contact.subtitle}
                            </p>
                        </FadeInHero>

                        {/* Contact Info Grid */}
                        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-16 lg:gap-12">
                            {/* Phone */}
                            <FadeInHero delay={0.7} duration={0.8}>
                                <div>
                                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                                        Contact
                                    </p>
                                    <a
                                        href={`tel:${dict.contact.phone.replace(/\s/g, "")}`}
                                        className="font-serif text-2xl font-light text-white transition-colors hover:text-white/80 md:text-3xl"
                                    >
                                        {dict.contact.phone}
                                    </a>
                                </div>
                            </FadeInHero>

                            {/* Address */}
                            <FadeInHero delay={0.8} duration={0.8}>
                                <div>
                                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                                        {dict.contact.addressLabel}
                                    </p>
                                    <address className="not-italic">
                                        <p className="font-serif text-lg font-light leading-relaxed text-white md:text-xl">
                                            {dict.contact.address
                                                .split(",")
                                                .map(
                                                    (
                                                        line: string,
                                                        index: number,
                                                    ) => (
                                                        <span
                                                            key={index}
                                                            className="block"
                                                        >
                                                            {line.trim()}
                                                            {index <
                                                                dict.contact.address.split(
                                                                    ",",
                                                                ).length -
                                                                    1 && ","}
                                                        </span>
                                                    ),
                                                )}
                                        </p>
                                    </address>
                                </div>
                            </FadeInHero>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form and Map Section */}
            <section className="bg-white">
                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Left Column - Contact Form */}
                        <div>
                            <FadeIn direction="left" distance={40}>
                                <div className="mb-10">
                                    <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
                                        {dict.contact.formTitle}
                                    </h2>
                                    <div className="mt-4 h-px w-16 bg-gray-900" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <form className="space-y-8">
                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div className="group">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-sm font-medium uppercase tracking-wider text-gray-500"
                                            >
                                                {dict.contact.formName}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-lg text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:border-gray-900 focus:ring-0"
                                            />
                                        </div>
                                        <div className="group">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-sm font-medium uppercase tracking-wider text-gray-500"
                                            >
                                                {dict.contact.formEmail}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-lg text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:border-gray-900 focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div className="group">
                                            <label
                                                htmlFor="phone"
                                                className="mb-3 block text-sm font-medium uppercase tracking-wider text-gray-500"
                                            >
                                                {dict.contact.formPhone}
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-lg text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:border-gray-900 focus:ring-0"
                                            />
                                        </div>
                                        <div className="group">
                                            <label
                                                htmlFor="subject"
                                                className="mb-3 block text-sm font-medium uppercase tracking-wider text-gray-500"
                                            >
                                                {dict.contact.formSubject}
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-lg text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:border-gray-900 focus:ring-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label
                                            htmlFor="message"
                                            className="mb-3 block text-sm font-medium uppercase tracking-wider text-gray-500"
                                        >
                                            {dict.contact.formMessage}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="w-full resize-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-3 text-lg text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:border-gray-900 focus:ring-0"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="group inline-flex items-center gap-3 text-base font-medium uppercase tracking-widest text-gray-900 transition-colors hover:text-gray-600"
                                        >
                                            {dict.contact.formSubmit}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </FadeIn>
                        </div>

                        {/* Right Column - Map */}
                        <div>
                            <FadeIn delay={0.2} direction="right" distance={40}>
                                <div className="mb-10">
                                    <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
                                        Our Location
                                    </h2>
                                    <div className="mt-4 h-px w-16 bg-gray-900" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3} direction="none">
                                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg lg:aspect-square">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://maps.google.com/maps?q=Jl.%20Sungai%20Sambas%203%20No.5,%20RT.4/RW.5,%20Kramat%20Pela,%20Kebayoran.%20Baru,%20Jakarta%20Selatan,%20Daerah%20Khusus%20Jakarta,%2012130&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        title="Office Location"
                                        className="h-full w-full"
                                        loading="lazy"
                                    ></iframe>
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
