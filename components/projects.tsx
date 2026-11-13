"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function Projects() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const projects = isAr
    ? [
        {
          id: 1,
          title: "QudMind AI & Agent4",
          description:
            "منصة وكلاء الذكاء الاصطناعي المستقلة لتنسيق المهام والأتمتة الذكية ضمن منظومة QudSystem.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["وكلاء AI", "أتمتة", "Qud Office AI"],
          url: "https://github.com/Qudsystem/qudmind-ai",
          external: true,
        },
        {
          id: 2,
          title: "QudSchool & Qudemy LMS",
          description:
            "منظومة تعليمية رقمية متكاملة بالذكاء الاصطناعي لإدارة الدورات ومسارات التعلم التفاعلي.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["التعليم الرقمي", "LMS", "Next.js"],
          url: "https://github.com/Qudsystem/qudschool-lms",
          external: true,
        },
        {
          id: 3,
          title: "QudCV & PenRate Suite",
          description:
            "حزمة هندسة السيرة الذاتية وتقييم التوافق مع أنظمة التوظيف ATS وبناء ملفات الأعمال الاحترافية.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["السيرة الذاتية", "ATS", "AI"],
          url: "https://github.com/Qudsystem/qud-cv-penrate",
          external: true,
        },
        {
          id: 4,
          title: "Kenzy AI — Story Forge",
          description:
            "استوديو تأليف القصص التفاعلية المصورة والمسموعة بالذكاء الاصطناعي وتقنيات الصوت.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["ذكاء توليدي", "صوتيات", "قصص"],
          url: "https://github.com/Qudsystem/kenzy-ai",
          external: true,
        },
        {
          id: 5,
          title: "Adliya & BuildX & MyHowiya",
          description:
            "تطبيقات قطاع الأعمال: المساعد القانوني الذكي عدلية، منصة التصميم BuildX، ومحفظة الهوية الرقمية.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["تقنية قانونية", "هندسة", "أمن رقمي"],
          url: "https://github.com/Qudsystem",
          external: true,
        },
        {
          id: 6,
          title: "Qud Office AI (قريباً / قادم)",
          description:
            "الحزمة المكتبية الذكية الموحدة التي تجمع كل تطبيقات QudSystem في تجربة مدفوعة كاملة بدون إعلانات قريباً.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["قريباً", "بدون إعلانات", "Office AI"],
          url: "/qud-office-ai",
          external: false,
        },
      ]
    : [
        {
          id: 1,
          title: "QudMind AI & Agent4",
          description:
            "Autonomous multi-agent AI orchestration and workflow automation platform engineered by QudSystem.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["AI Agents", "Automation", "Qud Office AI"],
          url: "https://github.com/Qudsystem/qudmind-ai",
          external: true,
        },
        {
          id: 2,
          title: "QudSchool & Qudemy LMS",
          description:
            "Comprehensive AI-powered digital learning management system for courses and interactive skill pathways.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["EdTech", "LMS", "Next.js"],
          url: "https://github.com/Qudsystem/qudschool-lms",
          external: true,
        },
        {
          id: 3,
          title: "QudCV & PenRate Suite",
          description:
            "AI-driven ATS resume builder, CV scoring engine (PenRate), and interactive portfolio generator.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["Career Tech", "ATS Engine", "AI"],
          url: "https://github.com/Qudsystem/qud-cv-penrate",
          external: true,
        },
        {
          id: 4,
          title: "Kenzy AI — Story Forge",
          description:
            "Generative AI interactive storybook studio with visual scene crafting and voice narration.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["Creative AI", "Voice", "Storytelling"],
          url: "https://github.com/Qudsystem/kenzy-ai",
          external: true,
        },
        {
          id: 5,
          title: "Adliya & BuildX & MyHowiya",
          description:
            "Enterprise suite: Egyptian AI legal assistant Adliya, BuildX spatial renovation, and MyHowiya digital wallet.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["LegalTech", "PropTech", "Digital ID"],
          url: "https://github.com/Qudsystem",
          external: true,
        },
        {
          id: 6,
          title: "Qud Office AI (Coming Soon)",
          description:
            "Unified intelligent office suite connecting all QudSystem apps — with 100% ad-free paid plans coming soon.",
          image: "/placeholder.svg?height=600&width=800",
          tags: ["Coming Soon", "Ad-Free Plans", "Office AI"],
          url: "/qud-office-ai",
          external: false,
        },
      ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  }

  return (
    <section id="projects" dir={dir} className="py-20 bg-transparent relative overflow-hidden transition-colors">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {isAr ? "حزمة منتجات ومنصات QudSystem" : "QudSystem Software Suite & Products"}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {isAr
              ? "تشكيلة برمجية متكاملة من تقديم شركة QudSystem — متاحة بنسخ مفتوحة مع خانة إعلانية مركزية، ونسخ مدفوعة بدون إعلانات بالباقات قريباً."
              : "An integrated software suite by QudSystem — free editions feature a centralized ad slot, while upcoming Paid Plans deliver an ad-free complete experience."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/70 hover:shadow-xl transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="group">
                    {project.external ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {isAr ? "المستودع الرسمي" : "Official Repository"}
                        <ExternalLink className="mx-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link href={project.url}>
                        {isAr ? "استكشف التفاصيل" : "Explore Details"}
                        <ArrowRight className="mx-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              {isAr ? "عرض جميع المشاريع والحلول" : "View All Projects & Solutions"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
