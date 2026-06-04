# CLAUDE.md — yugyo-website 開発制約

> Claude Code がこの repo で作業するときに必ず守るルール。
> ブランド本体の正典: `../yugyo's CEO Assistant/02_BRANDBOOK/yugyo_brandbook_v4.md`

## ブランド: Walking the Wild v4.0

- Vision（唯一の brand quote）: **"Be where you are meant to be."** ／ いちばん「自分らしく」いられる場所へ。
- Reference: Patagonia × The North Face × yugyo.work 原サイト。Aesop ではない。
- Core Tenets: ①Walks before it claims ②The figure is smaller than the place ③Color is elemental, not decorative ④Type is carved, not painted ⑤Silence is the calm after the climb ⑥Master craft hides itself.
- Personality 5 markers: 静 Composure / 知 Intellect / 歩 Walking / 余 Margin / 国 International

## 禁止事項 (Kill List) — CI で機械検出 (`scripts/brand-lint.sh`)

### コピー
- "Japan's first" / "Connecting X and Y" / "Your vision, realized." / "Let's get connected"
- "We Are / We Work / We Connect / We Shape" / "Why Us?" の 3-box 自己ピッチ
- "Create the scent of place."（永久禁止・Claude が以前 hallucinate した未承認 Concept）
- "Coming Soon!!" / "Human-Centered Communication" / "We're thrilled to announce"
- 感嘆符 `!` は brand 全体で使用 0 個を目標（Patagonia 流）

### フォント
- Cormorant Garamond / EB Garamond / italic emphasis（h1–h3 の font-italic）
- 数字は lining numerals（Inter デフォルト）。old-style numerals 禁止。

### UI
- pill button（rounded-full で長方形ボタン）。角丸は rounded-md まで。
- 円形矢印 CTA アイコン / 手描き ◯▷✦☆ 装飾 / gradient / neon / drop-shadow / 3D
- 大面積の飽和色塗り（bg-water-indigo などで full-screen section）。色は「点」として置く。

### 写真
- スタジオ照明ポートレート / 商談握手 / PR 集合写真の対外掲載
- 合成感・高彩度フィルター / screenshot crop + overlay text 焼き込み
- 採用するのは documentary な figure-in-landscape（人物は小さく引きの構図、低彩度、霧・水・雪）

## 必須事項

- Tailwind tokens のみ使用（hex 直書き禁止）。tokens は `tailwind.config.ts`。
- フォントは next/font 経由のみ（Inter 400/500/700/800 + Noto Serif JP 400/500/700 + Noto Sans JP）。
- 本文コントラスト 4.5:1 以上（WCAG AA）。検証済: Ink Navy on Paper Cream 13.09:1 / Mist White on Ink Navy 15.79:1。
- 全ページに meta title / description / OG を設定。
- CI の brand-lint と build workflow を pass すること。

## アーキテクチャ

- **静的（コード管理）**: Hero / Vision / Mission / About / Services / Ikigai / Colive Fukuoka / Contact
  → `lib/constants.ts`・`content/*.ts`。Walking the Wild brand を Tailwind tokens で強制適用。
- **動的（PocketBase）**: News (`/news`, `/news/[slug]`) / Members → `lib/pb.ts` 経由で fetch。
  PocketBase が未設定／到達不能でも全ページがビルド・表示できるよう graceful fallback 済み
  （`NEXT_PUBLIC_PB_URL` が未設定 or プレースホルダー host のとき空配列を返す）。
- **編集権限**:
  - 静的ページ修正 = git PR（Ryo / Cowork がレビューしながら）
  - news / members 投稿 = PocketBase admin UI（Sono / Haruka）。Cowork 依存なし。

## 環境変数

- `NEXT_PUBLIC_PB_URL` — PocketBase instance（PocketHost.io 等。例: `https://yugyo.pockethost.io`）。未設定なら news は空表示。
- `NEXT_PUBLIC_SITE_URL` — 本番 `https://yugyo.work`（DNS cutover 前は Vercel preview URL）。

## Open Questions / TODO

- [ ] `public/photos/` を Tier 1 撮影写真へ差し替え（Hero は現在 Unsplash プレースホルダー、2026 Q3 予定）
- [ ] EN 翻訳の完備（追加コピーは Ryo 承認必須）
- [ ] PocketBase instance を立てて `NEXT_PUBLIC_PB_URL` を設定 → news / members を有効化
- [ ] members collection に誰を公開するか（Ryo / Sono / Kohei / Haruka）を Ryo が決定
- [ ] news webhook → Vercel deploy hook（即時反映、Phase 2）
- [ ] NewsBody の dangerouslySetInnerHTML を sanitize（信頼 admin 前提で現状許容）
