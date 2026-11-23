"use client"

import { useEffect } from "react"

/**
 * Client error beacon. Catches window errors and unhandled promise
 * rejections in real user sessions and posts them to /api/report-error,
 * which files them as GitHub issues for the automated fix loop.
 * Dedupes per session and never blocks the UI.
 */
export default function ErrorReporter() {
  useEffect(() => {
    const seen = new Set<string>()
    const send = (kind: string, message: string, stack?: string) => {
      const key = `${kind}:${message}`
      if (seen.has(key)) return
      seen.add(key)
      try {
        fetch("/api/report-error", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          keepalive: true,
          body: JSON.stringify({
            kind,
            message: String(message).slice(0, 500),
            stack: stack ? String(stack).slice(0, 4000) : undefined,
            url: window.location.pathname,
            userAgent: navigator.userAgent,
            language: document.documentElement.lang || "en",
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => {})
      } catch {
        /* reporting must never break the page */
      }
    }
    const onError = (event: ErrorEvent) => send("error", event.message, event.error?.stack)
    const onRejection = (event: PromiseRejectionEvent) =>
      send("unhandledrejection", event.reason instanceof Error ? event.reason.message : String(event.reason), event.reason?.stack)
    window.addEventListener("error", onError)
    window.addEventListener("unhandledrejection", onRejection)
    return () => {
      window.removeEventListener("error", onError)
      window.removeEventListener("unhandledrejection", onRejection)
    }
  }, [])
  return null
}
