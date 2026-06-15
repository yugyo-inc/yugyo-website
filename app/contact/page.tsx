import type { Metadata } from "next";
import { ContactBody } from "@/components/pages/ContactBody";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "yugyo inc. へのお問い合わせ・取材依頼・登壇依頼。福岡, 日本。",
  alternates: altLinks("ja", "/contact", "/en/contact"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work/contact",
    title: "お問い合わせ — yugyo inc.",
    description: "yugyo inc. へのお問い合わせ・取材依頼・登壇依頼。",
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

export default function ContactJa() {
  return <ContactBody lang="ja" />;
}
