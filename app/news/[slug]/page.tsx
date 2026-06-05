import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/cms";
import { NewsBody } from "@/components/news/NewsBody";

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
    title: news.title_jp,
    description: news.excerpt,
    openGraph: {
      title: `${news.title_jp} — yugyo inc.`,
      description: news.excerpt,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsBySlug(params.slug);
  if (!news) {
    notFound();
  }
  return <NewsBody news={news} />;
}
