import CorporatePageShell from "@/components/corporate-page-shell";
import { corporatePages } from "@/data/site-pages";

export default function Page() {
  return <CorporatePageShell config={corporatePages["work-process"]} />;
}
