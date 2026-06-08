import Link from "next/link";
import { format } from "date-fns";
import type { News } from "@/lib/types";
import { Container } from "@/components/ui/Container";
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

const NB_T = {
  ja: { external: "元の記事を読む", back: "← ニュース一覧へ" },
  en: { external: "Read the original →", back: "← Back to news" },
};

// microCMS の本文（日本語共通）。dangerouslySetInnerHTML を許容（CLAUDE.md TODO: sanitize）。
export function NewsBody({ news, lang = "ja" }: { news: News; lang?: Lang }) {
  const t = NB_T[lang];
  const accent = CATEGORY_ACCENT[news.category];
  return (
    <article>
      <div className="border-b border-paper-deep">
        <Container className="py-16 md:py-24">
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
          <h1 className="mt-4 font-jp font-jpdisplay text-3xl md:text-5xl text-ink-navy leading-display">
            {news.title_jp}
          </h1>
          {news.title_en && (
            <p className="mt-3 font-sans text-base md:text-lg text-ink-soft">
              {news.title_en}
            </p>
          )}
        </Container>
      </div>

      <Container className="py-12 md:py-16">
        {news.external_url ? (
          <p className="font-jp font-jpbody leading-body text-ink-soft">
            {news.excerpt}
          </p>
        ) : (
          <div
            className="prose-yugyo max-w-prose font-jp font-jpbody leading-body text-ink-navy"
            dangerouslySetInnerHTML={{ __html: news.body_jp }}
          />
        )}

        {news.external_url && (
          <a
            href={news.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md border border-ink-navy px-6 py-3 label text-ink-navy hover:bg-ink-navy hover:text-mist-white transition-colors"
          >
            {t.external}
          </a>
        )}

        <div className="mt-16 border-t border-paper-deep pt-8">
          <Link href={localizeHref(lang, "/news")} className="label text-ink-soft hover:text-ink-navy">
            {t.back}
          </Link>
        </div>
      </Container>
    </article>
  );
}
