import Link from "next/link";
import { format } from "date-fns";
import { getNews } from "@/lib/cms";
import { COPY } from "@/content/copy";
import { CATEGORY_LABEL } from "@/components/news/category";

function fmt(value: string): string {
  try {
    return format(new Date(value), "yyyy.MM.dd");
  } catch {
    return value;
  }
}

// 人物写真の無い記事はブランドの people 写真にフォールバックする
// （doy concept: 人が映る写真 × News 記事リンク）。
const FALLBACK = "/photos/colive.jpg";

/**
 * ホームの News（Mission & How-to／園田カラー）。
 * Weaving Relations between the world and locals. を写真×記事で表現。
 */
export async function HomeNews() {
  const { items } = await getNews({ limit: 3 });
  const c = COPY.news;

  return (
    <section className="pad mission" id="news" data-reveal>
      <div className="wrap">
        <span className="seq seq--news" aria-hidden="true">
          {c.seq}
        </span>
        <div className="kicker">
          <span className="ln ln--news" />
          <span className="num">{c.kicker}</span>
        </div>

        <div className="mission__head">
          <h2 className="mission__theme" dangerouslySetInnerHTML={{ __html: c.theme }} />
          <p className="mission__lead">{c.lead}</p>
        </div>

        {items.length === 0 ? (
          <p className="news-empty">{c.empty}</p>
        ) : (
          <div className="ncards">
            {items.map((n) => {
              const img = n.hero_image || FALLBACK;
              const external = Boolean(n.external_url);
              const href = n.external_url || `/news/${n.slug}`;
              const inner = (
                <>
                  <div
                    className="ncard__img"
                    style={{ backgroundImage: `url('${img}')` }}
                    role="img"
                    aria-label={n.title_jp}
                  />
                  <div className="ncard__body">
                    <div className="ncard__meta">
                      <span className="ncard__cat">{CATEGORY_LABEL[n.category]}</span>
                      <time dateTime={n.published_at}>{fmt(n.published_at)}</time>
                    </div>
                    <h3 className="ncard__title">{n.title_jp}</h3>
                    <p className="ncard__excerpt">{n.excerpt}</p>
                  </div>
                </>
              );
              return external ? (
                <a key={n.id} className="ncard" href={href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link key={n.id} className="ncard" href={href}>
                  {inner}
                </Link>
              );
            })}
          </div>
        )}

        <div className="mission__foot">
          <a href="/news">{c.cta}</a>
        </div>
      </div>
    </section>
  );
}
