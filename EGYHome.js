// EGYHome.js - ENFORCED LOGIN REQUIREMENT FOR CART/WISHLIST WITH LANGUAGE SWITCHING

// DOM Elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const quickViewButtons = document.querySelectorAll('.quick-view-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const categoryButtons = document.querySelectorAll('.category-btn');

// Product data for quick view modal
const products = {
    1: {
        id: 1,
        title: "Gold Cartouche Necklace",
        price: "2,850 EGP",
        numericPrice: 2850,
        description: "This exquisite 18k gold-plated cartouche necklace features custom hieroglyphic inscriptions. Each piece is carefully crafted by skilled Egyptian artisans, making it a unique and personalized jewelry item. Perfect as a gift or for personal use.",
        image: "https://images.unsplash.com/photo-1677194370385-d7aebb01a4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2Mjg0NjE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5,
        ratingText: "★★★★★ (5)",
        category: "jewelry"
    },
    2: {
        id: 2,
        title: "Ceramic Lotus Vase",
        price: "890 EGP",
        numericPrice: 890,
        description: "Hand-painted traditional Egyptian pottery featuring the iconic lotus flower design. This beautiful vase is made from high-quality ceramic and showcases the rich artistic heritage of Egypt. Perfect for home decoration or as a special gift.",
        image: "https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBhcHlydXMlMjBhcnR8ZW58MXx8fHwxNzYyODE1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)",
        category: "art"
    },
    3: {
        id: 3,
        title: "Silver Ankh Pendant",
        price: "1,450 EGP",
        numericPrice: 1450,
        description: "This sterling silver ankh pendant represents the ancient Egyptian symbol of life. Meticulously crafted with attention to detail, it makes a meaningful addition to any jewelry collection. Comes with a matching silver chain.",
        image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        ratingText: "★★★★☆ (4.2)",
        category: "jewelry"
    },
};

// Language Switching Functionality
let currentLanguage = 'en'; // Default language

// Arabic translations
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
        heroTitle1: "Timeless",
        heroTitle2: "Egyptian Treasures",
        heroDescription: "Discover handcrafted masterpieces that tell the story of ancient Egypt. Each piece is a celebration of our rich heritage and artistic tradition.",
        exploreCollection: "Explore Collection",
        learnMore: "Learn More",
        uniqueProducts: "Unique Products",
        happyCustomers: "Happy Customers",
        yearsExperience: "Years Experience",
        
        // Featured Section
        featuredTag: "Featured Collection",
        featuredTitle: "Our Finest ",
        featuredSpan: "Masterpieces",
        featuredDescription: "Handpicked treasures that embody the essence of Egyptian artistry",
        
        // Products
        cartoucheNecklace: "Gold Cartouche Necklace",
        cartoucheDescription: "18k gold-plated custom cartouche jewelry",
        lotusVase: "Ceramic Lotus Vase",
        lotusDescription: "Hand-painted traditional Egyptian pottery",
        ankhPendant: "Silver Ankh Pendant",
        ankhDescription: "Sterling silver ankh symbol necklace",
        addToCart: "Add to Cart",
        
        // Categories
        categoriesTitle: "Part of our Collection",
        categoriesSubtitle: "Browse our range of authentic Egyptian products",
        all: "All",
        jewelry: "Jewelry",
        art: "Art",
        textiles: "Textiles",
        sculptures: "Sculptures",
        homeDecor: "Home Decor",
        
        // Category Products
        embroideredScarf: "Embroidered Silk Scarf",
        pharaohStatue: "Pharaoh Statue",
        handwovenBasket: "Handwoven Basket Set",
        papyrusPainting: "Papyrus Painting",
        
        // Our Story
        ourStoryTitle: "Our Story",
        ourStorySubtitle: "Preserving Egypt's Rich Heritage",
        storyPara1: "For over 25 years, Egytopia has been dedicated to bringing the beauty of Egyptian craftsmanship to the world. Each piece in our collection tells a story of ancient wisdom and artistic excellence.",
        storyPara2: "Our artisans use time-honored techniques passed down through generations, ensuring that every product is a genuine representation of Egypt's cultural legacy.",
        ancientWisdom: "Ancient Wisdom",
        modernElegance: "Modern Elegance",
        
        // Stats
        customerSatisfaction: "Customer Satisfaction",
        countriesShipped: "Countries Shipped",
        authenticProducts: "Authentic Products",
        
        // Features
        premiumQuality: "Premium Quality",
        premiumDesc: "Every piece is crafted with the utmost attention to detail and authenticity",
        secureShipping: "Secure Shipping",
        shippingDesc: "We ensure your treasures arrive safely with premium packaging",
        authenticDesigns: "Authentic Designs",
        designsDesc: "Inspired by ancient Egyptian art and traditional techniques",
        expertArtisans: "Expert Artisans",
        artisansDesc: "Made by skilled craftspeople preserving ancient traditions",
        
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
        copyright: "© 2025 EGYTOPIA Egyptian Heritage. All rights reserved.",
        
        // Quick View Modal
        quickView: "Quick View"
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
        heroTitle1: "كنوز",
        heroTitle2: "مصرية خالدة",
        heroDescription: "اكتشف تحفًا مصنوعة يدويًا تحكي قصة مصر القديمة. كل قطعة هي احتفال بإرثنا الغني وتقاليدنا الفنية.",
        exploreCollection: "استكشاف المجموعة",
        learnMore: "معرفة المزيد",
        uniqueProducts: "منتج فريد",
        happyCustomers: "عميل سعيد",
        yearsExperience: "سنوات خبرة",
        
        // Featured Section
        featuredTag: "المجموعة المميزة",
        featuredTitle: "أروع ",
        featuredSpan: "التحف لدينا",
        featuredDescription: "كنوز مختارة يدويًا تجسد جوهر الفن المصري",
        
        // Products
        cartoucheNecklace: "قلادة خرطوش ذهبية",
        cartoucheDescription: "مجوهرات خرطوش مطلية بالذهب عيار 18 قيراط",
        lotusVase: "مزهرية لوتس خزفية",
        lotusDescription: "فخار مصري تقليدي مرسوم يدويًا",
        ankhPendant: "قلادة عنخ فضية",
        ankhDescription: "قلادة عنخ فضية من الفضة الإسترليني",
        addToCart: "أضف إلى السلة",
        
        // Categories
        categoriesTitle: "جزء من مجموعتنا",
        categoriesSubtitle: "تصفح تشكيلتنا من المنتجات المصرية الأصيلة",
        all: "الكل",
        jewelry: "المجوهرات",
        art: "الفن",
        textiles: "المنسوجات",
        sculptures: "المنحوتات",
        homeDecor: "ديكور المنزل",
        
        // Category Products
        embroideredScarf: "وشاح حريري مطرز",
        pharaohStatue: "تمثال فرعون",
        handwovenBasket: "مجموعة سلال منسوجة يدويًا",
        papyrusPainting: "لوحة ورق بردي",
        
        // Our Story
        ourStoryTitle: "قصتنا",
        ourStorySubtitle: "الحفاظ على التراث المصري الغني",
        storyPara1: "لأكثر من 25 عامًا، كان Egytopia مكرسًا لجمال الحرفية المصرية إلى العالم. كل قطعة في مجموعتنا تحكي قصة الحكمة القديمة والتميز الفني.",
        storyPara2: "يستخدم حرفيونا تقنيات تقليدية توارثتها الأجيال، مما يضمن أن كل منتج يمثل حقًا الإراث الثقافي لمصر.",
        ancientWisdom: "حكمة قديمة",
        modernElegance: "أناقة حديثة",
        
        // Stats
        customerSatisfaction: "رضا العملاء",
        countriesShipped: "دولة شحن",
        authenticProducts: "منتجات أصلية",
        
        // Features
        premiumQuality: "جودة فائقة",
        premiumDesc: "كل قطعة مصنوعة بأقصى درجات الاهتمام بالتفاصيل والأصالة",
        secureShipping: "شحن آمن",
        shippingDesc: "نضمن وصول كنوزك بأمان مع تغليف ممتاز",
        authenticDesigns: "تصميمات أصلية",
        designsDesc: "مستوحاة من الفن المصري القديم والتقنيات التقليدية",
        expertArtisans: "حرفيون خبراء",
        artisansDesc: "مصنوع من قبل حرفيين مهرة يحافظون على التقاليد القديمة",
        
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
        copyright: "© 2025 EGYTOPIA التراث المصري. جميع الحقوق محفوظة.",
        
        // Quick View Modal
        quickView: "عرض سريع"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Egytopia Home Page...');
    console.log('STRICT LOGIN ENFORCEMENT: Users must sign in to add to cart/wishlist');
    
    // Initialize counts from shared manager
    if (window.cartManager) {
        window.cartManager.initializeCounts();
    }
    
    // Initialize language switcher
    setupLanguageSwitcher();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('egytopiaLanguage');
    if (savedLang === 'ar') {
        currentLanguage = 'ar';
        translatePage();
        updateRTLDirection();
        updateLanguageUI();
    }
    
    updateActiveNavLink();
    setupMobileNavigation();
    setupScrollEffects();
    setupQuickViewModal();
    setupAddToCart();
    setupWishlistButtons();
    setupCategoryFiltering();
    setupStatsAnimation();
    setupNewsletter();
    setupSocialAnimations();
    setupNavigation();
    updateAllWishlistHearts();
    
    // Check login status and update UI
    checkLoginStatus();
    
    // Listen for login/logout events
    window.addEventListener('storage', function(e) {
        if (e.key === 'egytopiaUser') {
            console.log('User login status changed, updating UI...');
            checkLoginStatus();
        }
    });
    
    // Also listen for custom login/logout events
    window.addEventListener('userLogin', checkLoginStatus);
    window.addEventListener('userLogout', checkLoginStatus);
    
    console.log('Home page initialization complete');
    console.log('User logged in:', isUserLoggedIn() ? 'Yes' : 'No');
    console.log('Current language:', currentLanguage);
});

// STRICT LOGIN CHECK FUNCTIONS

// Check if user is logged in
function isUserLoggedIn() {
    const savedUser = localStorage.getItem('egytopiaUser');
    return savedUser !== null;
}

// Get current user info
function getCurrentUser() {
    const savedUser = localStorage.getItem('egytopiaUser');
    if (savedUser) {
        try {
            return JSON.parse(savedUser);
        } catch (e) {
            console.error('Error parsing user data:', e);
            return null;
        }
    }
    return null;
}

// Show login required modal with redirect option
function showLoginRequiredModal(feature) {
    // Create modal overlay
    const loginModal = document.createElement('div');
    loginModal.className = 'login-required-modal';
    loginModal.id = 'loginRequiredModal';
    
    const featureName = feature === 'cart' ? 'Cart' : 'Wishlist';
    const actionText = feature === 'cart' ? 'add items to cart' : 'save items to wishlist';
    
    // Get translation based on current language
    const trans = translations[currentLanguage];
    const signInText = currentLanguage === 'en' ? 'Sign In Required' : 'مطلوب تسجيل الدخول';
    const whySignIn = currentLanguage === 'en' ? 
        `<strong>Why sign in?</strong><br>
        Signing in allows you to save items to your ${featureName}, track orders, and enjoy personalized recommendations.` : 
        `<strong>لماذا تسجيل الدخول؟</strong><br>
        يتيح لك تسجيل الدخول حفظ العناصر في ${featureName === 'Cart' ? 'سلتك' : 'قائمة أمنياتك'}, تتبع الطلبات, والاستمتاع بالتوصيات الشخصية.`;
    
    const goToLoginBtnText = currentLanguage === 'en' ? 'Go to Sign In Page' : 'الذهاب إلى صفحة تسجيل الدخول';
    const continueBrowsingText = currentLanguage === 'en' ? 'Continue Browsing' : 'مواصلة التصفح';
    const noAccountText = currentLanguage === 'en' ? 
        `Don't have an account? <a href="artisan.html" style="color: #c19b53; text-decoration: none; font-weight: 600;">Sign up here</a>` :
        `ليس لديك حساب؟ <a href="artisan.html" style="color: #c19b53; text-decoration: none; font-weight: 600;">سجل هنا</a>`;
    
    loginModal.innerHTML = `
        <div class="login-modal-content">
            <div class="login-modal-header">
                <i class="fas fa-lock" style="font-size: 40px; color: #c19b53; margin-bottom: 15px;"></i>
                <h2 style="color: #1a2f3a; margin-bottom: 10px;">${signInText}</h2>
                <p style="color: #666; text-align: center;">${currentLanguage === 'en' ? `Please sign in to ${actionText}` : `يرجى تسجيل الدخول ${feature === 'cart' ? 'لإضافة العناصر إلى سلة التسوق' : 'لحفظ العناصر في قائمة الأمنيات'}`}</p>
            </div>
            
            <div class="login-modal-body">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px; padding: 15px; background: #f8f5e8; border-radius: 10px;">
                    <i class="fas fa-info-circle" style="color: #c19b53; font-size: 24px;"></i>
                    <p style="margin: 0; color: #1a2f3a; flex: 1;">
                        ${whySignIn}
                    </p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <button id="goToLoginBtn" style="
                        background: #c19b53;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 8px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                    ">
                        <i class="fas fa-sign-in-alt"></i>
                        ${goToLoginBtnText}
                    </button>
                    
                    <button id="closeLoginModal" style="
                        background: transparent;
                        color: #666;
                        border: 2px solid #ddd;
                        padding: 15px;
                        border-radius: 8px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        ${continueBrowsingText}
                    </button>
                    
                    <p style="text-align: center; margin-top: 10px; font-size: 14px; color: #888;">
                        ${noAccountText}
                    </p>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    loginModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    // Style modal content
    const modalContent = loginModal.querySelector('.login-modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 20px;
        max-width: 400px;
        width: 90%;
        transform: translateY(-20px);
        transition: transform 0.3s;
    `;
    
    document.body.appendChild(loginModal);
    
    // Animate in
    setTimeout(() => {
        loginModal.style.opacity = '1';
        modalContent.style.transform = 'translateY(0)';
    }, 10);
    
    // Add event listeners
    document.getElementById('goToLoginBtn').addEventListener('click', () => {
        window.location.href = 'artisan.html';
    });
    
    document.getElementById('closeLoginModal').addEventListener('click', () => {
        closeLoginModal();
    });
    
    // Close when clicking outside
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeLoginModal();
        }
    });
    
    // Close with Escape key
    const closeWithEscape = (e) => {
        if (e.key === 'Escape') {
            closeLoginModal();
        }
    };
    document.addEventListener('keydown', closeWithEscape);
    
    function closeLoginModal() {
        loginModal.style.opacity = '0';
        modalContent.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.removeEventListener('keydown', closeWithEscape);
            if (loginModal.parentNode) {
                loginModal.remove();
            }
        }, 300);
    }
}

// Language Switching Functions
function setupLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.querySelector('.lang-text');
    
    if (!langToggle) return;
    
    // Load saved language preference
    const savedLang = localStorage.getItem('egytopiaLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    // Set initial state
    updateLanguageUI();
    
    // Toggle language on button click
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        localStorage.setItem('egytopiaLanguage', currentLanguage);
        updateLanguageUI();
        translatePage();
        updateRTLDirection();
        showNotification(currentLanguage === 'en' ? 'Language changed to English' : 'تم تغيير اللغة إلى العربية', 'info');
    });
}

// Update language button UI
function updateLanguageUI() {
    const langText = document.querySelector('.lang-text');
    const langToggle = document.getElementById('langToggle');
    
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
    
    if (langToggle) {
        // Add animation
        langToggle.classList.add('lang-change');
        langToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langToggle.style.transform = 'scale(1)';
            langToggle.classList.remove('lang-change');
        }, 300);
    }
}

// Update RTL/LTR direction
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

// Translate the entire page
function translatePage() {
    const trans = translations[currentLanguage];
    
    // Update all translatable elements
    updateTextContent('[data-i18n="home"]', trans.home);
    updateTextContent('[data-i18n="collections"]', trans.collections);
    updateTextContent('[data-i18n="categories"]', trans.categories);
    updateTextContent('[data-i18n="userPortal"]', trans.userPortal);
    updateTextContent('[data-i18n="ourStory"]', trans.ourStory);
    updateTextContent('[data-i18n="contact"]', trans.contact);
    
    // Hero Section
    updateTextContent('[data-i18n="heroTitle1"]', trans.heroTitle1);
    updateTextContent('[data-i18n="heroTitle2"]', trans.heroTitle2);
    updateTextContent('[data-i18n="heroDescription"]', trans.heroDescription);
    updateTextContent('[data-i18n="exploreCollection"]', trans.exploreCollection);
    updateTextContent('[data-i18n="learnMore"]', trans.learnMore);
    updateTextContent('[data-i18n="uniqueProducts"]', trans.uniqueProducts);
    updateTextContent('[data-i18n="happyCustomers"]', trans.happyCustomers);
    updateTextContent('[data-i18n="yearsExperience"]', trans.yearsExperience);
    
    // Featured Section
    updateTextContent('[data-i18n="featuredTag"]', trans.featuredTag);
    updateTextContent('[data-i18n="featuredTitle"]', trans.featuredTitle);
    updateTextContent('[data-i18n="featuredSpan"]', trans.featuredSpan);
    updateTextContent('[data-i18n="featuredDescription"]', trans.featuredDescription);
    
    // Products
    updateTextContent('[data-i18n="cartoucheNecklace"]', trans.cartoucheNecklace);
    updateTextContent('[data-i18n="cartoucheDescription"]', trans.cartoucheDescription);
    updateTextContent('[data-i18n="lotusVase"]', trans.lotusVase);
    updateTextContent('[data-i18n="lotusDescription"]', trans.lotusDescription);
    updateTextContent('[data-i18n="ankhPendant"]', trans.ankhPendant);
    updateTextContent('[data-i18n="ankhDescription"]', trans.ankhDescription);
    updateTextContent('[data-i18n="addToCart"]', trans.addToCart);
    
    // Categories
    updateTextContent('[data-i18n="categoriesTitle"]', trans.categoriesTitle);
    updateTextContent('[data-i18n="categoriesSubtitle"]', trans.categoriesSubtitle);
    updateTextContent('[data-i18n="all"]', trans.all);
    updateTextContent('[data-i18n="jewelry"]', trans.jewelry);
    updateTextContent('[data-i18n="art"]', trans.art);
    updateTextContent('[data-i18n="textiles"]', trans.textiles);
    updateTextContent('[data-i18n="sculptures"]', trans.sculptures);
    updateTextContent('[data-i18n="homeDecor"]', trans.homeDecor);
    
    // Category Products
    updateTextContent('[data-i18n="embroideredScarf"]', trans.embroideredScarf);
    updateTextContent('[data-i18n="pharaohStatue"]', trans.pharaohStatue);
    updateTextContent('[data-i18n="handwovenBasket"]', trans.handwovenBasket);
    updateTextContent('[data-i18n="papyrusPainting"]', trans.papyrusPainting);
    
    // Our Story
    updateTextContent('[data-i18n="ourStoryTitle"]', trans.ourStoryTitle);
    updateTextContent('[data-i18n="ourStorySubtitle"]', trans.ourStorySubtitle);
    updateTextContent('[data-i18n="storyPara1"]', trans.storyPara1);
    updateTextContent('[data-i18n="storyPara2"]', trans.storyPara2);
    updateTextContent('[data-i18n="ancientWisdom"]', trans.ancientWisdom);
    updateTextContent('[data-i18n="modernElegance"]', trans.modernElegance);
    
    // Stats
    updateTextContent('[data-i18n="customerSatisfaction"]', trans.customerSatisfaction);
    updateTextContent('[data-i18n="countriesShipped"]', trans.countriesShipped);
    updateTextContent('[data-i18n="authenticProducts"]', trans.authenticProducts);
    
    // Features
    updateTextContent('[data-i18n="premiumQuality"]', trans.premiumQuality);
    updateTextContent('[data-i18n="premiumDesc"]', trans.premiumDesc);
    updateTextContent('[data-i18n="secureShipping"]', trans.secureShipping);
    updateTextContent('[data-i18n="shippingDesc"]', trans.shippingDesc);
    updateTextContent('[data-i18n="authenticDesigns"]', trans.authenticDesigns);
    updateTextContent('[data-i18n="designsDesc"]', trans.designsDesc);
    updateTextContent('[data-i18n="expertArtisans"]', trans.expertArtisans);
    updateTextContent('[data-i18n="artisansDesc"]', trans.artisansDesc);
    
    // Footer
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
    updateTextContent('[data-i18n="copyright"]', trans.copyright);
    
    // Quick View
    updateTextContent('[data-i18n="quickView"]', trans.quickView);
    
    // Update input placeholders
    updatePlaceholder('[data-i18n-placeholder="emailPlaceholder"]', trans.emailPlaceholder);
}

// Helper function to update text content
function updateTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = text;
    });
}

// Helper function to update placeholder text
function updatePlaceholder(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.placeholder = text;
    });
}

// Check login status and update UI
function checkLoginStatus() {
    const isLoggedIn = isUserLoggedIn();
    
    console.log('Checking login status...');
    console.log('Logged in:', isLoggedIn ? 'Yes' : 'No');
    
    // Update all wishlist hearts
    updateAllWishlistHearts();
    
    // Update cart/wishlist buttons
    updateAddToCartButtons();
    updateWishlistButtons();
    
    // Trigger UI updates for category products
    setTimeout(() => {
        setupWishlistButtons();
        setupAddToCart();
    }, 100);
}

// Setup add to cart with login enforcement
function setupAddToCart() {
    console.log('Setting up add to cart buttons with login enforcement...');
    
    // Featured products
    addToCartButtons.forEach(button => {
        setupAddToCartForButton(button);
    });
    
    // Category products
    const categoryCartButtons = document.querySelectorAll('.category-product .add-to-cart');
    categoryCartButtons.forEach(button => {
        setupAddToCartForButton(button);
    });
}

// Setup add to cart handler for individual button with login check
function setupAddToCartForButton(button) {
    button.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // STRICT LOGIN CHECK - No exceptions
        if (!isUserLoggedIn()) {
            showLoginRequiredModal('cart');
            return;
        }
        
        const productCard = button.closest('.product-card') || button.closest('.category-product');
        
        if (productCard) {
            const productTitle = productCard.querySelector('h3, h4')?.textContent || 'Unknown Product';
            const productPrice = productCard.querySelector('.current-price, .price')?.textContent || '0 EGP';
            const productImage = productCard.querySelector('img')?.src || '';
            
            // Extract numeric price safely
            const numericPrice = extractNumericPrice(productPrice);
            
            const product = {
                id: Date.now(),
                title: productTitle,
                price: productPrice,
                numericPrice: numericPrice,
                image: productImage,
                quantity: 1
            };
            
            addProductToCart(product);
            showAddToCartAnimation(button);
        }
    };
}

// Setup wishlist buttons with login enforcement
function setupWishlistButtons() {
    console.log('Setting up wishlist buttons with login enforcement...');
    
    // Add wishlist buttons to all product cards
    const productCards = document.querySelectorAll('.product-card, .category-product');
    
    console.log(`Found ${productCards.length} product cards`);
    
    productCards.forEach(card => {
        // Check if wishlist button already exists
        if (card.querySelector('.wishlist-btn')) return;
        
        const wishlistBtn = document.createElement('button');
        wishlistBtn.className = 'wishlist-btn';
        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
        wishlistBtn.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            z-index: 2;
        `;
        
        // Get product info
        const productTitle = card.querySelector('h3, h4')?.textContent || 'Unknown Product';
        const productPrice = card.querySelector('.current-price, .price')?.textContent || '0 EGP';
        const productImage = card.querySelector('img')?.src || '';
        const numericPrice = extractNumericPrice(productPrice);
        
        const product = {
            id: Date.now(),
            title: productTitle,
            price: productPrice,
            numericPrice: numericPrice,
            image: productImage
        };
        
        // Set initial state
        updateWishlistButtonState(wishlistBtn, product);
        
        // Add click handler with strict login check
        wishlistBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK - No exceptions
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                return;
            }
            
            toggleProductInWishlist(product, wishlistBtn);
        };
        
        card.style.position = 'relative';
        card.appendChild(wishlistBtn);
    });
}

// Update all wishlist buttons state and handlers
function updateWishlistButtons() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        const productCard = button.closest('.product-card, .category-product');
        if (productCard) {
            const productTitle = productCard.querySelector('h3, h4')?.textContent || 'Unknown Product';
            const productPrice = productCard.querySelector('.current-price, .price')?.textContent || '0 EGP';
            const productImage = productCard.querySelector('img')?.src || '';
            const numericPrice = extractNumericPrice(productPrice);
            
            const product = {
                id: Date.now(),
                title: productTitle,
                price: productPrice,
                numericPrice: numericPrice,
                image: productImage
            };
            
            // Update button state
            updateWishlistButtonState(button, product);
            
            // Update click handler with strict login check
            button.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // STRICT LOGIN CHECK - No exceptions
                if (!isUserLoggedIn()) {
                    showLoginRequiredModal('wishlist');
                    return;
                }
                
                toggleProductInWishlist(product, button);
            };
        }
    });
}

// Update add to cart buttons state and handlers
function updateAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK - No exceptions
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                return;
            }
            
            const productCard = button.closest('.product-card') || button.closest('.category-product');
            
            if (productCard) {
                const productTitle = productCard.querySelector('h3, h4')?.textContent || 'Unknown Product';
                const productPrice = productCard.querySelector('.current-price, .price')?.textContent || '0 EGP';
                const productImage = productCard.querySelector('img')?.src || '';
                
                const numericPrice = extractNumericPrice(productPrice);
                
                const product = {
                    id: Date.now(),
                    title: productTitle,
                    price: productPrice,
                    numericPrice: numericPrice,
                    image: productImage,
                    quantity: 1
                };
                
                addProductToCart(product);
                showAddToCartAnimation(button);
            }
        };
    });
}

// Update wishlist button state based on whether product is in wishlist
function updateWishlistButtonState(button, product) {
    const isLoggedIn = isUserLoggedIn();
    const isInWishlist = isLoggedIn && window.cartManager && window.cartManager.isInWishlist(product.id);
    const icon = button.querySelector('i');
    
    if (isInWishlist) {
        icon.className = 'fas fa-heart';
        button.style.background = '#c19b53';
        button.style.color = 'white';
    } else {
        icon.className = 'far fa-heart';
        button.style.background = 'white';
        button.style.color = 'inherit';
    }
}

// Update all wishlist heart buttons on the page
function updateAllWishlistHearts() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    console.log(`Updating ${wishlistButtons.length} wishlist hearts`);
    
    wishlistButtons.forEach(button => {
        const productCard = button.closest('.product-card, .category-product');
        if (productCard) {
            const productTitle = productCard.querySelector('h3, h4')?.textContent || 'Unknown Product';
            const productPrice = productCard.querySelector('.current-price, .price')?.textContent || '0 EGP';
            const productImage = productCard.querySelector('img')?.src || '';
            const numericPrice = extractNumericPrice(productPrice);
            
            const product = {
                id: Date.now(),
                title: productTitle,
                price: productPrice,
                numericPrice: numericPrice,
                image: productImage
            };
            
            updateWishlistButtonState(button, product);
        }
    });
}

// Toggle product in wishlist (logged in users only)
function toggleProductInWishlist(product, button) {
    // Double-check login (should already be checked, but just in case)
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('wishlist');
        return;
    }
    
    if (!window.cartManager) {
        console.error('cartManager is not available');
        showNotification('Error: Shopping features are not available', 'error');
        return;
    }
    
    // Use shared manager to toggle wishlist
    window.cartManager.toggleWishlist(product);
    
    // Update button state
    updateWishlistButtonState(button, product);
    
    // Show notification
    if (window.cartManager.isInWishlist(product.id)) {
        showNotification(`${product.title} ${currentLanguage === 'en' ? 'added to wishlist!' : 'تمت الإضافة إلى قائمة الأمنيات!'}`);
        
        // Animate the heart icon
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    } else {
        showNotification(`${product.title} ${currentLanguage === 'en' ? 'removed from wishlist!' : 'تمت الإزالة من قائمة الأمنيات!'}`);
    }
}

// Add product to cart (logged in users only)
function addProductToCart(product) {
    // Double-check login (should already be checked, but just in case)
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('cart');
        return;
    }
    
    if (!window.cartManager) {
        console.error('cartManager is not available');
        showNotification('Error: Shopping features are not available', 'error');
        return;
    }
    
    // Use shared manager to add to cart
    window.cartManager.addToCart(product);
    showNotification(`${product.title} ${currentLanguage === 'en' ? 'added to cart!' : 'تمت الإضافة إلى سلة التسوق!'}`);
}

// Quick View Modal with login checks
function setupQuickViewModal() {
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalStars = document.getElementById('modalStars');
    const modalRatingValue = document.getElementById('modalRatingValue');
    const modalAddToCart = document.getElementById('modalAddToCart');
    const modalAddToWishlist = document.getElementById('modalAddToWishlist');

    // Open modal with product details
    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = products[productId];
            
            if (!product) {
                console.error(`Product ${productId} not found`);
                return;
            }
            
            console.log(`Opening quick view for: ${product.title}`);
            
            if (modalImg) modalImg.src = product.image;
            if (modalImg) modalImg.alt = product.title;
            if (modalTitle) modalTitle.textContent = product.title;
            if (modalPrice) modalPrice.textContent = product.price;
            if (modalDescription) modalDescription.textContent = product.description;
            
            // Update rating stars
            if (modalStars) {
                modalStars.innerHTML = '';
                const fullStars = Math.floor(product.rating);
                const hasHalfStar = product.rating % 1 !== 0;
                
                for (let i = 0; i < fullStars; i++) {
                    modalStars.innerHTML += '<i class="fas fa-star"></i>';
                }
                
                if (hasHalfStar) {
                    modalStars.innerHTML += '<i class="fas fa-star-half-alt"></i>';
                }
                
                const emptyStars = 5 - Math.ceil(product.rating);
                for (let i = 0; i < emptyStars; i++) {
                    modalStars.innerHTML += '<i class="far fa-star"></i>';
                }
            }
            
            if (modalRatingValue) modalRatingValue.textContent = product.ratingText;
            
            // Update modal add to cart button - with strict login check
            if (modalAddToCart) {
                const trans = translations[currentLanguage];
                modalAddToCart.textContent = trans.addToCart;
                
                modalAddToCart.onclick = () => {
                    // STRICT LOGIN CHECK
                    if (!isUserLoggedIn()) {
                        showLoginRequiredModal('cart');
                        closeQuickViewModal();
                        return;
                    }
                    addProductToCart(product);
                    closeQuickViewModal();
                };
            }
            
            // Update modal wishlist button - with strict login check
            if (modalAddToWishlist) {
                modalAddToWishlist.textContent = currentLanguage === 'en' ? 'Add to Wishlist' : 'أضف إلى قائمة الأمنيات';
                
                modalAddToWishlist.onclick = () => {
                    // STRICT LOGIN CHECK
                    if (!isUserLoggedIn()) {
                        showLoginRequiredModal('wishlist');
                        closeQuickViewModal();
                        return;
                    }
                    addProductToWishlist(product);
                    closeQuickViewModal();
                };
            }
            
            if (modalOverlay) {
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', closeQuickViewModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeQuickViewModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeQuickViewModal();
        }
    });
}

// Add product to wishlist (for modal)
function addProductToWishlist(product) {
    // Double-check login
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('wishlist');
        return;
    }
    
    if (!window.cartManager) {
        console.error('cartManager is not available');
        showNotification('Error: Shopping features are not available', 'error');
        return;
    }
    
    window.cartManager.toggleWishlist(product);
    updateAllWishlistHearts();
    
    if (window.cartManager.isInWishlist(product.id)) {
        showNotification(`${product.title} ${currentLanguage === 'en' ? 'added to wishlist!' : 'تمت الإضافة إلى قائمة الأمنيات!'}`);
    } else {
        showNotification(`${product.title} ${currentLanguage === 'en' ? 'is already in your wishlist!' : 'موجود بالفعل في قائمة أمنياتك!'}`, 'info');
    }
}

// Close quick view modal
function closeQuickViewModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Show add to cart animation
function showAddToCartAnimation(button) {
    const originalText = button.textContent;
    const originalBgColor = button.style.backgroundColor;
    const originalColor = button.style.color;
    
    button.textContent = currentLanguage === 'en' ? 'Added!' : 'تمت الإضافة!';
    button.style.backgroundColor = '#27ae60';
    button.style.color = 'white';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = originalBgColor;
        button.style.color = originalColor;
        button.disabled = false;
    }, 2000);
}

// Extract numeric price from price string
function extractNumericPrice(priceString) {
    if (!priceString) return 0;
    const numericString = priceString.replace(/[^0-9.]/g, '');
    const price = parseFloat(numericString);
    return isNaN(price) ? 0 : price;
}

// Category Filtering
function setupCategoryFiltering() {
    const productCategories = document.querySelectorAll('.product-category');
    
    console.log(`Setting up category filtering for ${productCategories.length} categories`);
    
    // Show all categories initially
    showCategory('all');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            console.log(`Showing category: ${category}`);
            
            showCategory(category);
        });
    });
    
    function showCategory(category) {
        productCategories.forEach(cat => {
            if (category === 'all' || cat.classList.contains(category)) {
                cat.style.display = 'block';
                setTimeout(() => {
                    cat.style.opacity = '1';
                    cat.style.transform = 'translateY(0)';
                }, 50);
            } else {
                cat.style.opacity = '0';
                cat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    cat.style.display = 'none';
                }, 300);
            }
        });
        
        // Update buttons for visible products
        setTimeout(() => {
            setupWishlistButtons();
            setupAddToCart();
        }, 100);
    }
}

// Stats Animation
function setupStatsAnimation() {
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statsSection && statNumbers.length > 0) {
        console.log('Setting up stats animation...');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Stats section visible, animating numbers...');
                    statNumbers.forEach(stat => {
                        const targetValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                        animateValue(stat, 0, targetValue, 2000);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
}

// Newsletter
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        console.log('Setting up newsletter form...');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && email.includes('@')) {
                const message = currentLanguage === 'en' ? 
                    `Thank you for subscribing with ${email}! You will receive our updates soon.` :
                    `شكراً لك على الاشتراك باستخدام ${email}! ستتلقى تحديثاتنا قريباً.`;
                showNotification(message);
                this.reset();
            } else {
                const message = currentLanguage === 'en' ? 
                    'Please enter a valid email address!' :
                    'يرجى إدخال عنوان بريد إلكتروني صحيح!';
                showNotification(message, 'error');
                emailInput.focus();
            }
        });
    }
}

// Social Animations
function setupSocialAnimations() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    console.log(`Setting up animations for ${socialIcons.length} social icons`);
    
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s, transform 0.5s';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
}

// Navigation handler
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href]');
    
    console.log(`Setting up navigation for ${navLinks.length} links`);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === window.location.pathname.split('/').pop()) {
                return;
            }
            
            const existingPages = [
                'EgyHome.html', 
                'ourStory.html', 
                'contact.html',
                'cart.html',
                'wishlist.html',
                'collection.html',
                'categories.html',
                'artisan.html'
            ];
            
            if (!existingPages.includes(href)) {
                e.preventDefault();
                const pageName = href.replace('.html', '').replace(/-/g, ' ');
                const message = currentLanguage === 'en' ? 
                    `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} page is coming soon!` :
                    `صفحة ${pageName} قريباً!`;
                showNotification(message, 'info');
            } else {
                updateActiveNavLink();
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'EgyHome.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log(`Updating active nav link for: ${currentPage}`);
    
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

// Mobile Navigation
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
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
                setTimeout(updateActiveNavLink, 100);
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
    const heroSection = document.querySelector('.hero-section');
    
    if (header && heroSection) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        }
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Show notification
function showNotification(message, type = 'success') {
    console.log(`Showing notification: ${message} (${type})`);
    
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    if (type === 'info') icon = 'fas fa-info-circle';
    
    notification.innerHTML = `
        <i class="${icon}" style="margin-right: 10px;"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#1a2f3a' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: #e9d8b6;
        padding: 15px 20px;
        border: 2px solid #e9d8b6;
        border-radius: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 300px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Animate value counter
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        const originalText = obj.textContent;
        const nonNumericChars = originalText.replace(/[0-9]/g, '');
        
        obj.textContent = value + nonNumericChars;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Export functions for debugging
window.homePage = {
    currentLanguage,
    isUserLoggedIn,
    getCurrentUser,
    checkLoginStatus,
    showLoginRequiredModal,
    debug: function() {
        console.log('=== EGYHome.js Debug Info ===');
        console.log('Current language:', currentLanguage);
        console.log('User logged in:', isUserLoggedIn());
        console.log('Current user:', getCurrentUser());
        console.log('Cart manager exists:', !!window.cartManager);
        console.log('Wishlist buttons:', document.querySelectorAll('.wishlist-btn').length);
        console.log('Add to cart buttons:', document.querySelectorAll('.add-to-cart').length);
        console.log('STRICT LOGIN ENFORCEMENT: ON');
        console.log('===========================');
    }
};

console.log('EGYHome.js loaded successfully with STRICT LOGIN REQUIREMENT and LANGUAGE SWITCHING!');
console.log('Users MUST sign in to add items to cart or wishlist.');
console.log('Language switching between English and Arabic is available.');
console.log('Debug commands available in window.homePage');
console.log('Type homePage.debug() for current status');