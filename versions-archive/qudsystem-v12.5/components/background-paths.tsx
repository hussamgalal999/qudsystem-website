"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useTheme } from "@/hooks/use-theme"

function FloatingPaths({ position, scrollProgress = 0 }: { position: number; scrollProgress?: number }) {
  // Use useState to track scroll position instead of using the hook directly
  const [scrollY, setScrollY] = useState(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set up scroll listener
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setScrollY(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Combine the passed scrollProgress with the internal state
  const effectiveScroll = scrollProgress || scrollY

  // Generate theme-aware colors
  const getPathColor = (index: number) => {
    // Base opacity increases with index for depth effect
    const baseOpacity = 0.1 + index * 0.03

    if (!mounted) return `rgba(100, 116, 139, ${baseOpacity})`

    return resolvedTheme === "dark"
      ? `rgba(226, 232, 240, ${baseOpacity})` // Light color for dark mode
      : `rgba(30, 41, 59, ${baseOpacity})` // Dark color for light mode
  }

  const paths = Array.from({ length: 36 }, (_, i) => {
    // Apply scroll-based transformations
    const scrollOffset = effectiveScroll * 120 * (i % 2 === 0 ? 1 : -1)
    const verticalOffset = effectiveScroll * 60 * (i % 3 === 0 ? 1 : -1)

    return {
      id: i,
      d: `M-${380 - i * 5 * position + scrollOffset} -${189 + i * 6 + verticalOffset}C-${
        380 - i * 5 * position + scrollOffset
      } -${189 + i * 6 + verticalOffset} -${312 - i * 5 * position + scrollOffset * 0.8} ${216 - i * 6 + verticalOffset * 0.8} ${
        152 - i * 5 * position + scrollOffset * 0.6
      } ${343 - i * 6 + verticalOffset * 0.6}C${616 - i * 5 * position + scrollOffset * 0.4} ${470 - i * 6 + verticalOffset * 0.4} ${
        684 - i * 5 * position + scrollOffset * 0.2
      } ${875 - i * 6 + verticalOffset * 0.2} ${684 - i * 5 * position + scrollOffset * 0.2} ${875 - i * 6 + verticalOffset * 0.2}`,
      color: getPathColor(i),
      width: 0.5 + i * 0.03,
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        <defs>
          <linearGradient id={`path-gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={resolvedTheme === "dark" ? "rgba(226, 232, 240, 0.4)" : "rgba(30, 41, 59, 0.4)"}
            />
            <stop
              offset="100%"
              stopColor={resolvedTheme === "dark" ? "rgba(148, 163, 184, 0.4)" : "rgba(51, 65, 85, 0.4)"}
            />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [effectiveScroll * 0.2, 1 + effectiveScroll * 0.2, effectiveScroll * 0.2],
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

export default function BackgroundPaths({
  title = "Background Paths",
  showButton = false,
}: {
  title?: string
  showButton?: boolean
}) {
  const words = title.split(" ")
  const [scrollProgress, setScrollProgress] = useState(0)
  const { resolvedTheme } = useTheme()

  // Set up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} scrollProgress={scrollProgress} />
        <FloatingPaths position={-1} scrollProgress={scrollProgress} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollProgress * -50}px)`,
          }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                  bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                  dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-12 max-w-2xl mx-auto"
          >
            Innovative Software Solutions for Modern Businesses
          </motion.p>

          {showButton && (
            <div
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                      dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                      overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                          bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                          text-black dark:text-white transition-all duration-300 
                          group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                          hover:shadow-md dark:hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">View Our Work</span>
                <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                              transition-all duration-300"
                >
                  →
                </span>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
