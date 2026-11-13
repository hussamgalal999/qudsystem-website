"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Calendar, ExternalLink, Github, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { projectsData } from "@/data/projects"
import type { Project } from "@/types/project"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = projectsData.find((p) => p.slug === slug)

    if (foundProject) {
      setProject(foundProject)
    }

    setIsLoading(false)
  }, [slug])

  if (!isLoading && !project) {
    notFound()
  }

  if (isLoading || !project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="animate-pulse w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.categories.map((category) => (
                <Badge key={category} className="px-3 py-1">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              {project.duration && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{project.duration}</span>
                </div>
              )}

              {project.teamSize && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-neutral-500" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {project.teamSize} Team Members
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </a>
                </Button>
              )}

              {project.githubUrl && (
                <Button variant="outline" asChild className="flex-1">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </motion.div>

        {/* Project details tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p>{project.overview}</p>

                    {project.keyFeatures && (
                      <>
                        <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {project.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div>
                    {project.additionalImages && project.additionalImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.additionalImages.slice(0, 4).map((img, index) => (
                          <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-0">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Challenges Faced</h2>
                <p className="mb-6">
                  {project.challenges?.introduction ||
                    "The project presented several significant challenges that required innovative solutions."}
                </p>

                {project.challenges?.items && (
                  <div className="space-y-6">
                    {project.challenges.items.map((challenge, index) => (
                      <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                        <p>{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="mt-0">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                <p className="mb-6">
                  {project.solutions?.introduction ||
                    "We implemented innovative solutions to address the challenges faced during the project."}
                </p>

                {project.solutions?.items && (
                  <div className="space-y-6">
                    {project.solutions.items.map((solution, index) => (
                      <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                        <p>{solution.description}</p>
                        {solution.technologies && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {solution.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-0">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                <p className="mb-6">
                  {project.results?.summary ||
                    "The project delivered significant results and created positive impact for the client."}
                </p>

                {project.results?.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.results.metrics.map((metric, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="pt-6">
                          <p className="text-3xl font-bold mb-2">{metric.value}</p>
                          <p className="text-neutral-600 dark:text-neutral-400">{metric.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {project.results?.testimonial && (
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border-l-4 border-primary">
                    <blockquote className="italic mb-4">"{project.results.testimonial.quote}"</blockquote>
                    <p className="font-semibold">— {project.results.testimonial.author}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {project.results.testimonial.position}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
