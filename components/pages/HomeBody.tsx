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
  const { hero, about, band1, work, whatwedo, band2, cta } = getCopy(lang);
  const L = (href: string) => localizeHref(lang, href);

  return (
    <>
      {/* ===== Hero（ロゴ中央） ===== */}
      <section className="hero hero--center">
        <div
          className="hero__img"
          data-parallax="18"
          role="img"
          aria-label="A lone figure in a vast landscape — be where you are meant to be"
        />
        <div className="hero__veil" />
        <div className="hero__inner hero__inner--center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero__logo-big" src="/brand/wordmark_white.png" alt="yugyo inc." />
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>
          <div className="hero__meta">
            {hero.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <NewsletterForm variant="hero" lang={lang} />
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      {/* About / Manifesto（ラベル無し） */}
      <section className="pad pos" id="about" data-reveal>
        <div className="wrap">
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
          <div className="band__big band__big--sm" dangerouslySetInnerHTML={html(band1.big)} />
        </div>
      </section>

      {/* ===== News ===== */}
      <HomeNews lang={lang} />

      {/* ===== What we do（タイトルのみ／4事業 = クリックで詳細へ） ===== */}
      <section className="pad whatwedo" id="work" data-reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--tsuchi" src="/brand/sho/tsuchi_black.png" alt="" aria-hidden="true" data-parallax="-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--kaze" src="/brand/sho/kaze_black.png" alt="" aria-hidden="true" data-parallax="8" />
        <div className="wrap whatwedo__inner">
          <h2 className="sectitle">{whatwedo.kicker}</h2>
          <p className="whatwedo__lead">{whatwedo.lead}</p>
          <div className="index">
            {work.items.map((it) => (
              <Link className="row row--link" key={it.n} href={L(`/projects/${it.slug}`)}>
                <div className="row__n">{it.n}</div>
                <div className="row__t">
                  <span className="bar" style={{ background: ELEMENT_VAR[it.color] }} />
                  {it.title}
                </div>
                <div className="row__d">
                  {it.desc}
                  <span className={`el el-${it.color}`}>{it.el}</span>
                  <span className="row__cta">{it.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Band 2 — Colive Fukuoka（タイトル化） */}
      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/colive.jpg')" }} />
        <div className="band__veil" style={{ background: "rgba(14,27,44,0.55)" }} />
        <div className="band__inner" data-reveal>
          <div className="band__big">{band2.eyebrow}</div>
          <p className="band__sub">
            {band2.sub}{" "}
            <a href={band2.linkUrl} target="_blank" rel="noopener noreferrer">
              {band2.linkLabel}
            </a>
          </p>
        </div>
      </section>

      {/* ===== CTA（お問い合わせボタンのみ） ===== */}
      <section className="ctaband ctaband--minimal" data-reveal>
        <div className="wrap">
          <a className="ctaband__btn" href={L("/contact")}>
            {cta.button} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Motion />
    </>
  );
}
