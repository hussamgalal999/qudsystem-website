"use client"

import { motion } from "framer-motion"
import { Database, Layout, Palette, Server, Smartphone, Terminal, Shield, Cloud, Cpu } from "lucide-react"

const skills = [
  {
    category: "Web Development",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "PHP"],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Python", "Java", "C#", ".NET", "Go"],
  },
  {
    category: "Database Solutions",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "SQL Server", "Redis"],
  },
  {
    category: "Cloud Services",
    icon: <Cloud className="h-6 w-6" />,
    items: ["AWS", "Azure", "Google Cloud", "Firebase", "Heroku", "Vercel"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform"],
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Wireframing"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Cpu className="h-6 w-6" />,
    items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Predictive Analytics"],
  },
  {
    category: "Security",
    icon: <Shield className="h-6 w-6" />,
    items: ["Penetration Testing", "OWASP", "Encryption", "Authentication", "Authorization"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Glass-like background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-green-300/20 dark:bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            QudSystem offers a comprehensive range of technical capabilities to deliver cutting-edge solutions for your
            business needs. Our team of experts excels in various technologies and methodologies to ensure your
            project's success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/40 dark:bg-neutral-800/40 p-6 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-neutral-200/70 dark:bg-neutral-700/70 mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-200/50 dark:bg-neutral-700/50 backdrop-blur-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
