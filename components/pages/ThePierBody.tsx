import fs from "node:fs";
import path from "node:path";
import { PageHero } from "@/components/layout/PageHero";
import { Motion } from "@/components/effects/Motion";
import { getThePier, PIER_GALLERY } from "@/content/thepier";
import { localizeHref, type Lang } from "@/lib/i18n";

/**
 * The Pier | Goto Nagasaki — Coliving ページ（日英共通）。
 * 世界の Coliving サイトの定石（Hero → Story → Gallery → Space → Rates →
 * Access → FAQ → CTA）を yugyo の序破急エディトリアルで組んだもの。
 */
export function ThePierBody({ lang }: { lang: Lang }) {
  const c = getThePier(lang);
  const L = (href: string) => localizeHref(lang, href);

  // 写真はアセット未配置でも壊れないよう、ビルド時に存在チェックして出し分ける
  const photos = PIER_GALLERY.filter((p) =>
    fs.existsSync(path.join(process.cwd(), "public", p))
  );
  const heroPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "photos/thepier/hero.jpg")
  )
    ? "/photos/thepier/hero.jpg"
    : "/photos/p1.jpg"; // 写真到着までの仮

  return (
    <>
      <PageHero title={c.hero.title} subtitle={c.hero.sub} photo={heroPhoto} />

      {/* 01 Story */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <div className="kicker">
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

      {/* 02 Gallery（自動スライド） */}
      {photos.length > 0 && (
        <section className="pier-gallery" aria-label="Photo gallery">
          <div className="pier-gallery__track">
            {[...photos, ...photos].map((p, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src={p}
                alt=""
                loading="lazy"
                aria-hidden={i >= photos.length}
              />
            ))}
          </div>
        </section>
      )}

      {/* 03 Space */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.space.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.space.heading}</h2>
          <div className="pier-grid">
            {c.space.items.map((it) => (
              <div className="pier-cell" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Rates */}
      <section className="pad pier-rates" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.pricing.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.pricing.heading}</h2>
          <p className="pier-lead">{c.pricing.lead}</p>
          <div className="pier-price-grid">
            <table className="legal__table pier-price">
              <tbody>
                {c.pricing.monthly.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>
                      <strong>{r.value}</strong>
                      {r.note ? <span className="pier-note">{r.note}</span> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="legal__table pier-price">
              <tbody>
                {c.pricing.short.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>
                      <strong>{r.value}</strong>
                      {r.note ? <span className="pier-note">{r.note}</span> : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pier-smallnote">{c.pricing.note}</p>
        </div>
      </section>

      {/* 05 Access */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.access.kicker}</span>
          </div>
          <div className="manifesto">
            <h2>{c.access.heading}</h2>
            <div>
              <p>{c.access.body}</p>
              <p className="note">{c.access.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 FAQ */}
      <section className="pad pier-faq" data-reveal>
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

      {/* CTA */}
      <section className="pad pier-cta" data-reveal>
        <div className="wrap">
          <h2 className="pier-h2">{c.cta.heading}</h2>
          <p className="pier-lead">{c.cta.sub}</p>
          <div className="pier-cta__row">
            <a className="ctaband__btn" href={L("/contact")}>
              {c.cta.button} <span aria-hidden="true">→</span>
            </a>
            <a className="inlinelink" href={`mailto:${c.cta.email}`}>
              {c.cta.email}
            </a>
            <a
              className="inlinelink"
              href={c.cta.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @thepiergoto ↗
            </a>
          </div>
        </div>
      </section>

      <Motion />
    </>
  );
}
