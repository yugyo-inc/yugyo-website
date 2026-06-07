import { COPY } from "@/content/copy";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { HomeNews } from "@/components/home/HomeNews";
import { Motion } from "@/components/effects/Motion";

// ホームは microCMS の News（HomeNews）を読むため ISR で更新に追従する。
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
  const { hero, about, band1, work, whatwedo, band2, grounds, projects, cta } = COPY;

  return (
    <>
      {/* ===== 序 — Hero（Vision & Brand／大瀬良・空） ===== */}
      <section className="hero">
        <div
          className="hero__img"
          data-parallax="18"
          role="img"
          aria-label="A lone figure in a vast landscape — be where you are meant to be"
        />
        <div className="hero__veil" />
        {/* 在るべき場所に — 土居佑治氏の筆字（ブランドVisionの和） */}
        <img className="hero__brush" src="/brand/sho/arubeki_white.png" alt="" aria-hidden="true" />
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

      {/* About / Manifesto（序 — Visionの続き） */}
      <section className="pad pos" id="about" data-reveal>
        <span className="seq seq--jo" aria-hidden="true">序</span>
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

      {/* Band 1 — 遊行 / 巡礼者 */}
      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/p11.jpg')" }} />
        <div className="band__veil" />
        <div className="band__inner" data-reveal>
          <p className="eyebrow band__eyebrow">{band1.eyebrow}</p>
          <div className="band__big" dangerouslySetInnerHTML={html(band1.big)} />
          <p className="band__sub">{band1.sub}</p>
        </div>
      </section>

      {/* ===== News（Mission & How-to／園田・火） ===== */}
      <HomeNews />

      {/* ===== 破 — What we do（Values & Style／どい・土墨） ===== */}
      <section className="pad whatwedo" id="work" data-reveal>
        {/* 書（土・風）を奥のレイヤーに薄く敷く */}
        <img
          className="whatwedo__sho whatwedo__sho--tsuchi"
          src="/brand/sho/tsuchi_black.png"
          alt=""
          aria-hidden="true"
          data-parallax="-10"
        />
        <img
          className="whatwedo__sho whatwedo__sho--kaze"
          src="/brand/sho/kaze_black.png"
          alt=""
          aria-hidden="true"
          data-parallax="8"
        />
        <div className="wrap whatwedo__inner">
          <span className="seq seq--do" aria-hidden="true">
            {whatwedo.seq}
          </span>
          <div className="kicker">
            <span className="ln ln--do" />
            <span className="num">{whatwedo.kicker}</span>
          </div>
          <div className="whatwedo__head">
            <h2 className="whatwedo__theme" dangerouslySetInnerHTML={html(whatwedo.theme)} />
            <p className="whatwedo__lead">{whatwedo.lead}</p>
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

      {/* Band 2 — Colive Fukuoka（実績の温度） */}
      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/colive.jpg')" }} />
        <div className="band__veil" style={{ background: "rgba(14,27,44,0.55)" }} />
        <div className="band__inner" data-reveal>
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

      {/* ===== 急 — Projects & Clients ===== */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <span className="seq seq--kyu" aria-hidden="true">
            {projects.seq}
          </span>
          <div className="kicker">
            <span className="ln" />
            <span className="num">{projects.kicker}</span>
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

          {/* Clients & Partners（ロゴは追って差し替え） */}
          <div className="clients">
            <h3 className="clients__h">{projects.clientsHeading}</h3>
            <div className="clients__grid">
              {["Colive Fukuoka", "Nagasaki", "Kanazawa University", "HafH", "Partners"].map((name) => (
                <div className="clients__cell" key={name}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== About & CTA（クロージング・フェードイン） ===== */}
      <section className="ctaband" data-reveal>
        <div className="wrap">
          <p className="eyebrow ctaband__eyebrow">{cta.eyebrow}</p>
          <h2 className="ctaband__heading">{cta.heading}</h2>
          <p className="ctaband__sub">{cta.sub}</p>
          <a className="ctaband__btn" href="/contact">
            {cta.button} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Motion />
    </>
  );
}
