"use client";

import { useEffect } from "react";

/**
 * 控えめなパララックス＋スクロール・リビール。
 * 浮世絵の「奥のレイヤーが手前に出てくる」感を、ごく浅い奥行きで表現する。
 * prefers-reduced-motion: reduce のときは一切動かさない（アクセシビリティ）。
 *
 *  - [data-parallax="<px>"]  … 背景レイヤーをスクロールに合わせて微少に縦移動
 *  - [data-reveal]           … ビューポート進入時に下からふわりと出現
 */
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- reveal（reduced-motion でも最終状態は見える）----
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (reduce) {
      reveals.forEach((el) => el.classList.add("is-in"));
    } else if (reveals.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
      );
      reveals.forEach((el) => io.observe(el));
    }

    if (reduce) return;

    // ---- parallax ----
    const layers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (!layers.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      for (const el of layers) {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const p = (center - vh / 2) / vh; // ≈ -1..1 across the viewport
        const speed = parseFloat(el.dataset.parallax || "14");
        el.style.transform = `translate3d(0, ${(-p * speed).toFixed(
          2
        )}px, 0) scale(1.06)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
