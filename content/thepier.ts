// content/thepier.ts — The Pier | Goto Nagasaki（Coliving）ページの日英コンテンツ
// ============================================================================
// 出典: The Pier | Wiki（Notion）Basic Info（ee2afa91…）・賃料表・FAQ・コンセプト
// 料金・フローは 2026-07 時点。改定時はこのファイルのみ更新すればよい。
// ============================================================================

import type { Lang } from "@/lib/i18n";

export interface PierPrice {
  label: string;
  value: string;
  note?: string;
}

export interface PierFaq {
  q: string;
  a: string;
}

interface PierContent {
  metaTitle: string;
  metaDescription: string;
  nav: {
    story: string;
    rooms: string;
    rates: string;
    access: string;
    faq: string;
    apply: string;
    parent: string;
  };
  hero: { eyebrow: string; title: string; sub: string; cta: string };
  story: {
    kicker: string;
    heading: string;
    body: string[];
    note: string;
  };
  gallery: { kicker: string };
  rooms: {
    kicker: string;
    heading: string;
    lead: string;
    items: { title: string; desc: string }[];
  };
  space: {
    kicker: string;
    heading: string;
    items: { title: string; desc: string }[];
  };
  pricing: {
    kicker: string;
    heading: string;
    lead: string;
    monthly: PierPrice[];
    short: PierPrice[];
    note: string;
  };
  flow: {
    kicker: string;
    heading: string;
    steps: { title: string; desc: string }[];
    note: string;
  };
  access: {
    kicker: string;
    heading: string;
    address: string;
    addressUrl: string;
    body: string;
  };
  faq: { kicker: string; items: PierFaq[] };
  apply: {
    kicker: string;
    heading: string;
    sub: string;
    name: string;
    namePh: string;
    email: string;
    emailPh: string;
    moveIn: string;
    length: string;
    lengthOptions: string[];
    guests: string;
    guestsOptions: string[];
    message: string;
    messagePh: string;
    send: string;
    sending: string;
    ok: string;
    errFill: string;
    errSend: string;
    hp: string;
  };
  links: {
    kicker: string;
    items: { label: string; url: string }[];
  };
  footerNote: string;
}

const en: PierContent = {
  metaTitle: "The Pier | Goto Nagasaki — Coliving on Japan's western islands",
  metaDescription:
    "The Pier is a coliving space on the Goto Islands, Nagasaki — six private rooms, coworking, and island life on Japan's western edge. Monthly stays from US$500, operated by yugyo inc.",
  nav: {
    story: "Story",
    rooms: "Rooms",
    rates: "Rates",
    access: "Access",
    faq: "FAQ",
    apply: "Apply Now",
    parent: "yugyo inc.",
  },
  hero: {
    eyebrow: "Coliving space in Goto Islands, Nagasaki, Japan",
    title: "To Live. To Belong.",
    sub: "A coliving space on Japan's western edge — where remote work meets island life.",
    cta: "Apply Now",
  },
  story: {
    kicker: "01 — Story",
    heading: "Where wind meets soil.",
    body: [
      "The Goto Islands sit at the far western edge of Japan — blue sea, white sky, historic churches, and a pace of life the mainland forgot. The Pier opened here in 2018, and is now run by yugyo inc., a Fukuoka company that connects global movement with Japan's regions.",
      "We named it The Pier because that is what it is: a landing place. Residents (the wind) and islanders (the soil) mix here, and something new grows — what Japanese calls fudo, the character of a place. This is not a residence closed to its members. It is a home that stays open to the island.",
    ],
    note: "The interior is designed after the piers of Goto, in the blue of its sea and the white of its sky.",
  },
  gallery: { kicker: "02 — The Place" },
  rooms: {
    kicker: "03 — Rooms",
    heading: "Semi-double. Six rooms. One island.",
    lead: "Every room is private and lockable, furnished with a semi-double bed, desk, chair, and storage — so two people can share a room, and one person can spread out.",
    items: [
      { title: "6 private rooms", desc: "Lockable, fully furnished. Up to two guests per room on the semi-double bed." },
      { title: "Residents-only floor", desc: "The Pier occupies the second floor of SERENDIP HOTEL GOTO, with its own dedicated entrances." },
      { title: "English support", desc: "Everything from application to move-in works in English. The community runs on WhatsApp." },
    ],
  },
  space: {
    kicker: "04 — The Space",
    heading: "Everything you need. Nothing you don't.",
    items: [
      { title: "Coworking & meeting room", desc: "Fast, stable Wi-Fi, comfortable workspaces, and a meeting room for your video calls." },
      { title: "Shared kitchen & living", desc: "Cook, eat, and unwind together — or find a quiet corner of your own." },
      { title: "Utilities included", desc: "Water, electricity, gas, Wi-Fi, and regular cleaning of common areas. No hidden fees." },
      { title: "Shower & laundry", desc: "Shower rooms and washing machines on the floor, shared by residents." },
      { title: "Walkable neighborhood", desc: "Supermarkets, cafés, restaurants, and drugstores within walking distance. Fukue Port is a 10-minute walk." },
      { title: "Island life at the door", desc: "Cycling, hiking, beaches, historic churches and lighthouses — and the calm to actually enjoy them." },
    ],
  },
  pricing: {
    kicker: "05 — Rates",
    heading: "Stay a month. Or a night.",
    lead: "Monthly residents are the heart of The Pier. Short stays are welcome when rooms are open.",
    monthly: [
      { label: "Monthly stay", value: "US$500 / month", note: "Community fee — utilities, Wi-Fi, and common service fee included" },
      { label: "High season (Jul–Sep)", value: "+ US$100 / month", note: "Tax included" },
      { label: "Deposit", value: "US$200", note: "Refunded in JPY (¥30,000) at move-out if no problems" },
      { label: "Second guest", value: "+50%", note: "The 2nd person stays at half price — 1.5× the standard rate in total" },
    ],
    short: [
      { label: "Short stay", value: "From ¥4,400 / night", note: "Tax included" },
      { label: "High season (Jul–Oct)", value: "+ ¥1,100 / night", note: "Tax included" },
    ],
    note: "Rates as of July 2026 and subject to change. Pro-rated stays of one month or more are possible. Payment works online — Wise, PayPal, Stripe, or bank transfer.",
  },
  flow: {
    kicker: "06 — How to join",
    heading: "Four steps to the island.",
    steps: [
      { title: "Apply", desc: "Send the application below. We reply within 3 business days (check your spam folder if you don't hear from us)." },
      { title: "Meet us online", desc: "A short interview or viewing call, if needed — so both sides know it's a fit." },
      { title: "Contract & first payment", desc: "Sign the agreement and transfer the first month at least one month before move-in. Online payment supported." },
      { title: "Move in", desc: "We guide your check-in, hand over your room, and welcome you to the residents' WhatsApp group." },
    ],
    note: "Terms and conditions for the move-in application are available on request.",
  },
  access: {
    kicker: "07 — Access",
    heading: "Closer than you think.",
    address: "2F SERENDIP HOTEL GOTO, 1-7-12 Bukeyashiki, Goto, Nagasaki 853-0017, Japan",
    addressUrl: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+1-7-12+Bukeyashiki+Goto+Nagasaki",
    body: "Fly from Fukuoka or Nagasaki to Fukue Airport, or take the ferry or jetfoil to Fukue Port. The Pier is a 10-minute walk from the port — no car needed. We will guide you on the best route from wherever you are.",
  },
  faq: {
    kicker: "08 — FAQ",
    items: [
      { q: "What is included in the fee?", a: "A private lockable room, high-speed Wi-Fi, shared kitchen, living, and coworking spaces, utilities (water, electricity, gas), and regular cleaning of common areas. No hidden fees." },
      { q: "Is there privacy in a coliving space?", a: "Yes. Every resident has a private, lockable room, and the shared spaces are designed for both connection and quiet time." },
      { q: "Who stays at The Pier?", a: "Digital nomads, remote workers, and travelers from Japan and around the world — people who enjoy meeting others while keeping the calm of island life." },
      { q: "Is it suitable for remote work?", a: "Absolutely. Fast, stable Wi-Fi, comfortable workspaces, quiet surroundings, and a meeting room for online meetings." },
      { q: "Can I get there without a car?", a: "Yes. Reach Goto by ferry or plane; from Fukue Port or Airport, The Pier is accessible by bus, taxi, or a short walk. Note: no parking is available at the facility." },
      { q: "What should I bring?", a: "Rooms come fully furnished — bed, desk, chair, storage. Just bring your clothes and personal items. Daily essentials are available at nearby shops." },
    ],
  },
  apply: {
    kicker: "09 — Apply",
    heading: "The island is waiting.",
    sub: "Tell us when you are coming and for how long — we reply within 3 business days.",
    name: "Name *",
    namePh: "Your name",
    email: "Email *",
    emailPh: "you@example.com",
    moveIn: "Preferred move-in date",
    length: "Length of stay",
    lengthOptions: ["Short stay (nights)", "1 month", "2–3 months", "3+ months", "Undecided"],
    guests: "Guests",
    guestsOptions: ["1 person", "2 people (same room)"],
    message: "Anything you'd like to tell us",
    messagePh: "Your work, your plans in Goto, questions — anything.",
    send: "Apply Now",
    sending: "Sending…",
    ok: "Thank you — your application has been sent. We will reply within 3 business days.",
    errFill: "Please fill in your name and email.",
    errSend: "Sorry, something went wrong. Please email coliving@yugyo.work directly.",
    hp: "Leave empty",
  },
  links: {
    kicker: "Find us on",
    items: [
      { label: "Instagram @thepiergoto", url: "https://www.instagram.com/thepiergoto/" },
      { label: "Mapmelon", url: "https://www.mapmelon.com/colivings/the-pier-goto-nagasaki" },
      { label: "Coliving.com", url: "https://coliving.com" },
      { label: "Google Maps", url: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+1-7-12+Bukeyashiki+Goto+Nagasaki" },
    ],
  },
  footerNote: "The Pier | Goto Nagasaki is operated by yugyo inc. — coliving@yugyo.work",
};

const ja: PierContent = {
  metaTitle: "The Pier | Goto Nagasaki — 五島列島のコリビング",
  metaDescription:
    "The Pier は長崎・五島列島のコリビング施設。鍵付き個室6室とコワーキング、島の暮らし。月額55,000円から、1泊からの短期滞在も。株式会社 遊行が運営しています。",
  nav: {
    story: "ストーリー",
    rooms: "部屋",
    rates: "料金",
    access: "アクセス",
    faq: "FAQ",
    apply: "入居申込",
    parent: "yugyo inc.",
  },
  hero: {
    eyebrow: "Coliving space in Goto Islands, Nagasaki | 五島列島のコリビング",
    title: "To Live. To Belong.",
    sub: "日本の西の果てで、ゆっくり暮らす。リモートワークと島の暮らしが、ここで出会う。",
    cta: "入居を申し込む",
  },
  story: {
    kicker: "01 — ストーリー",
    heading: "風と土が混じり合う場所。",
    body: [
      "日本の西の果て、五島列島。青い海と白い空、歴史ある教会群、そして本土が忘れてしまった暮らしの速度がここにあります。The Pier は2018年にこの島で生まれ、現在は、世界の移動と日本の地域をつなぐ株式会社 遊行が運営しています。",
      "桟橋（Pier)という名前のとおり、ここは「たどり着く場所」です。住人（風の人）と島の人（土の人）が混じり合い、新しい風土が生まれる。自分たちだけがいい暮らしの場ではなく、地域に開かれ、地域と共に暮らす家でありたいと願っています。",
    ],
    note: "内装は五島の桟橋をモチーフに、五島の海の青と空の白でデザインされています。",
  },
  gallery: { kicker: "02 — 場所" },
  rooms: {
    kicker: "03 — 部屋",
    heading: "セミダブル、全6室。",
    lead: "すべて鍵付きの個室。セミダブルベッド・机・椅子・収納を備え、ひとりでゆったり、ふたりでの同室滞在も可能です。",
    items: [
      { title: "個室6室", desc: "鍵付き・家具付き。セミダブルベッドで1室2名まで滞在できます。" },
      { title: "住人専用フロア", desc: "SERENDIP HOTEL GOTO の2階全体が The Pier。専用の出入口があります。" },
      { title: "英語サポート", desc: "申込から入居まで英語で完結。コミュニティは WhatsApp でつながっています。" },
    ],
  },
  space: {
    kicker: "04 — 空間",
    heading: "必要なものは、すべて。余計なものは、なにも。",
    items: [
      { title: "コワーキング＆ミーティングルーム", desc: "高速で安定したWi-Fiと快適なワークスペース。Web会議用の個室もあります。" },
      { title: "共用キッチン＆リビング", desc: "つくって、食べて、くつろぐ。静かに過ごせる場所もあります。" },
      { title: "光熱費込み", desc: "水道・電気・ガス・Wi-Fi、共用部の定期清掃まで含まれています。追加料金はありません。" },
      { title: "シャワー＆ランドリー", desc: "シャワールームと洗濯機をフロア内に完備。住人で共用します。" },
      { title: "徒歩圏の暮らし", desc: "スーパー、カフェ、飲食店、ドラッグストアが徒歩圏内。福江港から徒歩10分。" },
      { title: "島の暮らしが、すぐそこに", desc: "サイクリング、ハイキング、ビーチ、教会と灯台。それを楽しむ時間の余白も。" },
    ],
  },
  pricing: {
    kicker: "05 — 料金",
    heading: "ひと月でも、ひと晩でも。",
    lead: "The Pier の中心は月額滞在の住人たち。空室があるときは、短期滞在も歓迎しています。",
    monthly: [
      { label: "月額滞在（Community Fee）", value: "月額 ¥55,000（税別）", note: "別途 光熱費 ¥5,000・共益費 ¥10,000／月。海外からの滞在は US$500（光熱費・共益費込み）" },
      { label: "ハイシーズン（7〜9月）", value: "＋¥14,000/月（税込）", note: "" },
      { label: "デポジット", value: "¥30,000", note: "退去時に問題がなければ翌月末に返金します" },
      { label: "2名でのご利用", value: "＋50%", note: "セミダブルベッドのため1室2名まで。2人目は半額（合計1.5倍）" },
    ],
    short: [
      { label: "短期滞在", value: "1泊 ¥4,400〜（税込）", note: "" },
      { label: "ハイシーズン（7〜10月）", value: "＋¥1,100/泊（税込）", note: "" },
    ],
    note: "料金は2026年7月時点のものです。1ヶ月以上の滞在は日割のご相談も承ります。お支払いは銀行振込のほか、Wise・PayPal・Stripe に対応しています。",
  },
  flow: {
    kicker: "06 — 入居までの流れ",
    heading: "島まで、4ステップ。",
    steps: [
      { title: "申し込む", desc: "下のフォームから送信してください。3営業日以内にメールでご連絡します（届かない場合は迷惑メールフォルダをご確認ください）。" },
      { title: "オンラインでお話", desc: "必要に応じて、面談や内見のオンラインコールを行います。お互いを知る時間です。" },
      { title: "契約・初月のお支払い", desc: "規約をご確認のうえ契約を締結し、入居予定日の1ヶ月前までに初月分をお振込みください。" },
      { title: "入居", desc: "チェックインをご案内し、お部屋をお渡しします。住人専用グループにようこそ。" },
    ],
    note: "入居申込に関する規約等は、お申込み時にご案内します。",
  },
  access: {
    kicker: "07 — アクセス",
    heading: "思っているより、近い。",
    address: "〒853-0017 長崎県五島市武家屋敷1-7-12 SERENDIP HOTEL GOTO 2階",
    addressUrl: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+%E9%95%B7%E5%B4%8E%E7%9C%8C%E4%BA%94%E5%B3%B6%E5%B8%82%E6%AD%A6%E5%AE%B6%E5%B1%8B%E6%95%B71-7-12",
    body: "福岡・長崎から飛行機で福江空港へ、またはフェリー・ジェットフォイルで福江港へ。港から徒歩10分、車がなくても大丈夫です。最適なルートは事前にご案内します。",
  },
  faq: {
    kicker: "08 — よくあるご質問",
    items: [
      { q: "料金には何が含まれていますか？", a: "鍵付き個室、高速Wi-Fi、共用スペース（キッチン・リビング・コワーキング）の利用、水道・電気・ガスなどの光熱費、共用部の定期清掃が含まれます。" },
      { q: "プライバシーは確保できますか？", a: "はい。各入居者に鍵付きの個室をご用意しています。共用スペースにも静かに過ごせる場所があり、自分のペースで暮らせます。" },
      { q: "どんな人が滞在していますか？", a: "国内外のリモートワーカー、フリーランス、旅人など。島の落ち着いた暮らしの中で、自然と人とのつながりが生まれます。" },
      { q: "リモートワークに向いていますか？", a: "高速で安定したWi-Fi、集中しやすい静かな環境、快適なワークスペースを整えています。Web会議用のミーティングルームもあります。" },
      { q: "車がなくても行けますか？", a: "はい。五島へはフェリーまたは飛行機で。福江港・福江空港からはバス、タクシー、徒歩でアクセスできます。なお施設に駐車場はありません。" },
      { q: "持ち物は何が必要ですか？", a: "お部屋にはベッド・机・椅子・収納が揃っています。衣類や洗面道具など身の回りの品だけお持ちください。日用品は島内のお店で購入できます。" },
    ],
  },
  apply: {
    kicker: "09 — 入居申込",
    heading: "島は、待っています。",
    sub: "いつ、どのくらい滞在したいか、お聞かせください。3営業日以内にご返信します。",
    name: "お名前 *",
    namePh: "お名前",
    email: "メール *",
    emailPh: "you@example.com",
    moveIn: "入居希望日",
    length: "滞在期間",
    lengthOptions: ["短期（数泊）", "1ヶ月", "2〜3ヶ月", "3ヶ月以上", "未定"],
    guests: "人数",
    guestsOptions: ["1名", "2名（同室）"],
    message: "メッセージ",
    messagePh: "お仕事のこと、五島での過ごし方、ご質問など、自由にお書きください。",
    send: "入居を申し込む",
    sending: "送信中…",
    ok: "ありがとうございます。申込を送信しました。3営業日以内にご返信します。",
    errFill: "お名前とメールをご入力ください。",
    errSend: "送信に失敗しました。お手数ですが coliving@yugyo.work へ直接ご連絡ください。",
    hp: "空欄のまま",
  },
  links: {
    kicker: "掲載メディア・リンク",
    items: [
      { label: "Instagram @thepiergoto", url: "https://www.instagram.com/thepiergoto/" },
      { label: "Mapmelon", url: "https://www.mapmelon.com/colivings/the-pier-goto-nagasaki" },
      { label: "Coliving.com", url: "https://coliving.com" },
      { label: "Google マップ", url: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+%E9%95%B7%E5%B4%8E%E7%9C%8C%E4%BA%94%E5%B3%B6%E5%B8%82%E6%AD%A6%E5%AE%B6%E5%B1%8B%E6%95%B71-7-12" },
    ],
  },
  footerNote: "The Pier | Goto Nagasaki は株式会社 遊行が運営しています — coliving@yugyo.work",
};

export const THEPIER: Record<Lang, PierContent> = { ja, en };

export function getThePier(lang: Lang): PierContent {
  return THEPIER[lang];
}

/** ギャラリー写真（public/photos/thepier/ 配下）。差し替えはここを編集 */
export const PIER_GALLERY = [
  "/photos/thepier/g01.jpg", // 共用リビング・コワーキング
  "/photos/thepier/g02.jpg", // 個室
  "/photos/thepier/g03.jpg", // 五島の海
  "/photos/thepier/g04.jpg", // コワーキングスペース
  "/photos/thepier/g05.jpg", // 島の食
  "/photos/thepier/g06.jpg", // リモートワーク
  "/photos/thepier/g07.jpg", // 鬼岳の丘
  "/photos/thepier/g08.jpg", // 共用キッチン
  "/photos/thepier/g09.jpg", // デッキのヨガ
  "/photos/thepier/g10.jpg", // 部屋で読書
];
