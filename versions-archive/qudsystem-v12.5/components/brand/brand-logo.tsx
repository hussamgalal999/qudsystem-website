"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useScroll } from "@/hooks/use-scroll"

export default function BrandLogo({ size = "md", animated = true }: { size?: "sm" | "md" | "lg"; animated?: boolean }) {
  const { scrollYProgress } = useScroll()

  // Size classes
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  // Font size classes
  const fontSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div
        className={`relative ${sizeClasses[size]} overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md`}
      >
        {/* Logo background paths */}
        {animated && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" fill="none">
            <motion.path
              d="M10,24 C10,15 15,10 24,10 C33,10 38,15 38,24 C38,33 33,38 24,38 C15,38 10,33 10,24 Z"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [scrollYProgress * 0.2, 1 + scrollYProgress * 0.2, scrollYProgress * 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.path
              d="M14,24 C14,17 17,14 24,14 C31,14 34,17 34,24 C34,31 31,34 24,34 C17,34 14,31 14,24 Z"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0.7 }}
              animate={{
                pathLength: 1,
                opacity: [0.4, 0.7, 0.4],
                pathOffset: [scrollYProgress * -0.2, 1 + scrollYProgress * -0.2, scrollYProgress * -0.2],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        )}

        {/* Logo letter */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          <motion.span
            className={fontSizeClasses[size]}
            animate={
              animated
                ? {
                    y: [0, -2, 0, 2, 0],
                    scale: [1, 1.05, 1, 0.95, 1],
                  }
                : {}
            }
            transition={
              animated
                ? {
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }
                : {}
            }
          >
            Q
          </motion.span>
        </div>
      </div>
      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        QudSystem
      </span>
    </Link>
  )
}
