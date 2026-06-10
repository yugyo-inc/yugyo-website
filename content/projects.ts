// content/projects.ts — 事業（Projects）詳細ページの内容（言語別）
// ============================================================================
// 日本語(ja)＝新3本（Local|Global / Branding|Marketing / Publicity）
// 英語(en)＝従来4本（Digital Nomadism / Local Revitalization / Consulting / Education）
// 各 Project は当該言語の content を1つ持つ。/projects/[slug]（ja）と /en/projects/[slug]（en）で使用。
// 日本語ドラフトは Claude 作成・Ryo 承認待ち（2026-06-10）。
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
  photo: string;
  content: ProjectContent;
}

const ja: Project[] = [
  {
    slug: "local-global",
    n: "01",
    color: "water",
    photo: "/photos/colive.jpg",
    content: {
      title: "Local | Global",
      tagline: "世界と地域の境界を、ゆるめる。",
      lead: "ボーダレスに世界を渡り歩く起業家、スタートアップ、メディア、投資家らに対して、遊行ならではの領域展開を通じて、地域や事業者との接点を増やし、事業の新たな機会創出やビジネスマッチングを提供していきます。",
      sections: [
        {
          h: "なにをするか",
          body: "高付加価値なインバウンド層と、国内外の地域・事業者をつなぎ直します。デジタルノマドに限らず、インバウンドマーケティング、並びに新規事業の海外進出支援まで、越境とローカルの両面から機会をつくります。",
        },
        {
          h: "対象",
          body: "世界中でボーダレスにビジネスを展開する起業家・スタートアップ・メディア・投資家。そして彼らを迎え入れたい地域、自治体、事業者。",
        },
        {
          h: "実績",
          body: "福岡『Colive Fukuoka』、長崎『Digital Nomad Nagasaki』など、地域と世界をつなぐプログラムを企画・運営してきました。",
        },
      ],
      cta: "ご一緒する",
    },
  },
  {
    slug: "branding-marketing",
    n: "02",
    color: "fire",
    photo: "/photos/p11.jpg",
    content: {
      title: "Branding | Marketing",
      tagline: "コンセプトから運用まで、チームの一員として。",
      lead: "企業や自治体のブランドコンセプトの新設や改善に向けて、調査、提案、実施、検証まで、チームの一員としてゴールまでご一緒させていただきます。",
      sections: [
        {
          h: "なにをするか",
          body: "ブランドのコンセプト設計から、実装、運用、検証までを一気通貫で。外部の発注先ではなく、チームの一員として並走します。",
        },
        {
          h: "ご相談いただける範囲",
          body: "事業提案、ロゴやキャッチコピー、ウェブサイトの開発、ソーシャルメディアの運用まで広くご相談ください。",
        },
      ],
      cta: "相談する",
    },
  },
  {
    slug: "publicity",
    n: "03",
    color: "sky",
    photo: "/photos/p5.jpg",
    content: {
      title: "Publicity",
      tagline: "現場で得た知を、社会へ還す。",
      lead: "登壇、執筆、講義。デジタルノマド・地域共創・観光の現場で得た知見を、社会と次の世代へ届けます。",
      sections: [
        {
          h: "なにをするか",
          body: "イベント登壇、寄稿・執筆、大学での講義などをお引き受けします。代表は金沢大学 先端観光科学研究所 特任准教授も務めています。",
        },
        {
          h: "事例",
          body: "過去の登壇・寄稿・メディア掲載は「最新情報」から事例をご参照ください。",
        },
      ],
      cta: "ご依頼はこちらから",
    },
  },
];

const en: Project[] = [
  {
    slug: "digital-nomadism",
    n: "01",
    color: "water",
    photo: "/photos/colive.jpg",
    content: {
      title: "Digital Nomadism",
      tagline: "Where global talent and Japanese regions build together.",
      lead: "People who work, travel, and live across borders. We weave that movement back into the regions of Japan. This is where yugyo began — and where it still centers.",
      sections: [
        { h: "What we do", body: "We build the places and systems that let digital nomads work and live in Japan's regions: host communities, the shape of a stay, and real encounters with local people. Designed not as isolated events, but as a line from stay to relationship." },
        { h: "Colive Fukuoka", body: "One of Japan's largest programs for digital nomads, held in Fukuoka. Over 500 people from more than 50 countries have come together for an experience that combines work and travel. Learn more at colivefukuoka.com." },
        { h: "Why", body: "A world where people can walk toward the place they are most themselves. The closer we get, the more regions meet new talent — and the more visitors find somewhere to belong." },
      ],
      cta: "Work with us",
    },
  },
  {
    slug: "local-revitalization",
    n: "02",
    color: "fire",
    photo: "/photos/p11.jpg",
    content: {
      title: "Local Revitalization",
      tagline: "Making a new impact in Fukuoka, Nagasaki, and Kanazawa.",
      lead: "Bringing people in from outside does not, by itself, change a place. Residents and visitors have to meet and build together. We do that relationship work with roots in the ground.",
      sections: [
        { h: "What we do", body: "We partner with local governments and businesses to design tourism, relational populations, and regional economies — aiming not for a single event, but for systems that grow year on year." },
        { h: "Grounds", body: "From our home base in Fukuoka, we run Digital Nomad Nagasaki and, in Kanazawa, tourism and regional design in partnership with the university. We change shape to fit the grain of each place." },
        { h: "Why", body: "A region's value appears where an outside view meets inside pride. yugyo stays standing at that intersection." },
      ],
      cta: "Partner with a region",
    },
  },
  {
    slug: "consulting",
    n: "03",
    color: "earth",
    photo: "/photos/p2.jpg",
    content: {
      title: "Consulting",
      tagline: "Cross-border strategy, workation, and regional partnership.",
      lead: "From strategy to on-the-ground execution. We walk before we claim — never stopping at a deck, but moving forward through layers of real implementation.",
      sections: [
        { h: "What we do", body: "Market entry into Japan for overseas companies, launching workation and long-stay ventures, and regional-partnership policy for the public sector. A team fluent in both the cross-border and the local accompanies you from planning to operation." },
        { h: "How we work", body: "We move with your goals — research, strategy, team-building, and field operations, in exactly the measure you need. As your local team in Japan, we move things from the inside." },
        { h: "Why", body: "Only those who have walked the ground can draw the right strategy. yugyo stands on the land before it writes the proposal." },
      ],
      cta: "Start a conversation",
    },
  },
  {
    slug: "education",
    n: "04",
    color: "sky",
    photo: "/photos/p5.jpg",
    content: {
      title: "Education",
      tagline: "Rethinking how we work and how we travel.",
      lead: "The field of nomadism and regional co-creation is itself a place of learning. With universities and the next generation, we rethink how we work and how we travel.",
      sections: [
        { h: "What we do", body: "University partnerships, talks, and bridging research with practice — carrying knowledge gained in the field back to the classroom and society. Our founder holds a cross-appointment in tourism sciences at Kanazawa University." },
        { h: "The question", body: "Where do we work. How do we travel. Where do we find a place to belong. Rather than handing out answers, we open the questions and think them through with the next generation." },
        { h: "Why", body: "In an age where movement and stay become ordinary, what we need is a new map. Education is the work of drawing that map together." },
      ],
      cta: "Let's talk",
    },
  },
];

export const PROJECTS: Record<Lang, Project[]> = { ja, en };

export function getProjects(lang: Lang): Project[] {
  return PROJECTS[lang];
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return PROJECTS[lang].find((p) => p.slug === slug);
}
