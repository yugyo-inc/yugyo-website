import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { CTABlock } from "@/components/shared/CTABlock";
import { getServiceBySlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Ikigai Co-Creator Program",
  description:
    "海外人材と日本の地域企業をつなぐ共創プログラム、Ikigai Co-Creator Program。",
};

export default function IkigaiPage() {
  const service = getServiceBySlug("ikigai");

  return (
    <>
      <PageHeader
        title="Ikigai"
        titleJp="Ikigai Co-Creator Program"
        subtitle={service?.summary_jp}
      />

      <Section>
        <Container>
          <div className="max-w-prose space-y-8">
            <p className="font-jp font-jpdisplay text-2xl md:text-3xl leading-display text-ink-navy">
              海を越えてやってくる才能が、日本の地域に根を下ろす。
            </p>
            <p className="font-jp font-jpbody text-base md:text-lg leading-body text-ink-soft">
              {service?.body_jp}
            </p>
            <p className="font-jp font-jpbody text-base md:text-lg leading-body text-ink-soft">
              プログラムの詳細・募集要項は準備を進めています。関心のある企業・人材の方は、お問い合わせください。
            </p>
          </div>
        </Container>
      </Section>

      <CTABlock
        heading="Ikigai に参加する"
        body="海外人材の受け入れ、地域企業との共創にご関心がありましたら、お気軽にご連絡ください。"
      />
    </>
  );
}
