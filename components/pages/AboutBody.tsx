import { PageHero } from "@/components/layout/PageHero";
import { getCopy } from "@/content/copy";
import { COMPANY_PROFILE, profileCell, founderView } from "@/content/profile";
import type { Lang } from "@/lib/i18n";

export function AboutBody({ lang }: { lang: Lang }) {
  const c = getCopy(lang);
  const p = c.pages.about;
  const ap = c.about_page;
  const founder = founderView(lang);

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} photo="/photos/p5.jpg" />

      <div className="wrap pagebody">
        {/* Company */}
        <section>
          <div className="kicker">
            <span className="ln" />
            <span className="num">{ap.company}</span>
          </div>
          <table className="legal__table" style={{ marginTop: 0 }}>
            <tbody>
              {COMPANY_PROFILE.map((row) => {
                const cell = profileCell(row, lang);
                return (
                  <tr key={row.label_jp}>
                    <th scope="row">{cell.label}</th>
                    <td>{cell.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        {/* Founder */}
        <section style={{ marginTop: 72 }}>
          <div className="kicker">
            <span className="ln" />
            <span className="num">{ap.founder}</span>
          </div>
          <div className="legal__body" style={{ marginTop: 0 }}>
            <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: 22, margin: "0 0 4px" }}>
              {lang === "ja" ? founder.name_jp : founder.name_en}
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 14, margin: "0 0 20px" }}>
              {lang === "ja" ? `${founder.name_en} ／ ${founder.role}` : `${founder.name_jp} ／ ${founder.role}`}
            </p>
            {founder.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <h2
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-2)",
                margin: "34px 0 12px",
              }}
            >
              {ap.experience}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {founder.experience.map((e, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "118px 1fr",
                    gap: 16,
                    padding: "10px 0",
                    borderTop: "1px solid var(--line)",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--ink-2)",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--ink)" }}>{e.period}</span>
                  <span>{e.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
