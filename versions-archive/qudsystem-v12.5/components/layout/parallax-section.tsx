"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  intensity?: "light" | "medium" | "heavy"
  triggerPoint?: "start" | "middle" | "end"
  id?: string
  as?: React.ElementType
}

export default function ParallaxSection({
  children,
  className = "",
  direction = "up",
  intensity = "medium",
  triggerPoint = "middle",
  id,
  as: Component = "section",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Configure the scroll settings
  const triggerMap: Record<"start" | "middle" | "end", any> = {
    start: ["start end", "start start"],
    middle: ["start end", "end start"],
    end: ["end end", "end start"],
  }

  const intensityMap = {
    light: 50,
    medium: 100,
    heavy: 200,
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: triggerMap[triggerPoint],
  })

  // Create transformations based on direction
  const distance = intensityMap[intensity]

  const yUp = useTransform(scrollYProgress, [0, 1], [distance, 0])
  const yDown = useTransform(scrollYProgress, [0, 1], [-distance, 0])
  const xLeft = useTransform(scrollYProgress, [0, 1], [distance, 0])
  const xRight = useTransform(scrollYProgress, [0, 1], [-distance, 0])

  let transformProps = {}

  if (direction === "up") {
    transformProps = { y: yUp }
  } else if (direction === "down") {
    transformProps = { y: yDown }
  } else if (direction === "left") {
    transformProps = { x: xLeft }
  } else if (direction === "right") {
    transformProps = { x: xRight }
  }

  return (
    <Component id={id} className={`overflow-hidden ${className}`}>
      <motion.div
        ref={ref}
        style={{
          ...transformProps,
          opacity: useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 1]),
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </Component>
  )
}
