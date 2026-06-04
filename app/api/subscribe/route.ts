import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  // 1) Beehiiv（既存リストに直結 — env が設定されていれば最優先）
  const bhKey = process.env.BEEHIIV_API_KEY;
  const bhPub = process.env.BEEHIIV_PUBLICATION_ID;
  if (bhKey && bhPub) {
    try {
      const r = await fetch(
        `https://api.beehiiv.com/v2/publications/${bhPub}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bhKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: "yugyo.work",
          }),
        }
      );
      if (r.ok) return NextResponse.json({ ok: true });
      console.error("beehiiv subscribe failed:", r.status, (await r.text()).slice(0, 200));
    } catch (e) {
      console.error("beehiiv error:", e);
    }
  }

  // 2) Resend Audience（full-access key + audience が設定されていれば）
  const resendKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (resendKey && audienceId) {
    try {
      const r = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        }
      );
      if (r.ok) return NextResponse.json({ ok: true });
      console.error("resend audience failed:", r.status, (await r.text()).slice(0, 200));
    } catch (e) {
      console.error("resend audience error:", e);
    }
  }

  // 3) フォールバック: 登録を info@ に通知（暫定。Beehiiv 連携が整うまで取りこぼさない）
  const from = process.env.CONTACT_FROM || "yugyo.work <noreply@send.yugyo.work>";
  const to = process.env.CONTACT_TO || "info@yugyo.work";
  if (resendKey) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `【Newsletter登録】${email}`,
          text: `ニュースレター登録がありました（yugyo.work）\n\nメール: ${email}\n\n※ Beehiiv 連携が整うまでの暫定通知です。`,
        }),
      });
      if (r.ok) return NextResponse.json({ ok: true });
    } catch (e) {
      console.error("subscribe notify error:", e);
    }
  }

  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
}
