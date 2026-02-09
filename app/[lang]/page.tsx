import { getDictionary } from "../get-dictionary";
import Image from "next/image";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-20 font-sans text-white">
      {/* Batik bg */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="/batik.png"
          alt="Batik Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <main className="flex w-full max-w-5xl flex-col items-center gap-8 text-center sm:items-start sm:text-left md:gap-12 pt-20">
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          {dict.home.title}
        </h1>
        <p className="max-w-2xl text-lg text-gray-100 sm:text-xl md:text-2xl drop-shadow-md">
          {dict.home.description}
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-colors hover:bg-gray-200 sm:w-auto md:h-14 md:text-lg"
            href={`/${lang}/contact-us`}
          >
            {dict.navigation.contact}
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-white/30 px-8 text-base font-medium text-white transition-colors hover:border-transparent hover:bg-white/10 sm:w-auto md:h-14 md:text-lg"
            href={`/${lang}/practice-area`}
          >
            {dict.navigation.practices}
          </a>
        </div>
      </main>
      <footer className="mt-auto pt-16 text-center">
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} A&A Counsellors at Law. All rights
          reserved.
        </p>
        {/*<p className="mt-2 text-[10px] text-gray-400">
          <a
            href="http://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            Designed by Freepik
          </a>
        </p>*/}
      </footer>
    </div>
  );
}
