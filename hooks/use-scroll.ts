"use client"

import { useState, useEffect } from "react"
import { createOptimizedScrollHandler } from "@/utils/performance-optimizations"

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    const handleScroll = createOptimizedScrollHandler((scrollY, progress) => {
      setScrollY(scrollY)
      setScrollYProgress(progress)
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize values

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollY, scrollYProgress }
}
