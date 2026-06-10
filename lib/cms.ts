// lib/cms.ts — microCMS client（fetch ベース・SDK 不使用）
// News コンテンツを microCMS から取得する。サービス未設定でもサイトがビルド・表示
// できるよう、取得ヘルパーは全て例外を握りつぶして空配列にフォールバックする
// （graceful degradation）。エクスポートする関数シグネチャは旧 lib/pb.ts と互換。
import type { News, NewsCategory, Member } from "./types";

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

// 両方の環境変数が揃っているときのみ接続を試みる。
function isConfigured(): boolean {
  return Boolean(SERVICE_DOMAIN && API_KEY);
}

function baseUrl(): string {
  return `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;
}

// ---- microCMS の生レスポンス型（news エンドポイント）----
interface MicroCmsImage {
  url: string;
  height?: number;
  width?: number;
}
interface MicroCmsNews {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
  title?: string;
  content?: string;
  // セレクトフィールドは単一選択でも配列で返る
  category?: string[];
  excerpt?: string;
  thumbnail?: MicroCmsImage;
  externalUrl?: string;
  // 英語版フィールド（任意）。未入力なら日本語へフォールバックする。
  title_en?: string;
  content_en?: string;
  excerpt_en?: string;
}
interface MicroCmsListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

const VALID_CATEGORIES: NewsCategory[] = [
  "press",
  "event",
  "partnership",
  "award",
  "media",
];

// microCMS レコード → アプリ内 News 型へ正規化。
function toNews(c: MicroCmsNews): News {
  const rawCategory = Array.isArray(c.category) ? c.category[0] : c.category;
  const category: NewsCategory = VALID_CATEGORIES.includes(
    rawCategory as NewsCategory
  )
    ? (rawCategory as NewsCategory)
    : "press";
  return {
    id: c.id,
    slug: c.id, // microCMS の content id を slug として使う
    title_jp: c.title ?? "",
    title_en: c.title_en || undefined,
    category,
    excerpt: c.excerpt ?? "",
    excerpt_en: c.excerpt_en || undefined,
    body_jp: c.content ?? "",
    body_en: c.content_en || undefined,
    hero_image: c.thumbnail?.url,
    external_url: c.externalUrl || undefined,
    published_at: c.publishedAt ?? c.createdAt,
    status: "published", // 通常 API は公開済みのみ返す
    created: c.createdAt,
    updated: c.updatedAt,
  };
}

async function cmsFetch<T>(path: string): Promise<T | null> {
  if (!isConfigured()) return null;
  try {
    const res = await fetch(`${baseUrl()}${path}`, {
      headers: { "X-MICROCMS-API-KEY": API_KEY as string },
      // ISR: 60 秒ごとに再検証
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export interface NewsListResult {
  items: News[];
  totalItems: number;
  page: number;
  configured: boolean;
}

// 一覧取得。公開日時の降順。category 指定で絞り込み可能。
export async function getNews(opts?: {
  limit?: number;
  category?: string;
}): Promise<NewsListResult> {
  const empty: NewsListResult = {
    items: [],
    totalItems: 0,
    page: 1,
    configured: isConfigured(),
  };
  if (!isConfigured()) return empty;

  const params = new URLSearchParams();
  params.set("limit", String(opts?.limit ?? 20));
  params.set("orders", "-publishedAt");
  if (opts?.category) {
    // セレクト（配列）フィールドの絞り込みは contains を使う
    params.set("filters", `category[contains]${opts.category}`);
  }

  const data = await cmsFetch<MicroCmsListResponse<MicroCmsNews>>(
    `/news?${params.toString()}`
  );
  if (!data || !Array.isArray(data.contents)) return empty;
  return {
    items: data.contents.map(toNews),
    totalItems: data.totalCount,
    page: 1,
    configured: true,
  };
}

// 詳細取得。slug = microCMS の content id。
export async function getNewsBySlug(slug: string): Promise<News | null> {
  if (!isConfigured()) return null;
  const data = await cmsFetch<MicroCmsNews>(
    `/news/${encodeURIComponent(slug)}`
  );
  if (!data || !data.id) return null;
  return toNews(data);
}

// Members は microCMS 未設定（About ページは静的 FOUNDER を使用）。
// 互換のため空配列を返す。将来 members API を作る際にここを実装する。
export async function getMembers(): Promise<Member[]> {
  return [];
}
