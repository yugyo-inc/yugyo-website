// lib/constants.ts — brand-critical, hardcoded copy (Walking the Wild v4.0)
// 編集は git PR 経由のみ。Kill List / CLAUDE.md の制約を必ず守ること。

export const SITE = {
  name_en: "yugyo inc.",
  name_jp: "株式会社 遊行",
  url: "https://yugyo.work",
  contact_email: "info@yugyo.work",
  founding_year: 2022,
  description_jp:
    "yugyo inc.（株式会社 遊行）は、福岡を拠点に、デジタルノマド・越境・地域共創を手がける会社です。",
  description_en:
    "yugyo inc. — a Fukuoka-based company working at the intersection of digital nomadism, cross-border mobility, and regional co-creation.",
} as const;

// 唯一の brand quote（全層で同形に反復する）。italic で組まない。
export const VISION = {
  en: "Be where you are meant to be.",
  jp: "いちばん「自分らしく」いられる場所へ。",
} as const;

// Personality — 5 markers（v4 Walking the Wild）
export const PERSONALITY_TRAITS = [
  { code: "静", en: "Composure", note_jp: "山頂の静けさ。登り切った者の余裕。" },
  { code: "知", en: "Intellect", note_jp: "知の結節点。" },
  { code: "歩", en: "Walking", note_jp: "遊行 = 巡る修行。まず歩く。" },
  { code: "余", en: "Margin", note_jp: "装飾の不在ではなく、呼吸の余地。" },
  { code: "国", en: "International", note_jp: "越境を前提とした事業設計。" },
] as const;

// Mission — Vision を事業のことばに落としたもの
export const MISSION = {
  jp: "人が、いちばん自分らしくいられる場所へ歩いていける世界をつくる。海を越えて働き、巡り、暮らす人たちと、日本の地域を結び直す。",
  lead_jp:
    "主張する前に、まず歩く。yugyo は、デジタルノマドの越境と日本の地域共創を、実装の積み重ねで前に進めます。",
} as const;

// ナビゲーション
export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

// 外部リンク（SNS / 関連サイト）
export const SOCIAL_LINKS = [
  { label: "Threads", href: "https://www.threads.net/@yugyo.inc" },
  { label: "X", href: "https://x.com/yugyo_inc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/yugyo-inc" },
] as const;

export const EXTERNAL = {
  colive_fukuoka: "https://colivefukuoka.com",
} as const;
