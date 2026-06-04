import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { COMPANY_PROFILE, FOUNDER } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "株式会社 遊行（yugyo inc.）会社概要と代表プロフィール。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" subtitle="株式会社 遊行 ｜ yugyo inc." photo="/photos/p5.jpg" />

      <div className="wrap pagebody">
        {/* Company */}
        <section>
          <div className="kicker">
            <span className="ln" />
            <span className="num">01 — 会社概要</span>
          </div>
          <table className="legal__table" style={{ marginTop: 0 }}>
            <tbody>
              {COMPANY_PROFILE.map((row) => (
                <tr key={row.label_jp}>
                  <th scope="row">{row.label_jp}</th>
                  <td>{row.value_jp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Founder */}
        <section style={{ marginTop: 72 }}>
          <div className="kicker">
            <span className="ln" />
            <span className="num">02 — Founder</span>
          </div>
          <div className="legal__body" style={{ marginTop: 0 }}>
            <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: 22, margin: "0 0 4px" }}>
              {FOUNDER.name_en}
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 14, margin: "0 0 20px" }}>
              {FOUNDER.name_jp} ／ {FOUNDER.role}
            </p>
            {FOUNDER.bio.map((p, i) => (
              <p key={i}>{p}</p>
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
              Experience
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOUNDER.experience.map((e, i) => (
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
