"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare form data
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        timestamp: new Date().toISOString(),
      }

      // Send to email (this would typically be a server action or API route)
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contactData,
          recipients: {
            email: "qudsystemltd@gmail.com",
            whatsapp: "+201151858057",
            telegram: "+201151858057",
          },
        }),
      })

      // Success handling
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      // Show error toast
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "info@qudsystem.com",
      link: "mailto:info@qudsystem.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+20 (123) 456-7890",
      link: "tel:+201234567890",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to our team!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium">
                      Project Type
                    </label>
                    <Input
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="Project Type"
                      className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget
                    </label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Budget"
                      className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md text-center"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm bg-white/50 dark:bg-neutral-900/50 hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start space-x-4"
                      target={info.title === "Email" || info.title === "Phone" ? "_blank" : ""}
                      rel="noopener noreferrer"
                    >
                      <div className="p-2 rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{info.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
