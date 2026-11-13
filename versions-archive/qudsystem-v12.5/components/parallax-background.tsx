"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo } from "react"

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function ParallaxSection({ children, className = "", id }: ParallaxSectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

interface ParallaxBackgroundProps {
  colorScheme?: "blue" | "purple" | "teal" | "amber" | "pink"
  className?: string
}

export function ParallaxBackground({ colorScheme = "blue", className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const numberOfBlobs = 6

  const blobData = useMemo(() => {
    return Array.from({ length: numberOfBlobs }).map((_, i) => {
      const size = 100 + Math.random() * 300
      const xPos = Math.random() * 100
      const yPos = Math.random() * 100
      const speed = 0.1 + Math.random() * 0.3 * (i % 2 === 0 ? 1 : -1)
      return { size, xPos, yPos, speed }
    })
  }, [colorScheme])

  // Generate blobs for the background
  const generateBlobs = () => {
    return blobData.map((blob, i) => {
      const { size, xPos, yPos, speed } = blob
      return (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-${colorScheme}-${300 + i * 100}/10 dark:bg-${colorScheme}-${400 + i * 100}/5 blur-3xl`}
          style={{
            width: size,
            height: size,
            left: `${xPos}%`,
            top: `${yPos}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, speed * 200]),
          }}
        />
      )
    })
  }

  return (
    <div ref={ref} className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {generateBlobs()}
    </div>
  )
}
