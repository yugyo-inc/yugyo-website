import type { Metadata } from "next";
import { getNews } from "@/lib/pb";
import { NewsList } from "@/components/news/NewsList";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "News",
  description: "yugyo inc. からの公式お知らせ。",
};

export const revalidate = 60;

export default async function NewsIndexPage() {
  const { items } = await getNews({ limit: 50 });

  return (
    <>
      <PageHeader title="News" titleJp="お知らせ" subtitle="yugyo inc. からの公式お知らせ。" />
      <Section>
        <Container>
          <NewsList items={items} />
        </Container>
      </Section>
    </>
  );
}
