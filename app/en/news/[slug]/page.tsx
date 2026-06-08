import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/cms";
import { NewsBody } from "@/components/news/NewsBody";
import { altLinks } from "@/lib/i18n";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const news = await getNewsBySlug(params.slug);
  if (!news) {
    return { title: "Not Found" };
  }
  return {
    title: news.title_en || news.title_jp,
    description: news.excerpt,
    alternates: altLinks(`/news/${params.slug}`, `/en/news/${params.slug}`),
    openGraph: {
      title: `${news.title_en || news.title_jp} — yugyo inc.`,
      description: news.excerpt,
    },
  };
}

export default async function NewsDetailEn({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsBySlug(params.slug);
  if (!news) {
    notFound();
  }
  return <NewsBody news={news} lang="en" />;
}
