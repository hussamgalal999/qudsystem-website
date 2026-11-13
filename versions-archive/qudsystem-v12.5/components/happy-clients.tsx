"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const clients = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg?height=80&width=200", industry: "Technology" },
  { id: 2, name: "HealthPlus", logo: "/placeholder.svg?height=80&width=200", industry: "Healthcare" },
  { id: 3, name: "FinanceHub", logo: "/placeholder.svg?height=80&width=200", industry: "Finance" },
  { id: 4, name: "EduLearn", logo: "/placeholder.svg?height=80&width=200", industry: "Education" },
  { id: 5, name: "RetailPro", logo: "/placeholder.svg?height=80&width=200", industry: "Retail" },
  { id: 6, name: "LogiTech", logo: "/placeholder.svg?height=80&width=200", industry: "Logistics" },
  { id: 7, name: "MediaMax", logo: "/placeholder.svg?height=80&width=200", industry: "Media" },
  { id: 8, name: "GovSystems", logo: "/placeholder.svg?height=80&width=200", industry: "Government" },
]

export default function HappyClients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="clients" className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-20 right-40 w-64 h-64 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Clients</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We've had the privilege of working with amazing clients across various industries. Here are some of the
            organizations that trust QudSystem for their software needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {clients.map((client) => (
            <motion.div key={client.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="h-full flex flex-col items-center justify-center p-6 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-lg transition-all duration-300">
                <div className="relative h-16 w-full mb-4">
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-center">{client.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">{client.industry}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
            <p className="text-xl md:text-2xl font-medium italic text-neutral-700 dark:text-neutral-300">
              "Working with QudSystem has been a game-changer for our business. Their expertise and dedication to
              quality are unmatched."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                <Image src="/placeholder.svg?height=48&width=48" alt="Client" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">CTO, TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
