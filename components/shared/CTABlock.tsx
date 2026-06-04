import Link from "next/link";
import { SITE } from "@/lib/constants";

export function CTABlock({
  heading = "ともに歩く",
  body = "越境・地域共創・ワーケーション。yugyo と取り組みたいことがあれば、お気軽にご連絡ください。",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <div className="bg-ink-navy text-mist-white">
      <div className="mx-auto w-full max-w-container px-6 md:px-10 py-16 md:py-24">
        <h2 className="font-jp font-jpdisplay text-3xl md:text-4xl text-mist-white">
          {heading}
        </h2>
        <p className="mt-6 font-jp font-jpbody text-base md:text-lg text-mist-white/85 max-w-prose leading-body">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/contact"
            className="inline-block rounded-md border border-mist-white px-6 py-3 label text-mist-white hover:bg-mist-white hover:text-ink-navy transition-colors"
          >
            Contact
          </Link>
          <a
            href={`mailto:${SITE.contact_email}`}
            className="inline-block px-6 py-3 label text-mist-white/80 hover:text-mist-white transition-colors"
          >
            {SITE.contact_email}
          </a>
        </div>
      </div>
    </div>
  );
}
