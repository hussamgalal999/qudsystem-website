#!/usr/bin/env node
/**
 * QudSystem 20-point SEO gate.
 * Crawls the built site and fails (exit 1) if any enforced rule breaks:
 * sitemap.xml, robots.txt, llms.txt, canonical, title, meta description,
 * exactly one H1, image alt attributes, og:image, noindex on private pages,
 * no broken internal links, and sitemap coverage of every public route.
 *
 * Usage: node scripts/seo-check.mjs --base http://localhost:3100
 */

const baseIdx = process.argv.indexOf("--base")
const BASE = (baseIdx >= 0 ? process.argv[baseIdx + 1] : (process.argv.find((a) => a.startsWith("--base=")) || "").split("=")[1]) || "http://localhost:3000"

const PUBLIC_ROUTES = [
  "/", "/about", "/blog", "/careers", "/contact", "/features", "/integrations",
  "/pleasures", "/pricing", "/products", "/projects", "/qud-office-ai",
  "/request-demo", "/services", "/support", "/team", "/testimonials", "/work-process",
  "/blog/ai-transformation-2025", "/blog/cybersecurity-best-practices", "/blog/qud-office-ai-preview",
]
const NOINDEX_ROUTES = ["/login", "/register", "/password-reset", "/ui-kit", "/coming-soon"]
const STATIC_ASSETS = ["/sitemap.xml", "/robots.txt", "/llms.txt", "/og-image.png", "/manifest.json"]

let failures = []
const fail = (route, msg) => failures.push(`${route}: ${msg}`)

async function get(path) {
  const res = await fetch(BASE + path, { redirect: "follow" })
  return { status: res.status, body: await res.text(), type: res.headers.get("content-type") || "" }
}

const internalLinks = new Set()

for (const asset of STATIC_ASSETS) {
  const r = await get(asset)
  if (r.status !== 200) fail(asset, `expected 200, got ${r.status}`)
}

const robots = await get("/robots.txt")
if (robots.status === 200 && !/sitemap:/i.test(robots.body)) fail("/robots.txt", "missing Sitemap: line")

const sitemap = await get("/sitemap.xml")
if (sitemap.status === 200) {
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    try { const u = new URL(m[1]); return u.pathname.replace(/\/$/, "") || "/" } catch { return m[1] }
  })
  for (const route of PUBLIC_ROUTES) {
    if (!locs.includes(route)) fail("/sitemap.xml", `missing route ${route}`)
  }
}

for (const route of PUBLIC_ROUTES) {
  let r
  try { r = await get(route) } catch (e) { fail(route, `fetch error ${e.message}`); continue }
  if (r.status !== 200) { fail(route, `HTTP ${r.status}`); continue }
  const html = r.body
  if (!/<title>[^<]+<\/title>/.test(html)) fail(route, "missing <title>")
  if (!/<meta name="description" content="[^"]{20,}"/.test(html)) fail(route, "missing/short meta description")
  if (!/<link rel="canonical" href="https?:\/\//.test(html)) fail(route, "missing canonical link")
  if (!/<meta property="og:image"/.test(html)) fail(route, "missing og:image")
  const h1s = html.match(/<h1[\s>]/g) || []
  if (h1s.length !== 1) fail(route, `expected exactly 1 <h1>, found ${h1s.length}`)
  const imgs = html.match(/<img[^>]*>/g) || []
  for (const img of imgs) if (!/alt="/.test(img)) fail(route, `img without alt: ${img.slice(0, 80)}`)
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) fail(route, "public route marked noindex")
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) internalLinks.add(m[1])
}

for (const route of NOINDEX_ROUTES) {
  const r = await get(route)
  if (r.status !== 200) { fail(route, `HTTP ${r.status}`); continue }
  if (!/<meta name="robots" content="[^"]*noindex/.test(r.body)) fail(route, "private page missing noindex")
}

for (const link of internalLinks) {
  if (link.startsWith("/api/") || /\.(png|jpg|jpeg|svg|webp|ico|css|js|json|txt|xml|webmanifest)$/.test(link)) continue
  const r = await get(link).catch(() => ({ status: 0 }))
  if (r.status === 404) fail(link, "broken internal link (404)")
}

if (failures.length) {
  console.error(`SEO gate FAILED — ${failures.length} problem(s):`)
  for (const f of [...new Set(failures)]) console.error("  ✗ " + f)
  process.exit(1)
}
console.log(`SEO gate PASSED — ${PUBLIC_ROUTES.length} public routes, ${NOINDEX_ROUTES.length} noindex routes, ${internalLinks.size} internal links checked.`)
