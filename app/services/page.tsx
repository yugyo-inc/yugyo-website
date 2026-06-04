import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABlock } from "@/components/shared/CTABlock";
import { SERVICES } from "@/content/services";
import { ACCENT_BORDER, ACCENT_TEXT } from "@/components/shared/accent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ikigai Co-Creator Program、Colive Fukuoka、行政受託、Consulting。yugyo inc. の 4 つの事業。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        titleJp="事業"
        subtitle="越境する人材と日本の地域を、実装でつなぐ。yugyo の 4 つの事業。"
      />

      <Section>
        <Container>
          <div className="space-y-px border-t border-paper-deep">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className={`border-l-2 ${ACCENT_BORDER[s.accent]} bg-mist-white px-6 md:px-10 py-10`}
              >
                <p className={`label ${ACCENT_TEXT[s.accent]}`}>
                  {s.title_en}
                </p>
                <h2 className="mt-2 font-jp font-jpdisplay text-2xl md:text-3xl text-ink-navy">
                  {s.title_jp}
                </h2>
                <p className="mt-5 max-w-prose font-jp font-jpbody text-base md:text-lg leading-body text-ink-soft">
                  {s.body_jp}
                </p>
                {s.external_url && (
                  <a
                    href={s.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block label text-ink-navy hover:text-ink-soft"
                  >
                    公式サイト ↗
                  </a>
                )}
                {s.slug === "ikigai" && (
                  <Link
                    href="/ikigai"
                    className="mt-6 inline-block label text-ink-navy hover:text-ink-soft"
                  >
                    詳しく見る →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABlock />
    </>
  );
}
