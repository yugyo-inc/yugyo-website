import type { Metadata } from "next";
import { NewsIndexBody } from "@/components/pages/NewsIndexBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "News",
  description: "Latest updates, speaking engagements, and partnerships from yugyo inc.",
  alternates: altLinks("en", "/news", "/en/news"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en/news",
    title: "News — yugyo inc.",
    description: "Latest updates, speaking engagements, and partnerships from yugyo inc.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "yugyo inc. — Be where you are meant to be.",
      },
    ],
  },
};

export const revalidate = 60;

export default function NewsIndexEn() {
  return <NewsIndexBody lang="en" />;
}
