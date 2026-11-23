import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Qud Office AI Suite", description: "The upcoming unified AI office & enterprise productivity ecosystem connecting every QudSystem product in an ad-free, high-performance experience.", path: "/qud-office-ai" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["qud-office-ai"]} />;
}
