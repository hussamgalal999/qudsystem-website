"use client"

import { useEffect, useState } from "react"
import { useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle theme change transitions
  const changeTheme = (newTheme: string) => {
    setIsTransitioning(true)
    setTheme(newTheme)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }

  // Auto-detect system preference changes
  useEffect(() => {
    setMounted(true)

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        // Force a re-render when system preference changes
        setMounted(false)
        setTimeout(() => setMounted(true), 0)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  return {
    theme,
    resolvedTheme: mounted ? resolvedTheme : "light",
    systemTheme: mounted ? systemTheme : "light",
    setTheme: changeTheme,
    isTransitioning,
    isDark: mounted && resolvedTheme === "dark",
    isLight: mounted && resolvedTheme === "light",
    mounted,
  }
}
