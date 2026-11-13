"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { translationService } from "@/services/translation/translation-service"

interface SmartTextProps {
  children: string
  translationKey?: string
  className?: string
  fallback?: string
}

export function SmartText({ children, translationKey, className, fallback }: SmartTextProps) {
  const { language, t } = useLanguage()
  const [translatedText, setTranslatedText] = useState<string>(children)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const translateContent = async () => {
      // Try static translation first
      if (translationKey) {
        const staticTranslation = t(translationKey)
        if (staticTranslation !== translationKey) {
          setTranslatedText(staticTranslation)
          return
        }
      }

      // If fallback provided, use it
      if (fallback) {
        const staticTranslation = t(fallback)
        if (staticTranslation !== fallback) {
          setTranslatedText(staticTranslation)
          return
        }
      }

      // If not English and no static translation, use AI
      if (language !== "en") {
        setIsLoading(true)
        try {
          const translated = await translationService.translateText(children, language)
          setTranslatedText(translated)
        } catch (error) {
          console.error("Translation failed:", error)
          setTranslatedText(children) // Fallback to original
        } finally {
          setIsLoading(false)
        }
      } else {
        setTranslatedText(children)
      }
    }

    translateContent()
  }, [children, language, translationKey, fallback, t])

  return (
    <span className={className}>
      {isLoading ? (
        <span className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded">{children}</span>
      ) : (
        translatedText
      )}
    </span>
  )
}
