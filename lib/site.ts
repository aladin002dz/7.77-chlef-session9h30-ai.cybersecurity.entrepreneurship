export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};

export const localeLabel: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const localeShort: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

/** English/default alt not used here: French is the source language and lives at "/". */
export function localeHref(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export const siteName = "7.77 Chlef · Session 09:30";
export const siteUrl =
  "https://aladin002dz.github.io/7.77-chlef-session9h30-ai.cybersecurity.entrepreneurship";
