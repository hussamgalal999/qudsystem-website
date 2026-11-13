"use client"

import { useState, useEffect } from "react"
import { Check, Sparkles, ShieldCheck, MegaphoneOff } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function PricingPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [previewPro, setPreviewPro] = useState(false)

  useEffect(() => {
    try {
      setPreviewPro(window.localStorage.getItem("qud_license_tier") === "pro")
    } catch {}
  }, [])

  const toggleAdFreePreview = () => {
    const next = !previewPro
    setPreviewPro(next)
    try {
      if (next) window.localStorage.setItem("qud_license_tier", "pro")
      else window.localStorage.removeItem("qud_license_tier")
      window.location.reload()
    } catch {}
  }

  const plans = isAr
    ? [
        {
          name: "النسخة المجانية (Community)",
          price: "مجاني",
          badge: "متاح الآن",
          description: "وصول كامل للنسخ المفتوحة من حزمة منتجات QudSystem.",
          features: [
            "جميع الأدوات والمشاريع مفتوحة المصدر",
            "تتضمن الخانة الإعلانية المركزية القابلة للتحديث",
            "تحديثات مستمرة عبر GitHub",
            "دعم المجتمع والتوثيق الرسمي",
          ],
          cta: "تصفح المشاريع المجانية",
          href: "/projects",
          highlight: false,
        },
        {
          name: "الباقة الاحترافية (Pro — بدون إعلانات)",
          price: "قريباً",
          badge: "النسخة المدفوعة قريباً",
          description: "تجربة احترافية كاملة 100% بدون إعلانات عبر كافة منتجات QudSystem.",
          features: [
            "تجربة كاملة بدون أي إعلانات (Ad-Free 100%)",
            "أولوية الوصول إلى حزمة Qud Office AI",
            "مفاتيح ترخيص سحابية ومحلية",
            "دعم فني مباشر عبر الهاتف والبريد",
          ],
          cta: "احجز أولوية الوصول",
          href: "/request-demo",
          highlight: true,
        },
        {
          name: "باقة المؤسسات (Enterprise)",
          price: "مخصص",
          badge: "للشركات والفرق",
          description: "نشر خاص، تخصيص كامل، واتفاقية مستوى خدمة SLA للمؤسسات.",
          features: [
            "تجربة كاملة بدون إعلانات لجميع الموظفين",
            "تكامل مخصص مع Qud Office AI وDragon Security",
            "استضافة خاصة أو سحابية معزولة",
            "دعم هندسي مخصص 24/7",
          ],
          cta: "تواصل مع المبيعات",
          href: "/contact",
          highlight: false,
        },
      ]
    : [
        {
          name: "Community Free Edition",
          price: "Free",
          badge: "Available Now",
          description: "Full access to QudSystem open-source software suite editions.",
          features: [
            "Access to all 30+ unified QudSystem tools",
            "Includes centralized updatable ecosystem ad slot",
            "Continuous GitHub releases",
            "Official documentation & community support",
          ],
          cta: "Browse Free Projects",
          href: "/projects",
          highlight: false,
        },
        {
          name: "Pro Plan (100% Ad-Free)",
          price: "Coming Soon",
          badge: "Paid Plans Soon",
          description: "Complete distraction-free experience across every QudSystem product.",
          features: [
            "100% Ad-Free complete product experience",
            "Priority access to Qud Office AI Suite",
            "Cloud & local license key activation",
            "Direct email & WhatsApp priority support",
          ],
          cta: "Reserve Early Access",
          href: "/request-demo",
          highlight: true,
        },
        {
          name: "Enterprise Suite",
          price: "Custom",
          badge: "Organizations",
          description: "Dedicated deployment, custom AI workflows, and SLA guarantees.",
          features: [
            "Ad-free org-wide licensing across all teams",
            "Custom Qud Office AI & Dragon Security integration",
            "On-premise or isolated cloud hosting",
            "24/7 dedicated engineering support",
          ],
          cta: "Contact Sales",
          href: "/contact",
          highlight: false,
        },
      ]

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 text-xs font-semibold">
            <MegaphoneOff className="h-3.5 w-3.5" />
            {isAr
              ? "النسخة المدفوعة بالباقات المتاحة قريباً: تجربة كاملة بدون إعلانات"
              : "Upcoming Paid Plans: 100% Ad-Free Complete Experience"}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "الباقات وخطط الاشتراك" : "Plans & Pricing"}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300">
            {isAr
              ? "ابدأ مجاناً مع الخانة الإعلانية المركزية، أو استعد للترقية إلى الباقات المدفوعة بدون إعلانات وحزمة Qud Office AI."
              : "Start free with our centralized ecosystem banner, or reserve upcoming Paid Plans for a 100% ad-free experience and Qud Office AI."}
          </p>
          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={toggleAdFreePreview}>
              <ShieldCheck className="mx-2 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              {previewPro
                ? isAr
                  ? "معاينة الوضع المجاني (إظهار الإعلان)"
                  : "Switch to Free Tier Preview"
                : isAr
                  ? "معاينة تجربة الباقة المدفوعة (بدون إعلانات)"
                  : "Preview Ad-Free Paid Tier"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <Card
              key={idx}
              className={`flex flex-col justify-between bg-white dark:bg-neutral-900 border ${
                p.highlight
                  ? "border-blue-500 shadow-lg ring-1 ring-blue-500/30"
                  : "border-slate-200 dark:border-neutral-800"
              }`}
            >
              <CardHeader>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  {p.badge}
                </span>
                <CardTitle className="text-xl">{p.name}</CardTitle>
                <div className="text-3xl font-bold pt-2 text-slate-900 dark:text-white">{p.price}</div>
                <CardDescription className="pt-1">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 flex-grow">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-neutral-300">
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${p.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}`} variant={p.highlight ? "default" : "outline"}>
                  <Link href={p.href}>{p.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
