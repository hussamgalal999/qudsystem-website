"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  duration?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  className?: string
}

export default function FadeIn({
  children,
  duration = 0.5,
  delay = 0,
  direction = "up",
  distance = 20,
  className = "",
}: FadeInProps) {
  // Set up the initial and animate properties based on the direction
  let initial = { opacity: 0 }

  if (direction === "up") {
    initial = { ...initial, y: distance }
  } else if (direction === "down") {
    initial = { ...initial, y: -distance }
  } else if (direction === "left") {
    initial = { ...initial, x: distance }
  } else if (direction === "right") {
    initial = { ...initial, x: -distance }
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier easing
      }}
    >
      {children}
    </motion.div>
  )
}
