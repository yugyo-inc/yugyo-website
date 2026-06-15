import Link from "next/link";
import { format } from "date-fns";
import type { News } from "@/lib/types";
import { CATEGORY_ACCENT, CATEGORY_LABEL } from "./category";
import { ACCENT_TEXT } from "@/components/shared/accent";
import { localizeHref, type Lang } from "@/lib/i18n";

function formatDate(value: string): string {
  try {
    return format(new Date(value), "yyyy.MM.dd");
  } catch {
    return value;
  }
}

export function NewsCard({ news, lang = "ja" }: { news: News; lang?: Lang }) {
  const accent = CATEGORY_ACCENT[news.category];
  const isExternal = Boolean(news.external_url);
  const href = news.external_url || localizeHref(lang, `/news/${news.slug}`);
  const isEn = lang === "en";
  const title = isEn ? news.title_en || news.title_jp : news.title_jp;
  const excerpt = isEn ? news.excerpt_en || news.excerpt : news.excerpt;

  const inner = (
    <>
      <div className="flex items-baseline gap-3 mb-3">
        <span className={`label ${ACCENT_TEXT[accent]}`}>
          {CATEGORY_LABEL[news.category]}
        </span>
        <time
          dateTime={news.published_at}
          className="font-sans text-xs tracking-normal normal-case text-ink-soft"
        >
          {formatDate(news.published_at)}
        </time>
      </div>
      <h2 className="font-jp font-jpdisplay text-lg md:text-xl leading-tight text-ink-navy">
        {title}
      </h2>
      {excerpt && (
        <p className="mt-2 font-jp font-jpbody text-sm leading-body text-ink-soft line-clamp-2">
          {excerpt}
        </p>
      )}
    </>
  );

  const className =
    "block border-t border-paper-deep py-8 transition-colors hover:bg-mist-white";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
