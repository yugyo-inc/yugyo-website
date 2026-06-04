import { NextResponse } from "next/server";

// Resend REST API（SDK 不要・fetch のみ）で自前送信。第三者フォームリレーは挟まない。
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
  const company = clean(body.company, 160);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@yugyo.work";
  // 認証済みドメインの送信元。未設定時は Resend のテスト送信元にフォールバック。
  const from = process.env.CONTACT_FROM || "yugyo.work <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const text = [
    "お問い合わせがありました（yugyo.work）",
    "",
    `お名前: ${name}`,
    `メール: ${email}`,
    company ? `会社/組織: ${company}` : null,
    "",
    "本文:",
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#0E1B2C;line-height:1.6">
      <p style="font-weight:700">お問い合わせがありました（yugyo.work）</p>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#2A3A4E">お名前</td><td>${esc(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#2A3A4E">メール</td><td>${esc(email)}</td></tr>
        ${company ? `<tr><td style="padding:4px 12px 4px 0;color:#2A3A4E">会社/組織</td><td>${esc(company)}</td></tr>` : ""}
      </table>
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
        subject: `【お問い合わせ】${name} さんより — yugyo.work`,
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
