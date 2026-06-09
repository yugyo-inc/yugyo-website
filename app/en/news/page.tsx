import type { Metadata } from "next";
import { NewsIndexBody } from "@/components/pages/NewsIndexBody";
import { altLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "News",
  description: "Official updates from yugyo inc.",
  alternates: altLinks("/news", "/en/news"),
};

export const revalidate = 60;

export default function NewsIndexEn() {
  return <NewsIndexBody lang="en" />;
}
