"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Reviews() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const reviews = isAr
    ? [
        {
          id: 1,
          name: "د. محمد شريف",
          position: "مدير تقنية المعلومات، قطاع الرعاية الصحية",
          rating: 5,
          review:
            "قدّمت شركة QudSystem منصة إدارة الرعاية الصحية في الموعد المحدد وبأعلى معايير الأمان، مما حسّن كفاءة التشغيل بشكل ملموس.",
        },
        {
          id: 2,
          name: "م. سارة منصور",
          position: "مديرة التطوير التقني، منصة تعليم رقمي",
          rating: 5,
          review:
            "منصة التعليم الإلكتروني المطورة بواسطة QudSystem تجاوزت توقعاتنا، وارتفعت نسبة إتمام الدورات لدى الطلاب بنسبة 40%.",
        },
        {
          id: 3,
          name: "أ. كريم حسن",
          position: "نائب رئيس الهندسة، خدمات مالية",
          rating: 5,
          review:
            "خبرة QudSystem في الأنظمة المالية والأمنية واضحة للغاية؛ سرعة استجابة عالية وبنية مستقرة لمعالجة المعاملات.",
        },
      ]
    : [
        {
          id: 1,
          name: "Michael Chen",
          position: "CIO, Healthcare Provider",
          rating: 5,
          review:
            "QudSystem delivered our healthcare management platform on time and within budget. Their attention to security and compliance was exceptional.",
        },
        {
          id: 2,
          name: "Emily Rodriguez",
          position: "Director of Technology, EdTech",
          rating: 5,
          review:
            "The e-learning platform developed by QudSystem exceeded our expectations, driving a 40% increase in course completion rates.",
        },
        {
          id: 3,
          name: "Robert Martinez",
          position: "VP of Engineering, FinTech",
          rating: 5,
          review:
            "QudSystem implemented robust security measures with outstanding performance and reliability across every release.",
        },
      ]

  return (
    <section
      id="reviews"
      dir={dir}
      className="py-20 bg-slate-100/50 dark:bg-neutral-900/45 backdrop-blur-[2px] relative overflow-hidden transition-colors"
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
            {isAr ? "آراء عملائنا" : "Client Reviews"}
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {isAr
              ? "تجارب حقيقية لعملائنا مع حلول ومنتجات شركة QudSystem."
              : "What our clients say about partnering with QudSystem."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full bg-white/80 dark:bg-neutral-900/75 border-slate-200/80 dark:border-neutral-800/80 backdrop-blur-md shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 dark:text-neutral-200 leading-relaxed">
                    &ldquo;{r.review}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-200/70 dark:border-neutral-800/70">
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{r.name}</div>
                    <div className="text-xs text-slate-500 dark:text-neutral-400">{r.position}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
