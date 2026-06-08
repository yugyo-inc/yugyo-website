import type { Metadata } from "next";
import { HomeBody } from "@/components/pages/HomeBody";
import { altLinks } from "@/lib/i18n";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "yugyo inc. — Be where you are meant to be.",
  description:
    "yugyo inc. works where the world's movement meets the regions of Japan. Digital nomadism, regional revitalization, and global education. Based in Fukuoka.",
  alternates: altLinks("/", "/en"),
};

export default function HomeEn() {
  return <HomeBody lang="en" />;
}
