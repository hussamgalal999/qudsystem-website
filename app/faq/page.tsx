import { buildMetadata, siteConfig } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about QudSystem products, customization, demos, Qud Office AI, paid plans, support, and how we work.",
  path: "/faq",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What does QudSystem build?", "Custom software, autonomous AI agents, cybersecurity platforms (Dragon R1/B1, ProtectX), EdTech systems (QudSchool, Qudemy), and the upcoming Qud Office AI suite."],
    ["Can products be customized for my organization?", "Yes. Every product and platform can be tailored to your workflows — request a demo and we scope the customization with you."],
    ["How long does a typical project take?", "It depends on scope. After a discovery call our team defines a timeline; most product deployments take weeks, custom enterprise systems are scoped individually."],
    ["Is there a free trial or demo?", "Yes — use the Request a Demo page to book a live walkthrough of any product, including early access to Qud Office AI."],
    ["What is Qud Office AI?", "Our upcoming unified AI office suite: documents, sheets, presentations, and enterprise workflows powered by AI agents — ad-free in the paid plans."],
    ["Do you offer technical support?", "Yes — direct support via qudsystemltd@gmail.com and +20 011 518 580 57, plus the Support Center on this site."],
    ["Where is QudSystem based?", "Minya & Cairo, Egypt — serving clients worldwide since 2019 with 150+ delivered projects."],
    ["How do paid plans work?", "Paid tiers (coming soon) give a 100% ad-free experience across every QudSystem product, with priority support and early feature access."],
  ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
}

import FaqClient from "./page-client"

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqClient />
    </>
  )
}
