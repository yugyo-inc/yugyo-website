// lib/pb.ts — PocketBase client (§7.3)
// 重要: PocketBase instance がまだ無い / 到達不能でもサイトがビルド・表示できるよう、
// 取得ヘルパーは全て例外を握りつぶして空配列にフォールバックする（graceful degradation）。
import PocketBase from "pocketbase";
import type { News, Member } from "./types";

const PB_URL =
  process.env.NEXT_PUBLIC_PB_URL || "http://localhost:8090";

// プレースホルダー URL のままなら接続を試みない（無駄な待ちとログを避ける）
const PLACEHOLDER_HOSTS = ["yugyo-pb.cr.frontwheel.co", "localhost"];
function isConfigured(): boolean {
  if (!process.env.NEXT_PUBLIC_PB_URL) return false;
  try {
    const host = new URL(PB_URL).hostname;
    return !PLACEHOLDER_HOSTS.includes(host);
  } catch {
    return false;
  }
}

export const pb = new PocketBase(PB_URL);

export interface NewsListResult {
  items: News[];
  totalItems: number;
  page: number;
  configured: boolean;
}

// ISR friendly server-side helper
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

  const filter = [
    'status = "published"',
    `published_at <= "${new Date().toISOString()}"`,
    opts?.category ? `category = "${opts.category}"` : "",
  ]
    .filter(Boolean)
    .join(" && ");

  try {
    const res = await pb.collection("news").getList<News>(1, opts?.limit ?? 20, {
      filter,
      sort: "-published_at",
    });
    return {
      items: res.items,
      totalItems: res.totalItems,
      page: res.page,
      configured: true,
    };
  } catch {
    return empty;
  }
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  if (!isConfigured()) return null;
  try {
    return await pb
      .collection("news")
      .getFirstListItem<News>(`slug = "${slug}"`, {});
  } catch {
    return null;
  }
}

export async function getMembers(): Promise<Member[]> {
  if (!isConfigured()) return [];
  try {
    return await pb.collection("members").getFullList<Member>({
      filter: "is_public = true",
      sort: "order",
    });
  } catch {
    return [];
  }
}
