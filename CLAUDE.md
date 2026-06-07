# CLAUDE.md — yugyo-website 開発制約

> Claude Code がこの repo で作業するときに必ず守るルール。
> ブランド本体の正典: `../yugyo's CEO Assistant/02_BRANDBOOK/yugyo_brandbook_v4.md`

## ブランド: Walking the Wild v4.2（序破急エディトリアル / 2026-06-05 正典化）

- Vision（唯一の brand quote）: **"Be where you are meant to be."** ／ いちばん「自分らしく」いられる場所へ。
- Reference: Patagonia × The North Face × yugyo.work 原サイト。Aesop ではない。
- **タイポ（v4.2）**: 欧文 **Helvetica 主役**（Inter フォールバック）/ 和文 **UD ゴシック主役**（`'Helvetica Neue',Helvetica,Arial` + システム gothic stack。`app/globals.css` の `--sans`）。**明朝（Noto Serif JP）は廃止**。セザンヌは見出しアクセント限定。
- **背景**: 既定 **Gallery White `#F4F3EF`**（ベージュ排除）＋ Ink Navy `#0E1B2C`。セクションアクセント 空`#5B7A8C`/火`#B06A3F`/土墨`#5C5043` は「点」として。
- **構成**: 序(Hero)→News(Mission)→破(What we do・書背景)→急(Projects)→About&CTA。控えめパララックス＋reveal（`components/effects/Motion.tsx`, reduced-motion 対応）、Cookie オプトイン（`components/cookie/CookieConsent.tsx`, GA は `NEXT_PUBLIC_GA_ID` 設定時のみ・同意後ロード）。
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

- 配色は `app/globals.css` の CSS 変数（`--ink`,`--paper`=Gallery White, `--c-hero`/`--ember`/`--sumi` 等）のみ。hex 直書きはセクション固有の微調整に留める。
- フォントは `--sans`（Helvetica 主役のシステム stack）。**明朝禁止**。和文は UD ゴシック系へフォールバック。next/font は使っていない（システムフォント）。
- 本文コントラスト 4.5:1 以上（WCAG AA）。検証済: Ink Navy on Gallery White ≈14.6:1 / Mist White on Ink Navy 15.79:1。
- 全ページに meta title / description / OG を設定。
- CI の brand-lint と build workflow を pass すること。

## アーキテクチャ

- **静的（コード管理）**: Hero / Vision / Mission / About / Services / Ikigai / Colive Fukuoka / Contact
  → `lib/constants.ts`・`content/*.ts`。Walking the Wild brand を Tailwind tokens で強制適用。
- **動的（microCMS）**: News (`/news`, `/news/[slug]`, ホームの `HomeNews`) → `lib/cms.ts`（fetch ベース・SDK 不使用）経由。
  サービス "yugyo"（yugyo.microcms.io）。`MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` 未設定でも全ページがビルド・表示できるよう graceful fallback（空配列＝空状態表示）。
  News スキーマ: title / content(リッチエディタ) / category(select: press/event/partnership/award/media) / excerpt / thumbnail(画像) / externalUrl。content id を slug に使用。
- **編集権限**:
  - 静的ページ修正 = git PR（Ryo / Cowork がレビューしながら）
  - news 投稿 = **microCMS 管理画面**（Sono / Haruka）。Cowork 依存なし。Members は未設定（About は静的 FOUNDER）。

## 環境変数

- `MICROCMS_SERVICE_DOMAIN` = `yugyo` / `MICROCMS_API_KEY`（暗号化、Vercel env: production/preview/development 全てに設定済）。未設定なら news は空表示。
- `NEXT_PUBLIC_SITE_URL` — DNS cutover 前は Vercel URL（OG/canonical 用）。**yugyo.work が Vercel を指したら `https://yugyo.work` に戻す**。
- `NEXT_PUBLIC_GA_ID` — 未設定（GA を入れるとき GA4 測定ID を設定→Cookie 同意後のみロード）。
- 旧 `NEXT_PUBLIC_PB_URL`（PocketBase）は廃止。`lib/pb.ts` は削除済（microCMS へ移行）。

## Open Questions / TODO

- [ ] **DNS cutover**: お名前.com で yugyo.work を Vercel へ向ける（現状は旧 Canva）。完了後 `NEXT_PUBLIC_SITE_URL` を `https://yugyo.work` に戻す（Ryo タスク）
- [ ] Projects & Clients セクションのロゴ実素材差し替え（現状テキスト枠）
- [ ] EN 翻訳の完備（追加コピーは Ryo 承認必須）
- [ ] microCMS Members API（必要なら）→ About を動的化。現状は静的 FOUNDER
- [ ] news webhook → Vercel deploy hook（即時反映、現状は ISR 60s）
- [ ] NewsBody の dangerouslySetInnerHTML を sanitize（信頼 admin 前提で現状許容）
- [ ] GA を入れる場合は `NEXT_PUBLIC_GA_ID` を設定（Cookie バナーが同意後にロード）
