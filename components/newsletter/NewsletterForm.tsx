"use client";

import { useState } from "react";
import { getCopy } from "@/content/copy";
import type { Lang } from "@/lib/i18n";

type Variant = "hero" | "footer";

export function NewsletterForm({
  variant = "footer",
  lang = "ja",
}: {
  variant?: Variant;
  lang?: Lang;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

  const nl = getCopy(lang).newsletter;
  const wrapClass = variant === "hero" ? "hero__nl" : "ft__nl";
  // hero 版のみ、登録枠の上に見出しを添える（フッター版は ft 側に既存見出しあり）
  const heroHead =
    variant === "hero" ? <p className="hero__nl-head">{nl.heroHeading}</p> : null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("err");
      return;
    }
    setState("loading");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setState("ok");
        setEmail("");
        // GA4 イベント（同意済みで gtag がロードされている場合のみ発火）
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "sign_up",
          { method: "newsletter" }
        );
      } else {
        setState("err");
      }
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <>
        {heroHead}
        <p className="nl-msg" role="status">
          {nl.success}
        </p>
      </>
    );
  }

  return (
    <>
      {heroHead}
      <form className={wrapClass} onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={nl.placeholder}
          aria-label={nl.heading}
          required
        />
        <button type="submit" aria-label={nl.button} disabled={state === "loading"}>
          {state === "loading" ? "…" : "→"}
        </button>
      </form>
      {state === "err" && (
        <p className="nl-msg" role="status">
          {nl.error}
        </p>
      )}
    </>
  );
}
