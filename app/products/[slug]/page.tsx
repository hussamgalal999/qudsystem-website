import { notFound } from "next/navigation"
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
  Code2,
  Cpu,
  Globe,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { allProducts, getProductBySlug } from "@/lib/products-data"

interface ProductPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all 25 products + legacy suite & aliases
export function generateStaticParams() {
  const allSlugs = new Set<string>()

  allProducts.forEach((p) => {
    allSlugs.add(p.slug)
  })

  // Include legacy slugs for 100% backward compatibility
  const legacySlugs = [
    "qudmind-ai",
    "qudschool-lms",
    "qud-cv-penrate",
    "kenzy-ai",
    "qud-adliya",
    "qud-buildx",
    "qud-myhowiya",
    "qud-summarizer",
    "qud-headshot-pro",
    "qud-workflow-studio",
  ]
  legacySlugs.forEach((s) => allSlugs.add(s))

  return Array.from(allSlugs).map((slug) => ({ slug }))
}

// Dynamic SEO metadata
export function generateMetadata({ params }: ProductPageProps): Metadata {
  const prod = getProductBySlug(params.slug)
  if (!prod) {
    return {
      title: "Product Not Found | QudSystem",
    }
  }

  return {
    title: `${prod.titleEn} | ${prod.titleAr} - QudSystem AI Studio`,
    description: prod.descEn,
    openGraph: {
      title: `${prod.titleEn} - QudSystem`,
      description: prod.descEn,
      type: "website",
    },
  }
}

export default function ProductSinglePage({ params }: ProductPageProps) {
  const prod = getProductBySlug(params.slug)
  if (!prod) return notFound()

  return (
    <section className="pt-28 pb-20 min-h-screen bg-slate-50/50 dark:bg-neutral-950/50">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Top Navigation & Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-neutral-800">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>دليل المنتجات والتطبيقات | All Products</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {prod.isAiStudio && (
              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs py-1 px-3">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" />
                Google AI Studio App
              </Badge>
            )}
            <Badge variant="outline" className="text-xs py-1 px-3">
              {prod.category} • {prod.categoryAr}
            </Badge>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 dark:bg-neutral-800 dark:text-neutral-300">
              {prod.badgeEn || "Official Product"} • {prod.badgeAr || "منتج معتمد"}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-neutral-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>تاريخ التحديث: {prod.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {prod.titleEn}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400" dir="rtl">
              {prod.titleAr}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/70 border border-slate-200/80 dark:border-neutral-800 shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">English Summary</p>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {prod.taglineEn || prod.descEn}
              </p>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                {prod.overviewEn || prod.descEn}
              </p>
            </div>
            <div dir="rtl" className="border-t md:border-t-0 md:border-r border-slate-200/80 dark:border-neutral-800 pt-4 md:pt-0 md:pr-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">الملخص بالعربية</p>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {prod.taglineAr || prod.descAr}
              </p>
              <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                {prod.overviewAr || prod.descAr}
              </p>
            </div>
          </div>
        </div>

        {/* Live Launch Action Hub */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-slate-900/90 text-white shadow-xl border border-blue-500/20 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                <Rocket className="h-3.5 w-3.5" />
                <span>تشغيل التطبيق التفاعلي المباشر | Live Interactive App</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                جاهز للاستخدام الفوري عبر Google AI Studio
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                انقر على الزر لتشغيل واجهة التطبيق الحقيقية مع نماذج Gemini 2.5 في بيئة سحابية آمنة ومجهزة بالكامل.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-base shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <a href={prod.appUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  <span>جرب التطبيق الآن | Launch App</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 hover:bg-slate-800 text-white"
              >
                <Link href="/contact">طلب ترخيص مؤسسي</Link>
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span className="font-mono truncate max-w-md">الرابط المباشر: {prod.appUrl}</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Check className="h-3.5 w-3.5" /> تم التحقق من سلامة الرابط
            </span>
          </div>
        </div>

        {/* Feature Highlights & Specifications */}
        <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-neutral-800">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>المواصفات التقنية والمزايا المعمارية | Architecture & Features</span>
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300">
              Tier: {prod.tier || "Standard"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* English Highlights */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Architectural Highlights
              </p>
              <ul className="space-y-3">
                {(prod.highlightsEn || [
                  "Built with modern Google AI Studio architecture",
                  "Low-latency streaming responses powered by Gemini 2.5",
                  "Verified stateful conversation context management",
                  "Zero data retention mode available for enterprise deployments",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arabic Highlights */}
            <div dir="rtl" className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                أبرز المميزات والخصائص المعمارية
              </p>
              <ul className="space-y-3">
                {(prod.highlightsAr || [
                  "مبني بأحدث معمارية تقنية عبر Google AI Studio",
                  "استجابات فائقة السرعة مع تدفق مباشر للنصوص والبيانات بمحرك Gemini 2.5",
                  "إدارة محكمة ومحققة لسياق المحادثة والذاكرة التفاعلية",
                  "وضع متقدم يضمن عدم حفظ البيانات للشركات والمؤسسات الحساسة",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-neutral-800">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              المعايير التقنية | System Invariants
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-200/60 dark:border-neutral-700/60">
                <Cpu className="h-4 w-4 mx-auto mb-1 text-blue-500" />
                <span className="text-[11px] text-slate-400 block">AI Engine</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Gemini 2.5 Flash</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-200/60 dark:border-neutral-700/60">
                <Globe className="h-4 w-4 mx-auto mb-1 text-indigo-500" />
                <span className="text-[11px] text-slate-400 block">Platform</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Google AI Studio</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-200/60 dark:border-neutral-700/60">
                <Code2 className="h-4 w-4 mx-auto mb-1 text-emerald-500" />
                <span className="text-[11px] text-slate-400 block">Execution</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Client-First Cloud</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-200/60 dark:border-neutral-700/60">
                <Layers className="h-4 w-4 mx-auto mb-1 text-amber-500" />
                <span className="text-[11px] text-slate-400 block">Security Invariant</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Zero-Regression</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Tag className="h-3 w-3" /> الكلمات الدلالية:
            </span>
            {prod.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Enterprise Trust Card */}
        <div className="flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold">ضمان QudSystem للجودة والأمان</h4>
              <p className="text-xs md:text-sm text-slate-300">
                منتجات معتمدة ومحققة برمجياً مع وعد حقيقي بالخلو التام 100% من الإعلانات في الباقات المدفوعة ودعم فني مخصص.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
              <Link href="/pricing">استعراض الباقات والترقية</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-white">
              <Link href="/products">العودة للكتالوج</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
