import { NextResponse } from "next/server";

// The Pier | Goto Nagasaki 入居申込フォーム → coliving@yugyo.work
// Resend REST API（/api/contact と同方式）。
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // ハニーポット
  if (clean(body.botcheck, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const moveIn = clean(body.moveIn, 40);
  const length = clean(body.length, 60);
  const guests = clean(body.guests, 40);
  const message = clean(body.message, 5000);
  const lang = clean(body.lang, 5) || "ja";

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.COLIVING_TO || "coliving@yugyo.work";
  const from = process.env.CONTACT_FROM || "yugyo.work <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["お名前 / Name", name],
    ["メール / Email", email],
    ["入居希望日 / Move-in", moveIn || "-"],
    ["滞在期間 / Length", length || "-"],
    ["人数 / Guests", guests || "-"],
    ["言語 / Page", lang.toUpperCase()],
  ];

  const text = [
    "The Pier | Goto Nagasaki 入居申込（yugyo.work/thepiercoliving）",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "メッセージ / Message:",
    message || "-",
  ].join("\n");

  const html = `<div style="font-family:sans-serif;font-size:14px;line-height:1.7">
      <h2 style="font-size:16px">The Pier | Goto Nagasaki 入居申込</h2>
      <table style="border-collapse:collapse">${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 14px 4px 0;color:#555">${esc(k)}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`
        )
        .join("")}</table>
      <p style="white-space:pre-wrap;margin-top:16px">${esc(message)}</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `【The Pier 入居申込】${name} さん（${length || "期間未定"}）`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("resend send failed:", res.status, detail.slice(0, 300));
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("resend request error:", e);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
