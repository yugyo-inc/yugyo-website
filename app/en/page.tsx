import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "yugyo inc. — Be where you are meant to be.",
  description:
    "yugyo inc. works where the world's movement meets the regions of Japan. Digital nomadism, regional revitalization, and global education. Based in Fukuoka.",
  alternates: altLinks("en", "/", "/en"),
  openGraph: {
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en",
    title: "yugyo inc. — Be where you are meant to be.",
    description: "Where the world's movement meets the regions of Japan.",
  },
};

export default function HomeEn() {
  return <HomeBody lang="en" />;
}
