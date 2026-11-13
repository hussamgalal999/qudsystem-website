"use client"

import type React from "react"

import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface ScrollTriggerProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  once?: boolean
  onEnter?: () => void
  onExit?: () => void
}

export default function ScrollTrigger({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  once = true,
  onEnter,
  onExit,
}: ScrollTriggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  })
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (isInView && !hasTriggered) {
      const timer = setTimeout(() => {
        onEnter?.()
        setHasTriggered(once)
      }, delay * 1000)

      return () => clearTimeout(timer)
    } else if (!isInView && !once && hasTriggered) {
      onExit?.()
      setHasTriggered(false)
    }
  }, [isInView, hasTriggered, delay, once, onEnter, onExit])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
