import "server-only";
import type { Dictionary } from "./types";
import { defaultLocale, locales, type Locale } from "./site";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/dictionaries/fr").then((m) => m.fr),
  en: () => import("@/dictionaries/en").then((m) => m.en),
  ar: () => import("@/dictionaries/ar").then((m) => m.ar),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const key = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;
  return loaders[key]();
}
