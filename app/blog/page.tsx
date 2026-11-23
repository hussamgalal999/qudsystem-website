import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "QudSystem Blog & Insights", description: "Deep dives on autonomous AI agents, Next.js architecture, cybersecurity, and Qud Office AI.", path: "/blog" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["blog"]} />;
}
