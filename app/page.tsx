import Hero from "@/components/hero"
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

