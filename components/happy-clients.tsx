"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export default function HappyClients() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const clients = [
    { id: 1, name: "TechCorp", industry: isAr ? "التكنولوجيا" : "Technology" },
    { id: 2, name: "HealthPlus", industry: isAr ? "الرعاية الصحية" : "Healthcare" },
    { id: 3, name: "FinanceHub", industry: isAr ? "الخدمات المالية" : "Finance" },
    { id: 4, name: "EduLearn", industry: isAr ? "التعليم الرقمي" : "Education" },
    { id: 5, name: "RetailPro", industry: isAr ? "التجزئة" : "Retail" },
    { id: 6, name: "LogiTech", industry: isAr ? "اللوجستيات" : "Logistics" },
    { id: 7, name: "MediaMax", industry: isAr ? "الإعلام" : "Media" },
    { id: 8, name: "GovSystems", industry: isAr ? "القطاع الحكومي" : "Government" },
  ]

  return (
    <section
      id="clients"
      dir={dir}
      className="py-20 bg-transparent relative overflow-hidden transition-colors"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {isAr ? "شركاء النجاح والعملاء" : "Trusted by Industry Leaders"}
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {isAr
              ? "نفخر بشراكاتنا مع أكثر من 50 مؤسسة وشركة تعتمد على حلول QudSystem البرمجية والذكية."
              : "We partner with 50+ organizations across diverse sectors that rely on QudSystem software and AI platforms."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <Card className="p-6 text-center bg-white/80 dark:bg-neutral-900/75 border-slate-200/80 dark:border-neutral-800/80 backdrop-blur-md hover:shadow-md transition-all">
                <div className="text-lg font-bold text-slate-900 dark:text-white">{c.name}</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">{c.industry}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
