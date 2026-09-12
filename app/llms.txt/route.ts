// app/llms.txt/route.ts — /llms.txt を text/plain で静的配信する。
// LLM / AI 回答エンジン向けにサイトの一次情報（会社概要・事業・The Pier・問い合わせ）を
// 日英併記で提供する。robots.ts / sitemap.ts と同じ Route Handler パターンに倣う。
// 記載はブランドの確定事実のみ（誇張・未承認コピー厳禁）。事業一覧は PROJECTS から生成。
import { SITE } from "@/lib/constants";
import { PROJECTS } from "@/content/projects";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET(): Response {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

  const jaProjects = PROJECTS.ja
    .map((p) => `- ${p.content.title} — ${base}/projects/${p.slug}（${p.content.tagline}）`)
    .join("\n");
  const enProjects = PROJECTS.en
    .map((p) => `- ${p.content.title} — ${base}/en/projects/${p.slug} (${p.content.tagline})`)
    .join("\n");

  const body = `# yugyo inc. — 株式会社 遊行

> Be where you are meant to be. ／ いちばん「自分らしく」いられる場所へ。
> 株式会社 遊行（yugyo inc.）は福岡を拠点に、世界の移動（デジタルノマド）と日本の地域が出会う場所で仕事をする会社です。地域共創・コンサルティング・教育・コリビングに取り組みます。
> yugyo inc. is a Fukuoka-based company working where the world's movement — digital nomads — meets the regions of Japan: regional co-creation, consulting, education, and coliving.

## 会社概要 / About
- 会社名 / Company: 株式会社 遊行 (yugyo inc.)
- 拠点 / Base: 福岡, 日本 / Fukuoka, Japan
- サイト / Website: ${base} (日本語) ・ ${base}/en (English)
- 会社概要 / Company profile: ${base}/about ・ ${base}/en/about
- お問い合わせ / Contact: ${base}/contact ・ ${base}/en/contact ・ ${SITE.contact_email}
- Instagram: https://www.instagram.com/yugyo_nomad/
- X: https://x.com/yugyo_jp
- LinkedIn: https://www.linkedin.com/company/95682142

## 事業 / Projects（日本語）
${jaProjects}
一覧 / Index: ${base}/projects

## Projects (English)
${enProjects}
Index: ${base}/en/projects

## The Pier Coliving
- 長崎・五島列島のコリビング（家具付きシェアハウス）。鍵付き個室6室とコワーキングを備え、株式会社 遊行が運営します。 ${base}/thepiercoliving
- A coliving space on the Goto Islands, Nagasaki, operated by yugyo inc.: six furnished private rooms and a coworking space. ${base}/en/thepiercoliving

## 最新情報 / News
- ${base}/news ・ ${base}/en/news
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
