import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How yugyo inc. collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap legal">
      <h1 className="legal__title">Privacy Policy</h1>
      <p className="legal__lead">yugyo inc.（株式会社 遊行）／ Last updated: 2026-06-05</p>

      <div className="legal__body">
        <p>
          yugyo inc. (&ldquo;yugyo&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
          This policy explains what personal information we collect through this website
          (yugyo.work), how we use it, and the choices you have.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li>
            <strong>Contact form</strong> — your name, email address, organisation (optional),
            and the content of your message.
          </li>
          <li>
            <strong>Newsletter</strong> — your email address, when you subscribe.
          </li>
          <li>
            <strong>Technical data</strong> — standard server and access logs (e.g. IP address,
            browser type) generated automatically when you visit the site.
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>To respond to your inquiries and communicate with you.</li>
          <li>To send our newsletter, if you have subscribed (you can unsubscribe at any time).</li>
          <li>To operate, secure, and improve the website.</li>
        </ul>

        <h2>3. Service providers</h2>
        <p>
          We use trusted third-party services to operate this site. Your data may be processed by:
        </p>
        <ul>
          <li><strong>Vercel</strong> — website hosting and delivery.</li>
          <li><strong>Resend</strong> — delivery of contact-form and transactional email.</li>
          <li>
            <strong>Newsletter delivery provider</strong> — used to manage newsletter subscriptions
            and distribution.
          </li>
        </ul>
        <p>
          These providers process data only on our behalf and in accordance with their own privacy
          and security commitments.
        </p>

        <h2>4. Cookies</h2>
        <p>
          This website does not use advertising or cross-site tracking cookies. Only cookies
          essential to the operation of the site may be used.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We retain personal information only as long as necessary for the purposes described above,
          or as required by law.
        </p>

        <h2>6. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal information, and
          you may unsubscribe from our newsletter at any time. To make a request, contact us at{" "}
          <a href="mailto:info@yugyo.work">info@yugyo.work</a>.
        </p>

        <h2>7. Contact</h2>
        <p>
          yugyo inc.（株式会社 遊行）<br />
          Email: <a href="mailto:info@yugyo.work">info@yugyo.work</a><br />
          Fukuoka, Japan
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be available
          on this page.
        </p>

        <p className="legal__note">
          ※ 本ポリシーは雛形です。公開前に法務確認・個人情報保護法（APPI）対応をご確認ください。
        </p>
      </div>
    </div>
  );
}
