"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

type NavbarProps = {
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

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if on the home page
  // The path will be /{lang} or just / if redirected, but usually /{lang}
  const isHomePage = pathname === `/${lang}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Determine colors based on state
  // If on home page and menu is closed, use white text
  // else (other pages nor menu is open), use dark text
  const textColorClass =
    isHomePage && !isMenuOpen ? "text-white" : "text-gray-900";
  const burgerColorClass =
    isHomePage && !isMenuOpen ? "bg-white" : "bg-gray-900";

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          isHomePage
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
          {/* Logo, not final */}
          <Link
            href={`/${lang}`}
            className={`relative z-50 font-serif text-2xl font-bold tracking-tight md:text-3xl transition-colors duration-300 ${textColorClass}`}
          >
            A&A
          </Link>

          {/* Hamburger Menu */}
          <button
            className="group relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-1.5 p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 transition-all duration-300 ease-out ${burgerColorClass} ${
                isMenuOpen ? "w-8 translate-y-2 rotate-45" : "w-8"
              }`}
            />
            <span
              className={`block h-0.5 transition-all duration-300 ease-out ${burgerColorClass} ${
                isMenuOpen ? "w-8 opacity-0" : "w-6 group-hover:w-8"
              }`}
            />
            <span
              className={`block h-0.5 transition-all duration-300 ease-out ${burgerColorClass} ${
                isMenuOpen
                  ? "w-8 -translate-y-2 -rotate-45"
                  : "w-4 group-hover:w-8"
              }`}
            />
          </button>
        </div>
      </nav>

      <Sidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        lang={lang}
        dict={dict}
      />
    </>
  );
}
