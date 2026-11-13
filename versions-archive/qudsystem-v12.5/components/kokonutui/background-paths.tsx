"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useScroll } from "@/hooks/use-scroll"

function FloatingPaths({ position, scrollProgress = 0 }: { position: number; scrollProgress?: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    // Apply scroll-based transformations with proper formatting to avoid "--" in path data
    const scrollOffset = scrollProgress * 150 * (i % 2 === 0 ? 1 : -1)
    const verticalOffset = scrollProgress * 75 * (i % 3 === 0 ? 1 : -1)

    // Ensure all values are properly calculated to avoid negative signs next to each other
    const x1 = 380 - i * 5 * position + scrollOffset
    const y1 = 189 + i * 6 + verticalOffset
    const x2 = 312 - i * 5 * position + scrollOffset * 0.8
    const y2 = -216 + i * 6 - verticalOffset * 0.8
    const x3 = -152 + i * 5 * position - scrollOffset * 0.6
    const y3 = 343 - i * 6 + verticalOffset * 0.6
    const x4 = 616 - i * 5 * position + scrollOffset * 0.4
    const y4 = 470 - i * 6 + verticalOffset * 0.4
    const x5 = 684 - i * 5 * position + scrollOffset * 0.2
    const y5 = 875 - i * 6 + verticalOffset * 0.2

    return {
      id: i,
      d: `M${-x1} ${-y1}C${-x1} ${-y1} ${-x2} ${y2} ${-x3} ${y3}C${x4} ${y4} ${x5} ${y5} ${x5} ${y5}`,
      color: `rgba(15,23,42,${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.03,
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [scrollProgress * 0.3, 1 + scrollProgress * 0.3, scrollProgress * 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string
}) {
  const words = title.split(" ")
  const { scrollY, scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} scrollProgress={scrollYProgress} />
        <FloatingPaths position={-1} scrollProgress={scrollYProgress} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollYProgress * -75}px)`,
          }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                    bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                    dark:from-white dark:to-white/80"
                    style={{
                      transform: `translateY(${scrollYProgress * -25 * (letterIndex % 5)}px)`,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Updated button style to match the provided image */}
          <Button
            variant="outline"
            className="rounded-full px-6 py-3 text-base font-medium bg-white hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200"
          >
            Discover Excellence
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
