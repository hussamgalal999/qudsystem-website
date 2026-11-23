# Deploying qudsystem-website to Cloudflare Pages

Evaluation and wiring plan (Nov 2026). Nothing is deployed from this document;
it is the reviewed path once the domain purchase lands.

## Why not Vercel Hobby

Vercel's free Hobby plan is licensed for personal, non-commercial use only.
QUD System is a company, so the company site cannot live there for free.
Cloudflare Pages' free tier explicitly allows commercial use.

## The Next.js 14 constraint

The repo runs Next.js 14.2.16. That decides the deploy shape:

| Path | Works with Next 14? | Verdict |
|---|---|---|
| Cloudflare Pages static export + Pages Functions | Yes | **Chosen** |
| `@opennextjs/cloudflare` (SSR on Workers) | No — adapter supports Next 15/16 only; Next 14 is EOL | After a Next upgrade |
| `@cloudflare/next-on-pages` | Technically, but deprecated by Cloudflare | No |

Static export fits this site: all 22 public routes are prerendered
(`generateStaticParams` on dynamic pages, `generateMetadata` everywhere, no
`cookies()`/`headers()` use). The only server pieces are two POST endpoints,
which become Pages Functions at identical paths.

## How it is wired (already in this repo)

- `next.config.mjs` — when `CF_PAGES=1` (set automatically by Pages builds),
  builds `output: "export"` with unoptimized images into `out/`. Vercel/local
  builds are untouched.
- `scripts/cf-build.sh` — Pages build command. Moves `app/api` aside during
  the build (static export cannot emit route handlers), builds, restores.
- `functions/api/report-error.ts` — Pages Function serving `POST
  /api/report-error`, same contract and env vars as the Next route
  (`ERROR_REPORT_GITHUB_TOKEN`, `ERROR_REPORT_REPO`). The self-healing loop
  works unchanged.
- `functions/api/contact.ts` — Pages Function serving `POST /api/contact`
  (logging stub, same as the current Next route).

Client code calls `/api/report-error` and `/api/contact` by relative path, so
it needs no changes: on Vercel the Next routes answer, on Pages the Functions
do.

## Pages project settings (when creating it)

- Build command: `bash scripts/cf-build.sh`
- Build output directory: `out`
- Root directory: repo root
- Environment variables (Production):
  - `NEXT_PUBLIC_SITE_URL` = `https://<the-purchased-domain>`
  - `ERROR_REPORT_GITHUB_TOKEN` (secret), `ERROR_REPORT_REPO` — for the error beacon
- Node version: set `NODE_VERSION=20` if the default is older.

Free-tier headroom: 500 builds/month, 1 concurrent build, 20-minute build
timeout (this build takes ~2–3 minutes), unlimited static bandwidth,
100,000 Function requests/day. Commercial use allowed.

## Custom domain + cutover (after the domain purchase)

1. Pages project → Custom domains → add the purchased domain. If DNS is on
   Cloudflare (recommended: change registrar nameservers to Cloudflare, free),
   the CNAME and SSL are automatic.
2. Set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy so canonicals,
   sitemap, robots and JSON-LD point at it.
3. Add `public/_redirects` rules 301ing old hostnames
   (qud-system.vercel.app, qud.vercel.app, qud-systm.netlify.app, and the
   dead v09 URL) to the new domain, per the map in `docs/MERGE.md`. Hosts we
   do not control keep their own redirects.
4. Keep the `seo-gate` workflow as-is; its post-deploy checks can target the
   Pages URL once live.

## Later, if we outgrow static

Upgrade Next 14 → 16, switch to `@opennextjs/cloudflare` (Workers with static
assets), and delete `functions/` and the `CF_PAGES` conditional. SSR/ISR,
next/image optimization and route handlers all come back. The content and SEO
work in this repo carries over unchanged.
