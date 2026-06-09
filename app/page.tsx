import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { altLinks } from "@/lib/i18n";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "株式会社 遊行（yugyo inc.）— 在るべき場所へ。",
  description:
    "株式会社 遊行（yugyo inc.）は、世界の移動と日本の地域が出会う場所で仕事をします。デジタルノマド・地域共創・グローバル教育。福岡拠点。",
  alternates: altLinks("/", "/en"),
};

export default function HomeJa() {
  return <HomeBody lang="ja" />;
}
