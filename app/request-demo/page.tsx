import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "Request a Demo", description: "Book a live demo of QudSystem products and the upcoming Qud Office AI suite.", path: "/request-demo" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
