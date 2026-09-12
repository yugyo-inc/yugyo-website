import type { MetadataRoute } from "next";
import { getNews } from "@/lib/cms";
import { SITE } from "@/lib/constants";
import { PROJECTS } from "@/content/projects";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;
  const now = new Date();

  // 日英ミラーの共通ルート（法務ページは日本語のみ）
  const mirrored = ["", "/about", "/news", "/contact", "/projects", "/thepiercoliving"];
  const jaOnly = ["/privacy", "/tokushoho"];

  const routes: MetadataRoute.Sitemap = [];
  for (const path of mirrored) {
    routes.push({ url: `${base}${path}`, lastModified: now });
    routes.push({ url: `${base}/en${path || "/"}`.replace(/\/$/, "") || `${base}/en`, lastModified: now });
  }
  // 事業詳細（言語別に slug が異なる）
  for (const p of PROJECTS.ja) routes.push({ url: `${base}/projects/${p.slug}`, lastModified: now });
  for (const p of PROJECTS.en) routes.push({ url: `${base}/en/projects/${p.slug}`, lastModified: now });

  for (const path of jaOnly) {
    routes.push({ url: `${base}${path}`, lastModified: now });
  }

  // 個別ニュース記事（日英ミラー）。
  // /news/[slug] は external_url の有無に関わらず常に内部ページを描画するため、
  // external_url を持つ記事も sitemap から除外しない（GA4 で実流入のある実在ページ）。
  // getNews は 100 件超でも内部で分割取得するので limit は余裕をもって指定する。
  try {
    const { items, configured } = await getNews({ limit: 1000 });
    if (configured && items.length === 0) {
      // CMS 設定済みなのに 0 件 = fetch 失敗の疑い。サイレントな空 sitemap を検知できるよう記録。
      console.warn(
        "[sitemap] getNews returned 0 items while microCMS is configured; news article URLs will be missing"
      );
    }
    for (const n of items) {
      const lm = n.updated ? new Date(n.updated) : now;
      routes.push({ url: `${base}/news/${n.slug}`, lastModified: lm });
      routes.push({ url: `${base}/en/news/${n.slug}`, lastModified: lm });
    }
  } catch (e) {
    // ニュース取得で例外が出ても、静的ルートだけの sitemap は返す（全滅を防ぐ）。
    console.error("[sitemap] failed to append news article routes:", e);
  }

  return routes;
}
