import type { MetadataRoute } from "next";
import { getNews } from "@/lib/pb";
import { SITE } from "@/lib/constants";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

  const staticRoutes = ["", "/about", "/news", "/contact.html", "/privacy", "/tokushoho"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const { items } = await getNews({ limit: 200 });
  const newsRoutes = items
    .filter((n) => !n.external_url)
    .map((n) => ({
      url: `${base}/news/${n.slug}`,
      lastModified: n.updated ? new Date(n.updated) : new Date(),
    }));

  return [...staticRoutes, ...newsRoutes];
}
