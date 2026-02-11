import Image from "next/image";
import Footer from "./Footer";

export default function BatikFooter() {
    return (
        <footer>
            <div className="relative h-2 w-full overflow-hidden">
                <Image
                    src="/images/backgrounds/batik-main-bg.webp"
                    alt=""
                    fill
                    className="object-cover"
                    aria-hidden="true"
                />
            </div>
            <div className="bg-[#0A0A0A] py-6 text-center border-t border-white/10">
                <Footer variant="dark" />
            </div>
        </footer>
    );
}
