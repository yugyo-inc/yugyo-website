// content/profile.ts — 会社情報（恒久・brand-critical / 日英）
// 所在地（登記住所）は Ryo 承認のうえ 2026-06-05 追記済。資本金等は確定後 Ryo 承認で追記すること。
// 日本語訳ドラフト（label_en/value_en/bio_jp/role_jp）は Claude 作成・Ryo 承認待ち（2026-06-09）。

import type { Lang } from "@/lib/i18n";

export interface ProfileRow {
  label_jp: string;
  value_jp: string;
  label_en: string;
  value_en: string;
}

export const COMPANY_PROFILE: ProfileRow[] = [
  { label_jp: "会社名", value_jp: "株式会社 遊行（yugyo inc.）", label_en: "Company", value_en: "yugyo inc.（株式会社 遊行）" },
  { label_jp: "代表取締役", value_jp: "大瀬良 亮", label_en: "Representative Director", value_en: "Ryo Osera" },
  { label_jp: "設立", value_jp: "2023年", label_en: "Founded", value_en: "2023" },
  { label_jp: "資本金", value_jp: "900万円", label_en: "Capital", value_en: "JPY 9,000,000" },
  {
    label_jp: "所在地",
    value_jp: "〒810-0001 福岡県福岡市中央区天神1-11-1 ONE FUKUOKA BLDG. 7階",
    label_en: "Address",
    value_en: "ONE FUKUOKA BLDG. 7F, 1-11-1 Tenjin, Chuo-ku, Fukuoka 810-0001, Japan",
  },
  {
    label_jp: "事業内容",
    value_jp:
      "デジタルノマド・越境人材と日本の地域をつなぐ事業の企画・運営、行政・企業向けコンサルティング、Colive Fukuoka の主催。",
    label_en:
      "Business",
    value_en:
      "Planning and operation of programs connecting digital nomads and global talent with Japan's regions; consulting for the public and private sectors; host of Colive Fukuoka.",
  },
];

export function profileCell(row: ProfileRow, lang: Lang): { label: string; value: string } {
  return lang === "ja"
    ? { label: row.label_jp, value: row.value_jp }
    : { label: row.label_en, value: row.value_en };
}

// 代表者プロフィール（About ページ掲載）。Canva 公式会社案内 (DAHC_dG2H1c) 準拠 / 設立2023で統一。
export const FOUNDER = {
  name_en: "Ryo Osera",
  name_jp: "大瀬良 亮",
  role_en: "Founder & CEO",
  role_jp: "代表取締役",
  bio_en: [
    "Born in 1983 in Nagasaki, Japan. After graduating from the University of Tsukuba, Ryo began his career at Dentsu Inc., specializing in public relations and marketing strategy.",
    "He later served as Social Media Director for the Office of the Prime Minister of Japan and as an Urban Development Advisor to Tsukuba City. In 2019 he co-founded HafH, a subscription-based travel service, before founding yugyo inc. in 2023. He is currently an Associate Professor at the Frontier Institute of Tourism Sciences, Kanazawa University.",
  ],
  bio_jp: [
    "1983年、長崎県生まれ。筑波大学を卒業後、電通に入社し、PR・マーケティング戦略を専門とする。",
    "その後、内閣広報室のソーシャルメディアディレクター、つくば市の都市開発アドバイザーを歴任。2019年にサブスクリプション型の旅サービス HafH を共同創業し、2023年に株式会社 遊行を設立。現在は金沢大学 融合研究域 観光学のクロスアポイント准教授も務める。",
  ],
  experience: [
    { period: "2023–", role_en: "Associate Professor, Frontier Institute of Tourism Sciences, Kanazawa University", role_jp: "金沢大学 観光学 准教授（クロスアポイント）" },
    { period: "2023–", role_en: "Founder & CEO, yugyo inc.", role_jp: "株式会社 遊行 代表取締役" },
    { period: "2019–2022", role_en: "Co-Founder & CEO, HafH (KabuK Style Inc.)", role_jp: "HafH（株式会社 KabuK Style）共同創業・代表" },
    { period: "2018–2020", role_en: "Urban Development Advisor, Tsukuba City", role_jp: "つくば市 都市開発アドバイザー" },
    { period: "2015–2017", role_en: "Social Media Director, Office of the Prime Minister of Japan", role_jp: "内閣広報室 ソーシャルメディアディレクター" },
    { period: "2007–2019", role_en: "Dentsu Inc. — PR & marketing strategy", role_jp: "電通 — PR・マーケティング戦略" },
  ],
};

export function founderView(lang: Lang) {
  return {
    name_en: FOUNDER.name_en,
    name_jp: FOUNDER.name_jp,
    role: lang === "ja" ? FOUNDER.role_jp : FOUNDER.role_en,
    bio: lang === "ja" ? FOUNDER.bio_jp : FOUNDER.bio_en,
    experience: FOUNDER.experience.map((e) => ({
      period: e.period,
      role: lang === "ja" ? e.role_jp : e.role_en,
    })),
  };
}
