"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  FileText,
  Table,
  Presentation,
  Mail,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/hooks/use-language"

export default function QudOfficeAiBanner() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const modules = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: isAr ? "محرر مستندات Qud Docs AI" : "Qud Docs AI",
      desc: isAr
        ? "كتابة ذكية وصياغة فورية للمستندات والتقارير مع التلخيص وتوليد الأفكار بالعربية والإنجليزية."
        : "Neural writing assistant for reports, contracts & articles with deep bilingual synthesis.",
      tag: isAr ? "مستندات ذكية" : "Smart Docs",
    },
    {
      icon: <Table className="h-6 w-6 text-emerald-500" />,
      title: isAr ? "جداول بيانات Qud Sheets AI" : "Qud Sheets AI",
      desc: isAr
        ? "تحليل بيانات فوري ومعادلات ذكية وتنبؤات مالية عبر الأوامر النصية الطبيعية دون تعقيد."
        : "Natural language formula generator, automated reconciliations, and predictive analytics.",
      tag: isAr ? "جداول متقدمة" : "Intelligent Sheets",
    },
    {
      icon: <Presentation className="h-6 w-6 text-amber-500" />,
      title: isAr ? "عروض تقديمية Qud Slides AI" : "Qud Slides AI",
      desc: isAr
        ? "تصميم عروض تقديمية تفاعلية جذابة في ثوانٍ مع توليد المحتوى البصري والرسوم البيانية."
        : "Instant agentic slide decks, visual theme adaptation, and automated chart generation.",
      tag: isAr ? "عروض احترافية" : "Agentic Decks",
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-500" />,
      title: isAr ? "بريد ذكي Qud Mail & Triage" : "Qud Mail & Triage",
      desc: isAr
        ? "إدارة مراسلات الشركات وتصنيف الأولويات وصياغة الردود الرسمية بلمسة زر واحدة."
        : "Automated business inbox triage, draft polishing, and calendar sync powered by AI.",
      tag: isAr ? "بريد مؤسسي" : "Smart Inbox",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-500" />,
      title: isAr ? "خزينة المعرفة Qud Vault AI" : "Qud Knowledge Vault",
      desc: isAr
        ? "محرك بحث دلالي عبر جميع ملفات المؤسسة وقاعدة المعرفة مع تشفير كامل وأمان عالي."
        : "Enterprise-grade semantic retrieval (RAG) across all company documents with zero data leak.",
      tag: isAr ? "أمان ومعرفة" : "Private Vault",
    },
    {
      icon: <Zap className="h-6 w-6 text-rose-500" />,
      title: isAr ? "أتمتة الأعمال Qud Flow Orchestrator" : "Qud Flow Orchestrator",
      desc: isAr
        ? "ربط مهام المكتب تلقائياً بين المستندات، الجداول، ورسائل البريد دون الحاجة لأي برمجة."
        : "Seamless multi-app automations connecting documents, spreadsheets, and team approvals.",
      tag: isAr ? "أتمتة شاملة" : "No-Code Workflows",
    },
  ]

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      toast({
        title: isAr ? "يرجى إدخال بريد إلكتروني صحيح" : "Invalid email address",
        description: isAr
          ? "تأكد من كتابة بريدك الإلكتروني بشكل سليم للحصول على الدعوة المبكرة."
          : "Please provide a valid email to receive your early access invite.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      try {
        localStorage.setItem("qud_office_ai_waitlist", email)
      } catch (err) {}
      toast({
        title: isAr ? "تم التسجيل بنجاح في قائمة الانتظار! 🎉" : "Successfully Joined the Waitlist! 🎉",
        description: isAr
          ? "ستكون أول من يجرب حزمة Qud Office AI مع اشتراك تجريبي مجاني فور الإطلاق."
          : "You will be among the first to experience Qud Office AI Suite with free trial perks.",
      })
    }, 700)
  }

  return (
    <section
      id="qud-office-ai"
      dir={dir}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-neutral-900 via-indigo-950 to-neutral-950 text-white"
    >
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Badge
              variant="outline"
              className="px-3.5 py-1 text-xs font-semibold bg-blue-500/10 border-blue-400/30 text-blue-300 backdrop-blur-md"
            >
              <Clock className="h-3.5 w-3.5 mr-1.5 inline text-blue-400" />
              {isAr ? "قريباً / قادم رسميـاً" : "Coming Soon / Flagship Release"}
            </Badge>
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-200 border-purple-400/30"
            >
              <Sparkles className="h-3 w-3 mr-1 inline text-purple-300" />
              {isAr ? "الحزمة البرمجية الرائدة" : "Next-Gen AI Suite"}
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
          >
            {isAr ? "حزمة Qud Office AI" : "Qud Office AI Suite"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-300 leading-relaxed"
          >
            {isAr
              ? "بيئة العمل المكتبية الذكية الموحدة من كود سيستم — تجمع بين المستندات، الجداول التفاعلية، العروض التقديمية الذاتية، وخزينة المعرفة في منصة سحابية واحدة مصممة للشركات وفرق العمل الحديثة."
              : "The all-in-one unified intelligent workspace by QudSystem — bringing together neural documents, smart spreadsheets, agentic presentations, and enterprise knowledge in one cohesive cloud ecosystem."}
          </motion.p>
        </div>

        {/* 6 Feature Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="h-full bg-white/[0.04] border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-md group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      {m.icon}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/5">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm text-neutral-300/80 leading-relaxed mt-auto">{m.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Waitlist Box & 100% Ad-Free Paid Tier Disclosure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 md:p-10 bg-gradient-to-r from-blue-950/60 via-indigo-950/80 to-purple-950/60 border border-blue-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {isAr ? "وصول مبكر مجاني + مزايا حصرية" : "Free Early Access + Beta Perks"}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                {isAr ? "احجز مقعدك في الوصول المبكر لـ Qud Office AI" : "Reserve Your Early Access to Qud Office AI"}
              </h3>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-4">
                {isAr
                  ? "سجّل بريدك الإلكتروني الآن لتكون في طليعة الفرق المستفيدة من الحزمة الذكية فور إطلاقها، مع باقة تجريبية شاملة لكافة الأدوات."
                  : "Register your email now to be among the first organizations to deploy Qud Office AI, with comprehensive beta access and onboarding."}
              </p>

              {/* Transparent Ad-Free Paid Tier Promise */}
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-3 text-xs text-blue-200">
                <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {isAr ? (
                    <>
                      <strong>تنويه تجربة الاستخدام:</strong> تتوفر أدواتنا العامة مجاناً مع إعلانات بيئية داخلية خفيفة.{" "}
                      <span className="text-emerald-300 font-semibold">
                        جميع الخطط والاشتراكات المدفوعة (قريباً) ستكون خالية تماماً بنسبة 100% من أي إعلانات
                      </span>
                      ، مع دعم فني مخصص وأعلى معايير الخصوصية المؤسسية.
                    </>
                  ) : (
                    <>
                      <strong>Experience Notice:</strong> Our free public tools may display lightweight ecosystem slots.{" "}
                      <span className="text-emerald-300 font-semibold">
                        All upcoming Paid Plans will be 100% ad-free across every app and tool
                      </span>
                      , with dedicated priority support and enterprise privacy guarantees.
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">
                    {isAr ? "تم تسجيلك في قائمة الانتظار بنجاح!" : "You're on the list!"}
                  </h4>
                  <p className="text-xs text-neutral-300">
                    {isAr
                      ? "سنرسل لك رابط الوصول التجريبي المباشر على بريدك الإلكتروني قريباً."
                      : "We'll send your exclusive access invitation as soon as the beta opens."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isAr ? "أدخل بريدك الإلكتروني المؤسسي..." : "Enter your work email..."}
                      className="bg-neutral-900/80 border-white/20 text-white placeholder:text-neutral-400 focus-visible:ring-blue-500"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 shadow-lg shadow-blue-600/30 whitespace-nowrap"
                    >
                      {isLoading ? (isAr ? "جاري التسجيل..." : "Joining...") : isAr ? "انضم الآن" : "Join Waitlist"}
                      <ArrowRight className={`h-4 w-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
                    </Button>
                  </div>
                  <p className="text-[11px] text-neutral-400 text-center">
                    {isAr ? "🔒 نحترم خصوصيتك بالكامل. بدون رسائل مزعجة إطلاقاً." : "🔒 Zero spam. We strictly protect your privacy."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
