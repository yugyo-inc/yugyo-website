"use client";

import { useState } from "react";

export function ContactForm() {
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
      setMsg("Please fill in name, email and message.");
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
        setMsg("Thank you. Your message has been sent — we will be in touch.");
        f.reset();
      } else {
        setState("err");
        setMsg("Sorry, something went wrong. Please email info@yugyo.work directly.");
      }
    } catch {
      setState("err");
      setMsg("Network error. Please email info@yugyo.work directly.");
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
          Leave empty <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="cform__field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" required placeholder="Your name" />
      </div>
      <div className="cform__field">
        <label htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="cform__field">
        <label htmlFor="company">Company / Organisation</label>
        <input id="company" name="company" type="text" placeholder="(optional)" />
      </div>
      <div className="cform__field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required placeholder="Tell us what you have in mind." />
      </div>
      <button className="cform__btn" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Sending…" : "Send message"}
      </button>
      {state === "err" && (
        <p className="cform__msg err" role="status">
          {msg}
        </p>
      )}
    </form>
  );
}
