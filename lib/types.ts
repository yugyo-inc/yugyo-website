// lib/types.ts — PocketBase レコード型（§7.4）
export type NewsCategory =
  | "press"
  | "event"
  | "partnership"
  | "award"
  | "media";
export type NewsStatus = "draft" | "published" | "archived";

export interface News {
  id: string;
  collectionId?: string;
  title_jp: string;
  title_en?: string;
  slug: string;
  category: NewsCategory;
  excerpt: string;
  excerpt_en?: string;
  body_jp: string;
  body_en?: string;
  hero_image?: string;
  external_url?: string;
  published_at: string;
  status: NewsStatus;
  tags?: string[];
  created: string;
  updated: string;
}

export interface Member {
  id: string;
  collectionId?: string;
  name_jp: string;
  name_en?: string;
  role_jp: string;
  role_en?: string;
  bio_jp?: string;
  bio_en?: string;
  photo?: string;
  email?: string;
  twitter_handle?: string;
  linkedin_url?: string;
  order: number;
  is_public: boolean;
  created: string;
  updated: string;
}

// Helper for PB file URL
export function pbFileUrl(
  record: { id: string; collectionId: string },
  filename: string
) {
  const PB_URL =
    process.env.NEXT_PUBLIC_PB_URL || "http://localhost:8090";
  return `${PB_URL}/api/files/${record.collectionId}/${record.id}/${filename}`;
}
