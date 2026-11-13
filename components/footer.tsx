"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import BrandLogo from "@/components/brand/brand-logo"
import { QudEcosystemBanner } from "@/components/qud-ecosystem-banner"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  const companyLinks = isAr
    ? [
        { name: "عن الشركة", href: "/about" },
        { name: "فريق العمل", href: "/team" },
        { name: "آلية العمل", href: "/work-process" },
        { name: "الوظائف", href: "/careers" },
        { name: "المدونة", href: "/blog" },
      ]
    : [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Work Process", href: "/work-process" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
      ]

  const productLinks = isAr
    ? [
        { name: "الخدمات والحلول", href: "/services" },
        { name: "حزمة المشاريع", href: "/projects" },
        { name: "Qud Office AI (قريباً)", href: "/qud-office-ai" },
        { name: "المميزات", href: "/features" },
        { name: "التكاملات", href: "/integrations" },
        { name: "الباقات والأسعار", href: "/pricing" },
      ]
    : [
        { name: "Services", href: "/services" },
        { name: "Projects Suite", href: "/projects" },
        { name: "Qud Office AI (Soon)", href: "/qud-office-ai" },
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing Plans", href: "/pricing" },
      ]

  const supportLinks = isAr
    ? [
        { name: "الدعم الفني", href: "/support" },
        { name: "طلب عرض توضيحي", href: "/request-demo" },
        { name: "آراء العملاء", href: "/testimonials" },
        { name: "تواصل معنا", href: "/contact" },
        { name: "تسجيل الدخول", href: "/login" },
      ]
    : [
        { name: "Support Center", href: "/support" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
        { name: "Client Portal", href: "/login" },
      ]

  return (
    <footer
      dir={dir}
      className="relative overflow-hidden bg-slate-100/90 dark:bg-neutral-950 border-t border-slate-200 dark:border-neutral-800 py-12 transition-colors"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" animated={true} />
            <p className="text-slate-600 dark:text-neutral-300 text-sm max-w-md leading-relaxed">
              {isAr
                ? "شركة QudSystem للبرمجيات والذكاء الاصطناعي والأمن السيبراني — نطوّر منظومة تطبيقات متكاملة تمهّد لإطلاق حزمة Qud Office AI."
                : "QudSystem engineers integrated software, AI agents, EdTech, and cybersecurity platforms — paving the way for the upcoming Qud Office AI suite."}
            </p>
            <div className="space-y-1.5 text-sm text-slate-600 dark:text-neutral-300">
              <p>Email: qudsystemltd@gmail.com</p>
              <p>Phone / WhatsApp: +20 011 518 580 57</p>
              <p>
                {isAr
                  ? "العنوان: شارع كورنيش النيل، المنيا والقاهرة، مصر"
                  : "Location: Corniche El Nile Street, Minya & Cairo, Egypt"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Qudsystem" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:qudsystemltd@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+201151858057" aria-label="Phone">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="/qud-office-ai" aria-label="Qud Office AI">
                  <Globe className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-900 dark:text-white">
              {isAr ? "الشركة" : "Company"}
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-900 dark:text-white">
              {isAr ? "المنتجات والحلول" : "Solutions"}
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-900 dark:text-white">
              {isAr ? "الدعم والتواصل" : "Resources"}
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <QudEcosystemBanner
          projectName={isAr ? "الموقع الرسمي لشركة QudSystem" : "QudSystem Official Portal"}
          category={isAr ? "حزمة برمجية متكاملة" : "Integrated Software & AI Suite"}
        />

        <div className="pt-6 border-t border-slate-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 dark:text-neutral-400">
          <p>
            © {currentYear} QudSystem. {isAr ? "جميع الحقوق محفوظة • من تقديم شركة QudSystem" : "All rights reserved • Presented by QudSystem"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span>{isAr ? "قادم: حزمة Qud Office AI" : "Upcoming: Qud Office AI"}</span>
            <span>{isAr ? "صنع في مصر" : "Made in Egypt"}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
