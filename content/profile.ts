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

// 代表者プロフィール（About ページ掲載）。経歴詳細は Ryo 承認のうえ追記・調整。
export const FOUNDER = {
  name_en: "Ryo Osera",
  name_jp: "大瀬良 亮",
  role: "Founder & CEO",
  bio: [
    "Ryo Osera is the founder and CEO of yugyo inc. From a base in Fukuoka, he leads the company's work across digital nomadism, regional revitalization, and global education.",
    "He founded and hosts Colive Fukuoka — one of Japan's largest gatherings of digital nomads — and holds a cross-appointment at Kanazawa University. He is a long-standing advocate for new ways of working, traveling, and living across borders.",
  ],
};
