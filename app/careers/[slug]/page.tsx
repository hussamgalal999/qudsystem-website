import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react"

const jobs: Record<string, { title: string; titleAr: string; location: string; type: string; description: string; descriptionAr: string }> = {
  "senior-fullstack-developer": {
    title: "Senior Full-Stack Developer",
    titleAr: "مطور Full-Stack أول",
    location: "Cairo / Remote",
    type: "Full-time",
    description: "Join QudSystem as a Senior Full-Stack Developer. You will architect and build scalable web applications using React, Next.js, Node.js, and PostgreSQL. Experience with AI integration and cloud deployment is a plus.",
    descriptionAr: "انضم إلى QudSystem كمطور Full-Stack أول. ستقوم بتصميم وبناء تطبيقات ويب قابلة للتوسع باستخدام React و Next.js و Node.js و PostgreSQL.",
  },
  "ai-ml-engineer": {
    title: "AI/ML Engineer",
    titleAr: "مهندس ذكاء اصطناعي",
    location: "Minya / Remote",
    type: "Full-time",
    description: "Work on cutting-edge AI products including Qud Office AI. You will develop and fine-tune language models, build RAG pipelines, and integrate AI capabilities into enterprise software.",
    descriptionAr: "اعمل على منتجات ذكاء اصطناعي متطورة بما في ذلك Qud Office AI. ستقوم بتطوير وضبط نماذج اللغة وبناء أنابيب RAG.",
  },
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    titleAr: "محلل أمن سيبراني",
    location: "Cairo / Remote",
    type: "Full-time",
    description: "Protect QudSystem products and client infrastructure. Conduct penetration testing, vulnerability assessments, and security audits. Help build Dragon Security Suite.",
    descriptionAr: "احمِ منتجات QudSystem والبنية التحتية للعملاء. أجرِ اختبارات اختراق وتقييمات ثغرات وتدقيقات أمنية.",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = jobs[params.slug]
  if (!item) return {}
  return {
    title: `{item.title} | QudSystem`,
    description: item.description.slice(0, 155),
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://qudsystem.com"}/careers//${params.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(jobs).map((slug) => ({ slug }))
}

export default function CareerSinglePage({ params }: { params: { slug: string } }) {
  const job = jobs[params.slug]
  if (!job) return notFound()

  return (
    <section className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/careers" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Careers
        </Link>
        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
        <h2 className="text-2xl text-muted-foreground mb-4" dir="rtl">{job.titleAr}</h2>
        <div className="flex gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
          <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" />{job.type}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">{job.description}</p>
          <p className="text-lg leading-relaxed" dir="rtl">{job.descriptionAr}</p>
        </div>
        <a href="mailto:qudsystemltd@gmail.com" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now — qudsystemltd@gmail.com
        </a>
      </div>
    </section>
  )
}
