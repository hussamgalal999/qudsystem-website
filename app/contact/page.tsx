"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Loader2, CheckCircle, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/hooks/use-language"

export default function ContactPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const projectTypes = isAr
    ? ["تطبيقات ويب وسحابية", "تطبيقات جوال", "حلول ذكاء اصطناعي ووكلاء", "أمن سيبراني واختبار اختراق", "حزمة Qud Office AI", "أخرى"]
    : ["Web Application", "Mobile App", "AI & Autonomous Agents", "Cybersecurity & Auditing", "Qud Office AI Suite", "Other"]

  const budgetRanges = isAr
    ? ["أقل من 5,000 دولار", "5,000 - 15,000 دولار", "15,000 - 50,000 دولار", "أكثر من 50,000 دولار"]
    : ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"]

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent text-slate-900 dark:text-slate-100 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 text-xs font-semibold mb-4">
            {isAr ? "مقر شركة QudSystem — المنيا والقاهرة" : "QudSystem Headquarters — Minya & Cairo"}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            {isAr ? "تواصل مع فريقنا الهندسي" : "Get in Touch with Our Engineers"}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            {isAr
              ? "هل لديك متطلبات برمجية محددة أو ترغب بتطوير حلول ذكاء اصطناعي ومواقع مؤسسية؟ فريقنا جاهز للتنفيذ بأعلى المعايير."
              : "Have a project in mind or want to explore custom AI agents and enterprise software? Our engineering team is ready to assist."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-neutral-900/80 border-slate-200 dark:border-neutral-800 shadow-sm">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isAr ? "المقر الرئيسي المعتمد" : "Headquarters"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-neutral-300 mt-1">
                      {isAr
                        ? "كورنيش النيل، ثان المنيا، محافظة المنيا، مصر"
                        : "Corniche El Nile, Minya, Egypt"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isAr ? "البريد الإلكتروني الرسمي" : "Official Email"}
                    </h3>
                    <a
                      href="mailto:qudsystemltd@gmail.com"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 block"
                      dir="ltr"
                    >
                      qudsystemltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isAr ? "الهاتف وواتساب المباشر" : "Direct Phone & WhatsApp"}
                    </h3>
                    <a
                      href="tel:+201151858057"
                      className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-1 block font-mono"
                      dir="ltr"
                    >
                      +20 011 518 580 57
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {isAr ? "ساعات العمل الرسمية" : "Business Hours"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-neutral-300 mt-1">
                      {isAr
                        ? "الأحد - الخميس: 8:30 ص - 5:00 م (توقيت القاهرة)"
                        : "Sun - Thu: 8:30 AM - 5:00 PM EET"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Embedded Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 h-64 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.044496167724!2d30.748742376944172!3d28.119444182620317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b24f89f2f9961%3A0x7ddb9d9d1e7c2db9!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiDYqNin2YTZhdmG2YrYpw!5e0!3m2!1sen!2seg!4v1709669498874!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="مقر شركة كود سيستم - المنيا"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-neutral-900/80 border-slate-200 dark:border-neutral-800 shadow-sm">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {isAr ? "تم استلام رسالتك بنجاح!" : "Message Received Successfully!"}
                    </h3>
                    <p className="text-slate-600 dark:text-neutral-300 max-w-md mx-auto">
                      {isAr
                        ? "شكراً لتواصلك مع QudSystem. سيقوم أحد مهندسينا بمراجعة متطلباتك والرد عليك في أقرب وقت."
                        : "Thank you for reaching out to QudSystem. An engineer will review your inquiry and follow up shortly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "الاسم الكريم *" : "Full Name *"}
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={isAr ? "مثال: م. أحمد ناصر" : "e.g. John Doe"}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "البريد الإلكتروني *" : "Email Address *"}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          required
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "رقم الهاتف / واتساب" : "Phone Number / WhatsApp"}
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+20 123 456 7890"
                          dir="ltr"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "اسم الشركة أو المؤسسة" : "Company Name"}
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={isAr ? "شركة أو جهة العمل" : "Organization name"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "نوع المشروع أو الخدمة" : "Project Type"}
                        </label>
                        <Select onValueChange={(val) => handleSelectChange("projectType", val)}>
                          <SelectTrigger>
                            <SelectValue placeholder={isAr ? "اختر نوع الخدمة" : "Select service type"} />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((t, idx) => (
                              <SelectItem key={idx} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {isAr ? "الميزانية المتوقعة" : "Budget Range"}
                        </label>
                        <Select onValueChange={(val) => handleSelectChange("budget", val)}>
                          <SelectTrigger>
                            <SelectValue placeholder={isAr ? "اختر نطاق الميزانية" : "Select budget"} />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((b, idx) => (
                              <SelectItem key={idx} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900 dark:text-slate-200">
                        {isAr ? "تفاصيل المتطلبات والرسالة *" : "Project Requirements & Message *"}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={
                          isAr
                            ? "صف لنا فكرة مشروعك، المميزات الأساسية المطلوبة، وأي جدول زمني مقترح..."
                            : "Describe your project vision, key requirements, and expected timeline..."
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mx-2 h-5 w-5 animate-spin" />
                          {isAr ? "جاري الإرسال..." : "Sending..."}
                        </>
                      ) : (
                        isAr ? "إرسال الطلب إلى الفريق الهندسي" : "Submit Request to Engineering Team"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
