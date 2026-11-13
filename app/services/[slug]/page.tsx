import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Cpu, Zap, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicesMap: Record<
  string,
  {
    titleEn: string
    titleAr: string
    categoryEn: string
    categoryAr: string
    descEn: string
    descAr: string
    featuresEn: string[]
    featuresAr: string[]
    deliverablesEn: string[]
    deliverablesAr: string[]
  }
> = {
  "custom-software": {
    titleEn: "Custom Software Engineering",
    titleAr: "هندسة البرمجيات المخصصة",
    categoryEn: "Enterprise Solutions",
    categoryAr: "حلول المؤسسات",
    descEn:
      "Full-lifecycle bespoke software engineering tailored to complex business models. We build fault-tolerant backends, modular microservices, and reactive frontends.",
    descAr:
      "هندسة برمجيات متكاملة ومصممة خصيصاً للمؤسسات والشركات. نبني خوادم فائقة الاعتمادية، خدمات مصغرة معيارية، وواجهات مستخدم تفاعلية وسريعة.",
    featuresEn: [
      "Domain-driven architecture with clean separation of concerns",
      "High-throughput transactional APIs (REST / gRPC / GraphQL)",
      "Zero-downtime CI/CD containerized deployments (Docker/Podman)",
      "Enterprise audit logging and full observability",
    ],
    featuresAr: [
      "معمارية Domain-Driven بنظام هندسي محكم",
      "بوابات ربط APIs فائقة السرعة والتحمل (REST / gRPC / GraphQL)",
      "أنابيب نشر وتشغيل حاويات بدون توقف (Docker/Podman)",
      "سجلات تدقيق مؤسسية ومراقبة حية للأداء",
    ],
    deliverablesEn: ["Source code & Git history", "Architecture design doc", "API specs & OpenAPI schema", "Production runbook"],
    deliverablesAr: ["الكود المصدري كاملاً مع سجل التعديلات", "وثيقة التصميم المعماري", "مخططات OpenAPI للـ APIs", "دليل التشغيل والصيانة للمؤسسة"],
  },
  "ai-agents": {
    titleEn: "Autonomous AI Agents & RAG Systems",
    titleAr: "وكلاء الذكاء الاصطناعي وأنظمة RAG الذاتية",
    categoryEn: "Artificial Intelligence",
    categoryAr: "الذكاء الاصطناعي",
    descEn:
      "Enterprise agentic workflows, multi-agent orchestration, and localized retrieval-augmented generation (RAG) powered by Gemini, DeepSeek, Claude, and local LLMs.",
    descAr:
      "أنابيب وكلاء ذكاء اصطناعي مستقلة ومنظومات استرجاع معرفي متقدمة (RAG) تدعم Gemini و DeepSeek و Claude والنماذج المحلية الآمنة.",
    featuresEn: [
      "Multi-agent swarm coordination with structured protocols",
      "Hybrid vector + keyword search over private enterprise data",
      "Deterministic tool calling with safety boundaries",
      "Cost-optimized routing between frontier & fast reasoning models",
    ],
    featuresAr: [
      "تنسيق أسراب الوكلاء الذكية عبر بروتوكولات صارمة",
      "بحث هجين (فيكتور + دلالي) فوق وثائق وبيانات الشركة الخاصة",
      "استدعاء آمن للأدوات وقواعد البيانات بدون آثار جانبية",
      "توجيه ذكي بين النماذج الكبرى والسريعة لتقليل التكاليف",
    ],
    deliverablesEn: ["Agent workflow definitions", "Vector database indices", "Safety benchmark reports", "Web & CLI integration kits"],
    deliverablesAr: ["مخططات سير عمل الوكلاء", "فهارس قواعد البيانات الشعاعية", "تقارير أمان النماذج", "حزم الربط مع الويب والـ CLI"],
  },
  "cybersecurity": {
    titleEn: "Cybersecurity & Dragon Defense Suite",
    titleAr: "الأمن السيبراني ومنظومة دراجون الدفاعية",
    categoryEn: "Security & Auditing",
    categoryAr: "الأمان والتدقيق",
    descEn:
      "Defensive architecture, penetration testing, secret leakage prevention, and automated vulnerability scanning inspired by the Dragon R1/B1 autonomous security standard.",
    descAr:
      "معمارية دفاعية صلبة، اختبارات اختراق دورية، حماية من تسريب المفاتيح السرية، وفحص ثغرات آلي وفق معايير منظومة Dragon R1/B1.",
    featuresEn: [
      "Deep static & dynamic application security testing (SAST/DAST)",
      "Automated push-protection against secret & token leaks",
      "Zero-trust API authentication and cryptographic token validation",
      "Comprehensive compliance and vulnerability mitigation roadmaps",
    ],
    featuresAr: [
      "فحص أمني استباقي للكود والمخازن (SAST/DAST)",
      "حماية تلقائية تمنع تسريب مفاتيح الـ API والـ Secrets",
      "تطبيق مبدأ Zero-Trust والمصادقة المشفرة للـ APIs",
      "خارطة طريق واضحة لمعالجة كافة الثغرات البرمجية والشبكية",
    ],
    deliverablesEn: ["Penetration test report", "Vulnerability remediation patch", "Hardened deployment scripts", "Security policy manual"],
    deliverablesAr: ["تقرير اختبار الاختراق الشامل", "ترقيعات أمنية فورية للكود", "ملفات تشغيل محصنة دفاعياً", "دليل سياسات الأمان المؤسسي"],
  },
  "mobile-web": {
    titleEn: "Web & Cross-Platform Mobile Applications",
    titleAr: "تطبيقات الويب والموبايل المتجاوبة",
    categoryEn: "Product Engineering",
    categoryAr: "هندسة المنتجات",
    descEn:
      "Modern web portals built on Next.js, React, and Flutter/React Native delivering native speed, fluid transitions, and complete bilingual RTL/LTR parity.",
    descAr:
      "منصات وتطبيقات ويب وجوال متطورة مبنية على Next.js و React و Flutter تقدم سرعة فائقة وتنسيقاً سلساً يدعم العربية والإنجليزية ببراعة.",
    featuresEn: [
      "Pixel-perfect responsive design tailored for mobile & desktop",
      "Full RTL / LTR layout switching with zero layout shift",
      "PWA support with offline caching and background service workers",
      "SEO & OpenGraph optimization with 100/100 Lighthouse scores",
    ],
    featuresAr: [
      "تصميم عصري متجاوب مع كل مقاسات الشاشات",
      "تبديل سلس بين العربية والإنجليزية بدون اهتزاز أو تضارب",
      "دعم تطبيقات الويب التقدمية PWA والعمل بدون إنترنت",
      "تهيئة كاملة لمحركات البحث وسرعة 100/100 على Lighthouse",
    ],
    deliverablesEn: ["Production bundle & APK/IPA builds", "Design tokens & Figma spec", "PWA manifest & service worker", "Lighthouse audit pass"],
    deliverablesAr: ["حزم الإنتاج الجاهزة للنشر", "مكتبة التصميم والرموز البصرية", "ملفات PWA والـ Service Worker", "تقرير أداء Lighthouse الكامل"],
  },
}

export function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({ slug }))
}

export default function ServiceSinglePage({ params }: { params: { slug: string } }) {
  const service = servicesMap[params.slug]
  if (!service) return notFound()

  return (
    <section className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" /> العودة إلى دليل الخدمات | Back to Services
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
            {service.categoryEn} • {service.categoryAr}
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 gradient-text">
            {service.titleEn}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6" dir="rtl">
            {service.titleAr}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {service.descEn}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed" dir="rtl">
            {service.descAr}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Cpu className="h-5 w-5" /> Key Capabilities
            </h3>
            <ul className="space-y-3">
              {service.featuresEn.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md" dir="rtl">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-violet-600 dark:text-violet-400">
              <Zap className="h-5 w-5" /> المميزات الأساسية
            </h3>
            <ul className="space-y-3">
              {service.featuresAr.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-transparent border border-blue-500/20 text-center">
          <h3 className="text-2xl font-bold mb-3 gradient-text">ابدأ تنفيذ مشروعك مع مهندسي QudSystem</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto text-sm md:text-base">
            فريقنا التقني في المنيا والقاهرة جاهز لتحويل متطلباتك إلى نظام برمجي عالي الاستقرار والأمان.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                تواصل معنا الآن | Get Started <ArrowRight className="ms-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/request-demo">
              <Button size="lg" variant="outline">
                طلب عرض توضيحي | Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
