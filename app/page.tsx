import { Hero } from "@/components/home/Hero";
import { VisionStatement } from "@/components/home/VisionStatement";
import { CityCard } from "@/components/home/CityCard";
import { ServicePreview } from "@/components/home/ServicePreview";
import { LatestNews } from "@/components/home/LatestNews";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTABlock } from "@/components/shared/CTABlock";
import { CITIES } from "@/content/cities";
import { SERVICES } from "@/content/services";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />

      <Section>
        <Container>
          <VisionStatement />
        </Container>
      </Section>

      <Section className="bg-paper-deep/20">
        <Container>
          <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl mb-12 text-ink-navy">
            3 つの場
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CITIES.map((c) => (
              <CityCard key={c.slug} city={c} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl mb-12 text-ink-navy">
            事業
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <ServicePreview key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-deep/20">
        <Container>
          <LatestNews />
        </Container>
      </Section>

      <CTABlock />
    </>
  );
}
