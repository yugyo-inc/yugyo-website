// content/copy.ts — COPY DECK（コピーデック）
// ============================================================================
// 画面に出る「文字」を全部ここに集約。テキスト修正はこのファイルの値だけ変える。
//  - 値（" " の中）を書き換えるだけでOK。キー名や構造は変えない。
//  - <br> は改行、<b>…</b> は太字（そのまま残す）。
//  - 英語ベース。日本語を出したい箇所だけ日本語を入れる。
// v2 デザイン（English / Helvetica / editorial）の全文言。
// ※ 承認後 Next.js 本体がこの deck を読み込む → 編集して push するだけで本番反映。
// ============================================================================

export const COPY = {
  // ---- Header / Nav ----
  nav: { work: "Work", about: "About", news: "News", contact: "Contact" },

  // ---- Hero（ファーストビュー）----
  hero: {
    eyebrow: "yugyo inc. — Fukuoka, Japan · Est. 2023",
    title: "Be where you are meant to be.",
    tags: ["Digital Nomadism", "Cross-border Mobility", "Regional Co-creation"],
  },

  // ---- About / Manifesto ----
  about: {
    kicker: "00 — yugyo inc.",
    heading: "We walk<br>before we claim.",
    body: "yugyo works where the world's movement meets the regions of Japan. We build the programs, the gatherings, and the partnerships that let people who cross borders find a place to belong — starting in Fukuoka, and walking outward.",
    note: "<b>yugyo (遊行)</b> — to journey as a form of practice. The company is named for the act of walking. We move first; the work follows.",
  },

  // ---- 写真バンド 1（遊行 / 巡礼者）----
  band1: {
    eyebrow: "遊行 — Walking the Wild",
    big: "Movement<br>as method.",
    sub: "The figure is always smaller than the place. So is the company.",
  },

  // ---- Work（事業 4件）----
  work: {
    kicker: "01 — Work",
    items: [
      { n: "01", title: "Ikigai Co-Creator Program", desc: "Where global talent and Japanese regions build together.", el: "Water · Cross-border", color: "water" },
      { n: "02", title: "Colive Fukuoka", desc: "Asia's gathering of digital nomads. 57 countries, one city.", el: "Fire · Community", color: "fire" },
      { n: "03", title: "Public Sector", desc: "Regional co-creation with Nagasaki, Kanazawa, Toyama, Takahama.", el: "Earth · Public", color: "earth" },
      { n: "04", title: "Consulting", desc: "Cross-border strategy, workation, and regional partnership.", el: "Sky · Counsel", color: "sky" },
    ],
  },

  // ---- 写真バンド 2（高峰 / Colive 数字）----
  band2: {
    eyebrow: "Colive Fukuoka — 2025",
    big: "57 countries.",
    sub: "500+ people. ¥140M of economic impact. One city in the west of Japan.",
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

  // ---- News ----
  news: {
    kicker: "03 — News",
    cta: "All news →",
    empty: "No published news yet. — Sono / Haruka publish here.",
  },

  // ---- Footer ----
  footer: {
    eyebrow: "Get in touch",
    vision: "Be where you are meant to be.",
    tagline: "Where the world's movement meets the regions of Japan.",
    email: "info@yugyo.work",
    social: [
      { label: "Threads ↗", url: "https://www.threads.net/@yugyo.inc" },
      { label: "X ↗", url: "https://x.com/yugyo_inc" },
      { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/yugyo-inc" },
    ],
    copyright: "© 2026 yugyo inc. ／ 株式会社 遊行",
    place: "Fukuoka, Japan",
  },
} as const;

export type Copy = typeof COPY;
