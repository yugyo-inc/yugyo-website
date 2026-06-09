"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

const T = {
  ja: {
    name: "お名前 *",
    namePh: "お名前",
    email: "メール *",
    emailPh: "you@example.com",
    company: "会社・団体名",
    companyPh: "（任意）",
    message: "メッセージ *",
    messagePh: "ご相談やお問い合わせの内容をお書きください。",
    send: "送信する",
    sending: "送信中…",
    ok: "ありがとうございます。メッセージを送信しました。追ってご連絡します。",
    errFill: "お名前・メール・メッセージをご入力ください。",
    errSend: "送信に失敗しました。お手数ですが info@yugyo.work へ直接ご連絡ください。",
    errNet: "通信エラーが発生しました。info@yugyo.work へ直接ご連絡ください。",
    hp: "空欄のまま",
  },
  en: {
    name: "Name *",
    namePh: "Your name",
    email: "Email *",
    emailPh: "you@example.com",
    company: "Company / Organisation",
    companyPh: "(optional)",
    message: "Message *",
    messagePh: "Tell us what you have in mind.",
    send: "Send message",
    sending: "Sending…",
    ok: "Thank you. Your message has been sent — we will be in touch.",
    errFill: "Please fill in name, email and message.",
    errSend: "Sorry, something went wrong. Please email info@yugyo.work directly.",
    errNet: "Network error. Please email info@yugyo.work directly.",
    hp: "Leave empty",
  },
};

export function ContactForm({ lang = "ja" }: { lang?: Lang }) {
  const t = T[lang];
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err" | "pending">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      company: (f.elements.namedItem("company") as HTMLInputElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      botcheck: (f.elements.namedItem("botcheck") as HTMLInputElement).value,
    };
    if (!data.name || !data.email || !data.message) {
      setState("err");
      setMsg(t.errFill);
      return;
    }
    setState("loading");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setState("ok");
        setMsg(t.ok);
        f.reset();
      } else {
        setState("err");
        setMsg(t.errSend);
      }
    } catch {
      setState("err");
      setMsg(t.errNet);
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
    <form className="cform" onSubmit={submit} noValidate>
      <div className="cform__hp" aria-hidden="true">
        <label>
          {t.hp} <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="cform__field">
        <label htmlFor="name">{t.name}</label>
        <input id="name" name="name" type="text" required placeholder={t.namePh} />
      </div>
      <div className="cform__field">
        <label htmlFor="email">{t.email}</label>
        <input id="email" name="email" type="email" required placeholder={t.emailPh} />
      </div>
      <div className="cform__field">
        <label htmlFor="company">{t.company}</label>
        <input id="company" name="company" type="text" placeholder={t.companyPh} />
      </div>
      <div className="cform__field">
        <label htmlFor="message">{t.message}</label>
        <textarea id="message" name="message" required placeholder={t.messagePh} />
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
