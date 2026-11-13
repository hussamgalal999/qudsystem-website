// Performance optimization utilities

/**
 * Memoize expensive components to prevent unnecessary re-renders
 */
import { memo } from "react"

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit the rate at which a function can fire
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Optimized scroll handler to prevent performance issues
 */
export function createOptimizedScrollHandler(callback: (scrollY: number, progress: number) => void) {
  let ticking = false
  let lastScrollY = 0

  return () => {
    lastScrollY = window.scrollY
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const progress = maxScroll <= 0 ? 0 : lastScrollY / maxScroll

    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(lastScrollY, progress)
        ticking = false
      })
      ticking = true
    }
  }
}

/**
 * Preload critical resources
 */
export function preloadResources(resources: string[]) {
  if (typeof window === "undefined") return

  resources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"

    if (resource.endsWith(".js")) {
      link.as = "script"
    } else if (resource.endsWith(".css")) {
      link.as = "style"
    } else if (/\.(woff2?|ttf|otf|eot)$/.test(resource)) {
      link.as = "font"
      link.crossOrigin = "anonymous"
    } else if (/\.(png|jpe?g|webp|gif|svg)$/.test(resource)) {
      link.as = "image"
    }

    link.href = resource
    document.head.appendChild(link)
  })
}

export const memoComponent = memo
