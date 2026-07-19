"use client";

import { useMemo, useState } from "react";
import { getThePier, PIER_PRICING, pierDiscountRate } from "@/content/thepier";
import type { Lang } from "@/lib/i18n";

/**
 * The Pier 入居申込フォーム v3。
 * チェックイン日・滞在期間・人数から概算費用をライブ表示し、
 * 送信は /api/coliving → coliving@yugyo.work（成功時 generate_lead 発火）。
 */

// lengthOptions のインデックス → 月数（null = 短期・未定/概算なし）
// 「4〜6ヶ月」は下限4ヶ月で概算（〜表示）
const MONTHS_BY_INDEX: (number | null)[] = [1, 2, 3, 4, 6, null];

function summerMonthCount(start: Date, months: number): number {
  // 夏季 = 7〜9月。滞在に含まれる夏季の月数を数える
  let count = 0;
  const d = new Date(start.getFullYear(), start.getMonth(), 1);
  for (let i = 0; i < months; i++) {
    const m = d.getMonth() + 1;
    if (m >= 7 && m <= 9) count++;
    d.setMonth(d.getMonth() + 1);
  }
  return count;
}

export function PierApplyForm({ lang = "ja" }: { lang?: Lang }) {
  const t = getThePier(lang).apply;
  const price = PIER_PRICING[lang];
  const [state, setState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [lengthIdx, setLengthIdx] = useState(0);
  const [guestsIdx, setGuestsIdx] = useState(0);

  // 概算計算（長期割 2026-07-19 改定: 総額に対し 2ヶ月〜-15% / 3ヶ月〜-20% / 6ヶ月〜-30%）
  const estimate = useMemo(() => {
    const months = MONTHS_BY_INDEX[lengthIdx];
    if (months === null) return { kind: "short" as const };
    const start = moveIn ? new Date(moveIn) : null;
    const summer = start ? summerMonthCount(start, months) : 0;
    let total = price.monthly * months + price.summer * summer;
    if (guestsIdx === 1) total = total * 1.5;
    const rate = pierDiscountRate(months);
    total = Math.round(total * (1 - rate));
    const isRange = lengthIdx === 3; // 4〜6ヶ月 → 「〜」表示
    return {
      kind: "est" as const,
      months,
      summer,
      total,
      isRange,
      discountPct: Math.round(rate * 100),
    };
  }, [lengthIdx, guestsIdx, moveIn, price]);

  const fmt = (n: number) =>
    `${price.currency}${n.toLocaleString(price.locale)}`;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const val = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value ?? "";
    const data = {
      name: val("name"),
      email: val("email"),
      moveIn,
      length: t.lengthOptions[lengthIdx],
      guests: t.guestsOptions[guestsIdx],
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
          <input
            id="pier-movein"
            name="moveIn"
            type="date"
            value={moveIn}
            onChange={(e) => setMoveIn(e.target.value)}
          />
        </div>
        <div className="cform__field">
          <label htmlFor="pier-length">{t.length}</label>
          <select
            id="pier-length"
            name="length"
            value={lengthIdx}
            onChange={(e) => setLengthIdx(Number(e.target.value))}
          >
            {t.lengthOptions.map((o, i) => (
              <option key={o} value={i}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="cform__field">
          <label htmlFor="pier-guests">{t.guests}</label>
          <select
            id="pier-guests"
            name="guests"
            value={guestsIdx}
            onChange={(e) => setGuestsIdx(Number(e.target.value))}
          >
            {t.guestsOptions.map((o, i) => (
              <option key={o} value={i}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 概算費用 */}
      <div className="pier-est" aria-live="polite">
        <p className="pier-est__title">{t.est.title}</p>
        {estimate.kind === "short" ? (
          <p className="pier-est__note">{t.est.shortStay}</p>
        ) : (
          <>
            <p className="pier-est__value">
              {fmt(estimate.total)}
              {estimate.isRange ? "〜" : ""}
              <span className="pier-est__months">
                {" "}
                / {t.est.monthsLabel(String(estimate.months))}
                {estimate.isRange ? "〜" : ""}
              </span>
            </p>
            <p className="pier-est__note">
              {[
                estimate.summer > 0 ? t.est.summerNote : null,
                guestsIdx === 1 ? t.est.guestsNote : null,
              ]
                .filter(Boolean)
                .join(" · ") || " "}
            </p>
            <p className="pier-est__note">{t.est.depositNote}</p>
            {estimate.discountPct > 0 && (
              <p className="pier-est__note">
                {t.est.longStay}（-{estimate.discountPct}%）
              </p>
            )}
            <p className="pier-est__disclaimer">{t.est.disclaimer}</p>
          </>
        )}
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
