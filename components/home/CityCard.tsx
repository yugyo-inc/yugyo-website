import type { City } from "@/content/cities";
import { ACCENT_BORDER } from "@/components/shared/accent";

export function CityCard({ city }: { city: City }) {
  return (
    <article
      className={`border-l-2 ${ACCENT_BORDER[city.accent]} bg-mist-white pl-6 pr-6 py-8`}
    >
      <p className="label text-ink-soft">{city.name_en}</p>
      <h3 className="mt-2 font-jp font-jpdisplay text-2xl text-ink-navy">
        {city.name_jp}
      </h3>
      <p className="mt-4 font-jp font-jpbody text-sm md:text-base leading-body text-ink-soft">
        {city.description_jp}
      </p>
    </article>
  );
}
