import { getNews } from "@/lib/cms";
import { NewsList } from "@/components/news/NewsList";
import { PageHero } from "@/components/layout/PageHero";
import { getCopy } from "@/content/copy";
import type { Lang } from "@/lib/i18n";

export async function NewsIndexBody({ lang }: { lang: Lang }) {
  const { items } = await getNews({ limit: 50 });
  const c = getCopy(lang);
  const p = c.pages.news;

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} photo="/photos/p10.jpg" />
      <div className="wrap pagebody">
        <NewsList items={items} lang={lang} emptyLabel={c.news.empty} />
      </div>
    </>
  );
}
