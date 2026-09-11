import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { siteUrl } from "@/lib/site";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("fr");
  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: "/",
      languages: {
        fr: "/",
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: "/",
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
