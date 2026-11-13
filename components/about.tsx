"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function About() {
  const { language, dir, t } = useLanguage()
  const isAr = language === "ar"

  return (
    <section id="about" dir={dir} className="py-20 bg-slate-100/45 dark:bg-neutral-900/45 backdrop-blur-[2px] transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
              <Image
                src="/assets/img/office-img-1.jpg"
                alt="QudSystem Engineering Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              {t("about.title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              {isAr
                ? "تأسست شركة QudSystem عام 2019 في مصر، وأنجزت أكثر من 150 مشروعاً لأكثر من 50 عميلاً حول العالم في مجالات الويب، الموبايل، الذكاء الاصطناعي، والأمن السيبراني."
                : "Founded in 2019 in Egypt, QudSystem has delivered 150+ projects for 50+ clients worldwide across web, mobile, AI agents, EdTech, and cybersecurity."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/80 dark:bg-neutral-800/60 backdrop-blur-sm p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {t("about.mission")}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("about.missionText")}</p>
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/60 backdrop-blur-sm p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {t("about.vision")}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("about.visionText")}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/about">
                  {isAr ? "المزيد عن الشركة" : "Learn More About Us"}
                  <ArrowRight className="mx-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  <Mail className="mx-2 h-4 w-4" />
                  {t("about.contactUs")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
