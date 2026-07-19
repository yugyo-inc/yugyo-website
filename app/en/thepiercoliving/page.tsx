import type { Metadata } from "next";
import { ThePierBody } from "@/components/pages/ThePierBody";
import { getThePier } from "@/content/thepier";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

const c = getThePier("en");

export const metadata: Metadata = {
  title: { absolute: `${c.metaTitle}` },
  description: c.metaDescription,
  alternates: altLinks("en", "/thepiercoliving", "/en/thepiercoliving"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en/thepiercoliving",
    title: c.metaTitle,
    description: c.metaDescription,
    images: [{ url: "/photos/thepier/hero.jpg", width: 1200, height: 630, alt: "The Pier | Goto Nagasaki" }],
  },
};

export default function ThePierEn() {
  return <ThePierBody lang="en" />;
}
