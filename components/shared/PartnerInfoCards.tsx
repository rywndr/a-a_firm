import { FadeInHero } from "@/components/shared/FadeIn";
import { Partner, Dictionary } from "@/dictionaries/types";

interface PartnerInfoCardsProps {
    partner: Partner;
    dict: Dictionary;
}

export default function PartnerInfoCards({
    partner,
    dict,
}: PartnerInfoCardsProps) {
    return (
        <div className="space-y-4">
            {partner.email && (
                <FadeInHero delay={0.65}>
                    <div className="border border-gray-100 bg-white p-5 shadow-sm transition-colors hover:border-[#C8A97E]/50">
                        <div className="mb-2 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                Email
                            </h3>
                        </div>
                        <a
                            href={`mailto:${partner.email}`}
                            className="break-all text-sm font-medium text-gray-900 transition-colors hover:text-[#C8A97E]"
                        >
                            {partner.email}
                        </a>
                    </div>
                </FadeInHero>
            )}

            {partner.languages && (
                <FadeInHero delay={0.7}>
                    <div className="border border-gray-100 bg-white p-5 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                />
                            </svg>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                {dict.partners.languagesLabel}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            {partner.languages.join(" · ")}
                        </p>
                    </div>
                </FadeInHero>
            )}

            {partner.membership && (
                <FadeInHero delay={0.8}>
                    <div className="border border-gray-100 bg-white p-5 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                />
                            </svg>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                {dict.partners.membershipLabel}
                            </h3>
                        </div>
                        <ul className="space-y-1">
                            {partner.membership.map((mem, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm leading-relaxed text-gray-700"
                                >
                                    {mem}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInHero>
            )}

            {partner.education && (
                <FadeInHero delay={0.9}>
                    <div className="border border-gray-100 bg-white p-5 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                />
                            </svg>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                {dict.partners.educationLabel}
                            </h3>
                        </div>
                        <ul className="space-y-1">
                            {partner.education.map((edu, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm leading-relaxed text-gray-700"
                                >
                                    {edu}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeInHero>
            )}
        </div>
    );
}
