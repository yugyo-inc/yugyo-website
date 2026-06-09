import type { MetadataRoute } from "next";
import { getNews } from "@/lib/cms";
import { SITE } from "@/lib/constants";
import { PROJECTS } from "@/content/projects";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;
  const now = new Date();

  // 日英ミラーの共通ルート（法務ページは日本語のみ）
  const mirrored = ["", "/about", "/news", "/contact", "/projects"];
  const projectPaths = PROJECTS.map((p) => `/projects/${p.slug}`);
  const jaOnly = ["/privacy", "/tokushoho"];

  const routes: MetadataRoute.Sitemap = [];
  for (const path of [...mirrored, ...projectPaths]) {
    routes.push({ url: `${base}${path}`, lastModified: now });
    routes.push({ url: `${base}/en${path || "/"}`.replace(/\/$/, "") || `${base}/en`, lastModified: now });
  }
  for (const path of jaOnly) {
    routes.push({ url: `${base}${path}`, lastModified: now });
  }

  const { items } = await getNews({ limit: 200 });
  for (const n of items) {
    if (n.external_url) continue;
    const lm = n.updated ? new Date(n.updated) : now;
    routes.push({ url: `${base}/news/${n.slug}`, lastModified: lm });
    routes.push({ url: `${base}/en/news/${n.slug}`, lastModified: lm });
  }

  return routes;
}
