import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, HelpCircle, Mail, Phone, Clock, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const supportArticles: Record<
  string,
  {
    titleEn: string
    titleAr: string
    categoryEn: string
    categoryAr: string
    contentEn: string
    contentAr: string
    stepsEn: string[]
    stepsAr: string[]
  }
> = {
  "deployment-guide": {
    titleEn: "Deployment & Production Configuration Guide",
    titleAr: "دليل النشر وضبط البيئة الإنتاجية",
    categoryEn: "Infrastructure",
    categoryAr: "البنية التحتية",
    contentEn:
      "A complete guide on configuring environment variables, setting up rootless Podman containers, and deploying QudSystem ecosystem apps with zero downtime.",
    contentAr:
      "دليل كامل لإعداد متغيرات البيئة وتشغيل الحاويات المعزولة ونشر تطبيقات منظومة QudSystem بأعلى استقرار وبدون توقف للخدمة.",
    stepsEn: [
      "Copy .env.example to .env and configure verified production credentials.",
      "Run `npm run build` to verify clean TypeScript compilation.",
      "Execute `podman start` or docker compose in rootless mode.",
      "Check health endpoints and configure reverse proxy (Nginx/Caddy) with TLS 1.3.",
    ],
    stepsAr: [
      "انسخ ملف .env.example إلى .env واضبط البيانات التشغيلية الرسمية.",
      "شغّل أمر بناء المشروع للتأكد من خلوه تماماً من أخطاء TypeScript.",
      "شغّل الحاويات المعزولة باستخدام Podman في النمط الآمن Rootless.",
      "افحص مسار الصحة وتأكد من عمل شهادة الأمان TLS 1.3 عبر الـ Reverse Proxy.",
    ],
  },
  "license-tiers": {
    titleEn: "License Tiers & Ad-Free Transition Policy",
    titleAr: "باقات الترخيص وسياسة الإلغاء التام للإعلانات",
    categoryEn: "Licensing & Billing",
    categoryAr: "التراخيص والاشتراكات",
    contentEn:
      "Understanding the QudSystem tier structure. The free community tier provides accessible utility with sponsored ecosystem slots, while paid plans are 100% ad-free with enterprise SLAs.",
    contentAr:
      "شرح باقات تراخيص QudSystem. توفر الباقة المجانية وصولاً عاماً للأدوات مع مساحات إعلانية للنظام، بينما الباقات المدفوعة خالية تماماً 100% من أي إعلانات مع دعم فني مخصص.",
    stepsEn: [
      "Community tier includes sponsored Qud Office AI preview slots.",
      "Professional and Enterprise licenses unlock immediate ad-free flags (`qud_license_tier: 'pro'`).",
      "Enterprise accounts receive dedicated support lines and custom SLA guarantees.",
      "Invoices and billing records are managed transparently via official channels.",
    ],
    stepsAr: [
      "الباقة المجانية تتضمن إشعارات ومساحات تعريفية بحزمة Qud Office AI.",
      "الباقات الاحترافية والمؤسسية تلغي الإعلانات فورياً وتفعّل وضع Ad-Free التام.",
      "تحصل حسابات الشركات على خط اتصال فني مباشر وضمانات استجابة سريعة SLA.",
      "تصدر الفواتير الرسمية وسجلات الاشتراك عبر القنوات المعتمدة حصراً.",
    ],
  },
  "contact-channels": {
    titleEn: "Official Support & Incident Escalation Channels",
    titleAr: "قنوات الدعم الفني الرسمية والتصعيد الفوري",
    categoryEn: "Customer Care",
    categoryAr: "خدمة العملاء",
    contentEn:
      "How to reach the engineering team for technical support, deployment assistance, security advisories, or commercial inquiries.",
    contentAr:
      "طرق التواصل المباشرة مع الفريق الهندسي للحصول على الدعم الفني، المساعدة في النشر، الإبلاغ الأمني، أو الاستفسارات التجارية.",
    stepsEn: [
      "Primary Official Email: qudsystemltd@gmail.com",
      "Direct Official Phone: +20 (011) 518-580-57",
      "Headquarters: Corniche El Nile, Minya, Egypt (8:30 AM – 5:00 PM EET)",
      "Critical security advisories are responded to within 4 business hours.",
    ],
    stepsAr: [
      "البريد الإلكتروني الرسمي المعتمد: qudsystemltd@gmail.com",
      "الهاتف المباشر المعتمد: 57 80 518 011 (20+)",
      "المقر الرئيسي: كورنيش النيل، ثان المنيا، محافظة المنيا (8:30 ص - 5:00 م)",
      "يتم الرد على البلاغات الأمنية الحرجة في غضون 4 ساعات عمل بحد أقصى.",
    ],
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = supportArticles[params.slug]
  if (!item) return {}
  return {
    title: `{item.titleEn} | QudSystem`,
    description: item.contentEn.slice(0, 155),
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://qudsystem.com"}/support//${params.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(supportArticles).map((slug) => ({ slug }))
}

export default function SupportSinglePage({ params }: { params: { slug: string } }) {
  const article = supportArticles[params.slug]
  if (!article) return notFound()

  return (
    <section className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" /> مركز الدعم الفني | Help Center
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            {article.categoryEn} • {article.categoryAr}
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 gradient-text">
            {article.titleEn}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6" dir="rtl">
            {article.titleAr}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {article.contentEn}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed" dir="rtl">
            {article.contentAr}
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md my-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <HelpCircle className="h-5 w-5" /> Recommended Steps | الخطوات والإجراءات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Guidelines (EN)</p>
              <ol className="space-y-3 list-decimal list-inside text-sm text-slate-700 dark:text-slate-300">
                {article.stepsEn.map((s, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div dir="rtl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">الإرشادات (العربية)</p>
              <ol className="space-y-3 list-decimal list-inside text-sm text-slate-700 dark:text-slate-300">
                {article.stepsAr.map((s, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-1">Still need direct assistance?</h4>
            <p className="text-xs text-slate-300">Our support engineers are available Sunday through Thursday, 8:30 AM to 5:00 PM EET.</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
              <span className="flex items-center gap-1"><Mail className="h-4 w-4 text-blue-400" /> qudsystemltd@gmail.com</span>
              <span className="flex items-center gap-1"><Phone className="h-4 w-4 text-emerald-400" /> +20 (011) 518-580-57</span>
            </div>
          </div>
          <Link href="/contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Open Support Ticket | فتح تذكرة دعم
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
