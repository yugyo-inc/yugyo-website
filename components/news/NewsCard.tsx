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

  const inner = (
    <>
      <div className="flex items-center gap-4">
        <span className={`label ${ACCENT_TEXT[accent]}`}>
          {CATEGORY_LABEL[news.category]}
        </span>
        <time
          dateTime={news.published_at}
          className="font-sans text-xs text-ink-soft"
        >
          {formatDate(news.published_at)}
        </time>
      </div>
      <h3 className="mt-3 font-jp font-jpdisplay text-lg md:text-xl text-ink-navy">
        {news.title_jp}
      </h3>
      <p className="mt-2 font-jp font-jpbody text-sm leading-body text-ink-soft">
        {news.excerpt}
      </p>
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
