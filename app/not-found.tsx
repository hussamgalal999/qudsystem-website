"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export default function NotFound() {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  return (
    <div dir={dir} className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
      <h1 className="text-6xl font-bold mb-4 text-slate-900 dark:text-white">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
        {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
      </h2>
      <p className="text-slate-600 dark:text-neutral-400 text-center max-w-md mb-8">
        {isAr
          ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مسار آخر."
          : "The page you are looking for doesn't exist or has been moved."}
      </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
        <Link href="/">{isAr ? "العودة إلى الرئيسية" : "Return Home"}</Link>
      </Button>
    </div>
  )
}
