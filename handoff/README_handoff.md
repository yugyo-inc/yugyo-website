# yugyo.work — トップページ納品物（側のデザイン + コード）

過去にサイト制作を担当いただいたチーム様への handoff 資料です。
本リポジトリは Walking the Wild v4.0 ブランドに沿って構築した yugyo.work の再構築コードです。

## 1. 納品物

| 納品物 | 場所 | 用途 |
|---|---|---|
| **トップページ単体HTML** | `handoff/yugyo_top.html` | 依存なしでブラウザで開ける「側（トップ）」デザインの確認用。ブランド色・タイポ・レイアウトの正解。 |
| **コード一式（Next.js）** | リポジトリ全体（`app/` `components/` `lib/` `content/` 他） | 本番実装。Vercel にデプロイ済み。 |

- `handoff/yugyo_top.html` は **Next.js 実装版トップ (`app/page.tsx`) と同一デザイン** を 1 ファイルに固めたものです。ブランド CSS 変数を inline 済みなので、そのまま開けばデザインを確認できます。
- 実際の本番は Next.js 14 (App Router) + Tailwind。トークンは `tailwind.config.ts`、ブランド制約は `CLAUDE.md` を参照。

## 2. アーキテクチャ（側 と 中身 の分離）

- **側（静的・コード管理）**: Home / About / Services / Ikigai / Colive Fukuoka / Contact。
  コピーは `lib/constants.ts`・`content/*.ts` にハードコード。**ここは実装済み・公開済み**。
- **中身（動的）**: News (`/news`) と Members（About のメンバー）。
  当初 PocketBase を想定し `lib/pb.ts` 経由で fetch する作りになっていますが、
  **PocketBase 部分はこれから貴チームにご相談して構築予定**です。
  現状は PocketBase 未接続でも全ページがビルド・表示できる graceful fallback 済み
  （News は「準備中」の空表示）。

## 3. News/Members バックエンドのご相談ポイント

> 🟢 **CMS 第一候補は microCMS に決定（2026-06-05, Ryo 判断）**。
> 理由: サーバー運用不要（SaaS）／日本語管理画面で非技術メンバー（Sono・Haruka）が自走／無料枠あり／Next.js 相性◎。
> 次点は Notion-as-CMS。PocketBase は自前ホスティングが必要なため優先度を下げています。
> どの CMS でも、下記の関数の戻り値型に合わせれば**フロントは無改修**です。

`lib/pb.ts` / `lib/types.ts` / `pocketbase/SCHEMA.md` に、想定していたデータ構造があります。
microCMS / Notion / 自前 API いずれで実装される場合も、
`getNews()` / `getNewsBySlug()` / `getMembers()` の戻り値の型（`lib/types.ts` の `News` / `Member`）に
合わせていただければ、フロント側（`components/news/*`・`components/about/MemberCard.tsx`）は無改修で動きます。
（microCMS の場合は `lib/pb.ts` を `lib/cms.ts` 等に置き換え、microCMS SDK で同じ3関数を実装する形を想定。）

- News フィールド: `title_jp` / `slug` / `category` / `excerpt` / `body_jp`(HTML) / `external_url` / `published_at` / `status` …
- Members フィールド: `name_jp` / `role_jp` / `bio_jp` / `photo` / `order` / `is_public` …
- 公開ルール: news = `status="published" && published_at<=now` / members = `is_public=true`

## 4. 動作確認

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 本番ビルド（PocketBase 未設定でも通る）
```

## 5. ブランド厳守事項

`CLAUDE.md` の Kill List（禁止コピー / 禁止フォント / 禁止UI / 禁止写真）を必ず守ってください。
CI（`.github/workflows/brand-lint.yml`）でも機械検出しています。Cormorant Garamond / pill button /
gradient / "Connecting X and Y" 等は不可。色は CSS 変数（Tailwind tokens）のみ、HEX 直書き禁止。
