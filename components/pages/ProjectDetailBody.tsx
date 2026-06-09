import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getCopy } from "@/content/copy";
import { type Project, projectContent } from "@/content/projects";
import { localizeHref, type Lang } from "@/lib/i18n";

const ELEMENT_VAR: Record<string, string> = {
  water: "var(--water)",
  fire: "var(--fire)",
  earth: "var(--earth)",
  sky: "var(--sky)",
};

export function ProjectDetailBody({ project, lang }: { project: Project; lang: Lang }) {
  const c = projectContent(project, lang);
  const cta = getCopy(lang).cta;
  const back = lang === "ja" ? "← 事業一覧へ" : "← All projects";

  return (
    <>
      <PageHero title={c.title} subtitle={c.tagline} photo={project.photo} />

      <div className="wrap pagebody">
        <div className="proj">
          <div className="kicker">
            <span className="ln" />
            <span className="num">{project.n} — {c.title}</span>
          </div>

          <p className="proj__lead">
            <span className="proj__bar" style={{ background: ELEMENT_VAR[project.color] }} aria-hidden="true" />
            {c.lead}
          </p>

          <div className="proj__sections">
            {c.sections.map((s, i) => (
              <section className="proj__section" key={i}>
                <h2 className="proj__h">{s.h}</h2>
                <p className="proj__p">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="proj__cta">
            <a className="ctaband__btn" href={localizeHref(lang, "/contact")}>
              {c.cta} <span aria-hidden="true">→</span>
            </a>
            <Link className="proj__back" href={localizeHref(lang, "/projects")}>
              {back}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
