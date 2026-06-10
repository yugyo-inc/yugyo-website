// content/copy.ts — COPY DECK（日英ミラー）
// ============================================================================
// 画面に出る「文字」を言語別に集約。COPY.ja / COPY.en で同じ構造を持つ。
//  - 値（" " の中）を書き換えるだけでOK。キー名や構造は変えない。
//  - <br> は改行、<b>…</b> は太字（そのまま残す）。
//  - getCopy(lang) で取り出す。既定は日本語（DEFAULT_LANG）。
//  - 日本語訳ドラフトは Claude 作成・Ryo 承認待ち（2026-06-09）。
// ============================================================================

import type { Lang } from "@/lib/i18n";

const en = {
  // ---- Header / Nav ----
  nav: { work: "Projects", about: "About", news: "News", contact: "Contact" },

  // ---- Hero ----
  hero: {
    eyebrow: "yugyo inc. — Fukuoka, Japan · Est. 2022",
    title: "Be where you are meant to be.",
    tags: ["Digital Nomadism", "Regional Revitalization", "Global Education"],
  },

  // ---- About / Manifesto ----
  about: {
    kicker: "00 — yugyo inc.",
    heading: "Blurring the<br>boundaries.",
    body: "yugyo inc. is a consulting and marketing agency — your local team in Japan. We help global companies and partners enter, grow, and belong here, across digital nomadism, regional revitalization, and education. From strategy to on-the-ground execution, we move with your goals.",
    note: "<b>yugyo (遊行)</b> — to journey as a form of practice. The company is named for the act of walking. We move first; the work follows.",
  },

  // ---- 写真バンド1 ----
  band1: {
    eyebrow: "遊行 — Walking the Wild",
    big: "Movement<br>as method.",
    sub: "The figure is always smaller than the place. So is the company.",
  },

  // ---- Projects（事業 4件）の本文インデックス ----
  work: {
    kicker: "01 — Projects",
    items: [
      { n: "01", slug: "digital-nomadism", title: "Digital Nomadism", desc: "Where global talent and Japanese regions build together.", el: "Water · Cross-border", color: "water", cta: "Read more →" },
      { n: "02", slug: "local-revitalization", title: "Local Revitalization", desc: "Making a new impact in Fukuoka, Nagasaki, and Kanazawa.", el: "Fire · Community", color: "fire", cta: "Read more →" },
      { n: "03", slug: "consulting", title: "Consulting", desc: "Cross-border strategy, workation, and regional partnership.", el: "Earth · Public", color: "earth", cta: "Read more →" },
      { n: "04", slug: "education", title: "Education", desc: "Rethinking how we work and how we travel.", el: "Sky · Counsel", color: "sky", cta: "Read more →" },
    ],
  },

  // ---- 写真バンド2（Colive）----
  band2: {
    eyebrow: "Colive Fukuoka",
    big: "Invest in your growth.",
    sub: "Over 500 people from more than 50 countries have come together for a whole new experience in Japan, combining work and travel.",
    linkLabel: "colivefukuoka.com →",
    linkUrl: "https://colivefukuoka.com",
  },

  // ---- Grounds（拠点 3都市）----
  grounds: {
    kicker: "02 — Grounds",
    items: [
      { n: "01", title: "Fukuoka", desc: "Home base. Host of Colive Fukuoka, one of Japan's largest hubs for digital nomads." },
      { n: "02", title: "Nagasaki", desc: "Digital Nomad Nagasaki. Tourism and regional co-creation, year on year." },
      { n: "03", title: "Kanazawa", desc: "Kanazawa University cross-appointment. Tourism and regional design." },
    ],
  },

  // ---- News（序）----
  news: {
    kicker: "News",
    seq: "序",
    theme: "Weaving Relations between<br>the world and locals.",
    lead: "PR, communications, and marketing — the work of connecting global movement with the people and places of Japan.",
    cta: "All news →",
    empty: "No published news yet.",
  },

  // ---- What we do（破）----
  whatwedo: {
    kicker: "What we do",
    seq: "破",
    theme: "From context,<br>we create meaning.",
    lead: "Interpretation. We read the deep grain of Japanese culture and carry meaning across — Japan sending, the world receiving.",
    keyword: "Interpretation",
  },

  // ---- Projects（急）グリッド ----
  projects: {
    kicker: "Projects",
    seq: "急",
    lead: "Four practices weaving global movement into the regions of Japan.",
    cta: "View the project →",
  },

  // ---- About & CTA（クロージング）----
  cta: {
    eyebrow: "Marketing agency for new opportunities",
    heading: "Let's shape the future together.",
    sub: "Start weaving new relations with us.",
    button: "Contact us",
  },

  // ---- Cookie 同意バナー ----
  cookie: {
    message:
      "We use cookies to understand how the site is used and to improve it. You can accept or decline analytics cookies.",
    accept: "Accept",
    decline: "Decline",
    policy: "Privacy Policy",
  },

  // ---- Newsletter ----
  newsletter: {
    eyebrow: "Newsletter",
    heading: "Letters from the road.",
    sub: "Notes on nomadism, regions, and the work — a few times a month.",
    placeholder: "you@example.com",
    button: "Subscribe",
    success: "Thank you — please check your inbox to confirm.",
    error: "Something went wrong. Please try again.",
  },

  // ---- Footer ----
  footer: {
    eyebrow: "Get in touch",
    vision: "Be where you are meant to be.",
    tagline: "Where the world's movement meets the regions of Japan.",
    menuLabel: "Menu",
    connectLabel: "Connect",
    email: "info@yugyo.work",
    social: [
      { label: "Instagram ↗", url: "https://www.instagram.com/yugyo_nomad/" },
      { label: "X ↗", url: "https://x.com/yugyo_jp" },
      { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/95682142" },
    ],
    copyright: "© 2026 yugyo inc. ／ 株式会社 遊行",
    place: "Fukuoka, Japan",
  },

  // ---- ページ見出し（About / Contact / News / Projects のヒーロー）----
  pages: {
    about: { title: "About", subtitle: "株式会社 遊行 ｜ yugyo inc." },
    contact: {
      title: "Let's walk together.",
      subtitle: "Partnerships, press, speaking, or working with us across borders and regions.",
    },
    news: { title: "News", subtitle: "Official updates from yugyo inc." },
    projects: { title: "Projects", subtitle: "Four practices, one direction — be where you are meant to be." },
  },

  // ---- About ページの節見出し ----
  about_page: { company: "01 — Company", founder: "02 — Founder", experience: "Experience" },

  // ---- Contact ページの aside 見出し ----
  contact_page: { email: "Email", social: "Social", based: "Based in" },
};

const ja: typeof en = {
  nav: { work: "事業内容", about: "会社概要", news: "最新情報", contact: "お問い合わせ" },

  hero: {
    eyebrow: "yugyo inc. — 福岡, 日本 · 2022年設立",
    title: "自分らしくいられる場所を見つけよう",
    tags: ["デジタルノマド", "地域共創", "グローバル教育"],
  },

  about: {
    kicker: "00 — 株式会社 遊行",
    heading: "自分らしくいられる場所を<br>選べる世界へ。",
    body: "世界中でボーダレスにビジネスを展開する起業家、スタートアップ、投資家らを中心とした高付加価値インバウンドと、国内外の地域の境界をゆるめるべく、事業開発からコンサルティング、ブランディング、マーケティングなど、国内外の企業の成長を総合的に支援しています。",
    note: "<b>遊行（ゆぎょう）</b>とは、仏教の僧侶が布教や修行のために各地を巡り歩くこと。古くは空海や行基、鎌倉末期に時宗を開いた一遍上人の遊行が知られ、知恵を持つ僧が各地を巡ることで、寺の建立や食文化の普及など地域文化の発展に貢献したという。スキルを持つ「個」が知恵を求めて移動する新時代に、誰もが地域へ知恵をもたらし、新しい風土をつくる。その願いを社名に込めました。",
  },

  band1: {
    eyebrow: "遊行 — Walking the Wild",
    big: "Be a Nomad.",
    sub: "人は、いつも場所より小さい。会社も、同じ。",
  },

  work: {
    kicker: "01 — 事業",
    items: [
      { n: "01", slug: "digital-nomadism", title: "デジタルノマド", desc: "世界の才能と日本の地域が、ともにつくる場所。", el: "水 · 越境", color: "water", cta: "詳しく見る →" },
      { n: "02", slug: "local-revitalization", title: "地域共創", desc: "福岡・長崎・金沢で、新しいインパクトを生む。", el: "火 · コミュニティ", color: "fire", cta: "詳しく見る →" },
      { n: "03", slug: "consulting", title: "コンサルティング", desc: "越境戦略、ワーケーション、地域連携の設計。", el: "土 · パブリック", color: "earth", cta: "詳しく見る →" },
      { n: "04", slug: "education", title: "教育", desc: "新しい働き方と、新しい旅のかたちを問い直す。", el: "空 · カウンセル", color: "sky", cta: "詳しく見る →" },
    ],
  },

  band2: {
    eyebrow: "Colive Fukuoka",
    big: "成長に投資する。",
    sub: "50カ国以上、500人を超える人々が、働くことと旅することを掛け合わせた、日本での新しい体験のために集いました。",
    linkLabel: "colivefukuoka.com →",
    linkUrl: "https://colivefukuoka.com",
  },

  grounds: {
    kicker: "02 — 拠点",
    items: [
      { n: "01", title: "福岡", desc: "本拠地。日本最大級のデジタルノマド拠点 Colive Fukuoka を主催。" },
      { n: "02", title: "長崎", desc: "Digital Nomad Nagasaki。観光と地域共創を、年を重ねて育てる。" },
      { n: "03", title: "金沢", desc: "金沢大学とのクロスアポイント。観光と地域デザイン。" },
    ],
  },

  news: {
    kicker: "最新情報",
    seq: "序",
    theme: "世界と地域のあいだに、<br>関係を編む。",
    lead: "PR・コミュニケーション・マーケティング。世界の移動を、日本の人と地域に結び直す仕事。",
    cta: "すべてのニュース →",
    empty: "公開中のニュースはまだありません。",
  },

  whatwedo: {
    kicker: "What we do",
    seq: "破",
    theme: "From context,<br>we create meaning.",
    lead: "事業内容",
    keyword: "解釈 / Interpretation",
  },

  projects: {
    kicker: "事業",
    seq: "急",
    lead: "4つの事業で、世界の移動と日本の地域をつなぎ直す。",
    cta: "事業を見る →",
  },

  cta: {
    eyebrow: "新しい機会のためのマーケティングエージェンシー",
    heading: "いっしょに、未来をかたちにする。",
    sub: "新しい関係を、ここから編みはじめる。",
    button: "お問い合わせ",
  },

  cookie: {
    message:
      "サイトの利用状況を把握し、改善するためにクッキーを使用します。分析クッキーは同意・拒否を選べます。",
    accept: "同意する",
    decline: "拒否する",
    policy: "プライバシーポリシー",
  },

  newsletter: {
    eyebrow: "ニュースレター",
    heading: "旅路からの便り。",
    sub: "デジタルノマド、インバウンドマーケティングなど不定期に情報をご提供しています。",
    placeholder: "you@example.com",
    button: "登録",
    success: "ありがとうございます。確認メールをご覧ください。",
    error: "問題が発生しました。もう一度お試しください。",
  },

  footer: {
    eyebrow: "お問い合わせ",
    vision: "いちばん「自分らしく」いられる場所へ。",
    tagline: "世界の移動が、日本の地域と出会う場所。",
    menuLabel: "メニュー",
    connectLabel: "つながる",
    email: "info@yugyo.work",
    social: [
      { label: "Instagram ↗", url: "https://www.instagram.com/yugyo_nomad/" },
      { label: "X ↗", url: "https://x.com/yugyo_jp" },
      { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/95682142" },
    ],
    copyright: "© 2026 株式会社 遊行 ／ yugyo inc.",
    place: "福岡, 日本",
  },

  pages: {
    about: { title: "会社概要", subtitle: "株式会社 遊行 ｜ yugyo inc." },
    contact: {
      title: "お問い合わせ",
      subtitle: "パートナーシップ、取材、登壇、越境・地域でのご一緒。お気軽にどうぞ。",
    },
    news: { title: "最新情報", subtitle: "株式会社 遊行 からの公式お知らせ" },
    projects: { title: "事業", subtitle: "4つの事業、ひとつの方向 — 在るべき場所へ。" },
  },

  about_page: { company: "01 — 会社概要", founder: "02 — 代表", experience: "経歴" },

  contact_page: { email: "メール", social: "ソーシャル", based: "拠点" },
};

export const COPY = { ja, en };

export function getCopy(lang: Lang) {
  return COPY[lang];
}

export type Copy = typeof en;
