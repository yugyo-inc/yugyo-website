import Link from "next/link";
import { format } from "date-fns";
import type { News } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { CATEGORY_ACCENT, CATEGORY_LABEL } from "./category";
import { ACCENT_TEXT } from "@/components/shared/accent";

function formatDate(value: string): string {
  try {
    return format(new Date(value), "yyyy.MM.dd");
  } catch {
    return value;
  }
}

// PB の editor field は信頼できる admin が入力した HTML 文字列。
// Phase 1 では dangerouslySetInnerHTML を許容（CLAUDE.md TODO: sanitize 検討）。
export function NewsBody({ news }: { news: News }) {
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
            元の記事を読む
          </a>
        )}

        <div className="mt-16 border-t border-paper-deep pt-8">
          <Link href="/news" className="label text-ink-soft hover:text-ink-navy">
            ← News 一覧へ
          </Link>
        </div>
      </Container>
    </article>
  );
}
