import { COPY } from "@/content/copy";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

// News セクション（LatestNews）を microCMS の更新に追従させる ISR。
export const revalidate = 60;

const ELEMENT_VAR: Record<string, string> = {
  water: "var(--water)",
  fire: "var(--fire)",
  earth: "var(--earth)",
  sky: "var(--sky)",
  forest: "var(--forest)",
};

function html(s: string) {
  return { __html: s };
}

export default function Home() {
  const { hero, about, band1, work, band2, grounds, news } = COPY;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__img" role="img" aria-label="A lone figure crossing a suspension bridge into dark forest" />
        <div className="hero__veil" />
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <div className="hero__meta">
            {hero.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <NewsletterForm variant="hero" />
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      {/* About / Manifesto */}
      <section className="pad" id="about">
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{about.kicker}</span>
          </div>
          <div className="manifesto">
            <h2 dangerouslySetInnerHTML={html(about.heading)} />
            <div>
              <p>{about.body}</p>
              <p className="note" dangerouslySetInnerHTML={html(about.note)} />
            </div>
          </div>
        </div>
      </section>

      {/* Band 1 — pilgrim */}
      <section className="band">
        <div className="band__img" style={{ backgroundImage: "url('/photos/p11.jpg')" }} />
        <div className="band__veil" />
        <div className="band__inner">
          <p className="eyebrow band__eyebrow">{band1.eyebrow}</p>
          <div className="band__big" dangerouslySetInnerHTML={html(band1.big)} />
          <p className="band__sub">{band1.sub}</p>
        </div>
      </section>

      {/* Project / Work */}
      <section className="pad" id="work">
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{work.kicker}</span>
          </div>
          <div className="index">
            {work.items.map((it) => (
              <div className="row" key={it.n}>
                <div className="row__n">{it.n}</div>
                <div className="row__t">
                  <span className="bar" style={{ background: ELEMENT_VAR[it.color] }} />
                  {it.title}
                </div>
                <div className="row__d">
                  {it.desc}
                  <span className={`el el-${it.color}`}>{it.el}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2 — Colive Fukuoka */}
      <section className="band">
        <div className="band__img" style={{ backgroundImage: "url('/photos/colive.jpg')" }} />
        <div className="band__veil" style={{ background: "rgba(14,27,44,0.55)" }} />
        <div className="band__inner">
          <p className="eyebrow band__eyebrow">{band2.eyebrow}</p>
          <div className="band__big" style={{ fontSize: "clamp(28px, 4.2vw, 56px)" }}>
            {band2.big}
          </div>
          <p className="band__sub">
            {band2.sub}{" "}
            <a href={band2.linkUrl} target="_blank" rel="noopener noreferrer">
              {band2.linkLabel}
            </a>
          </p>
        </div>
      </section>

      {/* Grounds */}
      <section className="pad">
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{grounds.kicker}</span>
          </div>
          <div className="index">
            {grounds.items.map((it) => (
              <div className="row" key={it.n}>
                <div className="row__n">{it.n}</div>
                <div className="row__t">{it.title}</div>
                <div className="row__d">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="pad" id="news">
        <div className="wrap">
          <div className="news-head">
            <div className="kicker" style={{ marginBottom: 0 }}>
              <span className="ln" />
              <span className="num">{news.kicker}</span>
            </div>
            <a href="/news">{news.cta}</a>
          </div>
          <p className="news-empty">{news.empty}</p>
        </div>
      </section>
    </>
  );
}
