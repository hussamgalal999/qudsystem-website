"use client"

import { useState } from "react"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    const resizeObserver = new ResizeObserver(updateHeight)
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    return () => {
      window.removeEventListener("resize", updateHeight)
      resizeObserver.disconnect()
    }
  }, [])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, contentHeight], [0, contentHeight])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={contentRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          y: spring,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
