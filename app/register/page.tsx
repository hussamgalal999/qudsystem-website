import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "Create Account", description: "Create your QudSystem account.", path: "/register", noindex: true })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
