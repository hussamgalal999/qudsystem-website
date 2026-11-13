import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Layers, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const integrationsMap: Record<
  string,
  {
    titleEn: string
    titleAr: string
    categoryEn: string
    categoryAr: string
    descEn: string
    descAr: string
    capabilitiesEn: string[]
    capabilitiesAr: string[]
  }
> = {
  "ai-models": {
    titleEn: "Frontier AI Models & Cloud LLMs",
    titleAr: "نماذج الذكاء الاصطناعي العالمية والسحابية",
    categoryEn: "Model Providers",
    categoryAr: "مزودو النماذج",
    descEn:
      "Native zero-latency connectors to Google Gemini 2.5/3, Anthropic Claude 3.7, OpenAI GPT-4o, and DeepSeek V3/R1 with fallback resilience.",
    descAr:
      "ربط سحابي فوري ومباشر بنماذج Google Gemini و Claude 3.7 و OpenAI و DeepSeek V3/R1 مع دعم تلقائي للتبديل عند انقطاع أي مزود.",
    capabilitiesEn: [
      "Dynamic prompt routing & latency-aware fallbacks",
      "Unified structured JSON output schema enforcement",
      "Token cost monitoring and predictive budget throttles",
      "Streaming responses with real-time UI token updates",
    ],
    capabilitiesAr: [
      "توجيه ذكي للأوامر وتبديل مرن بين النماذج حسب زمن الاستجابة",
      "إلزام النماذج بمخرجات JSON قياسية متوافقة 100% مع النظام",
      "مراقبة استهلاك الـ Tokens وتحديد حدود قصوى للميزانية",
      "تدفق فوري للنصوص (Streaming) مع تحديث واجهة المستخدم في التو",
    ],
  },
  "cloud-devops": {
    titleEn: "Cloud & DevOps Infrastructure",
    titleAr: "البنية السحابية وإدارة النشر والتشغيل",
    categoryEn: "Infrastructure",
    categoryAr: "البنية التحتية",
    descEn:
      "Containerized orchestration with Podman and Docker, automated GitHub Actions CI/CD pipelines, and multi-region deployment topologies.",
    descAr:
      "تشغيل وإدارة الحاويات المعزولة عبر Podman و Docker، أتمتة دورات النشر بـ GitHub Actions، وإعداد بنية سحابية موزعة.",
    capabilitiesEn: [
      "Rootless container execution on Linux & WSL environments",
      "Automated secret scanning and environment hygiene gates",
      "Zero-downtime rolling updates with health probe validation",
      "Telemetry via Prometheus, Grafana, and structured logs",
    ],
    capabilitiesAr: [
      "تشغيل حاويات آمنة Rootless على بيئات Linux و WSL",
      "فحص أمني استباقي يمنع تسريب بيانات البيئة والمفاتيح",
      "تحديثات متزامنة بدون توقف مع فحص دوري لسلامة السيرفرات",
      "لوحات تحكم ومراقبة لحظية لمؤشرات الأداء والسجلات",
    ],
  },
  "database-systems": {
    titleEn: "Databases & Vector Storage",
    titleAr: "قواعد البيانات والمخازن الشعاعية الذكية",
    categoryEn: "Data Layer",
    categoryAr: "طبقة البيانات",
    descEn:
      "High-availability relational databases (PostgreSQL/MySQL) paired with semantic vector stores (Qdrant, Pinecone, Chroma) for hybrid AI memory.",
    descAr:
      "قواعد بيانات علائقية فائقة الاعتمادية (PostgreSQL/MySQL) مدمجة بمخازن شعاعية (Qdrant, Pinecone) لتمكين الذاكرة الدائمة للذكاء الاصطناعي.",
    capabilitiesEn: [
      "ACID transactional guarantees with automated read-replicas",
      "Vector indexing for multi-tenant similarity retrieval",
      "Automated incremental backups with point-in-time recovery",
      "Encrypted storage at rest and in transit (AES-256 / TLS 1.3)",
    ],
    capabilitiesAr: [
      "موثوقية المعاملات المالية والمحاسبية بنظام ACID",
      "فهرسة شعاعية سريعة لاسترجاع المعلومات المتشابهة بدقة",
      "نسخ احتياطي دوري آلي مع إمكانية استعادة البيانات لأي لحظة",
      "تشفير كامل للبيانات أثناء التخزين والنقل (AES-256 / TLS 1.3)",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(integrationsMap).map((slug) => ({ slug }))
}

export default function IntegrationSinglePage({ params }: { params: { slug: string } }) {
  const item = integrationsMap[params.slug]
  if (!item) return notFound()

  return (
    <section className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" /> العودة إلى التكاملات | Back to Integrations
          </Link>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300">
            {item.categoryEn} • {item.categoryAr}
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 gradient-text">
            {item.titleEn}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6" dir="rtl">
            {item.titleAr}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {item.descEn}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed" dir="rtl">
            {item.descAr}
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-slate-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md my-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
            <Layers className="h-5 w-5" /> Integration Capabilities | قدرات الربط والتكامل
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Technical Specs</p>
              <ul className="space-y-3">
                {item.capabilitiesEn.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div dir="rtl">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">المواصفات التقنية</p>
              <ul className="space-y-3">
                {item.capabilitiesAr.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-8 rounded-2xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800">
          <h4 className="text-xl font-bold mb-2">Need a Custom API or Protocol Bridge?</h4>
          <p className="text-sm text-muted-foreground mb-6">هل تحتاج إلى ربط مخصص مع أنظمتك القائمة؟ مهندسونا ينفذون التوافق البرمجي التام.</p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Connect with Engineers | اطلب استشارة تقنية <ArrowRight className="ms-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
