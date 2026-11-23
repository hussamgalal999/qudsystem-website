import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "Sign In", description: "Sign in to your QudSystem account.", path: "/login", noindex: true })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
