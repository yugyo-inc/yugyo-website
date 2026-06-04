// components/shared/accent.ts
// Tailwind は動的クラス名を解析できないため、accent token を完全リテラルの
// クラス文字列にマップする。色は「点」として置く（Kill List: 大面積飽和色塗り禁止）。
import type { AccentToken } from "@/content/cities";

export const ACCENT_BORDER: Record<AccentToken, string> = {
  "water-indigo": "border-water-indigo",
  "sky-blue": "border-sky-blue",
  "fire-ember": "border-fire-ember",
  "earth-ochre": "border-earth-ochre",
  "forest-green": "border-forest-green",
};

export const ACCENT_TEXT: Record<AccentToken, string> = {
  "water-indigo": "text-water-indigo",
  "sky-blue": "text-sky-blue",
  "fire-ember": "text-fire-ember",
  "earth-ochre": "text-earth-ochre",
  "forest-green": "text-forest-green",
};

export const ACCENT_BG: Record<AccentToken, string> = {
  "water-indigo": "bg-water-indigo",
  "sky-blue": "bg-sky-blue",
  "fire-ember": "bg-fire-ember",
  "earth-ochre": "bg-earth-ochre",
  "forest-green": "bg-forest-green",
};
