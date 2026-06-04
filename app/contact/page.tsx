import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `yugyo inc. へのお問い合わせは ${SITE.contact_email} まで。`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        titleJp="お問い合わせ"
        subtitle="お仕事のご相談・取材・協業のご提案など、お気軽にご連絡ください。"
      />

      <Section>
        <Container>
          <p className="label text-ink-soft">Email</p>
          <a
            href={`mailto:${SITE.contact_email}`}
            className="mt-4 inline-block en text-3xl md:text-5xl text-ink-navy underline decoration-paper-deep underline-offset-8 hover:decoration-ink-navy transition-colors break-all"
          >
            {SITE.contact_email}
          </a>

          <div className="mt-16">
            <p className="label text-ink-soft">Social</p>
            <ul className="mt-4 flex flex-wrap gap-8">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jp font-jpdisplay text-lg text-ink-navy hover:text-ink-soft transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
