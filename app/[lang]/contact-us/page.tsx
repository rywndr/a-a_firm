import { getDictionary } from "@/utils/get-dictionary";
import { getCanonicalUrl } from "@/utils/canonical";
import BatikFooter from "@/components/layout/BatikFooter";
import FadeIn, { FadeInHero } from "@/components/shared/FadeIn";
import PageHero from "@/components/hero/PageHero";
import ContactForm from "@/components/forms/ContactForm";
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
            canonical: getCanonicalUrl(lang, "contact-us"),
        },
    };
}

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
            <PageHero
                backgroundImage="/images/backgrounds/batik-main-bg.webp"
                title={dict.contact.title}
                subtitle={dict.contact.subtitle}
            >
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
                                        .map((line: string, index: number) => (
                                            <span key={index} className="block">
                                                {line.trim()}
                                                {index <
                                                    dict.contact.address.split(
                                                        ",",
                                                    ).length -
                                                        1 && ","}
                                            </span>
                                        ))}
                                </p>
                            </address>
                        </div>
                    </FadeInHero>
                </div>
            </PageHero>

            {/* Form and Map Section */}
            <section className="bg-white">
                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Left Column - Contact Form */}
                        <ContactForm
                            formTitle={dict.contact.formTitle}
                            formName={dict.contact.formName}
                            formEmail={dict.contact.formEmail}
                            formPhone={dict.contact.formPhone}
                            formSubject={dict.contact.formSubject}
                            formMessage={dict.contact.formMessage}
                            formSubmit={dict.contact.formSubmit}
                        />

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
