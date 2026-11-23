import type React from "react"
import { Inter, Plus_Jakarta_Sans, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BrandBackground from "@/components/layout/brand-background"
import BackToTop from "@/components/ui/back-to-top"
import EnhancedAssistant from "@/components/ai/enhanced-assistant"
import { Toaster } from "@/components/ui/toaster"
import PageTransition from "@/components/layout/page-transition"
import Script from "next/script"
import JsonLd from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/seo"
import type { Metadata, Viewport } from "next"

// Load primary Latin tech font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

// Modern, ultra-crisp geometric Arabic font for premium tech brand
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.defaultTitle, template: siteConfig.titleTemplate },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.keywords],
  manifest: "/manifest.json",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${cairo.variable} font-sans antialiased selection:bg-blue-600 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <BrandBackground />
            <Navbar />
            <PageTransition>
              <main className="min-h-screen relative z-10">{children}</main>
            </PageTransition>
            <Footer />
            <BackToTop />
            <EnhancedAssistant />
            <Toaster />
            <JsonLd />
          </LanguageProvider>
        </ThemeProvider>

        {/* Performance monitoring script */}
        <Script
          id="performance-monitoring"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                console.log('QudSystem ecosystem loaded');
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
