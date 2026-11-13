"use client"

import type React from "react"

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
  id,
  as: Component = "section",
}: ParallaxSectionProps) {
  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  )
}
