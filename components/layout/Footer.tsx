import { COPY } from "@/content/copy";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

const MENU = [
  { label: COPY.nav.work, href: "/#work" },
  { label: COPY.nav.about, href: "/#about" },
  { label: COPY.nav.news, href: "/#news" },
  { label: COPY.nav.contact, href: "/contact.html" },
];

export function Footer() {
  const f = COPY.footer;
  return (
    <footer className="ft" id="contact">
      <div className="wrap ft__top">
        <p className="eyebrow" style={{ color: "rgba(247,244,238,0.55)", marginBottom: 30 }}>
          {f.eyebrow}
        </p>
        <p className="ft__vision">{f.vision}</p>

        <div className="ft__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ft__logo" src="/brand/wordmark_white.png" alt="yugyo inc." />
            <p style={{ color: "rgba(247,244,238,0.7)", fontSize: 14, maxWidth: "34ch" }}>
              {f.tagline}
            </p>
            <div style={{ marginTop: 30 }}>
              <h4>{COPY.newsletter.eyebrow}</h4>
              <p style={{ color: "rgba(247,244,238,0.7)", fontSize: 13, maxWidth: "32ch", marginBottom: 6 }}>
                {COPY.newsletter.sub}
              </p>
              <NewsletterForm variant="footer" />
            </div>
          </div>

          <div>
            <h4>Menu</h4>
            <ul>
              {MENU.map((m) => (
                <li key={m.href}>
                  <a href={m.href}>{m.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
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
            <a href="/privacy">Privacy Policy</a>
            <a href="/tokushoho">特定商取引法に基づく表記</a>
            <span>{f.place}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
