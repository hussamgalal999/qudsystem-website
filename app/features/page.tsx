import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Core Engineering Features", description: "Every QudSystem application shares unified design tokens, bilingual RTL/LTR support, centralized ad-slot & licensing readiness, and high performance.", path: "/features" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["features"]} />;
}
