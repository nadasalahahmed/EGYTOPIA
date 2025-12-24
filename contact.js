// Contact Language Switching Functionality
let currentLanguage = 'en'; // Default language

// Arabic translations for contact page
const contactTranslations = {
    en: {
        // Navigation
        home: "Home",
        collections: "Collections",
        categories: "Categories",
        userPortal: "User Portal",
        ourStory: "Our Story",
        contact: "Contact",
        
        // Hero Section
        heroTitleLight: "Get In",
        heroTitleBold: "Touch",
        heroDescription: "We'd love to hear from you. Send us a message and our heritage experts will respond as soon as possible.",
        heroImageAlt: "Statues at Abu Simbel Temple",
        responseTime: "Response Time",
        expertArtisans: "Expert Artisans",
        authenticCraft: "Authentic Craft",
        
        // Checkout
        checkoutIndicator: "Checkout - Complete Your Order",
        orderSummary: "Order Summary",
        pendingStatus: "Pending",
        subtotal: "Subtotal:",
        shipping: "Shipping:",
        tax: "Tax (14%):",
        totalAmount: "Total Amount:",
        completeForm: "Complete the form below to finalize your order",
        
        // Contact Form
        sendMessageTitle: "Send Us a Message",
        sendMessageSubtitle: "Fill out the form below and we'll get back to you within 24 hours",
        firstName: "First Name *",
        firstNamePlaceholder: "Enter your first name",
        lastName: "Last Name *",
        lastNamePlaceholder: "Enter your last name",
        email: "Email Address *",
        emailPlaceholder: "Enter your email address",
        phone: "Phone Number *",
        phonePlaceholder: "010-1234-5678",
        subject: "Subject *",
        selectSubject: "Select a subject",
        generalInquiry: "General Inquiry",
        productInfo: "Product Information",
        customOrder: "Custom Order Request",
        wholesale: "Wholesale Inquiry",
        collaboration: "Collaboration",
        bookVisit: "Book Visit",
        order: "Order",
        other: "Other",
        message: "Message *",
        messagePlaceholder: "Tell us about your interest in Egyptian craftsmanship and how we can assist you...",
        sendMessage: "Send Message",
        responseTimeNote: "We typically respond within 24 hours",
        
        // Contact Methods
        otherWaysTitle: "Other Ways to Reach Us",
        otherWaysSubtitle: "Choose the communication method that works best for you",
        phoneSupport: "Phone Support",
        hours: "Mon-Fri, 9AM-6PM",
        emailUs: "Email Us",
        responseHours: "Response within 24 hours",
        liveChat: "Live Chat",
        available: "Available on website",
        instantAssistance: "Instant assistance",
        visitStore: "Visit Store",
        bookAvailable: "Book appointment available",
        
        // Team Section
        heritageExperts: "Our Heritage Experts",
        meetSpecialists: "Meet the specialists who will handle your inquiry",
        culturalDirector: "Cultural Heritage Director",
        culturalBio: "Specialized in ancient Egyptian artifacts with 15 years of experience.",
        culturalExpertAlt: "Cultural Heritage Expert",
        artisanManager: "Artisan Relations Manager",
        artisanBio: "Connects you with master artisans across Egypt.",
        artisanManagerAlt: "Artisan Relations Manager",
        
        // FAQ Section
        faqTitle: "Frequently Asked Questions",
        shippingTimeQuestion: "How long does shipping take?",
        shippingTimeAnswer: "Domestic shipping within Egypt typically takes 3-5 business days. International shipping times vary by destination but generally range from 7-14 business days. Express shipping options are available for an additional fee.",
        internationalShippingQuestion: "Do you offer international shipping?",
        internationalShippingAnswer: "Yes, we ship worldwide to over 50 countries. Shipping costs and delivery times vary depending on the destination. You can calculate shipping costs during checkout.",
        returnPolicyQuestion: "What is your return policy?",
        returnPolicyAnswer: "We offer a 30-day return policy for all items in original condition. Custom-made or personalized items may not be eligible for return unless there is a manufacturing defect. Please contact our customer service team for return instructions.",
        authenticProductsQuestion: "Are your products authentic Egyptian crafts?",
        authenticProductsAnswer: "Absolutely! All our products are authentic Egyptian crafts made by skilled artisans using traditional techniques. We work directly with artisans across Egypt to ensure the authenticity and quality of every piece.",
        customOrdersQuestion: "Do you offer custom orders?",
        customOrdersAnswer: "Yes, we specialize in custom orders! Whether you're looking for personalized jewelry, custom artwork, or unique home decor, our artisans can create something special just for you. Contact us with your ideas, and we'll work with you to bring your vision to life.",
        
        // Map Section
        comeVisit: "Come Visit Us!",
        visitDescription: "Discover authentic Egyptian brands and experience their products first-hand at our office.",
        galleryName: "Egytopia Gallery",
        address: "123 Nile Corniche, Downtown Cairo, Egypt",
        openHours: "Open Today: 9:00 AM - 8:00 PM",
        getDirections: "Get Directions",
        bookVisitBtn: "Book Visit",
        
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
        heroTitleLight: "تواصل",
        heroTitleBold: "معنا",
        heroDescription: "نود أن نسمع منك. أرسل لنا رسالة وسيرد خبراء التراث لدينا في أسرع وقت ممكن.",
        heroImageAlt: "تماثيل في معبد أبو سمبل",
        responseTime: "وقت الاستجابة",
        expertArtisans: "حرفيون خبراء",
        authenticCraft: "حرفة أصلية",
        
        // Checkout
        checkoutIndicator: "الدفع - أكمل طلبك",
        orderSummary: "ملخص الطلب",
        pendingStatus: "قيد الانتظار",
        subtotal: "المجموع الفرعي:",
        shipping: "الشحن:",
        tax: "الضريبة (14٪):",
        totalAmount: "المبلغ الإجمالي:",
        completeForm: "أكمل النموذج أدناه لإكمال طلبك",
        
        // Contact Form
        sendMessageTitle: "أرسل لنا رسالة",
        sendMessageSubtitle: "املأ النموذج أدناه وسنرد عليك في غضون 24 ساعة",
        firstName: "الاسم الأول *",
        firstNamePlaceholder: "أدخل اسمك الأول",
        lastName: "اسم العائلة *",
        lastNamePlaceholder: "أدخل اسم عائلتك",
        email: "عنوان البريد الإلكتروني *",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        phone: "رقم الهاتف *",
        phonePlaceholder: "010-1234-5678",
        subject: "الموضوع *",
        selectSubject: "اختر موضوعًا",
        generalInquiry: "استفسار عام",
        productInfo: "معلومات المنتج",
        customOrder: "طلب طلب مخصص",
        wholesale: "استفسار بالجملة",
        collaboration: "تعاون",
        bookVisit: "حجز زيارة",
        order: "طلب",
        other: "أخرى",
        message: "الرسالة *",
        messagePlaceholder: "أخبرنا عن اهتمامك بالحرفية المصرية وكيف يمكننا مساعدتك...",
        sendMessage: "إرسال الرسالة",
        responseTimeNote: "نرد عادةً في غضون 24 ساعة",
        
        // Contact Methods
        otherWaysTitle: "طرق أخرى للتواصل معنا",
        otherWaysSubtitle: "اختر طريقة الاتصال التي تناسبك",
        phoneSupport: "الدعم الهاتفي",
        hours: "الإثنين-الجمعة، 9 صباحًا - 6 مساءً",
        emailUs: "راسلنا عبر البريد الإلكتروني",
        responseHours: "الرد في غضون 24 ساعة",
        liveChat: "الدردشة المباشرة",
        available: "متاح على الموقع",
        instantAssistance: "مساعدة فورية",
        visitStore: "زيارة المتجر",
        bookAvailable: "حجز موعد متاح",
        
        // Team Section
        heritageExperts: "خبراء التراث لدينا",
        meetSpecialists: "تعرف على المتخصصين الذين سيتعاملون مع استفسارك",
        culturalDirector: "مدير التراث الثقافي",
        culturalBio: "متخصص في القطع الأثرية المصرية القديمة بخبرة 15 عامًا.",
        culturalExpertAlt: "خبير التراث الثقافي",
        artisanManager: "مدير علاقات الحرفيين",
        artisanBio: "يربطك بالحرفيين الرئيسيين في جميع أنحاء مصر.",
        artisanManagerAlt: "مدير علاقات الحرفيين",
        
        // FAQ Section
        faqTitle: "الأسئلة الشائعة",
        shippingTimeQuestion: "كم من الوقت يستغرق الشحن؟",
        shippingTimeAnswer: "يستغرق الشحن المحلي داخل مصر عادةً من 3 إلى 5 أيام عمل. تختلف أوقات الشحن الدولي حسب الوجهة ولكنها تتراوح عمومًا من 7 إلى 14 يوم عمل. خيارات الشحن السريع متاحة مقابل رسوم إضافية.",
        internationalShippingQuestion: "هل تقدمون شحن دولي؟",
        internationalShippingAnswer: "نعم، نحن نشحن إلى أكثر من 50 دولة حول العالم. تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة. يمكنك حساب تكاليف الشحن أثناء الدفع.",
        returnPolicyQuestion: "ما هي سياسة الإرجاع لديكم؟",
        returnPolicyAnswer: "نحن نقدم سياسة إرجاع لمدة 30 يومًا لجميع العناصر في حالتها الأصلية. قد لا تكون العناصر المصنوعة حسب الطلب أو المخصصة مؤهلة للإرجاع ما لم يكن هناك عيب في التصنيع. يرجى الاتصال بفريق خدمة العملاء للحصول على تعليمات الإرجاع.",
        authenticProductsQuestion: "هل منتجاتكم حرف مصرية أصلية؟",
        authenticProductsAnswer: "بالتأكيد! جميع منتجاتنا هي حرف مصرية أصلية مصنوعة من قبل حرفيين مهرة باستخدام تقنيات تقليدية. نحن نعمل مباشرة مع الحرفيين في جميع أنحاء مصر لضمان أصالة وجودة كل قطعة.",
        customOrdersQuestion: "هل تقدمون طلبات مخصصة؟",
        customOrdersAnswer: "نعم، نحن متخصصون في الطلبات المخصصة! سواء كنت تبحث عن مجوهرات مخصصة، أو أعمال فنية مخصصة، أو ديكور منزل فريد، يمكن لحرفيينا إنشاء شيء خاص لك فقط. اتصل بنا بأفكارك، وسنعمل معك لتحقيق رؤيتك.",
        
        // Map Section
        comeVisit: "تعال لزيارتنا!",
        visitDescription: "اكتشف العلامات التجارية المصرية الأصيلة وجرب منتجاتها بنفسك في مكتبنا.",
        galleryName: "معرض Egytopia",
        address: "123 كورنيش النيل، وسط البلد، القاهرة، مصر",
        openHours: "مفتوح اليوم: 9:00 صباحًا - 8:00 مساءً",
        getDirections: "الحصول على الاتجاهات",
        bookVisitBtn: "حجز زيارة",
        
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
        subscribe: "اشتراك",
        newsletterNote: "بالاشتراك، فإنك توافق على سياسة الخصوصية الخاصة بنا وتوافق على تلقي التحديثات من شركتنا.",
        allRights: "جميع الحقوق محفوظة."
    }
};

// Initialize the contact page language functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing contact page language switching...');
    
    // Setup language switcher
    setupLanguageSwitcher();
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('egytopiaLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    }
    
    // Check if we should sync with existing language from other pages
    const globalLang = localStorage.getItem('egytopiaLanguage');
    if (globalLang && globalLang !== currentLanguage) {
        currentLanguage = globalLang;
    }
    
    // Apply language and update UI
    translateContactPage();
    updateRTLDirection();
    updateLanguageUI();
    
    console.log('Contact page language initialized:', currentLanguage);
});

// Setup language switcher
function setupLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.querySelector('.lang-text');
    
    if (!langToggle) {
        console.error('Language toggle button not found!');
        return;
    }
    
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
        translateContactPage();
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
    
    // Update form direction
    const forms = document.querySelectorAll('.contact-form, .newsletter-form');
    forms.forEach(form => {
        form.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    });
}

// Translate the entire contact page
function translateContactPage() {
    const trans = contactTranslations[currentLanguage];
    
    // Update all translatable elements
    updateTextContent('[data-i18n="home"]', trans.home);
    updateTextContent('[data-i18n="collections"]', trans.collections);
    updateTextContent('[data-i18n="categories"]', trans.categories);
    updateTextContent('[data-i18n="userPortal"]', trans.userPortal);
    updateTextContent('[data-i18n="ourStory"]', trans.ourStory);
    updateTextContent('[data-i18n="contact"]', trans.contact);
    
    // Hero Section
    updateTextContent('[data-i18n="heroTitleLight"]', trans.heroTitleLight);
    updateTextContent('[data-i18n="heroTitleBold"]', trans.heroTitleBold);
    updateTextContent('[data-i18n="heroDescription"]', trans.heroDescription);
    updateTextContent('[data-i18n="responseTime"]', trans.responseTime);
    updateTextContent('[data-i18n="expertArtisans"]', trans.expertArtisans);
    updateTextContent('[data-i18n="authenticCraft"]', trans.authenticCraft);
    
    // Update image alt text
    updateAltText('[data-i18n-alt="heroImageAlt"]', trans.heroImageAlt);
    
    // Checkout Section
    updateTextContent('[data-i18n="checkoutIndicator"]', trans.checkoutIndicator);
    updateTextContent('[data-i18n="orderSummary"]', trans.orderSummary);
    updateTextContent('[data-i18n="pendingStatus"]', trans.pendingStatus);
    updateTextContent('[data-i18n="subtotal"]', trans.subtotal);
    updateTextContent('[data-i18n="shipping"]', trans.shipping);
    updateTextContent('[data-i18n="tax"]', trans.tax);
    updateTextContent('[data-i18n="totalAmount"]', trans.totalAmount);
    updateTextContent('[data-i18n="completeForm"]', trans.completeForm);
    
    // Contact Form
    updateTextContent('[data-i18n="sendMessageTitle"]', trans.sendMessageTitle);
    updateTextContent('[data-i18n="sendMessageSubtitle"]', trans.sendMessageSubtitle);
    updateTextContent('[data-i18n="firstName"]', trans.firstName);
    updateTextContent('[data-i18n="lastName"]', trans.lastName);
    updateTextContent('[data-i18n="email"]', trans.email);
    updateTextContent('[data-i18n="phone"]', trans.phone);
    updateTextContent('[data-i18n="subject"]', trans.subject);
    updateTextContent('[data-i18n="message"]', trans.message);
    updateTextContent('[data-i18n="sendMessage"]', trans.sendMessage);
    updateTextContent('[data-i18n="responseTimeNote"]', trans.responseTimeNote);
    
    // Update select options
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect) {
        const options = subjectSelect.querySelectorAll('option');
        options.forEach(option => {
            const value = option.value;
            if (value && trans[value]) {
                option.textContent = trans[value];
            }
        });
        // Update placeholder option
        const placeholder = subjectSelect.querySelector('option[value=""]');
        if (placeholder) {
            placeholder.textContent = trans.selectSubject;
        }
    }
    
    // Update placeholders
    updatePlaceholder('[data-i18n-placeholder="firstNamePlaceholder"]', trans.firstNamePlaceholder);
    updatePlaceholder('[data-i18n-placeholder="lastNamePlaceholder"]', trans.lastNamePlaceholder);
    updatePlaceholder('[data-i18n-placeholder="emailPlaceholder"]', trans.emailPlaceholder);
    updatePlaceholder('[data-i18n-placeholder="phonePlaceholder"]', trans.phonePlaceholder);
    updatePlaceholder('[data-i18n-placeholder="messagePlaceholder"]', trans.messagePlaceholder);
    
    // Contact Methods
    updateTextContent('[data-i18n="otherWaysTitle"]', trans.otherWaysTitle);
    updateTextContent('[data-i18n="otherWaysSubtitle"]', trans.otherWaysSubtitle);
    updateTextContent('[data-i18n="phoneSupport"]', trans.phoneSupport);
    updateTextContent('[data-i18n="hours"]', trans.hours);
    updateTextContent('[data-i18n="emailUs"]', trans.emailUs);
    updateTextContent('[data-i18n="responseHours"]', trans.responseHours);
    updateTextContent('[data-i18n="liveChat"]', trans.liveChat);
    updateTextContent('[data-i18n="available"]', trans.available);
    updateTextContent('[data-i18n="instantAssistance"]', trans.instantAssistance);
    updateTextContent('[data-i18n="visitStore"]', trans.visitStore);
    updateTextContent('[data-i18n="bookAvailable"]', trans.bookAvailable);
    
    // Team Section
    updateTextContent('[data-i18n="heritageExperts"]', trans.heritageExperts);
    updateTextContent('[data-i18n="meetSpecialists"]', trans.meetSpecialists);
    updateTextContent('[data-i18n="culturalDirector"]', trans.culturalDirector);
    updateTextContent('[data-i18n="culturalBio"]', trans.culturalBio);
    updateTextContent('[data-i18n="artisanManager"]', trans.artisanManager);
    updateTextContent('[data-i18n="artisanBio"]', trans.artisanBio);
    
    // Update team image alt text
    updateAltText('[data-i18n-alt="culturalExpertAlt"]', trans.culturalExpertAlt);
    updateAltText('[data-i18n-alt="artisanManagerAlt"]', trans.artisanManagerAlt);
    
    // FAQ Section
    updateTextContent('[data-i18n="faqTitle"]', trans.faqTitle);
    updateTextContent('[data-i18n="shippingTimeQuestion"]', trans.shippingTimeQuestion);
    updateTextContent('[data-i18n="shippingTimeAnswer"]', trans.shippingTimeAnswer);
    updateTextContent('[data-i18n="internationalShippingQuestion"]', trans.internationalShippingQuestion);
    updateTextContent('[data-i18n="internationalShippingAnswer"]', trans.internationalShippingAnswer);
    updateTextContent('[data-i18n="returnPolicyQuestion"]', trans.returnPolicyQuestion);
    updateTextContent('[data-i18n="returnPolicyAnswer"]', trans.returnPolicyAnswer);
    updateTextContent('[data-i18n="authenticProductsQuestion"]', trans.authenticProductsQuestion);
    updateTextContent('[data-i18n="authenticProductsAnswer"]', trans.authenticProductsAnswer);
    updateTextContent('[data-i18n="customOrdersQuestion"]', trans.customOrdersQuestion);
    updateTextContent('[data-i18n="customOrdersAnswer"]', trans.customOrdersAnswer);
    
    // Map Section
    updateTextContent('[data-i18n="comeVisit"]', trans.comeVisit);
    updateTextContent('[data-i18n="visitDescription"]', trans.visitDescription);
    updateTextContent('[data-i18n="galleryName"]', trans.galleryName);
    updateTextContent('[data-i18n="address"]', trans.address);
    updateTextContent('[data-i18n="openHours"]', trans.openHours);
    updateTextContent('[data-i18n="getDirections"]', trans.getDirections);
    updateTextContent('[data-i18n="bookVisitBtn"]', trans.bookVisitBtn);
    
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
    updateTextContent('[data-i18n="allRights"]', trans.allRights);
    
    // Update footer newsletter placeholder
    updatePlaceholder('[data-i18n-placeholder="emailPlaceholder"]', trans.emailPlaceholder);
}

// Helper function to update text content
function updateTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Skip for input elements, they have placeholders
            return;
        }
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

// Helper function to update alt text
function updateAltText(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.alt = text;
    });
}

// Show notification
function showNotification(message, type = 'success') {
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

// Export functions for debugging
window.contactLanguage = {
    currentLanguage,
    translateContactPage,
    updateRTLDirection,
    debug: function() {
        console.log('=== Contact Page Language Debug Info ===');
        console.log('Current language:', currentLanguage);
        console.log('Body direction:', document.body.dir);
        console.log('RTL class applied:', document.body.classList.contains('rtl'));
        console.log('==============================');
    }
};

console.log('Contact page language switching loaded successfully!');
console.log('Debug commands available in window.contactLanguage');
console.log('Type contactLanguage.debug() for current status');