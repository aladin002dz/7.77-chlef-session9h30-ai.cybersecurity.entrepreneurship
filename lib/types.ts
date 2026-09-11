import type { Locale } from "./site";

export interface Slide {
  /** Small markdown-lite body: supports **bold**, *italic*, `code`,
   * [text](url), "- " bullet lists, "1. " ordered lists and "> " quotes. */
  title: string;
  subtitle?: string;
  body: string;
}

export interface Dictionary {
  lang: Locale;
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
  };
  ui: {
    /** "{current}" and "{total}" placeholders are replaced at render time. */
    counter: string;
    prevAria: string;
    nextAria: string;
    swipeHint: string;
    keyboardHint: string;
    fullscreenAria: string;
    exitFullscreenAria: string;
    langLabel: string;
    footer: string;
    startLabel: string;
  };
  slides: Slide[];
}
