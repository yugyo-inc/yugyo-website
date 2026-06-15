import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/AboutBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description: "Company profile and founder of yugyo inc. Founded September 2022, based in Fukuoka.",
  alternates: altLinks("en", "/about", "/en/about"),
  openGraph: {
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en/about",
    title: "About — yugyo inc.",
    description: "Company profile and founder of yugyo inc.",
  },
};

export default function AboutEn() {
  return <AboutBody lang="en" />;
}
