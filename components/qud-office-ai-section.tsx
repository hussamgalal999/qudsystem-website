"use client"

import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function QudOfficeAiSection() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const suiteHighlights = isAr
    ? [
        {
          title: "منظومة تطبيقات متكاملة",
          subtitle: "Integrated Software Suite",
          description:
            "أكثر من 30 منتجاً برمجياً موحداً في مجالات الذكاء الاصطناعي، التعليم الرقمي، الهندسة الوظيفية، الأمن السيبراني، وأتمتة الأعمال.",
        },
        {
          title: "قريباً: حزمة Qud Office AI",
          subtitle: "Upcoming Flagship Ecosystem",
          description:
            "جميع مشاريع ومنتجات QudSystem الحالية مصممة لتتكامل وتصب في حزمة Qud Office AI القادمة لإدارة الأعمال والمكاتب بالذكاء الاصطناعي.",
        },
        {
          title: "الباقات المدفوعة بدون إعلانات",
          subtitle: "Ad-Free Complete Experience",
          description:
            "النسخة المجانية متصلة بخانة إعلانية مركزية قابلة للتحديث، أما النسخة المدفوعة بالباقات المتاحة قريباً فتمنحك تجربة كاملة 100% بدون إعلانات.",
        },
      ]
    : [
        {
          title: "Integrated Software Suite",
          subtitle: "30+ Unified Products",
          description:
            "Over 30 unified software products spanning AI agents, EdTech LMS, career engineering, cybersecurity, and enterprise automation.",
        },
        {
          title: "Coming Soon: Qud Office AI",
          subtitle: "Upcoming Flagship Ecosystem",
          description:
            "Every QudSystem product is architected as a building block leading into the upcoming Qud Office AI enterprise productivity suite.",
        },
        {
          title: "Ad-Free Paid Plans",
          subtitle: "Complete Experience",
          description:
            "Free editions connect to QudSystem's centralized updatable ad slot, while upcoming Paid Plans deliver a 100% ad-free complete experience.",
        },
      ]

  return (
    <section
      id="qud-office-ai"
      dir={dir}
      className="py-20 relative overflow-hidden bg-transparent text-slate-900 dark:text-slate-100 transition-colors"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/20 border border-violet-300 dark:border-violet-400/40 text-violet-800 dark:text-violet-200 text-xs font-semibold">
            <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-300" />
            {isAr
              ? "قريباً / قادم • حزمة Qud Office AI من شركة QudSystem"
              : "Coming Soon • Qud Office AI Suite by QudSystem"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {isAr ? "منظومة QudSystem البرمجية الموحدة" : "Unified QudSystem Software Ecosystem"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            {isAr
              ? "كافة المشاريع والتطبيقات من تقديم شركة QudSystem تعمل كحزمة برمجية مترابطة، وتمهّد لإطلاق الحزمة المكتبية الذكية الكبرى Qud Office AI."
              : "All applications presented by QudSystem operate as a unified software suite, paving the way for the upcoming Qud Office AI productivity ecosystem."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {suiteHighlights.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/85 dark:bg-slate-900/75 border-slate-200 dark:border-blue-500/25 text-slate-900 dark:text-slate-100 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {idx === 0 ? (
                    <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  ) : idx === 1 ? (
                    <Sparkles className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  ) : (
                    <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  )}
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </span>
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">{item.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>
                    {isAr ? "مدعوم مركزياً من منصة QudSystem" : "Centrally Powered by QudSystem"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/qud-office-ai">
              {isAr ? "استكشف خارطة طريق Qud Office AI" : "Explore Qud Office AI Roadmap"}
              <ArrowUpRight className="mx-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/Qudsystem" target="_blank" rel="noopener noreferrer">
              {isAr ? "تصفح مستودعات QudSystem على GitHub" : "Browse QudSystem on GitHub"}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
