"use client";

import { usePathname } from "next/navigation";
import { getCopy } from "@/content/copy";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { langFromPath, localizeHref } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const c = getCopy(lang);
  const f = c.footer;
  const nav = c.nav;
  const L = (href: string) => localizeHref(lang, href);

  const MENU = [
    { label: nav.about, href: "/about" },
    { label: nav.work, href: "/projects" },
    { label: nav.news, href: "/news" },
    { label: nav.contact, href: "/contact" },
  ];

  return (
    <footer className="ft" id="contact">
      <div className="wrap ft__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ft__vision-img" src="/brand/bewhere_white.png" alt={f.vision} />

        <div className="ft__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ft__logo" src="/brand/wordmark_white.png" alt="yugyo inc." />
            <p style={{ color: "rgba(247,244,238,0.7)", fontSize: 14, maxWidth: "34ch" }}>
              {f.tagline}
            </p>
            <div style={{ marginTop: 30 }}>
              <h4>{c.newsletter.eyebrow}</h4>
              <p style={{ color: "rgba(247,244,238,0.7)", fontSize: 13, maxWidth: "32ch", marginBottom: 6 }}>
                {c.newsletter.sub}
              </p>
              <NewsletterForm variant="footer" lang={lang} />
            </div>
          </div>

          <div>
            <h4>{f.menuLabel}</h4>
            <ul>
              {MENU.map((m) => (
                <li key={m.href}>
                  <a href={L(m.href)}>{m.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{f.connectLabel}</h4>
            <ul>
              <li>
                <a href={`mailto:${f.email}`}>{f.email}</a>
              </li>
              {f.social.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="ft__bar">
          <span>{f.copyright}</span>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
            <a href="/privacy">{lang === "ja" ? "プライバシーポリシー" : "Privacy Policy"}</a>
            <a href="/tokushoho">特定商取引法に基づく表記</a>
            <span>{f.place}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
