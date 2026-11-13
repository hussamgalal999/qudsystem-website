export interface Project {
  id: number
  title: string
  slug: string
  description: string
  image: string
  categories: string[]
  technologies: string[]
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
  duration?: string
  teamSize?: number
  overview: string
  keyFeatures?: string[]
  additionalImages?: string[]
  challenges?: {
    introduction?: string
    items?: {
      title: string
      description: string
    }[]
  }
  solutions?: {
    introduction?: string
    items?: {
      title: string
      description: string
      technologies?: string[]
    }[]
  }
  results?: {
    summary?: string
    metrics?: {
      value: string
      label: string
    }[]
    testimonial?: {
      quote: string
      author: string
      position: string
    }
  }
}
