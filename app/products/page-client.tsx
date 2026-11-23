"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ExternalLink,
  Search,
  Sparkles,
  Rocket,
  ArrowRight,
  ArrowLeft,
  Layers,
  Filter,
  CheckCircle2,
  Calendar,
} from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { allProducts, aiStudioProducts, type ProductItem } from "@/lib/products-data"

export default function ProductsPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>()
    allProducts.forEach((p) => {
      cats.add(isAr ? p.categoryAr : p.category)
    })
    return Array.from(cats)
  }, [isAr])

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const catMatch =
        selectedCategory === "all" ||
        (isAr ? product.categoryAr === selectedCategory : product.category === selectedCategory)

      if (!catMatch) return false

      if (!searchQuery.trim()) return true

      const query = searchQuery.toLowerCase().trim()
      const titleEn = product.titleEn.toLowerCase()
      const titleAr = product.titleAr.toLowerCase()
      const descEn = product.descEn.toLowerCase()
      const descAr = product.descAr.toLowerCase()
      const tags = product.tags.map((t) => t.toLowerCase()).join(" ")

      return (
        titleEn.includes(query) ||
        titleAr.includes(query) ||
        descEn.includes(query) ||
        descAr.includes(query) ||
        tags.includes(query)
      )
    })
  }, [searchQuery, selectedCategory, isAr])

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-slate-50/50 dark:bg-neutral-950/50">
      <div className="container mx-auto px-4 max-w-7xl space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>
              {isAr
                ? "منظومة وتطبيقات جوجل إيه آي ستوديو (Google AI Studio Suite)"
                : "Google AI Studio & QudSystem Suite"}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isAr
              ? "دليل تطبيقات ومنتجات الذكاء الاصطناعي"
              : "AI Products & Applications Catalog"}
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed">
            {isAr
              ? "استكشف 25 تطبيقاً متقدماً يعمل بنماذج Gemini 2.5 من تقديم شركة QudSystem. يمكنك تجربة كل تطبيق مباشرة عبر Google AI Studio أو استعراض مواصفاته المعمارية."
              : "Explore 25 production-grade AI applications powered by Gemini 2.5 from QudSystem. Launch live interactive apps directly in Google AI Studio or inspect detailed architectural specifications."}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-neutral-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 ${
                  isAr ? "right-3" : "left-3"
                }`}
              />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isAr
                    ? "ابحث بالاسم، الوصف، أو الكلمات الدلالية..."
                    : "Search by title, description, or tags..."
                }
                className={isAr ? "pr-10 text-right" : "pl-10 text-left"}
              />
            </div>

            {/* Counter badge */}
            <div className="text-xs font-medium text-slate-500 dark:text-neutral-400 flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>
                {isAr
                  ? `عرض ${filteredProducts.length} من أصل ${allProducts.length} تطبيقاً`
                  : `Showing ${filteredProducts.length} of ${allProducts.length} apps`}
              </span>
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter className="h-3 w-3" />
              {isAr ? "التصنيف:" : "Category:"}
            </span>

            <Button
              size="sm"
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="text-xs rounded-full h-8 shrink-0"
            >
              {isAr ? "الكل (All)" : "All"}
            </Button>

            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="text-xs rounded-full h-8 shrink-0"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 dark:bg-neutral-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-neutral-800">
            <p className="text-slate-500 dark:text-neutral-400 text-lg">
              {isAr
                ? "لم نتمكن من العثور على أي تطبيق يطابق بحثك."
                : "No applications found matching your search query."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
              className="mt-4"
            >
              {isAr ? "إعادة تعيين الفلاتر" : "Reset Filters"}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const ArrowIcon = isAr ? ArrowLeft : ArrowRight

              return (
                <Card
                  key={p.slug}
                  className="group bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-slate-200/90 dark:border-neutral-800 flex flex-col justify-between hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {p.isAiStudio && (
                            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-semibold tracking-wide">
                              <Sparkles className="h-2.5 w-2.5 mr-1 inline" />
                              AI Studio
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-[10px]">
                            {isAr ? p.categoryAr : p.category}
                          </Badge>
                          {p.featured && (
                            <Badge variant="secondary" className="text-[10px]">
                              {isAr ? "مميز" : "Featured"}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white pt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {isAr ? p.titleAr : p.titleEn}
                        </CardTitle>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Calendar className="h-3 w-3" />
                      <span>{p.date}</span>
                    </div>

                    <CardDescription className="text-sm text-slate-600 dark:text-neutral-300 line-clamp-3 leading-relaxed">
                      {isAr ? p.descAr : p.descEn}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 pb-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-neutral-800/80">
                    <div className="flex items-center gap-2 w-full">
                      {/* Direct Launch Button */}
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm font-medium"
                      >
                        <a
                          href={p.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5"
                        >
                          <Rocket className="h-3.5 w-3.5" />
                          <span>{isAr ? "جرب التطبيق الآن" : "Launch App"}</span>
                          <ExternalLink className="h-3 w-3 opacity-80" />
                        </a>
                      </Button>

                      {/* Specs / Details Link */}
                      <Button asChild size="sm" variant="outline" className="px-3 shrink-0">
                        <Link
                          href={`/products/${p.slug}`}
                          className="flex items-center gap-1 text-slate-700 dark:text-slate-200"
                          title={isAr ? "عرض المواصفات المعمارية" : "View Specifications"}
                        >
                          <span className="text-xs">{isAr ? "المواصفات" : "Specs"}</span>
                          <ArrowIcon className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <Badge className="bg-blue-500/20 text-blue-300 border border-blue-400/30">
              QudSystem Vision 2026
            </Badge>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              {isAr
                ? "تمهيد متكامل نحو حزمة Qud Office AI"
                : "The Road to Qud Office AI Suite"}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {isAr
                ? "جميع هذه التطبيقات تمثل اللبنات التقنية لمنظومة QudSystem المتكاملة. قريباً سيتم إطلاق حزمة Qud Office AI الشاملة بدون إعلانات مع باقات مدفوعة وميزات تشفير متقدمة للمؤسسات."
                : "All 25 applications represent the foundational building blocks of the QudSystem ecosystem. Stay tuned for the upcoming Qud Office AI suite featuring ad-free enterprise workflows, high-speed dedicated reasoning, and zero-data retention encryption."}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                <Link href="/pricing">{isAr ? "استكشف الباقات والأسعار" : "Explore Pricing"}</Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-white">
                <Link href="/contact">{isAr ? "تواصل مع فريق التطوير" : "Contact Engineers"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
