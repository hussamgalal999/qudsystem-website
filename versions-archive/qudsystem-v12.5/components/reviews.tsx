"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Michael Chen",
    position: "CIO, Healthcare Provider",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "QudSystem delivered our healthcare management platform on time and within budget. Their attention to security and compliance was exceptional, and the system has significantly improved our operational efficiency.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    position: "Director of Technology, EdTech Startup",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "The e-learning platform developed by QudSystem exceeded our expectations. The team was responsive, professional, and delivered a product that our users love. We've seen a 40% increase in course completion rates since launch.",
  },
  {
    id: 3,
    name: "Robert Martinez",
    position: "VP of Engineering, Financial Services",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "QudSystem's expertise in fintech was evident throughout our payment gateway project. They implemented robust security measures while ensuring excellent performance. The system has processed billions in transactions without issues.",
  },
  {
    id: 4,
    name: "Jennifer Williams",
    position: "COO, Logistics Company",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    review:
      "The supply chain management system developed by QudSystem has transformed our operations. We now have complete visibility across our entire supply chain, which has reduced costs and improved delivery times significantly.",
  },
  {
    id: 5,
    name: "David Kim",
    position: "Product Manager, Retail Chain",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "Working with QudSystem on our inventory management system was a pleasure. Their team took the time to understand our unique requirements and delivered a solution that perfectly fits our business processes.",
  },
  {
    id: 6,
    name: "Sarah Thompson",
    position: "CTO, SaaS Company",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "QudSystem helped us migrate our legacy system to a modern cloud-based architecture. The transition was smooth, and we've seen significant improvements in performance and scalability. Highly recommended!",
  },
  {
    id: 7,
    name: "Mohammed Al-Farsi",
    position: "CIO, Government Agency",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "QudSystem helped us modernize our digital infrastructure with exceptional attention to security and compliance requirements. Their team's expertise in government solutions was evident throughout the project.",
  },
  {
    id: 8,
    name: "Fatima Al-Zahra",
    position: "Director of Digital Transformation, Banking Sector",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "Working with QudSystem on our digital banking platform was a game-changer. Their understanding of fintech security and user experience helped us deliver a solution that our customers love.",
  },
  {
    id: 9,
    name: "Ahmed Hassan",
    position: "CEO, E-commerce Startup",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "As a startup, we needed a partner who could understand our vision and help us scale. QudSystem delivered a robust e-commerce platform that has grown with our business from day one.",
  },
  {
    id: 10,
    name: "Layla Mahmoud",
    position: "Head of IT, Educational Institution",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    review:
      "QudSystem's e-learning platform has transformed how we deliver education. Their team was responsive to our unique requirements and delivered a solution that both teachers and students find intuitive.",
  },
  {
    id: 11,
    name: "Omar Khalid",
    position: "Operations Director, Manufacturing",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "The supply chain management system developed by QudSystem has given us unprecedented visibility and control. We've seen significant improvements in efficiency and cost reduction.",
  },
  {
    id: 12,
    name: "Nadia Al-Sayed",
    position: "Marketing Director, Retail Chain",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    review:
      "QudSystem's customer analytics platform has provided invaluable insights that have directly impacted our marketing strategy and customer engagement. Highly recommended!",
  },
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleReviews = reviews.slice(activeIndex, activeIndex + 3)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3))
  }

  return (
    <section id="reviews" className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Good Reviews</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with QudSystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{review.position}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-neutral-300 dark:text-neutral-600"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400">{review.review}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i * 3)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i * 3 === activeIndex ? "bg-neutral-800 dark:bg-white w-6" : "bg-neutral-300 dark:bg-neutral-700"
              }`}
              aria-label={`Go to review set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
