import { getDictionary } from "../../get-dictionary";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-6 py-12 md:px-12 md:py-20">
      <h1 className="mb-8 font-serif text-4xl font-bold leading-tight md:mb-12 md:text-5xl lg:text-6xl">
        {dict.contact.title}
      </h1>
      <div className="max-w-3xl">
        <p className="font-sans text-lg leading-relaxed text-gray-700 md:text-xl">
          {dict.contact.description}
        </p>
      </div>
    </div>
  );
}
