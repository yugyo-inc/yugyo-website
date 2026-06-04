"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { COPY } from "@/content/copy";

const LINKS = [
  { label: COPY.nav.work, href: "/#work" },
  { label: COPY.nav.about, href: "/about" },
  { label: COPY.nav.news, href: "/#news" },
  { label: COPY.nav.contact, href: "/contact.html" },
];

export function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // ホーム（暗いヒーローあり）はスクロールで切替。それ以外の明るいページは常に solid。
  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      <header className={`hd${solid ? " solid" : ""}`}>
        <a href="/" aria-label="yugyo inc.">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hd__logo"
            src={solid ? "/brand/wordmark_black.png" : "/brand/wordmark_white.png"}
            alt="yugyo inc."
          />
        </a>
        <nav className="hd__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
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
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
