import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Careers at QudSystem", description: "Help us build the next generation of AI productivity, EdTech, and cybersecurity software.", path: "/careers" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["careers"]} />;
}
