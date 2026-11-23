import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "UI Kit", description: "QudSystem internal design system reference.", path: "/ui-kit", noindex: true })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
