import Image from "next/image";
import { VISION } from "@/lib/constants";

// Walking the Wild: "The figure is smaller than the place."
// Hero はフルスクリーンの documentary 風景写真 + 暗い navy overlay の上に、
// 引きの構図で Vision を左下に置く。白文字 × 45% navy overlay で AA を確保。
// Phase 1: Unsplash の低彩度・霧の風景をプレースホルダーとして使用（Ryo 承認後に Tier 1 撮影へ差し替え）。
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=70";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <Image
        src={HERO_PHOTO}
        alt="霧のかかった山並みの風景"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-navy/45" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[80vh] items-end">
        <div className="mx-auto w-full max-w-container px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="en text-5xl md:text-7xl lg:text-8xl text-mist-white">
              {VISION.en}
            </h1>
            <p className="font-jp font-jpdisplay text-2xl md:text-3xl mt-6 text-mist-white/90">
              {VISION.jp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
