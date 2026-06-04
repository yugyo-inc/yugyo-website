import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { COPY } from "@/content/copy";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with yugyo inc. — Fukuoka, Japan.",
};

export default function ContactPage() {
  const f = COPY.footer;
  return (
    <>
      <PageHero
        title="Let's walk together."
        subtitle="Partnerships, press, speaking, or working with us across borders and regions."
        photo="/photos/p2.jpg"
      />

      <div className="wrap pagebody">
        <div className="contact-grid">
          <ContactForm />

          <aside className="contact-aside">
            <div className="block">
              <h2>Email</h2>
              <a className="email" href={`mailto:${f.email}`}>
                {f.email}
              </a>
            </div>
            <div className="block">
              <h2>Social</h2>
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
              <h2>Based in</h2>
              <p style={{ color: "var(--ink-2)" }}>{f.place}</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
