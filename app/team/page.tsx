import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Meet the QudSystem Team", description: "Architects, AI researchers, full-stack engineers, and cybersecurity specialists building next-generation software.", path: "/team" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["team"]} />;
}
