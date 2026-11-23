"use client"

import { useLanguage } from "@/hooks/use-language"

interface FaqItem { qEn: string; qAr: string; aEn: string; aAr: string }

const faqs: FaqItem[] = [
  {
    qEn: "What does QudSystem build?",
    qAr: "ماذا تبني شركة QudSystem؟",
    aEn: "We engineer custom software, autonomous AI agents, cybersecurity platforms (Dragon R1/B1, ProtectX), EdTech systems (QudSchool, Qudemy), and the upcoming Qud Office AI suite.",
    aAr: "نبني برمجيات مخصصة ووكلاء ذكاء اصطناعي مستقلين ومنصات أمن سيبراني (Dragon R1/B1 وProtectX) وأنظمة تعليم رقمي (QudSchool وQudemy) وحزمة Qud Office AI القادمة.",
  },
  {
    qEn: "Can products be customized for my organization?",
    qAr: "هل يمكن تخصيص المنتجات لشركتي؟",
    aEn: "Yes. Every product and platform can be tailored to your workflows — request a demo and we scope the customization with you.",
    aAr: "نعم، كل منتج ومنصة قابلة للتخصيص حسب سير عملك — اطلب عرضًا توضيحيًا وسنحدد نطاق التخصيص معك.",
  },
  {
    qEn: "How long does a typical project take?",
    qAr: "كم يستغرق تنفيذ المشروع؟",
    aEn: "It depends on scope. After a discovery call our team defines a timeline; most product deployments take weeks, custom enterprise systems are scoped individually.",
    aAr: "يعتمد على نطاق المشروع. بعد مكالمة التعريف يحدد فريقنا الإطار الزمني؛ معظم تطبيقات المنتجات تستغرق أسابيع، والأنظمة المؤسسية المخصصة تُقدَّر حسب الحجم.",
  },
  {
    qEn: "Is there a free trial or demo?",
    qAr: "هل توجد نسخة تجريبية أو عرض توضيحي؟",
    aEn: "Yes — use the Request a Demo page to book a live walkthrough of any product, including early access to Qud Office AI.",
    aAr: "نعم — استخدم صفحة طلب العرض التوضيحي لحجز جولة حية لأي منتج، بما فيها الوصول المبكر لـ Qud Office AI.",
  },
  {
    qEn: "What is Qud Office AI?",
    qAr: "ما هي حزمة Qud Office AI؟",
    aEn: "Our upcoming unified AI office suite: documents, sheets, presentations, and enterprise workflows powered by AI agents — ad-free in the paid plans.",
    aAr: "حزمتنا المكتبية الذكية القادمة: مستندات وجداول وعروض تقديمية وسير عمل مؤسسي مدعوم بوكلاء الذكاء الاصطناعي — بدون إعلانات في الباقات المدفوعة.",
  },
  {
    qEn: "Do you offer technical support?",
    qAr: "هل تقدمون دعمًا فنيًا؟",
    aEn: "Yes — direct support via qudsystemltd@gmail.com and +20 011 518 580 57, plus the Support Center on this site.",
    aAr: "نعم — دعم مباشر عبر qudsystemltd@gmail.com والرقم +20 011 518 580 57، إضافة إلى مركز الدعم في هذا الموقع.",
  },
  {
    qEn: "Where is QudSystem based?",
    qAr: "أين يقع مقر QudSystem؟",
    aEn: "Minya & Cairo, Egypt — serving clients worldwide since 2019 with 150+ delivered projects.",
    aAr: "المنيا والقاهرة، مصر — نخدم عملاء حول العالم منذ 2019 بأكثر من 150 مشروعًا منجزًا.",
  },
  {
    qEn: "How do paid plans work?",
    qAr: "كيف تعمل الباقات المدفوعة؟",
    aEn: "Paid tiers (coming soon) give a 100% ad-free experience across every QudSystem product, with priority support and early feature access.",
    aAr: "الباقات المدفوعة (قريبًا) تمنح تجربة خالية تمامًا من الإعلانات في كل منتجات QudSystem مع دعم أولوية ووصول مبكر للميزات.",
  },
]

export default function FaqClient() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">{isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          {isAr ? "إجابات على أكثر الأسئلة شيوعًا حول منتجاتنا وخدماتنا." : "Answers to the most common questions about our products and services."}
        </p>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.qEn} className="group rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
              <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                {isAr ? f.qAr : f.qEn}
                <span className="text-emerald-500 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{isAr ? f.aAr : f.aEn}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
