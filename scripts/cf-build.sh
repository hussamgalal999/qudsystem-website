#!/usr/bin/env bash
# Cloudflare Pages build entrypoint.
# Moves the Next.js API routes aside (static export cannot emit them), builds
# the static site into out/, then restores the routes. On Pages the same
# endpoints are served by functions/api/*.
set -euo pipefail

if [ -d app/api ]; then
  mv app/api /tmp/qud_api_bak
  restore() { mv /tmp/qud_api_bak app/api 2>/dev/null || true; }
  trap restore EXIT
fi

npx next build
echo "Static export written to out/"
