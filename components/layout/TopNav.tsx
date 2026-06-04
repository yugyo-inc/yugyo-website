"use client";

import { useEffect, useState } from "react";
import { COPY } from "@/content/copy";

const LINKS = [
  { label: COPY.nav.work, href: "/#work" },
  { label: COPY.nav.about, href: "/about" },
  { label: COPY.nav.news, href: "/#news" },
  { label: COPY.nav.contact, href: "/contact" },
];

export function TopNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  // 全ページ上部に暗い写真ヘッダーがあるため、スクロールで白→紙地に切替。
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.42);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
