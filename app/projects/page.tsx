import type { Metadata } from "next";
import { ProjectsIndexBody } from "@/components/pages/ProjectsIndexBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "事業",
  description:
    "4 つの事業、ひとつの方向 — 在るべき場所へ。デジタルノマド・地域共創・コンサルティング・教育。",
  alternates: altLinks("ja", "/projects", "/en/projects"),
  openGraph: {
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work/projects",
    title: "事業 — yugyo inc.",
    description: "4 つの事業、ひとつの方向 — 在るべき場所へ。",
  },
};

export default function ProjectsIndexJa() {
  return <ProjectsIndexBody lang="ja" />;
}
