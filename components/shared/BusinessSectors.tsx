import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";
import { getSectorKey, getBusinessSectorImage } from "@/utils/business-sectors";

interface BusinessSectorsProps {
    label: string;
    title: string;
    description: string;
    sectors: string[];
}

export default function BusinessSectors({
    label,
    title,
    description,
    sectors,
}: BusinessSectorsProps) {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] py-20 md:py-32">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.15]" />

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
                {/* Section Header */}
                <FadeIn direction="up" distance={30}>
                    <div className="mb-16 text-center md:mb-24">
                        <p
                            className="mb-4 text-xs font-bold uppercase tracking-[0.3em]"
                            style={{ color: "#C8A97E" }}
                        >
                            {label}
                        </p>
                        <h2 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent opacity-60" />
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                            {description}
                        </p>
                    </div>
                </FadeIn>

                {/* Sectors Grid */}
                <FadeIn delay={0.2} direction="up" distance={40}>
                    <div className="grid gap-x-12 gap-y-0 md:grid-cols-2 lg:gap-x-24">
                        {/* Left Column */}
                        <div className="divide-y divide-white/10 border-t border-b border-white/10 md:border-none">
                            {sectors.slice(0, 9).map((sectorName, index) => {
                                const sectorKey = getSectorKey(sectorName);
                                const imageSrc =
                                    getBusinessSectorImage(sectorKey);

                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-5 py-6 transition-all duration-500 hover:px-6 hover:-mx-6 rounded-sm hover:bg-white/[0.02]"
                                    >
                                        {/* Sector Image/Icon */}
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 transition-all duration-300 group-hover:ring-[#C8A97E]">
                                            <Image
                                                src={imageSrc}
                                                alt={sectorName}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Sector Name */}
                                        <div className="flex-1">
                                            <h4 className="font-serif text-lg tracking-wide text-neutral-300 transition-colors group-hover:text-white">
                                                {sectorName}
                                            </h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div className="divide-y divide-white/10 border-b border-white/10 md:border-none">
                            {sectors.slice(9).map((sectorName, index) => {
                                const sectorKey = getSectorKey(sectorName);
                                const imageSrc =
                                    getBusinessSectorImage(sectorKey);

                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-5 py-6 transition-all duration-500 hover:px-6 hover:-mx-6 rounded-sm hover:bg-white/[0.02]"
                                    >
                                        {/* Sector Image/Icon */}
                                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 transition-all duration-300 group-hover:ring-[#C8A97E]">
                                            <Image
                                                src={imageSrc}
                                                alt={sectorName}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Sector Name */}
                                        <div className="flex-1">
                                            <h4 className="font-serif text-lg tracking-wide text-neutral-300 transition-colors group-hover:text-white">
                                                {sectorName}
                                            </h4>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
