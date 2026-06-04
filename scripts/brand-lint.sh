#!/usr/bin/env bash
# scripts/brand-lint.sh — Walking the Wild v4 Kill List linter
# CI (.github/workflows/brand-lint.yml) と `pnpm brand-lint` の両方から使う。
# 検出対象は実装ディレクトリのみ（CLAUDE.md / README はルール記述のため除外）。
set -euo pipefail

DIRS="app components content lib public"
FAIL=0

scan() {
  local label="$1"
  local pattern="$2"
  # 存在するディレクトリのみ対象
  local targets=""
  for d in $DIRS; do
    [ -e "$d" ] && targets="$targets $d"
  done
  [ -z "$targets" ] && return 0
  if grep -rEIn "$pattern" $targets >/dev/null 2>&1; then
    echo "❌ Kill List 違反: $label"
    grep -rEIn "$pattern" $targets || true
    FAIL=1
  fi
}

# 5.2 禁止コピー
scan "禁止コピー (Verbal Kill List)" \
  "Japan's first|Connecting talents|Connecting people and places|Your vision, realized|Let's get connected|Create the scent of place|Coming Soon!!|Human-Centered Communication|Why Us\?|We Are|We Work|We Connect|We Shape"

# 5.1 禁止フォント
scan "禁止フォント" "Cormorant|EB Garamond|font-italic"

# 5.3 禁止 UI: pill button（rounded-full + 長方形パディング）
scan "pill button らしき記述" "rounded-full[^\"']*(px-\[?[4-9]|py-\[?[3-9])"

# 5.3 禁止 UI: gradient / neon / drop-shadow / 3D
scan "gradient / drop-shadow など装飾効果" "bg-gradient-|drop-shadow|shadow-2xl|backdrop-brightness"

if [ "$FAIL" -eq 0 ]; then
  echo "✅ Kill List clean"
else
  echo ""
  echo "Walking the Wild v4 の Kill List に違反しています。CLAUDE.md を参照して修正してください。"
  exit 1
fi
