import type { Metadata } from "next";
import { ThePierBody } from "@/components/pages/ThePierBody";
import { getThePier } from "@/content/thepier";
import { altLinks, OG_LOCALE, OG_ALT_LOCALE } from "@/lib/i18n";
import { jsonLdScript } from "@/lib/structured-data";
import { pierLodgingLd, pierFaqLd } from "@/lib/thepier-ld";

const c = getThePier("ja");

export const metadata: Metadata = {
  title: { absolute: `${c.metaTitle}` },
  description: c.metaDescription,
  alternates: altLinks("ja", "/thepiercoliving", "/en/thepiercoliving"),
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    locale: OG_LOCALE.ja,
    alternateLocale: OG_ALT_LOCALE.ja,
    url: "https://yugyo.work/thepiercoliving",
    title: c.metaTitle,
    description: c.metaDescription,
    images: [{ url: "/photos/thepier/hero.jpg", width: 1200, height: 630, alt: "The Pier | Goto Nagasaki" }],
  },
};

export default function ThePierJa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(pierLodgingLd("ja"))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(pierFaqLd("ja"))}
      />
      <ThePierBody lang="ja" />
    </>
  );
}
