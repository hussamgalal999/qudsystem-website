import type { Metadata } from "next"

/**
 * Central SEO configuration for the unified QudSystem site.
 * NEXT_PUBLIC_SITE_URL must be set per environment (Vercel project env var).
 * Falls back to the production domain.
 */
export const siteConfig = {
  name: "QudSystem",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://qudsystem.com").replace(/\/$/, ""),
  defaultTitle: "QudSystem | Integrated Software, AI & Cybersecurity Suite",
  titleTemplate: "%s | QudSystem",
  defaultDescription:
    "QudSystem delivers an integrated software, AI, EdTech, and cybersecurity ecosystem — paving the way for the upcoming Qud Office AI suite.",
  ogImage: "/og-image.png",
  locale: "en_US",
  alternateLocales: ["ar_EG"],
  keywords: [
    "QudSystem",
    "Qud Office AI",
    "custom software",
    "AI agents",
    "cybersecurity",
    "EdTech",
    "Egypt",
  ],
  social: {
    github: "https://github.com/Qudsystem",
    linkedin: "https://www.linkedin.com/company/qudsystem-ltd",
  },
  contact: {
    email: "qudsystemltd@gmail.com",
    phone: "+201151858057",
  },
} as const

export interface PageSeoInput {
  /** Page title without the site suffix, e.g. "About QudSystem" */
  title: string
  /** 150-160 character meta description */
  description: string
  /** Canonical path beginning with /, e.g. "/about" */
  path: string
  /** Set true for auth, utility and draft pages that must stay out of the index */
  noindex?: boolean
  keywords?: string[]
}

/**
 * Builds a complete Metadata object for a page: title template, meta
 * description, canonical URL, OpenGraph (with og:image), Twitter card and
 * robots directives. Every public page must use this so the 20-point SEO
 * standard holds uniformly.
 */
export function buildMetadata({ title, description, path, noindex, keywords }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  }
}
