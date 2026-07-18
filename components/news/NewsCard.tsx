import Link from "next/link";
import { format } from "date-fns";
import type { News } from "@/lib/types";
import { CATEGORY_LABEL } from "./category";
import { localizeHref, type Lang } from "@/lib/i18n";

function formatDate(value: string): string {
  try {
    return format(new Date(value), "yyyy.MM.dd");
  } catch {
    return value;
  }
}

// サムネイル未設定時のフォールバック（ホーム HomeNews と同一）
const FALLBACK = "/photos/colive.jpg";

// ホームの「最新情報」カード（.ncard / globals.css）と同一ビジュアルのグリッドカード。
export function NewsCard({ news, lang = "ja" }: { news: News; lang?: Lang }) {
  const isExternal = Boolean(news.external_url);
  const href = news.external_url || localizeHref(lang, `/news/${news.slug}`);
  const isEn = lang === "en";
  const title = isEn ? news.title_en || news.title_jp : news.title_jp;
  const excerpt = isEn ? news.excerpt_en || news.excerpt : news.excerpt;
  const img = news.hero_image || FALLBACK;

  const inner = (
    <>
      <div
        className="ncard__img"
        style={{ backgroundImage: `url('${img}')` }}
        role="img"
        aria-label={title}
      />
      <div className="ncard__body">
        <div className="ncard__meta">
          <span className="ncard__cat">{CATEGORY_LABEL[news.category]}</span>
          <time dateTime={news.published_at}>{formatDate(news.published_at)}</time>
        </div>
        <h2 className="ncard__title">{title}</h2>
        {excerpt && <p className="ncard__excerpt">{excerpt}</p>}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="ncard">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="ncard">
      {inner}
    </Link>
  );
}
