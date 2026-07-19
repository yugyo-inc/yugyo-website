"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  PIER_MAPS_URL,
  PIER_RATING,
  PIER_REVIEWS,
} from "@/content/thepier-reviews";
import { getThePier } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

/**
 * The Pier — Google クチコミのスライダー（手動転載・自動反映なし）。
 * JPページでは日本語（EN原文は日本語訳）、ENページでは英語（JA原文は英語訳）を表示。
 * 原文と異なる言語で表示するカードには訳注バッジをつける。
 */
export function PierReviews({ lang }: { lang: Lang }) {
  const t = getThePier(lang).reviews;
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = PIER_REVIEWS.length;

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const card = el.querySelector<HTMLElement>(".pier-review");
    const w = card ? card.offsetWidth + 20 : el.clientWidth;
    setIndex(Math.min(total - 1, Math.max(0, Math.round(el.scrollLeft / w))));
  }, [total]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pier-review");
    const w = card ? card.offsetWidth + 20 : el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className="pier-reviews">
      <div className="pier-reviews__track" ref={trackRef}>
        {PIER_REVIEWS.map((r) => {
          const text = lang === "ja" ? r.text_ja : r.text_en;
          const translated = r.original !== lang;
          return (
            <article className="pier-review" key={r.author} lang={lang}>
              <div className="pier-review__stars" aria-label={`${r.stars} / 5`}>
                {"★★★★★"}
              </div>
              <p className="pier-review__text">{text}</p>
              <footer className="pier-review__meta">
                <span className="pier-review__author">{r.author}</span>
                <span className="pier-review__when">
                  {lang === "ja" ? r.when_ja : r.when_en}
                </span>
                {translated && (
                  <span className="pier-review__badge">{t.translatedNote}</span>
                )}
              </footer>
            </article>
          );
        })}
      </div>
      <div className="pier-reviews__nav">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.prev}
          disabled={index === 0}
        >
          ←
        </button>
        <span className="pier-reviews__count">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.next}
          disabled={index === total - 1}
        >
          →
        </button>
        <a
          className="pier-reviews__maps"
          href={PIER_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          ★ {PIER_RATING.score} · Google ({PIER_RATING.count}) ↗
        </a>
      </div>
    </div>
  );
}
