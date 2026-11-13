"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { CorporatePageConfig } from "@/data/site-pages"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CorporatePageShell({ config }: { config: CorporatePageConfig }) {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  return (
    <div
      dir={dir}
      className="min-h-screen pt-28 pb-20 bg-transparent text-slate-900 dark:text-slate-100 transition-colors"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            {isAr ? config.badgeAr : config.badgeEn}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {isAr ? config.titleAr : config.titleEn}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            {isAr ? config.subtitleAr : config.subtitleEn}
          </p>
          {config.ctaHref && (
            <div className="pt-2">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={config.ctaHref}>
                  {isAr ? config.ctaLabelAr : config.ctaLabelEn}
                  <ArrowRight className="mx-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.cards.map((card, i) => (
            <Card
              key={i}
              className="h-full flex flex-col justify-between bg-white dark:bg-neutral-900/80 border-slate-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader className="space-y-3">
                {(card.badgeEn || card.badgeAr) && (
                  <div>
                    <Badge variant="secondary">
                      {isAr ? card.badgeAr || card.badgeEn : card.badgeEn || card.badgeAr}
                    </Badge>
                  </div>
                )}
                <CardTitle className="text-xl text-slate-900 dark:text-white">
                  {isAr ? card.titleAr : card.titleEn}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-neutral-300 leading-relaxed">
                  {isAr ? card.descAr : card.descEn}
                </CardDescription>
              </CardHeader>
              {card.href && (
                <CardContent className="pt-0">
                  <Button asChild variant="link" className="px-0 text-blue-600 dark:text-blue-400">
                    <Link href={card.href}>
                      {isAr ? "عرض التفاصيل" : "Explore"}
                      <ArrowRight className="mx-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
