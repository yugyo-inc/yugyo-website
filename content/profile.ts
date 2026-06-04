// content/profile.ts — 会社情報（恒久・brand-critical）
// 住所・資本金など登記情報の確定値が必要になったら Ryo 承認のうえ追記すること。

export interface ProfileRow {
  label_jp: string;
  value_jp: string;
}

export const COMPANY_PROFILE: ProfileRow[] = [
  { label_jp: "会社名", value_jp: "株式会社 遊行（yugyo inc.）" },
  { label_jp: "代表取締役", value_jp: "大瀬良 亮" },
  { label_jp: "設立", value_jp: "2023年" },
  { label_jp: "拠点", value_jp: "福岡市" },
  {
    label_jp: "事業内容",
    value_jp:
      "デジタルノマド・越境人材と日本の地域をつなぐ事業の企画・運営、行政・企業向けコンサルティング、Colive Fukuoka の主催。",
  },
];
