export interface ProductItem {
  slug: string
  titleAr: string
  titleEn: string
  descAr: string
  descEn: string
  appUrl: string
  category: string
  categoryAr: string
  tags: string[]
  date: string
  isAiStudio: boolean
  featured?: boolean
  badgeAr?: string
  badgeEn?: string
  taglineAr?: string
  taglineEn?: string
  overviewAr?: string
  overviewEn?: string
  highlightsAr?: string[]
  highlightsEn?: string[]
  tier?: string
}

export const aiStudioProducts: ProductItem[] = [
  {
    slug: "mimo-autonomous-agent",
    titleEn: "Mimo Autonomous Agent",
    titleAr: "وكيل ميمو المستقل (Mimo Autonomous Agent)",
    descEn:
      "An advanced, self-executing AI agent interface demonstrating planner-executor architecture, multi-modal reasoning, and verifiable step-by-step task completion using Gemini 2.5.",
    descAr:
      "واجهة وكيل ذكاء اصطناعي ذاتية التنفيذ متقدمة تعتمد بنية المخطط والمنفذ (Planner-Executor)، والاستدلال متعدد الوسائط وإنجاز المهام خطوة بخطوة باستخدام Gemini 2.5.",
    appUrl:
      "https://aistudio.google.com/apps/2e5a6176-24bc-4e9a-a636-938916406af5?showPreview=true&showAssistant=true",
    category: "AI Agents",
    categoryAr: "وكلاء الذكاء الاصطناعي",
    tags: ["Autonomous Agent", "Gemini 2.5", "Planner-Executor", "Multi-modal Reasoning"],
    date: "Aug 10, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Featured Agent",
    badgeAr: "وكيل رائد",
    taglineEn: "Self-executing agent architecture with verifiable step-by-step task completion.",
    taglineAr: "بنية وكيل ذاتي التنفيذ مع إنجاز المهام خطوة بخطوة والتحقق من صحتها.",
    overviewEn:
      "Mimo Autonomous Agent showcases state-of-the-art agentic engineering built on Gemini 2.5. It decouples high-level strategic reasoning from low-level execution tools, providing human-in-the-loop oversight and automated progress reporting.",
    overviewAr:
      "يجسد وكيل ميمو المستقل قمة الهندسة الوكيلة الحديثة المبنية على Gemini 2.5، حيث يفصل التخطيط الاستراتيجي عن أدوات التنفيذ مع رقابة لحظية وتقارير إنجاز تفاعلية.",
    highlightsEn: [
      "Planner-Executor dual-loop architecture for zero-looping autonomy",
      "Dynamic multi-modal tool calling and runtime recovery",
      "Real-time visual task breakdown and artifact generation",
      "Powered by Gemini 2.5 with ultra-low latency streaming",
    ],
    highlightsAr: [
      "بنية حلقة مزدوجة (مخطط-منفذ) تمنع التكرار وتضمن سرعة الإنجاز",
      "استدعاء ديناميكي للأدوات متعددة الوسائط مع تعافي تلقائي من الأخطاء",
      "تفكيك بصري للمهام في الوقت الفعلي وإنشاء المستندات المباشرة",
      "مدعوم بمحرك Gemini 2.5 مع بث فائق السرعة والاستجابة",
    ],
    tier: "Pro Agent",
  },
  {
    slug: "remix-notebook-to-excel",
    titleEn: "Remix: Notebook to Excel",
    titleAr: "ريمكس: كشكول إلى إكسل (Remix: Notebook to Excel)",
    descEn:
      "An AI application to extract handwriting and structured text from notebook images and convert them into organized Excel sheets with high precision.",
    descAr:
      "تطبيق ذكي لاستخراج النصوص والجداول من صور الكراسات والدفاتر وتحويلها إلى جداول إكسل بدقة متناهية.",
    appUrl:
      "https://aistudio.google.com/apps/655c8dcc-4337-4795-997d-64d600c66307?showPreview=true&showAssistant=true",
    category: "Document & OCR",
    categoryAr: "المستندات والجداول",
    tags: ["OCR", "Excel Export", "Handwriting Recognition", "Vision AI"],
    date: "Aug 10, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Productivity AI",
    badgeAr: "إنتاجية ذكية",
    taglineEn: "Transform physical notebook pages and handwritten tables into clean Excel spreadsheets.",
    taglineAr: "حوّل صفحات الكشاكيل الورقية والجداول المكتوبة بخط اليد إلى جداول إكسل منظمة.",
    overviewEn:
      "Remix Notebook to Excel leverages Gemini Computer Vision to parse complex handwritten layouts, multi-column tables, arithmetic sums, and Arabic/English handwritten notes directly into structured XLSX files.",
    overviewAr:
      "يوظف تطبيق ريمكس كشكول إلى إكسل قدرات الرؤية الحاسوبية لـ Gemini لتحليل الجداول المعقدة والخطوط اليدوية باللغتين العربية والإنجليزية وتصديرها مباشرة كملفات XLSX نظيفة.",
    highlightsEn: [
      "Advanced optical character recognition for Arabic & Latin handwriting",
      "Automated column boundary detection and data type inference",
      "Direct one-click export to Microsoft Excel and Google Sheets",
      "Preserves original document layout and mathematical formulas",
    ],
    highlightsAr: [
      "تعرف بصري متقدم على الخطوط اليدوية باللغتين العربية والإنجليزية",
      "اكتشاف تلقائي لحدود الأعمدة وأنواع البيانات الرقمية والنصية",
      "تصدير فوري بنقرة واحدة إلى Excel و Google Sheets",
      "محافظة دقيقة على هيكل المستند الأصلي والمعادلات الحسابية",
    ],
    tier: "Productivity",
  },
  {
    slug: "rooh-luxury-headscarves",
    titleEn: "Rooh - Luxury Fashion",
    titleAr: "روح - متجر الأزياء الفاخرة (Rooh)",
    descEn:
      "A high-converting, luxury landing page for premium headscarves, featuring modern designs and a seamless, high-end user experience.",
    descAr:
      "صفحة هبوط وموقع تجارة إلكترونية فاخر عالي التحويل للطرح والأوشحة الراقية بتصميم عصري وتجربة مستخدم استثنائية.",
    appUrl:
      "https://aistudio.google.com/apps/9a9ea741-e09f-40e5-88dc-fdd31c46f051?showPreview=true&showAssistant=true",
    category: "E-Commerce",
    categoryAr: "التجارة الإلكترونية",
    tags: ["Luxury UI", "E-Commerce", "Landing Page", "Fashion Tech"],
    date: "Jul 29, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Design Excellence",
    badgeAr: "تصميم فاخر",
    taglineEn: "High-end visual storefront engineered for maximum conversion and aesthetic elegance.",
    taglineAr: "واجهة متجر فاخرة مصممة لتحقيق أعلى معدلات التحويل مع لمسة جمالية راقية.",
    overviewEn:
      "Rooh is an ultra-modern e-commerce experience crafted with meticulous typography, smooth micro-interactions, responsive high-resolution showcases, and streamlined checkout UX.",
    overviewAr:
      "يمثل متجر روح تجربة تجارة إلكترونية بالغة الأناقة تتميز بالخطوط الراقية، التفاعلات الدقيقة السلسة، واستعراض فائق الدقة للمنتجات مع رحلة شراء مبسطة وسريعة.",
    highlightsEn: [
      "Ultra-responsive luxury showcase optimized for mobile shoppers",
      "Micro-animations and frictionless cart interaction",
      "Dynamic color palette and fabric texture zoom",
      "SEO-optimized and ready for international localized payment gateways",
    ],
    highlightsAr: [
      "عرض فوتوغرافي فاخر متوافق تماماً مع الهواتف الذكية",
      "حركات تفاعلية دقيقة وسلة تسوق فائقة السلاسة",
      "لوحة ألوان متناسقة مع خاصية تكبير تفاصيل أنسجة الأقمشة",
      "مهيأ لمحركات البحث ومتوافق مع بوابات الدفع الدولية والمحلية",
    ],
    tier: "E-Commerce",
  },
  {
    slug: "pixshop-photo-editor",
    titleEn: "Pixshop - AI Photo Studio",
    titleAr: "بيكس شوب - محرر الصور بالذكاء الاصطناعي (Pixshop)",
    descEn:
      "Gemini brings professional, prompt-based photo editing to your fingertips with advanced generative manipulation and filters.",
    descAr:
      "استوديو متكامل لتحرير ومعالجة الصور الاحترافية عبر الأوامر النصية وتوليد المؤثرات باستخدام قدرات Gemini.",
    appUrl:
      "https://aistudio.google.com/apps/6aae88d2-3946-4c21-9bb7-c4601aa72a48?showPreview=true&showAssistant=true",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Photo Editing", "Generative AI", "Image Tools", "Prompt-Based"],
    date: "Jul 27, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Creative Suite",
    badgeAr: "جناح الإبداع",
    taglineEn: "Natural language-driven image manipulation and generative enhancements.",
    taglineAr: "تعديل احترافي للصور عبر الأوامر الصوتية والنصية الطبيعية.",
    overviewEn:
      "Pixshop transforms everyday image manipulation into a natural conversational flow. Users describe adjustments in plain language—such as changing lighting, backgrounds, or retouching objects—and Gemini executes them with studio fidelity.",
    overviewAr:
      "يحول بيكس شوب تحرير الصور إلى محادثة طبيعية، حيث يصف المستخدم التعديلات المرغوبة كضبط الإضاءة أو تغيير الخلفية أو ترميم العناصر ليقوم الذكاء الاصطناعي بتنفيذها بجودة الاستوديوهات.",
    highlightsEn: [
      "Natural language image modifications and contextual adjustments",
      "Zero-artifact object removal and background replacement",
      "High-dynamic range lighting and color grading presets",
      "Multi-format export supporting WebP, PNG, and print-ready TIFF",
    ],
    highlightsAr: [
      "تعديل الصور بالأوامر اللغوية الطبيعية والفهم السياقي",
      "إزالة العناصر واستبدال الخلفيات بنقاء تام وبدون تشوهات",
      "معايرة احترافية للإضاءة والألوان بتقنية المدى الديناميكي العالي",
      "تصدير متعدد الصيغ يدعم WebP و PNG والصيغ الطباعية",
    ],
    tier: "Studio",
  },
  {
    slug: "mimo-ai-learn-coding",
    titleEn: "Mimo AI - Interactive Code & AI Learning",
    titleAr: "ميمو الذكاء الاصطناعي (Mimo AI)",
    descEn:
      "An interactive gamified learning platform to master coding and artificial intelligence simply in Arabic with a smart tutor and code challenges.",
    descAr:
      "منصة تفاعلية شيقة لتعليم البرمجة والذكاء الاصطناعي ببساطة باللغة العربية مع مدرب ذكي وتحديات برمجية تفاعلية.",
    appUrl:
      "https://aistudio.google.com/apps/93af714a-88d2-4756-a600-09527d0d6e8a?showPreview=true&showAssistant=true",
    category: "EdTech",
    categoryAr: "التعليم والتطوير",
    tags: ["EdTech", "Coding Tutor", "Arabic Learning", "Interactive"],
    date: "Jul 27, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Top Rated EdTech",
    badgeAr: "التعليم الذكي",
    taglineEn: "Bite-sized coding lessons and AI mastery tailored for Arabic speakers.",
    taglineAr: "دروس برمجية تفاعلية مبسطة واحتراف للذكاء الاصطناعي باللغة العربية.",
    overviewEn:
      "Mimo AI provides gamified programming tracks spanning Python, JavaScript, and prompt engineering. Learners get live AI mentor feedback, real-time syntax error explanations, and personalized mastery paths.",
    overviewAr:
      "تقدم منصة ميمو مسارات تعليمية تفاعلية شيقة في بايثون، جافاسكريبت، وهندسة الأوامر مع إرشاد لحظي من المعلم الذكي وشرح مبسط للأخطاء.",
    highlightsEn: [
      "Gamified challenges with instant code execution and linting",
      "AI Tutor explaining algorithmic concepts in clear Arabic",
      "Progress tracking, milestone badges, and skill certificates",
      "Zero-install web playground running completely in the browser",
    ],
    highlightsAr: [
      "تحديات برمجية شيقة مع تشغيل الكود وفحصه اللحظي",
      "معلم ذكي يشرح المفاهيم الخوارزمية باللغة العربية الواضحة",
      "تتبع للإنجاز وأوسمة تحفيزية وشهادات مهارية",
      "بيئة برمجية فورية تعمل مباشرة على المتصفح دون الحاجة لتثبيت برامج",
    ],
    tier: "Education",
  },
  {
    slug: "nano-banana-merch-ai",
    titleEn: "Nano Banana Merch AI",
    titleAr: "نانو بنانا - مولد الموكاب والمنتجات (Nano Banana Merch AI)",
    descEn:
      "Generate on-demand merch mockups with AI. Upload your logo, describe the scene, and let Gemini & Imagen create the perfect product shot.",
    descAr:
      "توليد تصميمات ونماذج المنتجات التجارية المخصصة بالذكاء الاصطناعي. ارفع شعارك وصِف المشهد ليتم إنشاء لقطة المنتج المثالية فوراً.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1GcqimxVOyu-IiR8bQBkrRhyb39MhsAlz?showPreview=true&showAssistant=true",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Mockup Generator", "Imagen", "Merchandise", "Branding"],
    date: "Jul 27, 2026",
    isAiStudio: true,
    badgeEn: "Merch AI",
    badgeAr: "موكاب المنتجات",
    taglineEn: "Instant realistic commercial mockups powered by Imagen and Gemini.",
    taglineAr: "لقطات تجارية واقعية للمنتجات والملابس بنقرة واحدة بمحرك Imagen.",
    overviewEn:
      "Nano Banana Merch AI eliminates expensive photography studios for merchandise brands. Simply upload your graphic assets, and Imagen creates photo-real models wearing your apparel in diverse environments.",
    overviewAr:
      "يغني تطبيق نانو بنانا عن استوديوهات التصوير المكلفة للعلامات التجارية، حيث يمكنك رفع تصاميمك لتوليد صور واقعية لعارضين يرتدون أزياءك في بيئات مختلفة.",
    highlightsEn: [
      "Photorealistic apparel rendering on diverse models and poses",
      "Accurate fabric displacement and perspective mapping",
      "Instant multi-angle scenes for e-commerce listings",
      "High-resolution PNG and print-ready downloads",
    ],
    highlightsAr: [
      "توليد واقعي للملابس والمنتجات على عارضين بوضعيات مختلفة",
      "محاكاة دقيقة لانحناءات الأقمشة والإضاءة الطبيعية",
      "مشاهد متعددة الزوايا جاهزة للإدراج في المتاجر الإلكترونية",
      "تحميل بصيغ عالية الدقة مجهزة للطباعة والحملات الإعلانية",
    ],
    tier: "Commercial",
  },
  {
    slug: "thakaa-learn-coding-ai",
    titleEn: "Thakaa - Learn Coding & AI",
    titleAr: "تطبيق ذكاء - تعلم البرمجة والذكاء الاصطناعي",
    descEn:
      "An interactive mobile application in engaging Mimo-style for learning AI, Python, and Prompt Engineering in Arabic.",
    descAr:
      "تطبيق تفاعلي بأسلوب ميمو الشيّق لتعلم الذكاء الاصطناعي وبايثون والهندسة الفورية (Prompt Engineering) باللغة العربية.",
    appUrl:
      "https://aistudio.google.com/apps/5b7cd4d7-5817-493d-a2a6-ae53d4e52bcc?showPreview=true&showAssistant=true",
    category: "EdTech",
    categoryAr: "التعليم والتطوير",
    tags: ["Mobile", "Python", "Prompt Engineering", "Arabic EdTech"],
    date: "Jul 26, 2026",
    isAiStudio: true,
    badgeEn: "Android App",
    badgeAr: "تطبيق أندرويد",
    taglineEn: "Master modern programming and prompt engineering through bite-sized Arabic modules.",
    taglineAr: "احترف البرمجة وهندسة الأوامر الذكية عبر وحدات تفاعلية قصيرة باللغة العربية.",
    overviewEn:
      "Designed specifically for mobile-first learners across the Arab world, Thakaa features interactive code-typing blocks, daily streaks, and practical mini-projects focused on AI applications.",
    overviewAr:
      "صُمم خصيصاً لمستخدمي الهواتف في الوطن العربي، ويتضمن كتل برمجية تفاعلية، تحديات يومية متسلسلة، ومشاريع عملية تركز على استخدامات الذكاء الاصطناعي الحديثة.",
    highlightsEn: [
      "Mobile-optimized virtual coding keyboard and quick shortcuts",
      "Comprehensive Python & Prompt Engineering curriculum",
      "Gamified streaks, daily rewards, and peer rankings",
      "Offline lesson access with cloud progress sync",
    ],
    highlightsAr: [
      "لوحة مفاتيح برمجية مخصصة للهواتف مع اختصارات سريعة",
      "منهج شامل يغطي لغة بايثون وهندسة الأوامر للذكاء الاصطناعي",
      "نظام حماسي بالتحديات اليومية والمكافآت وتصنيف المتعلمين",
      "إمكانية متابعة الدروس والمزامنة السحابية الفورية",
    ],
    tier: "Mobile EdTech",
  },
  {
    slug: "forge-ai-studio",
    titleEn: "ForgeAI Studio - Agent & Model Builder",
    titleAr: "استوديو فورج للذكاء الاصطناعي (ForgeAI Studio)",
    descEn:
      "A comprehensive professional ecosystem to build, fine-tune, and test AI models and autonomous agents with an interactive AI Navigator.",
    descAr:
      "منظومة متكاملة احترافية لبناء، ضبط، واختبار نماذج ووكلاء الذكاء الاصطناعي مع نظام توجيه ذكاء اصطناعي تفاعلي (AI Navigator).",
    appUrl:
      "https://aistudio.google.com/apps/58dd9138-4eba-40ab-9340-592b07a0be73?showPreview=true&showAssistant=true",
    category: "Developer Tools",
    categoryAr: "أدوات المطورين",
    tags: ["Agent Orchestration", "Model Tuning", "AI Navigator", "Automation"],
    date: "Jul 26, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Developer Suite",
    badgeAr: "بيئة المطورين",
    taglineEn: "Enterprise workbench for autonomous agent workflows and LLM orchestration.",
    taglineAr: "بيئة عمل متطورة لهندسة وتوجيه وكلاء الذكاء الاصطناعي والنماذج اللغوية.",
    overviewEn:
      "ForgeAI Studio delivers visual DAG-based workflow construction, system prompt versioning, automated evaluation harnesses, and full lifecycle tracing for autonomous agent teams.",
    overviewAr:
      "يوفر استوديو فورج بيئة بصرية لتصميم تدفقات العمل الشبكية (DAGs)، وإدارة إصدارات الأوامر التأسيسية، وأطر تقييم آلية لتتبع أداء الوكلاء بدقة متناهية.",
    highlightsEn: [
      "Visual workflow canvas for multi-agent DAG architectures",
      "Built-in AI Navigator providing proactive architectural guidance",
      "Comprehensive evaluation metrics and regression testing suites",
      "Exportable runtime configs for standard MCP and REST endpoints",
    ],
    highlightsAr: [
      "مخطط بصري لتصميم تدفقات الوكلاء المتعددين وشبكات العمل",
      "مرشد ذكاء اصطناعي (AI Navigator) يقدم نصائح معمارية فورية",
      "أدوات تقييم شاملة ومقاييس اختبار لمنع التراجع البرمجي",
      "تصدير سهل لملفات التكوين متوافقة مع معايير MCP و REST",
    ],
    tier: "Enterprise Pro",
  },
  {
    slug: "xbow-lite-ai-pentester",
    titleEn: "XBOW-Lite AI Pentester",
    titleAr: "إكس بو لايت - فاحص الاختراق السيبراني الذكي (XBOW-Lite)",
    descEn:
      "A high-tech, futuristic AI-powered penetration testing system simulator featuring an AI core, live terminal, and results dashboard.",
    descAr:
      "محاكي نظام اختبار اختراق سيبراني متطور مدعوم بالذكاء الاصطناعي يحتوي على نواة ذكية، طرفية أوامر تفاعلية ولوحة نتائج أمنية.",
    appUrl:
      "https://aistudio.google.com/apps/eb33ed73-a445-4d05-84c3-878703fd7c83?showPreview=true&showAssistant=true",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    tags: ["Pentesting", "Security Terminal", "Reconnaissance", "Ethical Hacking"],
    date: "Jul 25, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Security Suite",
    badgeAr: "الأمن السيبراني",
    taglineEn: "Autonomous attack-surface simulation and interactive cybersecurity terminal.",
    taglineAr: "محاكاة مستقلة لأسطح التهديد وطرفية أوامر أمنية تفاعلية للفحص السيبراني.",
    overviewEn:
      "Part of the QudSystem Dragon security lineage, XBOW-Lite models attack vectors, analyzes web applications for OWASP Top 10 vulnerabilities, and outputs remediation advisories with code diffs.",
    overviewAr:
      "ضمن منظومة دراجون للأمن السيبراني من QudSystem، يقوم إكس بو لايت بنمذجة مسارات الهجوم وتحليل تطبيقات الويب وفق معايير OWASP مع تقديم تقارير ترقيع برمجية دقيقة.",
    highlightsEn: [
      "Simulated interactive terminal environment with real-time feedback",
      "Automated reconnaissance and vulnerability mapping against OWASP standards",
      "Deterministic safety sandboxing ensuring zero actual target harm",
      "Detailed executive vulnerability scorecard with remediation code",
    ],
    highlightsAr: [
      "بيئة طرفية تفاعلية تحاكي الهجوم والدفاع الأمني في الوقت الفعلي",
      "استطلاع آلي وتحليل شامل للثغرات البرمجية وفق معايير OWASP",
      "بيئة عزل وحماية آمنة تمنع أي إضرار حقيقي بالأنظمة",
      "تقارير تنفيذية مفصلة مع نماذج كود جاهزة لترقيع وسد الثغرات",
    ],
    tier: "Security Pro",
  },
  {
    slug: "tiktik-video-feed",
    titleEn: "TiKTiK - Smart Short Video Platform",
    titleAr: "تيك تيك - منصة الفيديو الذكية (TiKTiK)",
    descEn:
      "A next-generation short-form video feed experience with personalized AI content discovery and seamless mobile responsiveness.",
    descAr:
      "منصة مقاطع فيديو قصيرة تفاعلية مزودة بخوارزميات ذكية لاستكشاف المحتوى المخصص وواجهة سريعة الاستجابة.",
    appUrl:
      "https://aistudio.google.com/apps/86b7b9a6-ee54-4d46-b64c-7385bcde3cba?showPreview=true&showAssistant=true",
    category: "Social & Media",
    categoryAr: "التواصل والوسائط",
    tags: ["Short Video", "Recommendation AI", "Feed", "Social"],
    date: "Mar 25, 2026",
    isAiStudio: true,
    badgeEn: "Social Experience",
    badgeAr: "تجربة ترفيهية",
    taglineEn: "Ultra-fast short video discovery engine with dynamic streaming optimization.",
    taglineAr: "محرك استعراض مقاطع قصيرة فائق السرعة مع تخصيص ذكي للمحتوى.",
    overviewEn:
      "TiKTiK replicates modern short-form viral feeds with silky 60fps vertical swipe transitions, adaptive preloading, and AI-driven content categorization.",
    overviewAr:
      "يقدم تيك تيك تجربة استعراض فيديوهات عمودية بمعدل 60 إطاراً في الثانية، مع تحميل مسبق فائق الذكاء وتصنيف فوري للمحتوى وفق اهتمامات المستخدم.",
    highlightsEn: [
      "Vertical swipe gestures with zero-delay buffer playback",
      "AI content tagging and personalized recommendation flow",
      "Built-in video captioning and translation previews",
      "Cross-platform responsive design for phones and tablets",
    ],
    highlightsAr: [
      "تمرير عمودي سلس وفوري بدون أي انتظار أثناء التشغيل",
      "وسم آلي لمحتوى الفيديو مع توصيات مخصصة لكل مستخدم",
      "توليد فوري للترجمة النصية المصاحبة للفيديو",
      "تصميم مرن فائق الاستجابة يتكيف مع مختلف مقاسات الشاشات",
    ],
    tier: "Media",
  },
  {
    slug: "father-child-memory-maker",
    titleEn: "Father & Child Memory Maker",
    titleAr: "صانع ذكريات الأب والطفل",
    descEn:
      "A professional AI studio blending father and child portraits into breathtaking artistic scenes and versatile photographic styles.",
    descAr:
      "تطبيق احترافي يستخدم الذكاء الاصطناعي لدمج صور الأب والطفل في لقطات فوتوغرافية مذهلة وأوضاع تصوير فنية متنوعة.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1FHkDJem-n3lPIiW-PH4EW7L_ktB2euRn?showPreview=true&showAssistant=true",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Portrait Blending", "Family Memories", "Artistic AI", "Photos"],
    date: "Feb 22, 2026",
    isAiStudio: true,
    badgeEn: "Family Memories",
    badgeAr: "ذكريات عائلية",
    taglineEn: "Preserve and reimagine father-child milestones into cinematic artistic portraits.",
    taglineAr: "خلّد وأعد صياغة اللحظات الأسرية في لوحات فنية وبورتريهات سينمائية بديعة.",
    overviewEn:
      "Using fine-tuned Gemini and diffusion rendering, this tool harmonizes facial features, lighting, and depth to place fathers and children into whimsical adventures and timeless studio portraits.",
    overviewAr:
      "باستخدام تقنيات دمج الملامح وضبط الإضاءة الذكية، يقوم التطبيق بدمج ملامح الأب والطفل في مشاهد استكشافية أو لوحات استوديو كلاسيكية تحافظ على دفء الذكريات.",
    highlightsEn: [
      "Harmonious facial blending preserving natural expressions",
      "Dozens of curated artistic themes: fantasy, cinematic, classic studio",
      "High-fidelity resolution suitable for canvas print framing",
      "Private and secure image processing with immediate session wipe",
    ],
    highlightsAr: [
      "دمج طبيعي للملامح مع الحفاظ الكامل على المشاعر والتعبيرات الأصلية",
      "عشرات الأنماط الفنية المختارة: مغامرات، سينمائي، واستوديوهات كلاسيكية",
      "دقة تصدير فائقة ملائمة للطباعة على القماش والبراويز الجدارية",
      "معالجة خاصة وآمنة تماماً للصور مع مسحها فور انتهاء الجلسة",
    ],
    tier: "Family Lab",
  },
  {
    slug: "hakay-arabic-audiobooks",
    titleEn: "Hakay - Premium Arabic Audiobooks",
    titleAr: "حكاي - منصة الكتب الصوتية العربية (Hakay)",
    descEn:
      "A professional Arabic audiobook platform offering a wide range of stories, novels, and summaries with a premium listening experience.",
    descAr:
      "منصة كتب وروايات صوتية عربية احترافية تقدم باقة متنوعة من القصص وتلخيصات الكتب مع تجربة استماع نقية ومميزة.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1NgofROCpvQdmhmorIvYLtZcVF7NFyQCf?showPreview=true&showAssistant=true",
    category: "Audio & Voice",
    categoryAr: "الصوتيات والوسائط",
    tags: ["Audiobooks", "Arabic Voice", "Storytelling", "Narration"],
    date: "Jan 11, 2026",
    isAiStudio: true,
    featured: true,
    badgeEn: "Arabic Audio",
    badgeAr: "مكتبة صوتية",
    taglineEn: "Immersive Arabic storytelling with expressive AI voice modulation and curated chapters.",
    taglineAr: "سرد صوتي عربي غامر بأصوات ذكاء اصطناعي تعبيرية فصيحة وموسيقى تصويرية متناغمة.",
    overviewEn:
      "Hakay offers listeners rich Arabic literature, historical chronicles, and self-development summaries voiced by expressive synthetic narrators with correct Arabic diacritics and emotional cadence.",
    overviewAr:
      "توفر منصة حكاي للمستمعين نوادر الأدب العربي والروايات العالمية وملخصات تطوير الذات بأصوات ذكية تعبيرية تراعي التشكيل ومخارج الحروف بدقة.",
    highlightsEn: [
      "Expressive Arabic text-to-speech with full tashkeel precision",
      "Ambient background soundscapes tailored to story tone",
      "Smart bookmarks, sleep timer, and adjustable playback speeds",
      "Curated library spanning literature, business, and biographies",
    ],
    highlightsAr: [
      "تحويل نصوص عربية إلى صوت عالي النقاء مع ضبط التشكيل ومخارج الحروف",
      "مؤثرات صوتية وموسيقى خلفية متوافقة مع الحالة الشعورية للقصة",
      "علامات توقف ذكية ومؤقت للنوم وتحكم كامل في سرعة الاستماع",
      "مكتبة ثرية تغطي الأدب، ريادة الأعمال، التاريخ، وسير الشخصيات",
    ],
    tier: "Audio",
  },
  {
    slug: "ai-coding-agent-3-5-prd",
    titleEn: "AI Coding Agent 3.5 PRD Explorer",
    titleAr: "مواصفات وكيل البرمجة الذكي 3.5 (AI Coding Agent 3.5 PRD)",
    descEn:
      "A web application to explore the Product Requirements Document (PRD) for a modern autonomous AI coding agent with verified step-by-step reasoning.",
    descAr:
      "تطبيق ويب تفاعلي يعرض مستند متطلبات المنتج (PRD) لوكيل البرمجة الذاتي الذكي 3.5 مع استعراض معماري لأدوات التنفيذ والاستدلال.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1gx7Y3cBFtyXYBOkybtKZJtn9vSlTQO-L?showPreview=true&showAssistant=true",
    category: "Developer Tools",
    categoryAr: "أدوات المطورين",
    tags: ["PRD", "Autonomous Coder", "Software Spec", "Agent Architecture"],
    date: "Dec 24, 2025",
    isAiStudio: true,
    badgeEn: "Spec Viewer",
    badgeAr: "مواصفات معمارية",
    taglineEn: "Interactive blueprint for next-generation autonomous software engineering agents.",
    taglineAr: "المخطط الهندسي التفاعلي لوكلاء هندسة البرمجيات المستقلين من الجيل القادم.",
    overviewEn:
      "This application presents the comprehensive architecture, safety boundaries, file manipulation protocols, and subagent swarm topologies of the QudSystem autonomous coding agent roadmap.",
    overviewAr:
      "يستعرض هذا التطبيق البنية المعمارية الشاملة، وحدود الأمان، وبروتوكولات التعديل الذاتي للكود، وهياكل أسراب الوكلاء المعتمدة في خارطة طريق QudSystem البرمجية.",
    highlightsEn: [
      "Interactive PRD navigation with functional requirement filters",
      "Agent state machine diagramming and event loop breakdown",
      "Safety invariant checklists and zero-regression protocols",
      "Reference implementation examples and tool schema definitions",
    ],
    highlightsAr: [
      "تصفح تفاعلي لمستند المتطلبات مع تصنيف دقيق للوظائف",
      "مخططات حالة الوكيل وتفكيك كامل لحلقات المعالجة والاستدعاء",
      "قوائم فحص معايير الأمان ومبادئ انعدام التراجع البرمجي",
      "أمثلة تطبيقية ومخططات واجهات برمجية للأدوات والمتحكمات",
    ],
    tier: "Technical Spec",
  },
  {
    slug: "prime-leads-ai",
    titleEn: "PrimeLeads AI - Real Estate Leads",
    titleAr: "برايم ليدز - منصة استقطاب العملاء العقاريين (PrimeLeads AI)",
    descEn:
      "An AI-powered real estate lead generation platform providing verified, high-intent buyer personas for commercial and residential agents.",
    descAr:
      "منصة توليد عملاء عقاريين مدعومة بالذكاء الاصطناعي تقدم شخصيات مشترين مؤهلة وعالية النية لوكلاء العقارات والمستثمرين.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1hJCElWJ_mSrp8Uo0YW4OpXOH7cUgKugI?showPreview=true&showAssistant=true",
    category: "Business & Sales",
    categoryAr: "الأعمال والمبيعات",
    tags: ["Real Estate", "Lead Generation", "Buyer Personas", "Sales AI"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "PropTech Sales",
    badgeAr: "مبيعات عقارية",
    taglineEn: "Automated real estate lead intelligence and high-intent investor qualification.",
    taglineAr: "استخبارات بيعية مؤتمتة وتأهيل ذكي لراغبي الشراء والمستثمرين في السوق العقاري.",
    overviewEn:
      "PrimeLeads AI parses geographic demographics, market transactions, and purchasing intent to equip brokers with actionable buyer dossiers, conversation hooks, and automated CRM sync.",
    overviewAr:
      "تحلل المنصة بيانات السوق العقاري ومؤشرات الرغبة الشرائية لتزويد شركات التطوير والوسطاء العقاريين بملفات عملاء مؤهلة وحجج إقناعية مخصصة مع ربط فوري مع الـ CRM.",
    highlightsEn: [
      "Automated lead scoring based on purchasing capacity and urgency",
      "AI-generated personalized outreach scripts for WhatsApp & Email",
      "Neighborhood heatmaps and inventory-matching algorithms",
      "Direct integration with leading real estate CRM software",
    ],
    highlightsAr: [
      "تقييم وترتيب تلقائي للعملاء حسب القوة الشرائية ودرجة الجدية",
      "صياغة رسائل تواصل مخصصة بالذكاء الاصطناعي للواتساب والبريد",
      "خرائط حرارية للمناطق العقارية ومطابقة ذكية للمشاريع المتاحة",
      "تكامل مباشر مع أنظمة إدارة علاقات العملاء (CRM) العقارية",
    ],
    tier: "Commercial",
  },
  {
    slug: "clearview-ai-watermark-remover",
    titleEn: "ClearView AI - Watermark Remover",
    titleAr: "كلير فيو - مزيل العلامات المائية الذكي (ClearView AI)",
    descEn:
      "A modern intelligent tool to cleanly remove watermarks, timestamps, and unwanted artifacts from digital imagery using Gemini Computer Vision.",
    descAr:
      "أداة ذكية متطورة لإزالة العلامات المائية والأختام والشوائب من الصور بدقة عالية ونقاء فائق بالاعتماد على رؤية Gemini الاصطناعية.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1M2L1r3dWuXuOVMqG3LBB8HfjGKmP9wDp?showPreview=true&showAssistant=true",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Watermark Remover", "Inpainting", "Image Restoration", "Vision AI"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "Vision Tool",
    badgeAr: "أداة بصرية",
    taglineEn: "Flawless semantic inpainting to eliminate visual clutter and watermarks.",
    taglineAr: "ترميم وإعادة ملء ذكية للصور لإزالة العلامات المائية دون أي أثر بصري.",
    overviewEn:
      "ClearView AI isolates watermark regions with pixel-level segmentation, predicting background texture, continuity, and grain to reconstruct occluded visual information cleanly.",
    overviewAr:
      "يقوم تطبيق كلير فيو بعزل مساحات العلامات المائية بدقة متناهية على مستوى البكسل، مع التنبؤ بأنسجة الخلفية والظلال لإعادة بنائها بنقاء كامل كأنها لم تكن.",
    highlightsEn: [
      "Automated watermark detection without requiring manual brush masks",
      "Context-aware neural inpainting preserving fine background details",
      "Batch processing for photo collections and catalogs",
      "Zero loss of original color grading and resolution",
    ],
    highlightsAr: [
      "اكتشاف آلي لمواضع العلامات المائية دون الحاجة للتحديد اليدوي المرهق",
      "إعادة رسم سياقية ذكية تحافظ على تفاصيل وأنسجة الخلفية الأصلية",
      "معالجة دفعية للمجموعات الكبيرة من الصور وكتالوجات المنتجات",
      "محافظة كاملة على درجات الألوان والدقة الأصلية للصورة",
    ],
    tier: "Utility",
  },
  {
    slug: "social-media-forge",
    titleEn: "Social Media Forge",
    titleAr: "منصة سوشيال ميديا فورج (Social Media Forge)",
    descEn:
      "A cross-platform social media content generator that crafts tailored copy, hashtags, and images for LinkedIn, Twitter, and Instagram.",
    descAr:
      "منصة متكاملة لصناعة محتوى شبكات التواصل الاجتماعي وتوليد المنشورات والصور المخصصة لـ LinkedIn و X وإنستغرام.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1-yZedUpHNPVW46T4PNoeyQdX4gX8JSTt?showPreview=true&showAssistant=true",
    category: "Marketing & Social",
    categoryAr: "التسويق والتواصل",
    tags: ["Content Creation", "Social Media", "Copywriting", "Multi-platform"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    featured: true,
    badgeEn: "Marketing AI",
    badgeAr: "تسويق رقمي",
    taglineEn: "Generate viral, multi-platform social campaigns from a single business brief.",
    taglineAr: "اصنع حملات تسويقية متكاملة متعددة المنصات من نبذة موجزة عن مشروعك.",
    overviewEn:
      "Social Media Forge adapts tone, character counts, and aesthetic styles for every major network: insightful thought-leadership for LinkedIn, punchy threads for X, and visual storytelling for Instagram.",
    overviewAr:
      "تتكيف المنصة مع طبيعة كل شبكة اجتماعية: مقالات مهنية رصينة للينكد إن، سلاسل تغريدات جذابة لمنصة X، ومنشورات بصرية مذهلة لإنستغرام.",
    highlightsEn: [
      "One-click multi-network transformation (LinkedIn, X, Instagram)",
      "High-engagement hook generator and viral structure templates",
      "Built-in hashtag research and optimal posting schedule recommendations",
      "Matching banner and carousel image prompts generated instantly",
    ],
    highlightsAr: [
      "تحويل الفكرة بضغطة واحدة إلى منشورات مخصصة لكل شبكة",
      "مولد للبدايات الجذابة (Hooks) ونماذج لمنشورات واسعة الانتشار",
      "اقتراح ذكي للوسوم (Hashtags) وأفضل أوقات النشر المقترحة",
      "توليد أوامر صور احترافية لتصميم الكاروسيل والبنرات الدعائية",
    ],
    tier: "Marketing Pro",
  },
  {
    slug: "ai-interior-design-consultant",
    titleEn: "AI Interior Design Consultant",
    titleAr: "المستشار الذكي للتصميم الداخلي (AI Interior Design)",
    descEn:
      "Reimagine your living space with AI. Upload a room photo, explore styles like Scandinavian or Minimalist, and chat with an interactive design assistant.",
    descAr:
      "أعد تخيل وتصميم مساحاتك ومنزلك بالذكاء الاصطناعي. ارفع صورة الغرفة واختر الأنماط المعمارية وتحدث مع مستشار التصميم الذكي.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1B23bH8pjfNerHJgnPtR7bRQlbhanBx6f?showPreview=true&showAssistant=true",
    category: "PropTech & Design",
    categoryAr: "التصميم والعقارات",
    tags: ["Interior Design", "PropTech", "Room Makeover", "Spatial AI"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "Design Assistant",
    badgeAr: "تصميم داخلي",
    taglineEn: "Spatial room redesign and interactive architectural chat guidance.",
    taglineAr: "إعادة تصميم المساحات المعمارية واستشارات تفاعلية لتنسيق الديكور.",
    overviewEn:
      "Transform empty or dated spaces into curated interior showcases. Upload any room snapshot and test layouts across Japandi, Modern Boho, or Industrial design styles with shopping link estimates.",
    overviewAr:
      "حوّل الغرف والمساحات إلى تحف فنية راقية. ارفع صورة أي غرفة واختبر تصاميم متنوعة مثل النمط الاسكندنافي أو الحديث مع تقدير تقريبي للأثاث والديكورات.",
    highlightsEn: [
      "Structural room geometry preservation during visual redesign",
      "Interactive style switcher: Modern, Bohemian, Industrial, Minimalist",
      "Conversational design advisor for lighting, wall paint, and textures",
      "Downloadable before/after comparison slides and mood boards",
    ],
    highlightsAr: [
      "الحفاظ على الأبعاد الهندسية ومواضع النوافذ والأبواب أثناء التصميم",
      "مبدل أنماط فوري: نيو كلاسيك، مودرن، اسكندنافي، وصناعي",
      "مستشار محادثة ذكي لاختيار الإضاءة وتناسق ألوان الجدران والأثاث",
      "تنزيل شرائح مقارنة قبل/بعد ولوحات إلهام (Mood Boards) عالية الجودة",
    ],
    tier: "Design Lab",
  },
  {
    slug: "smart-fridge-chef",
    titleEn: "Smart Fridge Chef",
    titleAr: "طاهي الثلاجة الذكي (Smart Fridge Chef)",
    descEn:
      "Snap a photo of your fridge ingredients to receive creative recipe suggestions, dietary filters, and an interactive voice cooking assistant.",
    descAr:
      "التقط صورة لمحتويات ثلاجتك لتحصل على وصفات طهي شهية ومخصصة وفق نظامك الغذائي مع مساعد طهي تفاعلي.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1PSdPjILGAtmJJdmGoXFhMsQCwamdPAJc?showPreview=true&showAssistant=true",
    category: "Lifestyle & Health",
    categoryAr: "أسلوب الحياة والصحة",
    tags: ["Recipe AI", "Food Recognition", "Dietary Planner", "Cooking Assistant"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "Food Tech",
    badgeAr: "مساعد الطهي",
    taglineEn: "Zero-food-waste cooking advisor that turns leftover ingredients into gourmet meals.",
    taglineAr: "مستشار طهي يحد من هدر الطعام ويحول المكونات المتوفرة لديك إلى وجبات فاخرة.",
    overviewEn:
      "Smart Fridge Chef analyzes fridge snapshots using visual AI, tags all usable ingredients, flags expiration priorities, and generates step-by-step culinary instructions with nutritional macros.",
    overviewAr:
      "يحلل التطبيق صور محتويات الثلاجة بالذكاء الاصطناعي البصري، ويحدد المكونات المتاحة ويرتب أولوياتها لصناعة وجبات لذيذة مع حساب السعرات والقيم الغذائية.",
    highlightsEn: [
      "Instant visual inventory of raw ingredients, vegetables, and condiments",
      "Custom dietary preferences: Keto, Vegan, Gluten-Free, Low-Sodium",
      "Hands-free conversational cooking mode with voice guidance",
      "Calculated macronutrient breakdown and estimated prep time",
    ],
    highlightsAr: [
      "جرد فوري وتلقائي لمحتويات الثلاجة من خضروات وبروتينات وتوابل",
      "تخصيص كامل للأنظمة الغذائية: كيتو، نباتي، خالي من الجلوتين، وقليل الصوديوم",
      "وضع طهي صوتي تفاعلي دون الحاجة للمس الشاشة أثناء تحضير الطعام",
      "حساب دقيق للسعرات والقيم الغذائية والوقت المتوقع للتحضير",
    ],
    tier: "Lifestyle",
  },
  {
    slug: "magic-coloring-book",
    titleEn: "Magic Coloring Book AI",
    titleAr: "كتاب التلوين السحري للأطفال",
    descEn:
      "Create personalized children's coloring books powered by generative AI with custom themes, story characters, and printable pages.",
    descAr:
      "أنشئ كتب تلوين مخصصة ومطبوعة للأطفال مدعومة بالذكاء الاصطناعي تحتوي على شخصيات وأسماء وقصص مخصصة لكل طفل.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1JHFuZlVDOhDrRMdEs6HXYH5fzTwBBk5m?showPreview=true&showAssistant=true",
    category: "Creative & Kids",
    categoryAr: "الإبداع والطفل",
    tags: ["Coloring Book", "Children", "Printable", "Illustration AI"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "Kids & Family",
    badgeAr: "للأطفال والأسرة",
    taglineEn: "Delightful personalized printable coloring storybooks starring your child.",
    taglineAr: "كتب تلوين وقصص مطبوعة مخصصة تجعل طفلك هو بطل المغامرة.",
    overviewEn:
      "Children become the heroes of their own coloring adventures. Parents enter the child's name and favorite themes—such as dinosaur space explorers or underwater castles—to get a ready-to-print coloring booklet.",
    overviewAr:
      "يجعل هذا التطبيق الأطفال أبطالاً لمغامرات التلوين الخاصة بهم. يقوم الوالدان بإدخال اسم الطفل واهتماماته كالديناصورات أو الفضاء ليتم توليد كتيب تلوين كامل جاهز للطباعة.",
    highlightsEn: [
      "Clean high-contrast black & white line art optimized for printing",
      "Personalized story narratives featuring the child's name and age",
      "Educational coloring themes promoting fine motor skills",
      "Standard PDF download ready for home printing on A4 or Letter",
    ],
    highlightsAr: [
      "خطوط تلوين عريضة ونقية عالية التباين مهيأة تماماً للطباعة المنزلية",
      "حبكة قصصية ممتعة تتضمن اسم الطفل ومناسبته المفضلة",
      "محتوى تعليمي هادف ينمي المهارات الحركية والإبداعية لدى الصغار",
      "تصدير فوري كملف PDF قياسي جاهز للطباعة على ورق A4",
    ],
    tier: "Family Lab",
  },
  {
    slug: "splitsmart-ai",
    titleEn: "SplitSmart AI - Bill Splitting",
    titleAr: "سبليت سمارت - تقسيم الفواتير الذكي (SplitSmart AI)",
    descEn:
      "A split-screen bill splitting app. Upload a receipt image to automatically parse items, and assign shares with conversational ease.",
    descAr:
      "تطبيق ذكي لتقسيم الفواتير والنفقات الجماعية عبر مسح صور الإيصالات وفصل البنود بدقة مع محادثة ذكية لتوزيع الحصص.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1yW9D_rY5vnN_YLs9wD_Ik8IzDfMhw5r-?showPreview=true&showAssistant=true",
    category: "Finance & Utilities",
    categoryAr: "المالية والأدوات",
    tags: ["Bill Splitter", "Receipt Parser", "Expense Sharing", "OCR"],
    date: "Dec 23, 2025",
    isAiStudio: true,
    badgeEn: "FinTech Utility",
    badgeAr: "مالية ذكية",
    taglineEn: "Fair and effortless restaurant bill splitting using camera OCR and natural chat.",
    taglineAr: "تقسيم عادل وفوري لفواتير المطاعم والمشتريات عبر الكاميرا والمحادثة.",
    overviewEn:
      "SplitSmart eliminates the awkward math after group dining. Take a photo of any receipt: it automatically recognizes tax, service charges, discounts, and line items, allowing friends to claim items effortlessly.",
    overviewAr:
      "يقضي سبليت سمارت على الحسابات المعقدة بعد الوجبات الجماعية. التقط صورة الفاتورة ليقوم بفرز بنود الوجبات والضريبة والخدمة وتمكين كل شخص من تحديد ما تناوله بسهولة.",
    highlightsEn: [
      "Sub-second optical receipt recognition with tax and tip breakdown",
      "Natural language expense assignment ('Hossam had the burger and juice')",
      "Multi-currency support with real-time conversion rates",
      "Direct payment link generation and WhatsApp summary sharing",
    ],
    highlightsAr: [
      "قراءة فورية لبنود الفاتورة وحساب تلقائي للضريبة والخدمة والخصومات",
      "توزيع النفقات بالأوامر اللغوية الطبيعية ('أحمد طلب البرجر والعصير')",
      "دعم للعملات المختلفة مع حساب دقيق لأسعار الصرف",
      "مشاركة ملخص الحساب بروابط دفع مباشرة عبر الواتساب",
    ],
    tier: "FinTech",
  },
  {
    slug: "star-guardian-ai-shooter",
    titleEn: "Star Guardian - AI Space Shooter",
    titleAr: "حارس النجوم - معركة الفضاء بالذكاء الاصطناعي",
    descEn:
      "An action-packed space shooter arcade game with dynamic AI-generated missions, adaptive enemy waves, and cosmic battles.",
    descAr:
      "لعبة إطلاق نار فضائية حماسية تتميز بمهام ومراحل يولدها الذكاء الاصطناعي ديناميكياً مع خصوم يتكيفون مع مستوى لعبك.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1SukO1w2ApnVp_0Yw3lZWHvBT0Ksn6qzb?showPreview=true&showAssistant=true",
    category: "Gaming & Interactive",
    categoryAr: "الألعاب والترفيه",
    tags: ["Game AI", "Space Shooter", "Arcade", "Procedural Missions"],
    date: "Nov 22, 2025",
    isAiStudio: true,
    badgeEn: "Arcade Game",
    badgeAr: "ألعاب تفاعلية",
    taglineEn: "Adaptive cosmic shoot-em-up featuring procedural boss battles and story arcs.",
    taglineAr: "لعبة أركيد فضائية حماسية تتكيف مراحلها وزعمائها مع مهارة اللاعب في الوقت الفعلي.",
    overviewEn:
      "Star Guardian redefines classic 2D retro arcade action by using generative AI to script narrative briefings, generate cosmic backgrounds, and dynamically adjust enemy fleet tactics.",
    overviewAr:
      "تطور لعبة حارس النجوم ألعاب الفضاء الكلاسيكية عبر استخدام الذكاء الاصطناعي لصياغة الإحاطات العسكرية للمعارك وتوليد خلفيات المجرات وتعديل تكتيكات الأساطيل المهاجمة.",
    highlightsEn: [
      "Procedural mission generator producing unique cosmic encounters",
      "Adaptive enemy AI that counters your weapon upgrades and tactics",
      "Retro pixel visuals with modern particle and audio effects",
      "Zero download — runs seamlessly on desktop and mobile browsers",
    ],
    highlightsAr: [
      "توليد مستمر لمهام فضائية فريدة لا تتكرر في كل جولة",
      "ذكاء اصطناعي للخصوم يتكيف ويواجه تكتيكات أسلحتك المطورة",
      "طابع بصري كلاسيكي (Retro Pixel) مع مؤثرات جسيمات وصوتيات حديثة",
      "تشغيل فوري على المتصفح دون الحاجة لتثبيت أي برامج",
    ],
    tier: "Gaming",
  },
  {
    slug: "ai-trivia-arena",
    titleEn: "AI Trivia Arena - Live Quiz Game",
    titleAr: "ساحة مسابقات الذكاء الاصطناعي التفاعلية",
    descEn:
      "A dynamic live trivia quiz show hosted by an interactive AI personality with real-time web search integration and voice banter.",
    descAr:
      "لعبة مسابقات وأسئلة ثقافية ديناميكية يستضيفها مذيع ذكاء اصطناعي تفاعلي مع دعم البحث المباشر في الويب والتفاعل الصوتي.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1oTw9_icZQgtHj29sJP7Ne7ont_uxG6NV?showPreview=true&showAssistant=true",
    category: "Gaming & Interactive",
    categoryAr: "الألعاب والترفيه",
    tags: ["Trivia Game", "Voice Host", "Live Search", "Interactive Quiz"],
    date: "Nov 22, 2025",
    isAiStudio: true,
    badgeEn: "Live Trivia",
    badgeAr: "مسابقات وبث",
    taglineEn: "Voice-driven trivia gameshow anchored by a witty, real-time AI quizmaster.",
    taglineAr: "برنامج مسابقات صوتي تفاعلي يقوده مذيع ذكي سريع البديهة ومتصل بالإنترنت.",
    overviewEn:
      "AI Trivia Arena pits players against friends or solo challenges across any subject under the sun. The AI host jokes, verifies answers against live Google search, and keeps score dynamically.",
    overviewAr:
      "تضعك ساحة المسابقات في تجربة مليئة بالحماس والتشويق عبر آلاف المجالات المعرفية، حيث يطرح المذيع الأسئلة ويتحقق من صحتها عبر البحث اللحظي في الإنترنت مع تعليقات طريفة.",
    highlightsEn: [
      "Live Google Search grounding ensuring factual, up-to-date questions",
      "Dynamic witty voice commentary from the virtual AI host",
      "Multiplayer room support for family game nights and corporate icebreakers",
      "Custom category creation on any topic in Arabic or English",
    ],
    highlightsAr: [
      "ربط مباشر مع بحث Google لضمان دقة وحداثة الأسئلة والمعلومات",
      "تعليق صوتي فوري وتفاعلي مرح من المذيع الافتراضي",
      "غرف مسابقات جماعية مخصصة للمنافسات العائلية وفعاليات الشركات",
      "إمكانية إنشاء تصنيفات ومسابقات خاصة بأي مجال باللغتين العربية والإنجليزية",
    ],
    tier: "Entertainment",
  },
  {
    slug: "ai-headshot-pro-studio",
    titleEn: "AI Headshot Pro Studio",
    titleAr: "استوديو الصور الاحترافية الذكي (AI Headshot Pro)",
    descEn:
      "Transform casual smartphone selfies into corporate executive headshots using Gemini 2.5 Flash Image styling and prompt refinements.",
    descAr:
      "حول صور السيلفي العادية إلى لقطات بورتريه تنفيذية احترافية ملائمة لسيرتك الذاتية وملف لينكد إن بتقنية Gemini 2.5.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1xOqA7DlH3ouLpDnn4Nfgbu4fahyviSJQ?showPreview=true&showAssistant=true",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Headshot Studio", "Executive Portrait", "Gemini Flash", "Image Enhancement"],
    date: "Nov 21, 2025",
    isAiStudio: true,
    featured: true,
    badgeEn: "Career AI",
    badgeAr: "الملف المهني",
    taglineEn: "Corporate-grade executive headshots from casual selfies without booking a studio.",
    taglineAr: "بورتريهات قيادية احترافية لملفك المهني دون الحاجة لحجز استوديو تصوير.",
    overviewEn:
      "AI Headshot Pro replaces expensive portrait photographers. Simply upload smartphone selfies, and select attire such as blazers or formal wear in professional lighting backdrops.",
    overviewAr:
      "يوفر التطبيق بديلاً عملياً لاستوديوهات التصوير الفوتوغرافي لرواد الأعمال والمهنيين، عبر تحويل الصور العادية إلى لقطات رسمية بأزياء وإضاءات ملائمة للشركات والمؤتمرات.",
    highlightsEn: [
      "Professional corporate attire and modern office backdrop presets",
      "Skin tone preservation and realistic studio lighting simulation",
      "Optimized aspect ratios for LinkedIn, resumes, and corporate speaker bios",
      "Fast processing powered by Gemini 2.5 Flash Image technology",
    ],
    highlightsAr: [
      "مجموعة واسعة من الأزياء الرسمية وخلفيات المكاتب الحديثة",
      "محاكاة إضاءة استوديو دقيقة مع الحفاظ على درجات البشرة الطبيعية",
      "مقاسات مخصصة لشبكة LinkedIn وملفات السيرة الذاتية ومؤتمرات العمل",
      "معالجة فائقة السرعة مدعومة بتقنيات Gemini 2.5 Flash الحديثة",
    ],
    tier: "Career Studio",
  },
  {
    slug: "qudschool-qudemy-lms",
    titleEn: "QudSchool & Qudemy Adaptive LMS",
    titleAr: "منصة كود سكول وكوديمي التعليمية (QudSchool & Qudemy)",
    descEn:
      "A smart, dual-mode educational platform that adapts to the learner: playful gamification for kids (QudSchool) and advanced technical learning for professionals (Qudemy).",
    descAr:
      "منصة تعليمية ذكية ثنائية النمط تتكيف مع الدارس: تجربة تعليمية مرحة وتفاعلية للأطفال (QudSchool)، وبيئة احترافية للمبرمجين والمتخصصين (Qudemy).",
    appUrl:
      "https://aistudio.google.com/apps/drive/1xEyyFabP9_DZksUNzkLqedBsDKnL-7OW?showPreview=true&showAssistant=true",
    category: "EdTech",
    categoryAr: "التعليم والتطوير",
    tags: ["Dual-Mode LMS", "Adaptive Learning", "EdTech", "AI Tutor"],
    date: "Nov 17, 2025",
    isAiStudio: true,
    featured: true,
    badgeEn: "Dual LMS Flagship",
    badgeAr: "المنصة التعليمية الرائدة",
    taglineEn: "Seamless dual-mode education: playful exploration for youth, professional mastery for careers.",
    taglineAr: "تعليم ذكي ثنائي النمط: تجربة تفاعلية ممتعة للناشئين، واحتراف تقني متقدم للمحترفين.",
    overviewEn:
      "The flagship educational engine of QudSystem. It switches between a colorful, voice-narrated interface for children and an intensive, project-oriented environment for software engineers and college students.",
    overviewAr:
      "المحرك التعليمي الأساسي لمنظومة QudSystem، حيث يتيح التبديل السلس بين بيئة ممتعة ومبسطة للأطفال، ومختبرات برمجية وتقنية متقدمة للطلاب الجامعيين والمهندسين.",
    highlightsEn: [
      "Dual-personality AI mentor adapting tone, depth, and pacing to learner age",
      "Gamified questlines for K-12 alongside rigorous enterprise modules for adults",
      "Interactive code runners, automated quizzes, and personalized certificates",
      "Parental dashboard and teacher progress oversight",
    ],
    highlightsAr: [
      "مدرب ذكاء اصطناعي ثنائي النمط يكيف أسلوبه وعمق الشرح وفق عمر المتعلم",
      "مسارات ألعاب ومغامرات للناشئين بجانب دورات تخصصية متقدمة للكبار",
      "محررات برمجية تفاعلية، اختبارات تقييم ذكية، وشهادات إتمام موثقة",
      "لوحة تحكم لأولياء الأمور والمعلمين لمتابعة التقدم الأكاديمي",
    ],
    tier: "Enterprise LMS",
  },
  {
    slug: "qudschool-ai-learning-platform",
    titleEn: "QudSchool - Next-Gen Education Core",
    titleAr: "منصة كود سكول - النواة التعليمية الذكية (QudSchool Core)",
    descEn:
      "Foundational cloud LMS architecture featuring Gemini AI interaction, structured curriculum navigation, and real-time student evaluation.",
    descAr:
      "منصة إدارة تعلم سحابية متقدمة تدعم التفاعل الفوري مع نماذج Gemini، وتقديم المناهج التفاعلية مع أنظمة تقييم لحظية للطلاب.",
    appUrl:
      "https://aistudio.google.com/apps/drive/1fx0VNFfHRjnEmYTue2v3XA0DK5IfPz3v?showPreview=true&showAssistant=true",
    category: "EdTech",
    categoryAr: "التعليم والتطوير",
    tags: ["Next.js LMS", "Gemini API", "Curriculum AI", "Smart Learning"],
    date: "Nov 12, 2025",
    isAiStudio: true,
    badgeEn: "Core Architecture",
    badgeAr: "النواة المعمارية",
    taglineEn: "React/Next.js foundation for scalable smart school and institutional learning systems.",
    taglineAr: "البنية البرمجية الأساسية لإدارة المدارس والجامعات الذكية والمناهج التفاعلية.",
    overviewEn:
      "The architectural core of QudSystem's school management suite, structured for rapid multi-tenant school onboarding, role-based access for educators, and direct Gemini AI classroom assistants.",
    overviewAr:
      "النواة الهندسية لمنظومة إدارة التعليم لدى QudSystem، مجهزة للنشر السحابي متعدد المؤسسات مع دعم صلاحيات المعلمين والمساعد الذكي داخل الحصص الافتراضية.",
    highlightsEn: [
      "Modular Next.js & React architecture ready for enterprise scaling",
      "Deep Gemini API integration for automated lesson summarization",
      "Student performance analytics with automated intervention alerts",
      "Structured data model ready for Supabase, Stripe, and real-time vocal agents",
    ],
    highlightsAr: [
      "معمارية برمجية حديثة بـ Next.js و React قابلة للتوسع المؤسسي الهائل",
      "ربط مباشر مع واجهات Gemini لتلخيص الدروس وتوليد بنوك الأسئلة",
      "تحليلات أداء دراسي ذكية مع تنبيهات استباقية لمساعدة الطلاب المتعثرين",
      "نموذج بيانات متين يدعم الربط مع بوابات الدفع والوكلاء الصوتيين اللحظيين",
    ],
    tier: "Architecture Core",
  },
]

// Legacy suite products retained for 100% backward compatibility
export const legacySuiteProducts: ProductItem[] = [
  {
    slug: "qud-office-ai",
    titleEn: "Qud Office AI",
    titleAr: "حزمة Qud Office AI",
    descEn: "The AI-native productivity and office suite engineered for autonomous enterprise teams.",
    descAr: "حزمة الإنتاجية والعمل المكتبي المدعومة بالذكاء الاصطناعي والمصممة للفرق الحديثة.",
    appUrl: "https://github.com/hussamgalal999/qudsystem-website",
    category: "Productivity",
    categoryAr: "الإنتاجية والمكتب",
    tags: ["Office AI", "Documents", "Sheets", "Presentations"],
    date: "2026",
    isAiStudio: false,
    featured: true,
    badgeEn: "Flagship Suite (Upcoming)",
    badgeAr: "الحزمة الرائدة (قريباً)",
    taglineEn: "The AI-native productivity and office suite engineered for autonomous teams.",
    taglineAr: "حزمة الإنتاجية والعمل المكتبي المدعومة بالذكاء الاصطناعي والمصممة للفرق الحديثة.",
    overviewEn:
      "Qud Office AI redefines office work by embedding specialized AI agents directly into document writing, dynamic spreadsheets, presentation generation, and intelligent project orchestration.",
    overviewAr:
      "تُعيد حزمة Qud Office AI صياغة العمل المكتبي عبر دمج وكلاء ذكاء اصطناعي متخصصين داخل محررات المستندات، جداول البيانات، وتوليد العروض التقديمية وإدارة المشاريع.",
    highlightsEn: [
      "AI Document & Content Synthesis with local/cloud reasoning",
      "Spreadsheet Intelligence with automated data analysis",
      "Dynamic Slide Deck generator powered by QudGammaX",
      "100% Ad-Free on paid tiers with dedicated enterprise encryption",
    ],
    highlightsAr: [
      "صياغة المستندات والمحتوى بنماذج ذكاء اصطناعي هجينة",
      "تحليل ذكي لجداول البيانات واستخراج المؤشرات تلقائياً",
      "توليد عروض تقديمية تفاعلية مدعومة بمحرك QudGammaX",
      "خالية تماماً 100% من الإعلانات في الباقات المدفوعة مع تشفير تام",
    ],
    tier: "Flagship",
  },
  {
    slug: "dragon-security-suite",
    titleEn: "Dragon Security Suite (R1 & B1)",
    titleAr: "منظومة دراجون للأمن السيبراني (R1 & B1)",
    descEn: "Autonomous security auditing, penetration testing, and continuous secret shielding.",
    descAr: "تدقيق أمني مستقل، اختبارات اختراق دورية، وحماية فورية لمنع تسريب المفاتيح السرية.",
    appUrl: "https://github.com/hussamgalal999/qudsystem-website",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    tags: ["Security", "Dragon R1", "Dragon B1", "Secret Shield"],
    date: "2026",
    isAiStudio: false,
    badgeEn: "Cybersecurity Standard",
    badgeAr: "معيار الأمان السيبراني",
    taglineEn: "Autonomous security auditing, penetration testing, and continuous secret shielding.",
    taglineAr: "تدقيق أمني مستقل، اختبارات اختراق دورية، وحماية فورية لمنع تسريب المفاتيح السرية.",
    overviewEn:
      "A battle-tested defense suite built to protect enterprise codebases against unauthorized access, credentials leakage, and zero-day attack surfaces.",
    overviewAr:
      "منظومة أمنية متكاملة مصممة لحماية مخازن الكود وبيئات العمل الحساسة من الاختراق وتسريب الاعتمادات والمفاتيح السرية.",
    highlightsEn: [
      "Automated push-level secret scanning and sanitization",
      "Autonomous reconnaissance and threat modeling agents",
      "Deterministic vulnerability report generation with remediation diffs",
      "Seamless integration with Git hooks and CI/CD pipelines",
    ],
    highlightsAr: [
      "فحص فوري وتطهير تلقائي للمفاتيح السرية قبل إتمام الدفع",
      "وكلاء استطلاع وفحص أمني لتحليل أسطح التهديد",
      "تقارير تدقيق حتمية توفر ترقيعات برمجية دقيقة للثغرات",
      "ربط فوري ومباشر مع الـ Git Hooks وأنابيب النشر المستمر",
    ],
    tier: "Enterprise",
  },
  {
    slug: "qudmind-aura",
    titleEn: "QudMind Aura",
    titleAr: "منصة QudMind Aura",
    descEn: "Hand-driven particle universe combining visual computer vision with GPU web graphics.",
    descAr: "عالم تفاعلي من الجزيئات البصرية يتحكم به المستخدم عبر حركات اليد والرؤية الحاسوبية.",
    appUrl: "https://github.com/hussamgalal999/qudsystem-website",
    category: "Creative & Media",
    categoryAr: "التصميم والوسائط",
    tags: ["Particle Physics", "Computer Vision", "Hand Tracking", "3D Web"],
    date: "2026",
    isAiStudio: false,
    badgeEn: "Interactive AI Experience",
    badgeAr: "تجربة بصرية تفاعلية",
    taglineEn: "Hand-driven particle universe combining visual computer vision with web graphics.",
    taglineAr: "عالم تفاعلي من الجزيئات البصرية يتحكم به المستخدم عبر حركات اليد والرؤية الحاسوبية.",
    overviewEn:
      "An award-caliber creative experience showcasing the intersection of camera-based gesture recognition, GPU particle physics, and real-time canvas rendering.",
    overviewAr:
      "تجربة تقنية إبداعية تستعرض قوة دمج تمييز الإيماءات بالكاميرا ومحاكاة فيزياء الجسيمات عبر كارت الشاشة في الوقت الفعلي.",
    highlightsEn: [
      "Zero-latency webcam hand tracking with MediaPipe",
      "60 FPS GPU-accelerated particle universe simulation",
      "Dynamic soundscapes reacting to hand distance and movement",
      "Zero external server overhead — 100% client-side execution",
    ],
    highlightsAr: [
      "تتبع يد فوري بدون تأخير باستخدام الرؤية الحاسوبية",
      "محاكاة جزيئات فائقة السرعة بـ 60 إطاراً في الثانية",
      "تفاعل صوتي ديناميكي مع مسافة وسرعة حركة اليد",
      "تنفيذ محلي بالكامل على المتصفح بدون استهلاك للسيرفر",
    ],
    tier: "Creative Lab",
  },
]

// All products combined: 25 AI Studio applications + legacy suite
export const allProducts: ProductItem[] = [...aiStudioProducts, ...legacySuiteProducts]

export function getProductBySlug(slug: string): ProductItem | undefined {
  const found = allProducts.find((p) => p.slug === slug)
  if (found) return found

  // Aliases for legacy slugs
  const aliasMap: Record<string, string> = {
    "qudmind-ai": "mimo-autonomous-agent",
    "qudschool-lms": "qudschool-qudemy-lms",
    "qud-cv-penrate": "ai-headshot-pro-studio",
    "kenzy-ai": "hakay-arabic-audiobooks",
    "qud-adliya": "prime-leads-ai",
    "qud-buildx": "ai-interior-design-consultant",
    "qud-myhowiya": "rooh-luxury-headscarves",
    "qud-summarizer": "remix-notebook-to-excel",
    "qud-headshot-pro": "ai-headshot-pro-studio",
    "qud-workflow-studio": "forge-ai-studio",
  }

  const aliasedSlug = aliasMap[slug]
  if (aliasedSlug) {
    return allProducts.find((p) => p.slug === aliasedSlug)
  }

  return undefined
}
