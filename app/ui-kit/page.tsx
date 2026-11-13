"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function UiKitPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 bg-transparent">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        <div className="text-center space-y-3">
          <Badge variant="secondary">{isAr ? "نظام التصميم الموحد" : "Unified Design System"}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {isAr ? "مكونات ودليل واجهات QudSystem" : "QudSystem UI Kit & Style Guide"}
          </h1>
          <p className="text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {isAr
              ? "مكتبة المكونات الموحدة المستخلصة من إصدارات v09 وv10 وv12.5 مع استجابة كاملة للوضع الفاتح والداكن."
              : "Unified component library consolidated from v09, v10, and v12.5 with full Light & Dark mode support."}
          </p>
        </div>

        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="components">{isAr ? "البطاقات والأزرار" : "Cards & CTAs"}</TabsTrigger>
            <TabsTrigger value="faq">{isAr ? "الأسئلة الشائعة" : "Accordions & FAQ"}</TabsTrigger>
            <TabsTrigger value="tokens">{isAr ? "الألوان والخطوط" : "Theme Tokens"}</TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{isAr ? "بطاقة قياسية" : "Standard Surface Card"}</CardTitle>
                <CardDescription>
                  {isAr ? "تستجيب تلقائياً للوضع الفاتح والداكن مع Background Paths." : "Adapts automatically to Light/Dark themes over Background Paths."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/request-demo">{isAr ? "إجراء رئيسي" : "Primary CTA"}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing">{isAr ? "إجراء ثانوي" : "Secondary CTA"}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{isAr ? "الشارات والحالات" : "Badges & Status Pills"}</CardTitle>
                <CardDescription>{isAr ? "تمييز المراحل والباقات بوضوح." : "Clear visual hierarchy for tiers and releases."}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Active</Badge>
                <Badge variant="secondary">Qud Office AI</Badge>
                <Badge variant="outline">Ad-Free Pro</Badge>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq" className="mt-6 space-y-4">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6">
              <h3 className="font-semibold mb-2">
                {isAr ? "كيف تعمل الخانة الإعلانية والباقات المدفوعة؟" : "How do the ad slot and paid plans work?"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-neutral-300">
                {isAr
                  ? "النسخ المجانية تتصل بملف إعلانات مركزي قابل للتحديث، بينما توفر الباقات المدفوعة القادمة تجربة خالية تماماً من الإعلانات."
                  : "Free editions load announcements from a single central JSON feed, while upcoming Paid Plans remove all ads completely."}
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="tokens" className="mt-6">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-6">
              <p className="text-sm text-slate-600 dark:text-neutral-300">
                {isAr
                  ? "نظام الألوان يعتمد على متغيرات Tailwind الدلالية مع شفافية متوازنة لتدفق Background Paths بسلاسة."
                  : "Color tokens rely on semantic Tailwind variables with balanced glass translucency over the flowing Background Paths."}
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
