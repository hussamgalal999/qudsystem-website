import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Our Engineering Work Process", description: "A disciplined 4-stage lifecycle ensuring zero-regression delivery from discovery to production.", path: "/work-process" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["work-process"]} />;
}
