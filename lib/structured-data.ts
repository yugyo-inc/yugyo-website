// lib/structured-data.ts — JSON-LD（schema.org）ペイロード生成。
// 目的: Google が yugyo inc. を Organization として認識し、Knowledge Panel /
// リッチスニペットに表示できるようにする。layout.tsx と news/[slug] で利用。

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "yugyo inc.",
  alternateName: ["株式会社 遊行", "yugyo", "遊行"],
  url: "https://yugyo.work",
  logo: "https://yugyo.work/brand/wordmark_white.png",
  founder: {
    "@type": "Person",
    name: "Ryo Osera",
    alternateName: "大瀬良 亮",
    jobTitle: "CEO",
    url: "https://yugyo.work/about",
    sameAs: ["https://note.com/ryosera", "https://x.com/yugyo_jp"],
  },
  foundingDate: "2022-09",
  address: {
    "@type": "PostalAddress",
    streetAddress: "天神1-11-1 ONE FUKUOKA BLDG. 7F",
    addressLocality: "福岡市中央区",
    addressRegion: "福岡県",
    postalCode: "810-0001",
    addressCountry: "JP",
  },
  email: "info@yugyo.work",
  sameAs: [
    "https://www.instagram.com/yugyo_nomad/",
    "https://x.com/yugyo_jp",
    "https://www.linkedin.com/company/95682142",
  ],
  description:
    "yugyo inc. 株式会社 遊行 — デジタルノマド・地域共創・グローバル教育のコンサルティングエージェンシー。福岡拠点。Colive Fukuoka 主催。",
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "yugyo inc.",
  url: "https://yugyo.work",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yugyo.work/news?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["ja", "en"],
};

export function jsonLdScript<T>(data: T) {
  return {
    __html: JSON.stringify(data),
  };
}
