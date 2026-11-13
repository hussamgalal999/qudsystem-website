"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Layout, Smartphone, Server, Cpu, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications and responsive websites built with modern technologies.",
    icon: <Layout className="h-6 w-6" />,
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "PHP"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-6 w-6" />,
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/mobile-development",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Scalable and secure backend systems and APIs for your applications.",
    icon: <Server className="h-6 w-6" />,
    technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Go"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/backend-development",
  },
  {
    id: 4,
    title: "Database Solutions",
    description: "Database design, optimization, and management for optimal performance.",
    icon: <Database className="h-6 w-6" />,
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "Redis"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/database-solutions",
  },
  {
    id: 5,
    title: "Cloud Services",
    description: "Cloud infrastructure setup, migration, and management on leading platforms.",
    icon: <Cloud className="h-6 w-6" />,
    technologies: ["AWS", "Azure", "Google Cloud", "Firebase", "Heroku", "Vercel"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/cloud-services",
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "Intelligent solutions leveraging artificial intelligence and machine learning.",
    icon: <Cpu className="h-6 w-6" />,
    technologies: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Predictive Analytics"],
    image: "/placeholder.svg?height=400&width=600",
    link: "/services/ai-machine-learning",
  },
]

export default function ServicesPage() {
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
    <div className="min-h-screen pt-24 pb-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            QudSystem offers a comprehensive range of software development services to help businesses transform their
            ideas into reality. Our expert team delivers high-quality solutions tailored to your specific needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md">{service.icon}</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 backdrop-blur-sm text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <div className="p-4 pt-0 mt-auto">
                  <Button variant="ghost" className="w-full justify-between group" asChild>
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block backdrop-blur-md bg-white/30 dark:bg-black/30 p-6 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              We understand that every business has unique requirements. Contact us to discuss your specific needs and
              let us create a tailored solution for you.
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
      </div>
    </div>
  )
}
