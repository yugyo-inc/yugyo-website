import type { Metadata } from "next";
import { AboutBody } from "@/components/pages/AboutBody";
import { altLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description: "Company profile and founder of yugyo inc.",
  alternates: altLinks("/about", "/en/about"),
};

export default function AboutEn() {
  return <AboutBody lang="en" />;
}
