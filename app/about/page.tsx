import type { Metadata } from "next";
import { COMPANY_PROFILE, FOUNDER } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "株式会社 遊行（yugyo inc.）会社概要と代表プロフィール。",
};

export default function AboutPage() {
  return (
    <div className="wrap legal">
      <h1 className="legal__title">About</h1>
      <p className="legal__lead">株式会社 遊行 ｜ yugyo inc.</p>

      {/* Founder */}
      <section style={{ marginTop: 56 }}>
        <div className="kicker">
          <span className="ln" />
          <span className="num">01 — Founder</span>
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
        </div>
      </section>

      {/* Company */}
      <section style={{ marginTop: 64 }}>
        <div className="kicker">
          <span className="ln" />
          <span className="num">02 — 会社概要</span>
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
    </div>
  );
}
