import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { MemberCard } from "@/components/about/MemberCard";
import { getMembers } from "@/lib/pb";
import {
  VISION,
  MISSION,
  PERSONALITY_TRAITS,
  SITE,
} from "@/lib/constants";
import { COMPANY_PROFILE } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name_jp}（yugyo inc.）について。${MISSION.jp}`,
};

export const revalidate = 60;

export default async function AboutPage() {
  const members = await getMembers();

  return (
    <>
      <PageHeader
        title="About"
        titleJp="わたしたちについて"
        subtitle={SITE.description_jp}
      />

      {/* Vision */}
      <Section>
        <Container>
          <p className="label text-ink-soft">Vision</p>
          <p className="mt-6 en text-3xl md:text-5xl text-ink-navy">
            {VISION.en}
          </p>
          <p className="mt-4 font-jp font-jpdisplay text-xl md:text-2xl text-ink-soft">
            {VISION.jp}
          </p>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="bg-paper-deep/20">
        <Container>
          <p className="label text-ink-soft">Mission</p>
          <p className="mt-6 max-w-prose font-jp font-jpdisplay text-2xl md:text-3xl leading-display text-ink-navy">
            {MISSION.jp}
          </p>
        </Container>
      </Section>

      {/* Personality */}
      <Section>
        <Container>
          <p className="label text-ink-soft">Personality</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {PERSONALITY_TRAITS.map((t) => (
              <div key={t.code}>
                <p className="font-jp font-jpdisplay text-4xl md:text-5xl text-ink-navy">
                  {t.code}
                </p>
                <p className="mt-2 label text-ink-soft">{t.en}</p>
                <p className="mt-2 font-jp font-jpbody text-sm leading-body text-ink-soft">
                  {t.note_jp}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Members (PocketBase) — 公開メンバーが居る場合のみ表示 */}
      {members.length > 0 && (
        <Section className="bg-paper-deep/20">
          <Container>
            <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl mb-12 text-ink-navy">
              Members
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {members.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Company profile */}
      <Section>
        <Container>
          <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl mb-12 text-ink-navy">
            会社概要
          </h2>
          <dl className="max-w-3xl divide-y divide-paper-deep border-t border-paper-deep">
            {COMPANY_PROFILE.map((row) => (
              <div
                key={row.label_jp}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 py-5"
              >
                <dt className="label text-ink-soft md:col-span-1">
                  {row.label_jp}
                </dt>
                <dd className="font-jp font-jpbody leading-body text-ink-navy md:col-span-3">
                  {row.value_jp}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
