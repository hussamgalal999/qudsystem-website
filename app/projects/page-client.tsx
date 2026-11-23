"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Filter, Search, Sparkles, ExternalLink, PlayCircle } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/projects"
import { aiStudioProducts, type ProductItem } from "@/lib/products-data"
import { useLanguage } from "@/hooks/use-language"
import type { Project } from "@/types/project"


export default function ProjectsPage() {
  const { t, language, dir } = useLanguage()
  const isAr = language === "ar"
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  // Map AI Studio products into the Project interface
  const aiStudioAsProjects: Project[] = useMemo(() => {
    return aiStudioProducts.map((p, idx) => ({
      id: 1000 + idx,
      title: isAr ? p.titleAr : p.titleEn,
      slug: p.slug,
      description: isAr ? p.descAr : p.descEn,
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Google AI Studio", isAr ? p.categoryAr : p.category],
      technologies: p.tags,
      featured: Boolean(p.featured),
      liveUrl: p.appUrl,
      appUrl: p.appUrl,
      isAiStudio: true,
      duration: p.date,
      teamSize: 1,
      overview: isAr ? p.overviewAr || p.descAr : p.overviewEn || p.descEn,
      keyFeatures: isAr ? p.highlightsAr : p.highlightsEn,
    }))
  }, [isAr])

  // Combine AI Studio products with legacy showcase projects
  const allProjects: Project[] = useMemo(() => {
    return [...aiStudioAsProjects, ...projectsData]
  }, [aiStudioAsProjects])

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set<string>()
    cats.add("All")
    cats.add("Google AI Studio")
    allProjects.forEach((p) => {
      p.categories.forEach((c) => cats.add(c))
    })
    return Array.from(cats)
  }, [allProjects])

  // Filter projects based on search query and active filter
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
        project.categories.some((cat) => cat.toLowerCase().includes(q))

      const matchesFilter =
        activeFilter === "All" ||
        project.categories.includes(activeFilter) ||
        (activeFilter === "Google AI Studio" && project.isAiStudio)

      return matchesSearch && matchesFilter
    })
  }, [allProjects, searchQuery, activeFilter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {isAr
                ? "تطبيقات Google AI Studio الحية + مشاريع QudSystem"
                : "Live Google AI Studio Apps + QudSystem Projects"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t("projects.title")}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300 max-w-3xl mx-auto text-base">
            {isAr
              ? "استعرض جميع مشاريعنا وتطبيقات الذكاء الاصطناعي الحية. اضغط على زر تشغيل التجربة (Launch AI Studio Demo) لبدء استخدام أي تطبيق مباشرة في متصفحك."
              : t("projects.description")}
          </p>
        </motion.div>

        {/* Quick AI Studio Shortcut Banner */}
        <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
              <PlayCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {isAr
                  ? "تطبيقات الذكاء الاصطناعي الجاهزة للتشغيل الفوري"
                  : "Google AI Studio Live Working Applications"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {isAr
                  ? "25 تطبيقاً حياً تشمل Mimo Autonomous Agent, ForgeAI, XBOW Pentester, Remix والمزيد."
                  : "25 live working applications including Mimo Autonomous Agent, ForgeAI, XBOW Pentester, Remix & more."}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => {
              setActiveFilter("Google AI Studio")
              setSearchQuery("")
            }}
            className={
              activeFilter === "Google AI Studio"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs shrink-0"
                : "bg-blue-600 hover:bg-blue-700 text-white text-xs shrink-0"
            }
          >
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            {isAr ? "عرض تطبيقات AI Studio فقط" : "Filter: Google AI Studio Only"}
          </Button>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between backdrop-blur-md bg-white/75 dark:bg-neutral-900/75 p-4 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
            <Input
              type="text"
              placeholder={isAr ? "ابحث بالاسم أو التقنية (Mimo, Gemini, OCR...)" : t("projects.search")}
              className="pl-10 backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-neutral-500 mr-1 flex-shrink-0" />
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className="cursor-pointer px-3 py-1 text-xs shrink-0 transition-colors"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 backdrop-blur-sm bg-white/30 dark:bg-neutral-900/30 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
            <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white">
              {isAr ? "لم يتم العثور على مشاريع مطابقة" : "No projects found"}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
              {isAr
                ? "جرّب تغيير كلمات البحث أو إعادة ضبط الفلاتر"
                : "Try adjusting your search or filter criteria"}
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
              }}
              className="bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900 text-xs"
            >
              {isAr ? "إعادة ضبط الفلاتر" : "Reset Filters"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

