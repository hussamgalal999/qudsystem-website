"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Sparkles, Shield, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface AdItem {
  id: string
  featured?: boolean
  badge: string
  badgeAr: string
  title: string
  titleAr: string
  tagline: string
  taglineAr: string
  cta: string
  ctaAr: string
  href: string
  bgGradient?: string
  category?: string
}

interface AdSlotData {
  version: string
  active: boolean
  paidTierInfo: {
    comingSoon: boolean
    badge: string
    badgeAr: string
    message: string
    messageAr: string
  }
  ads: AdItem[]
}

const FALLBACK_AD_DATA: AdSlotData = {
  version: "1.0.0",
  active: true,
  paidTierInfo: {
    comingSoon: true,
    badge: "100% Ad-Free on Paid Tiers",
    badgeAr: "100% بدون إعلانات للباقات المدفوعة",
    message: "Paid Plans coming soon will provide a 100% ad-free experience across all QudSystem apps and tools.",
    messageAr: "الخطط المدفوعة (قريباً) ستوفر تجربة خالية تماماً 100% من الإعلانات عبر جميع منتجات وحزم كود سيستم.",
  },
  ads: [
    {
      id: "ad-office-ai",
      featured: true,
      badge: "Coming Soon",
      badgeAr: "قريباً",
      title: "Qud Office AI Suite",
      titleAr: "قريباً: حزمة Qud Office AI",
      tagline: "All-in-one AI Document, Spreadsheet, Presentation & Mail Suite",
      taglineAr: "الحزمة المكتبية المتكاملة بالذكاء الاصطناعي — قريباً لجميع الأعمال",
      cta: "Join Early Access",
      ctaAr: "انضم للانتظار المبكر",
      href: "/#qud-office-ai",
      bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
      category: "Flagship Productivity",
    },
  ],
}

interface QudAdSlotProps {
  slotId?: string
  className?: string
  compact?: boolean
}

export default function QudAdSlot({ slotId, className = "", compact = false }: QudAdSlotProps) {
  const { language, dir } = useLanguage()
  const isAr = language === "ar"
  const [data, setData] = useState<AdSlotData>(FALLBACK_AD_DATA)
  const [currentAdIndex, setCurrentAdIndex] = useState(0)
  const [isAdFree, setIsAdFree] = useState(false)
  const [isDismissed, setIsDismissed] = useState(true) // default dismissed until verified
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user is on a paid/pro license tier (100% ad-free)
    try {
      if (typeof window !== "undefined") {
        const win = window as any
        const licenseTier = (localStorage.getItem("qud_license_tier") || "").toLowerCase().trim()
        const isPaid =
          win.QUD_PAID_TIER === true ||
          localStorage.getItem("qud_paid_tier") === "true" ||
          ["pro", "enterprise", "commercial", "lifetime", "premium"].includes(licenseTier)

        if (isPaid) {
          setIsAdFree(true)
          return
        }

        // Check if recently dismissed
        const dismissedUntil = localStorage.getItem("qud_ad_slot_dismissed_until")
        if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
          setIsDismissed(true)
          return
        } else {
          setIsDismissed(false)
        }
      }
    } catch (e) {
      setIsDismissed(false)
    }

    // Fetch up-to-date ad slot configuration
    fetch("/ads/qud-ad-slot.json")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status)
        return res.json()
      })
      .then((json: AdSlotData) => {
        if (json && json.active) {
          setData(json)
          if (slotId && json.ads) {
            const foundIdx = json.ads.findIndex((a) => a.id === slotId)
            if (foundIdx >= 0) setCurrentAdIndex(foundIdx)
          }
        }
      })
      .catch(() => {
        // Fallback is already loaded
      })
  }, [slotId])

  const handleDismiss = () => {
    setIsDismissed(true)
    try {
      // Cooldown for 6 hours
      localStorage.setItem("qud_ad_slot_dismissed_until", String(Date.now() + 6 * 60 * 60 * 1000))
    } catch (e) {}
  }

  if (!mounted || isAdFree || isDismissed || !data.active || !data.ads.length) {
    return null
  }

  const ad = data.ads[currentAdIndex] || data.ads[0]
  const badge = isAr ? ad.badgeAr || ad.badge : ad.badge
  const title = isAr ? ad.titleAr || ad.title : ad.title
  const tagline = isAr ? ad.taglineAr || ad.tagline : ad.tagline
  const cta = isAr ? ad.ctaAr || ad.cta : ad.cta
  const paidNotice = isAr ? data.paidTierInfo.messageAr : data.paidTierInfo.message

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        dir={dir}
        aria-label="Ecosystem Sponsor Slot"
        className={`w-full relative overflow-hidden rounded-xl border border-indigo-500/30 bg-gradient-to-r from-neutral-900 via-indigo-950 to-neutral-900 text-white shadow-xl backdrop-blur-md ${className}`}
      >
        <div className="p-4 sm:p-5 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 uppercase tracking-wide">
                  {badge}
                </span>
                <span className="text-xs text-neutral-400">
                  {isAr ? "منظومة QudSystem" : "QudSystem Suite"}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">{title}</h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-snug">{tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-between md:justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            <Link
              href={ad.href}
              className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30 whitespace-nowrap"
            >
              {cta}
              <ArrowRight className={`h-3.5 w-3.5 ${isAr ? "mr-1.5 rotate-180" : "ml-1.5"}`} />
            </Link>

            <button
              onClick={handleDismiss}
              aria-label={isAr ? "إغلاق الإعلان" : "Dismiss sponsor slot"}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Paid Plan Disclosure Note */}
        <div className="px-4 py-1.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400 flex-wrap gap-2">
          <span className="flex items-center gap-1.5 text-blue-300/90">
            <Shield className="h-3 w-3 text-blue-400" />
            {paidNotice}
          </span>
          <span className="text-[10px] text-neutral-500">
            {isAr ? "شركة QudSystem" : "QudSystem Platform"}
          </span>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}
