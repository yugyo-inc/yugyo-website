// content/profile.ts — 会社情報（恒久・brand-critical）
// 所在地（登記住所）は Ryo 承認のうえ 2026-06-05 追記済。資本金等は確定後 Ryo 承認で追記すること。

export interface ProfileRow {
  label_jp: string;
  value_jp: string;
}

export const COMPANY_PROFILE: ProfileRow[] = [
  { label_jp: "会社名", value_jp: "株式会社 遊行（yugyo inc.）" },
  { label_jp: "代表取締役", value_jp: "大瀬良 亮" },
  { label_jp: "設立", value_jp: "2023年" },
  { label_jp: "資本金", value_jp: "900万円" },
  { label_jp: "所在地", value_jp: "〒810-0001 福岡県福岡市中央区天神1-11-1 ONE FUKUOKA BLDG. 7階" },
  {
    label_jp: "事業内容",
    value_jp:
      "デジタルノマド・越境人材と日本の地域をつなぐ事業の企画・運営、行政・企業向けコンサルティング、Colive Fukuoka の主催。",
  },
];

// 代表者プロフィール（About ページ掲載）。Canva 公式会社案内 (DAHC_dG2H1c) 準拠 / 設立2023で統一。
export const FOUNDER = {
  name_en: "Ryo Osera",
  name_jp: "大瀬良 亮",
  role: "Founder & CEO",
  bio: [
    "Born in 1983 in Nagasaki, Japan. After graduating from the University of Tsukuba, Ryo began his career at Dentsu Inc., specializing in public relations and marketing strategy.",
    "He later served as Social Media Director for the Office of the Prime Minister of Japan and as an Urban Development Advisor to Tsukuba City. In 2019 he co-founded HafH, a subscription-based travel service, before founding yugyo inc. in 2023. He is currently an Associate Professor at the Frontier Institute of Tourism Sciences, Kanazawa University.",
  ],
  experience: [
    { period: "2023–", role: "Associate Professor, Frontier Institute of Tourism Sciences, Kanazawa University" },
    { period: "2023–", role: "Founder & CEO, yugyo inc." },
    { period: "2019–2022", role: "Co-Founder & CEO, HafH (KabuK Style Inc.)" },
    { period: "2018–2020", role: "Urban Development Advisor, Tsukuba City" },
    { period: "2015–2017", role: "Social Media Director, Office of the Prime Minister of Japan" },
    { period: "2007–2019", role: "Dentsu Inc. — PR & marketing strategy" },
  ],
};
