"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface ElementScrollValues {
  progress: number
  isInView: boolean
  hasEntered: boolean
  hasExited: boolean
}

export function useElementScroll(options?: {
  threshold?: number
  root?: React.RefObject<HTMLElement>
  once?: boolean
}): [React.RefObject<HTMLElement>, ElementScrollValues] {
  const { threshold = 0.1, root = null, once = false } = options || {}
  const ref = useRef<HTMLElement>(null)
  const [scrollValues, setScrollValues] = useState<ElementScrollValues>({
    progress: 0,
    isInView: false,
    hasEntered: false,
    hasExited: false,
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry.isIntersecting) {
          setScrollValues((prev) => ({
            ...prev,
            isInView: true,
            hasEntered: true,
          }))
        } else {
          setScrollValues((prev) => ({
            ...prev,
            isInView: false,
            hasExited: prev.hasEntered,
          }))

          // If once is true and the element has been viewed, disconnect
          if (once && scrollValues.hasEntered) {
            observer.disconnect()
          }
        }
      },
      {
        threshold,
        root: root?.current,
      },
    )

    // Calculate scroll progress
    const handleScroll = () => {
      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is through the viewport
      // 0 = element just entered bottom of viewport
      // 1 = element just exited top of viewport
      let progress = 1 - rect.bottom / (windowHeight + rect.height)
      progress = Math.max(0, Math.min(1, progress))

      setScrollValues((prev) => ({
        ...prev,
        progress,
      }))
    }

    observer.observe(element)
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial calculation
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [ref, threshold, root, once, scrollValues.hasEntered])

  return [ref, scrollValues]
}
