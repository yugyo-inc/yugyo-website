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
  const title = news.title_en || news.title_jp;
  const description = news.excerpt_en || news.excerpt;
  const ogImage = news.hero_image || "https://yugyo.work/og.jpg";
  return {
    title,
    description,
    alternates: altLinks("en", `/news/${params.slug}`, `/en/news/${params.slug}`),
    openGraph: {
      type: "article",
      locale: OG_LOCALE.en,
      alternateLocale: OG_ALT_LOCALE.en,
      url: `https://yugyo.work/en/news/${params.slug}`,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      publishedTime: news.published_at,
      modifiedTime: news.updated,
      authors: ["Ryo Osera", "yugyo inc."],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
  const title = news.title_en || news.title_jp;
  const description = news.excerpt_en || news.excerpt;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
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
    description,
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yugyo.work/en/news/${params.slug}`,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleLd)}
      />
      <NewsBody news={news} lang="en" />
    </>
  );
}
