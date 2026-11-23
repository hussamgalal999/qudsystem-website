/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Same contract as the Next.js route (app/api/contact/route.ts). Currently a
 * logging stub like the original; wire a real mail/Chat API provider here
 * (or keep parity with whatever the Next route grows into).
 */

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })

export const onRequestPost: PagesFunction = async ({ request }) => {
  try {
    const data = (await request.json()) as Record<string, unknown>
    console.log("[contact] submission", JSON.stringify(data).slice(0, 1000))
    return json({ success: true }, 200)
  } catch (error) {
    console.error("[contact] bad request", error)
    return json({ success: false }, 400)
  }
}

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method !== "POST") return json({ ok: false }, 405)
  return json({ ok: false }, 400)
}
