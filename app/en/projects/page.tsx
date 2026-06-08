import type { Metadata } from "next";
import { ProjectsIndexBody } from "@/components/pages/ProjectsIndexBody";
import { altLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description: "The four practices of yugyo inc. — digital nomadism, local revitalization, consulting, and education.",
  alternates: altLinks("/projects", "/en/projects"),
};

export default function ProjectsIndexEn() {
  return <ProjectsIndexBody lang="en" />;
}
