// Performance optimization utilities

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
 * Memoize function to cache expensive function calls
 */
export function memoize<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>()

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>
    }

    const result = func(...args)
    cache.set(key, result)
    return result
  }
}

/**
 * Prefetch resources to improve perceived performance
 */
export function prefetchResources(urls: string[]): void {
  if (typeof window === "undefined") return

  urls.forEach((url) => {
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Optimize scroll event handlers
 */
export function optimizedScrollHandler(callback: (scrollY: number, scrollYProgress: number) => void): () => void {
  if (typeof window === "undefined") return () => {}

  let ticking = false
  let lastScrollY = window.scrollY

  const handleScroll = () => {
    lastScrollY = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollYProgress = scrollHeight > 0 ? lastScrollY / scrollHeight : 0

        callback(lastScrollY, scrollYProgress)
        ticking = false
      })

      ticking = true
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => window.removeEventListener("scroll", handleScroll)
}
