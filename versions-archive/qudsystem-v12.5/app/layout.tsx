import type React from "react"
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
import SmartLoadingScreen from "@/components/layout/smart-loading-screen"
import Script from "next/script"

// Use system font stack so offline and edge builds never depend on Google Fonts fetch
const inter = { variable: "font-sans" }

export const metadata = {
  title: {
    default: "QudSystem | Software & IT Solutions — Egypt",
    template: "%s | QudSystem Software & IT Solutions",
  },
  description:
    "QudSystem Software & IT Solutions in Minya, Egypt. Custom software, AI platforms (Qudron, Dragon R1/B1, Kenzy AI), web & mobile apps, and cloud solutions. Contact: qudsystemltd@gmail.com | +20 011 518 580 57.",
  keywords: [
    "QudSystem",
    "QudSystem Software & IT Solutions",
    "software development Egypt",
    "Minya software company",
    "custom software development",
    "Qudron",
    "Dragon R1/B1",
    "CVPen",
    "PenRate",
    "QudSchool",
    "BuildX",
    "Kenzy AI",
    "QudPro",
    "web applications",
    "mobile development",
    "cloud solutions",
  ],
  authors: [{ name: "QudSystem Software & IT Solutions", url: "https://qudsystem.com" }],
  metadataBase: new URL("https://qudsystem.com"),
  alternates: {
    canonical: "https://qudsystem.com",
    languages: {
      en: "https://qudsystem.com/",
      ar: "https://qudsystem.com/?lang=ar",
    },
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "QudSystem | Software & IT Solutions — Minya, Egypt",
    description:
      "Innovative software development, AI platforms, web & mobile applications, and cloud solutions based in Minya, Egypt. Contact qudsystemltd@gmail.com or +20 011 518 580 57.",
    url: "https://qudsystem.com",
    siteName: "QudSystem Software & IT Solutions",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QudSystem | Software & IT Solutions",
    description:
      "Custom software, AI platforms, web & mobile apps, and cloud solutions from Minya, Egypt. Contact: qudsystemltd@gmail.com | +20 011 518 580 57.",
  },
  other: {
    "geo.region": "EG-MN",
    "geo.placename": "Minya, Egypt",
    "geo.position": "28.1099;30.7503",
    ICBM: "28.1099, 30.7503",
    "contact:email": "qudsystemltd@gmail.com",
    "contact:phone_number": "+20 011 518 580 57",
  },
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
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <SmartLoadingScreen />
            <BrandBackground />
            <Navbar />
            <PageTransition>
              <main className="min-h-screen relative z-10">{children}</main>
            </PageTransition>
            <Footer />
            <BackToTop />
            <EnhancedAssistant />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>

        {/* Performance monitoring & PWA Service Worker script */}
        <Script
          id="performance-monitoring"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                console.log('QudSystem Unified Platform initialized');
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').catch(function(err) {
                      console.log('SW registration note:', err);
                    });
                  });
                }
              }
            `,
          }}
        />

        {/* Standalone QudSystem Ecosystem Ad Slot & Banner script */}
        <Script
          src="/ads/qud-ecosystem-banner.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
