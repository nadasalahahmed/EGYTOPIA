// Default products data
const defaultProducts = [
    // Jewelry
    {
        id: 1,
        title: "Gold Cartouche Necklace",
        price: "2,850 EGP",
        numericPrice: 2850,
        description: "This exquisite 18k gold-plated cartouche necklace features custom hieroglyphic inscriptions. Each piece is carefully crafted by skilled Egyptian artisans, making it a unique and personalized jewelry item.",
        image: "https://images.unsplash.com/photo-1677194370385-d7aebb01a4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2Mjg0NjE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5,
        ratingText: "★★★★★ (5)",
        category: "jewelry"
    },
    {
        id: 2,
        title: "Silver Ankh Pendant",
        price: "1,450 EGP",
        numericPrice: 1450,
        description: "This sterling silver ankh pendant represents the ancient Egyptian symbol of life. Meticulously crafted with attention to detail, it makes a meaningful addition to any jewelry collection.",
        image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        ratingText: "★★★★☆ (4.2)",
        category: "jewelry"
    },
    {
        id: 3,
        title: "Lapis Lazuli Bracelet",
        price: "1,200 EGP",
        numericPrice: 1200,
        description: "Handcrafted bracelet featuring genuine lapis lazuli stones, prized in ancient Egypt for their deep blue color and spiritual significance.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        ratingText: "★★★★★ (4.7)",
        category: "jewelry"
    },
    {
        id: 4,
        title: "Scarab Earrings",
        price: "950 EGP",
        numericPrice: 950,
        description: "Elegant earrings featuring the sacred scarab beetle, a symbol of rebirth and transformation in ancient Egyptian culture.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJyaW5ncyUyMGVneXB0aWFufGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.5,
        ratingText: "★★★★☆ (4.5)",
        category: "jewelry"
    },

    // Art
    {
        id: 5,
        title: "Papyrus Painting",
        price: "1,150 EGP",
        numericPrice: 1150,
        description: "Authentic papyrus painting depicting scenes from ancient Egyptian mythology, created using traditional techniques.",
        image: "https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBhcHlydXMlMjBhcnR8ZW58MXx8fHwxNzYyODE1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)",
        category: "art"
    },
    {
        id: 6,
        title: "Hieroglyphic Wall Art",
        price: "2,300 EGP",
        numericPrice: 2300,
        description: "Beautiful wall art featuring authentic Egyptian hieroglyphics, perfect for adding an ancient touch to modern interiors.",
        image: "https://images.unsplash.com/photo-1611279521305-d8c443925311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWVyb2dseXBoaWNzJTIwYXJ0fGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        ratingText: "★★★★☆ (4.6)",
        category: "art"
    },

    // Textiles
    {
        id: 7,
        title: "Embroidered Silk Scarf",
        price: "650 EGP",
        numericPrice: 650,
        description: "Luxurious silk scarf with intricate Egyptian embroidery, featuring traditional patterns and symbols.",
        image: "https://images.unsplash.com/photo-1713446535265-890235b6a12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHRleHRpbGUlMjBmYWJyaWN8ZW58MXx8fHwxNzYyODQ2MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.9,
        ratingText: "★★★★★ (4.9)",
        category: "textiles"
    },
    {
        id: 8,
        title: "Traditional Egyptian Shawl",
        price: "850 EGP",
        numericPrice: 850,
        description: "Warm and elegant shawl featuring traditional Egyptian patterns, perfect for cool evenings or as a fashion statement.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGF3bCUyMGVneXB0aWFufGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.4,
        ratingText: "★★★★☆ (4.4)",
        category: "textiles"
    },

    // Sculptures
    {
        id: 9,
        title: "Pharaoh Statue",
        price: "3,200 EGP",
        numericPrice: 3200,
        description: "Exquisitely carved statue of an ancient Egyptian pharaoh, crafted from high-quality stone with incredible detail.",
        image: "https://images.unsplash.com/photo-1600630278838-e5a7185cca1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHRpYW4lMjBzdGF0dWV8ZW58MXx8fHwxNzYyODQ2MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.7,
        ratingText: "★★★★★ (4.7)",
        category: "sculptures"
    },
    {
        id: 10,
        title: "Bastet Cat Sculpture",
        price: "1,800 EGP",
        numericPrice: 1800,
        description: "Beautiful sculpture of Bastet, the ancient Egyptian goddess of protection, depicted as a cat.",
        image: "https://images.unsplash.com/photo-1565688534245-05d6d7a5fec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXN0ZXQlMjBjYXQlMjBzdGF0dWV8ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)",
        category: "sculptures"
    },

    // Home Decor
    {
        id: 11,
        title: "Ceramic Lotus Vase",
        price: "890 EGP",
        numericPrice: 890,
        description: "Hand-painted traditional Egyptian pottery featuring the iconic lotus flower design. This beautiful vase showcases the rich artistic heritage of Egypt.",
        image: "https://images.unsplash.com/photo-1578508559719-52eecc4c2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3R1cyUyMHZhc2UlMjBlZ3lwdGlhbnxlbnwxfHx8fDE3NjI4NTAxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)",
        category: "home-decor"
    },
    {
        id: 12,
        title: "Egyptian Pattern Throw Pillow",
        price: "450 EGP",
        numericPrice: 450,
        description: "Decorative throw pillow featuring traditional Egyptian patterns, adding an exotic touch to your home decor.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsb3clMjBlZ3lwdGlhbiUyMHBhdHRlcm58ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.3,
        ratingText: "★★★★☆ (4.3)",
        category: "home-decor"
    },

    // Traditional Crafts
    {
        id: 13,
        title: "Handwoven Palm Basket",
        price: "350 EGP",
        numericPrice: 350,
        description: "Traditional Egyptian basket handwoven from natural palm leaves, perfect for storage or as a decorative piece.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXQlMjBoYW5kd292ZW58ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.5,
        ratingText: "★★★★☆ (4.5)",
        category: "traditional-crafts"
    },
    {
        id: 14,
        title: "Copper Incense Burner",
        price: "750 EGP",
        numericPrice: 750,
        description: "Handcrafted copper incense burner with traditional Egyptian designs, perfect for creating a relaxing atmosphere.",
        image: "https://images.unsplash.com/photo-1611279521305-d8c443925311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBpbmNlbnNlJTIwYnVybmVyfGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        ratingText: "★★★★☆ (4.6)",
        category: "traditional-crafts"
    },

    // Agricultural Products
    {
        id: 15,
        title: "Premium Egyptian Dates",
        price: "180 EGP",
        numericPrice: 180,
        description: "Sweet and nutritious dates harvested from Egyptian oases, known for their exceptional quality and flavor.",
        image: "https://images.unsplash.com/photo-1597872200969-2c0ba373f8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGRhdGVzfGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        ratingText: "★★★★★ (4.9)",
        category: "agricultural"
    },
    {
        id: 16,
        title: "Sinai Honey",
        price: "220 EGP",
        numericPrice: 220,
        description: "Pure, natural honey from the Sinai Peninsula, known for its unique flavor and medicinal properties.",
        image: "https://images.unsplash.com/photo-1587049352846-4a5b5706a8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGVneXB0fGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        ratingText: "★★★★★ (4.7)",
        category: "agricultural"
    },

    // Handmade Goods
    {
        id: 17,
        title: "Leather-bound Notebook",
        price: "320 EGP",
        numericPrice: 320,
        description: "Handmade leather notebook with Egyptian motifs, perfect for journaling or as a special gift.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzYyODUwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.4,
        ratingText: "★★★★☆ (4.4)",
        category: "handmade"
    },
    {
        id: 18,
        title: "Hand-painted Ceramic Plate",
        price: "580 EGP",
        numericPrice: 580,
        description: "Beautiful ceramic plate hand-painted with traditional Egyptian patterns, both decorative and functional.",
        image: "https://images.unsplash.com/photo-1578508559719-52eecc4c2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGUlMjBoYW5kcGFpbnRlZHxlbnwxfHx8fDE3NjI4NTAxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        ratingText: "★★★★☆ (4.6)",
        category: "handmade"
    },
    {
        id: 19,
        title: "Egyptian Cotton Towel Set",
        price: "650 EGP",
        numericPrice: 650,
        description: "Luxurious set of towels made from premium Egyptian cotton, known for its exceptional softness and absorbency.",
        image: "https://images.unsplash.com/photo-1585151637936-89c6b2d702e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3dlbHMlMjBlZ3lwdGlhbiUyMGNvdHRvbnxlbnwxfHx8fDE3NjI4NTAxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)",
        category: "handmade"
    },
    {
        id: 20,
        title: "Olive Wood Carving",
        price: "890 EGP",
        numericPrice: 890,
        description: "Exquisite carving made from Egyptian olive wood, featuring traditional motifs and symbols.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMHdvb2QlMjBjYXJ2aW5nfGVufDF8fHx8MTc2Mjg1MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        ratingText: "★★★★★ (4.7)",
        category: "handmade"
    }
];

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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    initializeCart();
    initializeWishlist();
    setupMobileNavigation();
    setupScrollEffects();
    displayProducts('all');
    setupCategoryFiltering();
    setupQuickViewModal();
    setupNewsletter();
    setupCartAndWishlistLinks();
});

// Initialize products - COMBINE DEFAULT AND ARTISAN PRODUCTS
function initializeProducts() {
    // Always use the default products
    products = [...defaultProducts];
    
    // Load artisan products from localStorage
    const artisanProducts = JSON.parse(localStorage.getItem('egytopiaArtisanProducts') || '[]');
    
    console.log('Artisan products found:', artisanProducts);
    
    // Add artisan products to the main products array
    artisanProducts.forEach(artisanProduct => {
        // Check if product already exists (by ID) to avoid duplicates
        if (!products.some(product => product.id === artisanProduct.id)) {
            products.push(artisanProduct);
            console.log('Added artisan product:', artisanProduct.title);
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
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    console.log(`Displaying ${filteredProducts.length} products for category: ${category}`);
    console.log('Products in this category:', filteredProducts);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    // Check if product is in wishlist
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    const wishlistClass = isInWishlist ? 'active' : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
            <button class="quick-view-btn" data-product="${product.id}">Quick View</button>
            <button class="wishlist-btn ${wishlistClass}" data-product="${product.id}">
                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description.substring(0, 80)}...</p>
            <div class="rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-value">${product.ratingText}</span>
            </div>
            <div class="product-price">
                <span class="current-price">${product.price}</span>
            </div>
            <button class="add-to-cart" data-product="${product.id}">Add to Cart</button>
        </div>
    `;
    
    // Add event listeners
    const quickViewBtn = card.querySelector('.quick-view-btn');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const wishlistBtn = card.querySelector('.wishlist-btn');
    
    quickViewBtn.addEventListener('click', () => openQuickView(product.id));
    addToCartBtn.addEventListener('click', () => addToCart(product.id));
    wishlistBtn.addEventListener('click', () => toggleWishlist(product.id, wishlistBtn));
    
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
        });
    });
}

// Quick View Modal setup
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

    // Modal add to cart
    if (modalAddToCart) {
        modalAddToCart.addEventListener('click', () => {
            if (currentProduct) {
                addToCart(currentProduct.id);
                closeQuickViewModal();
            }
        });
    }

    // Modal add to wishlist
    if (modalAddToWishlist) {
        modalAddToWishlist.addEventListener('click', () => {
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
    
    // Update modal content
    modalImg.src = product.image;
    modalImg.alt = product.title;
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
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

// Add to cart
function addToCart(productId) {
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
    showNotification(`${product.title} added to cart!`);
}

// Toggle wishlist
function toggleWishlist(productId, button) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItemIndex = wishlistItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        // Remove from wishlist
        wishlistItems.splice(existingItemIndex, 1);
        
        // Update button
        button.classList.remove('active');
        button.innerHTML = '<i class="far fa-heart"></i>';
        
        updateWishlistCount();
        saveWishlistToStorage();
        showNotification(`${product.title} removed from wishlist!`);
    } else {
        // Add to wishlist
        wishlistItems.push(product);
        
        // Update button
        button.classList.add('active');
        button.innerHTML = '<i class="fas fa-heart"></i>';
        
        updateWishlistCount();
        saveWishlistToStorage();
        showNotification(`${product.title} added to wishlist!`);
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
    
    document.body.appendChild(notification);
    
    // Add show class after a delay
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
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
            // Redirect to cart page instead of showing modal
            window.location.href = 'cart.html';
        });
    }
    
    if (wishlistLink) {
        wishlistLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Redirect to wishlist page instead of showing modal
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
            if (email && email.includes('@')) {
                showNotification(`Thank you for subscribing with ${email}! You will receive our updates soon.`);
                this.reset();
            } else {
                showNotification('Please enter a valid email address!', 'error');
            }
        });
    }
}