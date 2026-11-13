"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSelector } from "@/components/layout/language-selector"
import { usePathname } from "next/navigation"
import BrandLogo from "@/components/brand/brand-logo"
import { useScroll } from "@/hooks/use-scroll"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const pathname = usePathname()
  const { t, dir } = useLanguage()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false)
    }
  }, [isDesktop, isOpen])

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.pleasures"), href: "/pleasures" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xl py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Use our branded logo component */}
        <BrandLogo size="sm" animated={true} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive(item.href) ? "default" : "ghost"}
                className={`text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:from-blue-500 dark:to-purple-500"
                    : ""
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <div className="ml-2 flex items-center">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="ml-1"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={`w-full justify-start text-lg font-medium ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:from-blue-500 dark:to-purple-500"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
