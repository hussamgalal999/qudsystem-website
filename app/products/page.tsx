import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "QudSystem Products", description: "Explore the QudSystem product ecosystem: AI agents, cybersecurity platforms, EdTech systems, and Qud Office AI.", path: "/products" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
