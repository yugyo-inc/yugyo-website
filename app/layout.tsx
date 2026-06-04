import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "yugyo inc. — Be where you are meant to be.",
    template: "%s — yugyo inc.",
  },
  description:
    "yugyo inc. works where the world's movement meets the regions of Japan. Digital nomadism, regional revitalization, and global education. Based in Fukuoka.",
  openGraph: {
    title: "yugyo inc. — Be where you are meant to be.",
    description: "Where the world's movement meets the regions of Japan.",
    url: siteUrl,
    siteName: "yugyo inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "yugyo inc. — Be where you are meant to be.",
    description: "Where the world's movement meets the regions of Japan.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
