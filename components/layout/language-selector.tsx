"use client"

import { useState, useEffect } from "react"
import { Check, Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSelector() {
  const { language, setLanguage, supportedLanguages } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-1 h-9">
        <Globe className="h-4 w-4" />
        <span className="sr-only">Select language</span>
      </Button>
    )
  }

  const currentLanguage = supportedLanguages.find((lang) => lang.code === language) || supportedLanguages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 h-9">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{currentLanguage.flag}</span>
          <span className="hidden md:inline-block">{currentLanguage.nativeName}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <AnimatePresence mode="wait">
          {supportedLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </span>
              {lang.code === language && (
                <motion.span
                  layoutId="language-check"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="h-4 w-4" />
                </motion.span>
              )}
            </DropdownMenuItem>
          ))}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
