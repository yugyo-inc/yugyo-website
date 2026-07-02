"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getCopy } from "@/content/copy";
import { langFromPath } from "@/lib/i18n";

const STORAGE_KEY = "yugyo-consent"; // "granted" | "denied"
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // 未設定なら解析は一切読み込まれない

// 同意済みのときだけ Google Analytics(gtag) を読み込む。未設定/未同意では何もしない。
// これが GA4 の唯一のロード経路（同意ゲート方式）。無条件ロードは廃止（2026-07 ver2）。
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
    `gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true,send_page_view:true});`;
  document.head.appendChild(inline);
}

export function CookieConsent() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const [open, setOpen] = useState(false);
  const granted = useRef(false); // 同意状態（page_view 送信の可否判定に使用）

  useEffect(() => {
    let choice: string | null = null;
    try {
      choice = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage 不可の環境では表示しない */
      return;
    }
    if (choice === "granted") {
      granted.current = true;
      loadAnalytics();
    } else if (choice !== "denied") {
      setOpen(true); // 未選択 → バナー表示
    }
  }, []);

  // SPA（App Router）内のページ遷移でも page_view を送る（同意済みのときだけ）。
  // 初回ロードの page_view は gtag('config') が自動送信するため、初回のみスキップ。
  // 旧 <GoogleAnalytics>（@next/third-parties）が担っていた遷移計測をここへ移設（ver2）。
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (!granted.current || !GA_ID) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  const decide = (grant: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, grant ? "granted" : "denied");
    } catch {
      /* noop */
    }
    if (grant) {
      granted.current = true;
      loadAnalytics();
    }
    setOpen(false);
  };

  if (!open) return null;
  const c = getCopy(lang).cookie;

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
