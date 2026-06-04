import { MISSION } from "@/lib/constants";

export function VisionStatement() {
  return (
    <div className="max-w-prose">
      <p className="label text-ink-soft">Mission</p>
      <p className="mt-6 font-jp font-jpdisplay text-2xl md:text-3xl leading-display text-ink-navy">
        {MISSION.jp}
      </p>
      <p className="mt-8 font-jp font-jpbody text-base md:text-lg leading-body text-ink-soft">
        {MISSION.lead_jp}
      </p>
    </div>
  );
}
