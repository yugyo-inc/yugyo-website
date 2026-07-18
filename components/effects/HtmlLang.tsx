"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { langFromPath, HTML_LANG } from "@/lib/i18n";

/**
 * <html lang> をロケールに同期する（/en 配下 = en、それ以外 = ja）。
 * App Router の root layout は日英で共有されており、サーバー側では
 * <html lang="ja"> 固定になるため、クライアントで補正する。
 * （恒久対応はルートグループ分割だが、影響範囲が大きいため段階導入）
 */
export function HtmlLang() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[langFromPath(pathname)];
  }, [pathname]);
  return null;
}
