import { buildMetadata } from "@/lib/seo"
export const metadata = buildMetadata({ title: "Reset Password", description: "Reset your QudSystem account password.", path: "/password-reset", noindex: true })
import PageClient from "./page-client"

export default function Page() {
  return <PageClient />
}
