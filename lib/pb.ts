// lib/pb.ts — PocketBase client (§7.3)
// 重要: PocketBase instance がまだ無い / 到達不能でもサイトがビルド・表示できるよう、
// 取得ヘルパーは全て例外を握りつぶして空配列にフォールバックする（graceful degradation）。
import PocketBase from "pocketbase";
import type { News, Member } from "./types";

const PB_URL =
  process.env.NEXT_PUBLIC_PB_URL || "http://localhost:8090";

// 未設定 / localhost / 明らかなプレースホルダーのときは接続を試みない
// （無駄な待ちとログを避ける。実インスタンス名は何でも許可する）。
function isConfigured(): boolean {
  const raw = process.env.NEXT_PUBLIC_PB_URL;
  if (!raw) return false;
  try {
    const host = new URL(PB_URL).hostname;
    if (host === "localhost" || host === "127.0.0.1") return false;
    // .env.example のプレースホルダー（YOUR-INSTANCE...）はまだ未設定とみなす
    if (/your-instance/i.test(host)) return false;
    return true;
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

  // パラメータ化して filter インジェクションを防ぐ（pb.filter がエスケープする）
  const now = new Date().toISOString();
  let filter = pb.filter('status = "published" && published_at <= {:now}', {
    now,
  });
  if (opts?.category) {
    filter += " && " + pb.filter("category = {:category}", {
      category: opts.category,
    });
  }

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
    // slug は URL 由来のユーザー入力。pb.filter でパラメータ化してインジェクションを防ぐ。
    return await pb
      .collection("news")
      .getFirstListItem<News>(pb.filter("slug = {:slug}", { slug }), {});
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
