import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Integrations & Tech Stack", description: "Seamless integration with modern LLMs, MCP servers, cloud infrastructure, payment gateways, and enterprise APIs.", path: "/integrations" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["integrations"]} />;
}
