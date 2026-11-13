"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function SmartLoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const t = window.setTimeout(() => setVisible(false), 220)
      return () => window.clearTimeout(t)
    })
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-hidden="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md pointer-events-none"
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative h-14 w-14 flex items-center justify-center">
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-blue-500/40 dark:border-blue-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1.5 rounded-xl border border-violet-500/50 dark:border-violet-400/50"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                Q
              </div>
            </div>
            <div className="h-1 w-28 rounded-full bg-slate-200 dark:bg-neutral-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-violet-600"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
