// lib/thepier-ld.ts — The Pier Coliving の構造化データ（SEO/AIO 対策）
// LodgingBusiness: Google のリッチリザルト・ナレッジグラフ・AI Overview が
// 施設情報（所在地・価格帯・設備）を機械可読で取得できるようにする。
// FAQPage: FAQ リッチリザルト＋AI 回答エンジンへの一次情報提供。
import { getThePier } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

const BASE = "https://yugyo.work";

export function pierLodgingLd(lang: Lang) {
  const url = lang === "ja" ? `${BASE}/thepiercoliving` : `${BASE}/en/thepiercoliving`;
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    additionalType: "https://schema.org/Hostel",
    name: "The Pier Coliving",
    alternateName: "The Pier | Goto Nagasaki",
    description:
      lang === "ja"
        ? "長崎・五島列島のコリビング（家具付きシェアハウス）。鍵付き個室6室、コワーキング。家賃55,000円＋光熱費・共益費15,000円（月額合計70,000円）から。株式会社 遊行が運営。"
        : "A coliving space in Japan on the Goto Islands, Nagasaki. Six furnished private rooms, coworking space, utilities and Wi-Fi included from US$520/month. Operated by yugyo inc.",
    url,
    image: `${BASE}/photos/thepier/hero.jpg`,
    email: "coliving@yugyo.work",
    priceRange: lang === "ja" ? "¥70,000〜/月（家賃＋光熱費・共益費）" : "From US$520/month",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1-7-12 Bukeyashiki, 2F SERENDIP HOTEL GOTO",
      addressLocality: "Goto",
      addressRegion: "Nagasaki",
      postalCode: "853-0017",
      addressCountry: "JP",
    },
    geo: { "@type": "GeoCoordinates", latitude: 32.6885, longitude: 128.8419 },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private lockable rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Coworking space", value: true },
      { "@type": "LocationFeatureSpecification", name: "Meeting room", value: true },
      { "@type": "LocationFeatureSpecification", name: "High-speed Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shared kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry", value: true },
      { "@type": "LocationFeatureSpecification", name: "Utilities included", value: true },
    ],
    numberOfRooms: 6,
    petsAllowed: false,
    sameAs: [
      "https://www.instagram.com/thepiergoto/",
      "https://coliving.com/spaces/kqmdc4ca",
      "https://address.love/homes/502",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "yugyo inc.",
      url: BASE,
    },
  };
}

export function pierFaqLd(lang: Lang) {
  const c = getThePier(lang);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
