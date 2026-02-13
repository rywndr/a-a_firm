"use client";

import FadeIn from "@/components/shared/FadeIn";

interface ContactFormProps {
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
}

export default function ContactForm({
    formTitle,
    formName,
    formEmail,
    formPhone,
    formSubject,
    formMessage,
    formSubmit,
}: ContactFormProps) {
    return (
        <div>
            <FadeIn direction="left" distance={40}>
                <div className="mb-10">
                    <h2 className="font-serif text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
                        {formTitle}
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
                                {formName}
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
                                {formEmail}
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
                                {formPhone}
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
                                {formSubject}
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
                            {formMessage}
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
                            {formSubmit}
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
    );
}
