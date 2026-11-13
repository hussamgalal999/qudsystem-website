"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTheme } from "@/hooks/use-theme"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { useScroll } from "@/hooks/use-scroll"

function FloatingPaths({
  position,
  colorScheme,
  direction = "horizontal",
  scrollProgress = 0,
}: {
  position: number
  colorScheme: "blue" | "purple" | "teal" | "amber" | "pink"
  direction?: "horizontal" | "vertical"
  scrollProgress?: number
}) {
  // Define color schemes for different path variations
  const colorVariants = {
    blue: {
      light: "rgba(59, 130, 246, 0.08)",
      dark: "rgba(59, 130, 246, 0.12)",
      gradient: "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))",
    },
    purple: {
      light: "rgba(139, 92, 246, 0.08)",
      dark: "rgba(139, 92, 246, 0.12)",
      gradient: "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.2))",
    },
    teal: {
      light: "rgba(20, 184, 166, 0.08)",
      dark: "rgba(20, 184, 166, 0.12)",
      gradient: "linear-gradient(to right, rgba(20, 184, 166, 0.2), rgba(13, 148, 136, 0.2))",
    },
    amber: {
      light: "rgba(245, 158, 11, 0.08)",
      dark: "rgba(245, 158, 11, 0.12)",
      gradient: "linear-gradient(to right, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.2))",
    },
    pink: {
      light: "rgba(236, 72, 153, 0.08)",
      dark: "rgba(236, 72, 153, 0.12)",
      gradient: "linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.2))",
    },
  }

  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const { isRTL } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const colorBase = mounted
    ? resolvedTheme === "dark"
      ? colorVariants[colorScheme].dark
      : colorVariants[colorScheme].light
    : colorVariants[colorScheme].light

  // Generate different path patterns based on direction
  const generatePath = (i: number) => {
    const scrollOffset = scrollProgress * 100 * (i % 2 === 0 ? 1 : -1)

    if (direction === "horizontal") {
      return `M-${380 - i * 5 * position + scrollOffset} -${189 + i * 6 - scrollOffset / 2}C-${
        380 - i * 5 * position + scrollOffset
      } -${189 + i * 6 - scrollOffset / 2} -${312 - i * 5 * position + scrollOffset} ${216 - i * 6 - scrollOffset / 3} ${
        152 - i * 5 * position + scrollOffset
      } ${343 - i * 6 - scrollOffset / 2}C${616 - i * 5 * position + scrollOffset} ${470 - i * 6 - scrollOffset / 4} ${
        684 - i * 5 * position + scrollOffset
      } ${875 - i * 6 - scrollOffset / 5} ${684 - i * 5 * position + scrollOffset} ${875 - i * 6 - scrollOffset / 5}`
    } else {
      // Vertical path pattern with scroll adjustment
      return `M${189 + i * 6 + scrollOffset / 2} -${380 - i * 5 * position + scrollOffset}C${189 + i * 6 + scrollOffset / 2} -${
        380 - i * 5 * position + scrollOffset
      } ${216 - i * 6 + scrollOffset / 3} -${312 - i * 5 * position + scrollOffset} ${343 - i * 6 + scrollOffset / 2} ${
        152 - i * 5 * position + scrollOffset
      }C${470 - i * 6 + scrollOffset / 3} ${616 - i * 5 * position + scrollOffset} ${875 - i * 6 + scrollOffset / 4} ${
        684 - i * 5 * position + scrollOffset
      } ${875 - i * 6 + scrollOffset / 4} ${684 - i * 5 * position + scrollOffset}`
    }
  }

  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: generatePath(i),
    color: colorBase,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-primary" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        <defs>
          <linearGradient id={`gradient-${colorScheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`var(--${colorScheme}-500)`} stopOpacity="0.2" />
            <stop offset="100%" stopColor={`var(--${colorScheme}-600)`} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#gradient-${colorScheme})`}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [scrollProgress * 0.2, 1 + scrollProgress * 0.2, scrollProgress * 0.2],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function PageBackground() {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  // Choose color scheme based on path
  let colorScheme: "blue" | "purple" | "teal" | "amber" | "pink" = "blue"

  if (pathname.startsWith("/projects")) {
    colorScheme = "purple"
  } else if (pathname.startsWith("/services")) {
    colorScheme = "teal"
  } else if (pathname.startsWith("/contact")) {
    colorScheme = "amber"
  } else if (pathname.startsWith("/pleasures")) {
    colorScheme = "pink"
  }

  // Don't show on home page
  if (pathname === "/") {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-3xl" />
      <FloatingPaths position={1} colorScheme={colorScheme} scrollProgress={scrollYProgress} />
      <FloatingPaths position={-1} colorScheme={colorScheme} scrollProgress={scrollYProgress} />

      {/* Add vertical paths for more visual interest */}
      <FloatingPaths position={0.5} colorScheme={colorScheme} direction="vertical" scrollProgress={scrollYProgress} />

      {/* Add animated bottom lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-current to-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, var(--${colorScheme}-500), transparent)`,
            x: `${-100 + scrollYProgress * 50}%`,
          }}
          animate={{
            x: [`${-100 + scrollYProgress * 100}%`, `${100 + scrollYProgress * 100}%`],
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
