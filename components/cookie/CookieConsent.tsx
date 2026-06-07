"use client";

import { useEffect, useState } from "react";
import { COPY } from "@/content/copy";

const STORAGE_KEY = "yugyo-consent"; // "granted" | "denied"
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // 未設定なら解析は一切読み込まれない

// 同意済みのときだけ Google Analytics(gtag) を読み込む。未設定/未同意では何もしない。
function loadAnalytics() {
  if (!GA_ID) return;
  if (document.getElementById("ga-src")) return; // 二重読み込み防止
  const s = document.createElement("script");
  s.id = "ga-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  const inline = document.createElement("script");
  inline.id = "ga-init";
  inline.innerHTML =
    `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
    `gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`;
  document.head.appendChild(inline);
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage 不可の環境では表示しない */
      return;
    }
    if (choice === "granted") {
      loadAnalytics();
    } else if (choice !== "denied") {
      setOpen(true); // 未選択 → バナー表示
    }
  }, []);

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* noop */
    }
    if (granted) loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;
  const c = COPY.cookie;

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie__msg">
        {c.message}{" "}
        <a href="/privacy">{c.policy}</a>
      </p>
      <div className="cookie__actions">
        <button type="button" className="cookie__btn cookie__btn--ghost" onClick={() => decide(false)}>
          {c.decline}
        </button>
        <button type="button" className="cookie__btn cookie__btn--solid" onClick={() => decide(true)}>
          {c.accept}
        </button>
      </div>
    </div>
  );
}
