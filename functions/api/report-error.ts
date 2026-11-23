/**
 * Cloudflare Pages Function: POST /api/report-error
 *
 * Same contract as the Next.js route (app/api/report-error/route.ts), which
 * serves this endpoint on Vercel/local. Receives client-side runtime error
 * beacons and files them as GitHub issues labelled `runtime-error`. The
 * error-triage workflow dedupes and the fix loop turns each unique error
 * into a PR — an error one user hits is fixed before the next user sees it.
 *
 * Required Pages secrets/vars (Pages project settings):
 *   ERROR_REPORT_GITHUB_TOKEN — fine-grained PAT with issues:write on the repo
 *   ERROR_REPORT_REPO         — e.g. hussamgalal999/qudsystem-website
 * Without them the endpoint logs and returns 202 (never breaks the site).
 */

interface Env {
  ERROR_REPORT_GITHUB_TOKEN?: string
  ERROR_REPORT_REPO?: string
}

interface Beacon {
  kind?: string
  message?: string
  stack?: string
  url?: string
  userAgent?: string
  language?: string
  timestamp?: string
}

// Naive per-isolate rate limit: max 5 reports per message per minute.
// Best-effort only; Workers isolates do not share memory.
const hits = new Map<string, { count: number; reset: number }>()

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Beacon
  try {
    body = await request.json()
  } catch {
    return json({ ok: false }, 400)
  }
  const message = (body.message ?? "").trim()
  if (!message) return json({ ok: false }, 400)

  const now = Date.now()
  const key = `${body.kind ?? "error"}:${message}`
  const entry = hits.get(key)
  if (entry && entry.reset > now) {
    if (entry.count >= 5) return json({ ok: true, throttled: true }, 202)
    entry.count++
  } else {
    hits.set(key, { count: 1, reset: now + 60_000 })
  }

  const token = env.ERROR_REPORT_GITHUB_TOKEN
  const repo = env.ERROR_REPORT_REPO ?? "hussamgalal999/qudsystem-website"
  if (!token) {
    console.error("[runtime-error beacon]", key, body.url)
    return json({ ok: true, stored: "log-only" }, 202)
  }

  const title = `[runtime-error] ${message.slice(0, 120)}`
  const issueBody = [
    `**Kind:** ${body.kind ?? "error"}`,
    `**Page:** ${body.url ?? "unknown"}`,
    `**Language:** ${body.language ?? "unknown"}`,
    `**User-Agent:** ${body.userAgent ?? "unknown"}`,
    `**First seen:** ${body.timestamp ?? new Date().toISOString()}`,
    "",
    "```",
    (body.stack ?? message).slice(0, 6000),
    "```",
    "",
    "_Filed automatically by the on-site error beacon. The triage workflow dedupes repeats of this same error._",
  ].join("\n")

  const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "qudsystem-pages-function",
    },
    body: JSON.stringify({ title, body: issueBody, labels: ["runtime-error"] }),
  })
  if (!res.ok) {
    console.error("[runtime-error beacon] github issue failed", res.status)
    return json({ ok: true, stored: "log-only" }, 202)
  }
  return json({ ok: true, stored: "github-issue" }, 201)
}

// Reject anything that is not POST.
export const onRequest: PagesFunction<Env> = async ({ request }) => {
  if (request.method !== "POST") return json({ ok: false }, 405)
  return json({ ok: false }, 400)
}
