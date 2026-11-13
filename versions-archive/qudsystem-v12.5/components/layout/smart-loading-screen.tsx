"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import BrandLogo from "@/components/brand/brand-logo"
import { useLanguage } from "@/hooks/use-language"
import { translationService, type TranslationProgress } from "@/services/translation/translation-service"
import { Languages, CheckCircle } from "lucide-react"

export default function SmartLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [translationProgress, setTranslationProgress] = useState<TranslationProgress | null>(null)
  const [isTranslating, setIsTranslating] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const initializeApp = async () => {
      // Simulate initial loading
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // If language is not English, start translation process
      if (language !== "en") {
        setIsTranslating(true)

        // Get common texts that need translation
        const commonTexts = [
          "Welcome to QudSystem",
          "Creative Software Solutions",
          "Innovative software solutions for modern businesses",
          "Our Services",
          "Our Projects",
          "Contact Us",
          "About Us",
          "Get Started",
          "Learn More",
          "View All Projects",
        ]

        try {
          await translationService.translateMultiple(commonTexts, language, setTranslationProgress)
        } catch (error) {
          console.error("Translation initialization failed:", error)
        }

        setIsTranslating(false)
      }

      // Final delay before hiding loading screen
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    initializeApp()
  }, [language])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center max-w-md mx-4"
          >
            <div className="mb-6 scale-150">
              <BrandLogo size="lg" animated={true} />
            </div>

            {/* Main Progress Bar */}
            <motion.div
              className="h-1 w-48 bg-white/20 rounded-full overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width:
                    isTranslating && translationProgress
                      ? `${(translationProgress.completed / translationProgress.total) * 100}%`
                      : "100%",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Translation Status */}
            <AnimatePresence mode="wait">
              {isTranslating && translationProgress && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center text-white/90"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Languages className="h-4 w-4 animate-pulse" />
                    <span className="text-sm font-medium">
                      {language === "ar" ? "جاري الترجمة..." : "Translating..."}
                    </span>
                  </div>

                  <div className="text-xs opacity-75 max-w-xs">{translationProgress.currentText}</div>

                  <div className="text-xs mt-1">
                    {translationProgress.completed} / {translationProgress.total}
                  </div>
                </motion.div>
              )}

              {!isTranslating && language !== "en" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">{language === "ar" ? "تم التحميل!" : "Ready!"}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
