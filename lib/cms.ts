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

// microCMS(imgix) が返す HEIC/HEIF は必ず JPEG に変換して配信する。
// iPhone の標準保存形式である HEIC をそのまま入稿されると、microCMS は
// Content-Type: image/heic で返し、Chrome / Firefox はこれを描画できない。
// カード画像は background-image で表示するため、読み込み失敗が壊れた画像
// アイコンにもならず「ただの空白」になり、事故に気づけない（2026-08-22 発生）。
// 変換対象を HEIC/HEIF に限定しているのは、透過 PNG まで JPEG 化すると
// アルファが黒/白に潰れて別の事故になるため。
// webp ではなく jpg を選ぶ理由：この URL は OG 画像にも使われ、SNS の
// クローラは webp 対応が不揃いなため、互換性の高い jpg に倒す。
function normalizeCmsImage(url?: string): string | undefined {
  if (!url) return undefined;
  if (!url.includes("images.microcms-assets.io")) return url;
  try {
    const u = new URL(url);
    if (!/\.hei[cf]$/i.test(u.pathname)) return url;
    if (!u.searchParams.has("fm")) u.searchParams.set("fm", "jpg");
    if (!u.searchParams.has("q")) u.searchParams.set("q", "82");
    return u.toString();
  } catch {
    return url;
  }
}

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
    hero_image: normalizeCmsImage(c.thumbnail?.url),
    hero_image_width: c.thumbnail?.width,
    hero_image_height: c.thumbnail?.height,
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

// ---- Site Copy（サイト固定コピーの CMS 化）----
// よく変わる低リスクのコピーだけを microCMS の「オブジェクト形式」API `site-copy`
// で管理し、非エンジニアが管理画面から編集 → デプロイ不要で反映できるようにする。
// 各フィールドは任意。未設定 / CMS 不達のときは content/copy.ts の既定値へフォールバック。
// ブランド核（Vision / Hero など）はコード側（Kill List CI 配下）に残す方針。
export interface SiteCopy {
  // ホーム「最新情報」セクションのリード文（日本語 / 英語）
  news_lead?: string;
  news_lead_en?: string;
}

export async function getSiteCopy(): Promise<SiteCopy> {
  // オブジェクト形式 API はコンテンツを直接返す（list ではない）。
  const data = await cmsFetch<SiteCopy>("/site-copy");
  // 未設定 / エラー時は空オブジェクト → 呼び出し側が copy.ts の既定値を使う。
  return data ?? {};
}
