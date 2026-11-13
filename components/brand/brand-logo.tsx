"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function BrandLogo({
  size = "md",
  animated = true,
}: {
  size?: "sm" | "md" | "lg"
  animated?: boolean
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const fontSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <Link
      href="/"
      dir="ltr"
      style={{ direction: "ltr" }}
      className="inline-flex flex-row items-center gap-2.5 shrink-0 select-none"
    >
      <div
        className={`relative ${sizeClasses[size]} overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-md shrink-0`}
      >
        {animated && (
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" fill="none">
            <motion.path
              d="M10,24 C10,15 15,10 24,10 C33,10 38,15 38,24 C38,33 33,38 24,38 C15,38 10,33 10,24 Z"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1"
              initial={{ pathLength: 0.4, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        )}

        <div className="absolute inset-0 flex items-center justify-center text-white font-bold select-none">
          <span className={fontSizeClasses[size]}>Q</span>
        </div>
      </div>
      <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 shrink-0 font-sans">
        QudSystem
      </span>
    </Link>
  )
}
