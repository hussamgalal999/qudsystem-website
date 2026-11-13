"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { SmartText } from "@/components/translation/smart-text"
import { useLanguage } from "@/hooks/use-language"

export default function Hero() {
  const { dir } = useLanguage()

  return (
    <section
      dir={dir}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <SmartText translationKey="hero.badge" fallback="Creative Software Solutions">
              Creative Software Solutions
            </SmartText>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 dark:from-blue-400 dark:via-violet-400 dark:to-cyan-300 bg-clip-text text-transparent leading-tight"
            >
              <SmartText translationKey="hero.title">QudSystem</SmartText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-xl sm:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed"
            >
              <SmartText translationKey="hero.subtitle">
                Innovative software solutions for modern businesses
              </SmartText>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              <Link href="/projects">
                <SmartText translationKey="hero.cta">Discover Our Solutions</SmartText>
                <ArrowRight className="mx-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/75 dark:bg-neutral-900/75 backdrop-blur-md border-slate-300 dark:border-neutral-700"
            >
              <Link href="/contact">
                <SmartText translationKey="hero.contact">Get In Touch</SmartText>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-slate-200/80 dark:border-neutral-800/80"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">150+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                <SmartText translationKey="hero.stats.projects">Projects Completed</SmartText>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">100%</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                <SmartText translationKey="hero.stats.satisfaction">Client Satisfaction</SmartText>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                <SmartText translationKey="hero.stats.support">Support Available</SmartText>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
