import fs from "node:fs";
import path from "node:path";
import { Motion } from "@/components/effects/Motion";
import { PierNav } from "@/components/thepier/PierNav";
import { PierApplyForm } from "@/components/thepier/PierApplyForm";
import { getThePier, PIER_GALLERY } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

/**
 * The Pier | Goto Nagasaki — 独立サイト体裁のトップページ。
 * 構成: Hero(100vh) → Story → Gallery → Rooms → Space → Rates → Flow →
 * Access → FAQ → Apply(フォーム) → リンク。参照 = 旧Canvaサイト × yugyo編集様式。
 */
export function ThePierBody({ lang }: { lang: Lang }) {
  const c = getThePier(lang);

  // 写真はアセット未配置でも壊れないよう、ビルド時に存在チェックして出し分ける
  const photos = PIER_GALLERY.filter((p) =>
    fs.existsSync(path.join(process.cwd(), "public", p))
  );
  const heroPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "photos/thepier/hero.jpg")
  )
    ? "/photos/thepier/hero.jpg"
    : "/photos/p1.jpg";

  return (
    <>
      <PierNav lang={lang} />

      {/* Hero（フルビューポート） */}
      <section className="hero pier-hero">
        <div
          className="hero__img"
          data-parallax="18"
          style={{ backgroundImage: `url('${heroPhoto}')` }}
          role="img"
          aria-label="The beach of the Goto Islands"
        />
        <div className="hero__veil" />
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">{c.hero.eyebrow}</p>
          <h1 className="hero__title">{c.hero.title}</h1>
          <p className="pier-hero__sub">{c.hero.sub}</p>
          <a className="pier-hero__cta" href="#apply">
            {c.hero.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero__scroll">SCROLL ↓</div>
      </section>

      {/* 01 Story（The Pier Blue バンド） */}
      <section className="pad pier-band" id="story" data-reveal>
        <div className="wrap">
          <div className="kicker kicker--light">
            <span className="ln" />
            <span className="num">{c.story.kicker}</span>
          </div>
          <div className="manifesto">
            <h2>{c.story.heading}</h2>
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

      {/* 03 Rooms */}
      <section className="pad" id="rooms" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.rooms.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.rooms.heading}</h2>
          <p className="pier-lead">{c.rooms.lead}</p>
          <div className="pier-grid pier-grid--3">
            {c.rooms.items.map((it) => (
              <div className="pier-cell" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Space */}
      <section className="pad" data-reveal style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.space.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.space.heading}</h2>
          <div className="pier-grid pier-grid--3">
            {c.space.items.map((it) => (
              <div className="pier-cell" key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Rates（The Pier Blue バンド） */}
      <section className="pad pier-band" id="rates" data-reveal>
        <div className="wrap">
          <div className="kicker kicker--light">
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

      {/* 06 Flow（入居までの流れ・Notion Basic Info 要約） */}
      <section className="pad" data-reveal>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.flow.kicker}</span>
          </div>
          <h2 className="pier-h2">{c.flow.heading}</h2>
          <ol className="pier-flow">
            {c.flow.steps.map((s, i) => (
              <li key={s.title}>
                <span className="pier-flow__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="pier-smallnote">{c.flow.note}</p>
        </div>
      </section>

      {/* 07 Access */}
      <section className="pad" id="access" data-reveal style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{c.access.kicker}</span>
          </div>
          <div className="manifesto">
            <h2>{c.access.heading}</h2>
            <div>
              <p>{c.access.body}</p>
              <p className="note">
                <a className="inlinelink" href={c.access.addressUrl} target="_blank" rel="noopener noreferrer">
                  {c.access.address} ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 FAQ */}
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

      {/* 09 Apply（フォーム・The Pier Blue バンド） */}
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

      {/* リンク・フッターノート */}
      <section className="pad" data-reveal style={{ paddingBottom: 72 }}>
        <div className="wrap">
          <p className="eyebrow">{c.links.kicker}</p>
          <div className="pier-links">
            {c.links.items.map((l) => (
              <a key={l.url} className="inlinelink" href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
          <p className="pier-smallnote" style={{ marginTop: 28 }}>
            {c.footerNote}
          </p>
        </div>
      </section>

      <Motion />
    </>
  );
}
