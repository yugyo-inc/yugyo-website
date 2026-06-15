import type { Metadata } from "next";
import { ProjectsIndexBody } from "@/components/pages/ProjectsIndexBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four practices, one direction — be where you are meant to be. Digital nomadism, regional revitalization, consulting, and education.",
  alternates: altLinks("en", "/projects", "/en/projects"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en/projects",
    title: "Projects — yugyo inc.",
    description: "Four practices, one direction — be where you are meant to be.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "yugyo inc. — Be where you are meant to be.",
      },
    ],
  },
};

export default function ProjectsIndexEn() {
  return <ProjectsIndexBody lang="en" />;
}
