// content/copy.ts — COPY DECK（コピーデック）
// ============================================================================
// 画面に出る「文字」を全部ここに集約。テキスト修正はこのファイルの値だけ変える。
//  - 値（" " の中）を書き換えるだけでOK。キー名や構造は変えない。
//  - <br> は改行、<b>…</b> は太字（そのまま残す）。
//  - 英語ベース。日本語を出したい箇所だけ日本語を入れる。
// 編集はスプレッドシート: 1oFdgYlgX-l5U78hLk2o7CJqHNv7U8iKHeQOT-WDIuFs（修正後列）→ Claude が同期。
// 直近同期: 2026-06-05（Ryo シート編集を反映）
// ============================================================================

export const COPY = {
  // ---- Header / Nav ----
  nav: { work: "Project", about: "About", news: "News", contact: "Contact" },

  // ---- Hero（ファーストビュー）----
  hero: {
    eyebrow: "yugyo inc. — Fukuoka, Japan · Est. 2023",
    title: "Be where you are meant to be.",
    tags: ["Digital Nomadism", "Regional Revitalization", "Global Education"],
  },

  // ---- About / Manifesto ----
  about: {
    kicker: "00 — yugyo inc.",
    heading: "Blurring the<br>boundaries.",
    body: "yugyo inc. is a consulting and marketing agency — your local team in Japan. We help global companies and partners enter, grow, and belong here, across digital nomadism, regional revitalization, and education. From strategy to on-the-ground execution, we move with your goals.",
    // 注記: シートで #VALUE! エラーのため原文を維持（必要なら Ryo 再入力）
    note: "<b>yugyo (遊行)</b> — to journey as a form of practice. The company is named for the act of walking. We move first; the work follows.",
  },

  // ---- 写真バンド1（遊行 / 巡礼者）----
  band1: {
    eyebrow: "遊行 — Walking the Wild",
    big: "Movement<br>as method.",
    sub: "The figure is always smaller than the place. So is the company.",
  },

  // ---- Project（事業 4件）----
  work: {
    kicker: "01 — Project",
    items: [
      { n: "01", title: "Digital Nomadism", desc: "Where global talent and Japanese regions build together.", el: "Water · Cross-border", color: "water" },
      { n: "02", title: "Local Revitalization", desc: "Making a new impact in Fukuoka, Nagasaki, and Kanazawa.", el: "Fire · Community", color: "fire" },
      { n: "03", title: "Consulting", desc: "Cross-border strategy, workation, and regional partnership.", el: "Earth · Public", color: "earth" },
      { n: "04", title: "Education", desc: "This raises questions about new ways of working and new ways of traveling.", el: "Sky · Counsel", color: "sky" },
    ],
  },

  // ---- 写真バンド2（高峰 / Colive 数字）----
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

  // ---- News（Mission & How-to／園田カラー）----
  // doy concept: Weaving Relations between the world and locals
  news: {
    kicker: "News",
    seq: "序", // jo-ha-kyū marker (between 序 and 破)
    theme: "Weaving Relations between<br>the world and locals.",
    lead: "PR, communications, and marketing — the work of connecting global movement with the people and places of Japan.",
    cta: "All news →",
    empty: "No published news yet.",
  },

  // ---- What we do（Values & Style／どいカラー・破）----
  // doy concept: From context, we create meaning. keyword = interpretation
  whatwedo: {
    kicker: "What we do",
    seq: "破",
    theme: "From context,<br>we create meaning.",
    lead: "Interpretation. We read the deep grain of Japanese culture and carry meaning across — Japan sending, the world receiving.",
    keyword: "Interpretation",
  },

  // ---- Projects（急）----
  // Clients & Partners ロゴは権利確認後に追加（現状は非表示）
  projects: {
    kicker: "Projects",
    seq: "急",
    clientsHeading: "Our Clients & Partners", // 未使用（ロゴ確定後に復活）
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

  // ---- Newsletter（登録）----
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
    email: "info@yugyo.work",
    social: [
      { label: "Instagram ↗", url: "https://www.instagram.com/yugyo_nomad/" },
      { label: "X ↗", url: "https://x.com/yugyo_jp" },
      { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/95682142" },
    ],
    copyright: "© 2026 yugyo inc. ／ 株式会社 遊行",
    place: "Fukuoka, Japan",
  },
} as const;

export type Copy = typeof COPY;
