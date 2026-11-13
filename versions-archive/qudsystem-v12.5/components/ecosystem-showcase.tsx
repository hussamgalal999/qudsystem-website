"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Blocks,
  Bot,
  Briefcase,
  CheckCircle2,
  Cpu,
  GraduationCap,
  MessageCircle,
  PenTool,
  Sparkles,
  Tag,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/hooks/use-language"
import {
  buildOfferWhatsAppUrl,
  flagshipProducts,
  getActiveSeasonalOffer,
  servicePackages,
  type FlagshipProduct,
  type SeasonalOccasion,
} from "@/data/ecosystem"

function ProductIcon({ name }: { name: FlagshipProduct["iconName"] }) {
  switch (name) {
    case "cpu":
      return <Cpu className="h-5 w-5 text-white" />
    case "sparkles":
      return <Sparkles className="h-5 w-5 text-white" />
    case "pen":
      return <PenTool className="h-5 w-5 text-white" />
    case "graduation":
      return <GraduationCap className="h-5 w-5 text-white" />
    case "blocks":
      return <Blocks className="h-5 w-5 text-white" />
    case "bot":
      return <Bot className="h-5 w-5 text-white" />
    case "briefcase":
      return <Briefcase className="h-5 w-5 text-white" />
  }
}

export default function EcosystemShowcase() {
  const { language, dir, t } = useLanguage()
  const isAr = language === "ar"
  const [activeOffer, setActiveOffer] = useState<SeasonalOccasion>(() =>
    getActiveSeasonalOffer(new Date("2026-01-01T12:00:00Z")),
  )

  useEffect(() => {
    setActiveOffer(getActiveSeasonalOffer(new Date()))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 16 },
    },
  }

  return (
    <section
      id="ecosystem"
      dir={dir}
      className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden"
    >
      {/* Glass-like background elements */}
      <div className="absolute top-16 left-1/4 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" />
            {t("ecosystem.badge") !== "ecosystem.badge"
              ? t("ecosystem.badge")
              : isAr
                ? "منظومة كود سيستم الموحدة"
                : "Unified QudSystem Ecosystem"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("ecosystem.title") !== "ecosystem.title"
              ? t("ecosystem.title")
              : isAr
                ? "منتجاتنا الرائدة وباقات الحلول"
                : "Flagship Products & Solution Packages"}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t("ecosystem.description") !== "ecosystem.description"
              ? t("ecosystem.description")
              : isAr
                ? "منصة متكاملة تجمع أنظمة الذكاء الاصطناعي، التعليم، إدارة الأعمال، والتطوير السريع في منظومة واحدة قابلة للتوسع."
                : "One unified technology ecosystem combining AI orchestration, enterprise analytics, EdTech, HR intelligence, and tailored software packages."}
          </p>
        </motion.div>

        {/* Active Seasonal Offer Banner (from QudSystem Offers Engine) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-2xl border border-blue-200/70 dark:border-blue-800/60 bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-indigo-50/90 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-indigo-950/40 backdrop-blur-md p-6 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                  <Tag className="h-3.5 w-3.5" />
                  {activeOffer.emoji} {isAr ? activeOffer.badgeAr : activeOffer.badge}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                  {isAr ? `خصم يصل إلى ${activeOffer.discount}%` : `Up to ${activeOffer.discount}% OFF`}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                {isAr ? activeOffer.nameAr : activeOffer.name}
              </h3>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl">
                {isAr ? activeOffer.descAr : activeOffer.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {(isAr ? activeOffer.servicesAr : activeOffer.services).map((srv) => (
                  <span
                    key={srv}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/80 dark:bg-neutral-900/70 border border-neutral-200/70 dark:border-neutral-700/70 text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <a href={buildOfferWhatsAppUrl(activeOffer)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {isAr ? "احجز العرض عبر واتساب" : "Claim via WhatsApp"}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  {isAr ? "تصفح الباقات" : "Explore Services"}
                  <ArrowRight className={`h-4 w-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Flagship Products & Service Packages Tabs */}
        <Tabs defaultValue="products" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="products">
                {isAr ? "المنتجات الرائدة (7)" : "Flagship Products (7)"}
              </TabsTrigger>
              <TabsTrigger value="packages">
                {isAr ? "باقات الخدمات والعروض" : "Service Packages"}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Flagship Products */}
          <TabsContent value="products">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {flagshipProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col border-neutral-200/60 dark:border-neutral-800/60 backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${product.accent} shadow-sm`}>
                          <ProductIcon name={product.iconName} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge variant="secondary" className="text-xs">
                            {isAr ? product.category.ar : product.category.en}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {isAr ? product.status.ar : product.status.en}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription className="font-medium text-neutral-700 dark:text-neutral-300">
                        {isAr ? product.tagline.ar : product.tagline.en}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-4">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {isAr ? product.description.ar : product.description.en}
                      </p>

                      <ul className="space-y-1.5">
                        {(isAr ? product.highlights.ar : product.highlights.en).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] rounded-full bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-2">
                      <Button variant="ghost" size="sm" asChild className="w-full justify-between group">
                        <Link href="/contact">
                          <span>{isAr ? "اطلب عرضاً توضيحياً" : "Request Product Demo"}</span>
                          <ArrowRight
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                            }`}
                          />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Tab 2: Service Packages */}
          <TabsContent value="packages">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {servicePackages.map((pkg) => (
                <motion.div key={pkg.id} variants={itemVariants}>
                  <Card
                    className={`h-full flex flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                      pkg.highlighted
                        ? "border-blue-500/70 dark:border-blue-400/70 bg-blue-50/40 dark:bg-blue-950/20 shadow-md"
                        : "border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Badge variant={pkg.highlighted ? "default" : "secondary"}>
                          {isAr ? pkg.badge.ar : pkg.badge.en}
                        </Badge>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          {isAr ? pkg.startingNote.ar : pkg.startingNote.en}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{isAr ? pkg.name.ar : pkg.name.en}</CardTitle>
                      <CardDescription>{isAr ? pkg.description.ar : pkg.description.en}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-4">
                      <ul className="space-y-2.5">
                        {(isAr ? pkg.features.ar : pkg.features.en).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {(isAr ? pkg.services.ar : pkg.services.en).map((srv) => (
                          <Badge key={srv} variant="outline" className="text-xs">
                            {srv}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-2">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                      >
                        <a
                          href={buildOfferWhatsAppUrl(activeOffer, isAr ? pkg.name.ar : pkg.name.en)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {isAr ? "استفسر عبر واتساب" : "Get Package Quote"}
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="w-full">
                        <Link href="/contact">{isAr ? "أو تواصل عبر النموذج" : "Or use contact form"}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
