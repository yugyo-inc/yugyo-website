import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "株式会社 遊行（yugyo inc.）— 在るべき場所へ。",
  description:
    "株式会社 遊行（yugyo inc.）は、世界の移動と日本の地域が出会う場所で仕事をします。デジタルノマド・地域共創・グローバル教育。福岡拠点。",
  alternates: altLinks("ja", "/", "/en"),
  openGraph: {
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work",
    title: "株式会社 遊行（yugyo inc.）— 在るべき場所へ。",
    description: "世界の移動と日本の地域が出会う場所。",
  },
};

export default function HomeJa() {
  return <HomeBody lang="ja" />;
}
