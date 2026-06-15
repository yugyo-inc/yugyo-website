import type { Metadata } from "next";
import { ContactBody } from "@/components/pages/ContactBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with yugyo inc. — partnerships, press, speaking. Fukuoka, Japan.",
  alternates: altLinks("en", "/contact", "/en/contact"),
  openGraph: {
    locale: OG_LOCALE.en,
    alternateLocale: OG_ALT_LOCALE.en,
    url: "https://yugyo.work/en/contact",
    title: "Contact — yugyo inc.",
    description: "Get in touch with yugyo inc. — partnerships, press, speaking.",
  },
};

export default function ContactEn() {
  return <ContactBody lang="en" />;
}
