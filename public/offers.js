/* ============================================
   QudSystem - Smart Promotional Offers Engine v2
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Features:
   • 28+ occasions (Islamic, Egyptian, International)
   • Full Arabic bilingual support
   • Personalized per-visitor unique offers
   • Social proof notifications
   • Exit-intent detection
   • Smart time-of-day greetings
   • Scarcity/urgency indicators
   • Returning visitor rewards
   • WhatsApp integration with pre-filled messages
   • Countdown timers
   ============================================ */

const QudOffers = (() => {
    'use strict';

    const CONFIG = {
        whatsapp: '201151858057',
        company: 'QudSystem',
        siteUrl: 'https://qudsystem.netlify.app',
        popupDelay: 3500,
        socialProofInterval: 12000,
        exitIntentCooldown: 30000
    };

    // ──────────────────────────────────────────
    // VISITOR PROFILE (localStorage)
    // ──────────────────────────────────────────
    const Visitor = {
        _key: 'qud_visitor',
        get() {
            try {
                const raw = localStorage.getItem(this._key);
                if (raw) return JSON.parse(raw);
            } catch (e) { /* ignore */ }
            return null;
        },
        create() {
            const profile = {
                id: 'v_' + Math.random().toString(36).substr(2, 9),
                firstVisit: new Date().toISOString(),
                visits: 1,
                lastVisit: new Date().toISOString(),
                offersViewed: [],
                personalDiscount: Math.floor(Math.random() * 6) + 15, // 15-20% base
                returningBonus: 0
            };
            this.save(profile);
            return profile;
        },
        save(profile) {
            try { localStorage.setItem(this._key, JSON.stringify(profile)); } catch (e) { /* ignore */ }
        },
        init() {
            let profile = this.get();
            if (!profile) {
                profile = this.create();
                profile.isNew = true;
            } else {
                profile.visits += 1;
                profile.lastVisit = new Date().toISOString();
                // Returning visitor bonus: +2% per visit, max +10%
                profile.returningBonus = Math.min((profile.visits - 1) * 2, 10);
                profile.isNew = false;
                this.save(profile);
            }
            return profile;
        }
    };

    // ──────────────────────────────────────────
    // TIME-OF-DAY GREETING SYSTEM
    // ──────────────────────────────────────────
    function getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return { en: 'Good Morning', ar: 'صباح الخير', emoji: '🌅' };
        if (hour >= 12 && hour < 17) return { en: 'Good Afternoon', ar: 'مساء النور', emoji: '☀️' };
        if (hour >= 17 && hour < 21) return { en: 'Good Evening', ar: 'مساء الخير', emoji: '🌆' };
        return { en: 'Good Night', ar: 'مساء الخير', emoji: '🌙' };
    }

    // ──────────────────────────────────────────
    // ALL OCCASIONS DATABASE (28+ occasions)
    // ──────────────────────────────────────────
    const OCCASIONS = [
        // ═══════ ISLAMIC HOLIDAYS ═══════
        {
            id: 'ramadan', name: 'Ramadan Kareem', nameAr: 'رمضان كريم 🌙',
            discount: 30, emoji: '🌙', color: '#8b5cf6', icon: 'fas fa-moon', badge: 'Ramadan Special', badgeAr: 'عرض رمضان',
            desc: 'Blessed Ramadan! Special discounts on all our digital solutions. Transform your business this holy month.',
            descAr: 'رمضان مبارك! خصومات استثنائية على جميع حلولنا الرقمية. حوّل أعمالك في هذا الشهر الكريم.',
            services: ['Custom Software', 'Web Apps', 'Mobile Apps', 'Cloud Solutions'],
            servicesAr: ['برمجيات مخصصة', 'تطبيقات ويب', 'تطبيقات موبايل', 'حلول سحابية'],
            dates: [
                { start: '2025-03-01', end: '2025-03-29' },
                { start: '2026-02-18', end: '2026-03-19' },
                { start: '2027-02-08', end: '2027-03-09' },
                { start: '2028-01-28', end: '2028-02-25' }
            ], preStart: 3
        },

        {
            id: 'laylat-qadr', name: 'Laylat al-Qadr', nameAr: 'ليلة القدر 🤲',
            discount: 40, emoji: '🤲', color: '#7c3aed', icon: 'fas fa-pray', badge: 'Night of Power', badgeAr: 'ليلة خير من ألف شهر',
            desc: 'The Night of Power! Our biggest single-night discount — better than a thousand months of regular pricing!',
            descAr: 'ليلة القدر خير من ألف شهر! أكبر خصم في ليلة واحدة — فرصة لا تتكرر!',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            dates: [
                { start: '2025-03-27', end: '2025-03-28' },
                { start: '2026-03-16', end: '2026-03-17' },
                { start: '2027-03-06', end: '2027-03-07' },
                { start: '2028-02-23', end: '2028-02-24' }
            ], preStart: 0
        },

        {
            id: 'eid-fitr', name: 'Eid Al-Fitr Mubarak', nameAr: 'عيد الفطر المبارك 🎉',
            discount: 35, emoji: '🎁', color: '#10b981', icon: 'fas fa-gift', badge: 'Eid Offer', badgeAr: 'عرض العيد',
            desc: 'Eid Mubarak! Celebrate with our biggest Eid offer — premium quality at unbeatable prices!',
            descAr: 'عيد مبارك! احتفل معنا بأكبر عروض العيد — جودة عالية بأسعار لا تُقاوم!',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            dates: [
                { start: '2025-03-30', end: '2025-04-03' },
                { start: '2026-03-20', end: '2026-03-24' },
                { start: '2027-03-10', end: '2027-03-14' },
                { start: '2028-02-26', end: '2028-03-01' }
            ], preStart: 2
        },

        {
            id: 'eid-adha', name: 'Eid Al-Adha Mubarak', nameAr: 'عيد الأضحى المبارك 🐏',
            discount: 35, emoji: '🕌', color: '#059669', icon: 'fas fa-mosque', badge: 'Eid Al-Adha Deal', badgeAr: 'عرض عيد الأضحى',
            desc: 'Eid Al-Adha Mubarak! Exclusive deals — sacrifice high prices, not quality!',
            descAr: 'عيد أضحى مبارك! عروض حصرية — ضحّي بالأسعار العالية وليس بالجودة!',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            dates: [
                { start: '2025-06-06', end: '2025-06-10' },
                { start: '2026-05-27', end: '2026-05-31' },
                { start: '2027-05-17', end: '2027-05-21' },
                { start: '2028-05-05', end: '2028-05-09' }
            ], preStart: 2
        },

        {
            id: 'hijri-new-year', name: 'Islamic New Year', nameAr: 'رأس السنة الهجرية 🕌',
            discount: 20, emoji: '☪️', color: '#6366f1', icon: 'fas fa-star-and-crescent', badge: 'Hijri New Year', badgeAr: 'عرض السنة الهجرية',
            desc: 'Happy Islamic New Year! Start the new Hijri year with a fresh digital transformation.',
            descAr: 'كل عام هجري وأنتم بخير! ابدأ العام الهجري الجديد بتحوّل رقمي شامل.',
            services: ['Custom Software', 'Web Apps'], servicesAr: ['برمجيات مخصصة', 'تطبيقات ويب'],
            dates: [
                { start: '2025-06-26', end: '2025-06-28' },
                { start: '2026-06-17', end: '2026-06-19' },
                { start: '2027-06-07', end: '2027-06-09' },
                { start: '2028-05-26', end: '2028-05-28' }
            ], preStart: 1
        },

        {
            id: 'mawlid', name: "Prophet's Birthday", nameAr: 'المولد النبوي الشريف 🌟',
            discount: 20, emoji: '⭐', color: '#22c55e', icon: 'fas fa-star', badge: 'Mawlid Special', badgeAr: 'عرض المولد النبوي',
            desc: "Blessed Mawlid! Celebrate the Prophet's birthday with special offers on our services.",
            descAr: 'بمناسبة المولد النبوي الشريف! عروض مباركة وخاصة على جميع خدماتنا.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            dates: [
                { start: '2025-09-04', end: '2025-09-06' },
                { start: '2026-08-25', end: '2026-08-27' },
                { start: '2027-08-15', end: '2027-08-17' },
                { start: '2028-08-03', end: '2028-08-05' }
            ], preStart: 1
        },

        {
            id: 'isra-miraj', name: "Isra & Mi'raj", nameAr: 'الإسراء والمعراج ✨',
            discount: 15, emoji: '🌌', color: '#a855f7', icon: 'fas fa-cloud-moon', badge: 'Blessed Night', badgeAr: 'ليلة مباركة',
            desc: 'On this blessed night, elevate your business to new heights with our solutions.',
            descAr: 'في هذه الليلة المباركة، ارتقِ بأعمالك إلى آفاق جديدة مع حلولنا المتميزة.',
            services: ['Cloud Solutions', 'Web Apps'], servicesAr: ['حلول سحابية', 'تطبيقات ويب'],
            dates: [
                { start: '2025-01-27', end: '2025-01-28' },
                { start: '2026-01-16', end: '2026-01-17' },
                { start: '2027-01-06', end: '2027-01-07' },
                { start: '2028-12-26', end: '2028-12-27' }
            ], preStart: 1
        },

        // ═══════ EGYPTIAN NATIONAL HOLIDAYS ═══════
        {
            id: 'jan25', name: 'January 25 Revolution', nameAr: 'ثورة 25 يناير 🇪🇬',
            discount: 25, emoji: '🇪🇬', color: '#ef4444', icon: 'fas fa-flag', badge: 'Revolution Day', badgeAr: 'عرض الثورة',
            desc: 'Celebrate the revolution with revolutionary prices! Transform your business digitally.',
            descAr: 'احتفل بالثورة مع أسعار ثورية! حوّل أعمالك رقمياً مع خصومات استثنائية.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 1, day: 25 }, duration: 3, preStart: 2
        },

        {
            id: 'sinai', name: 'Sinai Liberation Day', nameAr: 'عيد تحرير سيناء 🏔️',
            discount: 25, emoji: '🏔️', color: '#f59e0b', icon: 'fas fa-mountain', badge: 'Liberation Offer', badgeAr: 'عرض التحرير',
            desc: 'Free your business from outdated systems! Celebrate liberation with special offers.',
            descAr: 'حرّر أعمالك من الأنظمة القديمة! احتفل بتحرير سيناء مع عروض خاصة.',
            services: ['Custom Software', 'Cloud Solutions'], servicesAr: ['برمجيات مخصصة', 'حلول سحابية'],
            fixedDate: { month: 4, day: 25 }, duration: 2, preStart: 1
        },

        {
            id: 'labour', name: 'Labour Day', nameAr: 'عيد العمال 👷',
            discount: 20, emoji: '👷', color: '#f97316', icon: 'fas fa-hard-hat', badge: 'Labour Day', badgeAr: 'عرض عيد العمال',
            desc: "We work hard so you don't have to! Special Labour Day pricing.",
            descAr: 'نحن نعمل بجد لأجلك! أسعار خاصة بمناسبة عيد العمال.',
            services: ['Custom Software', 'Cloud Solutions'], servicesAr: ['برمجيات مخصصة', 'حلول سحابية'],
            fixedDate: { month: 5, day: 1 }, duration: 2, preStart: 1
        },

        {
            id: 'june30', name: 'June 30 Revolution', nameAr: 'ثورة 30 يونيو 🇪🇬',
            discount: 20, emoji: '🇪🇬', color: '#e11d48', icon: 'fas fa-flag', badge: 'June 30 Deal', badgeAr: 'عرض 30 يونيو',
            desc: 'A new era for your business starts here! June 30 exclusive deals.',
            descAr: 'عهد جديد لأعمالك يبدأ من هنا! عروض حصرية لثورة 30 يونيو.',
            services: ['Web Apps', 'Mobile Apps'], servicesAr: ['تطبيقات ويب', 'تطبيقات موبايل'],
            fixedDate: { month: 6, day: 30 }, duration: 2, preStart: 1
        },

        {
            id: 'jul23', name: 'July 23 Revolution', nameAr: 'ثورة 23 يوليو 🇪🇬',
            discount: 23, emoji: '✊', color: '#dc2626', icon: 'fas fa-fist-raised', badge: 'July Revolution', badgeAr: 'عرض ثورة يوليو',
            desc: 'Revolutionize your business with cutting-edge software solutions!',
            descAr: 'ثورة في عالم البرمجيات! اجعل أعمالك تواكب المستقبل.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 7, day: 23 }, duration: 2, preStart: 1
        },

        {
            id: 'oct6', name: 'October 6 Victory', nameAr: 'نصر أكتوبر المجيد ⚔️',
            discount: 30, emoji: '🏆', color: '#b91c1c', icon: 'fas fa-trophy', badge: 'Victory Sale', badgeAr: 'عرض النصر',
            desc: 'Victory to your business! Our October Victory offer delivers winning solutions.',
            descAr: 'النصر لأعمالك! عروض نصر أكتوبر تقدم لك حلولاً رابحة.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 10, day: 6 }, duration: 3, preStart: 2
        },

        {
            id: 'coptic-christmas', name: 'Coptic Christmas', nameAr: 'عيد الميلاد المجيد 🎄',
            discount: 20, emoji: '⛪', color: '#16a34a', icon: 'fas fa-church', badge: 'Christmas Deal', badgeAr: 'عرض عيد الميلاد',
            desc: 'Merry Christmas! Celebrate with our exclusive holiday offers.',
            descAr: 'عيد ميلاد مجيد! احتفل مع عروضنا الحصرية بهذه المناسبة السعيدة.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 1, day: 7 }, duration: 2, preStart: 1
        },

        // ═══════ EGYPTIAN CULTURAL ═══════
        {
            id: 'mothers-day', name: "Mother's Day", nameAr: 'عيد الأم 💐',
            discount: 25, emoji: '💖', color: '#ec4899', icon: 'fas fa-heart', badge: "Mom's Day ❤️", badgeAr: 'عرض عيد الأم ❤️',
            desc: "Because moms deserve the best — and so does your business! Mother's Day special.",
            descAr: 'لأن الأمهات يستحققن الأفضل — وكذلك أعمالك! عروض عيد الأم المميزة.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 3, day: 21 }, duration: 3, preStart: 3
        },

        {
            id: 'sham-ennessim', name: 'Sham El-Nessim', nameAr: 'شم النسيم 🌷',
            discount: 20, emoji: '🌱', color: '#84cc16', icon: 'fas fa-seedling', badge: 'Spring Deal', badgeAr: 'عرض الربيع',
            desc: 'Spring is here! Fresh season, fresh software, fresh deals!',
            descAr: 'الربيع وصل! موسم جديد، برمجيات جديدة، عروض جديدة!',
            services: ['Web Apps', 'Mobile Apps'], servicesAr: ['تطبيقات ويب', 'تطبيقات موبايل'],
            dates: [
                { start: '2025-04-21', end: '2025-04-22' },
                { start: '2026-04-13', end: '2026-04-14' },
                { start: '2027-04-05', end: '2027-04-06' },
                { start: '2028-04-17', end: '2028-04-18' }
            ], preStart: 1
        },

        // ═══════ INTERNATIONAL EVENTS ═══════
        {
            id: 'new-year', name: 'New Year', nameAr: 'رأس السنة الميلادية 🎆',
            discount: 30, emoji: '🥂', color: '#eab308', icon: 'fas fa-glass-cheers', badge: 'New Year Sale', badgeAr: 'عرض رأس السنة',
            desc: 'New Year, New Digital Strategy! Start the year with up to 30% OFF on all solutions.',
            descAr: 'سنة جديدة سعيدة! ابدأ العام بخصم يصل إلى 30% على جميع الخدمات.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 1, day: 1 }, duration: 5, preStart: 3
        },

        {
            id: 'valentine', name: "Valentine's Day", nameAr: 'عيد الحب ❤️',
            discount: 20, emoji: '💕', color: '#f43f5e', icon: 'fas fa-heart', badge: 'Valentine Deal', badgeAr: 'عرض عيد الحب',
            desc: "Fall in love with your new software! Special Valentine's Day pricing.",
            descAr: 'أحب أعمالك من جديد! أسعار خاصة بمناسبة عيد الحب.',
            services: ['Web Apps', 'Mobile Apps'], servicesAr: ['تطبيقات ويب', 'تطبيقات موبايل'],
            fixedDate: { month: 2, day: 14 }, duration: 3, preStart: 3
        },

        {
            id: 'women-day', name: "Int'l Women's Day", nameAr: 'يوم المرأة العالمي 👩',
            discount: 20, emoji: '💪', color: '#d946ef', icon: 'fas fa-venus', badge: "Women's Day", badgeAr: 'عرض يوم المرأة',
            desc: 'Empowering women entrepreneurs! Special rates for women-led businesses.',
            descAr: 'تمكين رائدات الأعمال! أسعار خاصة للمشاريع النسائية.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 3, day: 8 }, duration: 2, preStart: 1
        },

        {
            id: 'fathers-day', name: "Father's Day", nameAr: 'عيد الأب 👔',
            discount: 15, emoji: '👨‍💼', color: '#1d4ed8', icon: 'fas fa-user-tie', badge: "Father's Day", badgeAr: 'عرض عيد الأب',
            desc: "For the dads who build businesses! Special Father's Day offer.",
            descAr: 'للآباء الذين يبنون المستقبل! عروض عيد الأب المميزة.',
            services: ['Custom Software', 'Cloud Solutions'], servicesAr: ['برمجيات مخصصة', 'حلول سحابية'],
            fixedDate: { month: 6, day: 21 }, duration: 2, preStart: 2
        },

        {
            id: 'entrepreneurs', name: 'World Entrepreneurs Day', nameAr: 'يوم رواد الأعمال العالمي 🚀',
            discount: 25, emoji: '🚀', color: '#3b82f6', icon: 'fas fa-rocket', badge: 'Startup Deal', badgeAr: 'عرض رواد الأعمال',
            desc: 'Built for builders! Massive discounts for entrepreneurs and startups.',
            descAr: 'صُنع لصانعي المستقبل! خصومات ضخمة لرواد الأعمال والشركات الناشئة.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 8, day: 21 }, duration: 3, preStart: 2
        },

        {
            id: 'back-to-school', name: 'Back to School', nameAr: 'العودة للمدارس 🎒',
            discount: 20, emoji: '📚', color: '#06b6d4', icon: 'fas fa-graduation-cap', badge: 'Back to School', badgeAr: 'عرض العودة للمدارس',
            desc: 'Back to School, Back to Business! Upgrade your systems for the new season.',
            descAr: 'موسم العودة! طوّر أنظمتك واستعد للموسم الجديد.',
            services: ['Custom Software', 'Web Apps'], servicesAr: ['برمجيات مخصصة', 'تطبيقات ويب'],
            fixedDate: { month: 9, day: 1 }, duration: 15, preStart: 5
        },

        {
            id: 'teachers-day', name: 'World Teachers Day', nameAr: 'يوم المعلم العالمي 👩‍🏫',
            discount: 20, emoji: '📖', color: '#2563eb', icon: 'fas fa-chalkboard-teacher', badge: 'Teachers Day', badgeAr: 'عرض يوم المعلم',
            desc: 'Honoring educators! Special pricing for educational institutions and EdTech projects.',
            descAr: 'تكريماً للمعلمين! أسعار خاصة للمؤسسات التعليمية ومشاريع التعليم الرقمي.',
            services: ['Web Apps', 'Mobile Apps'], servicesAr: ['تطبيقات ويب', 'تطبيقات موبايل'],
            fixedDate: { month: 10, day: 5 }, duration: 2, preStart: 1
        },

        {
            id: 'black-friday', name: 'Black Friday', nameAr: 'الجمعة البيضاء 🖤',
            discount: 50, emoji: '🏷️', color: '#171717', icon: 'fas fa-tags', badge: '🔥 BLACK FRIDAY', badgeAr: '🔥 الجمعة البيضاء',
            desc: "BIGGEST SALE OF THE YEAR! Up to 50% OFF everything. Don't miss this once-a-year deal!",
            descAr: 'أكبر تخفيض في السنة! خصم يصل إلى 50% على كل شيء. لا تفوّت هذه الفرصة!',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 11, day: 28 }, duration: 3, preStart: 5
        },

        {
            id: 'cyber-monday', name: 'Cyber Monday', nameAr: 'إثنين الإنترنت 💻',
            discount: 45, emoji: '💻', color: '#0ea5e9', icon: 'fas fa-laptop', badge: 'Cyber Monday', badgeAr: 'عرض إثنين الإنترنت',
            desc: 'Cyber Monday Mega Deals! Exclusive online-only pricing on digital solutions.',
            descAr: 'عروض إثنين الإنترنت الضخمة! أسعار حصرية على الحلول الرقمية.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 12, day: 1 }, duration: 2, preStart: 0
        },

        {
            id: 'arabic-lang', name: 'World Arabic Language Day', nameAr: 'اليوم العالمي للغة العربية 📝',
            discount: 18, emoji: '🗣️', color: '#047857', icon: 'fas fa-language', badge: 'Arabic Day', badgeAr: 'عرض يوم اللغة العربية',
            desc: 'Celebrating the Arabic language! Special rates on Arabic-localized software.',
            descAr: 'احتفالاً بلغة الضاد! عروض خاصة على البرمجيات والتطبيقات باللغة العربية.',
            services: ['Custom Software', 'Web Apps'], servicesAr: ['برمجيات مخصصة', 'تطبيقات ويب'],
            fixedDate: { month: 12, day: 18 }, duration: 2, preStart: 1
        },

        {
            id: 'christmas', name: 'Christmas', nameAr: 'عيد الميلاد 🎄',
            discount: 25, emoji: '🎅', color: '#dc2626', icon: 'fas fa-tree', badge: 'Christmas Sale', badgeAr: 'عرض الكريسماس',
            desc: 'Merry Christmas! Unwrap our gift to you — premium services at festive prices.',
            descAr: 'ميلاد مجيد! افتح هديتنا لك — خدمات مميزة بأسعار احتفالية.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 12, day: 25 }, duration: 3, preStart: 3
        },

        {
            id: 'year-end', name: 'Year-End Clearance', nameAr: 'تخفيضات نهاية العام 🎊',
            discount: 40, emoji: '💰', color: '#7c3aed', icon: 'fas fa-percentage', badge: 'Year-End Sale', badgeAr: 'تخفيض نهاية العام',
            desc: "Year-End Mega Sale! Lock in this year's prices before they're gone forever.",
            descAr: 'تخفيضات نهاية العام الضخمة! احجز أسعار هذا العام قبل فوات الأوان.',
            services: ['All Services'], servicesAr: ['جميع الخدمات'],
            fixedDate: { month: 12, day: 26 }, duration: 6, preStart: 0
        }
    ];

    const FRIDAY_DEAL = {
        id: 'friday-deal', name: 'Friday Flash Deal', nameAr: 'عرض الجمعة ⚡',
        discount: 15, emoji: '⚡', color: '#f59e0b', icon: 'fas fa-bolt', badge: 'Friday Flash ⚡', badgeAr: 'عرض فلاش الجمعة ⚡',
        desc: 'Every Friday is a deal day! Exclusive weekly discounts on selected services.',
        descAr: 'كل جمعة يوم عروض! خصومات أسبوعية حصرية على خدمات مختارة.',
        services: ['Web Apps', 'Mobile Apps'], servicesAr: ['تطبيقات ويب', 'تطبيقات موبايل']
    };

    // ──────────────────────────────────────────
    // SOCIAL PROOF DATA
    // ──────────────────────────────────────────
    const SOCIAL_PROOF = [
        { name: 'أحمد حسن', nameEn: 'Ahmed H.', city: 'القاهرة', cityEn: 'Cairo', action: 'طلب استشارة مجانية', actionEn: 'requested a free consultation', time: 2 },
        { name: 'سارة محمد', nameEn: 'Sara M.', city: 'الإسكندرية', cityEn: 'Alexandria', action: 'بدأت مشروعها الجديد', actionEn: 'started her new project', time: 5 },
        { name: 'محمد علي', nameEn: 'Mohamed A.', city: 'المنصورة', cityEn: 'Mansoura', action: 'حصل على عرض خاص', actionEn: 'got a special offer', time: 8 },
        { name: 'فاطمة السيد', nameEn: 'Fatima S.', city: 'أسيوط', cityEn: 'Assiut', action: 'تواصلت معنا عبر واتساب', actionEn: 'contacted us on WhatsApp', time: 12 },
        { name: 'عمر فاروق', nameEn: 'Omar F.', city: 'طنطا', cityEn: 'Tanta', action: 'طلب تطبيق موبايل', actionEn: 'ordered a mobile app', time: 15 },
        { name: 'نورا خالد', nameEn: 'Noura K.', city: 'الجيزة', cityEn: 'Giza', action: 'حجزت موعد استشارة', actionEn: 'booked a consultation', time: 3 },
        { name: 'خالد منصور', nameEn: 'Khaled M.', city: 'بورسعيد', cityEn: 'Port Said', action: 'اشترك في خدمة سحابية', actionEn: 'subscribed to cloud service', time: 18 },
        { name: 'مريم أحمد', nameEn: 'Mariam A.', city: 'الأقصر', cityEn: 'Luxor', action: 'بدأت مشروع ويب جديد', actionEn: 'started a new web project', time: 7 },
        { name: 'ياسر عبدالله', nameEn: 'Yasser A.', city: 'أسوان', cityEn: 'Aswan', action: 'طلب تطوير متجر إلكتروني', actionEn: 'requested an e-store', time: 22 },
        { name: 'هدى حسين', nameEn: 'Huda H.', city: 'دمياط', cityEn: 'Damietta', action: 'حصلت على خصم حصري', actionEn: 'got an exclusive discount', time: 10 }
    ];

    // ──────────────────────────────────────────
    // DATE UTILITIES
    // ──────────────────────────────────────────
    function today() {
        const d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    function parseDate(str) {
        const [y, m, d] = str.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    function addDays(date, n) {
        const d = new Date(date);
        d.setDate(d.getDate() + n);
        return d;
    }

    function isActive(occ) {
        const now = today();
        const year = now.getFullYear();
        if (occ.dates) {
            for (const r of occ.dates) {
                const start = addDays(parseDate(r.start), -(occ.preStart || 0));
                const end = parseDate(r.end);
                end.setHours(23, 59, 59);
                if (now >= start && now <= end) return { active: true, endDate: parseDate(r.end) };
            }
        } else if (occ.fixedDate) {
            const { month, day } = occ.fixedDate;
            const base = new Date(year, month - 1, day);
            const start = addDays(base, -(occ.preStart || 0));
            const end = addDays(base, (occ.duration || 1) - 1);
            end.setHours(23, 59, 59);
            if (now >= start && now <= end) return { active: true, endDate: end };
        }
        return { active: false };
    }

    function getActiveOffers() {
        const active = [];
        for (const occ of OCCASIONS) {
            const r = isActive(occ);
            if (r.active) active.push({ ...occ, endDate: r.endDate, priority: occ.discount });
        }
        if (today().getDay() === 5 && active.length === 0) {
            const endOfDay = new Date(); endOfDay.setHours(23, 59, 59);
            active.push({ ...FRIDAY_DEAL, endDate: endOfDay });
        }
        active.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        return active;
    }

    // ──────────────────────────────────────────
    // PERSONALIZED DISCOUNT
    // ──────────────────────────────────────────
    function getPersonalizedDiscount(offer, visitor) {
        let base = offer.discount;
        // Add returning visitor bonus
        if (visitor.returningBonus > 0) {
            base = Math.min(base + visitor.returningBonus, 60); // cap at 60%
        }
        return base;
    }

    // ──────────────────────────────────────────
    // COUNTDOWN TIMER
    // ──────────────────────────────────────────
    function getTimeRemaining(endDate) {
        const end = new Date(endDate); end.setHours(23, 59, 59, 999);
        const total = end - new Date();
        if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            total,
            days: Math.floor(total / 86400000),
            hours: Math.floor((total / 3600000) % 24),
            minutes: Math.floor((total / 60000) % 60),
            seconds: Math.floor((total / 1000) % 60)
        };
    }

    // ──────────────────────────────────────────
    // WHATSAPP MESSAGE
    // ──────────────────────────────────────────
    function waLink(offer, discount) {
        const endStr = offer.endDate ? offer.endDate.toLocaleDateString('en-GB') : 'Limited Time';
        const servicesStr = (offer.servicesAr || offer.services).join('، ');
        const msg = encodeURIComponent(
            `${offer.emoji} *${offer.nameAr}* — عرض خاص من ${CONFIG.company}!\n\n` +
            `🔥 *خصم ${discount}%* على: ${servicesStr}\n` +
            `📅 العرض ساري حتى: ${endStr}\n` +
            `🌐 ${CONFIG.siteUrl}\n\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `${offer.emoji} *${offer.name}* — ${CONFIG.company} Special Offer!\n\n` +
            `🔥 *${discount}% OFF* on: ${offer.services.join(', ')}\n` +
            `📅 Valid until: ${endStr}\n\n` +
            `مرحباً فريق ${CONFIG.company}! أنا مهتم بعرض *${offer.badgeAr || offer.badge}* (خصم ${discount}%). أرجو إرسال التفاصيل والأسعار.\n` +
            `شكراً لكم! 🙏`
        );
        return `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
    }

    function waLinkGeneral() {
        return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
            `مرحباً فريق ${CONFIG.company}! 👋\nأنا مهتم بخدماتكم. أرجو مشاركة التفاصيل والأسعار.\n\nHi ${CONFIG.company} team! I'm interested in your services. Please share details.\n\nشكراً! 🙏`
        )}`;
    }

    // ──────────────────────────────────────────
    // UI: OFFER BANNER (Top Bar) — Bilingual
    // ──────────────────────────────────────────
    function createBanner(offer, discount, visitor) {
        if (sessionStorage.getItem('qud_banner_closed')) return;
        const greeting = getGreeting();
        const banner = document.createElement('div');
        banner.id = 'offerBanner';
        banner.className = 'offer-banner';
        banner.style.setProperty('--offer-color', offer.color);

        const returningHtml = visitor.returningBonus > 0
            ? `<span class="offer-banner-bonus">+${visitor.returningBonus}% عميل مميز</span>` : '';

        banner.innerHTML = `
            <div class="offer-banner-inner">
                <div class="offer-banner-content">
                    <span class="offer-banner-emoji">${offer.emoji}</span>
                    <span class="offer-banner-text">
                        <strong>${offer.badgeAr || offer.badge}</strong> — خصم يصل إلى <strong>${discount}%</strong>!
                        ${returningHtml}
                    </span>
                </div>
                <div class="offer-banner-actions">
                    <div class="offer-banner-timer" id="bannerTimer">
                        <div class="timer-unit"><span id="bDays">00</span><small>يوم</small></div>
                        <span class="timer-sep">:</span>
                        <div class="timer-unit"><span id="bHours">00</span><small>ساعة</small></div>
                        <span class="timer-sep">:</span>
                        <div class="timer-unit"><span id="bMins">00</span><small>دقيقة</small></div>
                        <span class="timer-sep">:</span>
                        <div class="timer-unit"><span id="bSecs">00</span><small>ثانية</small></div>
                    </div>
                    <a href="${waLink(offer, discount)}" target="_blank" class="offer-banner-cta">
                        <i class="fab fa-whatsapp"></i> احصل عليه الآن
                    </a>
                </div>
                <button class="offer-banner-close" id="closeBanner" aria-label="Close">×</button>
            </div>
        `;
        document.body.prepend(banner);
        document.body.classList.add('has-offer-banner');

        document.getElementById('closeBanner').addEventListener('click', () => {
            banner.classList.add('offer-banner-hidden');
            document.body.classList.remove('has-offer-banner');
            sessionStorage.setItem('qud_banner_closed', '1');
        });
    }

    // ──────────────────────────────────────────
    // UI: OFFER POPUP — Bilingual + Personalized
    // ──────────────────────────────────────────
    function createPopup(offer, discount, visitor) {
        if (sessionStorage.getItem('qud_popup_shown')) return;
        const greeting = getGreeting();
        const spotsLeft = 3 + Math.floor(Math.random() * 5); // 3-7 spots
        const viewingNow = 12 + Math.floor(Math.random() * 25); // 12-36

        const returningBadge = visitor.visits > 1
            ? `<div class="offer-popup-returning"><i class="fas fa-crown"></i> عميل مميز — زيارتك رقم ${visitor.visits} | خصم إضافي +${visitor.returningBonus}%</div>` : '';

        const welcomeBadge = visitor.isNew
            ? `<div class="offer-popup-welcome"><i class="fas fa-gift"></i> مرحباً بك! هذا عرضك الحصري كزائر جديد</div>` : '';

        const popup = document.createElement('div');
        popup.id = 'offerPopup';
        popup.className = 'offer-popup-overlay';
        popup.innerHTML = `
            <div class="offer-popup" style="--offer-color: ${offer.color}">
                <button class="offer-popup-close" id="closePopup" aria-label="إغلاق">×</button>
                <div class="offer-popup-badge">${offer.badgeAr || offer.badge}</div>
                ${welcomeBadge}
                ${returningBadge}
                <div class="offer-popup-emoji">${offer.emoji}</div>
                <h3 class="offer-popup-title">${offer.nameAr}</h3>
                <p class="offer-popup-subtitle">${offer.name}</p>
                <div class="offer-popup-discount">
                    <span class="discount-number">${discount}</span>
                    <span class="discount-percent">% OFF</span>
                </div>
                <p class="offer-popup-desc">${offer.descAr}</p>
                <p class="offer-popup-desc-en">${offer.desc}</p>
                <div class="offer-popup-timer" id="popupTimer">
                    <div class="popup-timer-unit"><span id="pDays">00</span><small>يوم</small></div>
                    <div class="popup-timer-unit"><span id="pHours">00</span><small>ساعة</small></div>
                    <div class="popup-timer-unit"><span id="pMins">00</span><small>دقيقة</small></div>
                    <div class="popup-timer-unit"><span id="pSecs">00</span><small>ثانية</small></div>
                </div>
                <div class="offer-popup-scarcity">
                    <span class="scarcity-live"><span class="live-dot"></span> ${viewingNow} شخص يشاهدون الآن</span>
                    <span class="scarcity-spots"><i class="fas fa-fire"></i> متبقي ${spotsLeft} أماكن فقط هذا الأسبوع!</span>
                </div>
                <div class="offer-popup-services">
                    ${(offer.servicesAr || offer.services).map(s => `<span class="offer-service-tag"><i class="fas fa-check-circle"></i> ${s}</span>`).join('')}
                </div>
                <a href="${waLink(offer, discount)}" target="_blank" class="offer-popup-cta">
                    <i class="fab fa-whatsapp"></i>
                    <span>احصل على العرض عبر واتساب</span>
                </a>
                <p class="offer-popup-urgency"><i class="fas fa-clock"></i> عرض لفترة محدودة — لا تفوّت الفرصة!</p>
                <div class="offer-popup-trust">
                    <span><i class="fas fa-shield-alt"></i> ضمان استرداد الأموال</span>
                    <span><i class="fas fa-lock"></i> دفع آمن 100%</span>
                    <span><i class="fas fa-headset"></i> دعم 24/7</span>
                </div>
            </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('offer-popup-visible');
            sessionStorage.setItem('qud_popup_shown', '1');
        }, CONFIG.popupDelay);

        const closePopup = () => {
            popup.classList.remove('offer-popup-visible');
            setTimeout(() => popup.remove(), 400);
        };
        document.getElementById('closePopup').addEventListener('click', closePopup);
        popup.addEventListener('click', (e) => { if (e.target === popup) closePopup(); });
    }

    // ──────────────────────────────────────────
    // UI: FLOATING WHATSAPP BUTTON
    // ──────────────────────────────────────────
    function createWhatsApp(offer, discount) {
        const link = offer ? waLink(offer, discount) : waLinkGeneral();
        const btn = document.createElement('a');
        btn.id = 'whatsappFloat';
        btn.className = 'whatsapp-float';
        btn.href = link;
        btn.target = '_blank';
        btn.setAttribute('aria-label', 'تواصل معنا عبر واتساب');
        btn.innerHTML = `
            <div class="whatsapp-float-inner">
                <i class="fab fa-whatsapp"></i>
            </div>
            ${offer ? `<div class="whatsapp-float-badge">${discount}% خصم</div>` : ''}
            <div class="whatsapp-float-pulse"></div>
            <div class="whatsapp-float-tooltip">${offer ? 'احصل على العرض!' : 'تواصل معنا'}</div>
        `;
        document.body.appendChild(btn);

        let shown = false;
        const show = () => { if (!shown) { btn.classList.add('whatsapp-float-visible'); shown = true; } };
        window.addEventListener('scroll', () => { if (window.scrollY > 300) show(); }, { passive: true });
        setTimeout(show, 5000);
    }

    // ──────────────────────────────────────────
    // UI: SOCIAL PROOF NOTIFICATIONS
    // ──────────────────────────────────────────
    function startSocialProof() {
        let container = document.getElementById('socialProofContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'socialProofContainer';
            container.className = 'social-proof-container';
            document.body.appendChild(container);
        }

        let index = Math.floor(Math.random() * SOCIAL_PROOF.length);

        function showNotification() {
            const proof = SOCIAL_PROOF[index];
            const notif = document.createElement('div');
            notif.className = 'social-proof-notif';
            notif.innerHTML = `
                <div class="social-proof-avatar">${proof.name.charAt(0)}</div>
                <div class="social-proof-content">
                    <p class="social-proof-text"><strong>${proof.name}</strong> من ${proof.city}</p>
                    <p class="social-proof-action">${proof.action}</p>
                    <p class="social-proof-time"><i class="fas fa-clock"></i> منذ ${proof.time} دقائق</p>
                </div>
                <div class="social-proof-icon">✓</div>
            `;
            container.appendChild(notif);

            // Animate in
            requestAnimationFrame(() => notif.classList.add('social-proof-visible'));

            // Remove after 5s
            setTimeout(() => {
                notif.classList.remove('social-proof-visible');
                notif.classList.add('social-proof-exit');
                setTimeout(() => notif.remove(), 500);
            }, 5000);

            index = (index + 1) % SOCIAL_PROOF.length;
        }

        // First notification after 8s
        setTimeout(showNotification, 8000);
        // Then every N seconds
        setInterval(showNotification, CONFIG.socialProofInterval);
    }

    // ──────────────────────────────────────────
    // UI: EXIT INTENT POPUP
    // ──────────────────────────────────────────
    function setupExitIntent(offer, discount) {
        if (sessionStorage.getItem('qud_exit_shown')) return;

        let triggered = false;
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 10 && !triggered) {
                triggered = true;
                sessionStorage.setItem('qud_exit_shown', '1');
                showExitPopup(offer, discount);
            }
        });

        // Mobile: detect back button / tab switch
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden' && !triggered) {
                triggered = true;
                sessionStorage.setItem('qud_exit_shown', '1');
            }
        });
    }

    function showExitPopup(offer, discount) {
        // Don't show if main popup is still visible
        if (document.querySelector('.offer-popup-visible')) return;

        const exitDiscount = Math.min(discount + 5, 60); // Extra 5% for leaving!
        const popup = document.createElement('div');
        popup.className = 'offer-popup-overlay exit-intent-overlay';
        popup.innerHTML = `
            <div class="offer-popup exit-intent-popup" style="--offer-color: #ef4444">
                <button class="offer-popup-close" id="closeExit" aria-label="إغلاق">×</button>
                <div class="exit-intent-header">
                    <div class="exit-emoji">😢</div>
                    <h3>!لحظة، لا تذهب</h3>
                    <p class="exit-subtitle">Wait! Don't leave yet!</p>
                </div>
                <div class="exit-intent-body">
                    <p class="exit-message">لدينا عرض خاص لك فقط — خصم إضافي حصري!</p>
                    <div class="offer-popup-discount">
                        <span class="discount-number">${exitDiscount}</span>
                        <span class="discount-percent">% OFF</span>
                    </div>
                    <p class="exit-extra">🔥 خصم إضافي +5% لأنك مميز!</p>
                    <a href="${waLink(offer, exitDiscount)}" target="_blank" class="offer-popup-cta exit-cta">
                        <i class="fab fa-whatsapp"></i>
                        <span>احصل على العرض الحصري الآن</span>
                    </a>
                    <button class="exit-no-thanks" id="exitNoThanks">لا، شكراً</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        requestAnimationFrame(() => popup.classList.add('offer-popup-visible'));

        const close = () => {
            popup.classList.remove('offer-popup-visible');
            setTimeout(() => popup.remove(), 400);
        };
        document.getElementById('closeExit').addEventListener('click', close);
        document.getElementById('exitNoThanks').addEventListener('click', close);
        popup.addEventListener('click', (e) => { if (e.target === popup) close(); });
    }

    // ──────────────────────────────────────────
    // UI: SCROLL PROGRESS BAR
    // ──────────────────────────────────────────
    function createScrollProgress() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.innerHTML = '<div class="scroll-progress-fill" id="scrollFill"></div>';
        document.body.appendChild(bar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = (scrollTop / docHeight) * 100;
            document.getElementById('scrollFill').style.width = pct + '%';
        }, { passive: true });
    }

    // ──────────────────────────────────────────
    // COUNTDOWN TIMER ENGINE
    // ──────────────────────────────────────────
    function startCountdown(offer) {
        function update() {
            const t = getTimeRemaining(offer.endDate);
            const pad = n => String(n).padStart(2, '0');
            ['bDays', 'bHours', 'bMins', 'bSecs', 'pDays', 'pHours', 'pMins', 'pSecs'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const val = id.includes('Days') ? t.days : id.includes('Hours') ? t.hours : id.includes('Mins') ? t.minutes : t.seconds;
                const newText = pad(val);
                if (el.textContent !== newText) {
                    el.textContent = newText;
                    el.classList.add('timer-flip');
                    setTimeout(() => el.classList.remove('timer-flip'), 300);
                }
            });
            if (t.total <= 0) {
                clearInterval(iv);
                const b = document.getElementById('offerBanner');
                if (b) b.classList.add('offer-banner-hidden');
            }
        }
        update();
        const iv = setInterval(update, 1000);
    }

    // ──────────────────────────────────────────
    // INITIALIZE
    // ──────────────────────────────────────────
    function init() {
        const visitor = Visitor.init();
        const offers = getActiveOffers();
        const main = offers[0] || null;

        // Scroll progress bar (always)
        createScrollProgress();

        // WhatsApp button (always)
        const discount = main ? getPersonalizedDiscount(main, visitor) : 0;
        createWhatsApp(main, discount);

        // Social proof (always)
        startSocialProof();

        if (main) {
            // Banner
            createBanner(main, discount, visitor);
            // Popup
            createPopup(main, discount, visitor);
            // Countdown
            startCountdown(main);
            // Exit intent
            setupExitIntent(main, discount);

            // Track viewed offer
            if (!visitor.offersViewed.includes(main.id)) {
                visitor.offersViewed.push(main.id);
                Visitor.save(visitor);
            }

            console.log(`%c🚀 ${CONFIG.company} Smart Offers Engine v2`, 'color: #00d4ff; font-size: 14px; font-weight: bold;');
            console.log(`Visitor #${visitor.id} | Visit #${visitor.visits} | Discount: ${discount}%`);
            console.log(`Active: ${offers.map(o => o.name).join(', ')}`);
        } else {
            console.log(`%c${CONFIG.company} — No active offers today`, 'color: #888; font-size: 12px;');
        }
    }

    return { init, getActiveOffers };
})();

document.addEventListener('DOMContentLoaded', () => {
    QudOffers.init();
});
