import { getDictionary } from "@/lib/dictionary";
import { locales, defaultLocale, type Locale } from "@/lib/site";
import SlideDeck from "@/components/SlideDeck";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const resolved: Locale = (locales as readonly string[]).includes(lang)
    ? (lang as Locale)
    : defaultLocale;
  return <SlideDeck dict={dict} lang={resolved} />;
}
