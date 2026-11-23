import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({ title: "Support & Help Center", description: "Direct technical support via qudsystemltd@gmail.com and +20 011 518 580 57.", path: "/support" });
import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["support"]} />;
}
