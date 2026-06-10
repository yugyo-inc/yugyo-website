import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { getCopy } from "@/content/copy";
import type { Lang } from "@/lib/i18n";

export function ContactBody({ lang }: { lang: Lang }) {
  const c = getCopy(lang);
  const f = c.footer;
  const p = c.pages.contact;
  const cp = c.contact_page;

  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} photo="/photos/p2.jpg" small={lang === "ja"} />

      <div className="wrap pagebody">
        <div className="contact-grid">
          <ContactForm lang={lang} />

          <aside className="contact-aside">
            <div className="block">
              <h2>{cp.email}</h2>
              <a className="email" href={`mailto:${f.email}`}>
                {f.email}
              </a>
            </div>
            <div className="block">
              <h2>{cp.social}</h2>
              <ul>
                {f.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="block">
              <h2>{cp.based}</h2>
              <p style={{ color: "var(--ink-2)" }}>{f.place}</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
