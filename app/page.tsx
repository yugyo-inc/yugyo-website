import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "株式会社 遊行（yugyo inc.）— 自分らしくいられる場所を選べる世界へ。",
  description:
    "株式会社 遊行（yugyo inc.）は、世界と日本の境界線を緩めるお仕事をしています。デジタルノマド・地域共創・グローバル関係人口・教育など。福岡拠点。",
  alternates: altLinks("ja", "/", "/en"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work",
    title: "株式会社 遊行（yugyo inc.）— 自分らしくいられる場所を選べる世界へ。",
    description: "世界と日本の境界線を緩めるお仕事を。デジタルノマド・地域共創・グローバル関係人口・教育。",
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

export default function HomeJa() {
  return <HomeBody lang="ja" />;
}
