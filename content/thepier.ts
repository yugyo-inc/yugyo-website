// content/thepier.ts — The Pier | Goto Nagasaki（Coliving）ページの日英コンテンツ
// ============================================================================
// 出典: The Pier | Wiki（Notion）の賃料表・FAQ・コンセプト（2026-07 時点）
// 料金は改定される可能性があるため、変更時はこのファイルのみ更新すればよい。
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
  hero: { eyebrow: string; title: string; sub: string };
  story: {
    kicker: string;
    heading: string;
    body: string[];
    note: string;
  };
  gallery: { kicker: string };
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
  access: {
    kicker: string;
    heading: string;
    address: string;
    body: string;
  };
  faq: { kicker: string; items: PierFaq[] };
  cta: {
    heading: string;
    sub: string;
    button: string;
    email: string;
    instagram: string;
  };
}

const en: PierContent = {
  metaTitle: "The Pier | Goto Nagasaki — Coliving on Japan's western islands",
  metaDescription:
    "The Pier is a coliving space on the Goto Islands, Nagasaki — private rooms, coworking, and island life on Japan's western edge. Monthly stays from ¥55,000, operated by yugyo inc.",
  hero: {
    eyebrow: "The Pier | Goto Nagasaki",
    title: "Live slow, on Japan's western edge.",
    sub: "A coliving space on the Goto Islands — where remote work meets island life.",
  },
  story: {
    kicker: "01 — Story",
    heading: "Where wind meets soil.",
    body: [
      "The Goto Islands sit at the far western edge of Japan — blue sea, white sky, historic churches, and a pace of life the mainland forgot. The Pier opened here in 2018, and since 2023 it has been run by yugyo inc., a Fukuoka company that connects global movement with Japan's regions.",
      "We named it The Pier because that is what it is: a landing place. Residents (the wind) and islanders (the soil) mix here, and something new grows — what Japanese calls fudo, the character of a place. This is not a residence closed to its members. It is a home that stays open to the island.",
    ],
    note: "The interior is designed after the piers of Goto, in the blue of its sea and the white of its sky.",
  },
  gallery: { kicker: "02 — The Place" },
  space: {
    kicker: "03 — The Space",
    heading: "Everything you need. Nothing you don't.",
    items: [
      { title: "Private lockable rooms", desc: "Fully furnished with a semi-double bed, desk, chair, and storage. Up to two guests per room." },
      { title: "Coworking & meeting room", desc: "Fast, stable Wi-Fi, comfortable workspaces, and a meeting room for your video calls." },
      { title: "Shared kitchen & living", desc: "Cook, eat, and unwind together — or find a quiet corner of your own." },
      { title: "Utilities included", desc: "Water, electricity, gas, Wi-Fi, and regular cleaning of common areas. No hidden fees." },
      { title: "Walkable neighborhood", desc: "Supermarkets, cafés, restaurants, and drugstores within walking distance. Fukue Port and Airport nearby." },
      { title: "Island life at the door", desc: "Cycling, hiking, beaches, historic churches and lighthouses — and the calm to actually enjoy them." },
    ],
  },
  pricing: {
    kicker: "04 — Rates",
    heading: "Stay a month. Or a night.",
    lead: "Monthly residents are the heart of The Pier. Short stays are welcome when rooms are open.",
    monthly: [
      { label: "Monthly stay", value: "US$500 / month", note: "≈ ¥55,000 + tax — utilities, Wi-Fi, and common fees included" },
      { label: "High season (Jul–Sep)", value: "+ US$100 / month", note: "≈ +¥14,000, tax included" },
      { label: "Deposit", value: "US$200", note: "≈ ¥30,000 — refunded at move-out if no problems" },
      { label: "Second guest", value: "+50%", note: "Semi-double beds allow two guests per room at 1.5× the standard rate" },
    ],
    short: [
      { label: "Short stay", value: "From ¥4,400 / night", note: "Tax included" },
      { label: "High season (Jul–Oct)", value: "+ ¥1,100 / night", note: "Tax included" },
    ],
    note: "Rates as of July 2026 and subject to change. Pro-rated stays of one month or more are possible — ask us.",
  },
  access: {
    kicker: "05 — Access",
    heading: "Closer than you think.",
    address: "2F SERENDIP HOTEL GOTO, 1-7-12 Bukeyashiki, Goto, Nagasaki 853-0017, Japan",
    body: "Fly from Fukuoka or Nagasaki to Fukue Airport, or take the ferry to Fukue Port. The Pier is a short walk or taxi ride from both — no car needed. We will guide you on the best route from wherever you are.",
  },
  faq: {
    kicker: "06 — FAQ",
    items: [
      { q: "What is included in the fee?", a: "A private lockable room, high-speed Wi-Fi, shared kitchen, living, and coworking spaces, utilities (water, electricity, gas), and regular cleaning of common areas. No hidden fees." },
      { q: "Is there privacy in a coliving space?", a: "Yes. Every resident has a private, lockable room, and the shared spaces are designed for both connection and quiet time." },
      { q: "Who stays at The Pier?", a: "Digital nomads, remote workers, and travelers from Japan and around the world — people who enjoy meeting others while keeping the calm of island life." },
      { q: "Is it suitable for remote work?", a: "Absolutely. Fast, stable Wi-Fi, comfortable workspaces, quiet surroundings, and a meeting room for online meetings." },
      { q: "Can I get there without a car?", a: "Yes. Reach Goto by ferry or plane; from Fukue Port or Airport, The Pier is accessible by bus, taxi, or a short walk." },
      { q: "What should I bring?", a: "Rooms come fully furnished — bed, desk, chair, storage. Just bring your clothes and personal items. Daily essentials are available at nearby shops." },
    ],
  },
  cta: {
    heading: "The island is waiting.",
    sub: "Tell us when you are coming, and for how long. We will take care of the rest.",
    button: "Ask about a stay",
    email: "coliving@yugyo.work",
    instagram: "https://www.instagram.com/thepiergoto/",
  },
};

const ja: PierContent = {
  metaTitle: "The Pier | Goto Nagasaki — 五島列島のコリビング",
  metaDescription:
    "The Pier は長崎・五島列島のコリビング施設。鍵付き個室とコワーキング、島の暮らし。月額55,000円から、1泊からの短期滞在も。株式会社 遊行が運営しています。",
  hero: {
    eyebrow: "The Pier | Goto Nagasaki",
    title: "日本の西の果てで、ゆっくり暮らす。",
    sub: "五島列島のコリビング。リモートワークと島の暮らしが、ここで出会う。",
  },
  story: {
    kicker: "01 — ストーリー",
    heading: "風と土が混じり合う場所。",
    body: [
      "日本の西の果て、五島列島。青い海と白い空、歴史ある教会群、そして本土が忘れてしまった暮らしの速度がここにあります。The Pier は2018年にこの島で生まれ、2023年からは、世界の移動と日本の地域をつなぐ株式会社 遊行が運営しています。",
      "桟橋（Pier）という名前のとおり、ここは「たどり着く場所」です。住人（風の人）と島の人（土の人）が混じり合い、新しい風土が生まれる。自分たちだけがいい暮らしの場ではなく、地域に開かれ、地域と共に暮らす家でありたいと願っています。",
    ],
    note: "内装は五島の桟橋をモチーフに、五島の海の青と空の白でデザインされています。",
  },
  gallery: { kicker: "02 — 場所" },
  space: {
    kicker: "03 — 空間",
    heading: "必要なものは、すべて。余計なものは、なにも。",
    items: [
      { title: "鍵付き個室", desc: "セミダブルベッド・机・椅子・収納つき。家具は揃っています。1室2名まで滞在可能。" },
      { title: "コワーキング＆ミーティングルーム", desc: "高速で安定したWi-Fiと快適なワークスペース。Web会議用の個室もあります。" },
      { title: "共用キッチン＆リビング", desc: "つくって、食べて、くつろぐ。静かに過ごせる場所もあります。" },
      { title: "光熱費込み", desc: "水道・電気・ガス・Wi-Fi、共用部の定期清掃まで含まれています。追加料金はありません。" },
      { title: "徒歩圏の暮らし", desc: "スーパー、カフェ、飲食店、ドラッグストアが徒歩圏内。福江港・福江空港からもすぐ。" },
      { title: "島の暮らしが、すぐそこに", desc: "サイクリング、ハイキング、ビーチ、教会と灯台。それを楽しむ時間の余白も。" },
    ],
  },
  pricing: {
    kicker: "04 — 料金",
    heading: "ひと月でも、ひと晩でも。",
    lead: "The Pier の中心は月額滞在の住人たち。空室があるときは、短期滞在も歓迎しています。",
    monthly: [
      { label: "月額滞在", value: "月額 ¥55,000（税別）", note: "光熱費・Wi-Fi・共益費込みの目安。海外からの滞在は US$500/月" },
      { label: "ハイシーズン（7〜9月）", value: "＋¥14,000/月（税込）", note: "" },
      { label: "デポジット", value: "¥30,000", note: "退去時に問題がなければ返金します" },
      { label: "2名でのご利用", value: "＋50%", note: "セミダブルベッドのため1室2名まで。2人目は半額（合計1.5倍）" },
    ],
    short: [
      { label: "短期滞在", value: "1泊 ¥4,400〜（税込）", note: "" },
      { label: "ハイシーズン（7〜10月）", value: "＋¥1,100/泊（税込）", note: "" },
    ],
    note: "料金は2026年7月時点のものです。1ヶ月以上の滞在は日割のご相談も承ります。",
  },
  access: {
    kicker: "05 — アクセス",
    heading: "思っているより、近い。",
    address: "〒853-0017 長崎県五島市武家屋敷1-7-12 SERENDIP HOTEL GOTO 2階",
    body: "福岡・長崎から飛行機で福江空港へ、またはフェリーで福江港へ。港からも空港からも、徒歩やタクシーですぐ。車がなくても大丈夫です。最適なルートは事前にご案内します。",
  },
  faq: {
    kicker: "06 — よくあるご質問",
    items: [
      { q: "料金には何が含まれていますか？", a: "鍵付き個室、高速Wi-Fi、共用スペース（キッチン・リビング・コワーキング）の利用、水道・電気・ガスなどの光熱費、共用部の定期清掃が含まれます。追加料金はありません。" },
      { q: "プライバシーは確保できますか？", a: "はい。各入居者に鍵付きの個室をご用意しています。共用スペースにも静かに過ごせる場所があり、自分のペースで暮らせます。" },
      { q: "どんな人が滞在していますか？", a: "国内外のリモートワーカー、フリーランス、旅人など。島の落ち着いた暮らしの中で、自然と人とのつながりが生まれます。" },
      { q: "リモートワークに向いていますか？", a: "高速で安定したWi-Fi、集中しやすい静かな環境、快適なワークスペースを整えています。Web会議用のミーティングルームもあります。" },
      { q: "車がなくても行けますか？", a: "はい。五島へはフェリーまたは飛行機で。福江港・福江空港からはバス、タクシー、徒歩でアクセスできます。" },
      { q: "持ち物は何が必要ですか？", a: "お部屋にはベッド・机・椅子・収納が揃っています。衣類や洗面道具など身の回りの品だけお持ちください。日用品は島内のお店で購入できます。" },
    ],
  },
  cta: {
    heading: "島は、待っています。",
    sub: "いつ、どのくらい滞在したいか、お聞かせください。あとはこちらで整えます。",
    button: "滞在の相談をする",
    email: "coliving@yugyo.work",
    instagram: "https://www.instagram.com/thepiergoto/",
  },
};

export const THEPIER: Record<Lang, PierContent> = { ja, en };

export function getThePier(lang: Lang): PierContent {
  return THEPIER[lang];
}

/** ギャラリー写真（public/photos/thepier/ 配下）。差し替えはここを編集 */
export const PIER_GALLERY = [
  "/photos/thepier/g01.jpg",
  "/photos/thepier/g02.jpg",
  "/photos/thepier/g03.jpg",
  "/photos/thepier/g04.jpg",
  "/photos/thepier/g05.jpg",
  "/photos/thepier/g06.jpg",
  "/photos/thepier/g07.jpg",
  "/photos/thepier/g08.jpg",
];
