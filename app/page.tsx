import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "QudSystem | Integrated Software, AI & Cybersecurity Suite",
  description:
    "QudSystem delivers an integrated software, AI, EdTech, and cybersecurity ecosystem — paving the way for the upcoming Qud Office AI suite.",
  path: "/",
})

import Hero from "@/components/hero"
import Divisions from "@/components/divisions"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import HappyClients from "@/components/happy-clients"
import Reviews from "@/components/reviews"
import QudOfficeAiSection from "@/components/qud-office-ai-section"
import AiStudioShowcase from "@/components/ai-studio-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Divisions />
      <About />
      <QudOfficeAiSection />
      <AiStudioShowcase />
      <Projects />
      <Skills />
      <HappyClients />
      <Reviews />
      <Contact />
    </main>
  )
}

