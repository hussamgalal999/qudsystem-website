import Hero from "@/components/hero"
import EcosystemShowcase from "@/components/ecosystem-showcase"
import QudOfficeAiBanner from "@/components/qud-office-ai-banner"
import QudAdSlot from "@/components/qud-ad-slot"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contact from "@/components/contact"
import HappyClients from "@/components/happy-clients"
import Reviews from "@/components/reviews"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 -mt-8 mb-8 relative z-20 max-w-5xl">
        <QudAdSlot slotId="ad-office-ai" />
      </div>
      <About />
      <EcosystemShowcase />
      <QudOfficeAiBanner />
      <Projects />
      <Skills />
      <HappyClients />
      <Reviews />
      <Contact />
    </main>
  )
}
