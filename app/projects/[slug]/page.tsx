import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailBody } from "@/components/pages/ProjectDetailBody";
import { PROJECTS, getProject } from "@/content/projects";
import { altLinks } from "@/lib/i18n";

export function generateStaticParams() {
  return PROJECTS.ja.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject("ja", params.slug);
  if (!p) return { title: "Not Found" };
  return {
    title: p.content.title,
    description: p.content.tagline,
    alternates: altLinks(`/projects/${p.slug}`, `/en/projects/${p.slug}`),
    openGraph: { title: `${p.content.title} — 株式会社 遊行`, description: p.content.tagline, images: [p.photo] },
  };
}

export default function ProjectDetailJa({ params }: { params: { slug: string } }) {
  const project = getProject("ja", params.slug);
  if (!project) notFound();
  return <ProjectDetailBody project={project} lang="ja" />;
}
