import fs from "node:fs";
import path from "node:path";
import { Motion } from "@/components/effects/Motion";
import { PierNav } from "@/components/thepier/PierNav";
import { PierApplyForm } from "@/components/thepier/PierApplyForm";
import { getThePier, PIER_GALLERY, PIER_HERO_SLIDES } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

/**
 * The Pier | Goto Nagasaki — 独立サイト体裁のトップページ v3。
 * Hero(スライドショー) → Story → Gallery → Rooms&Space(写真カード6) →
 * Rates(価格パネル) → Flow(矢印ステップ) → Access(地図) → FAQ → Apply(概算計算フォーム) → Links。
 */
export function ThePierBody({ lang }: { lang: Lang }) {
  const c = getThePier(lang);

  const exists = (p: string) =>
    fs.existsSync(path.join(process.cwd(), "public", p));
  const slides = PIER_HERO_SLIDES.filter(exists);
  const photos = PIER_GALLERY.filter((p) => exists(p.src));

  return (
    <>
      <PierNav lang={lang} />

      {/* Hero（自動スライドショー） */}
      <section className="hero pier-hero">
        {slides.map((s, i) => (
          <div
            key={s}
            className={`hero__img pier-hero__slide${i === 0 ? " is-first" : ""}`}
            style={{ backgroundImage: `url('${s}')`, animationDelay: `${i * 6}s` }}
          />
        ))}
        <div className="hero__veil" />
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">{c.hero.eyebrow}</p>
          <h1 className="hero__title pier-hero__title">{c.hero.title}</h1>
          <p className="pier-hero__sub">{c.hero.sub}</p>
          <a className="pier-hero__cta" href="#apply">
            {c.hero.cta} <span aria-hidden="true">→</span>
          </a>
          {/* 掲載メディア・リンク（ヒーロー内に埋め込み） */}
          <div className="pier-hero__links">
            <span className="pier-hero__links-label">{c.links.kicker}</span>
            {c.links.items.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      {/* Story（The Pier Blue バンド） */}
      <section className="pad pier-band" id="story" data-reveal>
        <div className="wrap">
          <div className="kicker kicker--light">
            <span className="ln" />
            <span className="num">{c.story.kicker}</span>
          </div>
          <div className="manifesto">
            <h2 dangerouslySetInnerHTML={{ __html: c.story.heading }} />
            <div>
              {c.story.body.map((p, i) => (
                <p key={i} style={{ marginBottom: 18 }}>
                  {p}
                </p>
              ))}
              <p className="note">{c.story.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery（自動スライド帯） */}
      {photos.length > 0 && (
        <section className="pier-gallery" aria-label="Photo gallery">
          <div className="pier-gallery__track">
            {[...photos, ...photos].map((p, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src={p.src}
                alt={i >= photos.length ? "" : lang === "ja" ? p.alt_ja : p.alt_en}
                loading="lazy"
                aria-hidden={i >= photos.length}
              />
            ))}
          </div>
        </section>
      )}

      {/* Rooms & Space（写真カード6枚） */}
      <section className="pad" id="rooms" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.rooms.kicker}</span>
          </div>
          <h2 className="pier-h2" dangerouslySetInnerHTML={{ __html: c.rooms.heading }} />
          <p className="pier-lead pier-lead--wide">{c.rooms.lead}</p>
          <div className="pier-cards">
            {c.rooms.cards.map((card) => (
              <div className="pier-card" key={card.title}>
                <div
                  className="pier-card__img"
                  style={{ backgroundImage: `url('${card.img}')` }}
                  role="img"
                  aria-label={card.title}
                />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates（価格パネル・The Pier Blue バンド） */}
      <section className="pad pier-band" id="rates" data-reveal>
        <div className="wrap">
          <div className="kicker kicker--light">
            <span className="ln" />
            <span className="num">{c.pricing.kicker}</span>
          </div>
          <h2 className="pier-h2" dangerouslySetInnerHTML={{ __html: c.pricing.heading }} />
          <p className="pier-lead">{c.pricing.lead}</p>
          <div className="pier-pricing">
            <div className="pier-pricing__main">
              <p className="pier-pricing__label">{c.pricing.monthlyLabel}</p>
              <p className="pier-pricing__value">
                {c.pricing.monthlyValue}
                <span>{c.pricing.monthlyUnit}</span>
              </p>
              <ul className="pier-pricing__included">
                {c.pricing.included.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="pier-pricing__extras">
              {c.pricing.extras.map((ex) => (
                <div className="pier-pricing__extra" key={ex.label}>
                  <p className="l">{ex.label}</p>
                  <p className="v">{ex.value}</p>
                  {ex.note ? <p className="n">{ex.note}</p> : null}
                </div>
              ))}
            </div>
          </div>
          <p className="pier-smallnote">{c.pricing.note}</p>
        </div>
      </section>

      {/* Flow（ブロック＋矢印） */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.flow.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.flow.heading}</h2>
          <div className="pier-steps">
            {c.flow.steps.map((s, i) => (
              <div className="pier-steps__item" key={s.title}>
                <div className="pier-steps__box">
                  <span className="pier-steps__n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < c.flow.steps.length - 1 && (
                  <span className="pier-steps__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="pier-smallnote">{c.flow.note}</p>
        </div>
      </section>

      {/* Access（地図つき） */}
      <section className="pad" id="access" data-reveal style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.access.kicker}</span>
          </div>
          <div className="manifesto">
            <h2 dangerouslySetInnerHTML={{ __html: c.access.heading }} />
            <div>
              <p>{c.access.body}</p>
              <p className="note">
                <a className="inlinelink" href={c.access.addressUrl} target="_blank" rel="noopener noreferrer">
                  {c.access.address} ↗
                </a>
              </p>
            </div>
          </div>
          <div className="pier-map">
            <iframe
              src="https://www.google.com/maps?q=The%20Pier%20Goto%20Nagasaki&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Pier | Goto Nagasaki — Map"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad pier-faq" id="faq" data-reveal style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.faq.kicker}</span>
          </div>
          <div className="pier-faq__list">
            {c.faq.items.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply（概算計算つきフォーム・The Pier Blue バンド） */}
      <section className="pad pier-band" id="apply" data-reveal>
        <div className="wrap">
          <div className="kicker kicker--light">
            <span className="ln" />
            <span className="num">{c.apply.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.apply.heading}</h2>
          <p className="pier-lead">{c.apply.sub}</p>
          <div className="pier-apply__wrap">
            <PierApplyForm lang={lang} />
          </div>
        </div>
      </section>

      <Motion />
    </>
  );
}
