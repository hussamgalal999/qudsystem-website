import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "Contact QudSystem", description: "Talk to the QudSystem team about custom software, AI agents, cybersecurity, or the upcoming Qud Office AI suite.", path: "/contact" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
