// collections.js - UNIFIED LANGUAGE SYSTEM WITH LOGIN REQUIREMENT

// Cart and wishlist functionality
let cartItems = [];
let wishlistItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
const cartLink = document.getElementById('cartLink');
const wishlistLink = document.getElementById('wishlistLink');
const collectionsContainer = document.getElementById('collectionsContainer');

// Language state
let currentLanguage = 'en'; // Default language

// COMPREHENSIVE TRANSLATIONS FOR ENTIRE PAGE
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
        
        // Page Header
        collectionsTitle: "Our Collections",
        collectionsDescription: "Browse our curated categories of authentic Egyptian treasures, each representing a unique aspect of our rich heritage.",
        
        // Category Cards
        jewelryCollection: "Jewelry Collection",
        jewelryDescription: "Exquisite Egyptian jewelry featuring gold, silver, and precious stones. From ancient-inspired cartouches to modern scarab designs.",
        egyptianArt: "Egyptian Art",
        artDescription: "Authentic Egyptian art including papyrus paintings, hieroglyphic art, and modern interpretations of ancient themes.",
        textilesFabrics: "Textiles & Fabrics",
        textilesDescription: "Luxurious Egyptian cotton, silk shawls, and embroidered fabrics with traditional patterns and modern designs.",
        sculpturesStatues: "Sculptures & Statues",
        sculpturesDescription: "Hand-carved sculptures of Egyptian deities, pharaohs, and symbolic animals from premium materials.",
        homeDecor: "Home Decor",
        homeDecorDescription: "Egyptian-inspired home decor including vases, wall art, and decorative pieces for modern interiors.",
        traditionalCrafts: "Traditional Crafts",
        craftsDescription: "Traditional Egyptian crafts including pottery, basket weaving, and handcrafted items using ancient techniques.",
        agriculturalProducts: "Agricultural Products",
        agriculturalDescription: "Premium Egyptian agricultural products including dates, honey, herbs, and spices from the Nile Valley.",
        handmadeGoods: "Handmade Goods",
        handmadeDescription: "Unique handmade items including leather goods, ceramics, and decorative objects crafted by Egyptian artisans.",
        
        // Collection Page Elements
        featured: "Featured",
        viewCollection: "View Collection",
        products: "products",
        
        // New Collection Section
        newCollectionTitle: "New Nile Items",
        newCollectionSubtitle: "Fresh arrivals inspired by the timeless beauty of the Nile",
        viewAllNewArrivals: "View All New Arrivals",
        newBadge: "New",
        trendingBadge: "Trending",
        justInBadge: "Just In",
        fromLuxor: "From Luxor",
        silkAswan: "Silk from Aswan",
        artisanWorkshop: "Artisan Workshop",
        desertGoldCollection: "Desert Gold Collection",
        desertGoldDescription: "Warm, earthy designs inspired by the Egyptian desert, blended with luxurious golden accents.",
        royalHeritageCollection: "Royal Heritage Collection",
        royalHeritageDescription: "A curated collection reflecting the elegance and power of Egyptian royalty",
        mysticPharaohCollection: "Mystic Pharaoh Collection",
        mysticPharaohDescription: "A curated collection blending mystical pharaonic symbols with modern design elements.",
        naturalTextures: "Natural textures and warm tones",
        handmadeArtisans: "Handmade by local artisans",
        ecoFriendly: "Eco-friendly and sustainably produced",
        premiumMaterials: "Premium materials and refined finishes",
        pharaohDesigns: "Designs inspired by pharaohs and queens",
        giftCollectors: "Ideal for gifts and collectors",
        spiritualMotifs: "Inspired by ancient spiritual motifs",
        modernAesthetic: "Modern, clean aesthetic",
        egyptianCreators: "Designed by Egyptian creators",
        
        // Best Sellers Section
        egyptianMasterpieces: "Egyptian Masterpieces",
        bestSellingTreasures: "Best Selling Treasures",
        treasuresDescription: "Discover the most cherished artifacts from our collection, celebrated by collectors worldwide",
        bestsellerBadge: "Bestseller",
        limitedBadge: "Limited",
        popularBadge: "Popular",
        jewelryCollectionB: "Jewelry Collection",
        goldenAnkhNecklace: "Golden Ankh Necklace",
        goldenAnkhDescription: "24k gold pendant with ancient Egyptian ankh symbol, handcrafted by Cairo artisans",
        sculpturesCategory: "Sculptures",
        nefertitiBust: "Nefertiti Bust Statue",
        nefertitiDescription: "Hand-carved alabaster replica of the famous Egyptian queen, museum quality",
        homeDecorCategory: "Home Decor",
        hieroglyphicVase: "Hieroglyphic Ceramic Vase",
        hieroglyphicDescription: "Traditional Egyptian pottery with authentic hieroglyphic inscriptions from Luxor",
        savePercentage: "Save 24%",
        savePercentage25: "Save 25%",
        savePercentage20: "Save 20%",
        
        // Quick View & Buttons
        quickView: "Quick View",
        addToCart: "Add to Cart",
        addToWishlist: "Add to Wishlist",
        
        // Notifications
        addedToCart: "Added to cart!",
        removedFromWishlist: "Removed from wishlist!",
        addedToWishlist: "Added to wishlist!",
        successSubscribe: "Successfully subscribed to newsletter!",
        invalidEmail: "Please enter a valid email address!",
        langChangedToEnglish: "Language changed to English",
        langChangedToArabic: "تم تغيير اللغة إلى العربية",
        
        // Footer
        egyptianHeritage: "Egyptian Heritage",
        footerTagline: "Bringing the timeless beauty of Egyptian craftsmanship to the world.",
        quickLinks: "Quick Links",
        productsFooter: "Products",
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
        
        // Login Modal
        signInRequired: "Sign In Required",
        cartSignInPrompt: "Please sign in to add items to cart",
        wishlistSignInPrompt: "Please sign in to save items to wishlist",
        whySignIn: "Signing in allows you to save items to your cart/wishlist, track orders, and enjoy personalized recommendations.",
        goToLogin: "Go to Sign In Page",
        continueBrowsing: "Continue Browsing",
        noAccount: "Don't have an account? Sign up here"
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
        
        // Page Header
        collectionsTitle: "مجموعاتنا",
        collectionsDescription: "تصفح فئاتنا المختارة من الكنوز المصرية الأصيلة، كل منها يمثل جانبًا فريدًا من تراثنا الغني.",
        
        // Category Cards
        jewelryCollection: "مجموعة المجوهرات",
        jewelryDescription: "مجوهرات مصرية رائعة تتميز بالذهب والفضة والأحجار الكريمة. من خراطيش مستوحاة من العصور القديمة إلى تصميمات الجعران الحديثة.",
        egyptianArt: "الفن المصري",
        artDescription: "فن مصري أصيل يشمل لوحات البردي، فن الهيروغليفية، وتفسيرات حديثة للمواضيع القديمة.",
        textilesFabrics: "المنسوجات والأقمشة",
        textilesDescription: "قطن مصري فاخر، وشالات حرير، وأقمشة مطرزة بأنماط تقليدية وتصميمات حديثة.",
        sculpturesStatues: "المنحوتات والتماثيل",
        sculpturesDescription: "منحوتات منحوتة يدويًا للآلهة المصرية والفراعنة والحيوانات الرمزية من مواد ممتازة.",
        homeDecor: "ديكور المنزل",
        homeDecorDescription: "ديكور منزلي مستوحى من مصر يشمل المزهريات والفن الجداري والقطع الزخرفية للديكورات الداخلية الحديثة.",
        traditionalCrafts: "الحرف التقليدية",
        craftsDescription: "الحرف المصرية التقليدية بما في ذلك الفخار وحياكة السلال والمنتجات المصنوعة يدويًا باستخدام تقنيات قديمة.",
        agriculturalProducts: "المنتجات الزراعية",
        agriculturalDescription: "منتجات زراعية مصرية ممتازة تشمل التمور والعسل والأعشاب والتوابل من وادي النيل.",
        handmadeGoods: "البضائع المصنوعة يدويًا",
        handmadeDescription: "عناصر فريدة مصنوعة يدويًا تشمل منتجات الجلود والسيراميك والأشياء الزخرفية المصنوعة من قبل الحرفيين المصريين.",
        
        // Collection Page Elements
        featured: "مميز",
        viewCollection: "عرض المجموعة",
        products: "منتج",
        
        // New Collection Section
        newCollectionTitle: "منتجات النيل الجديدة",
        newCollectionSubtitle: "وصول جديد مستوحى من الجمال الخالد للنيل",
        viewAllNewArrivals: "عرض كل الوافدين الجدد",
        newBadge: "جديد",
        trendingBadge: "الأكثر رواجًا",
        justInBadge: "وصل حديثًا",
        fromLuxor: "من الأقصر",
        silkAswan: "حرير من أسوان",
        artisanWorkshop: "ورشة الحرفيين",
        desertGoldCollection: "مجموعة ذهب الصحراء",
        desertGoldDescription: "تصميمات دافئة وترابية مستوحاة من الصحراء المصرية، ممزوجة بإكسسوارات ذهبية فاخرة.",
        royalHeritageCollection: "مجموعة التراث الملكي",
        royalHeritageDescription: "مجموعة مختارة تعكس أناقة وقوة الملوك المصريين",
        mysticPharaohCollection: "مجموعة الفرعون الصوفي",
        mysticPharaohDescription: "مجموعة مختارة تدمج الرموز الفرعونية الصوفية مع عناصر التصميم الحديثة.",
        naturalTextures: "نسيج طبيعي وألوان دافئة",
        handmadeArtisans: "مصنوع يدويًا من قبل الحرفيين المحليين",
        ecoFriendly: "صديق للبيئة ومُنتج بشكل مستدام",
        premiumMaterials: "مواد ممتازة وتشطيبات راقية",
        pharaohDesigns: "تصميمات مستوحاة من الفراعنة والملكات",
        giftCollectors: "مثالي للهدايا والمجمعين",
        spiritualMotifs: "مستوحى من الزخارف الروحية القديمة",
        modernAesthetic: "جماليات حديثة ونظيفة",
        egyptianCreators: "مصمم من قبل مبتكرين مصريين",
        
        // Best Sellers Section
        egyptianMasterpieces: "روائع مصرية",
        bestSellingTreasures: "الكنوز الأكثر مبيعًا",
        treasuresDescription: "اكتشف أكثر القطع الأثرية المحبوبة من مجموعتنا، التي يحتفل بها هواة الجمع في جميع أنحاء العالم",
        bestsellerBadge: "الأكثر مبيعًا",
        limitedBadge: "محدود",
        popularBadge: "شائع",
        jewelryCollectionB: "مجموعة المجوهرات",
        goldenAnkhNecklace: "قلادة عنخ ذهبية",
        goldenAnkhDescription: "قلادة ذهبية عيار 24 قيراط مع رمز عنخ مصري قديم، مصنوعة يدويًا من قبل حرفيين القاهرة",
        sculpturesCategory: "المنحوتات",
        nefertitiBust: "تمثال نصفي لنفرتيتي",
        nefertitiDescription: "نسخة منحوتة يدويًا من الألباستر للملكة المصرية الشهيرة، بجودة المتحف",
        homeDecorCategory: "ديكور المنزل",
        hieroglyphicVase: "مزهرية هيروغليفية خزفية",
        hieroglyphicDescription: "فخار مصري تقليدي مع نقوش هيروغليفية أصلية من الأقصر",
        savePercentage: "وفر 24%",
        savePercentage25: "وفر 25%",
        savePercentage20: "وفر 20%",
        
        // Quick View & Buttons
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
        
        // Footer
        egyptianHeritage: "التراث المصري",
        footerTagline: "نحمل جمال الحرفية المصرية الخالدة إلى العالم.",
        quickLinks: "روابط سريعة",
        productsFooter: "المنتجات",
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
        
        // Login Modal
        signInRequired: "مطلوب تسجيل الدخول",
        cartSignInPrompt: "يرجى تسجيل الدخول لإضافة العناصر إلى سلة التسوق",
        wishlistSignInPrompt: "يرجى تسجيل الدخول لحفظ العناصر في قائمة الأمنيات",
        whySignIn: "يتيح لك تسجيل الدخول حفظ العناصر في سلة التسوق/قائمة الأمنيات, تتبع الطلبات, والاستمتاع بالتوصيات الشخصية.",
        goToLogin: "الذهاب إلى صفحة تسجيل الدخول",
        continueBrowsing: "مواصلة التصفح",
        noAccount: "ليس لديك حساب؟ سجل هنا"
    }
};

// Categories data - with translations
const categories = [
    {
        id: "jewelry",
        title_en: "Jewelry Collection",
        title_ar: "مجموعة المجوهرات",
        description_en: "Exquisite Egyptian jewelry featuring gold, silver, and precious stones. From ancient-inspired cartouches to modern scarab designs.",
        description_ar: "مجوهرات مصرية رائعة تتميز بالذهب والفضة والأحجار الكريمة. من خراطيش مستوحاة من العصور القديمة إلى تصميمات الجعران الحديثة.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 4,
        featured: true,
        exactMatch: true
    },
    {
        id: "art",
        title_en: "Egyptian Art",
        title_ar: "الفن المصري",
        description_en: "Authentic Egyptian art including papyrus paintings, hieroglyphic art, and modern interpretations of ancient themes.",
        description_ar: "فن مصري أصيل يشمل لوحات البردي، فن الهيروغليفية، وتفسيرات حديثة للمواضيع القديمة.",
        image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "textiles",
        title_en: "Textiles & Fabrics",
        title_ar: "المنسوجات والأقمشة",
        description_en: "Luxurious Egyptian cotton, silk shawls, and embroidered fabrics with traditional patterns and modern designs.",
        description_ar: "قطن مصري فاخر، وشالات حرير، وأقمشة مطرزة بأنماط تقليدية وتصميمات حديثة.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "sculptures",
        title_en: "Sculptures & Statues",
        title_ar: "المنحوتات والتماثيل",
        description_en: "Hand-carved sculptures of Egyptian deities, pharaohs, and symbolic animals from premium materials.",
        description_ar: "منحوتات منحوتة يدويًا للآلهة المصرية والفراعنة والحيوانات الرمزية من مواد ممتازة.",
        image: "https://images.unsplash.com/photo-1600630278838-e5a7185cca1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "home-decor",
        title_en: "Home Decor",
        title_ar: "ديكور المنزل",
        description_en: "Egyptian-inspired home decor including vases, wall art, and decorative pieces for modern interiors.",
        description_ar: "ديكور منزلي مستوحى من مصر يشمل المزهريات والفن الجداري والقطع الزخرفية للديكورات الداخلية الحديثة.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "traditional-crafts",
        title_en: "Traditional Crafts",
        title_ar: "الحرف التقليدية",
        description_en: "Traditional Egyptian crafts including pottery, basket weaving, and handcrafted items using ancient techniques.",
        description_ar: "الحرف المصرية التقليدية بما في ذلك الفخار وحياكة السلال والمنتجات المصنوعة يدويًا باستخدام تقنيات قديمة.",
        image: "https://images.unsplash.com/photo-1568031813264-d394c5d474b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "agricultural",
        title_en: "Agricultural Products",
        title_ar: "المنتجات الزراعية",
        description_en: "Premium Egyptian agricultural products including dates, honey, herbs, and spices from the Nile Valley.",
        description_ar: "منتجات زراعية مصرية ممتازة تشمل التمور والعسل والأعشاب والتوابل من وادي النيل.",
        image: "https://www.dahu.bio/images/photos/agriculture/organic-product.jpg",
        productCount: 2,
        featured: true,
        exactMatch: true
    },
    {
        id: "handmade",
        title_en: "Handmade Goods",
        title_ar: "البضائع المصنوعة يدويًا",
        description_en: "Unique handmade items including leather goods, ceramics, and decorative objects crafted by Egyptian artisans.",
        description_ar: "عناصر فريدة مصنوعة يدويًا تشمل منتجات الجلود والسيراميك والأشياء الزخرفية المصنوعة من قبل الحرفيين المصريين.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
        productCount: 3,
        featured: true,
        exactMatch: true
    }
];

// Product data for Quick View
const products = [
    {
        id: 'n1',
        title_en: 'Desert Gold Collection',
        title_ar: 'مجموعة ذهب الصحراء',
        price: '1,020 EGP',
        description_en: 'Warm, earthy designs inspired by the Egyptian desert, blended with luxurious golden accents. Made from sustainable materials using centuries-old weaving techniques.',
        description_ar: 'تصميمات دافئة وترابية مستوحاة من الصحراء المصرية، ممزوجة بإكسسوارات ذهبية فاخرة. مصنوعة من مواد مستدامة باستخدام تقنيات حياكة عمرها قرون.',
        image: 'Images/WhatsApp Image 2025-12-09 at 12.29.06 AM.jpeg',
        rating: 5,
        ratingText: '5.0 (19 reviews)',
        category: 'traditional-crafts',
        origin_en: 'From Luxor',
        origin_ar: 'من الأقصر'
    },
    {
        id: 'n2',
        title_en: 'Royal Heritage Collection',
        title_ar: 'مجموعة التراث الملكي',
        price: '2,700 EGP',
        originalPrice: '3,500 EGP',
        description_en: 'Luxurious silk with Pharaonic patterns, hand-woven using traditional techniques. Each shawl tells a unique story through its intricate design.',
        description_ar: 'حرير فاخر بأنماط فرعونية، منسوج يدويًا باستخدام تقنيات تقليدية. كل شال يحكي قصة فريدة من خلال تصميمه المعقد.',
        image: 'Images/collections.jpeg',
        rating: 4.5,
        ratingText: '4.5 (41 reviews)',
        category: 'textiles',
        origin_en: 'Silk from Aswan',
        origin_ar: 'حرير من أسوان'
    },
    {
        id: 'n3',
        title_en: 'Mystic Pharaoh Collection',
        title_ar: 'مجموعة الفرعون الصوفي',
        price: '1,830 EGP',
        description_en: 'A curated collection blending mystical pharaonic symbols with modern design elements for home and personal use.',
        description_ar: 'مجموعة مختارة تدمج الرموز الفرعونية الصوفية مع عناصر التصميم الحديثة للمنزل والاستخدام الشخصي.',
        image: 'Images/box.jpeg',
        rating: 4,
        ratingText: '4.0 (32 reviews)',
        category: 'home-decor',
        origin_en: 'Artisan Workshop',
        origin_ar: 'ورشة الحرفيين'
    },
    {
        id: 't1',
        title_en: 'Golden Ankh Necklace',
        title_ar: 'قلادة عنخ ذهبية',
        price: '1,000 EGP',
        originalPrice: '1,240 EGP',
        description_en: '24k gold pendant with ancient Egyptian ankh symbol, handcrafted by Cairo artisans. The ankh represents eternal life in Egyptian mythology.',
        description_ar: 'قلادة ذهبية عيار 24 قيراط مع رمز عنخ مصري قديم، مصنوعة يدويًا من قبل حرفيين القاهرة. يمثل عنخ الحياة الأبدية في الميثولوجيا المصرية.',
        image: 'Images/WhatsApp Image 2025-12-09 at 12.58.21 AM.jpeg',
        rating: 4.7,
        ratingText: '4.7 (128 reviews)',
        category: 'jewelry',
        origin_en: 'Cairo',
        origin_ar: 'القاهرة'
    },
    {
        id: 't2',
        title_en: 'Nefertiti Bust Statue',
        title_ar: 'تمثال نصفي لنفرتيتي',
        price: '4,470 EGP',
        originalPrice: '5,970 EGP',
        description_en: 'Hand-carved alabaster replica of the famous Egyptian queen, museum quality. A stunning centerpiece for any room.',
        description_ar: 'نسخة منحوتة يدويًا من الألباستر للملكة المصرية الشهيرة، بجودة المتحف. تحفة مذهلة لأي غرفة.',
        image: 'Images/WhatsApp Image 2025-12-09 at 1.02.06 AM.jpeg',
        rating: 5,
        ratingText: '5.0 (94 reviews)',
        category: 'sculptures',
        origin_en: 'Alexandria',
        origin_ar: 'الإسكندرية'
    },
    {
        id: 't3',
        title_en: 'Hieroglyphic Ceramic Vase',
        title_ar: 'مزهرية هيروغليفية خزفية',
        price: '2,370 EGP',
        originalPrice: '2,790 EGP',
        description_en: 'Traditional Egyptian pottery with authentic hieroglyphic inscriptions from Luxor. Each vase is a unique piece of art.',
        description_ar: 'فخار مصري تقليدي مع نقوش هيروغليفية أصلية من الأقصر. كل مزهرية هي قطعة فنية فريدة.',
        image: 'Images/WhatsApp Image 2025-12-09 at 1.05.19 AM.jpeg',
        rating: 4.2,
        ratingText: '4.2 (67 reviews)',
        category: 'home-decor',
        origin_en: 'Luxor',
        origin_ar: 'الأقصر'
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
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    // Create modal overlay
    const loginModal = document.createElement('div');
    loginModal.className = 'login-required-modal';
    loginModal.id = 'loginRequiredModal';
    
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
document.addEventListener('DOMContentLoaded', function () {
    console.log('Initializing Egytopia Collections Page...');
    console.log('STRICT LOGIN ENFORCEMENT: Users must sign in to add to cart/wishlist');
    
    // Set current language
    currentLanguage = getCurrentLanguage();
    
    // Initialize language switcher FIRST
    setupLanguageSwitcher();
    
    // Apply translations
    translatePage();
    
    // Initialize other functionality
    initializeCart();
    initializeWishlist();
    setupMobileNavigation();
    setupScrollEffects();
    displayCollections();
    setupNewsletter();
    setupCartAndWishlistLinks();
    setupProductInteractions();
    updateActiveNavLink();
    setupModalEvents();
    
    console.log('Collections page initialization complete');
    console.log('User logged in:', isUserLoggedIn() ? 'Yes' : 'No');
    console.log('Current language:', currentLanguage);
});

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
        updateWishlistButtons();
    }
}

// Setup modal event listeners
function setupModalEvents() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.getElementById('closeQuickView');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeQuickView);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeQuickView();
            }
        });
    }
    
    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeQuickView();
        }
    });
}

// Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const pageHeader = document.querySelector('.page-header');

    if (header && pageHeader) {
        window.addEventListener('scroll', function () {
            const pageHeaderBottom = pageHeader.offsetTop + pageHeader.offsetHeight;
            if (window.scrollY > pageHeaderBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Mobile Navigation
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Display collections with language support
function displayCollections() {
    if (!collectionsContainer) return;

    // Clear the container
    collectionsContainer.innerHTML = '';

    // Get current language
    const lang = getCurrentLanguage();
    const trans = translations[lang];

    categories.forEach(category => {
        const collectionCard = createCollectionCard(category);
        collectionsContainer.appendChild(collectionCard);
    });
}

// Create collection card HTML with language support
function createCollectionCard(category) {
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    const title = lang === 'en' ? category.title_en : category.title_ar;
    const description = lang === 'en' ? category.description_en : category.description_ar;
    
    const card = document.createElement('div');
    card.className = 'collection-card';

    card.innerHTML = `
        <div class="collection-image">
            <img src="${category.image}" alt="${title}">
            <div class="collection-overlay">
                <h3 class="collection-title">${title}</h3>
            </div>
            ${category.featured ? `<div class="collection-badge" data-i18n="featured">${trans.featured}</div>` : ''}
        </div>
        <div class="collection-info">
            <h3 class="collection-title">${title}</h3>
            <p class="collection-description">${description}</p>
            <div class="collection-stats">
                <span>${category.productCount} ${trans.products}</span>
                ${category.featured ? `<span data-i18n="featured">${trans.featured}</span>` : ''}
            </div>
            <button class="view-collection-btn" data-category="${category.id}" data-i18n="viewCollection">
                ${trans.viewCollection}
            </button>
        </div>
    `;

    const viewBtn = card.querySelector('.view-collection-btn');
    viewBtn.addEventListener('click', () => {
        localStorage.setItem('selectedCategory', category.id);
        window.location.href = `categories.html?category=${category.id}`;
    });

    return card;
}

// Setup product interactions with login checks
function setupProductInteractions() {
    // Wishlist buttons - WITH LOGIN CHECK
    document.querySelectorAll('.nile-wishlist-btn, .treasure-wishlist').forEach(button => {
        button.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                return;
            }
            
            toggleWishlist(this);
        };
    });

    // Add to Cart buttons - WITH LOGIN CHECK
    document.querySelectorAll('.nile-add-to-cart, .treasure-cart-btn').forEach(button => {
        button.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                return;
            }
            
            addToCart(this);
        };
    });

    // Quick View buttons
    document.querySelectorAll('.nile-quick-view, .quick-view-trigger').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-nile-id') || this.getAttribute('data-treasure-id');
            console.log('Quick View clicked for product:', productId);
            showQuickView(productId);
        });
    });

    // Mobile flip for Nile cards
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.nile-card').forEach(card => {
            card.addEventListener('click', function (e) {
                if (!e.target.closest('button')) {
                    this.classList.toggle('mobile-flip');
                }
            });
        });
    }
}

// Toggle wishlist function - WITH LOGIN CHECK
function toggleWishlist(button) {
    // Double-check login
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('wishlist');
        return;
    }
    
    const productId = button.getAttribute('data-nile-id') || button.getAttribute('data-treasure-id');
    const isActive = button.classList.contains('active');
    const lang = getCurrentLanguage();
    const trans = translations[lang];

    if (isActive) {
        const itemIndex = wishlistItems.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            wishlistItems.splice(itemIndex, 1);
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i>';
            showNotification(trans.removedFromWishlist);
        }
    } else {
        const productCard = button.closest('.nile-card, .treasure-card');
        const titleElement = productCard.querySelector('.nile-product-title, .treasure-title');
        const priceElement = productCard.querySelector('.nile-price-current, .price-current');
        const imageElement = productCard.querySelector('.nile-image, .treasure-image');

        const product = {
            id: productId,
            title: titleElement?.textContent || 'Product',
            price: priceElement?.textContent || '1,000 EGP',
            image: imageElement?.src || ''
        };

        wishlistItems.push(product);
        button.classList.add('active');
        button.innerHTML = '<i class="fas fa-heart"></i>';
        showNotification(trans.addedToWishlist);
    }

    updateWishlistCount();
    saveWishlistToStorage();
}

// Update wishlist buttons
function updateWishlistButtons() {
    document.querySelectorAll('.nile-wishlist-btn, .treasure-wishlist').forEach(button => {
        const productId = button.getAttribute('data-nile-id') || button.getAttribute('data-treasure-id');
        const isInWishlist = wishlistItems.find(item => item.id === productId);

        if (isInWishlist) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

// Add to cart function - WITH LOGIN CHECK
function addToCart(button) {
    // Double-check login
    if (!isUserLoggedIn()) {
        showLoginRequiredModal('cart');
        return;
    }
    
    const productId = button.getAttribute('data-nile-id') || button.getAttribute('data-treasure-id');
    const productCard = button.closest('.nile-card, .treasure-card');
    const titleElement = productCard.querySelector('.nile-product-title, .treasure-title');
    const priceElement = productCard.querySelector('.nile-price-current, .price-current');
    const imageElement = productCard.querySelector('.nile-image, .treasure-image');

    const product = {
        id: productId,
        title: titleElement?.textContent || 'Product',
        price: priceElement?.textContent || '1,000 EGP',
        image: imageElement?.src || '',
        quantity: 1
    };

    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push(product);
    }

    updateCartCount();
    saveCartToStorage();
    
    const lang = getCurrentLanguage();
    showNotification(translations[lang].addedToCart);

    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

// Show Quick View with language support
function showQuickView(productId) {
    console.log('Opening Quick View for product ID:', productId);
    
    const modal = document.getElementById('quickViewModal');
    if (!modal) {
        console.error('Quick View modal not found!');
        return;
    }

    // Find product from our products array
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Get current language
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    // Set modal content with translations
    const productImage = document.getElementById('modalProductImage');
    const productTitle = document.getElementById('modalProductTitle');
    const productPrice = document.getElementById('modalProductPrice');
    const productDescription = document.getElementById('modalProductDescription');
    const productRating = document.getElementById('modalProductRating');

    if (productImage) productImage.src = product.image;
    if (productTitle) productTitle.textContent = lang === 'en' ? product.title_en : product.title_ar;
    
    // Set price
    if (productPrice) {
        let priceHTML = `<span class="modal-price-current">${product.price}</span>`;
        if (product.originalPrice) {
            priceHTML += ` <span class="modal-price-original">${product.originalPrice}</span>`;
        }
        productPrice.innerHTML = priceHTML;
    }
    
    if (productDescription) productDescription.textContent = lang === 'en' ? product.description_en : product.description_ar;
    
    // Set rating
    if (productRating) {
        const starsHTML = generateStars(product.rating);
        productRating.innerHTML = `
            <div class="modal-stars">${starsHTML}</div>
            <span class="modal-rating-value">${product.ratingText}</span>
        `;
    }

    // Setup modal buttons WITH LOGIN CHECKS
    const addToCartBtn = document.getElementById('modalAddToCart');
    const addToWishlistBtn = document.getElementById('modalAddToWishlist');

    if (addToCartBtn) {
        addToCartBtn.textContent = trans.addToCart;
        
        addToCartBtn.onclick = function() {
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                closeQuickView();
                return;
            }
            
            const cartBtn = document.querySelector(`[data-nile-id="${productId}"], [data-treasure-id="${productId}"]`);
            if (cartBtn) {
                const actualCartBtn = cartBtn.closest('.nile-card, .treasure-card').querySelector('.nile-add-to-cart, .treasure-cart-btn');
                if (actualCartBtn) {
                    actualCartBtn.click();
                }
            }
            closeQuickView();
        };
    }

    if (addToWishlistBtn) {
        addToWishlistBtn.textContent = trans.addToWishlist;
        
        addToWishlistBtn.onclick = function() {
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                closeQuickView();
                return;
            }
            
            const wishlistBtn = document.querySelector(`.nile-wishlist-btn[data-nile-id="${productId}"], .treasure-wishlist[data-treasure-id="${productId}"]`);
            if (wishlistBtn) {
                wishlistBtn.click();
            }
            closeQuickView();
        };
    }

    // Show modal
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
    if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';

    return starsHTML;
}

// Close Quick View
function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Update cart count
function updateCartCount() {
    if (cartCountElement) {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = count;
        cartCountElement.classList.add('cart-update');
        setTimeout(() => {
            cartCountElement.classList.remove('cart-update');
        }, 300);
    }
}

// Update wishlist count
function updateWishlistCount() {
    if (wishlistCountElement) {
        wishlistCountElement.textContent = wishlistItems.length;
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
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1a2f3a;
        color: #e9d8b6;
        padding: 15px 25px;
        border: 2px solid #c19b53;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s ease;
        max-width: 350px;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.classList.add('show');
    }, 10);
    
    // Animate out after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Setup cart and wishlist links with login check
function setupCartAndWishlistLinks() {
    // Cart link - allow access even if not logged in
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                showLoginRequiredModal('cart');
            }
        });
    }
    
    // Wishlist link - allow access even if not logged in
    if (wishlistLink) {
        wishlistLink.addEventListener('click', function(e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                showLoginRequiredModal('wishlist');
            }
        });
    }
}

// Setup newsletter subscription
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = newsletterForm ? newsletterForm.querySelector('input[type="email"]') : null;
    
    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const lang = getCurrentLanguage();
            const trans = translations[lang];
            
            if (validateEmail(email)) {
                // Save to localStorage
                const newsletterSubscribers = JSON.parse(localStorage.getItem('egytopiaNewsletter') || '[]');
                if (!newsletterSubscribers.includes(email)) {
                    newsletterSubscribers.push(email);
                    localStorage.setItem('egytopiaNewsletter', JSON.stringify(newsletterSubscribers));
                }
                
                // Show success message
                showNotification(trans.successSubscribe);
                
                // Clear input
                emailInput.value = '';
            } else {
                // Show error message
                showNotification(trans.invalidEmail);
            }
        });
    }
}

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage.includes('collections.html') && href === 'collections.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Translate the entire page
function translatePage() {
    const lang = getCurrentLanguage();
    const trans = translations[lang];
    
    // Update RTL direction
    updateRTLDirection();
    
    // Update all translatable elements
    updateTextContent('[data-i18n="home"]', trans.home);
    updateTextContent('[data-i18n="collections"]', trans.collections);
    updateTextContent('[data-i18n="categories"]', trans.categories);
    updateTextContent('[data-i18n="userPortal"]', trans.userPortal);
    updateTextContent('[data-i18n="ourStory"]', trans.ourStory);
    updateTextContent('[data-i18n="contact"]', trans.contact);
    updateTextContent('[data-i18n="arabic"]', trans.arabic);
    
    // Page Header
    updateTextContent('[data-i18n="collectionsTitle"]', trans.collectionsTitle);
    updateTextContent('[data-i18n="collectionsDescription"]', trans.collectionsDescription);
    
    // Collection cards (these are updated in displayCollections)
    
    // New Collection Section
    updateTextContent('[data-i18n="newCollectionTitle"]', trans.newCollectionTitle);
    updateTextContent('[data-i18n="newCollectionSubtitle"]', trans.newCollectionSubtitle);
    updateTextContent('[data-i18n="viewAllNewArrivals"]', trans.viewAllNewArrivals);
    updateTextContent('[data-i18n="newBadge"]', trans.newBadge);
    updateTextContent('[data-i18n="trendingBadge"]', trans.trendingBadge);
    updateTextContent('[data-i18n="justInBadge"]', trans.justInBadge);
    updateTextContent('[data-i18n="fromLuxor"]', trans.fromLuxor);
    updateTextContent('[data-i18n="silkAswan"]', trans.silkAswan);
    updateTextContent('[data-i18n="artisanWorkshop"]', trans.artisanWorkshop);
    updateTextContent('[data-i18n="desertGoldCollection"]', trans.desertGoldCollection);
    updateTextContent('[data-i18n="desertGoldDescription"]', trans.desertGoldDescription);
    updateTextContent('[data-i18n="royalHeritageCollection"]', trans.royalHeritageCollection);
    updateTextContent('[data-i18n="royalHeritageDescription"]', trans.royalHeritageDescription);
    updateTextContent('[data-i18n="mysticPharaohCollection"]', trans.mysticPharaohCollection);
    updateTextContent('[data-i18n="mysticPharaohDescription"]', trans.mysticPharaohDescription);
    updateTextContent('[data-i18n="naturalTextures"]', trans.naturalTextures);
    updateTextContent('[data-i18n="handmadeArtisans"]', trans.handmadeArtisans);
    updateTextContent('[data-i18n="ecoFriendly"]', trans.ecoFriendly);
    updateTextContent('[data-i18n="premiumMaterials"]', trans.premiumMaterials);
    updateTextContent('[data-i18n="pharaohDesigns"]', trans.pharaohDesigns);
    updateTextContent('[data-i18n="giftCollectors"]', trans.giftCollectors);
    updateTextContent('[data-i18n="spiritualMotifs"]', trans.spiritualMotifs);
    updateTextContent('[data-i18n="modernAesthetic"]', trans.modernAesthetic);
    updateTextContent('[data-i18n="egyptianCreators"]', trans.egyptianCreators);
    
    // Best Sellers Section
    updateTextContent('[data-i18n="egyptianMasterpieces"]', trans.egyptianMasterpieces);
    updateTextContent('[data-i18n="bestSellingTreasures"]', trans.bestSellingTreasures);
    updateTextContent('[data-i18n="treasuresDescription"]', trans.treasuresDescription);
    updateTextContent('[data-i18n="bestsellerBadge"]', trans.bestsellerBadge);
    updateTextContent('[data-i18n="limitedBadge"]', trans.limitedBadge);
    updateTextContent('[data-i18n="popularBadge"]', trans.popularBadge);
    updateTextContent('[data-i18n="jewelryCollection"]', trans.jewelryCollectionB);
    updateTextContent('[data-i18n="goldenAnkhNecklace"]', trans.goldenAnkhNecklace);
    updateTextContent('[data-i18n="goldenAnkhDescription"]', trans.goldenAnkhDescription);
    updateTextContent('[data-i18n="sculpturesCategory"]', trans.sculpturesCategory);
    updateTextContent('[data-i18n="nefertitiBust"]', trans.nefertitiBust);
    updateTextContent('[data-i18n="nefertitiDescription"]', trans.nefertitiDescription);
    updateTextContent('[data-i18n="homeDecorCategory"]', trans.homeDecorCategory);
    updateTextContent('[data-i18n="hieroglyphicVase"]', trans.hieroglyphicVase);
    updateTextContent('[data-i18n="hieroglyphicDescription"]', trans.hieroglyphicDescription);
    updateTextContent('[data-i18n="savePercentage"]', trans.savePercentage);
    updateTextContent('[data-i18n="savePercentage25"]', trans.savePercentage25);
    updateTextContent('[data-i18n="savePercentage20"]', trans.savePercentage20);
    
    // Quick View & Buttons
    updateTextContent('[data-i18n="quickView"]', trans.quickView);
    updateTextContent('[data-i18n="addToCart"]', trans.addToCart);
    updateTextContent('[data-i18n="addToWishlist"]', trans.addToWishlist);
    
    // Footer
    updateTextContent('[data-i18n="egyptianHeritage"]', trans.egyptianHeritage);
    updateTextContent('[data-i18n="footerTagline"]', trans.footerTagline);
    updateTextContent('[data-i18n="quickLinks"]', trans.quickLinks);
    updateTextContent('[data-i18n="products"]', trans.productsFooter);
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
    
    // Update input placeholders
    updatePlaceholder('[data-i18n-placeholder="emailPlaceholder"]', trans.emailPlaceholder);
    
    // Update product-specific texts
    updateProductTexts();
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

// Update product texts based on language
function updateProductTexts() {
    const lang = getCurrentLanguage();
    
    // Update product cards
    products.forEach(product => {
        // Update Nile products
        const nileCard = document.querySelector(`[data-nile-id="${product.id}"]`);
        if (nileCard) {
            const titleElement = nileCard.closest('.nile-card').querySelector('.nile-product-title');
            const descriptionElement = nileCard.closest('.nile-card').querySelector('.nile-product-description');
            const originElement = nileCard.closest('.nile-card').querySelector('.nile-origin');
            
            if (titleElement) titleElement.textContent = lang === 'en' ? product.title_en : product.title_ar;
            if (descriptionElement) descriptionElement.textContent = lang === 'en' ? product.description_en : product.description_ar;
            if (originElement) originElement.textContent = lang === 'en' ? product.origin_en : product.origin_ar;
        }
        
        // Update Treasure products
        const treasureCard = document.querySelector(`[data-treasure-id="${product.id}"]`);
        if (treasureCard) {
            const titleElement = treasureCard.closest('.treasure-card').querySelector('.treasure-title');
            const descriptionElement = treasureCard.closest('.treasure-card').querySelector('.treasure-description');
            
            if (titleElement) titleElement.textContent = lang === 'en' ? product.title_en : product.title_ar;
            if (descriptionElement) descriptionElement.textContent = lang === 'en' ? product.description_en : product.description_ar;
        }
    });
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
            
            // Show notification
            showNotification(currentLanguage === 'en' ? 
                translations.en.langChangedToEnglish : 
                translations.ar.langChangedToArabic);
            
            // Translate the entire page
            translatePage();
            
            // Re-render collections
            displayCollections();
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

// Export functions for use in other scripts if needed
window.collectionsModule = {
    isUserLoggedIn,
    getCurrentLanguage,
    showLoginRequiredModal,
    addToCart,
    toggleWishlist,
    showQuickView,
    closeQuickView,
    translatePage
};