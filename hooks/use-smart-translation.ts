"use client"

import { useState, useCallback } from "react"
import { useLanguage } from "./use-language"
import { translationService, type TranslationProgress } from "@/services/translation/translation-service"

interface UseSmartTranslationReturn {
  t: (key: string, fallback?: string) => string
  translateText: (text: string) => Promise<string>
  isTranslating: boolean
  translationProgress: TranslationProgress | null
}

export function useSmartTranslation(): UseSmartTranslationReturn {
  const { language, t: staticT } = useLanguage()
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationProgress, setTranslationProgress] = useState<TranslationProgress | null>(null)

  const translateText = useCallback(
    async (text: string): Promise<string> => {
      if (language === "en") return text

      setIsTranslating(true)
      try {
        const translated = await translationService.translateText(text, language)
        return translated
      } finally {
        setIsTranslating(false)
      }
    },
    [language],
  )

  const t = useCallback(
    (key: string, fallback?: string): string => {
      // Try static translation first
      const staticTranslation = staticT(key)
      if (staticTranslation !== key) {
        return staticTranslation
      }

      // If no static translation and fallback provided, return fallback
      return fallback || key
    },
    [staticT],
  )

  return {
    t,
    translateText,
    isTranslating,
    translationProgress,
  }
}
