// content/thepier.ts — The Pier | Goto Nagasaki（Coliving）ページの日英コンテンツ v3
// ============================================================================
// 出典: The Pier | Wiki（Notion）Basic Info・Ryo指示（2026-07-19 最終修正）
// 料金: 月額 US$520 / ¥52,000（基本）+ 夏季(7-9月) US$80 / ¥10,000 + デポジット US$200 / ¥30,000
// 短期滞在の料金は交渉用のため非公開（サイト掲載NG）。
// 通貨は JPページ=円のみ / ENページ=ドルのみ。
// ============================================================================

import type { Lang } from "@/lib/i18n";

export interface PierFaq {
  q: string;
  a: string;
}

/** 料金計算（フォームの概算表示にも使用） */
export const PIER_PRICING = {
  ja: { currency: "¥", monthly: 52000, summer: 10000, deposit: 30000, locale: "ja-JP" },
  en: { currency: "US$", monthly: 520, summer: 80, deposit: 200, locale: "en-US" },
} as const;

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
  rooms: {
    kicker: string;
    heading: string;
    lead: string;
    photo: string;
    cards: { img: string; title: string; desc: string }[];
  };
  pricing: {
    kicker: string;
    heading: string;
    lead: string;
    monthlyLabel: string;
    monthlyValue: string;
    monthlyUnit: string;
    included: string[];
    extras: { label: string; value: string; note?: string }[];
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
    est: {
      title: string;
      monthsLabel: (n: string) => string;
      summerNote: string;
      guestsNote: string;
      depositNote: string;
      longStay: string;
      shortStay: string;
      disclaimer: string;
    };
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
    "The Pier is a coliving space on the Goto Islands, Nagasaki — six furnished private rooms, coworking, and island life on Japan's western edge. Monthly stays from US$520, operated by yugyo inc.",
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
    title: "The Pier | Goto Nagasaki",
    sub: "To Live. To Belong. — a coliving space on Japan's western edge, where remote work meets island life.",
    cta: "Apply Now",
  },
  story: {
    kicker: "Story",
    heading: "Where wind meets soil.",
    body: [
      "The Goto Islands sit at the far western edge of Japan — blue sea, white sky, historic churches, and a pace of life the mainland forgot. The Pier opened here in 2018, and is now run by yugyo inc., a Fukuoka company that connects global movement with Japan's regions.",
      "We named it The Pier because that is what it is: a landing place. Residents (the wind) and islanders (the soil) mix here, and something new grows — what Japanese calls fudo, the character of a place. This is not a residence closed to its members. It is a home that stays open to the island.",
    ],
    note: "The interior is designed after the piers of Goto, in the blue of its sea and the white of its sky.",
  },
  rooms: {
    kicker: "Rooms & Space",
    heading: "Move in tomorrow. Bring nothing.",
    lead: "A small furnished sharehouse of just six rooms — bed, desk, Wi-Fi, utilities, all ready from day one. Pick up the key, and island life begins.",
    photo: "/photos/thepier/g02.jpg",
    cards: [
      { img: "/photos/thepier/g02.jpg", title: "Rooms", desc: "Six private lockable rooms with a semi-double bed, desk, and storage. Up to two guests per room." },
      { img: "/photos/thepier/g04.jpg", title: "Coworking", desc: "Fast, stable Wi-Fi, comfortable workspaces, and a meeting room for video calls." },
      { img: "/photos/thepier/g08.jpg", title: "Kitchen", desc: "A shared kitchen and living room, stocked with cookware and tableware." },
      { img: "/photos/thepier/g11.jpg", title: "Shower & Laundry", desc: "Shower rooms and washing machines on the residents-only floor." },
      { img: "/photos/thepier/g01.jpg", title: "Utilities", desc: "Water, electricity, gas, Wi-Fi, and cleaning of common areas — all included. No hidden fees." },
      { img: "/photos/thepier/g05.jpg", title: "Neighborhood", desc: "Supermarkets, cafés, and local eateries within walking distance. Ten minutes on foot from Fukue Port." },
    ],
  },
  pricing: {
    kicker: "Rates",
    heading: "Ready when you are. Just get in touch.",
    lead: "One simple monthly rate. Everything included.",
    monthlyLabel: "Monthly stay",
    monthlyValue: "US$520",
    monthlyUnit: "/ month",
    included: [
      "Private furnished room",
      "Utilities, Wi-Fi & common fees",
      "Coworking & meeting room",
      "Kitchen, shower & laundry",
    ],
    extras: [
      { label: "Summer (Jul–Sep)", value: "+ US$80 / month", note: "Air-conditioning season surcharge" },
      { label: "Deposit", value: "US$200", note: "Paid in advance, refunded at move-out if no problems" },
      { label: "Second guest", value: "+50%", note: "The 2nd person stays at half price — 1.5× in total" },
    ],
    note: "Rates as of July 2026. Longer stays are negotiable — ask us. Payment works online: Wise, PayPal, Stripe, or bank transfer.",
  },
  flow: {
    kicker: "How to join",
    heading: "Four steps to the island.",
    steps: [
      { title: "Apply", desc: "Send the application below. We reply within 3 business days." },
      { title: "Meet us online", desc: "A short interview or viewing call, if needed." },
      { title: "Contract & payment", desc: "Sign the agreement and transfer the first month. Online payment supported." },
      { title: "Move in", desc: "We guide your check-in and welcome you to the residents' group." },
    ],
    note: "Terms and conditions for the move-in application are available on request.",
  },
  access: {
    kicker: "Access",
    heading: "Closer than you think.",
    address: "2F SERENDIP HOTEL GOTO, 1-7-12 Bukeyashiki, Goto, Nagasaki 853-0017, Japan",
    addressUrl: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+1-7-12+Bukeyashiki+Goto+Nagasaki",
    body: "Fly from Fukuoka or Nagasaki to Fukue Airport, or take the ferry or jetfoil to Fukue Port. The Pier is a 10-minute walk from the port — no car needed. We will guide you on the best route from wherever you are.",
  },
  faq: {
    kicker: "FAQ",
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
    kicker: "Apply",
    heading: "The island is waiting.",
    sub: "Tell us when you are coming and for how long — we reply within 3 business days.",
    name: "Name *",
    namePh: "Your name",
    email: "Email *",
    emailPh: "you@example.com",
    moveIn: "Preferred check-in date",
    length: "Length of stay",
    lengthOptions: ["1 month", "2 months", "3 months", "4–6 months", "6+ months", "Short stay / undecided"],
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
    est: {
      title: "Estimated total",
      monthsLabel: (n) => `${n} month${n === "1" ? "" : "s"}`,
      summerNote: "incl. summer surcharge",
      guestsNote: "2 guests (2nd person half price)",
      depositNote: "+ US$200 deposit (refundable)",
      longStay: "Long-stay discounts are negotiable for 3+ months.",
      shortStay: "For short stays, rates are individual — just ask us.",
      disclaimer: "Rough estimate. Final quote comes with our reply.",
    },
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
  metaTitle: "The Pier | Goto Nagasaki — 五島列島のコリビング・シェアハウス",
  metaDescription:
    "The Pier は長崎・五島列島の家具付きシェアハウス（コリビング）。鍵付き個室6室とコワーキング、島の暮らし。1ヶ月から月額52,000円で。株式会社 遊行が運営しています。",
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
    title: "The Pier | Goto Nagasaki",
    sub: "To Live. To Belong. — 日本の西の果てで、ゆっくり暮らす。リモートワークと島の暮らしが、ここで出会う。",
    cta: "入居を申し込む",
  },
  story: {
    kicker: "ストーリー",
    heading: "1ヶ月から住める、五島列島の家具付きシェアハウス。",
    body: [
      "日本の西の果て、五島列島。青い海と白い空、歴史ある教会群、そして本土が忘れてしまった暮らしの速度がここにあります。The Pier は2018年にこの島で生まれ、現在は、世界の移動と日本の地域をつなぐ株式会社 遊行が運営しています。",
      "桟橋（Pier）という名前のとおり、ここは「たどり着く場所」です。住人（風の人）と島の人（土の人）が混じり合い、新しい風土が生まれる。自分たちだけがいい暮らしの場ではなく、地域に開かれ、地域と共に暮らす家でありたいと願っています。",
    ],
    note: "内装は五島の桟橋をモチーフに、五島の海の青と空の白でデザインされています。",
  },
  rooms: {
    kicker: "部屋と空間",
    heading: "明日から、住める。準備は、いらない。",
    lead: "家具もWi-Fiも光熱費も、ぜんぶ揃った全6室の小さなシェアハウス。鍵を受け取ったその日から、島の暮らしが始まります。",
    photo: "/photos/thepier/g02.jpg",
    cards: [
      { img: "/photos/thepier/g02.jpg", title: "Rooms", desc: "鍵付き個室・全6室。セミダブルベッド・机・収納つき。1室2名まで滞在できます。" },
      { img: "/photos/thepier/g04.jpg", title: "Coworking", desc: "高速で安定したWi-Fiと快適なワークスペース。Web会議用のミーティングルームも。" },
      { img: "/photos/thepier/g08.jpg", title: "Kitchen", desc: "調理器具と食器が揃った共用キッチン＆リビング。つくって、食べて、くつろぐ。" },
      { img: "/photos/thepier/g11.jpg", title: "Shower & Laundry", desc: "シャワールームと洗濯機を住人専用フロア内に完備。" },
      { img: "/photos/thepier/g01.jpg", title: "Utilities", desc: "水道・電気・ガス・Wi-Fi・共用部の清掃まで込み。追加料金はありません。" },
      { img: "/photos/thepier/g05.jpg", title: "Neighborhood", desc: "スーパーも食堂もカフェも徒歩圏内。福江港から徒歩10分。" },
    ],
  },
  pricing: {
    kicker: "料金",
    heading: "明日からでも滞在OK。まずはご連絡を。",
    lead: "月額ひとつの、シンプルな料金です。",
    monthlyLabel: "月額滞在",
    monthlyValue: "¥52,000",
    monthlyUnit: "/ 月",
    included: [
      "家具付き個室",
      "光熱費・Wi-Fi・共益費込み",
      "コワーキング＆ミーティングルーム",
      "キッチン・シャワー・ランドリー",
    ],
    extras: [
      { label: "夏季（7〜9月）", value: "＋¥10,000/月", note: "冷房調整費として" },
      { label: "デポジット", value: "¥30,000", note: "事前払い・退去時に問題がなければ返金" },
      { label: "2名でのご利用", value: "＋50%", note: "2人目は半額（合計1.5倍）" },
    ],
    note: "料金は2026年7月時点のものです。長期滞在はご相談ください。お支払いは銀行振込のほか、Wise・PayPal・Stripe に対応しています。",
  },
  flow: {
    kicker: "入居までの流れ",
    heading: "島まで、4ステップ。",
    steps: [
      { title: "申し込む", desc: "下のフォームから送信。3営業日以内にご連絡します。" },
      { title: "オンラインでお話", desc: "必要に応じて、面談や内見のオンラインコールを。" },
      { title: "契約・お支払い", desc: "規約確認のうえ契約し、初月分をお振込み。オンライン決済対応。" },
      { title: "入居", desc: "チェックインをご案内。住人グループへようこそ。" },
    ],
    note: "入居申込に関する規約等は、お申込み時にご案内します。",
  },
  access: {
    kicker: "アクセス",
    heading: "意外と近い、五島列島。",
    address: "〒853-0017 長崎県五島市武家屋敷1-7-12 SERENDIP HOTEL GOTO 2階",
    addressUrl: "https://maps.google.com/?q=SERENDIP+HOTEL+GOTO+%E9%95%B7%E5%B4%8E%E7%9C%8C%E4%BA%94%E5%B3%B6%E5%B8%82%E6%AD%A6%E5%AE%B6%E5%B1%8B%E6%95%B71-7-12",
    body: "福岡・長崎から飛行機で福江空港へ約40分、またはフェリー・ジェットフォイルで福江港へ。港から徒歩10分、車がなくても大丈夫です。最適なルートは事前にご案内します。",
  },
  faq: {
    kicker: "よくあるご質問",
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
    kicker: "入居申込",
    heading: "島は、待っています。",
    sub: "チェックインの時期と滞在期間を選ぶと、概算費用が表示されます。3営業日以内にご返信します。",
    name: "お名前 *",
    namePh: "お名前",
    email: "メール *",
    emailPh: "you@example.com",
    moveIn: "チェックイン希望日",
    length: "滞在期間",
    lengthOptions: ["1ヶ月", "2ヶ月", "3ヶ月", "4〜6ヶ月", "6ヶ月以上", "短期・未定"],
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
    est: {
      title: "概算費用",
      monthsLabel: (n) => `${n}ヶ月`,
      summerNote: "夏季料金を含む",
      guestsNote: "2名（2人目は半額）",
      depositNote: "＋デポジット ¥30,000（返金制）",
      longStay: "3ヶ月以上は長期割のご相談が可能です。",
      shortStay: "短期滞在の料金は個別にご案内します。まずはご相談ください。",
      disclaimer: "あくまで概算です。正式なお見積りは返信時にご案内します。",
    },
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

/** ヒーロー・スライドショー（h1がメイン＝1枚目） */
export const PIER_HERO_SLIDES = [
  "/photos/thepier/h1.jpg", // リビングで笑う住人たち（DAY1_42）
  "/photos/thepier/h2.jpg", // 浜辺
  "/photos/thepier/h3.jpg", // 丘を走る
  "/photos/thepier/h4.jpg", // 海と人
  "/photos/thepier/h5.jpg", // デッキのヨガ
];

/** ギャラリー写真（自動スライド帯） */
export const PIER_GALLERY = [
  "/photos/thepier/g01.jpg",
  "/photos/thepier/g02.jpg",
  "/photos/thepier/g03.jpg",
  "/photos/thepier/g04.jpg",
  "/photos/thepier/g05.jpg",
  "/photos/thepier/g06.jpg",
  "/photos/thepier/g07.jpg",
  "/photos/thepier/g08.jpg",
  "/photos/thepier/g09.jpg",
  "/photos/thepier/g10.jpg",
];
