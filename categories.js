// categories.js - ENFORCED LOGIN REQUIREMENT WITH LANGUAGE SWITCHING AND AUTO-FILTERING

// Combined products array that will be used (default + artisan)
let products = [];

// Cart and wishlist data
let cartItems = [];
let wishlistItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
const cartLink = document.getElementById('cartLink');
const wishlistLink = document.getElementById('wishlistLink');
const productsContainer = document.getElementById('productsContainer');
const categoryButtons = document.querySelectorAll('.category-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalStars = document.getElementById('modalStars');
const modalRatingValue = document.getElementById('modalRatingValue');
const modalAddToCart = document.getElementById('modalAddToCart');
const modalAddToWishlist = document.getElementById('modalAddToWishlist');

// Current product for modal
let currentProduct = null;

// Language state
let currentLanguage = 'en'; // Default language

// Translations for categories page
const translations = {
    en: {
        // Navigation
        home: "Home",
        collections: "Collections",
        categories: "Categories",
        userPortal: "User Portal",
        ourStory: "Our Story",
        contact: "Contact",
        arabic: "العربية",
        logo: "EGYTOPIA",
        
        // Page Header
        pageTitle: "Our Categories",
        pageDescription: "Explore our diverse collection of authentic Egyptian products, from traditional crafts to agricultural goods.",
        
        // Category Filters
        allProducts: "All Products",
        jewelry: "Jewelry",
        art: "Art",
        textiles: "Textiles",
        sculptures: "Sculptures",
        homeDecor: "Home Decor",
        traditionalCrafts: "Traditional Crafts",
        agricultural: "Agricultural Products",
        handmade: "Handmade Goods",
        
        // Product Actions
        quickView: "Quick View",
        addToCart: "Add to Cart",
        addToWishlist: "Add to Wishlist",
        
        // Notifications
        addedToCart: "added to cart!",
        removedFromWishlist: "removed from wishlist!",
        addedToWishlist: "added to wishlist!",
        successSubscribe: "Successfully subscribed to newsletter!",
        invalidEmail: "Please enter a valid email address!",
        langChangedToEnglish: "Language changed to English",
        langChangedToArabic: "تم تغيير اللغة إلى العربية",
        noProducts: "No products found",
        noProductsMessage: "No products available in this category at the moment. Please check back later or browse other categories.",
        viewAllProducts: "View All Products",
        
        // Login Modal
        signInRequired: "Sign In Required",
        cartSignInPrompt: "Please sign in to add items to cart",
        wishlistSignInPrompt: "Please sign in to save items to wishlist",
        whySignIn: "Signing in allows you to save items to your cart/wishlist, track orders, and enjoy personalized recommendations.",
        goToLogin: "Go to Sign In Page",
        continueBrowsing: "Continue Browsing",
        noAccount: "Don't have an account? Sign up here",
        
        // Footer
        footerTitle: "EGYTOPIA",
        egyptianHeritage: "Egyptian Heritage",
        footerTagline: "Bringing the timeless beauty of Egyptian craftsmanship to the world.",
        quickLinks: "Quick Links",
        products: "Products",
        aboutUs: "About Us",
        blog: "Blog",
        shippingReturns: "Shipping & Returns",
        faq: "FAQ",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        customerService: "Customer Service",
        address: "123 Nile Avenue, Cairo, Egypt",
        phone: "+20 123 456 7890",
        email: "info@egytopia.eg",
        subscribeNewsletter: "Subscribe to Our Newsletter",
        newsletterDesc: "Get exclusive offers and updates on new products",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe",
        newsletterNote: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
        copyright: "© 2025 EGYTOPIA Egyptian Heritage. All rights reserved."
    },
    
    ar: {
        // Navigation
        home: "الرئيسية",
        collections: "المجموعات",
        categories: "الفئات",
        userPortal: "بوابة المستخدم",
        ourStory: "قصتنا",
        contact: "اتصل بنا",
        arabic: "English",
        logo: "EGYTOPIA",
        
        // Page Header
        pageTitle: "فئاتنا",
        pageDescription: "استكشف مجموعتنا المتنوعة من المنتجات المصرية الأصيلة، من الحرف التقليدية إلى المنتجات الزراعية.",
        
        // Category Filters
        allProducts: "كل المنتجات",
        jewelry: "المجوهرات",
        art: "الفن",
        textiles: "المنسوجات",
        sculptures: "المنحوتات",
        homeDecor: "ديكور المنزل",
        traditionalCrafts: "الحرف التقليدية",
        agricultural: "المنتجات الزراعية",
        handmade: "البضائع المصنوعة يدويًا",
        
        // Product Actions
        quickView: "عرض سريع",
        addToCart: "أضف إلى السلة",
        addToWishlist: "أضف إلى قائمة الأمنيات",
        
        // Notifications
        addedToCart: "تمت الإضافة إلى سلة التسوق!",
        removedFromWishlist: "تمت الإزالة من قائمة الأمنيات!",
        addedToWishlist: "تمت الإضافة إلى قائمة الأمنيات!",
        successSubscribe: "تم الاشتراك في النشرة البريدية بنجاح!",
        invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح!",
        langChangedToEnglish: "Language changed to English",
        langChangedToArabic: "تم تغيير اللغة إلى العربية",
        noProducts: "لم يتم العثور على منتجات",
        noProductsMessage: "لا توجد منتجات متاحة في هذه الفئة في الوقت الحالي. يرجى التحقق مرة أخرى لاحقًا أو تصفح الفئات الأخرى.",
        viewAllProducts: "عرض كل المنتجات",
        
        // Login Modal
        signInRequired: "مطلوب تسجيل الدخول",
        cartSignInPrompt: "يرجى تسجيل الدخول لإضافة العناصر إلى سلة التسوق",
        wishlistSignInPrompt: "يرجى تسجيل الدخول لحفظ العناصر في قائمة الأمنيات",
        whySignIn: "يتيح لك تسجيل الدخول حفظ العناصر في سلة التسوق/قائمة الأمنيات, تتبع الطلبات, والاستمتاع بالتوصيات الشخصية.",
        goToLogin: "الذهاب إلى صفحة تسجيل الدخول",
        continueBrowsing: "مواصلة التصفح",
        noAccount: "ليس لديك حساب؟ سجل هنا",
        
        // Footer
        footerTitle: "EGYTOPIA",
        egyptianHeritage: "التراث المصري",
        footerTagline: "نحمل جمال الحرفية المصرية الخالدة إلى العالم.",
        quickLinks: "روابط سريعة",
        products: "المنتجات",
        aboutUs: "من نحن",
        blog: "المدونة",
        shippingReturns: "الشحن والإرجاع",
        faq: "الأسئلة الشائعة",
        privacyPolicy: "سياسة الخصوصية",
        termsConditions: "الشروط والأحكام",
        customerService: "خدمة العملاء",
        address: "123 شارع النيل، القاهرة، مصر",
        phone: "+20 123 456 7890",
        email: "info@egytopia.eg",
        subscribeNewsletter: "اشترك في نشرتنا الإخبارية",
        newsletterDesc: "احصل على عروض حصرية وتحديثات حول المنتجات الجديدة",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشتراك",
        newsletterNote: "بالاشتراك، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات من شركتنا.",
        copyright: "© 2025 EGYTOPIA التراث المصري. جميع الحقوق محفوظة."
    }
};

// Default products data - with translations
const defaultProducts = [
    // Jewelry
    {
        id: 1,
        title_en: "Gold Cartouche Necklace",
        title_ar: "قلادة خرطوش ذهبية",
        price: "2,850 EGP",
        numericPrice: 2850,
        description_en: "This exquisite 18k gold-plated cartouche necklace features custom hieroglyphic inscriptions. Each piece is carefully crafted by skilled Egyptian artisans, making it a unique and personalized jewelry item.",
        description_ar: "قلادة خرطوش مطلي بالذهب عيار 18 قيراط تتميز بنقوش هيروغليفية مخصصة. كل قطعة مصنوعة بعناية من قبل حرفيين مصريين مهرة، مما يجعلها قطعة مجوهرات فريدة وشخصية.",
        image: "images/goldneclace.webp",
        rating: 5,
        ratingText: "5.0 (47 reviews)",
        category: "jewelry"
    },
    {
        id: 2,
        title_en: "Silver Ankh Pendant",
        title_ar: "قلادة عنخ فضية",
        price: "1,450 EGP",
        numericPrice: 1450,
        description_en: "This sterling silver ankh pendant represents the ancient Egyptian symbol of life. Meticulously crafted with attention to detail, it makes a meaningful addition to any jewelry collection.",
        description_ar: "تمثل قلادة عنخ الفضة الإسترلينية رمز الحياة في مصر القديمة. مصنوعة بدقة مع الاهتمام بالتفاصيل، مما يجعلها إضافة ذات معنى لأي مجموعة مجوهرات.",
        image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        ratingText: "4.2 (32 reviews)",
        category: "jewelry"
    },
    {
        id: 3,
        title_en: "Lapis Lazuli Bracelet",
        title_ar: "سوار لازورد",
        price: "1,200 EGP",
        numericPrice: 1200,
        description_en: "Handcrafted bracelet featuring genuine lapis lazuli stones, prized in ancient Egypt for their deep blue color and spiritual significance.",
        description_ar: "سوار مصنوع يدويًا يتميز بأحجار لازورد حقيقية، كانت تُقدّر في مصر القديمة بسبب لونها الأزرق العميق وأهميتها الروحية.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        ratingText: "4.7 (28 reviews)",
        category: "jewelry"
    },
    {
        id: 4,
        title_en: "Scarab Earrings",
        title_ar: "أقراط الجعران",
        price: "950 EGP",
        numericPrice: 950,
        description_en: "Elegant earrings featuring the sacred scarab beetle, a symbol of rebirth and transformation in ancient Egyptian culture.",
        description_ar: "أقراط أنيقة تتميز بخنفساء الجعران المقدسة، رمز الولادة الجديدة والتحول في الثقافة المصرية القديمة.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJyaW5ncyUyMGVneXB0aWFufGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.5,
        ratingText: "4.5 (19 reviews)",
        category: "jewelry"
    },

    // Art
    {
        id: 5,
        title_en: "Papyrus Painting",
        title_ar: "لوحة ورق البردي",
        price: "1,150 EGP",
        numericPrice: 1150,
        description_en: "Authentic papyrus painting depicting scenes from ancient Egyptian mythology, created using traditional techniques.",
        description_ar: "لوحة ورق بردي أصلية تصور مشاهد من الميثولوجيا المصرية القديمة، مخلوقة باستخدام تقنيات تقليدية.",
        image: "https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBhcHlydXMlMjBhcnR8ZW58MXx8fHwxNzYyODE1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        ratingText: "4.8 (41 reviews)",
        category: "art"
    },
    {
        id: 6,
        title_en: "Hieroglyphic Wall Art",
        title_ar: "فن جداري هيروغليفي",
        price: "2,300 EGP",
        numericPrice: 2300,
        description_en: "Beautiful wall art featuring authentic Egyptian hieroglyphics, perfect for adding an ancient touch to modern interiors.",
        description_ar: "فن جداري جميل يتميز بهيروغليفيات مصرية أصلية، مثالي لإضافة لمسة قديمة للديكورات الداخلية الحديثة.",
        image: "images/wallArt.webp",
        rating: 4.6,
        ratingText: "4.6 (23 reviews)",
        category: "art"
    },

    // Textiles
    {
        id: 7,
        title_en: "Embroidered Silk Scarf",
        title_ar: "وشاح حريري مطرز",
        price: "650 EGP",
        numericPrice: 650,
        description_en: "Luxurious silk scarf with intricate Egyptian embroidery, featuring traditional patterns and symbols.",
        description_ar: "وشاح حريري فاخر مع تطريز مصري معقد، يتميز بأنماط ورموز تقليدية.",
        image: "https://images.unsplash.com/photo-1713446535265-890235b6a12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHRleHRpbGUlMjBmYWJyaWN8ZW58MXx8fHwxNzYyODQ2MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9,
        ratingText: "4.9 (57 reviews)",
        category: "textiles"
    },
    {
        id: 8,
        title_en: "Traditional Egyptian Shawl",
        title_ar: "شال مصري تقليدي",
        price: "850 EGP",
        numericPrice: 850,
        description_en: "Warm and elegant shawl featuring traditional Egyptian patterns, perfect for cool evenings or as a fashion statement.",
        description_ar: "شال دافئ وأنيق يتميز بأنماط مصرية تقليدية، مثالي للأمسيات الباردة أو كتصريح أزياء.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGF3bCUyMGVneXB0aWFufGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.4,
        ratingText: "4.4 (31 reviews)",
        category: "textiles"
    },

    // Sculptures
    {
        id: 9,
        title_en: "Pharaoh Statue",
        title_ar: "تمثال فرعون",
        price: "3,200 EGP",
        numericPrice: 3200,
        description_en: "Exquisitely carved statue of an ancient Egyptian pharaoh, crafted from high-quality stone with incredible detail.",
        description_ar: "تمثال منحوت بدقة لفرعون مصري قديم، مصنوع من حجر عالي الجودة بتفاصيل مذهلة.",
        image: "https://images.unsplash.com/photo-1600630278838-e5a7185cca1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHRpYW4lMjBzdGF0dWV8ZW58MXx8fHwxNzYyODQ2MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.7,
        ratingText: "4.7 (39 reviews)",
        category: "sculptures"
    },
    {
        id: 10,
        title_en: "Bastet Cat Sculpture",
        title_ar: "تمثال قط باستت",
        price: "1,800 EGP",
        numericPrice: 1800,
        description_en: "Beautiful sculpture of Bastet, the ancient Egyptian goddess of protection, depicted as a cat.",
        description_ar: "تمثال جميل لباستت، إلهة الحماية المصرية القديمة، مصور كقطة.",
        image: "images/cat.jpg",
        rating: 4.8,
        ratingText: "4.8 (44 reviews)",
        category: "sculptures"
    },

    // Home Decor
    {
        id: 11,
        title_en: "Ceramic Lotus Vase",
        title_ar: "مزهرية زنبق خزفية",
        price: "890 EGP",
        numericPrice: 890,
        description_en: "Hand-painted traditional Egyptian pottery featuring the iconic lotus flower design. This beautiful vase showcases the rich artistic heritage of Egypt.",
        description_ar: "فخار مصري تقليدي مرسوم يدويًا يتميز بتصميم زهرة اللوتس الأيقوني. تعرض هذه المزهرية الجميلة التراث الفني الغني لمصر.",
        image: "images/vase.jpg",
        rating: 4.8,
        ratingText: "4.8 (52 reviews)",
        category: "home-decor"
    },
    {
        id: 12,
        title_en: "Egyptian Pattern Throw Pillow",
        title_ar: "وسادة زينة بنمط مصري",
        price: "450 EGP",
        numericPrice: 450,
        description_en: "Decorative throw pillow featuring traditional Egyptian patterns, adding an exotic touch to your home decor.",
        description_ar: "وسادة زينة تتميز بأنماط مصرية تقليدية، تضيف لمسة غريبة لديكور منزلك.",
        image: "images/pillows.webp",
        rating: 4.3,
        ratingText: "4.3 (27 reviews)",
        category: "home-decor"
    },

    // Traditional Crafts
    {
        id: 13,
        title_en: "Handwoven Palm Basket",
        title_ar: "سلة نخيل منسوجة يدويًا",
        price: "350 EGP",
        numericPrice: 350,
        description_en: "Traditional Egyptian basket handwoven from natural palm leaves, perfect for storage or as a decorative piece.",
        description_ar: "سلة مصرية تقليدية منسوجة يدويًا من أوراق النخيل الطبيعية، مثالية للتخزين أو كقطعة زخرفية.",
        image: "images/basket.webp",
        rating: 4.5,
        ratingText: "4.5 (33 reviews)",
        category: "traditional-crafts"
    },
    {
        id: 14,
        title_en: "Copper Incense Burner",
        title_ar: "حارق بخور نحاسي",
        price: "750 EGP",
        numericPrice: 750,
        description_en: "Handcrafted copper incense burner with traditional Egyptian designs, perfect for creating a relaxing atmosphere.",
        description_ar: "حارق بخور نحاسي مصنوع يدويًا بتصميمات مصرية تقليدية، مثالي لخلق جو من الاسترخاء.",
        image: "images/Burner.webp",
        rating: 4.6,
        ratingText: "4.6 (29 reviews)",
        category: "traditional-crafts"
    },

    // Agricultural Products
    {
        id: 15,
        title_en: "Premium Egyptian Dates",
        title_ar: "تمور مصرية ممتازة",
        price: "180 EGP",
        numericPrice: 180,
        description_en: "Sweet and nutritious dates harvested from Egyptian oases, known for their exceptional quality and flavor.",
        description_ar: "تمور حلوة ومغذية محصودة من الواحات المصرية، معروفة بجودتها الاستثنائية ونكهتها.",
        image: "images/dates.webp",
        rating: 4.9,
        ratingText: "4.9 (61 reviews)",
        category: "agricultural"
    },
    {
        id: 16,
        title_en: "Sinai Honey",
        title_ar: "عسل سيناء",
        price: "220 EGP",
        numericPrice: 220,
        description_en: "Pure, natural honey from the Sinai Peninsula, known for its unique flavor and medicinal properties.",
        description_ar: "عسل نقي وطبيعي من شبه جزيرة سيناء، معروف بنكهته الفريدة وخصائصه العلاجية.",
        image: "images/honey.webp",
        rating: 4.7,
        ratingText: "4.7 (48 reviews)",
        category: "agricultural"
    },

    // Handmade Goods
    {
        id: 17,
        title_en: "Leather-bound Notebook",
        title_ar: "دفتر مجلد بالجلد",
        price: "320 EGP",
        numericPrice: 320,
        description_en: "Handmade leather notebook with Egyptian motifs, perfect for journaling or as a special gift.",
        description_ar: "دفتر جلدي مصنوع يدويًا بزخارف مصرية، مثالي للتدوين أو كهدية خاصة.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.4,
        ratingText: "4.4 (36 reviews)",
        category: "handmade"
    },
    {
        id: 18,
        title_en: "Hand-painted Ceramic Plate",
        title_ar: "طبق خزفي مرسوم يدويًا",
        price: "580 EGP",
        numericPrice: 580,
        description_en: "Beautiful ceramic plate hand-painted with traditional Egyptian patterns, both decorative and functional.",
        description_ar: "طبق خزفي جميل مرسوم يدويًا بأنماط مصرية تقليدية، زخرفي ووظيفي في نفس الوقت.",
        image: "images/plates.jpg",
        rating: 4.6,
        ratingText: "4.6 (42 reviews)",
        category: "handmade"
    },
    {
        id: 19,
        title_en: "Egyptian Cotton Towel Set",
        title_ar: "مجموعة مناشف قطن مصري",
        price: "650 EGP",
        numericPrice: 650,
        description_en: "Luxurious set of towels made from premium Egyptian cotton, known for its exceptional softness and absorbency.",
        description_ar: "مجموعة فاخرة من المناشف مصنوعة من قطن مصري ممتاز، معروفة بنعومتها الاستثنائية وقدرتها على الامتصاص.",
        image: "images/towels.webp",
        rating: 4.8,
        ratingText: "4.8 (55 reviews)",
        category: "handmade"
    }
];

// Check if user is logged in
function isUserLoggedIn() {
    const savedUser = localStorage.getItem('egytopiaUser');
    return savedUser !== null;
}

// Get current language
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('egytopiaLanguage');
    return savedLang || 'en';
}

// STRICT LOGIN ENFORCEMENT: Show login required modal
function showLoginRequiredModal(feature) {
    // Create modal overlay
    const loginModal = document.createElement('div');
    loginModal.className = 'login-required-modal';
    loginModal.id = 'loginRequiredModal';
    
    const featureName = feature === 'cart' ? 'Cart' : 'Wishlist';
    const actionText = feature === 'cart' ? 'add items to cart' : 'save items to wishlist';
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    loginModal.innerHTML = `
        <div class="login-modal-content">
            <div class="login-modal-header">
                <i class="fas fa-lock" style="font-size: 40px; color: #c19b53; margin-bottom: 15px;"></i>
                <h2 style="color: #1a2f3a; margin-bottom: 10px;">${trans.signInRequired}</h2>
                <p style="color: #666; text-align: center;">${feature === 'cart' ? trans.cartSignInPrompt : trans.wishlistSignInPrompt}</p>
            </div>
            
            <div class="login-modal-body">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px; padding: 15px; background: #f8f5e8; border-radius: 10px;">
                    <i class="fas fa-info-circle" style="color: #c19b53; font-size: 24px;"></i>
                    <p style="margin: 0; color: #1a2f3a; flex: 1;">
                        <strong>${lang === 'en' ? 'Why sign in?' : 'لماذا تسجيل الدخول؟'}</strong><br>
                        ${trans.whySignIn}
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
                        ${trans.goToLogin}
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
                        ${trans.continueBrowsing}
                    </button>
                    
                    <p style="text-align: center; margin-top: 10px; font-size: 14px; color: #888;">
                        ${trans.noAccount}
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Egytopia Categories Page...');
    console.log('STRICT LOGIN ENFORCEMENT: Users must sign in to add to cart/wishlist');
    
    // Set current language
    currentLanguage = getCurrentLanguage();
    
    // Initialize language switcher
    setupLanguageSwitcher();
    
    // Apply translations
    translatePage();
    
    // Apply RTL if Arabic
    updateRTLDirection();
    
    // AUTO-FILTER BASED ON URL PARAMETER OR localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const storedCategory = localStorage.getItem('selectedCategory');
    
    // Use URL parameter first, then localStorage
    const targetCategory = categoryParam || storedCategory;
    
    initializeProducts();
    initializeCart();
    initializeWishlist();
    setupMobileNavigation();
    setupScrollEffects();
    setupCategoryFiltering();
    setupQuickViewModal();
    setupNewsletter();
    setupCartAndWishlistLinks();
    
    if (targetCategory) {
        console.log(`Auto-filtering to category: ${targetCategory}`);
        
        // Remove active class from all buttons first
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Find and activate the matching category button
        const matchingButton = document.querySelector(`.category-btn[data-category="${targetCategory}"]`);
        if (matchingButton) {
            matchingButton.classList.add('active');
            console.log(`Found and activated button for category: ${targetCategory}`);
            
            // Scroll to the category filter section
            setTimeout(() => {
                const filterSection = document.querySelector('.category-filters-section');
                if (filterSection) {
                    filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // Fallback to "All Products" if category not found
            document.querySelector('.category-btn[data-category="all"]').classList.add('active');
            console.log(`Category ${targetCategory} not found, showing all products`);
        }
        
        // Display filtered products
        displayProducts(targetCategory);
        
        // Clear the stored category after use
        localStorage.removeItem('selectedCategory');
    } else {
        // Default behavior - show all products
        displayProducts('all');
    }
    
    // Listen for login/logout events
    window.addEventListener('storage', function(e) {
        if (e.key === 'egytopiaUser') {
            console.log('User login status changed, updating UI...');
            // Re-display products to update wishlist buttons
            const activeCategory = document.querySelector('.category-btn.active')?.getAttribute('data-category') || 'all';
            displayProducts(activeCategory);
        }
    });
    
    console.log('Categories page initialization complete');
    console.log('User logged in:', isUserLoggedIn() ? 'Yes' : 'No');
    console.log('Current language:', currentLanguage);
});

// Initialize products - COMBINE DEFAULT AND ARTISAN PRODUCTS
function initializeProducts() {
    // Always use the default products
    products = [...defaultProducts];
    
    // Load artisan products from localStorage
    const artisanProducts = JSON.parse(localStorage.getItem('egytopiaProducts') || '[]');
    
    console.log('Artisan products found:', artisanProducts.length);
    
    // Add artisan products to the main products array
    artisanProducts.forEach(artisanProduct => {
        // Check if product already exists (by ID) to avoid duplicates
        if (!products.some(product => product.id === artisanProduct.id)) {
            products.push(artisanProduct);
        }
    });
    
    console.log(`Loaded ${defaultProducts.length} default products + ${artisanProducts.length} artisan products = ${products.length} total products`);
}

// Initialize cart from localStorage
function initializeCart() {
    const savedCart = localStorage.getItem('egytopiaCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Initialize wishlist from localStorage
function initializeWishlist() {
    const savedWishlist = localStorage.getItem('egytopiaWishlist');
    if (savedWishlist) {
        wishlistItems = JSON.parse(savedWishlist);
        updateWishlistCount();
    }
}

// Scroll Effects
function setupScrollEffects() {
    // Navbar scroll effect
    const header = document.querySelector('.header');
    const pageHeader = document.querySelector('.page-header');
    
    if (header && pageHeader) {
        window.addEventListener('scroll', function() {
            const pageHeaderBottom = pageHeader.offsetTop + pageHeader.offsetHeight;
            
            if (window.scrollY > pageHeaderBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Display products based on category
function displayProducts(category) {
    productsContainer.innerHTML = '';
    
    let filteredProducts = [];
    
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    console.log(`Displaying ${filteredProducts.length} products for category: ${category}`);
    
    if (filteredProducts.length === 0) {
        // Show message if no products found
        const lang = getCurrentLanguage();
        const trans = translations[lang];
        
        productsContainer.innerHTML = `
            <div class="no-products-message" style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                background: #f9f9f9;
                border-radius: 15px;
                margin: 20px 0;
            ">
                <i class="fas fa-box-open" style="font-size: 60px; color: #c19b53; margin-bottom: 20px;"></i>
                <h3 style="color: #1a2f3a; margin-bottom: 10px;">${trans.noProducts}</h3>
                <p style="color: #666; max-width: 400px; margin: 0 auto;">
                    ${trans.noProductsMessage}
                </p>
                <button class="view-all-btn" style="
                    margin-top: 20px;
                    background: #1a2f3a;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s;
                ">
                    ${trans.viewAllProducts}
                </button>
            </div>
        `;
        
        // Add event listener to "View All Products" button
        const viewAllBtn = productsContainer.querySelector('.view-all-btn');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Activate "All Products" button
                document.querySelector('.category-btn[data-category="all"]').classList.add('active');
                // Display all products
                displayProducts('all');
            });
        }
    } else {
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    }
}

// Create product card with strict login enforcement
function createProductCard(product) {
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    // Check if product is in wishlist (only if user is logged in)
    const isInWishlist = isUserLoggedIn() && wishlistItems.some(item => item.id === product.id);
    const wishlistClass = isInWishlist ? 'active' : '';
    
    // Get product details based on language
    const title = lang === 'en' ? product.title_en : product.title_ar;
    const description = lang === 'en' ? product.description_en : product.description_ar;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${title}" loading="lazy">
            <button class="quick-view-btn" data-product="${product.id}">${trans.quickView}</button>
            <button class="wishlist-btn ${wishlistClass}" data-product="${product.id}">
                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <p class="product-description">${description.substring(0, 80)}...</p>
            <div class="rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-value">${product.ratingText}</span>
            </div>
            <div class="product-price">
                <span class="current-price">${product.price}</span>
            </div>
            <button class="add-to-cart" data-product="${product.id}">${trans.addToCart}</button>
        </div>
    `;
    
    // Add event listeners
    const quickViewBtn = card.querySelector('.quick-view-btn');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const wishlistBtn = card.querySelector('.wishlist-btn');
    
    quickViewBtn.addEventListener('click', () => openQuickView(product.id));
    
    // STRICT LOGIN CHECK: Add to cart requires login
    addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!isUserLoggedIn()) {
            showLoginRequiredModal('cart');
            return;
        }
        addToCart(product.id);
    });
    
    // STRICT LOGIN CHECK: Wishlist requires login
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!isUserLoggedIn()) {
            showLoginRequiredModal('wishlist');
            return;
        }
        toggleWishlist(product.id, wishlistBtn);
    });
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Category filtering
function setupCategoryFiltering() {
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category to show
            const category = this.getAttribute('data-category');
            
            // Display products for selected category
            displayProducts(category);
            
            // Update URL without page reload (for shareable links)
            const url = new URL(window.location);
            if (category === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', category);
            }
            window.history.replaceState({}, '', url);
        });
    });
}

// Quick View Modal setup with login checks
function setupQuickViewModal() {
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', closeQuickViewModal);
    }

    // Close modal when clicking outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeQuickViewModal();
            }
        });
    }

    // Modal add to cart with STRICT LOGIN CHECK
    if (modalAddToCart) {
        modalAddToCart.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                closeQuickViewModal();
                return;
            }
            if (currentProduct) {
                addToCart(currentProduct.id);
                closeQuickViewModal();
            }
        });
    }

    // Modal add to wishlist with STRICT LOGIN CHECK
    if (modalAddToWishlist) {
        modalAddToWishlist.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                closeQuickViewModal();
                return;
            }
            if (currentProduct) {
                const wishlistBtn = document.querySelector(`.wishlist-btn[data-product="${currentProduct.id}"]`);
                toggleWishlist(currentProduct.id, wishlistBtn);
                closeQuickViewModal();
            }
        });
    }
}

// Open quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    // Get product details based on language
    const title = lang === 'en' ? product.title_en : product.title_ar;
    const description = lang === 'en' ? product.description_en : product.description_ar;
    
    // Update modal buttons text
    modalAddToCart.textContent = trans.addToCart;
    modalAddToWishlist.textContent = trans.addToWishlist;
    
    // Update modal content
    modalImg.src = product.image;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalPrice.textContent = product.price;
    modalDescription.textContent = description;
    modalStars.innerHTML = generateStars(product.rating);
    modalRatingValue.textContent = product.ratingText;
    
    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close quick view modal
function closeQuickViewModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProduct = null;
}

// Add to cart (STRICT LOGIN ENFORCEMENT)
function addToCart(productId) {
    // Double-check login
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('cart');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    saveCartToStorage();
    
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    const title = lang === 'en' ? product.title_en : product.title_ar;
    showNotification(`${title} ${lang === 'en' ? 'added to cart!' : 'تمت الإضافة إلى سلة التسوق!'}`);
}

// Toggle wishlist (STRICT LOGIN ENFORCEMENT)
function toggleWishlist(productId, button) {
    // Double-check login
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('wishlist');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    const title = lang === 'en' ? product.title_en : product.title_ar;
    
    const existingItemIndex = wishlistItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        // Remove from wishlist
        wishlistItems.splice(existingItemIndex, 1);
        
        // Update button
        button.classList.remove('active');
        button.innerHTML = '<i class="far fa-heart"></i>';
        
        updateWishlistCount();
        saveWishlistToStorage();
        showNotification(`${title} ${lang === 'en' ? 'removed from wishlist!' : 'تمت الإزالة من قائمة الأمنيات!'}`);
    } else {
        // Add to wishlist
        wishlistItems.push(product);
        
        // Update button
        button.classList.add('active');
        button.innerHTML = '<i class="fas fa-heart"></i>';
        
        updateWishlistCount();
        saveWishlistToStorage();
        showNotification(`${title} ${lang === 'en' ? 'added to wishlist!' : 'تمت الإضافة إلى قائمة الأمنيات!'}`);
    }
}

// Update cart count display
function updateCartCount() {
    if (cartCountElement) {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = count;
        
        // Add animation
        cartCountElement.classList.add('cart-update');
        setTimeout(() => {
            cartCountElement.classList.remove('cart-update');
        }, 300);
    }
}

// Update wishlist count display
function updateWishlistCount() {
    if (wishlistCountElement) {
        wishlistCountElement.textContent = wishlistItems.length;
        
        // Add animation
        wishlistCountElement.classList.add('wishlist-update');
        setTimeout(() => {
            wishlistCountElement.classList.remove('wishlist-update');
        }, 300);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('egytopiaCart', JSON.stringify(cartItems));
}

// Save wishlist to localStorage
function saveWishlistToStorage() {
    localStorage.setItem('egytopiaWishlist', JSON.stringify(wishlistItems));
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
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
    `;
    
    document.body.appendChild(notification);
    
    // Add show class after a delay
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Setup cart and wishlist links - REDIRECT TO PAGES
function setupCartAndWishlistLinks() {
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            // STRICT LOGIN CHECK for cart page
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                return;
            }
            // Redirect to cart page only if logged in
            window.location.href = 'cart.html';
        });
    }
    
    if (wishlistLink) {
        wishlistLink.addEventListener('click', (e) => {
            e.preventDefault();
            // STRICT LOGIN CHECK for wishlist page
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                return;
            }
            // Redirect to wishlist page only if logged in
            window.location.href = 'wishlist.html';
        });
    }
}

// Newsletter
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const lang = getCurrentLanguage();
            const trans = translations[lang];
            
            if (email && email.includes('@')) {
                showNotification(trans.successSubscribe);
                this.reset();
            } else {
                showNotification(trans.invalidEmail, 'error');
            }
        });
    }
}

// Language switcher functionality
function setupLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.querySelector('.lang-text');
    
    if (langToggle && langText) {
        // Set initial button text
        updateLanguageButton();
        
        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
            
            // Save to localStorage
            localStorage.setItem('egytopiaLanguage', currentLanguage);
            
            // Update language button
            updateLanguageButton();
            
            // Update RTL direction
            updateRTLDirection();
            
            // Show notification
            const trans = translations[currentLanguage];
            showNotification(currentLanguage === 'en' ? 
                translations.en.langChangedToEnglish : 
                translations.ar.langChangedToArabic);
            
            // Translate the entire page
            translatePage();
            
            // Re-display products with current language
            const activeCategory = document.querySelector('.category-btn.active')?.getAttribute('data-category') || 'all';
            displayProducts(activeCategory);
        });
    }
}

// Update language button text
function updateLanguageButton() {
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
    
    const langToggle = document.getElementById('langToggle');
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
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    // Update all translatable elements
    updateTextContent('[data-i18n="logo"]', trans.logo);
    updateTextContent('[data-i18n="home"]', trans.home);
    updateTextContent('[data-i18n="collections"]', trans.collections);
    updateTextContent('[data-i18n="categories"]', trans.categories);
    updateTextContent('[data-i18n="userPortal"]', trans.userPortal);
    updateTextContent('[data-i18n="ourStory"]', trans.ourStory);
    updateTextContent('[data-i18n="contact"]', trans.contact);
    updateTextContent('[data-i18n="arabic"]', trans.arabic);
    
    // Page Header
    updateTextContent('[data-i18n="pageTitle"]', trans.pageTitle);
    updateTextContent('[data-i18n="pageDescription"]', trans.pageDescription);
    
    // Category Filters
    updateTextContent('[data-i18n="allProducts"]', trans.allProducts);
    updateTextContent('[data-i18n="jewelry"]', trans.jewelry);
    updateTextContent('[data-i18n="art"]', trans.art);
    updateTextContent('[data-i18n="textiles"]', trans.textiles);
    updateTextContent('[data-i18n="sculptures"]', trans.sculptures);
    updateTextContent('[data-i18n="homeDecor"]', trans.homeDecor);
    updateTextContent('[data-i18n="traditionalCrafts"]', trans.traditionalCrafts);
    updateTextContent('[data-i18n="agricultural"]', trans.agricultural);
    updateTextContent('[data-i18n="handmade"]', trans.handmade);
    
    // Quick View & Buttons
    updateTextContent('[data-i18n="addToCart"]', trans.addToCart);
    updateTextContent('[data-i18n="addToWishlist"]', trans.addToWishlist);
    
    // Footer
    updateTextContent('[data-i18n="footerTitle"]', trans.footerTitle);
    updateTextContent('[data-i18n="egyptianHeritage"]', trans.egyptianHeritage);
    updateTextContent('[data-i18n="footerTagline"]', trans.footerTagline);
    updateTextContent('[data-i18n="quickLinks"]', trans.quickLinks);
    updateTextContent('[data-i18n="products"]', trans.products);
    updateTextContent('[data-i18n="aboutUs"]', trans.aboutUs);
    updateTextContent('[data-i18n="blog"]', trans.blog);
    updateTextContent('[data-i18n="shippingReturns"]', trans.shippingReturns);
    updateTextContent('[data-i18n="faq"]', trans.faq);
    updateTextContent('[data-i18n="privacyPolicy"]', trans.privacyPolicy);
    updateTextContent('[data-i18n="termsConditions"]', trans.termsConditions);
    updateTextContent('[data-i18n="customerService"]', trans.customerService);
    updateTextContent('[data-i18n="address"]', trans.address);
    updateTextContent('[data-i18n="phone"]', trans.phone);
    updateTextContent('[data-i18n="email"]', trans.email);
    updateTextContent('[data-i18n="subscribeNewsletter"]', trans.subscribeNewsletter);
    updateTextContent('[data-i18n="newsletterDesc"]', trans.newsletterDesc);
    updateTextContent('[data-i18n="subscribe"]', trans.subscribe);
    updateTextContent('[data-i18n="newsletterNote"]', trans.newsletterNote);
    updateTextContent('[data-i18n="copyright"]', trans.copyright);
    
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

// Export functions for debugging
window.categoriesPage = {
    isUserLoggedIn,
    getCurrentLanguage,
    showLoginRequiredModal,
    translatePage,
    updateRTLDirection,
    debug: function() {
        console.log('=== Categories.js Debug Info ===');
        console.log('User logged in:', isUserLoggedIn());
        console.log('Current language:', currentLanguage);
        console.log('Total products:', products.length);
        console.log('Cart items:', cartItems.length);
        console.log('Wishlist items:', wishlistItems.length);
        
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        console.log('URL Category Parameter:', urlParams.get('category'));
        console.log('Stored Category:', localStorage.getItem('selectedCategory'));
        
        console.log('STRICT LOGIN ENFORCEMENT: ON');
        console.log('LANGUAGE SWITCHING: ON');
        console.log('===========================');
    },
    
    // Helper function to manually filter by category (for testing)
    filterByCategory: function(categoryId) {
        const matchingButton = document.querySelector(`.category-btn[data-category="${categoryId}"]`);
        if (matchingButton) {
            matchingButton.click();
            return true;
        }
        return false;
    },
    
    // Helper function to switch language
    switchLanguage: function(lang) {
        if (lang === 'en' || lang === 'ar') {
            currentLanguage = lang;
            localStorage.setItem('egytopiaLanguage', lang);
            updateLanguageButton();
            updateRTLDirection();
            translatePage();
            const activeCategory = document.querySelector('.category-btn.active')?.getAttribute('data-category') || 'all';
            displayProducts(activeCategory);
            return true;
        }
        return false;
    }
};

console.log('Categories.js loaded successfully with LANGUAGE SWITCHING and STRICT LOGIN REQUIREMENT!');
console.log('Users MUST sign in to add items to cart or wishlist.');
console.log('Debug commands available in window.categoriesPage');
console.log('Type categoriesPage.debug() for current status');
console.log('Type categoriesPage.filterByCategory("jewelry") to test filtering');
console.log('Type categoriesPage.switchLanguage("ar") to switch to Arabic');