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
  /** 外部リンク（登壇動画・関連サイトなど）。指定時は body の下にリンク列を表示 */
  links?: { label: string; url: string }[];
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
          h: "私たちの役割",
          body: "高付加価値なインバウンド層と、国内外の地域・事業者をつなぎ直します。デジタルノマドに限らず、インバウンドマーケティング、並びに新規事業の海外進出支援まで、越境とローカルの両面から機会をつくります。",
        },
        {
          h: "対象",
          body: "世界中でボーダレスにビジネスを展開する起業家・スタートアップ・メディア・投資家。そして彼らを迎え入れたい地域、自治体、事業者。",
        },
        {
          h: "実績",
          body: "『Colive Fukuoka』（福岡市）は、世界50カ国以上から500名を超える参加者が集う日本最大級のデジタルノマド誘致プログラムに成長。2025年には約1.4億円の地域経済効果を生み出しました（Nomad Retreats Awards 2025「Best Global Nomad Fest」受賞）。『Digital Nomad Nagasaki』（長崎県）の企画・運営をはじめ、行政と連携した受託事業を手がけています。",
          links: [
            { label: "Colive Fukuoka", url: "https://colivefukuoka.com" },
            { label: "Digital Nomad Nagasaki", url: "https://www.nagasakinomad.com/" },
          ],
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
          h: "私たちの役割",
          body: "ブランドのコンセプト設計から、実装、運用、検証までを一気通貫で。外部の発注先ではなく、チームの一員として並走します。",
        },
        {
          h: "ご相談いただける範囲",
          body: "事業提案、ロゴやキャッチコピー、ウェブサイトの開発、ソーシャルメディアの運用まで広くご相談ください。",
        },
        {
          h: "実績",
          body: "自治体の観光・関係人口事業のブランド設計から、大学との共同プログラム、民間企業の海外向けマーケティング支援まで、公民の双方でチームの一員として伴走してきました。",
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
          h: "私たちの役割",
          body: "イベント登壇、寄稿・執筆、大学での講義などをお引き受けします。代表は金沢大学 先端観光科学研究所 特任准教授も務めています。",
        },
        {
          h: "登壇・講演",
          body: "各地のカンファレンスやシンポジウムで、デジタルノマド誘致と地域戦略をテーマに登壇しています。過去の登壇の一部は以下からご覧いただけます。",
          links: [
            {
              label: "スペースシェアシンポジウム2024 — デジタルノマドに選ばれる地域戦略",
              url: "https://www.youtube.com/watch?v=swwOK2UEI0I",
            },
            {
              label: "X MAGIC【会議室】デジタルノマド特集（2024）",
              url: "https://www.youtube.com/watch?v=MuythW4IVxs",
            },
          ],
        },
        {
          h: "事例",
          body: "過去の登壇・寄稿・メディア掲載は「最新情報」から事例をご参照ください。",
        },
      ],
      cta: "ご依頼はこちらから",
    },
  },
  {
    slug: "coliving",
    n: "04",
    color: "earth",
    photo: "/photos/thepier/hero.jpg",
    content: {
      title: "Coliving",
      tagline: "場所にとらわれない人たちの、住まいをつくる。",
      lead: "Coliving（コリビング）事業の開発、運営、コンサルティング。場所にとらわれない方々向けの共同の住居運営を、施設の立ち上げから日々のコミュニティ運営まで手がけています。",
      sections: [
        {
          h: "私たちの役割",
          body: "住まいと仕事場、そしてコミュニティがひとつになった Coliving は、デジタルノマドや二拠点生活者の受け皿として世界中で広がっています。遊行は、自社施設の運営で培った実践知をもとに、Coliving 事業の開発からコンセプト設計、運営代行、コンサルティングまでを一貫してお引き受けします。",
        },
        {
          h: "実績",
          body: "長崎・五島列島で、コリビング施設『The Pier | Goto Nagasaki』を運営しています（2018年開業の施設を2023年に承継）。港の桟橋をモチーフにした空間に、国内外のリモートワーカーや旅人が滞在し、島の暮らしと混じり合う「風土」を育てています。また、大手開発事業者の都市開発プロジェクトにおいて、Coliving・長期滞在領域のコンサルティングにも参画しています。",
          links: [
            { label: "The Pier | Goto Nagasaki", url: "/thepiercoliving" },
          ],
        },
      ],
      cta: "相談する",
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
        { h: "Colive Fukuoka", body: "One of Japan's largest programs for digital nomads, held in Fukuoka. Over 500 people from 57 countries have come together for an experience that combines work and travel — named Best Global Nomad Fest at the Nomad Retreats Awards 2025. Learn more at colivefukuoka.com." },
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
  {
    slug: "coliving",
    n: "05",
    color: "earth",
    photo: "/photos/thepier/hero.jpg",
    content: {
      title: "Coliving",
      tagline: "A home for people who belong everywhere.",
      lead: "We develop, operate, and consult on coliving — shared homes for digital nomads and location-independent people, run from the ground up.",
      sections: [
        {
          h: "What we do",
          body: "Coliving — housing, workspace, and community in one — is spreading worldwide as the home base of digital nomads. Drawing on the hands-on knowledge of running our own space, yugyo covers the full arc: concept design, development, daily operation, and consulting.",
        },
        {
          h: "The Pier Coliving",
          body: "On the Goto Islands of Nagasaki, we run The Pier Coliving — six furnished private rooms above a pier-inspired shared floor, where residents from around the world mix with island life. We also consult on the coliving and long-stay domain for a major urban developer.",
          links: [
            { label: "The Pier Coliving", url: "/en/thepiercoliving" },
          ],
        },
      ],
      cta: "Start a conversation",
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
