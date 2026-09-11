import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { locales, localeDir, siteUrl, type Locale } from "@/lib/site";
import "../../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        fr: "/",
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}`,
      locale: lang === "ar" ? "ar_DZ" : lang === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = localeDir[(lang as Locale) in localeDir ? (lang as Locale) : "fr"];
  return (
    <html lang={lang} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
