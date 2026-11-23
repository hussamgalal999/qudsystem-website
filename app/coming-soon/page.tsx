import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Coming Soon: Qud Office AI & Paid Plans", description: "We are finalizing the unified paid licensing tiers and Qud Office AI launch.", path: "/coming-soon", noindex: true });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["coming-soon"]} />;
}
