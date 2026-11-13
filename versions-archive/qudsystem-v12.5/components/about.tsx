"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="QudSystem Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About QudSystem</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              QudSystem is a leading software development company specializing in creating innovative, scalable, and
              user-friendly solutions for businesses across various industries. With a team of experienced developers,
              designers, and project managers, we deliver high-quality software that drives business growth and
              efficiency.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Founded in 2018, QudSystem has successfully delivered hundreds of projects for clients worldwide, ranging
              from startups to enterprise-level organizations. Our expertise spans web development, mobile applications,
              enterprise solutions, AI integration, and custom software development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To empower businesses with innovative software solutions that drive growth and efficiency.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
                <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  To be the leading software development partner for businesses worldwide.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900 hover:shadow-lg transition-all duration-300"
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-neutral-300 dark:border-neutral-700 backdrop-blur-sm bg-white/30 dark:bg-black/30"
              >
                <a href="#projects">
                  <Download className="mr-2 h-4 w-4" />
                  Our Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
