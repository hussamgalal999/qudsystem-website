import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "QudSystem Services", description: "Custom software development, AI agent engineering, cybersecurity, and EdTech services from QudSystem.", path: "/services" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
