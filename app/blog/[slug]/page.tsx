import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const articles: Record<string, { title: string; titleAr: string; date: string; content: string; contentAr: string }> = {
  "ai-transformation-2025": {
    title: "AI Transformation in Enterprise Software – 2025 Outlook",
    titleAr: "التحول بالذكاء الاصطناعي في برمجيات المؤسسات – نظرة 2025",
    date: "2025-01-15",
    content: "Artificial intelligence is reshaping how companies build, deploy, and maintain software at scale. QudSystem is at the forefront with integrated AI pipelines that combine code generation, automated testing, and intelligent monitoring.",
    contentAr: "يُعيد الذكاء الاصطناعي تشكيل الطريقة التي تبني بها الشركات البرمجيات. تتصدر QudSystem هذا التحول بأنابيب ذكاء اصطناعي متكاملة تجمع بين توليد الكود والاختبار الآلي والمراقبة الذكية.",
  },
  "cybersecurity-best-practices": {
    title: "Cybersecurity Best Practices for Startups",
    titleAr: "أفضل ممارسات الأمن السيبراني للشركات الناشئة",
    date: "2025-02-20",
    content: "Security cannot be an afterthought. This guide covers the essential steps every startup should take to protect their digital assets, from secure coding practices to penetration testing.",
    contentAr: "الأمن السيبراني لا يمكن أن يكون فكرة لاحقة. يغطي هذا الدليل الخطوات الأساسية التي يجب على كل شركة ناشئة اتخاذها لحماية أصولها الرقمية.",
  },
  "qud-office-ai-preview": {
    title: "Qud Office AI — A First Look at the Upcoming Suite",
    titleAr: "Qud Office AI — نظرة أولى على الحزمة القادمة",
    date: "2025-03-10",
    content: "We are building Qud Office AI, a comprehensive productivity suite powered by AI agents. From intelligent document editing to automated workflow orchestration, here is what to expect.",
    contentAr: "نحن نبني Qud Office AI، حزمة إنتاجية شاملة مدعومة بوكلاء ذكاء اصطناعي. من تحرير المستندات الذكي إلى تنظيم سير العمل الآلي.",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = articles[params.slug]
  if (!item) return {}
  return {
    title: `{item.title} | QudSystem`,
    description: item.content.slice(0, 155),
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://qudsystem.com"}/blog//${params.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default function BlogSinglePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  if (!article) return notFound()

  return (
    <section className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <time className="text-sm text-muted-foreground">{article.date}</time>
        <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8" dir="rtl">{article.titleAr}</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">{article.content}</p>
          <p className="text-lg leading-relaxed" dir="rtl">{article.contentAr}</p>
        </div>
      </div>
    </section>
  )
}
