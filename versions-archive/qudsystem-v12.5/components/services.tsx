"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-block backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
          <h2 className="text-2xl font-bold mb-4">Global Presence</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            QudSystem currently provides services in 22 Arab countries and is rapidly expanding to Europe, America, and
            worldwide. Our global team of experts is ready to help businesses of all sizes transform their digital
            presence.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default Services
