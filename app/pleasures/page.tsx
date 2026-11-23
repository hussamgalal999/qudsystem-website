import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "QudSystem Experiences", description: "Interactive experiences and showcases from the QudSystem ecosystem.", path: "/pleasures" })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
