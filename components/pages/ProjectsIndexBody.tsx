import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { getCopy } from "@/content/copy";
import { getProjects } from "@/content/projects";
import { localizeHref, type Lang } from "@/lib/i18n";

const ELEMENT_VAR: Record<string, string> = {
  water: "var(--water)",
  fire: "var(--fire)",
  earth: "var(--earth)",
  sky: "var(--sky)",
};

export function ProjectsIndexBody({ lang }: { lang: Lang }) {
  const c = getCopy(lang);
  const p = c.pages.projects;
  const projects = getProjects(lang);

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} photo="/photos/colive.jpg" />
      <div className="wrap pagebody">
        <p className="projects__lead">{c.projects.lead}</p>
        <div className="pcards">
          {projects.map((proj) => (
            <Link key={proj.slug} className="pcard" href={localizeHref(lang, `/projects/${proj.slug}`)}>
              <span className="pcard__n">{proj.n}</span>
              <span className="pcard__bar" style={{ background: ELEMENT_VAR[proj.color] }} aria-hidden="true" />
              <h3 className="pcard__title">{proj.content.title}</h3>
              <p className="pcard__desc">{proj.content.tagline}</p>
              <span className="pcard__cta">{c.projects.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
