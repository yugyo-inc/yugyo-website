import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailBody } from "@/components/pages/ProjectDetailBody";
import { PROJECTS, getProject } from "@/content/projects";
import { altLinks } from "@/lib/i18n";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Not Found" };
  return {
    title: p.ja.title,
    description: p.ja.tagline,
    alternates: altLinks(`/projects/${p.slug}`, `/en/projects/${p.slug}`),
    openGraph: { title: `${p.ja.title} — 株式会社 遊行`, description: p.ja.tagline, images: [p.photo] },
  };
}

export default function ProjectDetailJa({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectDetailBody project={project} lang="ja" />;
}
