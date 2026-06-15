import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailBody } from "@/components/pages/ProjectDetailBody";
import { PROJECTS, getProject } from "@/content/projects";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export function generateStaticParams() {
  return PROJECTS.en.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject("en", params.slug);
  if (!p) return { title: "Not Found" };
  return {
    title: p.content.title,
    description: p.content.tagline,
    alternates: altLinks("en", `/projects/${p.slug}`, `/en/projects/${p.slug}`),
    openGraph: {
      locale: OG_LOCALE.en,
      alternateLocale: OG_ALT_LOCALE.en,
      url: `https://yugyo.work/en/projects/${p.slug}`,
      title: `${p.content.title} — yugyo inc.`,
      description: p.content.tagline,
      images: [p.photo],
    },
  };
}

export default function ProjectDetailEn({ params }: { params: { slug: string } }) {
  const project = getProject("en", params.slug);
  if (!project) notFound();
  return <ProjectDetailBody project={project} lang="en" />;
}
