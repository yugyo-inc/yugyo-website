import type { News } from "@/lib/types";
import { NewsCard } from "./NewsCard";

export function NewsList({
  items,
  emptyLabel = "公開中のお知らせはまだありません。",
}: {
  items: News[];
  emptyLabel?: string;
}) {
  if (!items || items.length === 0) {
    return (
      <p className="border-t border-paper-deep py-12 font-jp font-jpbody text-ink-soft">
        {emptyLabel}
      </p>
    );
  }
  return (
    <div className="border-b border-paper-deep">
      {items.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
