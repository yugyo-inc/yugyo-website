"use client";

import { useState } from "react";
import { getThePier } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

/** The Pier 入居申込フォーム（coliving@yugyo.work へ送信・成功時 generate_lead 発火） */
export function PierApplyForm({ lang = "ja" }: { lang?: Lang }) {
  const t = getThePier(lang).apply;
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const val = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value ?? "";
    const data = {
      name: val("name"),
      email: val("email"),
      moveIn: val("moveIn"),
      length: val("length"),
      guests: val("guests"),
      message: val("message"),
      botcheck: val("botcheck"),
      lang,
    };
    if (!data.name || !data.email) {
      setState("err");
      setMsg(t.errFill);
      return;
    }
    setState("loading");
    try {
      const r = await fetch("/api/coliving", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setState("ok");
        setMsg(t.ok);
        // GA4 キーイベント（同意済みで gtag がロードされている場合のみ）
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { method: "thepier_apply" }
        );
      } else {
        setState("err");
        setMsg(t.errSend);
      }
    } catch {
      setState("err");
      setMsg(t.errSend);
    }
  }

  if (state === "ok") {
    return (
      <p className="cform__msg ok" role="status">
        {msg}
      </p>
    );
  }

  return (
    <form className="cform pier-form" onSubmit={submit} noValidate>
      <div className="cform__hp" aria-hidden="true">
        <label>
          {t.hp} <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="pier-form__grid">
        <div className="cform__field">
          <label htmlFor="pier-name">{t.name}</label>
          <input id="pier-name" name="name" type="text" required placeholder={t.namePh} />
        </div>
        <div className="cform__field">
          <label htmlFor="pier-email">{t.email}</label>
          <input id="pier-email" name="email" type="email" required placeholder={t.emailPh} />
        </div>
        <div className="cform__field">
          <label htmlFor="pier-movein">{t.moveIn}</label>
          <input id="pier-movein" name="moveIn" type="date" />
        </div>
        <div className="cform__field">
          <label htmlFor="pier-length">{t.length}</label>
          <select id="pier-length" name="length" defaultValue={t.lengthOptions[1]}>
            {t.lengthOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="cform__field">
          <label htmlFor="pier-guests">{t.guests}</label>
          <select id="pier-guests" name="guests" defaultValue={t.guestsOptions[0]}>
            {t.guestsOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cform__field">
        <label htmlFor="pier-message">{t.message}</label>
        <textarea id="pier-message" name="message" placeholder={t.messagePh} />
      </div>
      <button className="cform__btn" type="submit" disabled={state === "loading"}>
        {state === "loading" ? t.sending : t.send}
      </button>
      {state === "err" && (
        <p className="cform__msg err" role="status">
          {msg}
        </p>
      )}
    </form>
  );
}
