import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Client Testimonials & Impact", description: "Trusted by 50+ organizations across manufacturing, healthcare, fintech, legal, and education.", path: "/testimonials" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["testimonials"]} />;
}
