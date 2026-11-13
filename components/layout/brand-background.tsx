"use client"

import { useScroll, useSpring, motion } from "framer-motion"
import { memo } from "react"

/**
 * Premium Tech Subtle Grid & Wave Background
 * Fixed coordinates, zero jitter, zero layout shifts.
 */
const StaticTechGrid = memo(function StaticTechGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
      {/* Subtle isometric tech grid pattern */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="qud-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-slate-300 dark:text-slate-800"
            />
          </pattern>
          <radialGradient id="qud-glow" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#qud-grid)" />
        <rect width="100%" height="100%" fill="url(#qud-glow)" />
      </svg>
    </div>
  )
})

export default function BrandBackground() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />
      {/* Stable fixed backdrop container */}
      <div className="fixed inset-0 -z-10 bg-slate-50 dark:bg-[#0A0E17] transition-colors pointer-events-none">
        <StaticTechGrid />
      </div>
    </>
  )
}
