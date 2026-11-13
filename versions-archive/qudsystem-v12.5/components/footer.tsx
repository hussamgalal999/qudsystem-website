"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, Sparkles, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useScroll } from "@/hooks/use-scroll"
import ParallaxSection from "@/components/layout/parallax-section"
import BrandPaths from "@/components/brand/brand-paths"
import BrandLogo from "@/components/brand/brand-logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, language } = useLanguage()
  const isAr = language === "ar"
  const { scrollYProgress } = useScroll()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/qudsystem", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  const footerLinks = [
    { name: t("nav.home"), href: "/" },
    { name: isAr ? "حزمة Qud Office AI" : "Qud Office AI", href: "/#qud-office-ai" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white/90 via-slate-50/95 to-slate-100/90 dark:from-neutral-900/90 dark:via-neutral-950/95 dark:to-black/95 backdrop-blur-md pt-14 pb-8 border-t border-neutral-200/60 dark:border-neutral-800/80">
      {/* Enhanced background paths with parallax effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <BrandPaths position={1} variant="footer" colorScheme="primary" />
        <BrandPaths position={-1} variant="footer" colorScheme="secondary" />
        <div className="rotate-45 origin-center opacity-30">
          <BrandPaths position={0.5} variant="footer" colorScheme="accent" />
        </div>
      </div>

      {/* Glass-like background elements with scroll effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
        style={{
          y: scrollYProgress * -50,
          x: scrollYProgress * 30,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
        style={{
          y: scrollYProgress * 50,
          x: scrollYProgress * -30,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Flagship QudSystem Suite Highlight Pill */}
        <div className="mb-10 p-4 rounded-xl bg-gradient-to-r from-blue-600/10 via-indigo-600/15 to-purple-600/10 border border-blue-500/30 dark:border-blue-400/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr
                  ? "من تقديم شركة QudSystem | حزمة برمجية متكاملة — قادم: حزمة Qud Office AI"
                  : "Presented by QudSystem | Unified Software Suite — Coming Soon: Qud Office AI Suite"}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {isAr
                  ? "الحزمة السحابية الذكية لإدارة المستندات، الجداول، والعروض التقديمية للشركات وفرق العمل الحديثة."
                  : "The next-generation AI office suite unifying docs, neural sheets, and agentic decks."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4">
              <Link href="/#qud-office-ai">
                {isAr ? "استكشف الحزمة المرتقبة" : "Explore Suite"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <ParallaxSection direction="left" intensity="light">
              <div>
                <div className="mb-4">
                  <BrandLogo size="md" animated={true} />
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-md mb-6 text-sm leading-relaxed">
                  {isAr
                    ? "شركة رائدة في هندسة البرمجيات والذكاء الاصطناعي وحلول الأمن السيبراني. نبتكر منظومات رقمية متقدمة تمكن الشركات والمؤسسات من تسريع النمو والأتمتة الذاتية."
                    : "Leading software development, autonomous AI, and cybersecurity company. We build innovative platforms that empower businesses to scale securely and efficiently."}
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full h-10 w-10 bg-white/40 dark:bg-neutral-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-neutral-700/50 transition-all duration-300 shadow-sm"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-neutral-700 dark:text-neutral-200"
                      >
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </ParallaxSection>
          </div>

          {/* Quick Links */}
          <div>
            <ParallaxSection direction="up" intensity="light">
              <div>
                <h3 className="text-base font-bold mb-4 text-neutral-900 dark:text-white">
                  {t("footer.quickLinks")}
                </h3>
                <nav className="flex flex-col space-y-2 text-sm">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </ParallaxSection>
          </div>

          {/* Contact Info */}
          <div>
            <ParallaxSection direction="up" intensity="light">
              <div>
                <h3 className="text-base font-bold mb-4 text-neutral-900 dark:text-white">
                  {isAr ? "تواصل معنا" : "Contact Us"}
                </h3>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-white">{isAr ? "البريد:" : "Email:"}</span>{" "}
                    qudsystemltd@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-white">{isAr ? "الهاتف / واتساب:" : "Phone:"}</span>{" "}
                    +20 (011) 518-580-57
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900 dark:text-white">{isAr ? "المقر:" : "Location:"}</span>{" "}
                    {isAr ? "شارع كورنيش النيل، المنيا، مصر" : "Corniche El Nile St, Minya, Egypt"}
                  </p>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>

        {/* Ad-Free Paid Plan Guarantee Strip */}
        <div className="py-3 px-4 mb-6 rounded-lg bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>
              {isAr ? (
                <>
                  <strong>ضمان التجربة الاحترافية:</strong> أدواتنا المجانية تدعم مجتمع المطورين، بينما{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    الخطط والاشتراكات المدفوعة (قريباً) ستوفر تجربة استخدام خالية تماماً 100% من الإعلانات
                  </span>
                  .
                </>
              ) : (
                <>
                  <strong>Ad-Free Commitment:</strong> Our free editions support community access, whereas{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Paid Plans (Coming Soon) provide a complete 100% ad-free experience across all tools
                  </span>
                  .
                </>
              )}
            </span>
          </div>
          <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
            {isAr ? "شركة QudSystem للحلول البرمجية" : "QudSystem Software LTD"}
          </span>
        </div>

        {/* Copyright */}
        <ParallaxSection direction="up" intensity="light">
          <div className="pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
              <p>
                © {currentYear} QudSystem Software & IT Solutions. {t("footer.allRights")}
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6">
                <span>{t("footer.madeIn")}</span>
                <span>{t("footer.poweredBy")}</span>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </footer>
  )
}
