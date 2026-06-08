import type { Metadata } from "next";
import { ProjectsIndexBody } from "@/components/pages/ProjectsIndexBody";
import { altLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "事業",
  description: "株式会社 遊行（yugyo inc.）の4つの事業 — デジタルノマド・地域共創・コンサルティング・教育。",
  alternates: altLinks("/projects", "/en/projects"),
};

export default function ProjectsIndexJa() {
  return <ProjectsIndexBody lang="ja" />;
}
