"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"


export default function PasswordResetPage() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [sent, setSent] = useState(false)

  return (
    <div dir={dir} className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-transparent px-4">
      <Card className="w-full max-w-md bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border-slate-200 dark:border-neutral-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isAr ? "استعادة كلمة المرور" : "Reset Password"}
          </CardTitle>
          <CardDescription>
            {isAr
              ? "أدخل بريدك الإلكتروني لإرسال رابط إعادة تعيين كلمة المرور."
              : "Enter your email address to receive a password reset link."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {sent ? (
            <p className="text-sm text-center text-emerald-600 dark:text-emerald-400">
              {isAr ? "تم إرسال رابط الاستعادة إلى بريدك الإلكتروني." : "Reset link sent to your email."}
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-4"
            >
              <Input type="email" required placeholder={isAr ? "البريد الإلكتروني" : "Email address"} />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {isAr ? "إرسال رابط الاستعادة" : "Send Reset Link"}
              </Button>
            </form>
          )}
          <div className="text-center text-xs">
            <Link href="/login" className="text-blue-600 dark:text-blue-400 underline">
              {isAr ? "العودة لتسجيل الدخول" : "Back to Sign In"}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
