import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "QudSystem Projects", description: "Case studies and delivered systems: enterprise platforms, SaaS products, and AI automation built by QudSystem.", path: "/projects" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
