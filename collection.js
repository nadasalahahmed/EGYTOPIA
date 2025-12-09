// collections.js - ENFORCED LOGIN REQUIREMENT FOR CART/WISHLIST

// Cart and wishlist functionality
let cartItems = [];
let wishlistItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
const cartLink = document.getElementById('cartLink');
const wishlistLink = document.getElementById('wishlistLink');
const collectionsContainer = document.getElementById('collectionsContainer');

// Product data for Quick View
const products = [
    {
        id: 'n1',
        title: 'Handwoven Nile Basket',
        price: '$34.99',
        description: 'Traditional palm leaf basket with modern geometric design, crafted by Nile Delta artisans. Made from sustainable materials using centuries-old weaving techniques.',
        image: 'Images/pexels-axp-photography-500641970-18934609.jpg',
        rating: 5,
        ratingText: '5.0 (19 reviews)',
        category: 'Baskets',
        origin: 'From Luxor'
    },
    {
        id: 'n2',
        title: 'Egyptian Silk Shawl',
        price: '$89.99',
        originalPrice: '$120.00',
        description: 'Luxurious silk with Pharaonic patterns, hand-woven using traditional techniques. Each shawl tells a unique story through its intricate design.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&w=350&q=80',
        rating: 4.5,
        ratingText: '4.5 (41 reviews)',
        category: 'Textiles',
        origin: 'Silk from Aswan'
    },
    {
        id: 'n3',
        title: 'Papyrus Art Set',
        price: '$45.99',
        description: 'Authentic handmade papyrus with traditional painting tools and natural pigments. Perfect for art enthusiasts and collectors.',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&w=350&q=80',
        rating: 4,
        ratingText: '4.0 (32 reviews)',
        category: 'Art Supplies',
        origin: 'Artisan Workshop'
    },
    {
        id: 't1',
        title: 'Golden Ankh Necklace',
        price: '$189.99',
        originalPrice: '$249.99',
        description: '24k gold pendant with ancient Egyptian ankh symbol, handcrafted by Cairo artisans. The ankh represents eternal life in Egyptian mythology.',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
        rating: 4.7,
        ratingText: '4.7 (128 reviews)',
        category: 'Jewelry Collection',
        origin: 'Cairo'
    },
    {
        id: 't2',
        title: 'Nefertiti Bust Statue',
        price: '$149.99',
        originalPrice: '$199.99',
        description: 'Hand-carved alabaster replica of the famous Egyptian queen, museum quality. A stunning centerpiece for any room.',
        image: 'https://images.unsplash.com/photo-1600630278838-e5a7185cca1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
        rating: 5,
        ratingText: '5.0 (94 reviews)',
        category: 'Sculptures',
        origin: 'Alexandria'
    },
    {
        id: 't3',
        title: 'Hieroglyphic Ceramic Vase',
        price: '$79.99',
        originalPrice: '$99.99',
        description: 'Traditional Egyptian pottery with authentic hieroglyphic inscriptions from Luxor. Each vase is a unique piece of art.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
        rating: 4.2,
        ratingText: '4.2 (67 reviews)',
        category: 'Home Decor',
        origin: 'Luxor'
    }
];

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

// STRICT LOGIN ENFORCEMENT: Show login required modal
function showLoginRequiredModal(feature) {
    // Create modal overlay
    const loginModal = document.createElement('div');
    loginModal.className = 'login-required-modal';
    loginModal.id = 'loginRequiredModal';
    
    const featureName = feature === 'cart' ? 'Cart' : 'Wishlist';
    const actionText = feature === 'cart' ? 'add items to cart' : 'save items to wishlist';
    
    loginModal.innerHTML = `
        <div class="login-modal-content">
            <div class="login-modal-header">
                <i class="fas fa-lock" style="font-size: 40px; color: #c19b53; margin-bottom: 15px;"></i>
                <h2 style="color: #1a2f3a; margin-bottom: 10px;">Sign In Required</h2>
                <p style="color: #666; text-align: center;">Please sign in to ${actionText}</p>
            </div>
            
            <div class="login-modal-body">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px; padding: 15px; background: #f8f5e8; border-radius: 10px;">
                    <i class="fas fa-info-circle" style="color: #c19b53; font-size: 24px;"></i>
                    <p style="margin: 0; color: #1a2f3a; flex: 1;">
                        <strong>Why sign in?</strong><br>
                        Signing in allows you to save items to your ${featureName}, track orders, and enjoy personalized recommendations.
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
                        Go to Sign In Page
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
                        Continue Browsing
                    </button>
                    
                    <p style="text-align: center; margin-top: 10px; font-size: 14px; color: #888;">
                        Don't have an account? 
                        <a href="artisan.html" style="color: #c19b53; text-decoration: none; font-weight: 600;">Sign up here</a>
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
    const pageHeader = document.querySelector('.container');

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

// Display collections
function displayCollections() {
    if (!collectionsContainer) return;

    collectionsContainer.innerHTML = '';

    const categories = [
        {
            id: "jewelry",
            title: "Jewelry Collection",
            description: "Exquisite Egyptian jewelry featuring gold, silver, and precious stones.",
            image: "Images/WhatsApp Image 2025-12-09 at 12.03.09 AM.jpeg",
            productCount: 24,
            featured: true
        },
        {
            id: "art",
            title: "Egyptian Art",
            description: "Authentic Egyptian art including papyrus paintings and hieroglyphic art.",
            image: "Images/daniela-turcanu-w-J0NlOsa3U-unsplash.jpg",
            productCount: 18,
            featured: true
        },
        {
            id: "home-decor",
            title: "Home Decor",
            description: "Egyptian-inspired home decor items including vases and decorative pieces.",
            image: "Images/WhatsApp Image 2025-12-09 at 12.18.23 AM.jpeg",
            productCount: 22,
            featured: true
        },
        {
            id: "urban-pharaoh",
            title: "Urban Pharaoh",
            description: "Modern streetwear inspired by ancient Egyptian symbols with a bold urban twist.",
            image: "Images/WhatsApp Image 2025-12-08 at 11.48.24 PM.jpeg",
            productCount: 30,
            featured: true
        },
        {
            id: "divine-symbols",
            title: "Divine Symbols",
            description: "Iconic Egyptian symbols including the Eye of Horus, Ankh, Scarab, and sacred lotus.",
            image: "Images/WhatsApp Image 2025-12-09 at 12.08.59 AM.jpeg",
            productCount: 26,
            featured: true
        },
        {
            id: "pharaoh-street",
            title: "Pharaoh Street Collection",
            description: "Lifestyle products inspired by pharaonic culture — bags, accessories, and more.",
            image: "Images/WhatsApp Image 2025-12-09 at 12.13.58 AM.jpeg",
            productCount: 20,
            featured: true
        }
    ];

    categories.forEach(category => {
        const collectionCard = createCollectionCard(category);
        collectionsContainer.appendChild(collectionCard);
    });
}

// Create collection card HTML
function createCollectionCard(category) {
    const card = document.createElement('div');
    card.className = 'collection-card';

    card.innerHTML = `
        <div class="collection-image">
            <img src="${category.image}" alt="${category.title}">
            <div class="collection-overlay">
                <h3 class="collection-title" style="color: white; margin: 0;">${category.title}</h3>
            </div>
        </div>
        <div class="collection-info">
            <h3 class="collection-title">${category.title}</h3>
            <p class="collection-description">${category.description}</p>
            <div class="collection-stats">
                <span>${category.productCount} products</span>
                ${category.featured ? '<span style="color: #c19b53;">Featured</span>' : ''}
            </div>
            <button class="view-collection-btn" data-category="${category.id}">View Collection</button>
        </div>
    `;

    const viewBtn = card.querySelector('.view-collection-btn');
    viewBtn.addEventListener('click', () => {
        window.location.href = `categories.html?category=${category.id}`;
    });

    return card;
}

// Setup product interactions with login checks
function setupProductInteractions() {
    // Wishlist buttons - WITH LOGIN CHECK
    document.querySelectorAll('.nile-wishlist-btn, .treasure-wishlist').forEach(button => {
        const originalClick = button.onclick;
        button.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                return;
            }
            
            if (originalClick) {
                originalClick.call(this, e);
            } else {
                toggleWishlist(this);
            }
        };
    });

    // Add to Cart buttons - WITH LOGIN CHECK
    document.querySelectorAll('.nile-add-to-cart, .treasure-cart-btn').forEach(button => {
        const originalClick = button.onclick;
        button.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                return;
            }
            
            if (originalClick) {
                originalClick.call(this, e);
            } else {
                addToCart(this);
            }
        };
    });

    // Quick View buttons - SIMPLE FIX
    document.querySelectorAll('.nile-quick-view, .quick-view-trigger').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-nile-id') || this.getAttribute('data-treasure-id');
            console.log('Quick View clicked for product:', productId); // Debug
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

    if (isActive) {
        const itemIndex = wishlistItems.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            wishlistItems.splice(itemIndex, 1);
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i>';
            showNotification('Removed from wishlist!');
        }
    } else {
        const product = {
            id: productId,
            title: button.closest('.nile-card, .treasure-card').querySelector('.nile-product-title, .treasure-title')?.textContent || 'Product',
            price: button.closest('.nile-card, .treasure-card').querySelector('.nile-price-current, .price-current')?.textContent || '$0.00',
            image: button.closest('.nile-card, .treasure-card').querySelector('.nile-image, .treasure-image')?.src || ''
        };

        wishlistItems.push(product);
        button.classList.add('active');
        button.innerHTML = '<i class="fas fa-heart"></i>';
        showNotification('Added to wishlist!');
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

    const product = {
        id: productId,
        title: productCard.querySelector('.nile-product-title, .treasure-title')?.textContent || 'Product',
        price: productCard.querySelector('.nile-price-current, .price-current')?.textContent || '$0.00',
        image: productCard.querySelector('.nile-image, .treasure-image')?.src || '',
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
    showNotification('Added to cart!');

    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

// Show Quick View - SIMPLE VERSION
function showQuickView(productId) {
    console.log('Opening Quick View for product ID:', productId); // Debug
    
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

    // Set modal content
    const productImage = document.getElementById('modalProductImage');
    const productTitle = document.getElementById('modalProductTitle');
    const productPrice = document.getElementById('modalProductPrice');
    const productDescription = document.getElementById('modalProductDescription');
    const productRating = document.getElementById('modalProductRating');

    if (productImage) productImage.src = product.image;
    if (productTitle) productTitle.textContent = product.title;
    
    // Set price
    if (productPrice) {
        let priceHTML = `<span class="modal-price-current">${product.price}</span>`;
        if (product.originalPrice) {
            priceHTML += ` <span class="modal-price-original">${product.originalPrice}</span>`;
        }
        productPrice.innerHTML = priceHTML;
    }
    
    if (productDescription) productDescription.textContent = product.description;
    
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
        addToCartBtn.onclick = function() {
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('cart');
                closeQuickView();
                return;
            }
            
            // Simulate clicking the actual add to cart button
            const cartBtn = document.querySelector(`[data-nile-id="${productId}"], [data-treasure-id="${productId}"]`);
            if (cartBtn) {
                const addToCartBtn = cartBtn.closest('.nile-card, .treasure-card').querySelector('.nile-add-to-cart, .treasure-cart-btn');
                if (addToCartBtn) {
                    addToCartBtn.click();
                }
            }
            closeQuickView();
        };
    }

    if (addToWishlistBtn) {
        addToWishlistBtn.onclick = function() {
            // STRICT LOGIN CHECK
            if (!isUserLoggedIn()) {
                showLoginRequiredModal('wishlist');
                closeQuickView();
                return;
            }
            
            // Simulate clicking the actual wishlist button
            const wishlistBtn = document.querySelector(`.nile-wishlist-btn[data-nile-id="${productId}"], .treasure-wishlist[data-treasure-id="${productId}"]`);
            if (wishlistBtn) {
                wishlistBtn.click();
            }
            closeQuickView();
        };
    }

    // Show modal
    modal.style.display = 'flex';
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
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Setup cart and wishlist links WITH LOGIN CHECKS
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
        newsletterForm.addEventListener('submit', function (e) {
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

// Update active navigation link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    if (currentPage === 'EgyHome.html' || currentPage === '' || currentPage === 'index.html') {
        const homeLink = document.querySelector('a[href="EgyHome.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
}

// Export functions for debugging
window.collectionsPage = {
    isUserLoggedIn,
    getCurrentUser,
    showLoginRequiredModal,
    debug: function() {
        console.log('=== Collections.js Debug Info ===');
        console.log('User logged in:', isUserLoggedIn());
        console.log('Current user:', getCurrentUser());
        console.log('Cart items:', cartItems.length);
        console.log('Wishlist items:', wishlistItems.length);
        console.log('STRICT LOGIN ENFORCEMENT: ON');
        console.log('===========================');
    }
};

console.log('Collections.js loaded successfully with STRICT LOGIN REQUIREMENT!');
console.log('Users MUST sign in to add items to cart or wishlist.');
console.log('Debug commands available in window.collectionsPage');
console.log('Type collectionsPage.debug() for current status');