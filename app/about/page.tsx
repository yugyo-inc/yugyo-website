import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/AboutBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社 遊行（yugyo inc.）の会社概要と代表大瀬良亮プロフィール。設立 2022 年 9 月、福岡拠点。",
  alternates: altLinks("ja", "/about", "/en/about"),
  openGraph: {
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work/about",
    title: "会社概要 — yugyo inc.",
    description: "株式会社 遊行（yugyo inc.）の会社概要と代表大瀬良亮プロフィール。",
  },
};

export default function AboutJa() {
  return <AboutBody lang="ja" />;
}
