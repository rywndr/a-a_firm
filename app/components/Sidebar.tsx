"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "id";
  dict: {
    navigation: {
      home: string;
      about: string;
      partners: string;
      practices: string;
      contact: string;
    };
  };
};

export default function Sidebar({ isOpen, onClose, lang, dict }: SidebarProps) {
  const pathname = usePathname();

  // Helper to switch lang while keeping path
  const switchLang = (targetLang: "en" | "id") => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  const navItems = [
    { label: dict.navigation.home, href: `/${lang}` },
    { label: dict.navigation.about, href: `/${lang}/about-the-firm` },
    { label: dict.navigation.partners, href: `/${lang}/our-partners` },
    { label: dict.navigation.practices, href: `/${lang}/practice-area` },
    { label: dict.navigation.contact, href: `/${lang}/contact-us` },
  ];

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? "visible" : "invisible delay-300"
      }`}
    >
      {/* Blur */}
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-[400px] transform bg-white p-10 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col pt-20">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="font-serif text-3xl font-medium text-gray-800 transition-colors hover:text-black md:text-4xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-6 border-t border-gray-100 pt-10">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Language
              </p>
              <div className="flex gap-6">
                <Link
                  href={switchLang("en")}
                  className={`text-xs font-bold transition-colors ${
                    lang === "en"
                      ? "text-black underline underline-offset-4"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={switchLang("id")}
                  className={`text-xs font-bold transition-colors ${
                    lang === "id"
                      ? "text-black underline underline-offset-4"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  ID
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
