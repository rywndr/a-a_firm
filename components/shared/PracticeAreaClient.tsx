"use client";

import { useState } from "react";
import FadeIn from "@/components/shared/FadeIn";
import PracticeDetailSidebar from "@/components/shared/PracticeDetailSidebar";

type PracticeArea = {
    name: string;
    description: string;
};

type PracticeAreaClientProps = {
    corporateTitle: string;
    corporateAreas: PracticeArea[];
    litigationTitle: string;
    litigationAreas: PracticeArea[];
    learnMoreText: string;
    headerText?: string;
};

export default function PracticeAreaClient({
    corporateTitle,
    corporateAreas,
    litigationTitle,
    litigationAreas,
    learnMoreText,
    headerText,
}: PracticeAreaClientProps) {
    const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

    const handleOpenSidebar = (area: PracticeArea) => {
        setSelectedArea(area);
    };

    const handleCloseSidebar = () => {
        setSelectedArea(null);
    };

    return (
        <>
            {/* Content Section */}
            <section className="relative">
                <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    {/* Header Text */}
                    {headerText && (
                        <FadeIn>
                            <div className="mb-16 max-w-3xl md:mb-24">
                                <h2 className="font-serif text-4xl font-light leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                                    {headerText}
                                </h2>
                                <div className="mt-8 h-px w-32 bg-gray-900" />
                            </div>
                        </FadeIn>
                    )}

                    {/* Corporate Section */}
                    <FadeIn delay={0.2} direction="up" distance={40}>
                        <div className="mb-16 md:mb-24">
                            {/* Section Header */}
                            <div className="mb-12 flex items-center gap-6">
                                <h3 className="font-serif text-4xl font-light uppercase tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
                                    {corporateTitle}
                                </h3>
                            </div>

                            {/* Corporate Practice Areas */}
                            <div className="divide-y divide-gray-200 border-t border-gray-900">
                                {corporateAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="group relative cursor-pointer py-8 "
                                        onClick={() => handleOpenSidebar(area)}
                                    >
                                        {/* Hover Accent */}
                                        <div className="absolute inset-y-0 left-0 w-0 bg-[#C8A97E] transition-all duration-300 group-hover:w-1.5" />

                                        <div className="px-2 transition-all duration-300 group-hover:pl-8 group-hover:pr-4">
                                            {/* Area Title */}
                                            <h4 className="mb-4 font-serif text-xl font-light tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
                                                {area.name}
                                            </h4>

                                            {/* Learn More Row */}
                                            <div className="flex items-center justify-between border-t border-transparent pt-4 transition-all duration-300 group-hover:border-gray-200">
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-[#C8A97E]">
                                                    {learnMoreText}
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#C8A97E]"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Litigation Section */}
                    <FadeIn delay={0.3} direction="up" distance={40}>
                        <div>
                            {/* Section Header */}
                            <div className="mb-12 flex items-center gap-6">
                                <h3 className="font-serif text-4xl font-light uppercase tracking-wide text-gray-900 md:text-5xl lg:text-6xl">
                                    {litigationTitle}
                                </h3>
                            </div>

                            {/* Litigation Practice Areas */}
                            <div className="divide-y divide-gray-200 border-t border-gray-900">
                                {litigationAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="group relative cursor-pointer py-8 transition-all duration-500 hover:bg-neutral-50"
                                        onClick={() => handleOpenSidebar(area)}
                                    >
                                        {/* Hover Accent */}
                                        <div className="absolute inset-y-0 left-0 w-0 bg-[#C8A97E] transition-all duration-300 group-hover:w-1.5" />

                                        <div className="px-2 transition-all duration-300 group-hover:pl-8 group-hover:pr-4">
                                            {/* Area Title */}
                                            <h4 className="mb-4 font-serif text-xl font-light tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
                                                {area.name}
                                            </h4>

                                            {/* Learn More Row */}
                                            <div className="flex items-center justify-between border-t border-transparent pt-4 transition-all duration-300 group-hover:border-gray-200">
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors group-hover:text-[#C8A97E]">
                                                    {learnMoreText}
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-5 w-5 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#C8A97E]"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <PracticeDetailSidebar
                isOpen={selectedArea !== null}
                onClose={handleCloseSidebar}
                title={selectedArea?.name || ""}
                areas={selectedArea ? [selectedArea] : []}
            />
        </>
    );
}
