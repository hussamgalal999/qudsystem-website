"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"


export default function RequestDemoPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800 shadow-sm">
          <CardHeader className="text-center space-y-2">
            <h1 className="text-3xl font-bold">
              {isAr ? "طلب عرض توضيحي وحجز أولوية Qud Office AI" : "Request a Demo & Qud Office AI Early Access"}
            </h1>
            <CardDescription>
              {isAr
                ? "احجز جلسة استشارية أو اطلب تفعيل الباقة المدفوعة بدون إعلانات لفريقك."
                : "Schedule a live walkthrough or reserve ad-free Paid Plans for your organization."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {sent ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg">
                  {isAr ? "تم استلام طلبك بنجاح!" : "Demo Request Received!"}
                </h3>
                <p className="text-sm text-slate-600 dark:text-neutral-300">
                  {isAr
                    ? "سيتواصل معك فريق QudSystem قريباً عبر qudsystemltd@gmail.com أو +20 011 518 580 57."
                    : "Our team will contact you shortly via qudsystemltd@gmail.com or +20 011 518 580 57."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input required placeholder={isAr ? "الاسم الكامل" : "Full Name"} />
                  <Input required type="email" placeholder={isAr ? "البريد الإلكتروني" : "Work Email"} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder={isAr ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"} />
                  <Input placeholder={isAr ? "اسم الشركة أو المؤسسة" : "Company / Organization"} />
                </div>
                <Textarea
                  rows={4}
                  placeholder={
                    isAr
                      ? "ما المنتجات التي تهمك؟ (مثل: Qud Office AI، QudMind، QudSchool، Dragon R1)"
                      : "Which QudSystem products are you interested in? (e.g. Qud Office AI, QudMind, QudSchool)"
                  }
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  {isAr ? "إرسال طلب العرض التوضيحي" : "Submit Demo Request"}
                </Button>
              </form>
            )}
            <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-slate-200 dark:border-neutral-800 text-xs text-slate-600 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" /> qudsystemltd@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> +20 011 518 580 57
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
