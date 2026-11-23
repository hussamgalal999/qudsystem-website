"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Layout, Smartphone, Server, Cpu, Cloud } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"


export default function ServicesPage() {
  const { language, dir, t } = useLanguage()
  const isAr = language === "ar"

  const services = [
    {
      id: 1,
      title: isAr ? "تطوير تطبيقات الويب" : "Web Development",
      description: isAr
        ? "تطبيقات ويب مخصصة ومواقع متجاوبة مبنية بأحدث التقنيات."
        : "Custom web applications and responsive websites built with modern technologies.",
      icon: <Layout className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      technologies: ["React", "Next.js 14", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: isAr ? "تطوير تطبيقات الموبايل" : "Mobile Development",
      description: isAr
        ? "تطبيقات أصلية ومتعددة المنصات لأنظمة iOS و Android وتطبيقات PWA."
        : "Native and cross-platform mobile applications for iOS, Android, and PWA.",
      icon: <Smartphone className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "PWA"],
    },
    {
      id: 3,
      title: isAr ? "تطوير الأنظمة الخلفية و APIs" : "Backend & API Engineering",
      description: isAr
        ? "أنظمة خلفية آمنة وقابلة للتوسع وواجهات برمجة تطبيقات عالية الأداء."
        : "Scalable and secure backend systems and high-throughput APIs.",
      icon: <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      technologies: ["Node.js", "Python", "FastAPI", ".NET", "Go"],
    },
    {
      id: 4,
      title: isAr ? "حلول قواعد البيانات" : "Database Solutions",
      description: isAr
        ? "تصميم وهندسة وتحسين قواعد البيانات لأعلى سرعة واعتمادية."
        : "Database architecture, optimization, and high-availability management.",
      icon: <Database className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    },
    {
      id: 5,
      title: isAr ? "الحوسبة السحابية و DevOps" : "Cloud & DevOps",
      description: isAr
        ? "إعداد البنية السحابية والترحيل وأتمتة النشر المستمر."
        : "Cloud infrastructure setup, migration, and CI/CD automation.",
      icon: <Cloud className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Vercel"],
    },
    {
      id: 6,
      title: isAr ? "الذكاء الاصطناعي والوكلاء" : "AI & Autonomous Agents",
      description: isAr
        ? "حلول ذكاء اصطناعي مخصصة، وكلاء أتمتة، وأنظمة RAG متقدمة."
        : "Custom AI agents, LLM orchestration, RAG pipelines, and computer vision.",
      icon: <Cpu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      technologies: ["LangGraph", "MCP", "PyTorch", "NLP", "Computer Vision"],
    },
  ]

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            {t("services.title")}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">{t("services.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="h-full flex flex-col justify-between bg-white/80 dark:bg-neutral-900/75 border-slate-200/80 dark:border-neutral-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader>
                <div className="p-2.5 w-fit rounded-xl bg-slate-100 dark:bg-neutral-800 mb-3">{service.icon}</div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-neutral-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/request-demo">
                    {t("services.getInTouch")}
                    <ArrowRight className="mx-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
