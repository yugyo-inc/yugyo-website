import type { Metadata } from "next";
import { NewsIndexBody } from "@/components/pages/NewsIndexBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "最新情報",
  description: "yugyo inc. の最新情報・登壇報告・パートナーシップ。",
  alternates: altLinks("ja", "/news", "/en/news"),
  openGraph: {
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work/news",
    title: "最新情報 — yugyo inc.",
    description: "yugyo inc. の最新情報・登壇報告・パートナーシップ。",
  },
};

export const revalidate = 60;

export default function NewsIndexJa() {
  return <NewsIndexBody lang="ja" />;
}
