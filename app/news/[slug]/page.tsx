import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/cms";
import { NewsBody } from "@/components/news/NewsBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";
import { jsonLdScript } from "@/lib/structured-data";

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
  const ogImage = news.hero_image || "https://yugyo.work/og.jpg";
  return {
    title: news.title_jp,
    description: news.excerpt,
    alternates: altLinks("ja", `/news/${params.slug}`, `/en/news/${params.slug}`),
    openGraph: {
      type: "article",
      locale: OG_LOCALE.ja,
      alternateLocale: OG_ALT_LOCALE.ja,
      url: `https://yugyo.work/news/${params.slug}`,
      title: news.title_jp,
      description: news.excerpt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: news.title_jp }],
      publishedTime: news.published_at,
      modifiedTime: news.updated,
      authors: ["大瀬良 亮", "yugyo inc."],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title_jp,
      description: news.excerpt,
      images: [ogImage],
    },
  };
}

export default async function NewsDetailJa({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsBySlug(params.slug);
  if (!news) {
    notFound();
  }
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title_jp,
    image: news.hero_image || "https://yugyo.work/og.jpg",
    datePublished: news.published_at,
    dateModified: news.updated,
    author: { "@type": "Organization", name: "yugyo inc." },
    publisher: {
      "@type": "Organization",
      name: "yugyo inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://yugyo.work/brand/wordmark_white.png",
      },
    },
    description: news.excerpt,
    inLanguage: "ja",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yugyo.work/news/${params.slug}`,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleLd)}
      />
      <NewsBody news={news} lang="ja" />
    </>
  );
}
