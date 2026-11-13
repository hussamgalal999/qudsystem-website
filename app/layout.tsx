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

export const metadata = {
  title: "QudSystem | Integrated Software, AI & Cybersecurity Suite",
  description:
    "QudSystem delivers an integrated software, AI, EdTech, and cybersecurity ecosystem — paving the way for the upcoming Qud Office AI suite.",
  keywords: [
    "QudSystem",
    "Qud Office AI",
    "custom software",
    "AI agents",
    "cybersecurity",
    "EdTech",
    "Egypt",
  ],
  metadataBase: new URL("https://qudsystem.com"),
  manifest: "/manifest.json",
  openGraph: {
    title: "QudSystem | Integrated Software, AI & Cybersecurity Suite",
    description:
      "Integrated software suite by QudSystem — Upcoming Qud Office AI & Ad-Free Paid Plans.",
    url: "https://qudsystem.com",
    siteName: "QudSystem",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QudSystem | Integrated Software & AI Suite",
    description:
      "Integrated software suite by QudSystem — Upcoming Qud Office AI & Ad-Free Paid Plans.",
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
