import { NextResponse } from "next/server"

/**
 * Receives client-side runtime error beacons and files them as GitHub
 * issues labelled `runtime-error`. The error-triage workflow then dedupes
 * and the fix loop turns each unique error into a PR — so an error one
 * user hits is fixed before the next user sees it.
 *
 * Required env (Vercel project settings):
 *   ERROR_REPORT_GITHUB_TOKEN  — fine-grained PAT with issues:write on this repo
 *   ERROR_REPORT_REPO          — e.g. hussamgalal999/qudsystem-website
 * Without them the endpoint logs and returns 202 (never breaks the site).
 */

interface Beacon {
  kind?: string
  message?: string
  stack?: string
  url?: string
  userAgent?: string
  language?: string
  timestamp?: string
}

// naive per-instance rate limit: max 5 reports per message per minute
const hits = new Map<string, { count: number; reset: number }>()

export async function POST(request: Request) {
  let body: Beacon
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  const message = (body.message ?? "").trim()
  if (!message) return NextResponse.json({ ok: false }, { status: 400 })

  const now = Date.now()
  const key = `${body.kind ?? "error"}:${message}`
  const entry = hits.get(key)
  if (entry && entry.reset > now) {
    if (entry.count >= 5) return NextResponse.json({ ok: true, throttled: true }, { status: 202 })
    entry.count++
  } else {
    hits.set(key, { count: 1, reset: now + 60_000 })
  }

  const token = process.env.ERROR_REPORT_GITHUB_TOKEN
  const repo = process.env.ERROR_REPORT_REPO ?? "hussamgalal999/qudsystem-website"
  if (!token) {
    console.error("[runtime-error beacon]", key, body.url)
    return NextResponse.json({ ok: true, stored: "log-only" }, { status: 202 })
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
    },
    body: JSON.stringify({ title, body: issueBody, labels: ["runtime-error"] }),
  })
  if (!res.ok) {
    console.error("[runtime-error beacon] github issue failed", res.status)
    return NextResponse.json({ ok: true, stored: "log-only" }, { status: 202 })
  }
  return NextResponse.json({ ok: true, stored: "github-issue" }, { status: 201 })
}
