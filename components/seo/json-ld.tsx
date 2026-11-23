import { siteConfig } from "@/lib/seo"

/**
 * Sitewide structured data (schema.org JSON-LD): Organization + WebSite.
 * Rendered once in the root layout; page-level schemas (Article, Product,
 * JobPosting) belong to their own pages.
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "QudSystem.Ltd",
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.defaultDescription,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    foundingDate: "2019",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corniche El Nile Street",
      addressLocality: "Minya",
      addressCountry: "EG",
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  }
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: ["en", "ar"],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
