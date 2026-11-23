"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Sparkles, Heart, Users, TrendingUp } from "lucide-react"
import Image from "next/image"


export default function PleasuresPage() {
  const { t } = useLanguage()

  const pleasures = [
    {
      title: t("pleasures.innovation"),
      description: t("pleasures.innovationText"),
      icon: <Sparkles className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20",
    },
    {
      title: t("pleasures.quality"),
      description: t("pleasures.qualityText"),
      icon: <Heart className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-gradient-to-br from-pink-500/10 to-red-500/10 dark:from-pink-500/20 dark:to-red-500/20",
    },
    {
      title: t("pleasures.collaboration"),
      description: t("pleasures.collaborationText"),
      icon: <Users className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20",
    },
    {
      title: t("pleasures.growth"),
      description: t("pleasures.growthText"),
      icon: <TrendingUp className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t("pleasures.title")}</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">{t("pleasures.description")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pleasures.map((pleasure, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pleasure.image || "/placeholder.svg"}
                    alt={pleasure.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className={`absolute inset-0 opacity-60 ${pleasure.color}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-4 rounded-full">
                      {pleasure.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-3 gradient-text">{pleasure.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400">{pleasure.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated bottom element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-6 bg-white dark:bg-neutral-900 rounded-lg leading-none flex items-center">
              <span className="flex items-center space-x-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-lg font-bold">
                  QudSystem
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  Creating exceptional experiences through innovative technology
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
