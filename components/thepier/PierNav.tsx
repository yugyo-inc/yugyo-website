"use client";

import { useEffect, useState } from "react";
import { getThePier } from "@/content/thepier";
import { localizeHref, type Lang } from "@/lib/i18n";

/**
 * The Pier 専用ヘッダー。グローバル TopNav の代わりに表示し、
 * 「独立したサイトのトップページ」の体裁をつくる。
 */
export function PierNav({ lang = "ja" }: { lang?: Lang }) {
  const nav = getThePier(lang).nav;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.42);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: nav.story, href: "#story" },
    { label: nav.rooms, href: "#rooms" },
    { label: nav.rates, href: "#rates" },
    { label: nav.access, href: "#access" },
    { label: nav.faq, href: "#faq" },
  ];

  const switchHref = lang === "ja" ? "/en/thepiercoliving" : "/thepiercoliving";

  return (
    <>
      <header className={`hd${solid ? " solid" : ""}`}>
        <a className="pier-wordmark" href={lang === "ja" ? "/thepiercoliving" : "/en/thepiercoliving"}>
          The Pier Coliving
          <span className="pier-wordmark__sub">Goto Islands, Nagasaki</span>
        </a>
        <nav className="hd__nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="pier-nav__apply" href="#apply">
            {nav.apply}
          </a>
          <a className="hd__lang" href={switchHref} hrefLang={lang === "ja" ? "en" : "ja"}>
            {lang === "ja" ? "EN" : "JP"}
          </a>
          <a className="pier-nav__parent" href={localizeHref(lang, "/")}>
            {nav.parent} ↗
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mmenu${open ? " open" : ""}`}>
        <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#apply" onClick={() => setOpen(false)}>
          {nav.apply}
        </a>
        <a className="mmenu__lang" href={switchHref} onClick={() => setOpen(false)}>
          {lang === "ja" ? "EN · English" : "JP · 日本語"}
        </a>
      </div>
    </>
  );
}
