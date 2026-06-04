import type { Metadata } from "next";
import { getNews } from "@/lib/pb";
import { NewsList } from "@/components/news/NewsList";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "News",
  description: "yugyo inc. からの公式お知らせ。",
};

export const revalidate = 60;

export default async function NewsIndexPage() {
  const { items } = await getNews({ limit: 50 });

  return (
    <>
      <PageHero title="News" subtitle="yugyo inc. からの公式お知らせ" photo="/photos/p10.jpg" />
      <div className="wrap pagebody">
        <NewsList items={items} />
      </div>
    </>
  );
}
