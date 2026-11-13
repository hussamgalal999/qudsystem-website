"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";

interface QudAdItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

interface QudAdFeed {
  enabled: boolean;
  officeAiBanner?: {
    titleAr: string;
    titleEn: string;
    url: string;
  };
  ads: QudAdItem[];
}

export interface QudEcosystemBannerProps {
  projectName?: string;
  category?: string;
  paidTier?: boolean;
}

const AD_FEED_URLS = [
  "/ads/qud-ad-slot.json",
  "https://cdn.jsdelivr.net/gh/Qudsystem/qudsystem-website@main/public/ads/qud-ad-slot.json",
  "https://raw.githubusercontent.com/Qudsystem/qudsystem-website/main/public/ads/qud-ad-slot.json",
];

export function QudEcosystemBanner({
  projectName,
  category,
  paidTier = false,
}: QudEcosystemBannerProps) {
  const { language, dir } = useLanguage();
  const isAr = language === "ar";
  const [feed, setFeed] = useState<QudAdFeed | null>(null);
  const [isPro, setIsPro] = useState<boolean>(paidTier);
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    try {
      const tier = window.localStorage.getItem("qud_license_tier");
      if (tier === "pro" || tier === "enterprise" || tier === "paid") setIsPro(true);
      if (window.sessionStorage.getItem("qud_ad_dismissed") === "1") setDismissed(true);
    } catch {}

    let active = true;
    (async () => {
      for (const url of AD_FEED_URLS) {
        try {
          const res = await fetch(url, { cache: "no-store" });
          if (!res.ok) continue;
          const data = (await res.json()) as QudAdFeed;
          if (active && data && Array.isArray(data.ads)) {
            setFeed(data);
            return;
          }
        } catch {}
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const fallbackAd: QudAdItem = isAr
    ? {
        id: "qud-office-ai-2026",
        tag: "إعلان مميز • QudSystem",
        title: "قريباً: إطلاق حزمة Qud Office AI — منظومة الإنتاجية والذكاء الاصطناعي الكاملة",
        description:
          "النسخة المدفوعة بالباقات المتاحة قريباً في كل منتج توفر تجربة كاملة 100% بدون إعلانات.",
        ctaText: "استكشف الباقات",
        ctaUrl: "/pricing",
      }
    : {
        id: "qud-office-ai-2026",
        tag: "Featured • QudSystem",
        title: "Coming Soon: Qud Office AI Suite — Unified AI Productivity & Enterprise Ecosystem",
        description:
          "Upcoming Paid Plans across every QudSystem product unlock a 100% ad-free complete experience.",
        ctaText: "Explore Plans",
        ctaUrl: "/pricing",
      };

  const activeAd = (isAr ? feed?.ads?.[0] : null) || fallbackAd;
  const displayName = projectName || (isAr ? "البوابة الرسمية لشركة QudSystem" : "QudSystem Official Portal");
  const displayCategory = category || (isAr ? "حزمة برمجية متكاملة" : "Integrated Software Suite");

  return (
    <section
      dir={dir}
      aria-label="QudSystem Ecosystem Footer and Updatable Ad Slot"
      className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 px-5 py-5 my-6 backdrop-blur-md transition-colors"
    >
      <div className="space-y-4">
        {!isPro && !dismissed && (feed?.enabled ?? true) && activeAd && (
          <div className="rounded-xl border border-blue-200 dark:border-blue-500/30 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 dark:from-slate-900 dark:via-blue-950/80 dark:to-indigo-950/80 p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1 flex-1 min-w-[240px]">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/25">
                {activeAd.tag}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeAd.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">{activeAd.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={activeAd.ctaUrl}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
              >
                {activeAd.ctaText}
              </a>
              <button
                type="button"
                onClick={() => {
                  setDismissed(true);
                  try {
                    window.sessionStorage.setItem("qud_ad_dismissed", "1");
                  } catch {}
                }}
                className="px-2.5 py-1.5 rounded-md bg-slate-200/80 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-xs text-slate-700 dark:text-slate-200 transition-colors"
                aria-label={isAr ? "إغلاق الإعلان مؤقتاً" : "Dismiss ad"}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="font-medium text-slate-700 dark:text-slate-200">
            {isAr ? (
              <>
                من تقديم شركة <strong className="text-blue-600 dark:text-blue-400">QudSystem</strong> •{" "}
                <span>{displayName}</span>{" "}
                <span className="text-slate-500 dark:text-slate-400">({displayCategory})</span>
              </>
            ) : (
              <>
                Presented by <strong className="text-blue-600 dark:text-blue-400">QudSystem</strong> •{" "}
                <span>{displayName}</span>{" "}
                <span className="text-slate-500 dark:text-slate-400">({displayCategory})</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-800 dark:text-violet-200 border border-violet-300 dark:border-violet-500/30 font-semibold">
              {isAr ? "🚀 قريباً / قادم: حزمة Qud Office AI" : "🚀 Coming Soon: Qud Office AI Suite"}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 font-semibold">
              {isPro
                ? isAr
                  ? "✓ النسخة المدفوعة — بدون إعلانات"
                  : "✓ Paid Edition — Ad-Free"
                : isAr
                  ? "الباقات المدفوعة (بدون إعلانات) متاحة قريباً"
                  : "Ad-Free Paid Plans Coming Soon"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QudEcosystemBanner;
