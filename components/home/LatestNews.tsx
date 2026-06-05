import Link from "next/link";
import { getNews } from "@/lib/cms";
import { NewsList } from "@/components/news/NewsList";

export async function LatestNews() {
  const { items } = await getNews({ limit: 3 });

  return (
    <div>
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl text-ink-navy">
          News
        </h2>
        <Link
          href="/news"
          className="label text-ink-soft hover:text-ink-navy transition-colors"
        >
          View all
        </Link>
      </div>
      <NewsList items={items} />
    </div>
  );
}
