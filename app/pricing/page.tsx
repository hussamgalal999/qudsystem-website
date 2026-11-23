import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "QudSystem Pricing", description: "Transparent plans for QudSystem products and the upcoming ad-free Qud Office AI paid tiers.", path: "/pricing" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
