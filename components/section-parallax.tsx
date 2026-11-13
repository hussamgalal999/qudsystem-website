"use client"

import type React from "react"

import { motion, useScroll } from "framer-motion"
import { useRef, useMemo } from "react"

interface SectionParallaxProps {
  children: React.ReactNode
  intensity?: number
  className?: string
  id?: string
  colorScheme?: "blue" | "purple" | "teal" | "amber" | "pink"
}

export default function SectionParallax({
  children,
  intensity = 20,
  className = "",
  id,
  colorScheme = "blue",
}: SectionParallaxProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Generate random positions for background elements
  const layers = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const speed = (i + 1) * 2

      return {
        yFactor: intensity * speed * (i % 2 === 0 ? 1 : -1),
        xFactor: intensity * speed * 0.5 * (i % 2 === 0 ? -1 : 1),
        scaleFactor: i * 0.05,
        rotateFactor: i * 5 * (i % 2 === 0 ? 1 : -1),
      }
    })
  }, [intensity])

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Background elements */}
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-${colorScheme}-${300 + i * 100}/10 dark:bg-${colorScheme}-${400 + i * 100}/5 blur-3xl`}
          style={{
            width: `${150 + i * 100}px`,
            height: `${150 + i * 100}px`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            x: scrollYProgress.to([0, 1], [0, layer.xFactor]),
            y: scrollYProgress.to([0, 1], [0, layer.yFactor]),
            scale: scrollYProgress.to([0, 0.5, 1], [1, 1 + layer.scaleFactor, 1]),
            opacity: scrollYProgress.to([0, 0.5, 1], [0.5, 0.7, 0.5]),
            rotate: scrollYProgress.to([0, 1], [0, layer.rotateFactor]),
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
