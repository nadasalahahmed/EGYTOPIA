
    // ==============================
    // TRANSLATIONS
    // ==============================
    let currentLanguage = 'en'; // Default language
    const translations = {
        en: {
            // Navigation
            home: "Home",
            collections: "Collections",
            categories: "Categories",
            userPortal: "User Portal",
            ourStory: "Our Story",
            contact: "Contact",
            
            english: "English",
            arabic: "العربية",
            
            // Auth Section
            joinCommunity: "Join Egytopia Community",
            authSubtitle: "Discover authentic Egyptian crafts or share your own creations. Choose your path below.",
            iWantTo: "I want to:",
            shopAsCustomer: "Shop as Customer",
            shopDescription: "Browse and purchase authentic Egyptian crafts",
            sellAsArtisan: "Sell as Artisan",
            artisanDescription: "Showcase and sell your handmade Egyptian crafts",
            continue: "Continue",
            
            // Features
            authenticProducts: "Authentic Products",
            authenticDesc: "Discover genuine Egyptian handmade crafts",
            easyShopping: "Easy Shopping",
            shoppingDesc: "Seamless browsing and secure checkout",
            supportArtisans: "Support Artisans",
            supportDesc: "Directly support Egyptian craftspeople",
            showcaseProducts: "Showcase Your Products",
            showcaseDesc: "Display your crafts to a global audience",
            earnFromCraft: "Earn From Your Craft",
            earnDesc: "Get fair compensation for your work",
            joinCommunity: "Join a Community",
            communityDesc: "Connect with fellow Egyptian artisans",
            
            // Forms
            welcomeBack: "Welcome Back",
            signInAccount: "Sign in to your account",
            signIn: "Sign In",
            signUp: "Sign Up",
            welcomeEgytopia: "Welcome to Egytopia",
            signInShopping: "Sign in to start shopping",
            welcomeArtisan: "Welcome to Artisan Portal",
            signInManage: "Sign in to manage your crafts",
            joinEgytopia: "Join Egytopia",
            createShopping: "Create your shopping account",
            joinOurCommunity: "Join Our Community",
            createArtisan: "Create your artisan account",
            
            // Form Labels
            emailAddress: "Email Address",
            enterEmail: "Enter your email",
            password: "Password",
            enterPassword: "Enter your password",
            fullName: "Full Name",
            enterFullName: "Enter your full name (letters and spaces only)",
            createPassword: "Create a secure password",
            confirmPassword: "Confirm Password",
            confirmYourPassword: "Confirm your password",
            
            // Buttons
            signInBtn: "Sign In",
            createAccount: "Create Account",
            dontHaveAccount: "Don't have an account?",
            signUpHere: "Sign up here",
            alreadyHaveAccount: "Already have an account?",
            signInHere: "Sign in here",
            
            // Validation Messages
            nameRequired: "Name is required",
            nameValid: "Name should contain only letters and spaces (min 2 characters)",
            nameGood: "✓ Name looks good!",
            emailRequired: "Email is required",
            emailValid: "Please enter a valid email address",
            emailGood: "✓ Email looks good!",
            passwordRequired: "Password is required",
            passwordWeak: "Password does not meet all requirements",
            passwordStrong: "✓ Password is strong!",
            confirmRequired: "Please confirm your password",
            passwordsMatch: "Passwords do not match",
            passwordsGood: "✓ Passwords match!",
            
            // Password Requirements
            lengthReq: "At least 8 characters",
            letterReq: "Contains letters",
            numberReq: "Contains numbers",
            specialReq: "Contains special character (@$!%*#?&)",
            
            // Dashboard
            welcomeBack: "Welcome Back!",
            enjoyShopping: "Enjoy shopping authentic Egyptian crafts",
            customer: "Customer",
            wishlistItems: "Wishlist Items",
            cartItems: "Cart Items",
            goToHome: "Go to Home",
            shopNow: "Shop Now",
            signOut: "Sign Out",
            quickActions: "Quick Actions",
            browseCollections: "Browse Collections",
            discoverUnique: "Discover unique Egyptian crafts",
            myWishlist: "My Wishlist",
            viewSaved: "View your saved items",
            myCart: "My Cart",
            reviewCart: "Review your shopping cart",
            becomeArtisan: "Become an Artisan",
            startSelling: "Start selling your crafts",
            recommendedForYou: "Recommended for You",
            startExploring: "Start Exploring",
            browseCollectionsDesc: "Browse our collections to see personalized recommendations",
            exploreProducts: "Explore Products",
            
            // Artisan Dashboard
            artisanDashboard: "Artisan Dashboard",
            manageProducts: "Manage your products and profile",
            artisan: "Artisan",
            products: "Products",
            sales: "Sales",
            addNewProduct: "Add New Product",
            myProducts: "My Products",
            noProducts: "No Products Yet",
            startByAdding: "Start by adding your first product to showcase your craft.",
            addFirstProduct: "Add Your First Product",
            
            // Product Modal
            addNewProduct: "Add New Product",
            editProduct: "Edit Product",
            productImage: "Product Image",
            noImageSelected: "No image selected",
            chooseImage: "Choose Image",
            productName: "Product Name",
            enterProductName: "Enter product name",
            priceEGP: "Price (EGP)",
            enterPrice: "Enter price in EGP",
            description: "Description",
            enterDescription: "Enter product description",
            category: "Category",
            selectCategory: "Select a category",
            cancel: "Cancel",
            updateProduct: "Update Product",
            addProduct: "Add Product",
            deleteProduct: "Delete Product",
            
            // Categories
            jewelry: "Jewelry",
            art: "Art",
            textiles: "Textiles",
            sculptures: "Sculptures",
            homeDecor: "Home Decor",
            traditionalCrafts: "Traditional Crafts",
            agricultural: "Agricultural Products",
            handmade: "Handmade Goods",
            
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
            copyright: "© 2025 EGYTOPIA Egyptian Heritage. All rights reserved.",
            
            // Notifications
            selectUserType: "Please select a user type first!",
            invalidCredentials: "Invalid email or password. Please try again.",
            userExists: "User with this email already exists! Please use a different email or sign in.",
            welcomeUser: "Successfully signed in! Welcome back, {name}!",
            accountCreated: "Account created successfully! Welcome to Egytopia, {name}!",
            signedOut: "Successfully signed out!",
            pleaseSignIn: "Please sign in to access your artisan profile",
            pleaseSignInEarn: "Please sign in to start earning from your craft",
            pleaseSignInCommunity: "Please sign in to join our artisan community",
            switchArtisan: "Do you want to switch to artisan account? You will need to sign up as an artisan.",
            fillAllFields: "Please fill in all fields",
            fixValidation: "Please fix the validation errors before submitting.",
            productAdded: "Product added successfully! It will appear in the {category} category.",
            productUpdated: "Product updated successfully!",
            productDeleted: "Product deleted successfully!",
            validImage: "Please select a valid image file (JPEG, PNG, GIF, WebP)",
            imageSize: "Image size should be less than 5MB",
            enterProductName: "Please enter product name!",
            validPrice: "Please enter a valid price!",
            enterDescription: "Please enter product description!",
            selectCategory: "Please select a category!",
            selectImage: "Please select a product image!",
            deleteConfirm: "Are you sure you want to delete this product? This action cannot be undone.",
            errorReading: "Error reading image file. Please try again."
        },
        ar: {
            // Navigation
            home: "الرئيسية",
            collections: "المجموعات",
            categories: "الفئات",
            userPortal: "بوابة المستخدم",
            ourStory: "قصتنا",
            contact: "اتصل بنا",
            
            // Language
            arabic: "English",
            english: "العربية",
            
            // Auth Section
            joinCommunity: "انضم إلى مجتمع إيجيتوبيا",
            authSubtitle: "اكتشف الحرف المصرية الأصيلة أو شارك إبداعاتك. اختر طريقك أدناه.",
            iWantTo: "أريد أن:",
            shopAsCustomer: "تسوق كعميل",
            shopDescription: "تصفح واشترِ الحرف المصرية الأصيلة",
            sellAsArtisan: "بيع كحرفي",
            artisanDescription: "اعرض وبيع حرفك اليدوية المصرية",
            continue: "متابعة",
            
            // Features
            authenticProducts: "منتجات أصلية",
            authenticDesc: "اكتشف الحرف اليدوية المصرية الأصيلة",
            easyShopping: "تسوق سهل",
            shoppingDesc: "تصفح سلس وخروج آمن",
            supportArtisans: "ادعم الحرفيين",
            supportDesc: "ادعم الحرفيين المصريين مباشرة",
            showcaseProducts: "اعرض منتجاتك",
            showcaseDesc: "اعرض حرفك لجمهور عالمي",
            earnFromCraft: "اربح من حرفتك",
            earnDesc: "احصل على تعويض عادل عن عملك",
            joinCommunity: "انضم لمجتمع",
            communityDesc: "تواصل مع زملائك الحرفيين المصريين",
            
            // Forms
            welcomeBack: "مرحباً بعودتك",
            signInAccount: "سجل الدخول إلى حسابك",
            signIn: "تسجيل الدخول",
            signUp: "إنشاء حساب",
            welcomeEgytopia: "مرحباً بك في إيجيتوبيا",
            signInShopping: "سجل الدخول لبدء التسوق",
            welcomeArtisan: "مرحباً بك في بوابة الحرفي",
            signInManage: "سجل الدخول لإدارة حرفك",
            joinEgytopia: "انضم إلى إيجيتوبيا",
            createShopping: "أنشئ حساب تسوق خاص بك",
            joinOurCommunity: "انضم إلى مجتمعنا",
            createArtisan: "أنشئ حساب حرفي خاص بك",
            
            // Form Labels
            emailAddress: "البريد الإلكتروني",
            enterEmail: "أدخل بريدك الإلكتروني",
            password: "كلمة المرور",
            enterPassword: "أدخل كلمة المرور",
            fullName: "الاسم الكامل",
            enterFullName: "أدخل اسمك الكامل (أحرف ومسافات فقط)",
            createPassword: "أنشئ كلمة مرور آمنة",
            confirmPassword: "تأكيد كلمة المرور",
            confirmYourPassword: "أكد كلمة المرور",
            
            // Buttons
            signInBtn: "تسجيل الدخول",
            createAccount: "إنشاء حساب",
            dontHaveAccount: "ليس لديك حساب؟",
            signUpHere: "سجل هنا",
            alreadyHaveAccount: "لديك حساب بالفعل؟",
            signInHere: "سجل الدخول هنا",
            
            // Validation Messages
            nameRequired: "الاسم مطلوب",
            nameValid: "يجب أن يحتوي الاسم على أحرف ومسافات فقط (حد أدنى حرفين)",
            nameGood: "✓ الاسم جيد!",
            emailRequired: "البريد الإلكتروني مطلوب",
            emailValid: "الرجاء إدخال بريد إلكتروني صحيح",
            emailGood: "✓ البريد الإلكتروني جيد!",
            passwordRequired: "كلمة المرور مطلوبة",
            passwordWeak: "كلمة المرور لا تستوفي جميع المتطلبات",
            passwordStrong: "✓ كلمة المرور قوية!",
            confirmRequired: "الرجاء تأكيد كلمة المرور",
            passwordsMatch: "كلمات المرور غير متطابقة",
            passwordsGood: "✓ كلمات المرور متطابقة!",
            
            // Password Requirements
            lengthReq: "8 أحرف على الأقل",
            letterReq: "تحتوي على أحرف",
            numberReq: "تحتوي على أرقام",
            specialReq: "تحتوي على رمز خاص (@$!%*#?&)",
            
            // Dashboard
            welcomeBack: "مرحباً بعودتك!",
            enjoyShopping: "استمتع بالتسوق للحرف المصرية الأصيلة",
            customer: "عميل",
            wishlistItems: "عناصر قائمة الرغبات",
            cartItems: "عناصر السلة",
            goToHome: "اذهب إلى الرئيسية",
            shopNow: "تسوق الآن",
            signOut: "تسجيل الخروج",
            quickActions: "إجراءات سريعة",
            browseCollections: "تصفح المجموعات",
            discoverUnique: "اكتشف الحرف المصرية الفريدة",
            myWishlist: "قائمتي للمفضلة",
            viewSaved: "عرض العناصر المحفوظة",
            myCart: "سلة التسوق",
            reviewCart: "راجع سلة التسوق الخاصة بك",
            becomeArtisan: "كن حرفياً",
            startSelling: "ابدأ بيع حرفك",
            recommendedForYou: "موصى به لك",
            startExploring: "ابدأ الاستكشاف",
            browseCollectionsDesc: "تصفح مجموعاتنا لترى توصيات مخصصة",
            exploreProducts: "استكشف المنتجات",
            
            // Artisan Dashboard
            artisanDashboard: "لوحة تحكم الحرفي",
            manageProducts: "إدارة منتجاتك وملفك الشخصي",
            artisan: "حرفي",
            products: "المنتجات",
            sales: "المبيعات",
            addNewProduct: "إضافة منتج جديد",
            myProducts: "منتجاتي",
            noProducts: "لا توجد منتجات بعد",
            startByAdding: "ابدأ بإضافة منتجك الأول لعرض حرفتك.",
            addFirstProduct: "أضف منتجك الأول",
            
            // Product Modal
            addNewProduct: "إضافة منتج جديد",
            editProduct: "تعديل المنتج",
            productImage: "صورة المنتج",
            noImageSelected: "لم يتم اختيار صورة",
            chooseImage: "اختر صورة",
            productName: "اسم المنتج",
            enterProductName: "أدخل اسم المنتج",
            priceEGP: "السعر (جنيه مصري)",
            enterPrice: "أدخل السعر بالجنيه المصري",
            description: "الوصف",
            enterDescription: "أدخل وصف المنتج",
            category: "الفئة",
            selectCategory: "اختر فئة",
            cancel: "إلغاء",
            updateProduct: "تحديث المنتج",
            addProduct: "إضافة المنتج",
            deleteProduct: "حذف المنتج",
            
            // Categories
            jewelry: "مجوهرات",
            art: "فن",
            textiles: "منسوجات",
            sculptures: "منحوتات",
            homeDecor: "ديكور منزلي",
            traditionalCrafts: "حرف تقليدية",
            agricultural: "منتجات زراعية",
            handmade: "سلع يدوية",
            
            // Footer
            footerTitle: "EGYTOPIA",
            egyptianHeritage: "التراث المصري",
            footerTagline: "نحمل جمال الحرف اليدوية المصرية الخالدة إلى العالم.",
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
            phone: "٧٨٩٠ ٥٦٤ ٣٢١ ٢٠+",
            email: "info@egytopia.eg",
            subscribeNewsletter: "اشترك في نشرتنا الإخبارية",
            newsletterDesc: "احصل على عروض حصرية وتحديثات حول المنتجات الجديدة",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            subscribe: "اشترك",
            newsletterNote: "بالتسجيل، أنت توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات من شركتنا.",
            copyright: "© EGYTOPIA 2025 التراث المصري. جميع الحقوق محفوظة.",
            
            // Notifications
            selectUserType: "الرجاء اختيار نوع المستخدم أولاً!",
            invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة. حاول مرة أخرى.",
            userExists: "يوجد مستخدم بهذا البريد الإلكتروني بالفعل! استخدم بريداً مختلفاً أو سجل الدخول.",
            welcomeUser: "تم تسجيل الدخول بنجاح! مرحباً بعودتك، {name}!",
            accountCreated: "تم إنشاء الحساب بنجاح! مرحباً بك في إيجيتوبيا، {name}!",
            signedOut: "تم تسجيل الخروج بنجاح!",
            pleaseSignIn: "الرجاء تسجيل الدخول للوصول إلى ملف الحرفي الخاص بك",
            pleaseSignInEarn: "الرجاء تسجيل الدخول لبدء الربح من حرفتك",
            pleaseSignInCommunity: "الرجاء تسجيل الدخول للانضمام إلى مجتمع الحرفيين الخاص بنا",
            switchArtisan: "هل تريد التبديل إلى حساب حرفي؟ ستحتاج إلى التسجيل كحرفي.",
            fillAllFields: "الرجاء ملء جميع الحقول",
            fixValidation: "الرجاء إصلاح أخطاء التحقق قبل الإرسال.",
            productAdded: "تمت إضافة المنتج بنجاح! سيظهر في فئة {category}.",
            productUpdated: "تم تحديث المنتج بنجاح!",
            productDeleted: "تم حذف المنتج بنجاح!",
            validImage: "الرجاء اختيار ملف صورة صالح (JPEG, PNG, GIF, WebP)",
            imageSize: "يجب أن يكون حجم الصورة أقل من 5 ميجابايت",
            enterProductName: "الرجاء إدخال اسم المنتج!",
            validPrice: "الرجاء إدخال سعر صحيح!",
            enterDescription: "الرجاء إدخال وصف المنتج!",
            selectCategory: "الرجاء اختيار فئة!",
            selectImage: "الرجاء اختيار صورة المنتج!",
            deleteConfirm: "هل أنت متأكد أنك تريد حذف هذا المنتج؟ لا يمكن التراجع عن هذا الإجراء.",
            errorReading: "خطأ في قراءة ملف الصورة. حاول مرة أخرى."
        }
    };

    // ==============================
    // INITIALIZATION
    // ==============================
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded, initializing Egytopia User Portal...');
        
        // Initialize language
        initLanguage();
        
        // Initialize storage
        initializeStorage();
        
        // Check authentication status
        checkAuthStatus();
        
        // Setup event listeners
        setupEventListeners();
        
        // Setup form validation
        setupFormValidation();
        
        console.log('Initialization complete');
    });

    // ==============================
    // LANGUAGE MANAGEMENT
    // ==============================
    function initLanguage() {
        console.log('Initializing language...');
        
        const savedLang = localStorage.getItem('egytopiaLanguage') || 'en';
        setLanguage(savedLang);
    }

    function setLanguage(lang) {
        console.log('Setting language to:', lang);
        
        // Save to localStorage
        localStorage.setItem('egytopiaLanguage', lang);
        
        // Update button text
        const langToggle = document.getElementById('langToggle');
        const langText = langToggle.querySelector('.lang-text');
        
        if (lang === 'en') {
            langText.textContent = translations['en']['arabic']; // Show "العربية" when in English mode
            document.body.classList.remove('rtl');
            document.body.dir = 'ltr';
        } else {
            langText.textContent = translations['ar']['english']; // Show "English" when in Arabic mode
            document.body.classList.add('rtl');
            document.body.dir = 'rtl';
        }
        
        // Apply translations
        applyTranslations(lang);
        
        // Update form titles
        updateFormTitles();
        
        // Update product modal if open
        const productModal = document.getElementById('productModal');
        if (productModal && productModal.classList.contains('active')) {
            updateProductModalTranslations(lang);
        }
    }

    function applyTranslations(lang) {
        const t = translations[lang];
        
        // Apply translations to all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Apply placeholder translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });
        
        // Apply title translations
        document.title = `User Portal - Egytopia`;
        
        // Update dynamic text elements that don't have data-i18n
        updateDynamicTexts(lang);
    }

    function updateDynamicTexts(lang) {
        const t = translations[lang];
        
        // Update form validation messages if they exist
        const validationMessages = {
            nameValidation: document.getElementById('nameValidation'),
            emailValidation: document.getElementById('emailValidation'),
            passwordValidation: document.getElementById('passwordValidation'),
            confirmPasswordValidation: document.getElementById('confirmPasswordValidation')
        };
        
        // Update product cards if they exist
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const editBtn = card.querySelector('.edit-product');
            const deleteBtn = card.querySelector('.delete-product');
            
            if (editBtn && editBtn.textContent.includes('Edit')) {
                editBtn.innerHTML = `<i class="fas fa-edit"></i> ${t.editProduct}`;
            }
            if (deleteBtn && deleteBtn.textContent.includes('Delete')) {
                deleteBtn.innerHTML = `<i class="fas fa-trash"></i> ${t.deleteProduct}`;
            }
        });
    }

    // ==============================
    // EVENT LISTENERS SETUP
    // ==============================
    function setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function() {
                const currentLang = localStorage.getItem('egytopiaLanguage') || 'en';
                const newLang = currentLang === 'en' ? 'ar' : 'en';
                setLanguage(newLang);
            });
        }
        
        // Mobile navigation
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

            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (navMenu.classList.contains('active') && 
                    !navMenu.contains(event.target) && 
                    !navToggle.contains(event.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }
        
        // Scroll effects
        const header = document.querySelector('.header');
        if (header) {
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
        
        // User type selection
        setupUserTypeSelection();
        
        // Auth forms
        setupAuthForms();
        
        // Dashboard functionality
        setupDashboard();
        
        // Profile functionality
        setupProfile();
    }

    // ==============================
    // USER TYPE SELECTION
    // ==============================
    function setupUserTypeSelection() {
        const typeOptions = document.querySelectorAll('.type-option');
        const continueBtn = document.getElementById('continueBtn');
        const userTypeInput = document.getElementById('userType');
        const userTypeSelector = document.getElementById('userTypeSelector');
        const authFormContainer = document.getElementById('authFormContainer');
        const customerFeatures = document.getElementById('customerFeatures');
        const artisanFeatures = document.getElementById('artisanFeatures');
        
        let selectedUserType = null;
        
        if (typeOptions && typeOptions.length > 0) {
            typeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    typeOptions.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    selectedUserType = this.getAttribute('data-type');
                    userTypeInput.value = selectedUserType;
                    
                    continueBtn.disabled = false;
                    
                    // Update features display
                    if (selectedUserType === 'customer') {
                        if (artisanFeatures) artisanFeatures.style.display = 'none';
                        if (customerFeatures) {
                            customerFeatures.style.display = 'grid';
                            setTimeout(() => {
                                customerFeatures.style.opacity = '1';
                            }, 10);
                        }
                    } else {
                        if (customerFeatures) customerFeatures.style.display = 'none';
                        if (artisanFeatures) {
                            artisanFeatures.style.display = 'grid';
                            setTimeout(() => {
                                artisanFeatures.style.opacity = '1';
                            }, 10);
                        }
                    }
                    
                    // Update form titles
                    updateFormTitles();
                });
            });
        }
        
        if (continueBtn) {
            continueBtn.addEventListener('click', function() {
                if (selectedUserType) {
                    if (authFormContainer) {
                        authFormContainer.style.display = 'block';
                        setTimeout(() => {
                            authFormContainer.style.opacity = '1';
                            authFormContainer.style.transform = 'translateY(0)';
                        }, 10);
                    }
                    
                    if (userTypeSelector) {
                        userTypeSelector.style.opacity = '0';
                        userTypeSelector.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            userTypeSelector.style.display = 'none';
                        }, 300);
                    }
                    
                    // Scroll to form
                    authFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    showNotification('selectUserType', 'warning');
                }
            });
        }
    }

    // ==============================
    // AUTH FORMS
    // ==============================
    function setupAuthForms() {
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const signinForm = document.getElementById('signinForm');
        const signupForm = document.getElementById('signupForm');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToSignin = document.getElementById('switchToSignin');
        
        // Auth tabs functionality
        if (authTabs && authTabs.length > 0) {
            authTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    const tabName = tab.getAttribute('data-tab');
                    
                    authTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    authForms.forEach(form => {
                        form.classList.remove('active');
                        if (form.id === `${tabName}Form`) {
                            form.classList.add('active');
                        }
                    });
                    
                    updateFormTitles();
                });
            });
        }
        
        // Switch between sign in and sign up
        if (switchToSignup) {
            switchToSignup.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('[data-tab="signup"]').click();
            });
        }
        
        if (switchToSignin) {
            switchToSignin.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('[data-tab="signin"]').click();
            });
        }
        
        // Sign in form submission
        if (signinForm) {
            signinForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('signinEmail').value.trim();
                const password = document.getElementById('signinPassword').value;
                
                if (!email || !password) {
                    showNotification('fillAllFields', 'error');
                    return;
                }
                
                const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
                const user = users.find(u => u.email === email && u.password === password);
                
                if (user) {
                    currentUser = user;
                    localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
                    
                    updateNavigationBar();
                    
                    if (currentUser.userType === 'artisan') {
                        showProfile();
                    } else {
                        showCustomerDashboard();
                    }
                    
                    const lang = localStorage.getItem('egytopiaLanguage') || 'en';
                    showNotification('welcomeUser', 'success', { name: user.name });
                } else {
                    showNotification('invalidCredentials', 'error');
                }
            });
        }
        
        // Sign up form submission
        if (signupForm) {
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('signupName').value.trim();
                const email = document.getElementById('signupEmail').value.trim();
                const password = document.getElementById('signupPassword').value;
                const confirmPassword = document.getElementById('signupConfirmPassword').value;
                const userType = document.getElementById('userType').value;
                
                if (!validateName(name) || !validateEmail(email) || !validatePassword(password) || !validateConfirmPassword(confirmPassword)) {
                    showNotification('fixValidation', 'error');
                    return;
                }
                
                if (!userType) {
                    showNotification('selectUserType', 'error');
                    return;
                }
                
                if (password !== confirmPassword) {
                    showNotification('passwordsMatch', 'error');
                    return;
                }
                
                // Check if user already exists
                const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
                if (users.find(u => u.email === email)) {
                    showNotification('userExists', 'error');
                    return;
                }
                
                // Create new user
                const newUser = {
                    id: Date.now(),
                    name,
                    email,
                    password,
                    userType,
                    joined: new Date().toISOString()
                };
                
                // Save user
                users.push(newUser);
                localStorage.setItem('egytopiaUsers', JSON.stringify(users));
                
                currentUser = newUser;
                localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
                
                updateNavigationBar();
                
                if (currentUser.userType === 'artisan') {
                    showProfile();
                } else {
                    showCustomerDashboard();
                }
                
                const lang = localStorage.getItem('egytopiaLanguage') || 'en';
                showNotification('accountCreated', 'success', { name: name });
            });
        }
    }

    // ==============================
    // FORM VALIDATION
    // ==============================
    function setupFormValidation() {
        // Name validation
        const signupName = document.getElementById('signupName');
        if (signupName) {
            signupName.addEventListener('input', function() {
                validateName(this.value);
            });
        }
        
        // Email validation
        const signupEmail = document.getElementById('signupEmail');
        if (signupEmail) {
            signupEmail.addEventListener('input', function() {
                validateEmail(this.value);
            });
        }
        
        // Password validation
        const signupPassword = document.getElementById('signupPassword');
        if (signupPassword) {
            signupPassword.addEventListener('input', function() {
                validatePassword(this.value);
            });
            signupPassword.addEventListener('focus', function() {
                showPasswordRequirements();
            });
        }
        
        // Confirm password validation
        const signupConfirmPassword = document.getElementById('signupConfirmPassword');
        if (signupConfirmPassword) {
            signupConfirmPassword.addEventListener('input', function() {
                validateConfirmPassword(this.value);
            });
        }
    }

    function validateName(name) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const nameInput = document.getElementById('signupName');
        const nameValidation = document.getElementById('nameValidation');
        
        if (!nameInput || !nameValidation) return false;
        
        nameInput.classList.remove('valid', 'invalid');
        nameValidation.classList.remove('valid', 'invalid');
        nameValidation.style.display = 'none';
        
        if (!name.trim()) {
            nameInput.classList.add('invalid');
            nameValidation.textContent = t.nameRequired;
            nameValidation.classList.add('invalid');
            nameValidation.style.display = 'block';
            return false;
        }
        
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        if (!nameRegex.test(name)) {
            nameInput.classList.add('invalid');
            nameValidation.textContent = t.nameValid;
            nameValidation.classList.add('invalid');
            nameValidation.style.display = 'block';
            return false;
        }
        
        nameInput.classList.add('valid');
        nameValidation.textContent = t.nameGood;
        nameValidation.classList.add('valid');
        nameValidation.style.display = 'block';
        return true;
    }

    function validateEmail(email) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const emailInput = document.getElementById('signupEmail');
        const emailValidation = document.getElementById('emailValidation');
        
        if (!emailInput || !emailValidation) return false;
        
        emailInput.classList.remove('valid', 'invalid');
        emailValidation.classList.remove('valid', 'invalid');
        emailValidation.style.display = 'none';
        
        if (!email.trim()) {
            emailInput.classList.add('invalid');
            emailValidation.textContent = t.emailRequired;
            emailValidation.classList.add('invalid');
            emailValidation.style.display = 'block';
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add('invalid');
            emailValidation.textContent = t.emailValid;
            emailValidation.classList.add('invalid');
            emailValidation.style.display = 'block';
            return false;
        }
        
        emailInput.classList.add('valid');
        emailValidation.textContent = t.emailGood;
        emailValidation.classList.add('valid');
        emailValidation.style.display = 'block';
        return true;
    }

    function validatePassword(password) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const passwordInput = document.getElementById('signupPassword');
        const passwordValidation = document.getElementById('passwordValidation');
        
        if (!passwordInput || !passwordValidation) return false;
        
        passwordInput.classList.remove('valid', 'invalid');
        passwordValidation.classList.remove('valid', 'invalid');
        passwordValidation.style.display = 'none';
        
        if (!password) {
            passwordInput.classList.add('invalid');
            passwordValidation.textContent = t.passwordRequired;
            passwordValidation.classList.add('invalid');
            passwordValidation.style.display = 'block';
            updatePasswordRequirements(password);
            return false;
        }
        
        const hasMinLength = password.length >= 8;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[@$!%*#?&]/.test(password);
        
        updatePasswordRequirements(password);
        
        if (!hasMinLength || !hasLetter || !hasNumber || !hasSpecialChar) {
            passwordInput.classList.add('invalid');
            passwordValidation.textContent = t.passwordWeak;
            passwordValidation.classList.add('invalid');
            passwordValidation.style.display = 'block';
            return false;
        }
        
        passwordInput.classList.add('valid');
        passwordValidation.textContent = t.passwordStrong;
        passwordValidation.classList.add('valid');
        passwordValidation.style.display = 'block';
        return true;
    }

    function validateConfirmPassword(confirmPassword) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const confirmPasswordInput = document.getElementById('signupConfirmPassword');
        const confirmPasswordValidation = document.getElementById('confirmPasswordValidation');
        const password = document.getElementById('signupPassword')?.value;
        
        if (!confirmPasswordInput || !confirmPasswordValidation) return false;
        
        confirmPasswordInput.classList.remove('valid', 'invalid');
        confirmPasswordValidation.classList.remove('valid', 'invalid');
        confirmPasswordValidation.style.display = 'none';
        
        if (!confirmPassword) {
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordValidation.textContent = t.confirmRequired;
            confirmPasswordValidation.classList.add('invalid');
            confirmPasswordValidation.style.display = 'block';
            return false;
        }
        
        if (confirmPassword !== password) {
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordValidation.textContent = t.passwordsMatch;
            confirmPasswordValidation.classList.add('invalid');
            confirmPasswordValidation.style.display = 'block';
            return false;
        }
        
        confirmPasswordInput.classList.add('valid');
        confirmPasswordValidation.textContent = t.passwordsGood;
        confirmPasswordValidation.classList.add('valid');
        confirmPasswordValidation.style.display = 'block';
        return true;
    }

    function showPasswordRequirements() {
        const passwordRequirements = document.querySelector('.password-requirements');
        if (passwordRequirements) {
            passwordRequirements.classList.add('show');
        }
    }

    function updatePasswordRequirements(password) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const requirements = {
            length: document.getElementById('lengthReq'),
            letter: document.getElementById('letterReq'),
            number: document.getElementById('numberReq'),
            special: document.getElementById('specialReq')
        };
        
        if (!password) {
            Object.values(requirements).forEach(req => {
                if (req) {
                    req.classList.remove('met', 'unmet', 'highlight');
                    const icon = req.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-circle';
                    }
                }
            });
            return;
        }
        
        const checks = {
            length: password.length >= 8,
            letter: /[a-zA-Z]/.test(password),
            number: /\d/.test(password),
            special: /[@$!%*#?&]/.test(password)
        };
        
        Object.keys(requirements).forEach(key => {
            const req = requirements[key];
            if (!req) return;
            
            req.classList.remove('met', 'unmet', 'highlight');
            
            const icon = req.querySelector('i');
            if (!icon) return;
            
            if (checks[key]) {
                req.classList.add('met');
                icon.className = 'fas fa-check-circle';
                
                if (password.length > 0) {
                    req.classList.add('highlight');
                    setTimeout(() => {
                        req.classList.remove('highlight');
                    }, 500);
                }
            } else {
                req.classList.add('unmet');
                icon.className = 'fas fa-times-circle';
            }
        });
    }

    // ==============================
    // DASHBOARD FUNCTIONALITY
    // ==============================
    function setupDashboard() {
        const customerLogoutBtn = document.getElementById('customerLogoutBtn');
        const switchToArtisan = document.getElementById('switchToArtisan');
        
        if (customerLogoutBtn) {
            customerLogoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
            });
        }
        
        if (switchToArtisan) {
            switchToArtisan.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = localStorage.getItem('egytopiaLanguage') || 'en';
                const t = translations[lang];
                
                if (confirm(t.switchArtisan)) {
                    logoutUser();
                    setTimeout(() => {
                        const typeOptions = document.querySelectorAll('.type-option');
                        typeOptions.forEach(opt => {
                            if (opt.getAttribute('data-type') === 'artisan') {
                                opt.click();
                            }
                        });
                        const continueBtn = document.getElementById('continueBtn');
                        if (continueBtn) continueBtn.click();
                    }, 100);
                }
            });
        }
    }

    // ==============================
    // PROFILE FUNCTIONALITY
    // ==============================
    function setupProfile() {
        const artisanLogoutBtn = document.getElementById('artisanLogoutBtn');
        const addProductBtn = document.getElementById('addProductBtn');
        const addFirstProductBtn = document.getElementById('addFirstProductBtn');
        const closeProductModal = document.getElementById('closeProductModal');
        const cancelProductBtn = document.getElementById('cancelProductBtn');
        const saveProductBtn = document.getElementById('saveProductBtn');
        const uploadImageBtn = document.getElementById('uploadImageBtn');
        const productImage = document.getElementById('productImage');
        const productModal = document.getElementById('productModal');
        
        if (artisanLogoutBtn) {
            artisanLogoutBtn.addEventListener('click', function() {
                logoutUser();
            });
        }
        
        if (addProductBtn) {
            addProductBtn.addEventListener('click', function() {
                openProductModal();
            });
        }
        
        if (addFirstProductBtn) {
            addFirstProductBtn.addEventListener('click', function() {
                openProductModal();
            });
        }
        
        if (closeProductModal) {
            closeProductModal.addEventListener('click', closeProductModalFunc);
        }
        
        if (cancelProductBtn) {
            cancelProductBtn.addEventListener('click', closeProductModalFunc);
        }
        
        if (uploadImageBtn) {
            uploadImageBtn.addEventListener('click', function() {
                if (productImage) productImage.click();
            });
        }
        
        if (productImage) {
            productImage.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
                    if (!validTypes.includes(file.type)) {
                        showNotification('validImage', 'error');
                        this.value = '';
                        return;
                    }
                    
                    if (file.size > 5 * 1024 * 1024) {
                        showNotification('imageSize', 'error');
                        this.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const imagePreview = document.getElementById('imagePreview');
                        if (imagePreview) {
                            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Product preview">`;
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        if (saveProductBtn) {
            saveProductBtn.addEventListener('click', saveProduct);
        }
        
        if (productModal) {
            productModal.addEventListener('click', function(e) {
                if (e.target === productModal) {
                    closeProductModalFunc();
                }
            });
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && productModal.classList.contains('active')) {
                closeProductModalFunc();
            }
        });
    }

    // ==============================
    // STORAGE MANAGEMENT
    // ==============================
    function initializeStorage() {
        console.log('Initializing storage...');
        
        if (!localStorage.getItem('egytopiaUsers')) {
            const testUsers = [
                {
                    id: 1,
                    name: 'Test Customer',
                    email: 'customer@example.com',
                    password: 'Password123!',
                    userType: 'customer',
                    joined: new Date().toISOString()
                },
                {
                    id: 2,
                    name: 'Test Artisan',
                    email: 'artisan@example.com',
                    password: 'Password123!',
                    userType: 'artisan',
                    joined: new Date().toISOString()
                }
            ];
            localStorage.setItem('egytopiaUsers', JSON.stringify(testUsers));
        }
        
        if (!localStorage.getItem('egytopiaWishlist')) {
            localStorage.setItem('egytopiaWishlist', JSON.stringify([]));
        }
        
        if (!localStorage.getItem('egytopiaCart')) {
            localStorage.setItem('egytopiaCart', JSON.stringify([]));
        }
        
        console.log('Storage initialized');
    }

    // ==============================
    // AUTHENTICATION MANAGEMENT
    // ==============================
    let currentUser = null;
    let artisanProductsData = [];
    let editingProductId = null;

    function checkAuthStatus() {
        console.log('Checking authentication status...');
        
        const savedUser = localStorage.getItem('egytopiaUser');
        if (savedUser) {
            try {
                currentUser = JSON.parse(savedUser);
                console.log('User found:', currentUser);
                
                updateNavigationBar();
                
                if (currentUser.userType === 'artisan') {
                    showProfile();
                } else {
                    showCustomerDashboard();
                }
            } catch (e) {
                console.error('Error parsing user data:', e);
                localStorage.removeItem('egytopiaUser');
                showAuth();
            }
        } else {
            console.log('No user logged in');
            showAuth();
        }
    }

    function updateNavigationBar() {
        if (currentUser && document.getElementById('userNavItem')) {
            const userNavItem = document.getElementById('userNavItem');
            const navUserName = document.getElementById('navUserName');
            const navUserType = document.getElementById('navUserType');
            const navLogoutBtn = document.getElementById('navLogoutBtn');
            
            userNavItem.style.display = 'flex';
            navUserName.textContent = currentUser.name;
            navUserType.textContent = currentUser.userType === 'artisan' ? 'Artisan' : 'Customer';
            
            navLogoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                logoutUser();
            });
        }
    }

    function showAuth() {
        const authSection = document.getElementById('authSection');
        const customerDashboard = document.getElementById('customerDashboard');
        const profileSection = document.getElementById('profileSection');
        const userTypeSelector = document.getElementById('userTypeSelector');
        const authFormContainer = document.getElementById('authFormContainer');
        const customerFeatures = document.getElementById('customerFeatures');
        const artisanFeatures = document.getElementById('artisanFeatures');
        const typeOptions = document.querySelectorAll('.type-option');
        const continueBtn = document.getElementById('continueBtn');
        const userTypeInput = document.getElementById('userType');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const signinForm = document.getElementById('signinForm');
        const signupForm = document.getElementById('signupForm');
        
        if (authSection) authSection.style.display = 'flex';
        if (customerDashboard) customerDashboard.style.display = 'none';
        if (profileSection) profileSection.style.display = 'none';
        
        if (userTypeSelector) {
            userTypeSelector.style.display = 'block';
            userTypeSelector.style.opacity = '1';
            userTypeSelector.style.transform = 'translateY(0)';
        }
        
        if (authFormContainer) {
            authFormContainer.style.display = 'none';
            authFormContainer.style.opacity = '0';
            authFormContainer.style.transform = 'translateY(20px)';
        }
        
        if (customerFeatures) {
            customerFeatures.style.display = 'none';
            customerFeatures.style.opacity = '0';
        }
        
        if (artisanFeatures) {
            artisanFeatures.style.display = 'none';
            artisanFeatures.style.opacity = '0';
        }
        
        if (typeOptions && typeOptions.length > 0) {
            typeOptions.forEach(opt => opt.classList.remove('selected'));
        }
        
        if (continueBtn) continueBtn.disabled = true;
        if (userTypeInput) userTypeInput.value = '';
        
        if (authTabs && authTabs.length > 0) {
            authTabs.forEach(t => t.classList.remove('active'));
            const signinTab = document.querySelector('[data-tab="signin"]');
            if (signinTab) signinTab.classList.add('active');
        }
        
        if (authForms && authForms.length > 0) {
            authForms.forEach(form => form.classList.remove('active'));
            if (signinForm) signinForm.classList.add('active');
        }
        
        updateFormTitles();
        
        if (signinForm) {
            signinForm.reset();
            const inputs = signinForm.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('valid', 'invalid');
            });
        }
        
        if (signupForm) {
            signupForm.reset();
            const inputs = signupForm.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('valid', 'invalid');
            });
            
            const validationMessages = signupForm.querySelectorAll('.validation-message');
            validationMessages.forEach(msg => {
                msg.classList.remove('valid', 'invalid');
                msg.style.display = 'none';
            });
            
            const requirements = signupForm.querySelectorAll('.requirement');
            requirements.forEach(req => {
                req.classList.remove('met', 'unmet', 'highlight');
                const icon = req.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-circle';
                }
            });
            
            const passwordRequirements = signupForm.querySelector('.password-requirements');
            if (passwordRequirements) {
                passwordRequirements.classList.remove('show');
            }
        }
        
        updateNavigationBar();
        
        window.scrollTo(0, 0);
    }

    function showCustomerDashboard() {
        const authSection = document.getElementById('authSection');
        const profileSection = document.getElementById('profileSection');
        const customerDashboard = document.getElementById('customerDashboard');
        const customerName = document.getElementById('customerName');
        const customerEmail = document.getElementById('customerEmail');
        
        if (authSection) authSection.style.display = 'none';
        if (profileSection) profileSection.style.display = 'none';
        
        if (customerDashboard) {
            customerDashboard.style.display = 'block';
            setTimeout(() => {
                customerDashboard.style.opacity = '1';
            }, 10);
        }
        
        if (customerName) customerName.textContent = currentUser.name;
        if (customerEmail) customerEmail.textContent = currentUser.email;
        
        updateCustomerStats();
        
        window.scrollTo(0, 0);
    }

    function showProfile() {
        const authSection = document.getElementById('authSection');
        const customerDashboard = document.getElementById('customerDashboard');
        const profileSection = document.getElementById('profileSection');
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        
        if (authSection) authSection.style.display = 'none';
        if (customerDashboard) customerDashboard.style.display = 'none';
        
        if (profileSection) {
            profileSection.style.display = 'block';
            setTimeout(() => {
                profileSection.style.opacity = '1';
            }, 10);
        }
        
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        
        loadArtisanProducts();
        
        window.scrollTo(0, 0);
    }

    function logoutUser() {
        console.log('Logging out user');
        localStorage.removeItem('egytopiaUser');
        currentUser = null;
        showAuth();
        showNotification('signedOut', 'success');
    }

    // ==============================
    // PRODUCT MANAGEMENT
    // ==============================
    function openProductModal(productId = null) {
        editingProductId = productId;
        
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const modalTitle = document.getElementById('modalTitle');
        const saveProductBtn = document.getElementById('saveProductBtn');
        
        if (productId) {
            if (modalTitle) modalTitle.textContent = t.editProduct;
            if (saveProductBtn) saveProductBtn.textContent = t.updateProduct;
            
            const product = artisanProductsData.find(p => p.id === productId);
            if (product) {
                document.getElementById('productName').value = product.title;
                document.getElementById('productPrice').value = product.numericPrice;
                document.getElementById('productDescription').value = product.description;
                document.getElementById('productCategory').value = product.category;
                
                const imagePreview = document.getElementById('imagePreview');
                if (imagePreview) {
                    imagePreview.innerHTML = `<img src="${product.image}" alt="Product preview">`;
                }
            }
        } else {
            if (modalTitle) modalTitle.textContent = t.addNewProduct;
            if (saveProductBtn) saveProductBtn.textContent = t.addProduct;
            
            const productForm = document.getElementById('productForm');
            const imagePreview = document.getElementById('imagePreview');
            if (productForm) productForm.reset();
            if (imagePreview) {
                imagePreview.innerHTML = `
                    <div class="image-placeholder">
                        <i class="fas fa-image" style="font-size: 48px; margin-bottom: 10px;"></i>
                        <p data-i18n="noImageSelected">${t.noImageSelected}</p>
                    </div>
                `;
            }
        }
        
        updateProductModalTranslations(lang);
        
        const productModal = document.getElementById('productModal');
        if (productModal) {
            productModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                const firstInput = document.getElementById('productName');
                if (firstInput) firstInput.focus();
            }, 100);
        }
    }

    function closeProductModalFunc() {
        const productModal = document.getElementById('productModal');
        if (productModal) {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        editingProductId = null;
    }

    function updateProductModalTranslations(lang) {
        const t = translations[lang];
        
        // Update modal buttons
        const cancelBtn = document.getElementById('cancelProductBtn');
        const saveBtn = document.getElementById('saveProductBtn');
        const uploadBtn = document.getElementById('uploadImageBtn');
        
        if (cancelBtn) cancelBtn.textContent = t.cancel;
        if (saveBtn) {
            if (editingProductId) {
                saveBtn.textContent = t.updateProduct;
            } else {
                saveBtn.textContent = t.addProduct;
            }
        }
        if (uploadBtn) uploadBtn.textContent = t.chooseImage;
        
        // Update labels and placeholders that don't have data-i18n attributes
        const modalTitle = document.getElementById('modalTitle');
        if (modalTitle && !modalTitle.hasAttribute('data-i18n')) {
            if (editingProductId) {
                modalTitle.textContent = t.editProduct;
            } else {
                modalTitle.textContent = t.addNewProduct;
            }
        }
        
        // Update category options
        const categorySelect = document.getElementById('productCategory');
        if (categorySelect) {
            const currentValue = categorySelect.value;
            categorySelect.innerHTML = `
                <option value="">${t.selectCategory}</option>
                <option value="jewelry">${t.jewelry}</option>
                <option value="art">${t.art}</option>
                <option value="textiles">${t.textiles}</option>
                <option value="sculptures">${t.sculptures}</option>
                <option value="home-decor">${t.homeDecor}</option>
                <option value="traditional-crafts">${t.traditionalCrafts}</option>
                <option value="agricultural">${t.agricultural}</option>
                <option value="handmade">${t.handmade}</option>
            `;
            categorySelect.value = currentValue;
        }
    }

    function saveProduct() {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const productName = document.getElementById('productName').value.trim();
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value.trim();
        const productCategory = document.getElementById('productCategory').value;
        const productImageFile = document.getElementById('productImage') ? document.getElementById('productImage').files[0] : null;
        
        if (!productName) {
            showNotification('enterProductName', 'error');
            document.getElementById('productName').focus();
            return;
        }
        
        if (!productPrice || parseFloat(productPrice) <= 0) {
            showNotification('validPrice', 'error');
            document.getElementById('productPrice').focus();
            return;
        }
        
        if (!productDescription) {
            showNotification('enterDescription', 'error');
            document.getElementById('productDescription').focus();
            return;
        }
        
        if (!productCategory) {
            showNotification('selectCategory', 'error');
            document.getElementById('productCategory').focus();
            return;
        }
        
        if (editingProductId) {
            updateProduct(productName, productPrice, productDescription, productCategory, productImageFile, t);
        } else {
            addNewProduct(productName, productPrice, productDescription, productCategory, productImageFile, t);
        }
    }

    function addNewProduct(productName, productPrice, productDescription, productCategory, productImageFile, t) {
        if (!productImageFile) {
            showNotification('selectImage', 'error');
            const uploadImageBtn = document.getElementById('uploadImageBtn');
            if (uploadImageBtn) uploadImageBtn.click();
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const newProduct = {
                id: Date.now(),
                artisanId: currentUser.id,
                artisanName: currentUser.name,
                title: productName,
                price: `${parseFloat(productPrice).toLocaleString()} EGP`,
                numericPrice: parseFloat(productPrice),
                description: productDescription,
                image: e.target.result,
                rating: 5,
                ratingText: "★★★★★ (5)",
                category: productCategory,
                createdAt: new Date().toISOString(),
                isArtisanProduct: true
            };
            
            artisanProductsData.push(newProduct);
            saveArtisanProducts();
            
            saveToMainProducts(newProduct);
            
            loadArtisanProducts();
            closeProductModalFunc();
            showNotification('productAdded', 'success', { category: t[productCategory] || productCategory });
        };
        reader.onerror = function() {
            showNotification('errorReading', 'error');
        };
        reader.readAsDataURL(productImageFile);
    }

    function updateProduct(productName, productPrice, productDescription, productCategory, productImageFile, t) {
        const productIndex = artisanProductsData.findIndex(p => p.id === editingProductId);
        if (productIndex === -1) {
            showNotification('productDeleted', 'error');
            return;
        }
        
        artisanProductsData[productIndex].title = productName;
        artisanProductsData[productIndex].price = `${parseFloat(productPrice).toLocaleString()} EGP`;
        artisanProductsData[productIndex].numericPrice = parseFloat(productPrice);
        artisanProductsData[productIndex].description = productDescription;
        artisanProductsData[productIndex].category = productCategory;
        
        if (productImageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                artisanProductsData[productIndex].image = e.target.result;
                completeProductUpdate();
            };
            reader.onerror = function() {
                showNotification('errorReading', 'error');
            };
            reader.readAsDataURL(productImageFile);
        } else {
            completeProductUpdate();
        }
        
        function completeProductUpdate() {
            saveArtisanProducts();
            updateInMainStorage(artisanProductsData[productIndex]);
            loadArtisanProducts();
            closeProductModalFunc();
            showNotification('productUpdated', 'success');
        }
    }

    function loadArtisanProducts() {
        const savedProducts = localStorage.getItem(`egytopiaArtisanProducts_${currentUser.id}`);
        artisanProductsData = savedProducts ? JSON.parse(savedProducts) : [];
        
        const productsCount = document.getElementById('productsCount');
        if (productsCount) {
            productsCount.textContent = artisanProductsData.length;
            if (artisanProductsData.length > 0) {
                productsCount.classList.add('cart-update');
                setTimeout(() => {
                    productsCount.classList.remove('cart-update');
                }, 300);
            }
        }
        
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const artisanProducts = document.getElementById('artisanProducts');
        const noProductsMessage = document.getElementById('noProductsMessage');
        
        if (artisanProducts && noProductsMessage) {
            if (artisanProductsData.length === 0) {
                noProductsMessage.style.display = 'block';
                artisanProducts.style.display = 'none';
            } else {
                noProductsMessage.style.display = 'none';
                artisanProducts.style.display = 'grid';
                
                artisanProducts.innerHTML = '';
                artisanProductsData.forEach(product => {
                    const productCard = createProductCard(product, t);
                    artisanProducts.appendChild(productCard);
                });
            }
        }
    }

    function createProductCard(product, t) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(0, 100)}${product.description.length > 100 ? '...' : ''}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-category">${t[product.category] || product.category}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small edit-product" data-id="${product.id}">
                        <i class="fas fa-edit"></i> ${t.editProduct}
                    </button>
                    <button class="btn btn-secondary btn-small delete-product" data-id="${product.id}">
                        <i class="fas fa-trash"></i> ${t.deleteProduct}
                    </button>
                </div>
            </div>
        `;
        
        const editBtn = card.querySelector('.edit-product');
        const deleteBtn = card.querySelector('.delete-product');
        
        editBtn.addEventListener('click', () => openProductModal(product.id));
        deleteBtn.addEventListener('click', () => deleteProduct(product.id, t));
        
        return card;
    }

    function deleteProduct(productId, t) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const translation = t || translations[lang];
        
        if (confirm(translation.deleteConfirm)) {
            const productToDelete = artisanProductsData.find(p => p.id === productId);
            
            artisanProductsData = artisanProductsData.filter(product => product.id !== productId);
            saveArtisanProducts();
            
            if (productToDelete) {
                deleteFromMainStorage(productId, productToDelete.category);
            }
            
            loadArtisanProducts();
            showNotification('productDeleted', 'success');
        }
    }

    function saveArtisanProducts() {
        localStorage.setItem(`egytopiaArtisanProducts_${currentUser.id}`, JSON.stringify(artisanProductsData));
    }

    // ==============================
    // MAIN PRODUCTS STORAGE
    // ==============================
    function saveToMainProducts(product) {
        const mainProductsKey = 'egytopiaProducts';
        let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
        allProducts.push(product);
        localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
        
        const categoryProductsKey = `egytopiaProducts_${product.category}`;
        let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
        categoryProducts.push(product);
        localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
    }

    function updateInMainStorage(updatedProduct) {
        const mainProductsKey = 'egytopiaProducts';
        let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
        const index = allProducts.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
            allProducts[index] = updatedProduct;
            localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
        }
        
        const categoryProductsKey = `egytopiaProducts_${updatedProduct.category}`;
        let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
        const catIndex = categoryProducts.findIndex(p => p.id === updatedProduct.id);
        if (catIndex !== -1) {
            categoryProducts[catIndex] = updatedProduct;
            localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
        }
    }

    function deleteFromMainStorage(productId, category) {
        const mainProductsKey = 'egytopiaProducts';
        let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
        allProducts = allProducts.filter(p => p.id !== productId);
        localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
        
        const categoryProductsKey = `egytopiaProducts_${category}`;
        let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
        categoryProducts = categoryProducts.filter(p => p.id !== productId);
        localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
    }

    // ==============================
    // CUSTOMER STATS
    // ==============================
    function updateCustomerStats() {
        const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
        const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
        
        const wishlistCount = document.getElementById('wishlistCount');
        const cartCount = document.getElementById('cartCount');
        
        if (wishlistCount) {
            wishlistCount.textContent = wishlist.length;
            if (wishlist.length > 0) {
                wishlistCount.classList.add('cart-update');
                setTimeout(() => {
                    wishlistCount.classList.remove('cart-update');
                }, 300);
            }
        }
        
        if (cartCount) {
            const totalCartItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
            cartCount.textContent = totalCartItems;
            if (totalCartItems > 0) {
                cartCount.classList.add('cart-update');
                setTimeout(() => {
                    cartCount.classList.remove('cart-update');
                }, 300);
            }
        }
    }

    // ==============================
    // UTILITY FUNCTIONS
    // ==============================
    function updateFormTitles() {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        const formTitle = document.getElementById('formTitle');
        const formSubtitle = document.getElementById('formSubtitle');
        const activeTab = document.querySelector('.auth-tab.active');
        const userTypeInput = document.getElementById('userType');
        
        if (formTitle && formSubtitle && activeTab) {
            if (activeTab.getAttribute('data-tab') === 'signin') {
                if (userTypeInput && userTypeInput.value === 'customer') {
                    formTitle.textContent = t.welcomeEgytopia;
                    formSubtitle.textContent = t.signInShopping;
                } else if (userTypeInput && userTypeInput.value === 'artisan') {
                    formTitle.textContent = t.welcomeArtisan;
                    formSubtitle.textContent = t.signInManage;
                } else {
                    formTitle.textContent = t.welcomeBack;
                    formSubtitle.textContent = t.signInAccount;
                }
            } else {
                if (userTypeInput && userTypeInput.value === 'customer') {
                    formTitle.textContent = t.joinEgytopia;
                    formSubtitle.textContent = t.createShopping;
                } else if (userTypeInput && userTypeInput.value === 'artisan') {
                    formTitle.textContent = t.joinOurCommunity;
                    formSubtitle.textContent = t.createArtisan;
                } else {
                    formTitle.textContent = t.joinEgytopia;
                    formSubtitle.textContent = t.createShopping;
                }
            }
        }
    }

    function showNotification(messageKey, type = 'success', variables = {}) {
        const lang = localStorage.getItem('egytopiaLanguage') || 'en';
        const t = translations[lang];
        
        let notificationMessage = messageKey;
        if (t[messageKey]) {
            notificationMessage = t[messageKey];
            Object.keys(variables).forEach(key => {
                notificationMessage = notificationMessage.replace(`{${key}}`, variables[key]);
            });
        }
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = 'fas fa-check-circle';
        if (type === 'error') icon = 'fas fa-exclamation-circle';
        if (type === 'warning') icon = 'fas fa-exclamation-triangle';
        
        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${notificationMessage}</span>
        `;
        
        const notificationContainer = document.getElementById('notificationContainer');
        if (notificationContainer) {
            notificationContainer.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, 4000);
        }
    }

    // ==============================
    // EXPORT FOR DEBUGGING
    // ==============================
    window.debugEgytopia = {
        showAuth,
        showCustomerDashboard,
        showProfile,
        logoutUser,
        setLanguage,
        clearStorage: function() {
            localStorage.clear();
            location.reload();
        },
        getCurrentUser: function() {
            return currentUser;
        },
        getAllUsers: function() {
            return JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
        }
    };

    console.log('Egytopia User Portal loaded successfully!');
    console.log('Debug commands available in window.debugEgytopia');
