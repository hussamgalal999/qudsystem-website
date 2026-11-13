"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Bot,
  Terminal,
  FileSpreadsheet,
  Crown,
  Wand2,
  GraduationCap,
  Eye,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  PlayCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export interface ShowcaseProduct {
  id: string
  slug: string
  titleAr: string
  titleEn: string
  categoryAr: string
  categoryEn: string
  categoryKey: "agents" | "cyber" | "vision" | "edtech"
  descAr: string
  descEn: string
  appUrl: string
  tags: string[]
  highlightsAr: string[]
  highlightsEn: string[]
  badgeAr: string
  badgeEn: string
  icon: typeof Bot
  colorGradient: string
  accentBorder: string
}

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "mimo",
    slug: "mimo-autonomous-agent",
    titleAr: "وكيل ميمو المستقل (Mimo Autonomous Agent)",
    titleEn: "Mimo Autonomous Agent",
    categoryAr: "وكلاء الذكاء الاصطناعي",
    categoryEn: "Autonomous Agents",
    categoryKey: "agents",
    descAr:
      "واجهة وكيل ذكاء اصطناعي ذاتية التنفيذ متقدمة تعتمد بنية المخطط والمنفذ (Planner-Executor) والاستدلال متعدد الوسائط وإنجاز المهام خطوة بخطوة باستخدام Gemini 2.5.",
    descEn:
      "An advanced, self-executing AI agent interface demonstrating planner-executor architecture, multi-modal reasoning, and verifiable step-by-step task completion using Gemini 2.5.",
    appUrl:
      "https://aistudio.google.com/apps/2e5a6176-24bc-4e9a-a636-938916406af5?showPreview=true&showAssistant=true",
    tags: ["Autonomous Agent", "Gemini 2.5", "Planner-Executor", "Zero-Looping"],
    highlightsAr: [
      "بنية حلقة مزدوجة تفصل التخطيط الاستراتيجي عن التنفيذ",
      "استدعاء ديناميكي للأدوات والتعافي التلقائي من الأخطاء",
      "لوحة رقابة لحظية لعرض خطوات التفكير والنتائج",
    ],
    highlightsEn: [
      "Dual-loop architecture decoupling planning from execution",
      "Dynamic tool calling with runtime error recovery",
      "Real-time visual step breakdown & artifact emission",
    ],
    badgeAr: "وكيل ذاتي رائد",
    badgeEn: "Flagship Agent",
    icon: Bot,
    colorGradient: "from-blue-600 via-indigo-600 to-violet-600",
    accentBorder: "hover:border-blue-500/60 dark:hover:border-blue-400/60",
  },
  {
    id: "forgeai",
    slug: "forge-ai-studio",
    titleAr: "منظومة ForgeAI Studio",
    titleEn: "ForgeAI Studio",
    categoryAr: "أدوات ونماذج المطورين",
    categoryEn: "Developer & Agent Studio",
    categoryKey: "agents",
    descAr:
      "منظومة متكاملة احترافية لبناء، ضبط، واختبار نماذج ووكلاء الذكاء الاصطناعي مع نظام توجيه ذكاء اصطناعي تفاعلي (AI Navigator).",
    descEn:
      "A professional integrated environment for building, fine-tuning, and testing AI models and agents with an interactive AI Navigator.",
    appUrl:
      "https://aistudio.google.com/apps/58dd9138-4eba-40ab-9340-592b07a0be73?showPreview=true&showAssistant=true",
    tags: ["Agent Testing", "AI Navigator", "Model Tuning", "Gemini Studio"],
    highlightsAr: [
      "محرر تفاعلي لبناء واختبار موجهات وسلوك الوكلاء",
      "نظام الملاح الذكي (AI Navigator) للتوجيه البرمجي الفوري",
      "مقاييس أداء وتحليل معدل النجاح والدقة للاستدعاءات",
    ],
    highlightsEn: [
      "Interactive workbench for prompt & agent fine-tuning",
      "Embedded AI Navigator for real-time architectural guidance",
      "Precision metrics & invocation telemetry dashboard",
    ],
    badgeAr: "بيئة هندسة الوكلاء",
    badgeEn: "Agent IDE",
    icon: Cpu,
    colorGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    accentBorder: "hover:border-violet-500/60 dark:hover:border-violet-400/60",
  },
  {
    id: "xbow",
    slug: "xbow-lite-ai-pentester",
    titleAr: "نظام XBOW-Lite لاختبار الاختراق الذكي",
    titleEn: "XBOW-Lite AI Pentester",
    categoryAr: "الأمن السيبراني واختبار الاختراق",
    categoryEn: "Cybersecurity & Pentesting",
    categoryKey: "cyber",
    descAr:
      "محاكي متقدم لأنظمة اختبار الاختراق والأمن السيبراني بالذكاء الاصطناعي مزود بمحرك AI، طرفية تفاعلية حية، ولوحة تحكم تحليلية للثغرات.",
    descEn:
      "A high-tech, futuristic AI-powered penetration testing system simulator featuring an AI core, live terminal, and results dashboard.",
    appUrl:
      "https://aistudio.google.com/apps/eb33ed73-a445-4d05-84c3-878703fd7c83?showPreview=true&showAssistant=true",
    tags: ["AI Pentesting", "Live Terminal", "Vulnerability Audit", "SecOps"],
    highlightsAr: [
      "محاكاة طرفية أمنية حية لتنفيذ سيناريوهات الاختراق الأخلاقي",
      "محرك ذكاء اصطناعي سيبراني يحلل مسارات الهجوم ويوصي بالمعالجة",
      "لوحة قيادة فورية لتصنيف الثغرات (CVE/OWASP Top 10)",
    ],
    highlightsEn: [
      "Live security terminal simulating ethical pentest workflows",
      "Autonomous cybersecurity reasoning & remediation engine",
      "Real-time CVE & OWASP vulnerability matrix dashboard",
    ],
    badgeAr: "محاكي أمن سيبراني",
    badgeEn: "Cyber Defense",
    icon: Terminal,
    colorGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    accentBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
  },
  {
    id: "remix",
    slug: "remix-notebook-to-excel",
    titleAr: "Remix: كشكول إلى إكسل",
    titleEn: "Remix: Notebook to Excel",
    categoryAr: "معالجة الوثائق وOCR",
    categoryEn: "Document AI & OCR",
    categoryKey: "vision",
    descAr:
      "تطبيق لاستخراج النصوص والبيانات من صور الكراسات والمذكرات الورقية المكتوبة باليد وتحويلها إلى جداول إكسل منظمة بدقة فائقة.",
    descEn:
      "High-accuracy OCR application to extract tables and data from notebook photos and handwritten notes into Excel sheets.",
    appUrl:
      "https://aistudio.google.com/apps/655c8dcc-4337-4795-997d-64d600c66307?showPreview=true&showAssistant=true",
    tags: ["OCR Vision", "Notebook to Excel", "Handwriting AI", "Data Extraction"],
    highlightsAr: [
      "التعرف الفوري على الجداول والخطوط اليدوية وتنسيقها",
      "تصدير مباشر بنقرة واحدة إلى ملفات Excel (.xlsx) وجداول منظمة",
      "معالجة بصرية فائقة الدقة عبر Gemini Multimodal Vision",
    ],
    highlightsEn: [
      "Neural handwritten notes & messy table recognition",
      "Instant one-click export to structured Excel (.xlsx)",
      "Powered by Gemini multimodal visual reasoning",
    ],
    badgeAr: "أداة إنتاجية ذكية",
    badgeEn: "Productivity AI",
    icon: FileSpreadsheet,
    colorGradient: "from-amber-600 via-orange-600 to-red-600",
    accentBorder: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
  },
  {
    id: "rooh",
    slug: "rooh-luxury-headscarves",
    titleAr: "منصة Rooh للعلامات الفاخرة",
    titleEn: "Rooh Luxury Commerce",
    categoryAr: "التجارة الرقمية الفاخرة",
    categoryEn: "Luxury E-Commerce & UX",
    categoryKey: "edtech",
    descAr:
      "منصة وتجربة تسوق رقمية فاخرة عالية التحويل للأوشحة والأزياء الراقية بتصميم عصري فائق وسلاسة تامة وتفاعل بصري ساحر.",
    descEn:
      "A high-converting, luxury landing page for premium headscarves, featuring modern designs and a seamless, high-end user experience.",
    appUrl:
      "https://aistudio.google.com/apps/9a9ea741-e09f-40e5-88dc-fdd31c46f051?showPreview=true&showAssistant=true",
    tags: ["Luxury UX", "High Conversion", "Fashion Tech", "Next-Gen Design"],
    highlightsAr: [
      "واجهة مستخدم جمالية فائقة الأناقة مصممة للمنتجات الفاخرة",
      "تجربة تصفح غامرة وسريعة مع انتقالات بصرية سلسة",
      "بنية برمجية مهيأة لتحقيق أعلى معدلات التحويل والمبيعات",
    ],
    highlightsEn: [
      "Ultra-premium aesthetics engineered for luxury brands",
      "Immersive micro-interactions and frictionless checkout flows",
      "Conversion-optimized UI with modern responsive layout",
    ],
    badgeAr: "تصميم فاخر",
    badgeEn: "Luxury Showcase",
    icon: Crown,
    colorGradient: "from-rose-600 via-pink-600 to-amber-600",
    accentBorder: "hover:border-rose-500/60 dark:hover:border-rose-400/60",
  },
  {
    id: "pixshop",
    slug: "pixshop-photo-editor",
    titleAr: "محرر الصور الذكي Pixshop",
    titleEn: "Pixshop AI Photo Editor",
    categoryAr: "الإبداع وتعديل الصور",
    categoryEn: "Creative Image Studio",
    categoryKey: "vision",
    descAr:
      "تحرير ومعالجة صور فوتوغرافية احترافية عبر الأوامر النصية المباشرة المدعومة بنماذج Gemini لنقل التعديل الفوتوغرافي إلى أبعاد جديدة.",
    descEn:
      "Gemini brings professional, prompt-based photo editing to your fingertips with neural precision.",
    appUrl:
      "https://aistudio.google.com/apps/6aae88d2-3946-4c21-9bb7-c4601aa72a48?showPreview=true&showAssistant=true",
    tags: ["Prompt-Based", "Photo Studio", "Neural Filters", "Gemini Image"],
    highlightsAr: [
      "تعديل ذكي بالكامل باستخدام الأوامر الطبيعية باللغة العربية والإنجليزية",
      "تصحيح الإضاءة، عزل الخلفيات، وتحسين التفاصيل الدقيقة تلقائياً",
      "معاينة تفاعلية فورية للنتائج قبل الحفظ والتصدير",
    ],
    highlightsEn: [
      "Prompt-driven photo retouching with zero learning curve",
      "Automated depth isolation, lighting balance & restoration",
      "Instant real-time preview canvas before export",
    ],
    badgeAr: "محرر ذكاء اصطناعي",
    badgeEn: "Creative Studio",
    icon: Wand2,
    colorGradient: "from-cyan-600 via-blue-600 to-indigo-600",
    accentBorder: "hover:border-cyan-500/60 dark:hover:border-cyan-400/60",
  },
  {
    id: "qudschool",
    slug: "qudschool-qudemy-lms",
    titleAr: "منصة QudSchool / Qudemy التعليمية الذكية",
    titleEn: "QudSchool & Qudemy Adaptive LMS",
    categoryAr: "التعليم الرقمي والمنصات التفاعلية",
    categoryEn: "Adaptive EdTech LMS",
    categoryKey: "edtech",
    descAr:
      "منصة تعليمية ذكية ثنائية النمط: تجربة تفاعلية مرحة للأطفال (QudSchool) وبيئة أكاديمية احترافية للمتقدمين (Qudemy) مع معلم ذكاء اصطناعي.",
    descEn:
      "A smart, dual-mode educational platform that adapts to the learner. QudSchool offers a playful experience for kids, while Qudemy provides a professional environment for advanced learners, both powered by an AI assistant.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1xEyyFabP9_DZksUNzkLqedBsDKnL-7OW?showPreview=true&showAssistant=true",
    tags: ["Adaptive Learning", "Dual-Mode", "AI Tutor", "EdTech Next.js"],
    highlightsAr: [
      "نمط مزدوج يتكيف ذاتياً مع عمر وخبرة المتعلم",
      "معلم ذكاء اصطناعي تفاعلي يشرح المفاهيم ويقيم الإجابات",
      "مسارات مهارية متكاملة للبرمجة والعلوم والذكاء الاصطناعي",
    ],
    highlightsEn: [
      "Dual-mode interface tailored for kids & professional engineers",
      "Interactive 24/7 AI tutor for concepts, code & assessments",
      "Comprehensive gamified & career skill learning pathways",
    ],
    badgeAr: "منصة تعليمية متكيفة",
    badgeEn: "Adaptive LMS",
    icon: GraduationCap,
    colorGradient: "from-emerald-600 via-green-600 to-teal-600",
    accentBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
  },
  {
    id: "clearview",
    slug: "clearview-ai-watermark-remover",
    titleAr: "أداة ClearView AI لإزالة العلامات المائية",
    titleEn: "ClearView AI - Watermark Remover",
    categoryAr: "الرؤية الحاسوبية وترميم الصور",
    categoryEn: "Computer Vision & Inpainting",
    categoryKey: "vision",
    descAr:
      "أداة حديثة لإزالة العلامات المائية والتشويش من الصور وإعادة بناء التفاصيل المفقودة بذكاء ونقاء فائق بالاعتماد على Gemini AI.",
    descEn:
      "A modern tool to remove watermarks from images using Gemini AI with context-aware neural inpainting.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1M2L1r3dWuXuOVMqG3LBB8HfjGKmP9wDp?showPreview=true&showAssistant=true",
    tags: ["Watermark Remover", "Neural Inpainting", "Vision AI", "Restoration"],
    highlightsAr: [
      "إزالة دقيقة للعلامات المائية المعقدة والنصوص المتراكبة",
      "إعادة بناء المناطق المزالة بانسجام لوني وهيكلي تام",
      "معالجة سريعة مع الحفاظ الكامل على أبعاد ودقة الصورة الأصلية",
    ],
    highlightsEn: [
      "Precision watermark & overlay text detection",
      "Context-aware texture synthesis and pixel inpainting",
      "Zero artifact preservation of original resolution",
    ],
    badgeAr: "ترميم بكسلات ذكي",
    badgeEn: "Inpainting AI",
    icon: Eye,
    colorGradient: "from-sky-600 via-cyan-600 to-blue-600",
    accentBorder: "hover:border-sky-500/60 dark:hover:border-sky-400/60",
  },
]

export default function AiStudioShowcase() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { key: "all", labelAr: "كافة المنتجات (8)", labelEn: "All Products (8)" },
    { key: "agents", labelAr: "الوكلاء واستوديوهات AI", labelEn: "Autonomous Agents" },
    { key: "cyber", labelAr: "الأمن السيبراني", labelEn: "Cybersecurity" },
    { key: "vision", labelAr: "الرؤية ومعالجة الوثائق", labelEn: "Vision & OCR" },
    { key: "edtech", labelAr: "التعليم والتجارة الفاخرة", labelEn: "EdTech & Commerce" },
  ]

  const filteredProducts =
    activeCategory === "all"
      ? showcaseProducts
      : showcaseProducts.filter((p) => p.categoryKey === activeCategory)

  return (
    <section
      id="ai-studio-ecosystem"
      dir={dir}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 transition-colors"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-300/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wide shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span>
              {isAr
                ? "منظومة Google AI Studio الحية • إبداع QudSystem"
                : "Google AI Studio Ecosystem • Powered by QudSystem"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {isAr ? (
              <>
                أحدث منتجات وتطبيقات الذكاء الاصطناعي
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 mt-2">
                  (Google AI Studio Ecosystem)
                </span>
              </>
            ) : (
              <>
                Latest AI Products & Applications
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 mt-2">
                  (Google AI Studio Ecosystem)
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "استكشف وشغّل مباشرة تطبيقات حقيقية تعمل بكامل طاقتها على Google AI Studio ونماذج Gemini، صممتها شركة QudSystem لتجسد مستقبل الوكلاء الذاتيين، الأمن السيبراني، استخراج البيانات، والتعليم الرقمي."
              : "Directly launch and test live, working applications on Google AI Studio powered by Gemini models — engineered by QudSystem to demonstrate autonomous agents, cybersecurity, vision OCR, and adaptive education."}
          </p>
        </motion.div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => {
            const isSelected = activeCategory === c.key
            return (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-white/80 dark:bg-neutral-900/80 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800"
                }`}
              >
                {isAr ? c.labelAr : c.labelEn}
              </button>
            )
          })}
        </div>

        {/* 8 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod, idx) => {
            const Icon = prod.icon
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex"
              >
                <Card
                  className={`flex flex-col justify-between w-full rounded-2xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-slate-200/90 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 ${prod.accentBorder} group overflow-hidden`}
                >
                  <CardHeader className="p-5 pb-3">
                    {/* Top status indicator & badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          {isAr ? "جاهز للتجربة الحية" : "Live in AI Studio"}
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-[11px] font-medium bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-200"
                      >
                        {isAr ? prod.badgeAr : prod.badgeEn}
                      </Badge>
                    </div>

                    {/* Product Icon & Title */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${prod.colorGradient} text-white shadow-md shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {isAr ? prod.titleAr : prod.titleEn}
                        </CardTitle>
                        <p className="text-[11px] font-medium text-slate-500 dark:text-neutral-400 mt-0.5">
                          {isAr ? prod.categoryAr : prod.categoryEn}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 pt-2 pb-3 flex-grow space-y-4">
                    <CardDescription className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {isAr ? prod.descAr : prod.descEn}
                    </CardDescription>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {(isAr ? prod.highlightsAr : prod.highlightsEn).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {prod.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] rounded-md bg-slate-100 dark:bg-neutral-800/80 text-slate-600 dark:text-neutral-300 border border-slate-200/60 dark:border-neutral-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-5 pt-3 border-t border-slate-100 dark:border-neutral-800/80 flex flex-col gap-2">
                    {/* Primary Button: Live launch on AI Studio */}
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white font-semibold shadow-sm transition-all text-xs"
                    >
                      <a
                        href={prod.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <PlayCircle className="h-4 w-4" />
                        <span>{isAr ? "تشغيل في AI Studio" : "Launch AI Studio Demo"}</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-80" />
                      </a>
                    </Button>

                    {/* Secondary Button: Details Page */}
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-neutral-800/60"
                    >
                      <Link href={`/products/${prod.slug}`} className="flex items-center justify-center gap-1">
                        <span>{isAr ? "التفاصيل والمواصفات" : "View Full Specs"}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-start">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {isAr ? "25 تطبيقاً متكاملاً" : "25 Full Applications"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              {isAr
                ? "استكشف الدليل الكامل لمنتجات الذكاء الاصطناعي من QudSystem"
                : "Explore QudSystem's Complete 25 AI Studio Product Catalog"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {isAr
                ? "تتضمن مكتبتنا 25 تطبيقاً حياً على Google AI Studio تغطي روبوتات التعليم، أدوات التحليل، ألعاب الذكاء الاصطناعي، ومحررات المالتيميديا مع فلاتر وبحث وروابط تشغيل فورية."
                : "Our complete suite includes 25 live AI Studio apps covering learning bots, analytics, AI games, and multimedia engines with instant demo links and search."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5">
              <Link href="/products">
                {isAr ? "دليل الـ 25 منتجاً كاملاً" : "All 25 Products"}
                <ArrowRight className="mx-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 hover:bg-slate-800 text-white font-medium px-4"
            >
              <Link href="/projects">
                {isAr ? "معرض المشاريع" : "Projects Showcase"}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
