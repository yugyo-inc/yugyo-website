// lib/i18n.ts — 言語（日英ミラー）の中核ヘルパー
// 既定 = 日本語（yugyo.work）。英語は /en 配下にミラー（yugyo.work/en）。
// 法務ページ（/privacy・/tokushoho）は日本語のみ（英語からもJPへリンク）。

import type { Metadata } from "next";

export const LANGS = ["ja", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ja";

export function isLang(x: string): x is Lang {
  return (LANGS as readonly string[]).includes(x);
}

export function otherLang(lang: Lang): Lang {
  return lang === "ja" ? "en" : "ja";
}

export const LANG_LABEL: Record<Lang, string> = { ja: "日本語", en: "English" };
export const LANG_SHORT: Record<Lang, string> = { ja: "JP", en: "EN" };
export const HTML_LANG: Record<Lang, string> = { ja: "ja", en: "en" };

/** パス名から現在のロケールを判定（client/server 共通）。 */
export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ja";
}

/**
 * 内部リンクをロケール対応に変換する。
 *  - 外部URL / mailto / tel はそのまま
 *  - 既存の /en 接頭辞は一旦剥がしてから付け直す（多重付与を防ぐ）
 *  - ja は素のパス、en は /en 接頭辞
 *  - ハッシュ（/#news 等）も同様に扱う
 */
export function localizeHref(lang: Lang, href: string): string {
  if (!href.startsWith("/")) return href;

  let path = href;
  if (path === "/en") path = "/";
  else if (path.startsWith("/en/")) path = path.slice(3); // "/en/about" -> "/about"

  if (lang === "ja") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

/** hreflang 用 alternates。ja 側パスと en 側パスを渡す。 */
export function altLinks(jaPath: string, enPath: string): Metadata["alternates"] {
  return {
    canonical: jaPath === "/" ? "/" : jaPath,
    languages: {
      ja: jaPath,
      en: enPath,
      "x-default": jaPath,
    },
  };
}
