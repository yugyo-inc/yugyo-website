// content/cities.ts — yugyo が歩く 3 つの場
export interface City {
  slug: string;
  name_jp: string;
  name_en: string;
  description_jp: string;
  accent: AccentToken;
}

export type AccentToken =
  | "water-indigo"
  | "sky-blue"
  | "fire-ember"
  | "earth-ochre"
  | "forest-green";

export const CITIES: City[] = [
  {
    slug: "fukuoka",
    name_jp: "福岡",
    name_en: "Fukuoka",
    description_jp:
      "yugyo の本拠地。日本最大級のデジタルノマド受け入れ拠点 Colive Fukuoka を主催。",
    accent: "fire-ember",
  },
  {
    slug: "nagasaki",
    name_jp: "長崎",
    name_en: "Nagasaki",
    description_jp: "Digital Nomad Nagasaki を継続展開。観光・地域共創。",
    accent: "water-indigo",
  },
  {
    slug: "kanazawa",
    name_jp: "金沢",
    name_en: "Kanazawa",
    description_jp: "金沢大学クロスアポイントメント協定。観光地域デザイン論。",
    accent: "sky-blue",
  },
];
