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
  { label_jp: "設立", value_jp: "2022年9月", label_en: "Founded", value_en: "September 2022" },
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
    "1983年、長崎県長崎市生まれ。筑波大学卒業後、株式会社電通でプロモーション・PR分野の経験を積み、内閣官房 首相官邸のソーシャルメディアディレクター、つくば市役所のまちづくりアドバイザーを歴任。",
    "その後、旅のサブスク「HafH（ハフ）」を共同創業し、株式会社 遊行を設立。現在は金沢大学 先端観光科学研究所 特任准教授、一般社団法人 日本デジタルノマド協会 幹事としても活動し、日本・海外のデジタルノマド市場の発展に取り組む。",
  ],
  experience: [
    { period: "2023–", role_en: "Associate Professor, Frontier Institute of Tourism Sciences, Kanazawa University", role_jp: "金沢大学 先端観光科学研究所 特任准教授" },
    { period: "2022–", role_en: "Founder & CEO, yugyo inc.", role_jp: "株式会社 遊行 代表取締役CEO" },
    { period: "2019–2022", role_en: "Co-Founder & CEO, HafH (KabuK Style Inc.)", role_jp: "HafH（株式会社 KabuK Style）共同創業・代表取締役" },
    { period: "2018–2020", role_en: "Urban Development Advisor, Tsukuba City", role_jp: "つくば市役所 まちづくりアドバイザー" },
    { period: "2015–2017", role_en: "Social Media Director, Office of the Prime Minister of Japan", role_jp: "内閣官房 首相官邸 ソーシャルメディアディレクター" },
    { period: "2007–2019", role_en: "Dentsu Inc. — PR & marketing strategy", role_jp: "株式会社電通 — PR・マーケティング領域" },
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
