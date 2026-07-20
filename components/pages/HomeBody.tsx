import Link from "next/link";
import { getCopy } from "@/content/copy";
import { getProjects } from "@/content/projects";
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
  return lang === "en" ? <HomeEn /> : <HomeJa />;
}

/* 事業内容の写真カード（/projects 一覧と同じ pcard ブロック型・タグライン1行）。
 * トップページでは長文説明を出さず、詳細は各事業ページへ誘導する（2026-07-20 Ryo指示）。 */
function ServiceCards({ lang }: { lang: Lang }) {
  const projects = getProjects(lang);
  const L = (href: string) => localizeHref(lang, href);
  return (
    <>
      <div className="pcards pcards--photo">
        {projects.map((proj) => (
          <Link key={proj.slug} className="pcard pcard--photo" href={L(`/projects/${proj.slug}`)}>
            <div
              className="pcard__img"
              style={{ backgroundImage: `url('${proj.photo}')` }}
              role="img"
              aria-label={proj.content.title}
            />
            <div className="pcard__body">
              <span className="pcard__n">{proj.n}</span>
              <span className="pcard__bar" style={{ background: ELEMENT_VAR[proj.color] }} aria-hidden="true" />
              <h3 className="pcard__title">{proj.content.title}</h3>
              <p className="pcard__desc">{proj.content.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="whatwedo__more">
        <a className="inlinelink" href={L("/projects")}>
          {lang === "ja" ? "事業内容をみる →" : "View our projects →"}
        </a>
      </p>
    </>
  );
}

/* ===================== 日本語版（ミニマル：ロゴ中央／各セクション1タイトル） ===================== */
function HomeJa() {
  const lang: Lang = "ja";
  const { hero, about, band1, whatwedo, band2, cta } = getCopy(lang);
  const L = (href: string) => localizeHref(lang, href);

  return (
    <>
      <section className="hero hero--center">
        <div className="hero__img" data-parallax="18" role="img" aria-label="A lone figure in a vast landscape" />
        <div className="hero__veil" />
        <div className="hero__inner hero__inner--center">
          <h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero__logo-big" src="/brand/bewhere_white.png" alt="Be where you are meant to be. — yugyo inc." />
            <span className="sr-only">在るべき場所へ。</span>
          </h1>
          <div className="hero__meta">
            {hero.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <NewsletterForm variant="hero" lang={lang} />
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      <section className="pad pos" id="about" data-reveal>
        <div className="wrap">
          <div className="manifesto">
            <h2 className="mf-head--ja" dangerouslySetInnerHTML={html(about.heading)} />
            <div>
              <p>{about.body}</p>
              <p className="note" dangerouslySetInnerHTML={html(about.note)} />
              <a className="inlinelink" href={L("/about")}>
                会社概要を見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/p11.jpg')" }} />
        <div className="band__veil" />
        <div className="band__inner" data-reveal>
          <div className="band__big band__big--sm">{band1.big}</div>
        </div>
      </section>

      <HomeNews lang={lang} />

      <section className="pad whatwedo" id="work" data-reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--tsuchi" src="/brand/sho/tsuchi_black.png" alt="" aria-hidden="true" data-parallax="-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--kaze" src="/brand/sho/kaze_black.png" alt="" aria-hidden="true" data-parallax="8" />
        <div className="wrap whatwedo__inner">
          <h2 className="sectitle">{whatwedo.kicker}</h2>
          <p className="whatwedo__lead">{whatwedo.lead}</p>
          <ServiceCards lang={lang} />
        </div>
      </section>

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

/* ===================== 英語版（エディトリアル：修正前のレイアウト） ===================== */
function HomeEn() {
  const lang: Lang = "en";
  const { hero, about, band1, whatwedo, band2, cta } = getCopy(lang);
  const L = (href: string) => localizeHref(lang, href);

  return (
    <>
      <section className="hero">
        <div className="hero__img" data-parallax="18" role="img" aria-label="A lone figure in a vast landscape — be where you are meant to be" />
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

      <section className="pad pos" id="about" data-reveal>
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

      <section className="band">
        <div className="band__img" data-parallax="22" style={{ backgroundImage: "url('/photos/p11.jpg')" }} />
        <div className="band__veil" />
        <div className="band__inner" data-reveal>
          <p className="eyebrow band__eyebrow">{band1.eyebrow}</p>
          <div className="band__big" dangerouslySetInnerHTML={html(band1.big)} />
          <p className="band__sub">{band1.sub}</p>
        </div>
      </section>

      <HomeNews lang={lang} />

      <section className="pad whatwedo" id="work" data-reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--tsuchi" src="/brand/sho/tsuchi_black.png" alt="" aria-hidden="true" data-parallax="-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="whatwedo__sho whatwedo__sho--kaze" src="/brand/sho/kaze_black.png" alt="" aria-hidden="true" data-parallax="8" />
        <div className="wrap whatwedo__inner">
          <div className="kicker">
            <span className="ln ln--do" />
            <span className="num">{whatwedo.kicker}</span>
          </div>
          <div className="whatwedo__head">
            <h2 className="whatwedo__theme" dangerouslySetInnerHTML={html(whatwedo.theme)} />
            <p className="whatwedo__lead">{whatwedo.lead}</p>
          </div>
          <ServiceCards lang={lang} />
        </div>
      </section>

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
