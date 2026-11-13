"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSelector } from "@/components/layout/language-selector"
import { usePathname } from "next/navigation"
import BrandLogo from "@/components/brand/brand-logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const pathname = usePathname()
  const { language, dir } = useLanguage()
  const isAr = language === "ar"

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled((prev) => (prev ? y > 12 : y > 24))
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false)
  }, [isDesktop, isOpen])

  const primaryLinks = isAr
    ? [
        { name: "الرئيسية", href: "/" },
        { name: "عن الشركة", href: "/about" },
        { name: "الخدمات", href: "/services" },
        { name: "المشاريع", href: "/projects" },
        { name: "الباقات والأسعار", href: "/pricing" },
        { name: "Qud Office AI", href: "/qud-office-ai" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Pricing", href: "/pricing" },
        { name: "Qud Office AI", href: "/qud-office-ai" },
      ]

  const moreLinks = isAr
    ? [
        { name: "دليل المنتجات", href: "/products" },
        { name: "المميزات", href: "/features" },
        { name: "التكاملات", href: "/integrations" },
        { name: "آلية العمل", href: "/work-process" },
        { name: "الفريق", href: "/team" },
        { name: "آراء العملاء", href: "/testimonials" },
        { name: "المدونة", href: "/blog" },
        { name: "الوظائف", href: "/careers" },
        { name: "الدعم الفني", href: "/support" },
        { name: "طلب عرض توضيحي", href: "/request-demo" },
        { name: "دليل الواجهات", href: "/ui-kit" },
        { name: "مميزاتنا", href: "/pleasures" },
        { name: "تواصل معنا", href: "/contact" },
      ]
    : [
        { name: "Products Catalog", href: "/products" },
        { name: "Features", href: "/features" },
        { name: "Integrations", href: "/integrations" },
        { name: "Work Process", href: "/work-process" },
        { name: "Team", href: "/team" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Support", href: "/support" },
        { name: "Request Demo", href: "/request-demo" },
        { name: "UI Kit", href: "/ui-kit" },
        { name: "Pleasures", href: "/pleasures" },
        { name: "Contact", href: "/contact" },
      ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40"
      }`}
    >
      <div
        dir="ltr"
        style={{ direction: "ltr" }}
        className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 w-full"
      >
        {/* Physical Left End: Brand Logo strictly anchored on the left */}
        <div className="flex items-center shrink-0">
          <BrandLogo size="sm" animated={true} />
        </div>

        {/* Desktop Navigation (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          <nav dir={dir} className="flex items-center gap-0.5 xl:gap-1.5">
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className={`text-xs xl:text-sm font-medium px-2.5 xl:px-3 h-9 transition-colors shrink-0 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs xl:text-sm font-medium px-2 xl:px-3 h-9 text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/60 shrink-0"
                >
                  {isAr ? "المزيد" : "More"}
                  <ChevronDown className="ms-1 h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isAr ? "end" : "start"}
                className="w-56 p-1.5 shadow-xl border border-slate-200 dark:border-slate-800 max-h-96 overflow-y-auto"
              >
                {moreLinks.map((m) => (
                  <DropdownMenuItem key={m.href} asChild>
                    <Link href={m.href} className="w-full cursor-pointer py-1.5 px-3 text-sm">
                      {m.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-1.5 ms-2 ps-2 border-s border-slate-200 dark:border-slate-800 shrink-0">
            <Link href="/contact" className="shrink-0">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs xl:text-sm font-medium h-9 px-3.5 shadow-sm shrink-0">
                {isAr ? "ابدأ مشروعك" : "Get Started"}
              </Button>
            </Link>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile & Tablet Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-1 shrink-0">
          <LanguageSelector />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="h-9 w-9 text-slate-700 dark:text-slate-200"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            dir={dir}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-neutral-950 border-t border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto shadow-2xl z-50"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 text-base font-semibold shadow-md">
                  {isAr ? "ابدأ مشروعك الآن" : "Get Started Now"}
                </Button>
              </Link>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-1">
                  {isAr ? "الروابط الرئيسية" : "Main Navigation"}
                </div>
                <nav className="grid grid-cols-2 gap-2">
                  {primaryLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(item.href) ? "default" : "outline"}
                        className={`w-full justify-start text-sm h-10 ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                            : "border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-1">
                  {isAr ? "استكشف المزيد من الصفحات" : "Explore More"}
                </div>
                <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-2">
                  {moreLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(item.href) ? "default" : "ghost"}
                        className={`w-full justify-start text-xs sm:text-sm h-9 truncate ${
                          isActive(item.href)
                            ? "bg-blue-600 text-white font-medium"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
