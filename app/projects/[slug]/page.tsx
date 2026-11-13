import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Rocket,
  Calendar,
  Layers,
  Cpu,
  PlayCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { allProducts, getProductBySlug } from "@/lib/products-data"
import { projectsData } from "@/data/projects"

interface ProjectSlugPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const slugs = new Set<string>()

  // AI Studio products
  allProducts.forEach((p) => slugs.add(p.slug))

  // Legacy projectsData
  projectsData.forEach((p) => slugs.add(p.slug))

  return Array.from(slugs).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: ProjectSlugPageProps): Metadata {
  const product = getProductBySlug(params.slug)
  if (product) {
    return {
      title: `${product.titleEn} | ${product.titleAr} - QudSystem`,
      description: product.descEn,
    }
  }

  const legacyProject = projectsData.find((p) => p.slug === params.slug)
  if (legacyProject) {
    return {
      title: `${legacyProject.title} - QudSystem`,
      description: legacyProject.description,
    }
  }

  return {
    title: "Project Details - QudSystem",
  }
}

export default function ProjectDetailsPage({ params }: ProjectSlugPageProps) {
  // If it's an AI Studio product, show the comprehensive AI Studio product showcase or redirect
  const product = getProductBySlug(params.slug)

  if (product) {
    return (
      <section className="min-h-screen pt-32 pb-20 bg-transparent text-slate-900 dark:text-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              <ArrowLeft className="h-4 w-4" /> العودة إلى المعرض | All Projects
            </Link>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-600 text-white">
                <Sparkles className="h-3 w-3 mr-1" /> Google AI Studio
              </Badge>
              <Badge variant="outline">
                {product.category} • {product.categoryAr}
              </Badge>
            </div>
          </div>

          {/* Header Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-slate-200/80 dark:border-neutral-800 shadow-lg mb-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                  {product.titleEn}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200" dir="rtl">
                  {product.titleAr}
                </h2>
              </div>

              {/* Direct Launch Button */}
              {product.appUrl && (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white font-bold shadow-lg shrink-0"
                >
                  <a
                    href={product.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <PlayCircle className="h-5 w-5" />
                    <span>تشغيل في AI Studio</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              )}
            </div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {product.descEn}
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed" dir="rtl">
              {product.descAr}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-neutral-800 text-blue-700 dark:text-neutral-300 border border-blue-200/60 dark:border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {((product.highlightsEn && product.highlightsEn.length > 0) ||
            (product.highlightsAr && product.highlightsAr.length > 0)) && (
            <div className="p-8 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md my-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Sparkles className="h-5 w-5" /> Key Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.highlightsEn && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Features</p>
                    <ul className="space-y-3">
                      {product.highlightsEn.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.highlightsAr && (
                  <div dir="rtl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">المواصفات بالعربية</p>
                    <ul className="space-y-3">
                      {product.highlightsAr.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Trust Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 text-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-emerald-400" />
              <div>
                <h4 className="font-bold">منظومة شركة QudSystem البرمجية</h4>
                <p className="text-xs text-slate-300">
                  جميع التطبيقات تعمل بنماذج Gemini وتمهد لحزمة Qud Office AI.
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs">
                تواصل معنا | Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Legacy project from projectsData
  const legacy = projectsData.find((p) => p.slug === params.slug)
  if (!legacy) {
    notFound()
  }

  return (
    <section className="min-h-screen pt-32 pb-20 bg-transparent text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">{legacy.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">{legacy.description}</p>
        <div className="p-6 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-slate-200 dark:border-neutral-800">
          <h2 className="text-lg font-bold mb-3">Overview</h2>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{legacy.overview}</p>
        </div>
        {legacy.liveUrl && (
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href={legacy.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Visit Live Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </section>
  )
}
