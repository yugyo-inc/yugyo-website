"use client";

import { useState } from "react";
import { COPY } from "@/content/copy";

type Variant = "hero" | "footer";

export function NewsletterForm({ variant = "footer" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");

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
        {COPY.newsletter.success}
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
          placeholder={COPY.newsletter.placeholder}
          aria-label={COPY.newsletter.heading}
          required
        />
        <button type="submit" aria-label={COPY.newsletter.button} disabled={state === "loading"}>
          {state === "loading" ? "…" : "→"}
        </button>
      </form>
      {state === "err" && (
        <p className="nl-msg" role="status">
          {COPY.newsletter.error}
        </p>
      )}
    </>
  );
}
