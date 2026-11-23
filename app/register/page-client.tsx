"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"


export default function RegisterPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-slate-50 dark:bg-neutral-950 px-4">
      <Card className="w-full max-w-md bg-white dark:bg-neutral-900 border-slate-200 dark:border-neutral-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isAr ? "إنشاء حساب QudSystem" : "Create QudSystem Account"}
          </CardTitle>
          <CardDescription>
            {isAr ? "انضم إلى منظومة QudSystem وحزمة Qud Office AI." : "Join the QudSystem & Qud Office AI ecosystem."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder={isAr ? "الاسم الكامل" : "Full Name"} />
          <Input type="email" placeholder={isAr ? "البريد الإلكتروني" : "Email address"} />
          <Input type="password" placeholder={isAr ? "كلمة المرور" : "Password"} />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {isAr ? "إنشاء الحساب" : "Create Account"}
          </Button>
          <p className="text-center text-xs text-slate-600 dark:text-neutral-400">
            {isAr ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
            <Link href="/login" className="text-blue-600 dark:text-blue-400 underline">
              {isAr ? "تسجيل الدخول" : "Sign In"}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
