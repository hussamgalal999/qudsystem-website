"use client"

import { usePathname } from "next/navigation"
import { useScroll } from "@/hooks/use-scroll"
import BrandPaths from "@/components/brand/brand-paths"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { useState, useEffect } from "react"

export default function BrandBackground() {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Choose color scheme based on path
  let colorScheme: "primary" | "secondary" | "accent" = "primary"

  if (pathname.startsWith("/projects")) {
    colorScheme = "secondary"
  } else if (pathname.startsWith("/services") || pathname.startsWith("/contact")) {
    colorScheme = "accent"
  }

  // Don't show on home page
  if (pathname === "/") {
    return null
  }

  // Theme-aware background color
  const bgColor = mounted && resolvedTheme === "dark" ? "bg-neutral-950/50" : "bg-white/50"

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${bgColor} backdrop-blur-md`} />

      {/* Main brand paths */}
      <BrandPaths position={1} colorScheme={colorScheme} intensity={1.2} />
      <BrandPaths position={-1} colorScheme={colorScheme} intensity={1.2} />

      {/* Add vertical paths for more visual interest */}
      <div className="rotate-90 origin-center">
        <BrandPaths position={0.5} colorScheme={colorScheme} intensity={0.9} />
      </div>

      {/* Add animated bottom line with brand gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            backgroundImage:
              mounted && resolvedTheme === "dark"
                ? "linear-gradient(to right, transparent, var(--blue-400), var(--purple-400), var(--pink-400), transparent)"
                : "linear-gradient(to right, transparent, var(--blue-500), var(--purple-500), var(--pink-500), transparent)",
            translateX: `${-100 + scrollYProgress * 50}%`,
          }}
          animate={{
            translateX: [`${-100 + scrollYProgress * 100}%`, `${100 + scrollYProgress * 100}%`],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}
