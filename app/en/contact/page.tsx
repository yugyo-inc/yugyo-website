import type { Metadata } from "next";
import { ContactBody } from "@/components/pages/ContactBody";
import { altLinks } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with yugyo inc. — Fukuoka, Japan.",
  alternates: altLinks("/contact", "/en/contact"),
};

export default function ContactEn() {
  return <ContactBody lang="en" />;
}
