import Image from "next/image";
import { getPartnerImage } from "@/utils/partner-images";

interface PartnerImageProps {
    partnerId: string;
    partnerName: string;
    variant?: "list" | "detail";
    className?: string;
}

export default function PartnerImage({
    partnerId,
    partnerName,
    variant = "list",
    className = "",
}: PartnerImageProps) {
    const imageSrc = getPartnerImage(partnerId);
    const isListView = variant === "list";

    if (imageSrc) {
        return (
            <Image
                src={imageSrc}
                alt={partnerName}
                fill
                className={`object-cover ${isListView ? "object-top" : ""} ${className}`}
            />
        );
    }

    // Fallback when no image exists
    return (
        <div className={`absolute inset-0 flex items-center justify-center ${isListView ? "text-gray-300" : "bg-neutral-200 text-neutral-400"}`}>
            <span className={`font-serif ${isListView ? "text-6xl" : "text-sm uppercase tracking-widest"} font-light`}>
                {partnerName.charAt(0)}
            </span>
        </div>
    );
}
