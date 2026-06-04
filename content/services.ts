// content/services.ts — yugyo の 4 つの事業
import type { AccentToken } from "./cities";

export interface Service {
  slug: string;
  title_jp: string;
  title_en: string;
  summary_jp: string;
  body_jp: string;
  accent: AccentToken;
  external_url?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "ikigai",
    title_jp: "Ikigai Co-Creator Program",
    title_en: "Ikigai Co-Creator Program",
    summary_jp: "海外人材と日本の地域企業をつなぐ共創プログラム。",
    body_jp:
      "海を越えてやってくる人材と、日本の地域企業が、ともに事業を立ち上げる。Ikigai Co-Creator Program は、越境する才能が地域に根を下ろすための共創の場です。",
    accent: "water-indigo",
  },
  {
    slug: "colive-fukuoka",
    title_jp: "Colive Fukuoka",
    title_en: "Colive Fukuoka",
    summary_jp:
      "アジア最大規模のデジタルノマドカンファレンス。57カ国から500人以上が集う。",
    body_jp:
      "福岡を、世界中のデジタルノマドが集う場へ。Colive Fukuoka は、57カ国から500人以上が参加し、2025年には140Mの経済波及を生んだカンファレンスです。",
    accent: "fire-ember",
    external_url: "https://colivefukuoka.com",
  },
  {
    slug: "public-sector",
    title_jp: "行政受託",
    title_en: "Public Sector Consulting",
    summary_jp: "長崎・金沢・高浜・富山等の地域共創プロジェクトを受託。",
    body_jp:
      "長崎、金沢、高浜、富山。yugyo は、自治体や観光協会とともに、デジタルノマドと地域をつなぐプロジェクトを設計し、実装します。",
    accent: "earth-ochre",
  },
  {
    slug: "consulting",
    title_jp: "Consulting",
    title_en: "Consulting",
    summary_jp: "企業の越境戦略・ワーケーション・地域連携を支援。",
    body_jp:
      "企業の越境戦略、ワーケーション設計、地域連携。yugyo は、これまで歩いてきた現場の知見から、企業の次の一歩を支援します。",
    accent: "sky-blue",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
