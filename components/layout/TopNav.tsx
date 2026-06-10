"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCopy } from "@/content/copy";
import { langFromPath, localizeHref, otherLang, LANG_SHORT } from "@/lib/i18n";

export function TopNav() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const nav = getCopy(lang).nav;
  const L = (href: string) => localizeHref(lang, href);

  const LINKS = [
    { label: nav.work, href: "/projects" },
    { label: nav.about, href: "/about" },
    { label: nav.news, href: "/news" },
    { label: nav.contact, href: "/contact" },
  ];

  // 言語切替先：現在のパスの対訳パス（同一ページの相手言語へ）。
  const other = otherLang(lang);
  const switchHref =
    lang === "en"
      ? pathname === "/en"
        ? "/"
        : pathname.replace(/^\/en/, "") || "/"
      : pathname === "/"
        ? "/en"
        : `/en${pathname}`;

  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.42);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`hd${solid ? " solid" : ""}`}>
        <a href={L("/")} aria-label="yugyo inc.">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hd__logo"
            src={solid ? "/brand/wordmark_black.png" : "/brand/wordmark_white.png"}
            alt="yugyo inc."
          />
        </a>
        <nav className="hd__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={L(l.href)}>
              {l.label}
            </a>
          ))}
          <a className="hd__lang" href={switchHref} hrefLang={other} aria-label={`Switch to ${other === "en" ? "English" : "日本語"}`}>
            {LANG_SHORT[other]}
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span /><span />
        </button>
      </header>

      <div className={`mmenu${open ? " open" : ""}`}>
        <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        {LINKS.map((l) => (
          <a key={l.href} href={L(l.href)} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="mmenu__lang" href={switchHref} hrefLang={other} onClick={() => setOpen(false)}>
          {LANG_SHORT[other]} · {other === "en" ? "English" : "日本語"}
        </a>
      </div>
    </>
  );
}
