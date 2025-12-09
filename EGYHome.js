// EGYHome.js - ENFORCED LOGIN REQUIREMENT FOR CART/WISHLIST

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
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Egytopia Home Page...');
    console.log('STRICT LOGIN ENFORCEMENT: Users must sign in to add to cart/wishlist');
    
    // Initialize counts from shared manager
    if (window.cartManager) {
        window.cartManager.initializeCounts();
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
    console.log('User type:', getUserType());
});

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
        showNotification(`${product.title} added to wishlist!`);
        
        // Animate the heart icon
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    } else {
        showNotification(`${product.title} removed from wishlist!`);
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
    showNotification(`${product.title} added to cart!`);
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
        showNotification(`${product.title} added to wishlist!`);
    } else {
        showNotification(`${product.title} is already in your wishlist!`, 'info');
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
    
    button.textContent = 'Added!';
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

// Category Filtering (same as before)
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

// Stats Animation (same as before)
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

// Newsletter (same as before)
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        console.log('Setting up newsletter form...');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && email.includes('@')) {
                showNotification(`Thank you for subscribing with ${email}! You will receive our updates soon.`);
                this.reset();
            } else {
                showNotification('Please enter a valid email address!', 'error');
                emailInput.focus();
            }
        });
    }
}

// Social Animations (same as before)
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

// Navigation handler (same as before)
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
                showNotification(`${pageName.charAt(0).toUpperCase() + pageName.slice(1)} page is coming soon!`, 'info');
            } else {
                updateActiveNavLink();
            }
        });
    });
}

// Update active navigation link (same as before)
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

// Mobile Navigation (same as before)
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

// Scroll Effects (same as before)
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

// Show notification (same as before)
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

// Animate value counter (same as before)
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
    isUserLoggedIn,
    getCurrentUser,
    checkLoginStatus,
    showLoginRequiredModal,
    debug: function() {
        console.log('=== EGYHome.js Debug Info ===');
        console.log('User logged in:', isUserLoggedIn());
        console.log('Current user:', getCurrentUser());
        console.log('Cart manager exists:', !!window.cartManager);
        console.log('Wishlist buttons:', document.querySelectorAll('.wishlist-btn').length);
        console.log('Add to cart buttons:', document.querySelectorAll('.add-to-cart').length);
        console.log('STRICT LOGIN ENFORCEMENT: ON');
        console.log('===========================');
    }
};

console.log('EGYHome.js loaded successfully with STRICT LOGIN REQUIREMENT!');
console.log('Users MUST sign in to add items to cart or wishlist.');
console.log('Debug commands available in window.homePage');
console.log('Type homePage.debug() for current status');