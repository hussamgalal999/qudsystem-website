"use client"

import Link from "next/link"
import { Shield, Bot, GraduationCap, Building2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const divisions = [
  {
    icon: Shield,
    href: "/products/dragon-security-suite",
    titleEn: "Cybersecurity",
    titleAr: "الأمن السيبراني",
    descEn: "Dragon R1 & B1, ProtectX, PenRate, Vision Guard",
    descAr: "دراجون R1 وB1 وProtectX وPenRate وفيجن جارد",
  },
  {
    icon: Bot,
    href: "/products/qudmind-aura",
    titleEn: "AI Agents & Tooling",
    titleAr: "وكلاء الذكاء الاصطناعي",
    descEn: "QudMind, Agent 3.5, Mimo Autonomous Agent",
    descAr: "QudMind وAgent 3.5 ووكيل ميمو المستقل",
  },
  {
    icon: GraduationCap,
    href: "/products/qudschool-qudemy-lms",
    titleEn: "EdTech Platforms",
    titleAr: "منصات التعليم",
    descEn: "QudSchool, Qudemy adaptive learning",
    descAr: "QudSchool وQudemy للتعلم التكيفي",
  },
  {
    icon: Building2,
    href: "/products/qud-office-ai",
    titleEn: "Enterprise & Office AI",
    titleAr: "المؤسسات وحزمة أوفيس AI",
    descEn: "Qud Office AI, QudSoft enterprise SaaS",
    descAr: "حزمة Qud Office AI وأنظمة QudSoft المؤسسية",
  },
]

export default function Divisions() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  return (
    <section id="divisions" dir={dir} className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-3">
          {isAr ? "منظومة واحدة، أربع قدرات" : "One Ecosystem, Four Capabilities"}
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          {isAr
            ? "كل منتجات QudSystem تتكامل في منظومة موحدة تمهّد لإطلاق حزمة Qud Office AI."
            : "Every QudSystem product integrates into one unified ecosystem, paving the way for Qud Office AI."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {divisions.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm transition hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-600"
            >
              <d.icon className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-lg mb-1">{isAr ? d.titleAr : d.titleEn}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{isAr ? d.descAr : d.descEn}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
