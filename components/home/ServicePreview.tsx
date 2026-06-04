import Link from "next/link";
import type { Service } from "@/content/services";
import { ACCENT_BORDER } from "@/components/shared/accent";

export function ServicePreview({ service }: { service: Service }) {
  return (
    <Link
      href="/services"
      className={`group block border-l-2 ${ACCENT_BORDER[service.accent]} bg-mist-white pl-6 pr-6 py-8 transition-colors hover:bg-paper-deep/30`}
    >
      <p className="label text-ink-soft">{service.title_en}</p>
      <h3 className="mt-2 font-jp font-jpdisplay text-xl md:text-2xl text-ink-navy">
        {service.title_jp}
      </h3>
      <p className="mt-4 font-jp font-jpbody text-sm md:text-base leading-body text-ink-soft">
        {service.summary_jp}
      </p>
    </Link>
  );
}
