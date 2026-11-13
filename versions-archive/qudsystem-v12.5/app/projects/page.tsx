"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/projects"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  // Extract unique categories from projects
  const categories = ["All", ...Array.from(new Set(projectsData.flatMap((project) => project.categories)))]

  // Filter projects based on search query and active filter
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesFilter = activeFilter === "All" || project.categories.includes(activeFilter)

    return matchesSearch && matchesFilter
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-green-300/20 dark:bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Explore our portfolio of innovative software solutions delivered to clients across various industries. Each
            project showcases our expertise, problem-solving capabilities, and commitment to excellence.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between backdrop-blur-sm bg-white/30 dark:bg-neutral-900/30 p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-neutral-500 mr-1 flex-shrink-0" />
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className="cursor-pointer px-3 py-1 text-sm"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 backdrop-blur-sm bg-white/30 dark:bg-neutral-900/30 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
              }}
              className="bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
