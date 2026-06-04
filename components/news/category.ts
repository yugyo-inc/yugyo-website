import type { NewsCategory } from "@/lib/types";
import type { AccentToken } from "@/content/cities";

export const CATEGORY_ACCENT: Record<NewsCategory, AccentToken> = {
  press: "water-indigo",
  event: "fire-ember",
  partnership: "forest-green",
  award: "earth-ochre",
  media: "sky-blue",
};

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  press: "Press",
  event: "Event",
  partnership: "Partnership",
  award: "Award",
  media: "Media",
};
