# PocketBase Schema — yugyo-website

PocketBase 0.22+ を前提とした collections 定義です。admin UI で手動作成するか、
`pb_schema.json` を **Settings → Import collections** から取り込んでください。

## セットアップ手順（Ryo）

1. Frontwheel.co（または任意のホスティング）に PocketBase instance を立てる。
2. 初回アクセスで admin アカウントを作成。
3. **Settings → Import collections** で `pb_schema.json` を貼り付け or アップロードして適用。
   - うまく取り込めない PB バージョンの場合は、下記の表を見て admin UI から手動で 2 コレクションを作成。
4. Sono / Haruka 用に **追加の admin アカウント**（または manager 権限）を発行。
5. Vercel の `NEXT_PUBLIC_PB_URL` に instance URL を設定し、再デプロイ。

---

## Collection: `news` (type: base)

| Field | Type | Required | Options / 備考 |
|---|---|---|---|
| title_jp | text | yes | min 1, max 120 — 日本語タイトル |
| title_en | text | no | max 120 |
| slug | text | yes | min 3, max 80, pattern `^[a-z0-9-]+$` |
| category | select(single) | yes | press, event, partnership, award, media |
| excerpt | text | yes | max 200 — 一覧用要約 |
| body_jp | editor | yes | 日本語本文（HTML stored） |
| body_en | editor | no | 英語本文 |
| hero_image | file(1) | no | image only, max 5MB |
| external_url | url | no | PR Times 等。あれば本文より優先 |
| published_at | date | yes | 公開日時 |
| status | select(single) | yes | draft, published, archived（default draft） |
| tags | json | no | string[] |

- **List / View rule (public read)**: `status = "published" && published_at <= @now`
- **Create / Update / Delete rule**: admin only（空欄）

## Collection: `members` (type: base)

| Field | Type | Required | Options |
|---|---|---|---|
| name_jp | text | yes | max 80 |
| name_en | text | no | max 80 |
| role_jp | text | yes | max 80 |
| role_en | text | no | max 80 |
| bio_jp | text | no | max 400 |
| bio_en | text | no | max 400 |
| photo | file(1) | no | image only, max 3MB |
| email | email | no | — |
| twitter_handle | text | no | max 30 |
| linkedin_url | url | no | — |
| order | number | yes | min 0 |
| is_public | bool | yes | default true |

- **List / View rule**: `is_public = true`
- **Create / Update / Delete rule**: admin only（空欄）
