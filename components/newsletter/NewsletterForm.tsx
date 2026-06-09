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
      } else {
        setState("err");
      }
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return (
      <p className="nl-msg" role="status">
        {nl.success}
      </p>
    );
  }

  return (
    <>
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
