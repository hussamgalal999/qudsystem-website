export interface LocalizedText {
  en: string
  ar: string
}

export interface FlagshipProduct {
  id: string
  name: string
  tagline: LocalizedText
  description: LocalizedText
  category: LocalizedText
  status: LocalizedText
  highlights: { en: string[]; ar: string[] }
  techStack: string[]
  accent: string
  iconName: "cpu" | "sparkles" | "pen" | "graduation" | "blocks" | "bot" | "briefcase"
}

export interface ServicePackage {
  id: string
  name: LocalizedText
  badge: LocalizedText
  description: LocalizedText
  startingNote: LocalizedText
  features: { en: string[]; ar: string[] }
  services: { en: string[]; ar: string[] }
  highlighted?: boolean
}

export interface SeasonalOccasion {
  id: string
  name: string
  nameAr: string
  badge: string
  badgeAr: string
  discount: number
  emoji: string
  color: string
  desc: string
  descAr: string
  services: string[]
  servicesAr: string[]
  dates?: { start: string; end: string }[]
  fixedDate?: { month: number; day: number }
  duration?: number
  preStart?: number
}

export const QUD_CONTACT = {
  company: "QudSystem",
  fullTitle: "QudSystem Software & IT Solutions",
  email: "qudsystemltd@gmail.com",
  phone: "+20 011 518 580 57",
  phoneHref: "tel:+201151858057",
  whatsappDigits: "201151858057",
  addressEn: "Corniche El Nile Street, Minya, Egypt",
  addressAr: "شارع كورنيش النيل، المنيا، مصر",
  siteUrl: "https://qudsystem.com",
} as const

export const flagshipProducts: FlagshipProduct[] = [
  {
    id: "qud-office-ai",
    name: "Qud Office AI Suite",
    tagline: {
      en: "Unified Next-Gen Intelligent Office & Knowledge Suite",
      ar: "الحزمة المكتبية الذكية الموحدة لإدارة المستندات والمعرفة",
    },
    description: {
      en: "All-in-one AI workspace unifying Docs, Neural Sheets, Agentic Slides, Smart Mail triage, and Enterprise Knowledge Vault.",
      ar: "بيئة عمل مكتبية متكاملة تجمع مستندات الذكاء الاصطناعي، الجداول التفاعلية، العروض التقديمية، والبريد الذكي مع خزينة معرفة مؤسسية مشفرة.",
    },
    category: { en: "Office AI Suite", ar: "حزمة مكتبية ذكية" },
    status: { en: "Coming Soon", ar: "قريباً" },
    highlights: {
      en: ["Qud Docs & Neural Sheets AI", "Agentic Presentation Builder", "100% Ad-Free Paid Tiers"],
      ar: ["محرر مستندات وجداول ذكية", "صانع عروض تقديمية ذاتي", "خالٍ تماماً 100% من الإعلانات بالباقات المدفوعة"],
    },
    techStack: ["Next.js", "AI Agents", "TypeScript", "RAG", "PostgreSQL"],
    accent: "from-blue-600 via-indigo-600 to-purple-600",
    iconName: "sparkles",
  },
  {
    id: "qudron",
    name: "Qudron",
    tagline: {
      en: "Autonomous AI Engineering & Orchestration",
      ar: "منصة هندسة البرمجيات وتنسيق الوكلاء بالذكاء الاصطناعي",
    },
    description: {
      en: "Intelligent multi-agent coding and DevOps workspace engineered to accelerate architecture, verification, and zero-regression delivery.",
      ar: "بيئة تطوير ذكية متعددة الوكلاء لتسريع بناء الأنظمة البرمجية وفحص الجودة وضمان التسليم دون أي أخطاء ارتدادية.",
    },
    category: { en: "AI Platform", ar: "منصة ذكاء اصطناعي" },
    status: { en: "Flagship", ar: "المنتج الرئيسي" },
    highlights: {
      en: ["Multi-Agent Orchestration", "Zero-Regression Safety Gates", "Bilingual Developer Experience"],
      ar: ["تنسيق الوكلاء المتعددين", "بوابات أمان ومنع التراجع", "تجربة مطور ثنائية اللغة"],
    },
    techStack: ["TypeScript", "Next.js", "AI Agents", "MCP"],
    accent: "from-blue-600 to-indigo-600",
    iconName: "cpu",
  },
  {
    id: "dragon-r1-b1",
    name: "Dragon R1 / B1",
    tagline: {
      en: "Dual-Core Reasoning & Business Intelligence",
      ar: "محرك مزدوج للتحليل العميق وذكاء الأعمال",
    },
    description: {
      en: "Unified analytical engine combining R1 deep research synthesis with B1 real-time business automation, KPIs, and operational control.",
      ar: "محرك تحليلي متكامل يجمع بين قدرات البحث والاستنتاج في R1 وأتمتة الأعمال ومؤشرات الأداء في B1.",
    },
    category: { en: "Enterprise AI", ar: "ذكاء مؤسسي" },
    status: { en: "Core Suite", ar: "منظومة أساسية" },
    highlights: {
      en: ["R1 Deep Reasoning Engine", "B1 Business Ops Cockpit", "Real-Time Decision Streams"],
      ar: ["محرك استنتاج عميق R1", "لوحة عمليات أعمال B1", "تدفقات قرارات لحظية"],
    },
    techStack: ["Python", "Node.js", "PostgreSQL", "Docker"],
    accent: "from-purple-600 to-pink-600",
    iconName: "sparkles",
  },
  {
    id: "cvpen-penrate",
    name: "CVPen / PenRate",
    tagline: {
      en: "Smart Talent Scoring & Evaluation Engine",
      ar: "نظام تقييم السير الذاتية والأداء الذكي",
    },
    description: {
      en: "Automated CV parsing, candidate-role matching, and structured performance rating platform built for HR teams and recruiters.",
      ar: "منصة ذكية لتحليل السير الذاتية ومطابقة المرشحين وإدارة التقييمات المهنية بدقة لفرق الموارد البشرية.",
    },
    category: { en: "HR Tech", ar: "تقنيات الموارد البشرية" },
    status: { en: "Production", ar: "متاح للإنتاج" },
    highlights: {
      en: ["AI Resume Scoring", "Structured PenRate Rubrics", "Arabic & English Parsing"],
      ar: ["تقييم السير الذاتية بالذكاء الاصطناعي", "معايير PenRate المنظمة", "دعم العربية والإنجليزية"],
    },
    techStack: ["Next.js", "NLP", "Tailwind CSS", "REST API"],
    accent: "from-emerald-600 to-teal-600",
    iconName: "pen",
  },
  {
    id: "qudschool",
    name: "QudSchool",
    tagline: {
      en: "Complete Digital Campus & LMS Ecosystem",
      ar: "المنظومة الشاملة لإدارة المدارس والتعليم الرقمي",
    },
    description: {
      en: "End-to-end educational management suite covering admissions, attendance, live LMS classrooms, grading, and parent portals.",
      ar: "منظومة تعليمية متكاملة تشمل شؤون الطلاب، الحضور، الفصول التفاعلية، الاختبارات، وبوابة أولياء الأمور.",
    },
    category: { en: "EdTech", ar: "تكنولوجيا التعليم" },
    status: { en: "Active Suite", ar: "منظومة نشطة" },
    highlights: {
      en: ["Student & Parent Portals", "Automated Grading & Reports", "Multi-Branch Cloud Ready"],
      ar: ["بوابات للطلاب وأولياء الأمور", "تصحيح وتقارير آلية", "جاهز لإدارة عدة فروع سحابياً"],
    },
    techStack: ["React", "Node.js", "MongoDB", "WebRTC"],
    accent: "from-cyan-600 to-blue-600",
    iconName: "graduation",
  },
  {
    id: "buildx",
    name: "BuildX",
    tagline: {
      en: "Modular Rapid Application & SaaS Builder",
      ar: "منصة بناء التطبيقات السريع والأنظمة المعيارية",
    },
    description: {
      en: "Composable web and SaaS scaffolding architecture that turns business blueprints into production-ready portals in record time.",
      ar: "معمارية معيارية متطورة لتحويل أفكار المشاريع إلى منصات ويب وSaaS جاهزة للإطلاق في وقت قياسي.",
    },
    category: { en: "Developer Tooling", ar: "أدوات التطوير" },
    status: { en: "Platform", ar: "منصة تطوير" },
    highlights: {
      en: ["Reusable UI & Auth Blocks", "Cloud-Native Deployment", "High Performance Templates"],
      ar: ["مكونات واجهة وحماية جاهزة", "نشر سحابي فوري", "قوالب عالية الأداء"],
    },
    techStack: ["Next.js", "TypeScript", "Vercel", "Edge"],
    accent: "from-orange-500 to-amber-600",
    iconName: "blocks",
  },
  {
    id: "kenzy-ai",
    name: "Kenzy AI",
    tagline: {
      en: "Bilingual Conversational & Knowledge Assistant",
      ar: "مساعد المحادثة الذكي وإدارة المعرفة بالعربية والإنجليزية",
    },
    description: {
      en: "Always-on customer support and enterprise knowledge assistant fluent in Arabic and English with WhatsApp and web integration.",
      ar: "مساعد ذكي لخدمة العملاء وإدارة المعرفة المؤسسية بطلاقة في العربية والإنجليزية مع ربط الويب وواتساب.",
    },
    category: { en: "Conversational AI", ar: "الذكاء التحاوري" },
    status: { en: "Live AI", ar: "ذكاء اصطناعي حي" },
    highlights: {
      en: ["Native RTL Arabic Support", "24/7 Automated Triage", "Custom Knowledge Base"],
      ar: ["دعم أصيل للغة العربية", "استجابة آلية على مدار الساعة", "قاعدة معرفة مخصصة"],
    },
    techStack: ["Gemini AI", "Next.js", "RAG", "WhatsApp API"],
    accent: "from-violet-600 to-purple-600",
    iconName: "bot",
  },
  {
    id: "qudpro",
    name: "QudPro",
    tagline: {
      en: "Unified ERP, CRM & Operations Suite",
      ar: "حزمة الأعمال الاحترافية للمحاسبة والمبيعات والتشغيل",
    },
    description: {
      en: "Streamlined business management software unifying CRM pipelines, smart invoicing, inventory control, and executive analytics.",
      ar: "نظام إدارة أعمال متكامل يجمع إدارة العملاء، الفوترة الذكية، المخزون، ولوحات التقارير التنفيذية.",
    },
    category: { en: "Business Ops", ar: "إدارة الأعمال" },
    status: { en: "Enterprise", ar: "للمؤسسات" },
    highlights: {
      en: ["Invoicing & Cashflow Tracking", "CRM & Lead Pipelines", "Role-Based Access Control"],
      ar: ["متابعة الفواتير والتدفق النقدي", "إدارة المبيعات والعملاء", "صلاحيات دقيقة للفرق"],
    },
    techStack: ["React", "PostgreSQL", "Docker", "AWS"],
    accent: "from-rose-600 to-red-600",
    iconName: "briefcase",
  },
]

export const servicePackages: ServicePackage[] = [
  {
    id: "starter-launch",
    name: { en: "Starter Digital Launch", ar: "باقة الانطلاق الرقمي" },
    badge: { en: "Startups & SMEs", ar: "للشركات الناشئة" },
    description: {
      en: "High-converting bilingual web presence, responsive UI/UX, SEO foundation, and WhatsApp lead capture.",
      ar: "موقع تعريفي أو صفحة هبوط ثنائية اللغة عالية الأداء مع تهيئة محركات البحث وربط واتساب.",
    },
    startingNote: { en: "Fast 2-Week Delivery", ar: "تسليم سريع خلال أسبوعين" },
    features: {
      en: [
        "Bilingual AR (RTL) / EN Interface",
        "Technical SEO, Sitemap & llms.txt",
        "WhatsApp & Contact API Integration",
      ],
      ar: [
        "واجهة ثنائية اللغة (عربي RTL / إنجليزي)",
        "تهيئة SEO وملفات Sitemap وllms.txt",
        "ربط مباشر مع واتساب ونماذج التواصل",
      ],
    },
    services: {
      en: ["Web Apps", "UI/UX Design"],
      ar: ["تطبيقات ويب", "تصميم واجهات"],
    },
  },
  {
    id: "growth-custom-suite",
    name: { en: "Growth Custom Software & Mobile", ar: "باقة النمو والبرمجيات المخصصة" },
    badge: { en: "Most Popular", ar: "الأكثر طلباً" },
    description: {
      en: "Full-stack custom web or cross-platform mobile applications with cloud backend, dashboards, and AI automation.",
      ar: "تطوير أنظمة مخصصة أو تطبيقات موبايل مع لوحات تحكم سحابية وأتمتة ذكية بالذكاء الاصطناعي.",
    },
    startingNote: { en: "Includes Seasonal Offer", ar: "تشمل الخصومات الموسمية" },
    features: {
      en: [
        "Custom Web & Mobile (iOS / Android)",
        "Role-Based Dashboard & Analytics",
        "Kenzy AI / Smart Automation Ready",
      ],
      ar: [
        "تطبيقات ويب وموبايل (iOS / Android)",
        "لوحات تحكم وتقارير متقدمة",
        "جاهزية للربط مع الذكاء الاصطناعي",
      ],
    },
    services: {
      en: ["Custom Software", "Mobile Apps", "Web Apps"],
      ar: ["برمجيات مخصصة", "تطبيقات موبايل", "تطبيقات ويب"],
    },
    highlighted: true,
  },
  {
    id: "enterprise-cloud-ai",
    name: { en: "Enterprise Cloud & AI Transformation", ar: "باقة المؤسسات والسحابة والذكاء" },
    badge: { en: "Enterprise Scale", ar: "للمؤسسات الكبرى" },
    description: {
      en: "End-to-end ERP/CRM modernization, AWS/Azure/GCP cloud migration, DevOps CI/CD, and dedicated AI integration.",
      ar: "تحول رقمي شامل، ترحيل سحابي، أتمتة DevOps، ودمج أنظمة Qudron وDragon وQudPro.",
    },
    startingNote: { en: "Dedicated Engineering Pod", ar: "فريق هندسي مخصص" },
    features: {
      en: [
        "Cloud Migration & Kubernetes DevOps",
        "Legacy System Modernization",
        "24/7 SLA & Security Audits",
      ],
      ar: [
        "ترحيل سحابي وبنية Kubernetes",
        "تحديث الأنظمة القديمة وربطها",
        "دعم 24/7 ومراجعات أمان شاملة",
      ],
    },
    services: {
      en: ["Cloud Solutions", "Custom Software", "AI & DevOps"],
      ar: ["حلول سحابية", "برمجيات مخصصة", "ذكاء اصطناعي"],
    },
  },
]

// Ported from QudSystem Smart Promotional Offers Engine (offers.js)
export const seasonalOccasions: SeasonalOccasion[] = [
  {
    id: "ramadan",
    name: "Ramadan Kareem",
    nameAr: "رمضان كريم 🌙",
    discount: 30,
    emoji: "🌙",
    color: "#8b5cf6",
    badge: "Ramadan Special",
    badgeAr: "عرض رمضان",
    desc: "Blessed Ramadan! Special discounts on all our digital solutions. Transform your business this holy month.",
    descAr: "رمضان مبارك! خصومات استثنائية على جميع حلولنا الرقمية. حوّل أعمالك في هذا الشهر الكريم.",
    services: ["Custom Software", "Web Apps", "Mobile Apps", "Cloud Solutions"],
    servicesAr: ["برمجيات مخصصة", "تطبيقات ويب", "تطبيقات موبايل", "حلول سحابية"],
    dates: [
      { start: "2025-03-01", end: "2025-03-29" },
      { start: "2026-02-18", end: "2026-03-19" },
      { start: "2027-02-08", end: "2027-03-09" },
      { start: "2028-01-28", end: "2028-02-25" },
    ],
    preStart: 3,
  },
  {
    id: "eid-fitr",
    name: "Eid Al-Fitr Mubarak",
    nameAr: "عيد الفطر المبارك 🎉",
    discount: 35,
    emoji: "🎁",
    color: "#10b981",
    badge: "Eid Offer",
    badgeAr: "عرض العيد",
    desc: "Eid Mubarak! Celebrate with our biggest Eid offer — premium quality at unbeatable prices!",
    descAr: "عيد مبارك! احتفل معنا بأكبر عروض العيد — جودة عالية بأسعار لا تُقاوم!",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    dates: [
      { start: "2025-03-30", end: "2025-04-03" },
      { start: "2026-03-20", end: "2026-03-24" },
      { start: "2027-03-10", end: "2027-03-14" },
      { start: "2028-02-26", end: "2028-03-01" },
    ],
    preStart: 2,
  },
  {
    id: "eid-adha",
    name: "Eid Al-Adha Mubarak",
    nameAr: "عيد الأضحى المبارك 🐏",
    discount: 35,
    emoji: "🕌",
    color: "#059669",
    badge: "Eid Al-Adha Deal",
    badgeAr: "عرض عيد الأضحى",
    desc: "Eid Al-Adha Mubarak! Exclusive deals — premium digital delivery at celebratory rates.",
    descAr: "عيد أضحى مبارك! عروض حصرية على جميع حلول البرمجيات والتطبيقات.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    dates: [
      { start: "2025-06-06", end: "2025-06-10" },
      { start: "2026-05-27", end: "2026-05-31" },
      { start: "2027-05-17", end: "2027-05-21" },
      { start: "2028-05-05", end: "2028-05-09" },
    ],
    preStart: 2,
  },
  {
    id: "oct6",
    name: "October 6 Victory",
    nameAr: "نصر أكتوبر المجيد ⚔️",
    discount: 30,
    emoji: "🏆",
    color: "#b91c1c",
    badge: "Victory Sale",
    badgeAr: "عرض النصر",
    desc: "Victory to your business! Our October Victory offer delivers winning software solutions.",
    descAr: "النصر لأعمالك! عروض نصر أكتوبر تقدم لك حلولاً رقمية رابحة.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 10, day: 6 },
    duration: 3,
    preStart: 2,
  },
  {
    id: "entrepreneurs",
    name: "World Entrepreneurs Day",
    nameAr: "يوم رواد الأعمال العالمي 🚀",
    discount: 25,
    emoji: "🚀",
    color: "#3b82f6",
    badge: "Startup Deal",
    badgeAr: "عرض رواد الأعمال",
    desc: "Built for builders! Massive discounts for entrepreneurs and startups.",
    descAr: "صُنع لصانعي المستقبل! خصومات ضخمة لرواد الأعمال والشركات الناشئة.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 8, day: 21 },
    duration: 3,
    preStart: 2,
  },
  {
    id: "black-friday",
    name: "Black Friday",
    nameAr: "الجمعة البيضاء 🖤",
    discount: 50,
    emoji: "🏷️",
    color: "#171717",
    badge: "BLACK FRIDAY",
    badgeAr: "الجمعة البيضاء",
    desc: "BIGGEST SALE OF THE YEAR! Up to 50% OFF custom software, web, mobile, and cloud packages.",
    descAr: "أكبر تخفيض في السنة! خصم يصل إلى 50% على جميع باقات البرمجيات والسحابة.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 11, day: 28 },
    duration: 3,
    preStart: 5,
  },
  {
    id: "cyber-monday",
    name: "Cyber Monday",
    nameAr: "إثنين الإنترنت 💻",
    discount: 45,
    emoji: "💻",
    color: "#0ea5e9",
    badge: "Cyber Monday",
    badgeAr: "عرض إثنين الإنترنت",
    desc: "Cyber Monday Mega Deals! Exclusive pricing on web platforms and cloud modernization.",
    descAr: "عروض إثنين الإنترنت الضخمة! أسعار حصرية على المنصات الرقمية والحلول السحابية.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 12, day: 1 },
    duration: 2,
    preStart: 0,
  },
  {
    id: "year-end",
    name: "Year-End Clearance",
    nameAr: "تخفيضات نهاية العام 🎊",
    discount: 40,
    emoji: "💰",
    color: "#7c3aed",
    badge: "Year-End Sale",
    badgeAr: "تخفيض نهاية العام",
    desc: "Year-End Mega Sale! Lock in this year's software engineering rates before the new year.",
    descAr: "تخفيضات نهاية العام الضخمة! احجز أسعار تطوير مشروعك قبل نهاية العام.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 12, day: 26 },
    duration: 6,
    preStart: 0,
  },
  {
    id: "new-year",
    name: "New Year",
    nameAr: "رأس السنة الميلادية 🎆",
    discount: 30,
    emoji: "🥂",
    color: "#eab308",
    badge: "New Year Sale",
    badgeAr: "عرض رأس السنة",
    desc: "New Year, New Digital Strategy! Start the year with up to 30% OFF all solutions.",
    descAr: "سنة جديدة سعيدة! ابدأ العام بخصم يصل إلى 30% على جميع الخدمات.",
    services: ["All Services"],
    servicesAr: ["جميع الخدمات"],
    fixedDate: { month: 1, day: 1 },
    duration: 5,
    preStart: 3,
  },
]

const FRIDAY_FLASH_DEAL: SeasonalOccasion = {
  id: "friday-deal",
  name: "Friday Flash Deal",
  nameAr: "عرض الجمعة ⚡",
  discount: 15,
  emoji: "⚡",
  color: "#f59e0b",
  badge: "Friday Flash",
  badgeAr: "عرض فلاش الجمعة",
  desc: "Every Friday is a deal day! Exclusive weekly discounts on Web Apps & Mobile Development.",
  descAr: "كل جمعة يوم عروض! خصومات أسبوعية حصرية على تطبيقات الويب والموبايل.",
  services: ["Web Apps", "Mobile Apps"],
  servicesAr: ["تطبيقات ويب", "تطبيقات موبايل"],
}

const DEFAULT_PARTNER_OFFER: SeasonalOccasion = {
  id: "unified-launch",
  name: "Free Consultation & Architecture Audit",
  nameAr: "استشارة تقنية مجانية + خصم الباقات",
  discount: 20,
  emoji: "🚀",
  color: "#3b82f6",
  badge: "Unified Launch Offer",
  badgeAr: "عرض الإطلاق الموحد",
  desc: "Get a free technical roadmap & 20% launch savings across Custom Software, Web, Mobile & Cloud packages.",
  descAr: "احصل على استشارة هندسية مجانية وخصم 20% على باقات البرمجيات المخصصة والويب والموبايل والسحابة.",
  services: ["Custom Software", "Web Apps", "Mobile Apps", "Cloud Solutions"],
  servicesAr: ["برمجيات مخصصة", "تطبيقات ويب", "تطبيقات موبايل", "حلول سحابية"],
}

function parseLocalDate(str: string): Date {
  const [y, m, d] = str.split("-").map(Number)
  return new Date(y, m - 1, d)
}

function addDays(date: Date, days: number): Date {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  return copy
}

export function getActiveSeasonalOffer(referenceDate: Date = new Date()): SeasonalOccasion {
  const now = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate())
  const year = now.getFullYear()
  const matches: SeasonalOccasion[] = []

  for (const occ of seasonalOccasions) {
    if (occ.dates) {
      for (const range of occ.dates) {
        const start = addDays(parseLocalDate(range.start), -(occ.preStart || 0))
        const end = parseLocalDate(range.end)
        end.setHours(23, 59, 59, 999)
        if (now >= start && now <= end) {
          matches.push(occ)
          break
        }
      }
    } else if (occ.fixedDate) {
      const base = new Date(year, occ.fixedDate.month - 1, occ.fixedDate.day)
      const start = addDays(base, -(occ.preStart || 0))
      const end = addDays(base, (occ.duration || 1) - 1)
      end.setHours(23, 59, 59, 999)
      if (now >= start && now <= end) {
        matches.push(occ)
      }
    }
  }

  if (matches.length > 0) {
    matches.sort((a, b) => b.discount - a.discount)
    return matches[0]
  }

  if (now.getDay() === 5) {
    return FRIDAY_FLASH_DEAL
  }

  return DEFAULT_PARTNER_OFFER
}

export function buildOfferWhatsAppUrl(offer: SeasonalOccasion, packageName?: string): string {
  const target = packageName ? ` (${packageName})` : ""
  const msg = encodeURIComponent(
    `${offer.emoji} مرحباً فريق ${QUD_CONTACT.company}! أنا مهتم بعرض ${offer.badgeAr}${target} (خصم ${offer.discount}%).\n` +
      `Hi ${QUD_CONTACT.company} team! I'm interested in the ${offer.badge}${target} (${offer.discount}% OFF). Please share details.`
  )
  return `https://wa.me/${QUD_CONTACT.whatsappDigits}?text=${msg}`
}
