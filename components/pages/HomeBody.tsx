import Link from "next/link";
import { getCopy } from "@/content/copy";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { HomeNews } from "@/components/home/HomeNews";
import { Motion } from "@/components/effects/Motion";
import { localizeHref, type Lang } from "@/lib/i18n";

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

export function HomeBody({ lang }: { lang: Lang }) {
  const { hero, about, band1, work, whatwedo, band2, projects, cta } = getCopy(lang);
  const L = (href: string) => localizeHref(lang, href);

  return (
    <>
      {/* ===== 序 — Hero（Vision & Brand） ===== */}
      <section className="hero">
        <div
          className="hero__img"
          data-parallax="18"
          role="img"
          aria-label="A lone figure in a vast landscape — be where you are meant to be"
        />
        <div className="hero__veil" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero__brush" src="/brand/sho/arubeki_white.png" alt="" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">{hero.title}</h1>
          <div className="hero__meta">
            {hero.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <NewsletterForm variant="hero" lang={lang} />
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      {/* About / Manifesto（序） */}
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

      {/* Band 1 */}
      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/p11.jpg')" }} />
        <div className="band__veil" />
        <div className="band__inner" data-reveal>
          <p className="eyebrow band__eyebrow">{band1.eyebrow}</p>
          <div className="band__big" dangerouslySetInnerHTML={html(band1.big)} />
          <p className="band__sub">{band1.sub}</p>
        </div>
      </section>

      {/* ===== News（序） ===== */}
      <HomeNews lang={lang} />

      {/* ===== 破 — What we do（書背景） ===== */}
      <section className="pad whatwedo" id="work" data-reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--tsuchi" src="/brand/sho/tsuchi_black.png" alt="" aria-hidden="true" data-parallax="-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--kaze" src="/brand/sho/kaze_black.png" alt="" aria-hidden="true" data-parallax="8" />
        <div className="wrap whatwedo__inner">
          <span className="seq seq--do" aria-hidden="true">{whatwedo.seq}</span>
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

      {/* Band 2 — Colive Fukuoka */}
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

      {/* ===== 急 — Projects（4事業・クリックで詳細へ） ===== */}
      <section className="pad" id="projects" data-reveal>
        <div className="wrap">
          <span className="seq seq--kyu" aria-hidden="true">{projects.seq}</span>
          <div className="kicker">
            <span className="ln" />
            <span className="num">{projects.kicker}</span>
          </div>
          <p className="projects__lead">{projects.lead}</p>
          <div className="pcards">
            {work.items.map((it) => (
              <Link key={it.slug} className="pcard" href={L(`/projects/${it.slug}`)}>
                <span className="pcard__n">{it.n}</span>
                <span className="pcard__bar" style={{ background: ELEMENT_VAR[it.color] }} aria-hidden="true" />
                <h3 className="pcard__title">{it.title}</h3>
                <p className="pcard__desc">{it.desc}</p>
                <span className="pcard__cta">{it.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About & CTA（クロージング） ===== */}
      <section className="ctaband" data-reveal>
        <div className="wrap">
          <p className="eyebrow ctaband__eyebrow">{cta.eyebrow}</p>
          <h2 className="ctaband__heading">{cta.heading}</h2>
          <p className="ctaband__sub">{cta.sub}</p>
          <a className="ctaband__btn" href={L("/contact")}>
            {cta.button} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Motion />
    </>
  );
}
