import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"
import { projectsData } from "@/data/projects"

/** Static public routes (noindex/auth/utility pages are excluded). */
const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/features",
  "/faq",
  "/integrations",
  "/pleasures",
  "/pricing",
  "/products",
  "/projects",
  "/qud-office-ai",
  "/request-demo",
  "/services",
  "/support",
  "/team",
  "/testimonials",
  "/work-process",
]

/** Blog article slugs — keep in sync with app/blog/[slug]/page.tsx. */
const blogSlugs = ["ai-transformation-2025", "cybersecurity-best-practices", "qud-office-ai-preview"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }))
  for (const slug of blogSlugs) {
    urls.push({ url: `${siteConfig.url}/blog/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })
  }
  for (const p of projectsData) {
    urls.push({ url: `${siteConfig.url}/projects/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })
  }
  return urls
}
