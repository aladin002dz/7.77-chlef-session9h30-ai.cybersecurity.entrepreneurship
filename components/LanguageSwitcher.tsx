"use client";

import Link from "next/link";
import { locales, localeHref, localeShort, type Locale } from "@/lib/site";

export default function LanguageSwitcher({
  current,
  slide,
}: {
  current: Locale;
  /** 1-based current slide index, preserved across a language switch. */
  slide: number;
}) {
  return (
    <nav className="lang-switcher" aria-label="Language">
      {locales.map((loc) => {
        const isActive = loc === current;
        return (
          <Link
            key={loc}
            href={`${localeHref(loc)}#${slide}`}
            className={`lang-pill${isActive ? " lang-pill-active" : ""}`}
            aria-current={isActive ? "true" : undefined}
          >
            {localeShort[loc]}
          </Link>
        );
      })}
    </nav>
  );
}
