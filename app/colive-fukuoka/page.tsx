import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { EXTERNAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Colive Fukuoka",
  description:
    "福岡を、世界中のデジタルノマドが集う場へ。57カ国から500人以上が参加するカンファレンス、Colive Fukuoka。",
};

const STATS = [
  { value: "57", unit: "カ国", label_jp: "から参加" },
  { value: "500+", unit: "人", label_jp: "が福岡に集う" },
  { value: "¥140M", unit: "", label_jp: "の経済波及（2025）" },
];

export default function ColiveFukuokaPage() {
  return (
    <>
      <PageHeader
        title="Colive Fukuoka"
        titleJp="コリブ・フクオカ"
        subtitle="福岡を、世界中のデジタルノマドが集う場へ。yugyo が主催するカンファレンス。"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STATS.map((s) => (
              <div key={s.label_jp}>
                <p className="en text-5xl md:text-6xl text-fire-ember">
                  {s.value}
                  <span className="text-2xl md:text-3xl">{s.unit}</span>
                </p>
                <p className="mt-3 font-jp font-jpbody text-ink-soft">
                  {s.label_jp}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-prose space-y-8">
            <p className="font-jp font-jpbody text-base md:text-lg leading-body text-ink-soft">
              Colive Fukuoka は、世界中のデジタルノマドが福岡に長期滞在し、地域とつながりながら働き、暮らすためのカンファレンスです。2025 年には 57 カ国から 500 人以上が参加し、140M の経済波及を生みました。
            </p>
            <a
              href={EXTERNAL.colive_fukuoka}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-ink-navy px-6 py-3 label text-ink-navy hover:bg-ink-navy hover:text-mist-white transition-colors"
            >
              公式サイトへ ↗
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
