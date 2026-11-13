"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, createElement } from "react"
import translations from "@/translations"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string, params?: Record<string, string>) => string
  dir: "ltr" | "rtl"
  supportedLanguages: { code: string; name: string; nativeName: string; flag: string; dir: "ltr" | "rtl" }[]
}

// Define supported languages with their properties
const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", dir: "ltr" as const },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇪🇬", dir: "rtl" as const },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" as const },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" as const },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" as const },
]

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  dir: "ltr",
  supportedLanguages,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en")
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("language")

    if (savedLanguage && supportedLanguages.some((lang) => lang.code === savedLanguage)) {
      setLanguageState(savedLanguage)
      const langDir = supportedLanguages.find((lang) => lang.code === savedLanguage)?.dir || "ltr"
      setDir(langDir)
      document.documentElement.dir = langDir
      document.documentElement.lang = savedLanguage
    } else {
      // Auto-detect language based on browser settings
      const browserLanguage = navigator.language.split("-")[0]
      const supportedLanguage = supportedLanguages.find((lang) => lang.code === browserLanguage)

      if (supportedLanguage) {
        setLanguageState(supportedLanguage.code)
        setDir(supportedLanguage.dir)
        document.documentElement.dir = supportedLanguage.dir
        document.documentElement.lang = supportedLanguage.code
      }
    }
  }, [])

  const setLanguage = (lang: string) => {
    const langObj = supportedLanguages.find((l) => l.code === lang)
    if (!langObj) return

    setLanguageState(lang)
    setDir(langObj.dir)
    localStorage.setItem("language", lang)

    // Update HTML attributes
    document.documentElement.dir = langObj.dir
    document.documentElement.lang = lang
  }

  // Translation function with parameter support
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".")
    let value = translations[language as keyof typeof translations] || translations.en

    // Navigate through nested keys
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k as keyof typeof value]
      } else {
        return key // Key not found
      }
    }

    if (typeof value !== "string") return key

    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce((str, [param, val]) => {
        return str.replace(new RegExp(`{{${param}}}`, "g"), val)
      }, value)
    }

    return value
  }

  return createElement(
    LanguageContext.Provider,
    {
      value: {
        language,
        setLanguage,
        t,
        dir,
        supportedLanguages,
      },
    },
    children
  )
}

export const useLanguage = () => useContext(LanguageContext)
