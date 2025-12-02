// DOM Elements
const authSection = document.getElementById('authSection');
const customerDashboard = document.getElementById('customerDashboard');
const profileSection = document.getElementById('profileSection');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const userTypeSelector = document.getElementById('userTypeSelector');
const typeOptions = document.querySelectorAll('.type-option');
const continueBtn = document.getElementById('continueBtn');
const customerFeatures = document.getElementById('customerFeatures');
const artisanFeatures = document.getElementById('artisanFeatures');
const authFormContainer = document.getElementById('authFormContainer');
const userTypeInput = document.getElementById('userType');
const showcaseFeature = document.getElementById('showcaseFeature');
const earnFeature = document.getElementById('earnFeature');
const communityFeature = document.getElementById('communityFeature');
const addProductBtn = document.getElementById('addProductBtn');
const artisanLogoutBtn = document.getElementById('artisanLogoutBtn');
const customerLogoutBtn = document.getElementById('customerLogoutBtn');
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const cancelProductBtn = document.getElementById('cancelProductBtn');
const saveProductBtn = document.getElementById('saveProductBtn');
const productForm = document.getElementById('productForm');
const uploadImageBtn = document.getElementById('uploadImageBtn');
const productImage = document.getElementById('productImage');
const imagePreview = document.getElementById('imagePreview');
const artisanProducts = document.getElementById('artisanProducts');
const noProductsMessage = document.getElementById('noProductsMessage');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const customerName = document.getElementById('customerName');
const customerEmail = document.getElementById('customerEmail');
const productsCount = document.getElementById('productsCount');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const switchToSignup = document.getElementById('switchToSignup');
const switchToSignin = document.getElementById('switchToSignin');
const modalTitle = document.getElementById('modalTitle');
const userNavItem = document.getElementById('userNavItem');
const navUserName = document.getElementById('navUserName');
const navUserType = document.getElementById('navUserType');
const navLogoutBtn = document.getElementById('navLogoutBtn');
const wishlistCount = document.getElementById('wishlistCount');
const cartCount = document.getElementById('cartCount');
const switchToArtisan = document.getElementById('switchToArtisan');

// Current user and products data
let currentUser = null;
let artisanProductsData = [];
let editingProductId = null;
let selectedUserType = null;

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsStorage();
    checkAuthStatus();
    setupMobileNavigation();
    setupScrollEffects();
    setupUserTypeSelection();
    setupAuthEventListeners();
    setupCustomerDashboard();
});

// Initialize products storage for artisan items only
function initializeProductsStorage() {
    const existingArtisanProducts = localStorage.getItem('egytopiaArtisanProducts');
    if (!existingArtisanProducts) {
        localStorage.setItem('egytopiaArtisanProducts', JSON.stringify([]));
    }
    
    // Initialize users storage if not exists
    if (!localStorage.getItem('egytopiaUsers')) {
        localStorage.setItem('egytopiaUsers', JSON.stringify([]));
    }
    
    // Initialize customer data storage - USING SHARED.JS KEYS
    if (!localStorage.getItem('egytopiaWishlist')) {
        localStorage.setItem('egytopiaWishlist', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('egytopiaCart')) {
        localStorage.setItem('egytopiaCart', JSON.stringify([]));
    }
}

// Mobile Navigation
function setupMobileNavigation() {
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

// Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Setup user type selection
function setupUserTypeSelection() {
    typeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            typeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Get selected type
            selectedUserType = this.getAttribute('data-type');
            
            // Enable continue button
            continueBtn.disabled = false;
            
            // Update features display
            updateFeaturesDisplay(selectedUserType);
            
            // Update form titles
            updateFormTitles(selectedUserType);
        });
    });

    // Continue button click
    continueBtn.addEventListener('click', function() {
        if (selectedUserType) {
            // Show auth form
            authFormContainer.style.display = 'block';
            
            // Hide features that don't match the selected type
            if (selectedUserType === 'customer') {
                artisanFeatures.style.display = 'none';
                customerFeatures.style.display = 'block';
            } else {
                customerFeatures.style.display = 'none';
                artisanFeatures.style.display = 'block';
            }
            
            // Set hidden input value
            userTypeInput.value = selectedUserType;
            
            // Scroll to form
            authFormContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Update features display based on user type
function updateFeaturesDisplay(userType) {
    if (userType === 'customer') {
        customerFeatures.style.display = 'block';
        artisanFeatures.style.display = 'none';
    } else {
        customerFeatures.style.display = 'none';
        artisanFeatures.style.display = 'block';
    }
}

// Update form titles based on user type
function updateFormTitles(userType) {
    if (userType === 'customer') {
        formTitle.textContent = 'Welcome to Egytopia';
        formSubtitle.textContent = 'Sign in to start shopping';
    } else {
        formTitle.textContent = 'Welcome to Artisan Portal';
        formSubtitle.textContent = 'Sign in to manage your crafts';
    }
}

// Check authentication status
function checkAuthStatus() {
    const savedUser = localStorage.getItem('egytopiaUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        
        // Update navigation bar
        updateNavigationBar();
        
        // Check user type and show appropriate dashboard
        if (currentUser.userType === 'artisan') {
            showProfile();
        } else {
            showCustomerDashboard();
        }
    } else {
        showAuth();
    }
}

// Update navigation bar for logged in users
function updateNavigationBar() {
    if (currentUser) {
        // Show user navigation
        userNavItem.style.display = 'block';
        navUserName.textContent = currentUser.name;
        navUserType.textContent = currentUser.userType === 'artisan' ? 'Artisan' : 'Customer';
        
        // Setup logout button in nav
        navLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
        });
    } else {
        userNavItem.style.display = 'none';
    }
}

// Show authentication section
function showAuth() {
    authSection.style.display = 'flex';
    customerDashboard.style.display = 'none';
    profileSection.style.display = 'none';
    
    // Reset form
    authFormContainer.style.display = 'block';
    typeOptions.forEach(opt => opt.classList.remove('selected'));
    continueBtn.disabled = true;
    selectedUserType = null;
    
    // Show both features initially
    customerFeatures.style.display = 'none';
    artisanFeatures.style.display = 'none';
    userTypeSelector.style.display = 'block';
    
    // Reset form titles
    formTitle.textContent = 'Welcome Back';
    formSubtitle.textContent = 'Sign in to your account';
    
    // Setup feature click events
    setupFeatureClicks();
    
    // Update navigation bar
    updateNavigationBar();
}

// Show customer dashboard
function showCustomerDashboard() {
    authSection.style.display = 'none';
    customerDashboard.style.display = 'block';
    profileSection.style.display = 'none';
    
    // Update customer info
    customerName.textContent = currentUser.name;
    customerEmail.textContent = currentUser.email;
    
    // Update stats
    updateCustomerStats();
    
    // Load cart and wishlist items
    loadCartItems();
    loadWishlistItems();
    
    // Listen for storage changes to update counts
    window.addEventListener('storage', handleStorageChanges);
}

// Handle storage changes from other tabs/pages
function handleStorageChanges(e) {
    if (e.key === 'egytopiaCart' || e.key === 'egytopiaWishlist') {
        updateCustomerStats();
        loadCartItems();
        loadWishlistItems();
    }
}

// Show profile section (for artisans only)
function showProfile() {
    authSection.style.display = 'none';
    customerDashboard.style.display = 'none';
    profileSection.style.display = 'block';
    
    // Update profile info
    profileName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
    
    // Load artisan's products
    loadArtisanProducts();
    
    // Setup profile event listeners
    setupProfileEventListeners();
}

// Setup customer dashboard
function setupCustomerDashboard() {
    if (customerLogoutBtn) {
        customerLogoutBtn.addEventListener('click', function() {
            logoutUser();
        });
    }
    
    if (switchToArtisan) {
        switchToArtisan.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Do you want to switch to artisan account? You will need to sign up as an artisan.')) {
                logoutUser();
                setTimeout(() => {
                    // Select artisan option
                    typeOptions.forEach(opt => {
                        if (opt.getAttribute('data-type') === 'artisan') {
                            opt.click();
                        }
                    });
                    continueBtn.click();
                }, 100);
            }
        });
    }
    
    // Set up view cart and wishlist links
    const viewCart = document.getElementById('viewCart');
    const viewWishlist = document.getElementById('viewWishlist');
    
    if (viewCart) {
        viewCart.addEventListener('click', function(e) {
            e.preventDefault();
            showCartDetails();
        });
    }
    
    if (viewWishlist) {
        viewWishlist.addEventListener('click', function(e) {
            e.preventDefault();
            showWishlistDetails();
        });
    }
}

// Update customer stats - USING SHARED.JS KEYS
function updateCustomerStats() {
    // Get wishlist and cart from localStorage - MATCHING SHARED.JS KEYS
    const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    
    // Update counts
    wishlistCount.textContent = wishlist.length;
    cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 1), 0);
}

// Load and display cart items - USING SHARED.JS KEYS
function loadCartItems() {
    const cartSection = document.querySelector('.dashboard-section:last-child');
    if (!cartSection) return;
    
    const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    
    // Remove existing cart section if present
    const existingCartSection = document.querySelector('.cart-items-container');
    if (existingCartSection) {
        existingCartSection.remove();
    }
    
    // Create cart display if items exist
    if (cart.length > 0) {
        const cartHTML = `
            <div class="dashboard-section cart-items-container">
                <h2 class="section-title">My Cart Items</h2>
                <div class="cart-items">
                    ${cart.map(item => `
                        <div class="cart-item" data-id="${item.id}">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="cart-item-info">
                                <h4 class="cart-item-title">${item.title}</h4>
                                <p class="cart-item-price">${item.price}</p>
                                <p class="cart-item-quantity">Quantity: ${item.quantity || 1}</p>
                            </div>
                            <div class="cart-item-actions">
                                <button class="btn btn-small btn-remove-from-cart" data-id="${item.id}">
                                    <i class="fas fa-trash"></i> Remove
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="cart-summary">
                    <div class="cart-total">
                        Total Items: ${cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                    </div>
                    <div class="cart-actions">
                        <a href="cart.html" class="btn btn-primary">View Full Cart</a>
                        <button class="btn btn-secondary" id="clearCartBtn">Clear Cart</button>
                    </div>
                </div>
            </div>
        `;
        
        cartSection.insertAdjacentHTML('beforebegin', cartHTML);
        
        // Add event listeners for remove buttons
        document.querySelectorAll('.btn-remove-from-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
        
        // Add clear cart button event
        const clearCartBtn = document.getElementById('clearCartBtn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear your entire cart?')) {
                    clearCart();
                }
            });
        }
    }
}

// Load and display wishlist items - USING SHARED.JS KEYS
function loadWishlistItems() {
    const cartSection = document.querySelector('.cart-items-container') || document.querySelector('.dashboard-section:last-child');
    if (!cartSection) return;
    
    const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    
    // Remove existing wishlist section if present
    const existingWishlistSection = document.querySelector('.wishlist-items-container');
    if (existingWishlistSection) {
        existingWishlistSection.remove();
    }
    
    // Create wishlist display if items exist
    if (wishlist.length > 0) {
        const wishlistHTML = `
            <div class="dashboard-section wishlist-items-container">
                <h2 class="section-title">My Wishlist Items</h2>
                <div class="wishlist-items">
                    ${wishlist.map(item => `
                        <div class="wishlist-item" data-id="${item.id}">
                            <div class="wishlist-item-image">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="wishlist-item-info">
                                <h4 class="wishlist-item-title">${item.title}</h4>
                                <p class="wishlist-item-price">${item.price}</p>
                                <p class="wishlist-item-rating">${item.ratingText || '★★★★★'}</p>
                            </div>
                            <div class="wishlist-item-actions">
                                <button class="btn btn-small btn-primary btn-add-to-cart" data-id="${item.id}">
                                    <i class="fas fa-cart-plus"></i> Add to Cart
                                </button>
                                <button class="btn btn-small btn-remove-from-wishlist" data-id="${item.id}">
                                    <i class="fas fa-heart-broken"></i> Remove
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="wishlist-summary">
                    <div class="wishlist-count">
                        Total Items: ${wishlist.length}
                    </div>
                    <div class="wishlist-actions">
                        <button class="btn btn-secondary" id="clearWishlistBtn">Clear Wishlist</button>
                    </div>
                </div>
            </div>
        `;
        
        cartSection.insertAdjacentHTML('beforebegin', wishlistHTML);
        
        // Add event listeners
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCartFromWishlist(productId);
            });
        });
        
        document.querySelectorAll('.btn-remove-from-wishlist').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromWishlist(productId);
            });
        });
        
        // Add clear wishlist button event
        const clearWishlistBtn = document.getElementById('clearWishlistBtn');
        if (clearWishlistBtn) {
            clearWishlistBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to clear your entire wishlist?')) {
                    clearWishlist();
                }
            });
        }
    }
}

// Add to cart from wishlist - USING SHARED.JS COMPATIBLE METHOD
function addToCartFromWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    
    const product = wishlist.find(item => item.id === productId);
    
    if (product) {
        // Check if product already in cart
        const existingCartItem = cart.find(item => item.id === productId);
        
        if (existingCartItem) {
            existingCartItem.quantity = (existingCartItem.quantity || 1) + 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('egytopiaCart', JSON.stringify(cart));
        updateCustomerStats();
        showNotification('Added to cart!', 'success');
        
        // Also trigger shared.js update
        if (window.cartManager && typeof window.cartManager.saveCart === 'function') {
            window.cartManager.saveCart(cart);
        }
        
        // Reload cart display
        reloadCartDisplay();
    }
}

// Remove from cart - USING SHARED.JS COMPATIBLE METHOD
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('egytopiaCart', JSON.stringify(cart));
    updateCustomerStats();
    showNotification('Removed from cart!', 'success');
    
    // Also trigger shared.js update
    if (window.cartManager && typeof window.cartManager.saveCart === 'function') {
        window.cartManager.saveCart(cart);
    }
    
    // Reload cart display
    reloadCartDisplay();
}

// Remove from wishlist - USING SHARED.JS COMPATIBLE METHOD
function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('egytopiaWishlist', JSON.stringify(wishlist));
    updateCustomerStats();
    showNotification('Removed from wishlist!', 'success');
    
    // Also trigger shared.js update
    if (window.cartManager && typeof window.cartManager.saveWishlist === 'function') {
        window.cartManager.saveWishlist(wishlist);
    }
    
    // Reload wishlist display
    reloadWishlistDisplay();
}

// Clear entire cart
function clearCart() {
    localStorage.setItem('egytopiaCart', JSON.stringify([]));
    updateCustomerStats();
    showNotification('Cart cleared!', 'success');
    
    // Also trigger shared.js update
    if (window.cartManager && typeof window.cartManager.saveCart === 'function') {
        window.cartManager.saveCart([]);
    }
    
    reloadCartDisplay();
}

// Clear entire wishlist
function clearWishlist() {
    localStorage.setItem('egytopiaWishlist', JSON.stringify([]));
    updateCustomerStats();
    showNotification('Wishlist cleared!', 'success');
    
    // Also trigger shared.js update
    if (window.cartManager && typeof window.cartManager.saveWishlist === 'function') {
        window.cartManager.saveWishlist([]);
    }
    
    reloadWishlistDisplay();
}

// Reload cart display
function reloadCartDisplay() {
    loadCartItems();
}

// Reload wishlist display
function reloadWishlistDisplay() {
    loadWishlistItems();
}

// Show cart details in modal - USING SHARED.JS KEYS
function showCartDetails() {
    const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Calculate total price
    const totalPrice = cart.reduce((total, item) => {
        // Extract numeric price safely
        const priceStr = item.price || '0';
        const priceMatch = priceStr.match(/[\d,]+\.?\d*/);
        const price = priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : 0;
        return total + (price * (item.quantity || 1));
    }, 0);
    
    // Create modal for cart details
    const modalHTML = `
        <div class="modal-overlay active" id="cartModal">
            <div class="modal" style="max-width: 800px;">
                <button class="close-modal" id="closeCartModal">&times;</button>
                <div class="modal-header">
                    <h2 class="modal-title">My Shopping Cart</h2>
                </div>
                <div class="modal-body">
                    <div class="cart-details">
                        ${cart.map(item => `
                            <div class="cart-detail-item">
                                <div class="cart-detail-image">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>
                                <div class="cart-detail-info">
                                    <h4>${item.title}</h4>
                                    <p>${item.price}</p>
                                    <p>Quantity: ${item.quantity || 1}</p>
                                </div>
                                <div class="cart-detail-actions">
                                    <button class="btn btn-small btn-remove" data-id="${item.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="cart-total-summary">
                        <div class="cart-total-item">
                            <span>Total Items:</span>
                            <span>${cart.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
                        </div>
                        <div class="cart-total-item">
                            <span>Estimated Total:</span>
                            <span>${totalPrice.toFixed(2)} EGP</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="closeCartBtn">Continue Shopping</button>
                    <a href="cart.html" class="btn btn-primary">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for the modal
    document.getElementById('closeCartModal').addEventListener('click', closeCartModal);
    document.getElementById('closeCartBtn').addEventListener('click', closeCartModal);
    
    // Add event listeners for remove buttons
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
            closeCartModal();
        });
    });
}

// Show wishlist details in modal - USING SHARED.JS KEYS
function showWishlistDetails() {
    const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    
    if (wishlist.length === 0) {
        alert('Your wishlist is empty!');
        return;
    }
    
    // Create modal for wishlist details
    const modalHTML = `
        <div class="modal-overlay active" id="wishlistModal">
            <div class="modal" style="max-width: 800px;">
                <button class="close-modal" id="closeWishlistModal">&times;</button>
                <div class="modal-header">
                    <h2 class="modal-title">My Wishlist</h2>
                </div>
                <div class="modal-body">
                    <div class="wishlist-details">
                        ${wishlist.map(item => `
                            <div class="wishlist-detail-item">
                                <div class="wishlist-detail-image">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>
                                <div class="wishlist-detail-info">
                                    <h4>${item.title}</h4>
                                    <p>${item.price}</p>
                                    <p>${item.ratingText || '★★★★★'}</p>
                                    <p class="wishlist-item-description">${item.description ? item.description.substring(0, 100) + '...' : ''}</p>
                                </div>
                                <div class="wishlist-detail-actions">
                                    <button class="btn btn-small btn-primary btn-add" data-id="${item.id}">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                    <button class="btn btn-small btn-remove" data-id="${item.id}">
                                        <i class="fas fa-trash"></i> Remove
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="wishlist-summary">
                        <div class="wishlist-total">
                            <span>Total Items:</span>
                            <span>${wishlist.length}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="closeWishlistBtn">Close</button>
                    <a href="categories.html" class="btn btn-primary">Continue Shopping</a>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for the modal
    document.getElementById('closeWishlistModal').addEventListener('click', closeWishlistModal);
    document.getElementById('closeWishlistBtn').addEventListener('click', closeWishlistModal);
    
    // Add event listeners for action buttons
    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCartFromWishlist(productId);
            closeWishlistModal();
        });
    });
    
    document.querySelectorAll('.btn-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromWishlist(productId);
            closeWishlistModal();
        });
    });
}

// Close cart modal
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.remove();
    }
}

// Close wishlist modal
function closeWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.remove();
    }
}

// Setup authentication event listeners
function setupAuthEventListeners() {
    // Auth tabs functionality
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding form
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${tabName}Form`) {
                    form.classList.add('active');
                }
            });
            
            // Update form titles
            if (tabName === 'signin') {
                formTitle.textContent = selectedUserType === 'customer' ? 'Welcome to Egytopia' : 'Welcome to Artisan Portal';
                formSubtitle.textContent = selectedUserType === 'customer' ? 'Sign in to start shopping' : 'Sign in to manage your crafts';
            } else {
                formTitle.textContent = selectedUserType === 'customer' ? 'Join Egytopia' : 'Join Our Community';
                formSubtitle.textContent = selectedUserType === 'customer' ? 'Create your shopping account' : 'Create your artisan account';
            }
        });
    });

    // Switch between sign in and sign up
    switchToSignup.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="signup"]').classList.add('active');
        
        authForms.forEach(form => form.classList.remove('active'));
        signupForm.classList.add('active');
        
        formTitle.textContent = selectedUserType === 'customer' ? 'Join Egytopia' : 'Join Our Community';
        formSubtitle.textContent = selectedUserType === 'customer' ? 'Create your shopping account' : 'Create your artisan account';
    });

    switchToSignin.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="signin"]').classList.add('active');
        
        authForms.forEach(form => form.classList.remove('active'));
        signinForm.classList.add('active');
        
        formTitle.textContent = selectedUserType === 'customer' ? 'Welcome to Egytopia' : 'Welcome to Artisan Portal';
        formSubtitle.textContent = selectedUserType === 'customer' ? 'Sign in to start shopping' : 'Sign in to manage your crafts';
    });

    // Sign in form submission
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        
        // Simple validation
        const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
            
            // Update navigation bar
            updateNavigationBar();
            
            // Show appropriate dashboard based on user type
            if (currentUser.userType === 'artisan') {
                showProfile();
            } else {
                showCustomerDashboard();
            }
            
            showNotification('Successfully signed in!', 'success');
        } else {
            showNotification('Invalid email or password!', 'error');
        }
    });

    // Sign up form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const userType = userTypeInput.value || selectedUserType;
        
        // Validation
        if (!userType) {
            showNotification('Please select a user type first!', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters long!', 'error');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
        if (users.find(u => u.email === email)) {
            showNotification('User with this email already exists!', 'error');
            return;
        }
        
        // Create new user with user type
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            userType, // 'customer' or 'artisan'
            joined: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('egytopiaUsers', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
        
        // Update navigation bar
        updateNavigationBar();
        
        // Show appropriate dashboard
        if (currentUser.userType === 'artisan') {
            showProfile();
        } else {
            showCustomerDashboard();
        }
        
        showNotification('Account created successfully!', 'success');
    });
}

// Setup feature click events
function setupFeatureClicks() {
    // All features trigger the sign in flow
    if (showcaseFeature) {
        showcaseFeature.addEventListener('click', function() {
            document.getElementById('signinEmail').focus();
            showNotification('Please sign in to access your artisan profile');
        });
    }
    
    if (earnFeature) {
        earnFeature.addEventListener('click', function() {
            document.getElementById('signinEmail').focus();
            showNotification('Please sign in to start earning from your craft');
        });
    }
    
    if (communityFeature) {
        communityFeature.addEventListener('click', function() {
            document.getElementById('signinEmail').focus();
            showNotification('Please sign in to join our artisan community');
        });
    }
}

// Setup profile event listeners
function setupProfileEventListeners() {
    // Artisan logout functionality
    if (artisanLogoutBtn) {
        artisanLogoutBtn.addEventListener('click', function() {
            logoutUser();
        });
    }

    // Add product button
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            openProductModal();
        });
    }

    // Close product modal
    if (closeProductModal) {
        closeProductModal.addEventListener('click', closeProductModalFunc);
    }
    
    if (cancelProductBtn) {
        cancelProductBtn.addEventListener('click', closeProductModalFunc);
    }

    // Image upload functionality
    if (uploadImageBtn) {
        uploadImageBtn.addEventListener('click', function() {
            productImage.click();
        });
    }

    if (productImage) {
        productImage.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Product preview">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save product
    if (saveProductBtn) {
        saveProductBtn.addEventListener('click', saveProduct);
    }
}

// Logout user
function logoutUser() {
    localStorage.removeItem('egytopiaUser');
    currentUser = null;
    showAuth();
    showNotification('Successfully signed out!', 'success');
}

// Open product modal for adding or editing
function openProductModal(productId = null) {
    editingProductId = productId;
    
    if (productId) {
        // Editing existing product
        modalTitle.textContent = 'Edit Product';
        saveProductBtn.textContent = 'Update Product';
        
        const product = artisanProductsData.find(p => p.id === productId);
        if (product) {
            document.getElementById('productName').value = product.title;
            document.getElementById('productPrice').value = product.numericPrice;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productCategory').value = product.category;
            
            // Set image preview
            imagePreview.innerHTML = `<img src="${product.image}" alt="Product preview">`;
        }
    } else {
        // Adding new product
        modalTitle.textContent = 'Add New Product';
        saveProductBtn.textContent = 'Add Product';
        
        // Reset form
        productForm.reset();
        imagePreview.innerHTML = `
            <div class="image-placeholder">
                <i class="fas fa-image" style="font-size: 48px; margin-bottom: 10px;"></i>
                <p>No image selected</p>
            </div>
        `;
    }
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModalFunc() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    editingProductId = null;
}

// Save product
function saveProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productCategory = document.getElementById('productCategory').value;
    const productImageFile = productImage.files[0];
    
    // Validation
    if (!productName || !productPrice || !productDescription || !productCategory) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    if (editingProductId) {
        // Update existing product
        updateProduct(productName, productPrice, productDescription, productCategory, productImageFile);
    } else {
        // Add new product
        addNewProduct(productName, productPrice, productDescription, productCategory, productImageFile);
    }
}

// Add new product
function addNewProduct(productName, productPrice, productDescription, productCategory, productImageFile) {
    if (!productImageFile) {
        showNotification('Please select a product image!', 'error');
        return;
    }
    
    // Create product object
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
            isArtisanProduct: true // Flag to identify artisan products
        };
        
        // Save product to artisan's collection
        artisanProductsData.push(newProduct);
        saveArtisanProducts();
        
        // Add to artisan products list (will be combined with default products in categories page)
        addProductToArtisanProductsList(newProduct);
        
        // Update UI
        loadArtisanProducts();
        closeProductModalFunc();
        showNotification('Product added successfully! It will appear in the categories page.', 'success');
    };
    reader.readAsDataURL(productImageFile);
}

// Update existing product
function updateProduct(productName, productPrice, productDescription, productCategory, productImageFile) {
    const productIndex = artisanProductsData.findIndex(p => p.id === editingProductId);
    if (productIndex === -1) return;
    
    // Update product data
    artisanProductsData[productIndex].title = productName;
    artisanProductsData[productIndex].price = `${parseFloat(productPrice).toLocaleString()} EGP`;
    artisanProductsData[productIndex].numericPrice = parseFloat(productPrice);
    artisanProductsData[productIndex].description = productDescription;
    artisanProductsData[productIndex].category = productCategory;
    
    // Update image if provided
    if (productImageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            artisanProductsData[productIndex].image = e.target.result;
            completeProductUpdate();
        };
        reader.readAsDataURL(productImageFile);
    } else {
        completeProductUpdate();
    }
    
    function completeProductUpdate() {
        // Save updated products
        saveArtisanProducts();
        
        // Update in artisan products list
        updateProductInArtisanProductsList(artisanProductsData[productIndex]);
        
        // Update UI
        loadArtisanProducts();
        closeProductModalFunc();
        showNotification('Product updated successfully!', 'success');
    }
}

// Load artisan's products
function loadArtisanProducts() {
    const savedProducts = localStorage.getItem(`egytopiaArtisanProducts_${currentUser.id}`);
    artisanProductsData = savedProducts ? JSON.parse(savedProducts) : [];
    
    // Update products count
    productsCount.textContent = artisanProductsData.length;
    
    // Show/hide no products message
    if (artisanProductsData.length === 0) {
        noProductsMessage.style.display = 'block';
        artisanProducts.style.display = 'none';
    } else {
        noProductsMessage.style.display = 'none';
        artisanProducts.style.display = 'grid';
        
        // Render products
        artisanProducts.innerHTML = '';
        artisanProductsData.forEach(product => {
            const productCard = createProductCard(product);
            artisanProducts.appendChild(productCard);
        });
    }
}

// Create product card for artisan's dashboard
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description.substring(0, 60)}...</p>
            <div class="product-price">${product.price}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small edit-product" data-id="${product.id}">Edit</button>
                <button class="btn btn-secondary btn-small delete-product" data-id="${product.id}">Delete</button>
            </div>
        </div>
    `;
    
    // Add event listeners for edit and delete
    const editBtn = card.querySelector('.edit-product');
    const deleteBtn = card.querySelector('.delete-product');
    
    editBtn.addEventListener('click', () => openProductModal(product.id));
    deleteBtn.addEventListener('click', () => deleteProduct(product.id));
    
    return card;
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        artisanProductsData = artisanProductsData.filter(product => product.id !== productId);
        saveArtisanProducts();
        
        // Also remove from artisan products list
        removeProductFromArtisanProductsList(productId);
        
        loadArtisanProducts();
        showNotification('Product deleted successfully!', 'success');
    }
}

// Save artisan's products to localStorage
function saveArtisanProducts() {
    localStorage.setItem(`egytopiaArtisanProducts_${currentUser.id}`, JSON.stringify(artisanProductsData));
}

// Add product to artisan products list (separate from default products)
function addProductToArtisanProductsList(product) {
    // Get existing artisan products from localStorage
    let existingArtisanProducts = JSON.parse(localStorage.getItem('egytopiaArtisanProducts') || '[]');
    
    // Check if product already exists
    const existingIndex = existingArtisanProducts.findIndex(p => p.id === product.id);
    
    if (existingIndex === -1) {
        // Add new product
        existingArtisanProducts.push(product);
        localStorage.setItem('egytopiaArtisanProducts', JSON.stringify(existingArtisanProducts));
        console.log('Product added to artisan products list:', product);
    }
}

// Update product in artisan products list
function updateProductInArtisanProductsList(updatedProduct) {
    const existingArtisanProducts = JSON.parse(localStorage.getItem('egytopiaArtisanProducts') || '[]');
    const productIndex = existingArtisanProducts.findIndex(p => p.id === updatedProduct.id);
    
    if (productIndex !== -1) {
        existingArtisanProducts[productIndex] = updatedProduct;
        localStorage.setItem('egytopiaArtisanProducts', JSON.stringify(existingArtisanProducts));
        console.log('Product updated in artisan products list:', updatedProduct);
    }
}

// Remove product from artisan products list
function removeProductFromArtisanProductsList(productId) {
    const existingArtisanProducts = JSON.parse(localStorage.getItem('egytopiaArtisanProducts') || '[]');
    const updatedProducts = existingArtisanProducts.filter(product => product.id !== productId);
    localStorage.setItem('egytopiaArtisanProducts', JSON.stringify(updatedProducts));
    console.log('Product removed from artisan products list:', productId);
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