"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/project"

export default function ProjectCard({ project }: { project: Project }) {
  const isAiStudio =
    Boolean(project.isAiStudio) ||
    Boolean(project.liveUrl?.includes("aistudio.google.com")) ||
    Boolean(project.categories?.includes("Google AI Studio")) ||
    Boolean(project.appUrl)

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
    <motion.div variants={itemVariants}>
      <Card className="h-full flex flex-col overflow-hidden border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 hover:shadow-lg transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isAiStudio && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-blue-600/90 hover:bg-blue-600 text-white border-0 shadow-sm flex items-center gap-1 text-[11px] font-semibold backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>AI Studio Live</span>
              </Badge>
            </div>
          )}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {project.categories.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{project.categories.length - 2}
              </Badge>
            )}
          </div>
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pb-2">
          <div className="flex flex-wrap gap-1 mt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 backdrop-blur-sm text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 text-xs rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 backdrop-blur-sm text-neutral-700 dark:text-neutral-300">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          {isAiStudio ? (
            <div className="flex flex-wrap items-center justify-between gap-2 w-full">
              <Button variant="ghost" size="sm" asChild className="group text-xs">
                <Link href={`/products/${project.slug}`}>
                  View Details
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              {(project.liveUrl || project.appUrl) && (
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-xs shadow-sm"
                >
                  <a
                    href={project.liveUrl || project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Launch ${project.title} live demo in Google AI Studio`}
                    className="flex items-center gap-1.5"
                  >
                    <span>Launch AI Studio Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <Button variant="ghost" size="sm" asChild className="group">
                <Link href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              {project.liveUrl && (
                <Button variant="outline" size="icon" asChild className="h-8 w-8">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit live site">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
