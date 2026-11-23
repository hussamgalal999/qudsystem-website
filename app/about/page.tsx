import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "About QudSystem", description: "We build scalable software, autonomous AI agents, cybersecurity platforms, and EdTech ecosystems — delivering 150+ projects for 50+ clients worldwide.", path: "/about" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["about"]} />;
}
