import Image from "next/image";
import batikBg from "../assets/images/batik.jpg";

export default function BatikFooter() {
    return (
        <footer>
            <div className="relative h-2 w-full overflow-hidden">
                <Image
                    src={batikBg}
                    alt=""
                    fill
                    className="object-cover"
                    aria-hidden="true"
                />
            </div>
            <div className="bg-gray-950 py-6 text-center">
                <p className="text-xs text-white/50">
                    © {new Date().getFullYear()} A&A Counsellors at Law. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
