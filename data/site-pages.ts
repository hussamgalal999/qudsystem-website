export interface PageSectionCard {
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  badgeEn?: string
  badgeAr?: string
  metaEn?: string
  metaAr?: string
  href?: string
}

export interface CorporatePageConfig {
  slug: string
  badgeEn: string
  badgeAr: string
  titleEn: string
  titleAr: string
  subtitleEn: string
  subtitleAr: string
  ctaLabelEn?: string
  ctaLabelAr?: string
  ctaHref?: string
  cards: PageSectionCard[]
}

export const corporatePages: Record<string, CorporatePageConfig> = {
  about: {
    slug: "about",
    badgeEn: "Since 2019 • Minya & Cairo, Egypt",
    badgeAr: "منذ 2019 • المنيا والقاهرة، مصر",
    titleEn: "About QudSystem",
    titleAr: "عن شركة QudSystem",
    subtitleEn:
      "We build scalable software, autonomous AI agents, cybersecurity platforms, and EdTech ecosystems — delivering 150+ projects for 50+ clients worldwide.",
    subtitleAr:
      "نبني برمجيات قابلة للتوسع، وكلاء ذكاء اصطناعي، منصات أمن سيبراني، وأنظمة تعليم رقمي — بأكثر من 150 مشروعاً ناجحاً لأكثر من 50 عميلاً.",
    ctaLabelEn: "Contact Our Team",
    ctaLabelAr: "تواصل مع فريقنا",
    ctaHref: "/contact",
    cards: [
      {
        titleEn: "150+ Delivered Projects",
        titleAr: "أكثر من 150 مشروعاً منجزاً",
        descEn: "Production web apps, mobile systems, enterprise SaaS, and AI automation pipelines.",
        descAr: "تطبيقات ويب وموبايل، أنظمة مؤسسية، وحلول أتمتة بالذكاء الاصطناعي.",
        badgeEn: "Track Record",
        badgeAr: "سجل الإنجاز",
      },
      {
        titleEn: "50+ Satisfied Clients & 25+ Awards",
        titleAr: "50+ عميلاً سعيداً و25+ جائزة",
        descEn: "Long-term technology partnerships built on security, speed, and measurable business impact.",
        descAr: "شراكات تقنية طويلة الأمد مبنية على الأمان والسرعة والعائد الفعلي.",
        badgeEn: "Trust",
        badgeAr: "موثوقية",
      },
      {
        titleEn: "Integrated Ecosystem → Qud Office AI",
        titleAr: "منظومة متكاملة ← Qud Office AI",
        descEn: "All QudSystem products converge into the upcoming Qud Office AI unified productivity suite.",
        descAr: "تتكامل كافة منتجات QudSystem لتصب في حزمة Qud Office AI المكتبية الذكية القادمة.",
        badgeEn: "Vision 2026",
        badgeAr: "رؤية 2026",
        href: "/qud-office-ai",
      },
    ],
  },
  features: {
    slug: "features",
    badgeEn: "Platform Capabilities",
    badgeAr: "قدرات المنصة",
    titleEn: "Core Engineering Features",
    titleAr: "المميزات الهندسية الأساسية",
    subtitleEn:
      "Every QudSystem application shares unified design tokens, bilingual RTL/LTR support, centralized ad-slot & licensing readiness, and high performance.",
    subtitleAr:
      "تشترك جميع تطبيقات QudSystem في نظام تصميم موحد، دعم كامل للعربية والإنجليزية، جاهزية التراخيص والباقات بدون إعلانات، وأداء فائق.",
    cards: [
      {
        titleEn: "Centralized Updatable Ad Slot",
        titleAr: "خانة إعلانية مركزية قابلة للتحديث",
        descEn: "Free community editions fetch live ecosystem announcements from a single JSON feed without redeploying.",
        descAr: "النسخ المجانية تجلب الإعلانات لحظياً من ملف مركزي واحد دون الحاجة لإعادة نشر المشاريع.",
        badgeEn: "Free Tier",
        badgeAr: "النسخة المجانية",
      },
      {
        titleEn: "Ad-Free Paid Plans (Coming Soon)",
        titleAr: "الباقات المدفوعة بدون إعلانات (قريباً)",
        descEn: "Upgrading to Paid Plans unlocks a 100% ad-free complete experience and enterprise SLAs.",
        descAr: "الترقية للباقات المدفوعة تمنح تجربة كاملة 100% بدون إعلانات مع مزايا مؤسسية متقدمة.",
        badgeEn: "Pro Tier",
        badgeAr: "الباقات المدفوعة",
        href: "/pricing",
      },
      {
        titleEn: "Bilingual RTL/LTR & Light/Dark Themes",
        titleAr: "ثنائية اللغة RTL/LTR والوضع النهاري والليلي",
        descEn: "Consistent accessibility and adaptive color tokens across Arabic and English interfaces.",
        descAr: "توافق بصري كامل مع اللغة العربية والإنجليزية وتبديل سلس بين الوضع الفاتح والداكن.",
        badgeEn: "UX System",
        badgeAr: "تجربة المستخدم",
      },
    ],
  },
  integrations: {
    slug: "integrations",
    badgeEn: "Ecosystem Connectivity",
    badgeAr: "التكاملات البرمجية",
    titleEn: "Integrations & Tech Stack",
    titleAr: "التكاملات والتقنيات المدعومة",
    subtitleEn:
      "Seamless integration with modern LLMs, MCP servers, cloud infrastructure, payment gateways, and enterprise APIs.",
    subtitleAr:
      "تكامل سلس مع نماذج الذكاء الاصطناعي، خوادم MCP، البنية السحابية، وبوابات الدفع الحديثة.",
    cards: [
      {
        titleEn: "AI & Agent Orchestration",
        titleAr: "الذكاء الاصطناعي ووكلاء الأتمتة",
        descEn: "OpenAI, Gemini, DeepSeek, Ollama, LangGraph, MCP, and custom tool-use pipelines.",
        descAr: "تكامل مباشر مع Gemini وOpenAI وOllama وLangGraph وبروتوكول MCP.",
        badgeEn: "AI Core",
        badgeAr: "نواة الذكاء",
      },
      {
        titleEn: "Web, Mobile & Cloud Native",
        titleAr: "الويب والموبايل والحوسبة السحابية",
        descEn: "Next.js 14, React, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, Docker, and Vercel.",
        descAr: "Next.js 14 وReact وTypeScript وFastAPI وPostgreSQL وDocker وVercel.",
        badgeEn: "Full Stack",
        badgeAr: "تطوير شامل",
      },
      {
        titleEn: "Security & Identity",
        titleAr: "الأمن السيبراني والهوية الرقمية",
        descEn: "Dragon R1/B1 security auditing, automated secret guards, and MyHowiya digital identity.",
        descAr: "منظومة Dragon R1/B1 للفحص الأمني وحماية الأسرار ومحفظة الهوية الرقمية.",
        badgeEn: "Security",
        badgeAr: "أمان",
      },
    ],
  },
  "work-process": {
    slug: "work-process",
    badgeEn: "Delivery Methodology",
    badgeAr: "منهجية التنفيذ",
    titleEn: "Our Engineering Work Process",
    titleAr: "آلية العمل في QudSystem",
    subtitleEn:
      "A disciplined 4-stage lifecycle ensuring zero-regression delivery from discovery to production.",
    subtitleAr:
      "دورة عمل هندسية من 4 مراحل تضمن الجودة وانعدام التراجع من التحليل حتى الإطلاق.",
    cards: [
      {
        titleEn: "01. Discovery & Architecture",
        titleAr: "01. التحليل والتصميم المعماري",
        descEn: "Requirements mapping, security threat modeling, and modular system contracts.",
        descAr: "تحليل المتطلبات، نمذجة الأمان، وتصميم معمارية معيارية قابلة للتوسع.",
      },
      {
        titleEn: "02. Rapid Iterative Build",
        titleAr: "02. التطوير المتكامل السريع",
        descEn: "TypeScript-first frontend & backend implementation with continuous visual verification.",
        descAr: "بناء الواجهات والأنظمة الخلفية مع فحص بصري واختبار مستمر.",
      },
      {
        titleEn: "03. Automated QA & Security Gates",
        titleAr: "03. بوابات الجودة والأمان",
        descEn: "Typechecking, production build verification, secret scanning, and accessibility audits.",
        descAr: "فحص الأنواع، اختبار البناء الإنتاجي، مسح الأسرار، ومراجعة إمكانية الوصول.",
      },
      {
        titleEn: "04. Deployment & Ecosystem Sync",
        titleAr: "04. النشر والمزامنة السحابية",
        descEn: "Zero-downtime deployment, SEO indexing, and continuous monitoring.",
        descAr: "نشر مستقر، تهيئة محركات البحث، ومراقبة مستمرة للأداء.",
      },
    ],
  },
  team: {
    slug: "team",
    badgeEn: "Leadership & Builders",
    badgeAr: "القيادة والمهندسون",
    titleEn: "Meet the QudSystem Team",
    titleAr: "فريق العمل في QudSystem",
    subtitleEn:
      "Architects, AI researchers, full-stack engineers, and cybersecurity specialists building next-generation software.",
    subtitleAr:
      "معماريو برمجيات، باحثو ذكاء اصطناعي، ومهندسو أمن سيبراني يصنعون الجيل القادم من الحلول الرقمية.",
    cards: [
      {
        titleEn: "Eng. Hussam Galal",
        titleAr: "م. حسام جلال",
        descEn: "CEO & Founder — Leads AI agent architecture, cybersecurity platforms (Dragon R1/B1), and the Qud Office AI ecosystem.",
        descAr: "المؤسس والرئيس التنفيذي — يقود هندسة وكلاء الذكاء الاصطناعي، أنظمة الأمن السيبراني دراجون ورؤية Qud Office AI.",
        badgeEn: "CEO & Founder",
        badgeAr: "المؤسس والرئيس التنفيذي",
      },
      {
        titleEn: "Eng. Omar Khalil",
        titleAr: "م. عمر خليل",
        descEn: "Technical Director — Directs engineering architecture, system reliability, and enterprise core services.",
        descAr: "المدير التقني — يشرف على الهندسة البرمجية، الموثوقية العالية والخدمات المؤسسية الأساسية.",
        badgeEn: "Technical Director",
        badgeAr: "المدير التقني",
      },
      {
        titleEn: "Eng. Ahmad Nasser",
        titleAr: "م. أحمد ناصر",
        descEn: "Lead Developer — Drives full-stack platforms, API gateways, and intelligent web applications.",
        descAr: "المطور الرئيسي — يقود تطوير المنصات السحابية، بوابات الـ APIs والتطبيقات الذكية.",
        badgeEn: "Lead Developer",
        badgeAr: "المطور الرئيسي",
      },
      {
        titleEn: "Eng. Rami Zaid",
        titleAr: "م. رامي زيد",
        descEn: "Project Manager — Oversees cross-product delivery, agile execution, and sprint alignment across all divisions.",
        descAr: "مدير المشاريع — يشرف على تسليم المشاريع، دورات التطوير الرشيقة وإدارة مخرجات الفرق التقنية.",
        badgeEn: "Project Manager",
        badgeAr: "مدير المشاريع",
      },
      {
        titleEn: "Eng. Layla Hassan",
        titleAr: "م. ليلى حسن",
        descEn: "UX/UI Director — Designs human-centric interfaces, design systems, and responsive digital experiences.",
        descAr: "مديرة تجربة وواجهة المستخدم UX/UI — تصمم الأنظمة البصرية الرقمية وتجارب الاستخدام الاحترافية.",
        badgeEn: "UX/UI Director",
        badgeAr: "مديرة UX/UI",
      },
      {
        titleEn: "Eng. Kareem Mahmoud",
        titleAr: "م. كريم محمود",
        descEn: "Systems Architect — Designs microservices, secure database topologies, and high-throughput infrastructure.",
        descAr: "معماري النظم — يضع معمارية الخدمات المصغرة، قواعد البيانات الآمنة والبنية السحابية عالية التحمل.",
        badgeEn: "Systems Architect",
        badgeAr: "معماري النظم",
      },
    ],
  },
  testimonials: {
    slug: "testimonials",
    badgeEn: "Client Voices",
    badgeAr: "شهادات العملاء",
    titleEn: "Client Testimonials & Impact",
    titleAr: "آراء العملاء وقصص النجاح",
    subtitleEn: "Trusted by 50+ organizations across manufacturing, healthcare, fintech, legal, and education.",
    subtitleAr: "ثقة أكثر من 50 مؤسسة في قطاعات الصناعة والصحة والتقنية المالية والتعليم والقانون.",
    cards: [
      {
        titleEn: "Sarah Johnson — CIO, Manufacturing",
        titleAr: "سارة جونسون — مديرة تقنية المعلومات",
        descEn: "QudSystem's ERP unified our operations and cut operational costs by 35% with real-time visibility.",
        descAr: "نظام QudSystem وحّد عملياتنا وخفّض التكاليف التشغيلية بنسبة 35%.",
        badgeEn: "Enterprise ERP",
        badgeAr: "أنظمة مؤسسية",
      },
      {
        titleEn: "Dr. Ahmed Mansour — EdTech Director",
        titleAr: "د. أحمد منصور — مدير منصة تعليمية",
        descEn: "QudSchool LMS scaled seamlessly to thousands of learners with AI-guided skill pathways.",
        descAr: "منصة QudSchool استوعبت آلاف المتعلمين بسلاسة مع مسارات مهارات ذكية.",
        badgeEn: "EdTech",
        badgeAr: "التعليم الرقمي",
      },
      {
        titleEn: "Karim Hassan — LegalTech Partner",
        titleAr: "كريم حسن — شريك استشارات قانونية",
        descEn: "Adliya transformed our legal research speed with accurate Arabic legal synthesis.",
        descAr: "مساعد عدلية ضاعف سرعة البحث القانوني لدينا بدقة عالية باللغة العربية.",
        badgeEn: "Legal AI",
        badgeAr: "الذكاء القانوني",
      },
    ],
  },
  blog: {
    slug: "blog",
    badgeEn: "Engineering Journal",
    badgeAr: "المدونة الهندسية",
    titleEn: "QudSystem Blog & Insights",
    titleAr: "مدونة ومقالات QudSystem",
    subtitleEn: "Deep dives on autonomous AI agents, Next.js architecture, cybersecurity, and Qud Office AI.",
    subtitleAr: "مقالات تقنية حول وكلاء الذكاء الاصطناعي، معمارية Next.js، الأمن السيبراني، ومستقبل Qud Office AI.",
    cards: [
      {
        titleEn: "Introducing the Unified QudSystem Ecosystem & Qud Office AI",
        titleAr: "إطلاق المنظومة الموحدة لشركة QudSystem وحزمة Qud Office AI القادمة",
        descEn: "How 30+ specialized apps unite under one architecture with centralized updates and ad-free paid tiers.",
        descAr: "كيف تتوحد أكثر من 30 أداة برمجية تحت معمارية واحدة تمهيداً لحزمة Qud Office AI.",
        badgeEn: "Announcement",
        badgeAr: "إعلان رسمي",
      },
      {
        titleEn: "Zero-Regression Engineering for Autonomous Agents",
        titleAr: "هندسة انعدام التراجع للوكلاء الذكيين",
        descEn: "Applying strict safety gates, typechecks, and defensive isolation across multi-agent systems.",
        descAr: "تطبيق بوابات الأمان وفحص الأنواع والعزل الدفاعي في أنظمة الوكلاء.",
        badgeEn: "Architecture",
        badgeAr: "معمارية",
      },
      {
        titleEn: "Securing Modern Web & AI Pipelines with Dragon R1 & B1",
        titleAr: "تأمين تطبيقات الويب والذكاء الاصطناعي عبر Dragon R1 و B1",
        descEn: "Automated vulnerability assessment and continuous defensive monitoring for enterprises.",
        descAr: "الفحص التلقائي للثغرات والمراقبة الدفاعية المستمرة للمؤسسات.",
        badgeEn: "Cybersecurity",
        badgeAr: "أمن سيبراني",
      },
    ],
  },
  careers: {
    slug: "careers",
    badgeEn: "Join QudSystem",
    badgeAr: "انضم إلينا",
    titleEn: "Careers at QudSystem",
    titleAr: "الوظائف في شركة QudSystem",
    subtitleEn: "Help us build the next generation of AI productivity, EdTech, and cybersecurity software.",
    subtitleAr: "شاركنا في بناء الجيل القادم من برمجيات الذكاء الاصطناعي والتعليم الرقمي والأمن السيبراني.",
    ctaLabelEn: "Apply via Email",
    ctaLabelAr: "تقدم عبر البريد",
    ctaHref: "/contact",
    cards: [
      {
        titleEn: "Senior Full-Stack Engineer (Next.js / TypeScript)",
        titleAr: "مهندس برمجيات متكامل (Next.js / TypeScript)",
        descEn: "Remote / Hybrid (Egypt) — Build unified interfaces for Qud Office AI and SaaS products.",
        descAr: "عن بُعد / هجين (مصر) — تطوير واجهات منظومة Qud Office AI ومنصات SaaS.",
        badgeEn: "Open Role",
        badgeAr: "متاح",
      },
      {
        titleEn: "AI Agent & Python Systems Engineer",
        titleAr: "مهندس وكلاء الذكاء الاصطناعي وبايثون",
        descEn: "Design autonomous multi-agent workflows, MCP integrations, and RAG pipelines.",
        descAr: "تصميم وكلاء ذكاء اصطناعي مستقلين وتكاملات MCP وأنظمة RAG.",
        badgeEn: "Open Role",
        badgeAr: "متاح",
      },
      {
        titleEn: "Cybersecurity & DevSecOps Specialist",
        titleAr: "أخصائي أمن سيبراني وDevSecOps",
        descEn: "Advance Dragon R1/B1 automated penetration testing and cloud hardening.",
        descAr: "تطوير منظومة Dragon R1/B1 لاختبارات الاختراق وتأمين البنية السحابية.",
        badgeEn: "Open Role",
        badgeAr: "متاح",
      },
    ],
  },
  support: {
    slug: "support",
    badgeEn: "24/7 Assistance",
    badgeAr: "دعم متواصل 24/7",
    titleEn: "Support & Help Center",
    titleAr: "مركز الدعم والمساعدة",
    subtitleEn: "Direct technical support via qudsystemltd@gmail.com and +20 011 518 580 57.",
    subtitleAr: "دعم فني مباشر عبر البريد qudsystemltd@gmail.com والهاتف/واتساب 57 580 518 011 20+.",
    ctaLabelEn: "Open Support Ticket",
    ctaLabelAr: "فتح تذكرة دعم",
    ctaHref: "/contact",
    cards: [
      {
        titleEn: "Email Support",
        titleAr: "الدعم عبر البريد الإلكتروني",
        descEn: "qudsystemltd@gmail.com — Technical inquiries, enterprise licensing, and partnerships.",
        descAr: "qudsystemltd@gmail.com — للاستفسارات التقنية والتراخيص والشراكات.",
      },
      {
        titleEn: "Direct Phone & WhatsApp",
        titleAr: "الهاتف وواتساب المباشر",
        descEn: "+20 011 518 580 57 — Rapid response for active deployments and consultations.",
        descAr: "+20 011 518 580 57 — استجابة سريعة للمشاريع والاستشارات.",
      },
      {
        titleEn: "GitHub Repositories & Issue Tracking",
        titleAr: "مستودعات GitHub ومتابعة التحديثات",
        descEn: "Browse all unified open-source & suite repositories at github.com/Qudsystem.",
        descAr: "تصفح جميع مستودعات المنظومة الموحدة على github.com/Qudsystem.",
      },
    ],
  },
  "qud-office-ai": {
    slug: "qud-office-ai",
    badgeEn: "Coming Soon • Flagship Launch",
    badgeAr: "قريباً / قادم • الإطلاق الرئيسي",
    titleEn: "Qud Office AI Suite",
    titleAr: "حزمة Qud Office AI المتكاملة",
    subtitleEn:
      "The upcoming unified AI office & enterprise productivity ecosystem connecting every QudSystem product in an ad-free, high-efficiency workspace.",
    subtitleAr:
      "الحزمة المكتبية الذكية الموحدة القادمة من شركة QudSystem — تجمع كافة تطبيقاتنا في بيئة عمل متكاملة وبدون إعلانات ضمن الباقات المدفوعة.",
    ctaLabelEn: "Reserve Early Access / Demo",
    ctaLabelAr: "احجز أولوية الوصول",
    ctaHref: "/request-demo",
    cards: [
      {
        titleEn: "Unified AI Workspace",
        titleAr: "بيئة عمل موحدة بالذكاء الاصطناعي",
        descEn: "Combines QudMind agents, QudSummize, QudCV, QudWorkflow, and QudGammaX into one seamless suite.",
        descAr: "تدمج QudMind وQudSummize وQudCV وQudWorkflow وQudGammaX في منصة واحدة.",
        badgeEn: "Core Suite",
        badgeAr: "النواة",
      },
      {
        titleEn: "100% Ad-Free Paid Experience",
        titleAr: "تجربة مدفوعة كاملة بدون إعلانات",
        descEn: "While free community editions show updatable ecosystem notices, Qud Office AI Paid Plans are 100% ad-free.",
        descAr: "بينما تعرض النسخ المجانية خانة إعلانية قابلة للتحديث، تأتي الباقات المدفوعة بدون إعلانات نهائياً.",
        badgeEn: "Ad-Free",
        badgeAr: "بدون إعلانات",
        href: "/pricing",
      },
      {
        titleEn: "Enterprise Security & Local/Cloud AI",
        titleAr: "أمان مؤسسي وذكاء سحابي ومحلي",
        descEn: "Built-in Dragon security guardrails, Arabic/English fluency, and team collaboration.",
        descAr: "حماية مدمجة بمعايير Dragon، دعم كامل للعربية والإنجليزية، وتعاون فوري للفرق.",
        badgeEn: "Enterprise",
        badgeAr: "للمؤسسات",
      },
    ],
  },
  "coming-soon": {
    slug: "coming-soon",
    badgeEn: "Upcoming Releases",
    badgeAr: "إصدارات قادمة",
    titleEn: "Coming Soon: Qud Office AI & Paid Plans",
    titleAr: "قريباً: حزمة Qud Office AI والباقات المدفوعة",
    subtitleEn: "We are finalizing the unified paid licensing tiers and Qud Office AI launch.",
    subtitleAr: "نضع اللمسات النهائية لإطلاق باقات الاشتراك الخالية من الإعلانات وحزمة Qud Office AI.",
    ctaLabelEn: "Get Notified",
    ctaLabelAr: "اشترك للتنبيه",
    ctaHref: "/contact",
    cards: [
      {
        titleEn: "Qud Office AI v1.0",
        titleAr: "حزمة Qud Office AI — الإصدار الأول",
        descEn: "Unified desktop & cloud AI office suite.",
        descAr: "حزمة المكتب الذكي الموحدة للويب وسطح المكتب.",
      },
      {
        titleEn: "Ad-Free Pro & Enterprise Plans",
        titleAr: "باقات Pro والمؤسسات بدون إعلانات",
        descEn: "Instant license activation across all 30+ QudSystem products.",
        descAr: "تفعيل فوري لتجربة خالية تماماً من الإعلانات عبر أكثر من 30 منتجاً.",
      },
    ],
  },
}
