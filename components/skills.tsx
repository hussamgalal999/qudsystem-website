"use client"

import { motion } from "framer-motion"
import { Database, Layout, Palette, Server, Smartphone, Terminal, Shield, Cloud, Cpu } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Skills() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const skills = [
    {
      category: isAr ? "تطوير الويب" : "Web Development",
      icon: <Layout className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      items: ["React", "Next.js 14", "Vue.js", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      category: isAr ? "تطبيقات الموبايل" : "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
      items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"],
    },
    {
      category: isAr ? "الأنظمة الخلفية (Backend)" : "Backend Development",
      icon: <Server className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      items: ["Node.js", "Python", "FastAPI", "Django", ".NET", "Go"],
    },
    {
      category: isAr ? "قواعد البيانات" : "Database Solutions",
      icon: <Database className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "SQLite"],
    },
    {
      category: isAr ? "الحوسبة السحابية" : "Cloud Services",
      icon: <Cloud className="h-6 w-6 text-sky-600 dark:text-sky-400" />,
      items: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Vercel", "Netlify"],
    },
    {
      category: isAr ? "أتمتة النشر (DevOps)" : "DevOps & Automation",
      icon: <Terminal className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Linux"],
    },
    {
      category: isAr ? "تصميم الواجهات والتجربة" : "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      items: ["Figma", "Design Systems", "Prototyping", "RTL/LTR UX", "Accessibility"],
    },
    {
      category: isAr ? "الذكاء الاصطناعي والوكلاء" : "AI & Autonomous Agents",
      icon: <Cpu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      items: ["LangGraph", "MCP Servers", "RAG", "Computer Vision", "Ollama / LLMs"],
    },
    {
      category: isAr ? "الأمن السيبراني" : "Cybersecurity",
      icon: <Shield className="h-6 w-6 text-rose-600 dark:text-rose-400" />,
      items: ["Dragon R1 / B1", "Penetration Testing", "OWASP", "Encryption", "Zero-Trust"],
    },
  ]

  return (
    <section
      id="skills"
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
            {isAr ? "خبراتنا وتقنياتنا الهندسية" : "Our Technical Expertise"}
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {isAr
              ? "نوظف أحدث التقنيات العالمية في الويب، الذكاء الاصطناعي، السحابة، والأمن السيبراني لبناء منظومة QudSystem."
              : "We leverage modern web, AI agent, cloud, and cybersecurity stacks to power the QudSystem software ecosystem."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/75 border border-slate-200/80 dark:border-neutral-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-800">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 border border-slate-200/70 dark:border-neutral-700/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
