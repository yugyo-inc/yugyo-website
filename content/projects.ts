// content/projects.ts — 事業（Projects）4本の詳細ページ内容（日英ミラー）
// ============================================================================
// /projects/[slug]（日本語）と /en/projects/[slug]（英語）で共有。
// 値の書き換えのみでOK。slug・color はホームの work.items と一致させること。
// 日本語ドラフトは Claude 作成・Ryo 承認待ち（2026-06-09）。事実は既知の範囲のみ記載。
// ============================================================================

import type { Lang } from "@/lib/i18n";

export interface ProjectSection {
  h: string;
  body: string;
}

export interface ProjectContent {
  title: string;
  tagline: string;
  lead: string;
  sections: ProjectSection[];
  cta: string;
}

export interface Project {
  slug: string;
  n: string;
  color: "water" | "fire" | "earth" | "sky";
  el: string; // 元素ラベル（"Water · Cross-border" / "水 · 越境"）
  photo: string;
  ja: ProjectContent;
  en: ProjectContent;
}

export const PROJECTS: Project[] = [
  {
    slug: "digital-nomadism",
    n: "01",
    color: "water",
    el: "Water · Cross-border",
    photo: "/photos/colive.jpg",
    ja: {
      title: "デジタルノマド",
      tagline: "世界の才能と、日本の地域が、ともにつくる。",
      lead: "海を越えて働き、巡り、暮らす人たち。その移動を、日本の地域に結び直す。yugyo の出発点であり、いまも中心にある仕事です。",
      sections: [
        {
          h: "なにをするか",
          body: "デジタルノマドが日本の地域で働き、暮らすための場と仕組みをつくります。受け入れる地域、滞在の体験、地域の人との出会い。点ではなく、滞在から関係へと続く線として設計します。",
        },
        {
          h: "Colive Fukuoka",
          body: "福岡で開く、日本最大級のデジタルノマド向けプログラム。50カ国以上、累計500人を超える人々が、働くことと旅することを掛け合わせた体験のために集いました。詳しくは colivefukuoka.com へ。",
        },
        {
          h: "なぜ",
          body: "人が、いちばん自分らしくいられる場所へ歩いていける。その世界に近づくほど、地域は新しい才能と出会い、訪れる人は居場所を見つけます。",
        },
      ],
      cta: "ご一緒する",
    },
    en: {
      title: "Digital Nomadism",
      tagline: "Where global talent and Japanese regions build together.",
      lead: "People who work, travel, and live across borders. We weave that movement back into the regions of Japan. This is where yugyo began — and where it still centers.",
      sections: [
        {
          h: "What we do",
          body: "We build the places and systems that let digital nomads work and live in Japan's regions: host communities, the shape of a stay, and real encounters with local people. Designed not as isolated events, but as a line from stay to relationship.",
        },
        {
          h: "Colive Fukuoka",
          body: "One of Japan's largest programs for digital nomads, held in Fukuoka. Over 500 people from more than 50 countries have come together for an experience that combines work and travel. Learn more at colivefukuoka.com.",
        },
        {
          h: "Why",
          body: "A world where people can walk toward the place they are most themselves. The closer we get, the more regions meet new talent — and the more visitors find somewhere to belong.",
        },
      ],
      cta: "Work with us",
    },
  },
  {
    slug: "local-revitalization",
    n: "02",
    color: "fire",
    el: "Fire · Community",
    photo: "/photos/p11.jpg",
    ja: {
      title: "地域共創",
      tagline: "福岡・長崎・金沢で、新しいインパクトを生む。",
      lead: "外から人を呼ぶだけでは、地域は変わりません。住む人と訪れる人が出会い、ともにつくる。その関係づくりを、地域に根を張って続けます。",
      sections: [
        {
          h: "なにをするか",
          body: "自治体や地域の事業者と組み、観光・関係人口・地域経済の設計を行います。イベントの一回ではなく、年を重ねて育つ仕組みを目指します。",
        },
        {
          h: "拠点",
          body: "福岡を本拠地に、長崎では Digital Nomad Nagasaki を、金沢では大学と連携した観光・地域デザインを進めています。土地ごとの文脈に合わせて、かたちを変えます。",
        },
        {
          h: "なぜ",
          body: "地域の価値は、外の視点と内の誇りが交わるところに生まれます。yugyo は、その交点に立ち続けます。",
        },
      ],
      cta: "地域で組む",
    },
    en: {
      title: "Local Revitalization",
      tagline: "Making a new impact in Fukuoka, Nagasaki, and Kanazawa.",
      lead: "Bringing people in from outside does not, by itself, change a place. Residents and visitors have to meet and build together. We do that relationship work with roots in the ground.",
      sections: [
        {
          h: "What we do",
          body: "We partner with local governments and businesses to design tourism, relational populations, and regional economies — aiming not for a single event, but for systems that grow year on year.",
        },
        {
          h: "Grounds",
          body: "From our home base in Fukuoka, we run Digital Nomad Nagasaki and, in Kanazawa, tourism and regional design in partnership with the university. We change shape to fit the grain of each place.",
        },
        {
          h: "Why",
          body: "A region's value appears where an outside view meets inside pride. yugyo stays standing at that intersection.",
        },
      ],
      cta: "Partner with a region",
    },
  },
  {
    slug: "consulting",
    n: "03",
    color: "earth",
    el: "Earth · Public",
    photo: "/photos/p2.jpg",
    ja: {
      title: "コンサルティング",
      tagline: "越境戦略、ワーケーション、地域連携の設計。",
      lead: "戦略から現場の実装まで。主張する前に、まず歩く。机上の提案で終わらせず、実装の積み重ねで前に進めます。",
      sections: [
        {
          h: "なにをするか",
          body: "海外企業の日本進出、ワーケーション・滞在事業の立ち上げ、行政の地域連携施策。越境とローカルの両方に通じたチームが、企画から運営まで伴走します。",
        },
        {
          h: "進め方",
          body: "あなたの目的に並走します。調査・戦略・体制づくり・現場運営を、必要な分だけ。日本のローカルチームとして、内側から動かします。",
        },
        {
          h: "なぜ",
          body: "正しい戦略は、現場を歩いた人にしか描けません。yugyo は、提案書を書く前に、その土地に立ちます。",
        },
      ],
      cta: "相談する",
    },
    en: {
      title: "Consulting",
      tagline: "Cross-border strategy, workation, and regional partnership.",
      lead: "From strategy to on-the-ground execution. We walk before we claim — never stopping at a deck, but moving forward through layers of real implementation.",
      sections: [
        {
          h: "What we do",
          body: "Market entry into Japan for overseas companies, launching workation and long-stay ventures, and regional-partnership policy for the public sector. A team fluent in both the cross-border and the local accompanies you from planning to operation.",
        },
        {
          h: "How we work",
          body: "We move with your goals — research, strategy, team-building, and field operations, in exactly the measure you need. As your local team in Japan, we move things from the inside.",
        },
        {
          h: "Why",
          body: "Only those who have walked the ground can draw the right strategy. yugyo stands on the land before it writes the proposal.",
        },
      ],
      cta: "Start a conversation",
    },
  },
  {
    slug: "education",
    n: "04",
    color: "sky",
    el: "Sky · Counsel",
    photo: "/photos/p5.jpg",
    ja: {
      title: "教育",
      tagline: "新しい働き方と、新しい旅のかたちを問い直す。",
      lead: "ノマドや地域共創の現場は、そのまま学びの場でもあります。大学や次の世代と、新しい働き方・旅のあり方を問い直します。",
      sections: [
        {
          h: "なにをするか",
          body: "大学との連携、登壇、研究と実践の橋渡し。現場で得た知を、教室と社会へ戻します。代表は金沢大学 観光学にてクロスアポイントを務めています。",
        },
        {
          h: "問い",
          body: "どこで働くか。どう旅するか。どこに居場所を見つけるか。答えを配るのではなく、問いを開き、次の世代とともに考えます。",
        },
        {
          h: "なぜ",
          body: "移動と滞在が当たり前になる時代に、必要なのは新しい地図です。教育は、その地図を一緒に描く仕事です。",
        },
      ],
      cta: "話してみる",
    },
    en: {
      title: "Education",
      tagline: "Rethinking how we work and how we travel.",
      lead: "The field of nomadism and regional co-creation is itself a place of learning. With universities and the next generation, we rethink how we work and how we travel.",
      sections: [
        {
          h: "What we do",
          body: "University partnerships, talks, and bridging research with practice — carrying knowledge gained in the field back to the classroom and society. Our founder holds a cross-appointment in tourism sciences at Kanazawa University.",
        },
        {
          h: "The question",
          body: "Where do we work. How do we travel. Where do we find a place to belong. Rather than handing out answers, we open the questions and think them through with the next generation.",
        },
        {
          h: "Why",
          body: "In an age where movement and stay become ordinary, what we need is a new map. Education is the work of drawing that map together.",
        },
      ],
      cta: "Let's talk",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectContent(p: Project, lang: Lang): ProjectContent {
  return lang === "ja" ? p.ja : p.en;
}
