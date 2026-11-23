# Self-Healing Loop

How a user-visible error becomes a permanent fix, automatically.

```
user hits error in browser
  → components/error-reporter.tsx beacon (deduped per session, never blocks UI)
  → POST /api/report-error
  → GitHub issue labelled `runtime-error` (rate-limited, stack + page + UA attached)
  → error-triage workflow closes duplicates against the one canonical issue
  → fix loop picks the issue → PR → SEO gate + build + Lighthouse must pass
  → deploy: the next user never sees that error
```

## One-time setup (per hosting project)

Set these in the Vercel project environment (Production + Preview):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical site URL (e.g. `https://qudsystem.com`) |
| `ERROR_REPORT_GITHUB_TOKEN` | fine-grained PAT, `issues: write` on this repo |
| `ERROR_REPORT_REPO` | `hussamgalal999/qudsystem-website` |

Without the token the beacon degrades to server logs only; the site is never affected.

## Adjacent loops

- `uptime.yml` — every 15 min probes all live QudSystem URLs; opens/bumps an `uptime` issue on failure.
- `seo-weekly.yml` — Mondays: full 20-point SEO gate + external link check against production.
- `seo-gate.yml` — every PR: 20-point gate + Lighthouse budget + link check. A regression cannot merge.
