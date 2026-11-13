/**
 * QudSystem Unified Ecosystem Banner & Ad Slot Widget
 * Version: 1.0.0
 * Zero-dependency, standalone embeddable banner for all QudSystem apps & websites.
 * 
 * Rules:
 * 1. Checks license tier: if pro/enterprise or QUD_PAID_TIER === true -> completely hidden (100% ad-free).
 * 2. Fetches /ads/qud-ad-slot.json with built-in resilient fallback.
 * 3. Highlights: "قريباً / قادم: حزمة Qud Office AI" (Coming Soon: Qud Office AI Suite).
 * 4. Transparently notes that Paid Plans (Coming Soon) provide a 100% ad-free experience.
 */
(function (global) {
  'use strict';

  // Do not run on SSR / node
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Prevent multiple initializations
  if (global.__QUD_ECOSYSTEM_BANNER_INITIALIZED__) {
    return;
  }
  global.__QUD_ECOSYSTEM_BANNER_INITIALIZED__ = true;

  const CONFIG = {
    configUrl: '/ads/qud-ad-slot.json',
    storageKey: 'qud_ad_dismissed_until',
    proTiers: ['pro', 'enterprise', 'commercial', 'lifetime', 'premium'],
    dismissDurationMs: 6 * 60 * 60 * 1000 // 6 hours
  };

  /**
   * Check if user is on a paid/pro tier (100% ad-free)
   */
  function isAdFree() {
    try {
      if (global.QUD_PAID_TIER === true) return true;
      const licenseTier = (localStorage.getItem('qud_license_tier') || '').toLowerCase().trim();
      if (CONFIG.proTiers.includes(licenseTier)) return true;
      if (localStorage.getItem('qud_paid_tier') === 'true') return true;
    } catch (e) {
      // localStorage may fail in restricted sandboxes
    }
    return false;
  }

  /**
   * Check if user previously dismissed the ad slot recently
   */
  function isDismissed() {
    try {
      const dismissedUntil = localStorage.getItem(CONFIG.storageKey);
      if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
        return true;
      }
    } catch (e) {
      // Ignore storage errors
    }
    return false;
  }

  function setDismissed() {
    try {
      localStorage.setItem(CONFIG.storageKey, String(Date.now() + CONFIG.dismissDurationMs));
    } catch (e) {}
  }

  /**
   * Safe language detector (defaults to Arabic if site or doc is Arabic)
   */
  function isArabic() {
    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    const htmlDir = (document.documentElement.dir || '').toLowerCase();
    return htmlLang.startsWith('ar') || htmlDir === 'rtl';
  }

  /**
   * Fallback ad data in case network is offline
   */
  const FALLBACK_DATA = {
    paidTierInfo: {
      message: "Paid Plans coming soon will provide a 100% ad-free experience across all QudSystem apps.",
      messageAr: "الخطط المدفوعة (قريباً) ستوفر تجربة خالية تماماً 100% من الإعلانات عبر جميع منتجات وحزم كود سيستم."
    },
    upcomingFlagship: {
      name: "Qud Office AI Suite",
      nameAr: "حزمة Qud Office AI",
      status: "Coming Soon",
      statusAr: "قريباً / قادم",
      headline: "Coming Soon: Qud Office AI Suite",
      headlineAr: "قريباً / قادم: حزمة Qud Office AI",
      description: "Next-gen intelligent office suite: AI Docs, Smart Sheets, Agentic Slides & Neural Knowledge.",
      descriptionAr: "الحزمة المكتبية الذكية من الجيل القادم: مستندات، جداول، عروض تقديمية وبريد ذكي متكامل.",
      ctaText: "Explore Early Access",
      ctaTextAr": "استكشف الحزمة المرتقبة",
      url: "/#qud-office-ai"
    }
  };

  /**
   * Render the banner HTML inside a target container or create a sticky slot
   */
  function renderBanner(data) {
    if (isAdFree()) {
      // Remove any existing slot if upgraded to pro
      const existing = document.getElementById('qud-ecosystem-banner');
      if (existing) existing.remove();
      return;
    }

    if (isDismissed()) {
      return;
    }

    const ar = isArabic();
    const info = data.paidTierInfo || FALLBACK_DATA.paidTierInfo;
    const flagship = data.upcomingFlagship || FALLBACK_DATA.upcomingFlagship;

    let target = document.getElementById('qud-ad-slot');
    const isInline = !!target;

    if (!target) {
      target = document.createElement('div');
      target.id = 'qud-ad-slot-sticky';
      target.style.position = 'fixed';
      target.style.bottom = '16px';
      target.style.left = '16px';
      target.style.right = '16px';
      target.style.maxWidth = '1120px';
      target.style.margin = '0 auto';
      target.style.zIndex = '99998';
      target.style.transition = 'all 0.3s ease';
      document.body.appendChild(target);
    }

    const containerDir = ar ? 'rtl' : 'ltr';
    const title = ar ? (flagship.headlineAr || "قريباً / قادم: حزمة Qud Office AI") : (flagship.headline || "Coming Soon: Qud Office AI Suite");
    const desc = ar ? (flagship.descriptionAr || "الحزمة المكتبية المتكاملة بالذكاء الاصطناعي من كود سيستم") : (flagship.description || "The next-generation AI office suite from QudSystem");
    const badgeText = ar ? (flagship.statusAr || "قريباً") : (flagship.status || "Coming Soon");
    const ctaText = ar ? (flagship.ctaTextAr || "انضم لقائمة الانتظار") : (flagship.ctaText || "Join Waitlist");
    const paidNotice = ar ? info.messageAr : info.message;
    const footerText = ar
      ? "من تقديم شركة QudSystem | حزمة برمجية متكاملة — قادم: حزمة Qud Office AI"
      : "Presented by QudSystem | Unified Software Suite — Coming Soon: Qud Office AI Suite";

    target.innerHTML = `
      <div id="qud-ecosystem-banner" dir="${containerDir}" style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 100%);
        color: #ffffff;
        border: 1px solid rgba(99, 102, 241, 0.35);
        border-radius: 14px;
        padding: 14px 18px;
        box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 102, 241, 0.2);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-sizing: border-box;
      ">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              color: #ffffff;
              font-size: 11px;
              font-weight: 700;
              padding: 3px 9px;
              border-radius: 20px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
            ">✨ ${badgeText}</span>
            <strong style="font-size: 15px; font-weight: 700; color: #f8fafc; letter-spacing: -0.2px;">
              ${title}
            </strong>
          </div>
          
          <button id="qud-ad-close-btn" aria-label="Dismiss banner" style="
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: #94a3b8;
            font-size: 16px;
            cursor: pointer;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            padding: 0;
            transition: all 0.2s ease;
          " onmouseover="this.style.background='rgba(255,255,255,0.2)';this.style.color='#ffffff'" onmouseout="this.style.background='rgba(255,255,255,0.1)';this.style.color='#94a3b8'">×</button>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
          <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #cbd5e1; max-width: 760px;">
            ${desc}
          </p>
          <a href="${flagship.url || '/#qud-office-ai'}" style="
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
            color: #ffffff;
            font-size: 12px;
            font-weight: 600;
            padding: 7px 16px;
            border-radius: 8px;
            text-decoration: none;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
            transition: transform 0.2s ease;
          " onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">
            ${ctaText} →
          </a>
        </div>

        <div style="
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          color: #94a3b8;
          flex-wrap: wrap;
          gap: 6px;
        ">
          <span>💼 ${footerText}</span>
          <span style="color: #38bdf8;">🛡️ ${paidNotice}</span>
        </div>
      </div>
    `;

    const closeBtn = document.getElementById('qud-ad-close-btn');
    if (closeBtn) {
      closeBtn.onclick = function () {
        setDismissed();
        const banner = document.getElementById('qud-ecosystem-banner');
        if (banner) {
          banner.style.opacity = '0';
          banner.style.transform = 'translateY(10px)';
          setTimeout(() => {
            if (isInline) {
              target.innerHTML = '';
            } else {
              target.remove();
            }
          }, 250);
        }
      };
    }
  }

  /**
   * Main initializer
   */
  function init() {
    if (isAdFree() || isDismissed()) {
      return;
    }

    fetch(CONFIG.configUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Network error ' + res.status);
        return res.json();
      })
      .then((data) => {
        if (data && data.active !== false) {
          renderBanner(data);
        }
      })
      .catch(() => {
        // Fallback to offline data
        renderBanner(FALLBACK_DATA);
      });
  }

  // Hook into DOM ready or execute immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 300);
  }

  // Expose API for external callers (e.g. Next.js components or manual re-render)
  global.QudEcosystemBanner = {
    init: init,
    isAdFree: isAdFree,
    setProTier: function (tier) {
      try {
        localStorage.setItem('qud_license_tier', tier || 'pro');
      } catch (e) {}
      const el = document.getElementById('qud-ecosystem-banner');
      if (el) el.remove();
    }
  };

})(typeof window !== 'undefined' ? window : this);
