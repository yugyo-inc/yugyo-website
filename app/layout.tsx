import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { SITE } from "@/lib/constants";
import {
  organizationLd,
  websiteLd,
  jsonLdScript,
} from "@/lib/structured-data";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "yugyo inc. — Be where you are meant to be.",
    template: "%s — yugyo inc.",
  },
  description:
    "株式会社 遊行（yugyo inc.）— デジタルノマド・地域共創・コンサルティング・教育の 4 事業。福岡拠点。",
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "yugyo inc.",
    url: siteUrl,
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    title: "yugyo inc. — Be where you are meant to be.",
    description: "世界の移動が、日本の地域と出会う場所。",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "yugyo inc. — Be where you are meant to be.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yugyo inc. — Be where you are meant to be.",
    description: "世界の移動が、日本の地域と出会う場所。",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <TopNav />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationLd)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteLd)}
        />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
