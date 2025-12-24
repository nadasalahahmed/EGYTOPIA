// Language Switching for Our Story Page
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        collections: "Collections",
        categories: "Categories",
        userPortal: "User Portal",
        ourStory: "Our Story",
        contact: "Contact",
        
        // Hero Section
        ourJourney: "Our Journey",
        heroTitle: "Where Heritage Meets Craftsmanship",
        heritage: "Heritage",
        heroSubtitle: "For over 25 years, we've been dedicated to preserving Egypt's rich cultural heritage through authentic handcrafted treasures. Every piece tells a story of ancient wisdom, artistic excellence, and the skilled hands that brought it to life.",
        
        // Timeline
        ourHistory: "Our History",
        timelineTitle: "A Legacy of Excellence",
        excellence: "Excellence",
        timelineDescription: "Discover the milestones that shaped our journey from a small artisan workshop to Egypt's premier destination for authentic handcrafted treasures.",
        timeline1Title: "The Beginning",
        timeline1Text: "Founded by master craftsman Ahmed Hassan, Egytopia began as a small workshop in Cairo's historic district, dedicated to preserving traditional Egyptian craftsmanship.",
        timeline2Title: "First International Recognition",
        timeline2Text: "Our authentic designs caught global attention, leading to partnerships with museums and cultural institutions worldwide.",
        timeline3Title: "Artisan Network Expansion",
        timeline3Text: "We expanded our network to include over 100 skilled artisans from across Egypt, preserving diverse regional crafting traditions.",
        timeline4Title: "Digital Transformation",
        timeline4Text: "Launched our online platform, making authentic Egyptian craftsmanship accessible to enthusiasts around the world.",
        timeline5Title: "Today & Beyond",
        timeline5Text: "Continuing our mission with 5,000+ happy customers globally, while training the next generation of Egyptian artisans.",
        
        // CTA
        ctaTitle: "Ready to Own a Piece of Egyptian History?",
        ctaText: "Explore our curated collection of authentic handcrafted treasures, each with its own unique story and heritage.",
        exploreCollection: "Explore Collection",
        getInTouch: "Get in Touch",
        
        // Mission & Vision
        whatDrivesUs: "What Drives Us",
        missionVisionTitle: "Our Mission & Vision",
        vision: "Vision",
        ourMission: "Our Mission",
        missionText: "To preserve and celebrate Egypt's rich artistic heritage by connecting skilled artisans with discerning customers worldwide. We ensure every piece is crafted with authenticity, quality, and respect for traditional techniques passed down through generations.",
        ourVision: "Our Vision",
        visionText: "To become the world's most trusted destination for authentic Egyptian craftsmanship, empowering local artisans while educating global audiences about Egypt's timeless cultural treasures and inspiring appreciation for handmade artistry.",
        
        // Values
        whatWeBelieve: "What We Believe In",
        coreValuesTitle: "Our Core Values",
        values: "Values",
        valuesDescription: "These principles guide everything we do, from selecting artisans to delivering your treasured pieces.",
        authenticity: "Authenticity",
        authenticityText: "Every piece is genuinely handcrafted using traditional Egyptian techniques and materials.",
        quality: "Quality",
        qualityText: "We maintain the highest standards in craftsmanship and materials for lasting beauty.",
        community: "Community",
        communityText: "Supporting local artisans and preserving traditional crafting communities across Egypt.",
        sustainability: "Sustainability",
        sustainabilityText: "Committed to eco-friendly practices and sustainable sourcing of all materials.",
        
        // Team
        peopleBehind: "The People Behind The Magic",
        artisanCommunity: "Our Artisan Community",
        community: "Community",
        teamIntro: "Our strength lies in our people - a dedicated community of master craftsmen, designers, and cultural enthusiasts who share a passion for preserving Egypt's artistic heritage. Together, we ensure every piece reflects the excellence and authenticity our customers deserve.",
        masterArtisans: "Master Artisans",
        yearsExperience: "Years Experience",
        egyptianRegions: "Egyptian Regions",
        
        // Footer
        egyptianHeritage: "Egyptian Heritage",
        footerTagline: "Bringing the timeless beauty of Egyptian craftsmanship to the world.",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        blog: "Blog",
        shippingReturns: "Shipping & Returns",
        faq: "FAQ",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        customerService: "Customer Service",
        subscribeNewsletter: "Subscribe to Our Newsletter",
        newsletterDesc: "Get exclusive offers and updates on new products",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        newsletterNote: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
        allRights: "All rights reserved."
    },
    
    ar: {
        // Navigation
        home: "الرئيسية",
        collections: "المجموعات",
        categories: "الفئات",
        userPortal: "بوابة المستخدم",
        ourStory: "قصتنا",
        contact: "اتصل بنا",
        
        // Hero Section
        ourJourney: "رحلتنا",
        heroTitle: "حيث يلتقي التراث بالحرفية",
        heritage: "التراث",
        heroSubtitle: "لأكثر من 25 عامًا، كرسنا أنفسنا للحفاظ على التراث الثقافي الغني لمصر من خلال كنوز حرفية أصلية. تحكي كل قطعة قصة حكمة قديمة، وتميز فني، والأيدي الماهرة التي أحيته.",
        
        // Timeline
        ourHistory: "تاريخنا",
        timelineTitle: "إرث من التميز",
        excellence: "التميز",
        timelineDescription: "اكتشف المحطات الرئيسية التي شكلت رحلتنا من ورشة حرفية صغيرة إلى الوجهة الأولى في مصر للكنوز الحرفية الأصلية.",
        timeline1Title: "البداية",
        timeline1Text: "تأسست Egytopia على يد الحرفي الرئيسي أحمد حسن، بدأت كورشة صغيرة في الحي التاريخي بالقاهرة، مكرسة للحفاظ على الحرفية المصرية التقليدية.",
        timeline2Title: "الاعتراف الدولي الأول",
        timeline2Text: "جذبت تصاميمنا الأصلية الانتباه العالمي، مما أدى إلى شراكات مع المتاحف والمؤسسات الثقافية في جميع أنحاء العالم.",
        timeline3Title: "توسيع شبكة الحرفيين",
        timeline3Text: "وسعنا شبكتنا لتشمل أكثر من 100 حرفي ماهر من جميع أنحاء مصر، والحفاظ على تقاليد الحرف الإقليمية المتنوعة.",
        timeline4Title: "التحول الرقمي",
        timeline4Text: "أطلقنا منصتنا عبر الإنترنت، مما يجعل الحرفية المصرية الأصلية في متناول المتحمسين في جميع أنحاء العالم.",
        timeline5Title: "اليوم وما بعده",
        timeline5Text: "نواصل مهمتنا مع أكثر من 5000 عميل سعيد على مستوى العالم، مع تدريب الجيل القادم من الحرفيين المصريين.",
        
        // CTA
        ctaTitle: "مستعد لامتلاك قطعة من التاريخ المصري؟",
        ctaText: "استكشف مجموعتنا المختارة من الكنوز الحرفية الأصلية، لكل منها قصتها الفريدة وإرثها.",
        exploreCollection: "استكشاف المجموعة",
        getInTouch: "تواصل معنا",
        
        // Mission & Vision
        whatDrivesUs: "ما يدفعنا",
        missionVisionTitle: "مهمتنا ورؤيتنا",
        vision: "الرؤية",
        ourMission: "مهمتنا",
        missionText: "الحفاظ على التراث الفني الغني لمصر والاحتفاء به من خلال ربط الحرفيين المهرة بالعملاء العالميين. نضمن أن كل قطعة مصنوعة بأصالة وجودة واحترام للتقنيات التقليدية الموروثة عبر الأجيال.",
        ourVision: "رؤيتنا",
        visionText: "أن نصبح الوجهة الأكثر ثقة في العالم للحرفية المصرية الأصلية، وتمكين الحرفيين المحليين مع تثقيف الجماهير العالمية حول كنوز مصر الثقافية الخالدة وإلهام تقدير الفن الحرفي اليدوي.",
        
        // Values
        whatWeBelieve: "ما نؤمن به",
        coreValuesTitle: "قيمنا الأساسية",
        values: "القيم",
        valuesDescription: "توجه هذه المبادئ كل ما نقوم به، من اختيار الحرفيين إلى تسليم قطعك الثمينة.",
        authenticity: "الأصالة",
        authenticityText: "كل قطعة مصنوعة يدويًا بصدق باستخدام التقنيات والمواد المصرية التقليدية.",
        quality: "الجودة",
        qualityText: "نحافظ على أعلى المعايير في الحرفية والمواد لجمال دائم.",
        community: "المجتمع",
        communityText: "دعم الحرفيين المحليين والحفاظ على المجتمعات الحرفية التقليدية في جميع أنحاء مصر.",
        sustainability: "الاستدامة",
        sustainabilityText: "ملتزمون بالممارسات الصديقة للبيئة والمصادر المستدامة لجميع المواد.",
        
        // Team
        peopleBehind: "الأشخاص وراء السحر",
        artisanCommunity: "مجتمع الحرفيين لدينا",
        community: "المجتمع",
        teamIntro: "تكمن قوتنا في شعبنا - مجتمع مخصص من الحرفيين الرئيسيين والمصممين والمتحمسين الثقافيين الذين يتشاركون شغفًا بالحفاظ على التراث الفني لمصر. معًا، نضمن أن كل قطعة تعكس التميز والأصالة التي يستحقها عملاؤنا.",
        masterArtisans: "حرفيون رئيسيون",
        yearsExperience: "سنوات خبرة",
        egyptianRegions: "مناطق مصرية",
        
        // Footer
        egyptianHeritage: "التراث المصري",
        footerTagline: "نحمل جمال الحرفية المصرية الخالدة إلى العالم.",
        quickLinks: "روابط سريعة",
        aboutUs: "من نحن",
        blog: "المدونة",
        shippingReturns: "الشحن والإرجاع",
        faq: "الأسئلة الشائعة",
        privacyPolicy: "سياسة الخصوصية",
        termsConditions: "الشروط والأحكام",
        customerService: "خدمة العملاء",
        subscribeNewsletter: "اشترك في نشرتنا الإخبارية",
        newsletterDesc: "احصل على عروض حصرية وتحديثات حول المنتجات الجديدة",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشتراك",
        newsletterNote: "بالاشتراك، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات من شركتنا.",
        allRights: "جميع الحقوق محفوظة."
    }
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', function () {
    console.log('Initializing Our Story page...');
    
    setupMobileNavigation();
    setupScrollEffects();
    updateActiveNavLink();
    setupLanguageSwitcher();
    
    // Load saved language
    const savedLang = localStorage.getItem('egytopiaLanguage');
    if (savedLang === 'ar') {
        currentLanguage = 'ar';
        translatePage();
        updateRTLDirection();
        updateLanguageUI();
    }
});

// Mobile Navigation
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(event.target) && 
                !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.story-hero');

    if (heroSection) {
        const handleScroll = function() {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            if (window.scrollY > heroBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
    } else {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Active navigation
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'EgyHome.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (!href || href === '#') return;
        
        if ((currentPage === '' || currentPage === 'EgyHome.html' || currentPage === 'index.html') && 
            (href === 'EgyHome.html' || href === 'index.html' || href === './')) {
            link.classList.add('active');
        } else if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage.startsWith(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// Language Switching Functions
function setupLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.querySelector('.lang-text');
    
    if (!langToggle) return;
    
    const savedLang = localStorage.getItem('egytopiaLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    updateLanguageUI();
    
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        localStorage.setItem('egytopiaLanguage', currentLanguage);
        updateLanguageUI();
        translatePage();
        updateRTLDirection();
        showNotification(currentLanguage === 'en' ? 'Language changed to English' : 'تم تغيير اللغة إلى العربية', 'info');
    });
}

function updateLanguageUI() {
    const langText = document.querySelector('.lang-text');
    const langToggle = document.getElementById('langToggle');
    
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
    
    if (langToggle) {
        langToggle.classList.add('lang-change');
        langToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langToggle.style.transform = 'scale(1)';
            langToggle.classList.remove('lang-change');
        }, 300);
    }
}

function updateRTLDirection() {
    if (currentLanguage === 'ar') {
        document.body.classList.add('rtl');
        document.body.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.body.classList.remove('rtl');
        document.body.dir = 'ltr';
        document.documentElement.lang = 'en';
    }
}

function translatePage() {
    const trans = translations[currentLanguage];
    
    updateTextContent('[data-i18n="home"]', trans.home);
    updateTextContent('[data-i18n="collections"]', trans.collections);
    updateTextContent('[data-i18n="categories"]', trans.categories);
    updateTextContent('[data-i18n="userPortal"]', trans.userPortal);
    updateTextContent('[data-i18n="ourStory"]', trans.ourStory);
    updateTextContent('[data-i18n="contact"]', trans.contact);
    
    updateTextContent('[data-i18n="ourJourney"]', trans.ourJourney);
    updateTextContent('[data-i18n="heroTitle"]', trans.heroTitle);
    updateTextContent('[data-i18n="heritage"]', trans.heritage);
    updateTextContent('[data-i18n="heroSubtitle"]', trans.heroSubtitle);
    
    updateTextContent('[data-i18n="ourHistory"]', trans.ourHistory);
    updateTextContent('[data-i18n="timelineTitle"]', trans.timelineTitle);
    updateTextContent('[data-i18n="excellence"]', trans.excellence);
    updateTextContent('[data-i18n="timelineDescription"]', trans.timelineDescription);
    updateTextContent('[data-i18n="timeline1Title"]', trans.timeline1Title);
    updateTextContent('[data-i18n="timeline1Text"]', trans.timeline1Text);
    updateTextContent('[data-i18n="timeline2Title"]', trans.timeline2Title);
    updateTextContent('[data-i18n="timeline2Text"]', trans.timeline2Text);
    updateTextContent('[data-i18n="timeline3Title"]', trans.timeline3Title);
    updateTextContent('[data-i18n="timeline3Text"]', trans.timeline3Text);
    updateTextContent('[data-i18n="timeline4Title"]', trans.timeline4Title);
    updateTextContent('[data-i18n="timeline4Text"]', trans.timeline4Text);
    updateTextContent('[data-i18n="timeline5Title"]', trans.timeline5Title);
    updateTextContent('[data-i18n="timeline5Text"]', trans.timeline5Text);
    
    updateTextContent('[data-i18n="ctaTitle"]', trans.ctaTitle);
    updateTextContent('[data-i18n="ctaText"]', trans.ctaText);
    updateTextContent('[data-i18n="exploreCollection"]', trans.exploreCollection);
    updateTextContent('[data-i18n="getInTouch"]', trans.getInTouch);
    
    updateTextContent('[data-i18n="whatDrivesUs"]', trans.whatDrivesUs);
    updateTextContent('[data-i18n="missionVisionTitle"]', trans.missionVisionTitle);
    updateTextContent('[data-i18n="vision"]', trans.vision);
    updateTextContent('[data-i18n="ourMission"]', trans.ourMission);
    updateTextContent('[data-i18n="missionText"]', trans.missionText);
    updateTextContent('[data-i18n="ourVision"]', trans.ourVision);
    updateTextContent('[data-i18n="visionText"]', trans.visionText);
    
    updateTextContent('[data-i18n="whatWeBelieve"]', trans.whatWeBelieve);
    updateTextContent('[data-i18n="coreValuesTitle"]', trans.coreValuesTitle);
    updateTextContent('[data-i18n="values"]', trans.values);
    updateTextContent('[data-i18n="valuesDescription"]', trans.valuesDescription);
    updateTextContent('[data-i18n="authenticity"]', trans.authenticity);
    updateTextContent('[data-i18n="authenticityText"]', trans.authenticityText);
    updateTextContent('[data-i18n="quality"]', trans.quality);
    updateTextContent('[data-i18n="qualityText"]', trans.qualityText);
    updateTextContent('[data-i18n="community"]', trans.community);
    updateTextContent('[data-i18n="communityText"]', trans.communityText);
    updateTextContent('[data-i18n="sustainability"]', trans.sustainability);
    updateTextContent('[data-i18n="sustainabilityText"]', trans.sustainabilityText);
    
    updateTextContent('[data-i18n="peopleBehind"]', trans.peopleBehind);
    updateTextContent('[data-i18n="artisanCommunity"]', trans.artisanCommunity);
    updateTextContent('[data-i18n="community"]', trans.community);
    updateTextContent('[data-i18n="teamIntro"]', trans.teamIntro);
    updateTextContent('[data-i18n="masterArtisans"]', trans.masterArtisans);
    updateTextContent('[data-i18n="yearsExperience"]', trans.yearsExperience);
    updateTextContent('[data-i18n="egyptianRegions"]', trans.egyptianRegions);
    
    updateTextContent('[data-i18n="egyptianHeritage"]', trans.egyptianHeritage);
    updateTextContent('[data-i18n="footerTagline"]', trans.footerTagline);
    updateTextContent('[data-i18n="quickLinks"]', trans.quickLinks);
    updateTextContent('[data-i18n="aboutUs"]', trans.aboutUs);
    updateTextContent('[data-i18n="blog"]', trans.blog);
    updateTextContent('[data-i18n="shippingReturns"]', trans.shippingReturns);
    updateTextContent('[data-i18n="faq"]', trans.faq);
    updateTextContent('[data-i18n="privacyPolicy"]', trans.privacyPolicy);
    updateTextContent('[data-i18n="termsConditions"]', trans.termsConditions);
    updateTextContent('[data-i18n="customerService"]', trans.customerService);
    updateTextContent('[data-i18n="subscribeNewsletter"]', trans.subscribeNewsletter);
    updateTextContent('[data-i18n="newsletterDesc"]', trans.newsletterDesc);
    updateTextContent('[data-i18n="subscribe"]', trans.subscribe);
    updateTextContent('[data-i18n="newsletterNote"]', trans.newsletterNote);
    updateTextContent('[data-i18n="allRights"]', trans.allRights);
    
    updatePlaceholder('[data-i18n-placeholder="emailPlaceholder"]', trans.emailPlaceholder);
}

function updateTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            return;
        }
        element.textContent = text;
    });
}

function updatePlaceholder(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.placeholder = text;
    });
}

function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const n = document.createElement('div');
    n.className = `notification ${type}`;
    n.textContent = message;
    n.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#1a2f3a' : '#e74c3c'};
        color: #e9d8b6;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        z-index: 10000;
        transition: opacity 0.4s ease;
    `;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 400); }, 4000);
}

// Export for debugging
window.ourStory = {
    currentLanguage,
    translatePage,
    updateRTLDirection,
    debug: function() {
        console.log('=== Our Story Debug ===');
        console.log('Language:', currentLanguage);
        console.log('RTL:', document.body.classList.contains('rtl'));
    }
};