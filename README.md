# yugyo-website

yugyo inc. corporate website — Next.js 14 (App Router) + Tailwind CSS + PocketBase + Vercel
Brand: **Walking the Wild v4.0** (yugyo Brandbook v4)

> Vision: **Be where you are meant to be.** ／ いちばん「自分らしく」いられる場所へ。

## アーキテクチャ

| レイヤー | 内容 | 編集する人 / 方法 |
|---|---|---|
| **静的（コード）** | Hero / Vision / Mission / About / Services / Ikigai / Colive Fukuoka / Contact | Ryo / Cowork → git PR |
| **動的（PocketBase）** | News (`/news`) / Members (About のメンバー一覧) | Sono / Haruka → PocketBase admin UI |

恒久ページのコピーは `lib/constants.ts` と `content/*.ts` にハードコードされ、Tailwind tokens でブランドを強制適用しています。

## ローカル開発

```bash
pnpm install
cp .env.example .env.local   # 必要なら NEXT_PUBLIC_PB_URL を編集
pnpm dev                      # http://localhost:3000
pnpm build                    # 本番ビルド
pnpm brand-lint               # Walking the Wild Kill List チェック
```

PocketBase が未設定でも全ページがビルド・表示されます（News は空表示にフォールバック）。

## 環境変数

| 変数 | 用途 | 例 |
|---|---|---|
| `NEXT_PUBLIC_PB_URL` | PocketBase instance URL | `https://yugyo-pb.cr.frontwheel.co` |
| `NEXT_PUBLIC_SITE_URL` | 本番サイト URL（OG / sitemap 用） | `https://yugyo.work` |

Vercel では Settings → Environment Variables に上記を設定してください。

---

## 📝 News の投稿マニュアル（Sono / Haruka 向け）

News は **PocketBase の管理画面から直接投稿**します。コードや Cowork を触る必要はありません。

1. ブラウザで **`<NEXT_PUBLIC_PB_URL>/_/`**（admin UI）を開き、配布されたアカウントでログイン。
2. 左メニューの **`news`** コレクションを開き、右上 **「New record」**。
3. 入力する主な項目：
   - **title_jp**（必須）: 日本語タイトル
   - **slug**（必須）: URL に使う英数字とハイフン（例: `ramen-tech-2026`）。半角・小文字。
   - **category**（必須）: `press` / `event` / `partnership` / `award` / `media` から選択
   - **excerpt**（必須）: 一覧に出る 1〜2 文の要約（200 字以内）
   - **body_jp**（必須）: 本文。リッチテキストエディタで装飾可。
   - **hero_image**（任意）: サムネイル画像（5MB 以内）
   - **external_url**（任意）: PR Times 等の外部リンク。入れると本文の代わりに外部記事へ飛びます。
   - **published_at**（必須）: 公開日時。**未来の日時にすると、その時刻まで非公開**。
   - **status**（必須）: 公開するときは **`published`**。下書きは `draft`。
4. 保存すると、最大 60 秒で `https://yugyo.work/news` に反映されます（ISR）。

> ⚠️ ブランドルール（Kill List）: 「!!」の多用、絵文字過多、PR 集合写真の掲載は避けてください。詳細は `CLAUDE.md`。

### メンバー（About ページ）

`members` コレクションも同様に admin UI から編集します。`is_public` を `true` にしたメンバーだけが公開されます。`order` の昇順で並びます。

---

## デプロイ

`main` への push で Vercel が自動デプロイします。CI（`.github/workflows/`）で **build** と **brand-lint** が走ります。

## ドキュメント

- 開発制約 / Kill List: [`CLAUDE.md`](./CLAUDE.md)
- PocketBase スキーマ: [`pocketbase/SCHEMA.md`](./pocketbase/SCHEMA.md) / インポート用 JSON: [`pocketbase/pb_schema.json`](./pocketbase/pb_schema.json)
