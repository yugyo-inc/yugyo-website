"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper-cream/95 backdrop-blur border-b border-paper-deep">
      <nav className="mx-auto flex w-full max-w-container items-center justify-between px-6 md:px-10 h-16">
        <Link
          href="/"
          className="font-sans font-display lowercase tracking-tight text-xl text-ink-navy"
          onClick={() => setOpen(false)}
        >
          yugyo inc.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="label text-ink-soft hover:text-ink-navy transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="md:hidden text-ink-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile off-canvas */}
      {open && (
        <div className="md:hidden border-t border-paper-deep bg-paper-cream">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="label block py-3 text-ink-soft hover:text-ink-navy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
