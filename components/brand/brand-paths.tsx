"use client"

import { motion } from "framer-motion"
import { useScroll } from "@/hooks/use-scroll"
import { useTheme } from "@/hooks/use-theme"
import { useState, useEffect, memo } from "react"

interface BrandPathsProps {
  position?: number
  variant?: "default" | "hero" | "footer"
  colorScheme?: "primary" | "secondary" | "accent"
  intensity?: number
  className?: string
}

function BrandPaths({
  position = 1,
  variant = "default",
  colorScheme = "primary",
  intensity = 1,
  className = "",
}: BrandPathsProps) {
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Configure path generation based on variant
  const getPathConfig = () => {
    switch (variant) {
      case "hero":
        return {
          count: 24,
          opacity: [0.5, 0.8, 0.5],
          width: (i: number) => 0.6 + i * 0.03,
          duration: (i: number) => 15 + Math.random() * 15,
        }
      case "footer":
        return {
          count: 16,
          opacity: [0.4, 0.7, 0.4],
          width: (i: number) => 0.4 + i * 0.03,
          duration: (i: number) => 25 + Math.random() * 12,
        }
      default:
        return {
          count: 20,
          opacity: [0.4, 0.7, 0.4],
          width: (i: number) => 0.5 + i * 0.03,
          duration: (i: number) => 20 + Math.random() * 10,
        }
    }
  }

  const config = getPathConfig()

  // Generate paths with scroll-based transformations
  const paths = Array.from({ length: config.count }, (_, i) => {
    // Apply scroll-based transformations with proper formatting
    const scrollFactor = Math.sin(scrollYProgress * Math.PI) * intensity
    const scrollOffset = scrollFactor * 120 * (i % 2 === 0 ? 1 : -1)
    const verticalOffset = scrollFactor * 60 * (i % 3 === 0 ? 1 : -1)

    // Add slight variation based on index for more organic movement
    const indexFactor = i / config.count
    const positionOffset = position * (1 + indexFactor * 0.2)

    // Calculate all path coordinates to avoid negative signs next to each other
    const x1 = 380 - i * 5 * positionOffset + scrollOffset
    const y1 = 189 + i * 6 + verticalOffset
    const x2 = 312 - i * 5 * positionOffset + scrollOffset * 0.8
    const y2 = -216 + i * 6 - verticalOffset * 0.8
    const x3 = -152 + i * 5 * positionOffset - scrollOffset * 0.6
    const y3 = 343 - i * 6 + verticalOffset * 0.6
    const x4 = 616 - i * 5 * positionOffset + scrollOffset * 0.4
    const y4 = 470 - i * 6 + verticalOffset * 0.4
    const x5 = 684 - i * 5 * positionOffset + scrollOffset * 0.2
    const y5 = 875 - i * 6 + verticalOffset * 0.2

    return {
      id: i,
      d: `M${-x1} ${-y1}C${-x1} ${-y1} ${-x2} ${y2} ${-x3} ${y3}C${x4} ${y4} ${x5} ${y5} ${x5} ${y5}`,
      width: config.width(i),
      // Add opacity variation based on index for depth effect
      opacity: 0.2 + i * 0.02 * (1 + scrollFactor * 0.2),
    }
  })

  // Enhanced color schemes with better dark mode visibility
  const colorSchemes = {
    primary: {
      light: {
        start: "rgba(59, 130, 246, 0.4)",
        middle: "rgba(37, 99, 235, 0.4)",
        end: "rgba(29, 78, 216, 0.4)",
      },
      dark: {
        start: "rgba(96, 165, 250, 0.5)",
        middle: "rgba(59, 130, 246, 0.5)",
        end: "rgba(37, 99, 235, 0.5)",
      },
    },
    secondary: {
      light: {
        start: "rgba(139, 92, 246, 0.4)",
        middle: "rgba(124, 58, 237, 0.4)",
        end: "rgba(109, 40, 217, 0.4)",
      },
      dark: {
        start: "rgba(167, 139, 250, 0.5)",
        middle: "rgba(139, 92, 246, 0.5)",
        end: "rgba(124, 58, 237, 0.5)",
      },
    },
    accent: {
      light: {
        start: "rgba(236, 72, 153, 0.4)",
        middle: "rgba(219, 39, 119, 0.4)",
        end: "rgba(190, 24, 93, 0.4)",
      },
      dark: {
        start: "rgba(244, 114, 182, 0.5)",
        middle: "rgba(236, 72, 153, 0.5)",
        end: "rgba(219, 39, 119, 0.5)",
      },
    },
  }

  // Get the current color scheme based on theme
  const currentScheme =
    mounted && resolvedTheme === "dark" ? colorSchemes[colorScheme].dark : colorSchemes[colorScheme].light

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Brand Paths</title>
        <defs>
          <linearGradient id={`gradient-${colorScheme}-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={currentScheme.start} />
            <stop offset="50%" stopColor={currentScheme.middle} />
            <stop offset="100%" stopColor={currentScheme.end} />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#gradient-${colorScheme}-${position})`}
            strokeWidth={path.width}
            strokeOpacity={path.opacity || 0.2 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: config.opacity,
              pathOffset: [scrollYProgress * 0.2, 1 + scrollYProgress * 0.2, scrollYProgress * 0.2],
            }}
            transition={{
              duration: config.duration(path.id),
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(BrandPaths)
