import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, SITE, VISION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink-navy text-mist-white">
      <div className="mx-auto w-full max-w-container px-6 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Link
              href="/"
              className="font-sans font-display lowercase tracking-tight text-2xl text-mist-white"
            >
              yugyo inc.
            </Link>
            <p className="mt-4 font-jp font-jpbody text-sm text-mist-white/80 max-w-prose">
              {VISION.jp}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <ul className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="label text-mist-white/70 hover:text-mist-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-6">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-mist-white/70 hover:text-mist-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${SITE.contact_email}`}
              className="font-sans text-sm text-mist-white/70 hover:text-mist-white transition-colors"
            >
              {SITE.contact_email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-mist-white/15 pt-6">
          <p className="font-sans text-xs text-mist-white/60">
            © {SITE.founding_year ? new Date().getFullYear() : ""} yugyo inc.
            ／ {SITE.name_jp}
          </p>
        </div>
      </div>
    </footer>
  );
}
