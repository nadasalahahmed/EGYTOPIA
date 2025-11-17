// EGYHome.js - FIXED VERSION

// Cart functionality
let cartCount = 0;
let cartItems = [];
let wishlistCount = 0;
let wishlistItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
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
        ratingText: "★★★★★ (5)"
    },
    2: {
        id: 2,
        title: "Ceramic Lotus Vase",
        price: "890 EGP",
        numericPrice: 890,
        description: "Hand-painted traditional Egyptian pottery featuring the iconic lotus flower design. This beautiful vase is made from high-quality ceramic and showcases the rich artistic heritage of Egypt. Perfect for home decoration or as a special gift.",
        image: "https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBhcHlydXMlMjBhcnR8ZW58MXx8fHwxNzYyODE1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)"
    },
    3: {
        id: 3,
        title: "Silver Ankh Pendant",
        price: "1,450 EGP",
        numericPrice: 1450,
        description: "This sterling silver ankh pendant represents the ancient Egyptian symbol of life. Meticulously crafted with attention to detail, it makes a meaningful addition to any jewelry collection. Comes with a matching silver chain.",
        image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        ratingText: "★★★★☆ (4.2)"
    },
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    initializeWishlist();
    setupMobileNavigation();
    setupScrollEffects();
    setupQuickViewModal();
    setupAddToCart();
    setupWishlistButtons();
    setupCategoryFiltering();
    setupStatsAnimation();
    setupNewsletter();
    setupSocialAnimations();
    loadCartFromStorage();
    loadWishlistFromStorage();
    updateAllWishlistHearts(); // Initialize heart states
});

// Initialize cart from localStorage
function initializeCart() {
    const savedCart = localStorage.getItem('egytopiaCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        updateCartCount();
    }
}

// Initialize wishlist from localStorage
function initializeWishlist() {
    const savedWishlist = localStorage.getItem('egytopiaWishlist');
    if (savedWishlist) {
        wishlistItems = JSON.parse(savedWishlist);
        wishlistCount = wishlistItems.length;
        updateWishlistCount();
    }
}

// Mobile Navigation
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

// Scroll Effects
function setupScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
    });
}

// Quick View Modal
function setupQuickViewModal() {
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalRating = document.querySelector('.modal-rating .stars');
    const modalRatingValue = document.querySelector('.modal-rating .rating-value');

    // Open modal with product details
    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = products[productId];
            
            if (modalImg) modalImg.src = product.image;
            if (modalImg) modalImg.alt = product.title;
            if (modalTitle) modalTitle.textContent = product.title;
            if (modalPrice) modalPrice.textContent = product.price;
            if (modalDescription) modalDescription.textContent = product.description;
            
            // Update rating stars
            if (modalRating) {
                modalRating.innerHTML = '';
                const fullStars = Math.floor(product.rating);
                const hasHalfStar = product.rating % 1 !== 0;
                
                for (let i = 0; i < fullStars; i++) {
                    modalRating.innerHTML += '<i class="fas fa-star"></i>';
                }
                
                if (hasHalfStar) {
                    modalRating.innerHTML += '<i class="fas fa-star-half-alt"></i>';
                }
                
                const emptyStars = 5 - Math.ceil(product.rating);
                for (let i = 0; i < emptyStars; i++) {
                    modalRating.innerHTML += '<i class="far fa-star"></i>';
                }
            }
            
            if (modalRatingValue) modalRatingValue.textContent = product.ratingText;
            
            // Update modal add to cart button
            const modalAddToCart = document.querySelector('.modal-actions .btn-primary');
            if (modalAddToCart) {
                modalAddToCart.onclick = () => {
                    addProductToCart(product);
                    closeQuickViewModal();
                };
            }
            
            // Update modal wishlist button
            const modalWishlistBtn = document.querySelector('.modal-actions .btn-secondary');
            if (modalWishlistBtn) {
                modalWishlistBtn.onclick = () => {
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

    // Close modal when clicking outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeQuickViewModal();
            }
        });
    }
}

// Close quick view modal
function closeQuickViewModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Add to Cart functionality
function setupAddToCart() {
    // Add to cart buttons for featured products
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
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
        });
    });

    // Cart count click to show cart items
    if (cartCountElement) {
        cartCountElement.addEventListener('click', showCartItems);
    }
}

// Extract numeric price from price string
function extractNumericPrice(priceString) {
    if (!priceString) return 0;
    
    // Remove currency symbols and commas, then parse as number
    const numericString = priceString.replace(/[^0-9.]/g, '');
    const price = parseFloat(numericString);
    
    return isNaN(price) ? 0 : price;
}

// Wishlist functionality
function setupWishlistButtons() {
    // Add wishlist buttons to all product cards
    const productCards = document.querySelectorAll('.product-card, .category-product');
    
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
        
        // Set initial heart state
        updateWishlistButtonState(wishlistBtn, product);
        
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            toggleProductInWishlist(product, wishlistBtn);
        });
        
        card.style.position = 'relative';
        card.appendChild(wishlistBtn);
    });

    // Wishlist count click to show wishlist items
    if (wishlistCountElement) {
        wishlistCountElement.addEventListener('click', showWishlistItems);
    }
}

// Update wishlist button state based on whether product is in wishlist
function updateWishlistButtonState(button, product) {
    const isInWishlist = wishlistItems.some(item => item.title === product.title);
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

// Toggle product in wishlist
function toggleProductInWishlist(product, button) {
    const existingItemIndex = wishlistItems.findIndex(item => item.title === product.title);
    
    if (existingItemIndex !== -1) {
        // Remove from wishlist
        wishlistItems.splice(existingItemIndex, 1);
        wishlistCount = wishlistItems.length;
        
        updateWishlistCount();
        saveWishlistToStorage();
        updateWishlistButtonState(button, product);
        showNotification(`${product.title} removed from wishlist!`);
    } else {
        // Add to wishlist
        wishlistItems.push(product);
        wishlistCount = wishlistItems.length;
        
        updateWishlistCount();
        saveWishlistToStorage();
        updateWishlistButtonState(button, product);
        showNotification(`${product.title} added to wishlist!`);
        
        // Animate the heart icon
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    }
}

// Add product to cart
function addProductToCart(product) {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.title === product.title);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            ...product,
            quantity: 1
        });
    }

    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${product.title} added to cart!`);
}

// Add product to wishlist
function addProductToWishlist(product) {
    // Check if product already exists in wishlist
    const existingItem = wishlistItems.find(item => item.title === product.title);
    
    if (!existingItem) {
        wishlistItems.push(product);
        wishlistCount = wishlistItems.length;
        
        updateWishlistCount();
        saveWishlistToStorage();
        updateAllWishlistHearts(); // Update all hearts when adding via quick view
        showNotification(`${product.title} added to wishlist!`);
    } else {
        showNotification(`${product.title} is already in your wishlist!`, 'info');
    }
}

// Update cart count display
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        
        // Add animation class
        cartCountElement.classList.add('cart-update');
        setTimeout(() => {
            cartCountElement.classList.remove('cart-update');
        }, 300);
    }
}

// Update wishlist count display
function updateWishlistCount() {
    if (wishlistCountElement) {
        wishlistCountElement.textContent = wishlistCount;
        
        // Add animation class
        wishlistCountElement.classList.add('wishlist-update');
        setTimeout(() => {
            wishlistCountElement.classList.remove('wishlist-update');
        }, 300);
    }
}

// Show add to cart animation
function showAddToCartAnimation(button) {
    const originalText = button.textContent;
    const originalBgColor = button.style.backgroundColor;
    
    button.textContent = 'Added!';
    button.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = originalBgColor;
    }, 2000);
}

// Category Filtering
function setupCategoryFiltering() {
    const productCategories = document.querySelectorAll('.product-category');
    
    // Show all categories initially
    showCategory('all');
    
    // Add click event to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category to show
            const category = this.getAttribute('data-category');
            
            // Show selected category
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
    }
}

// Stats Animation
function setupStatsAnimation() {
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statsSection && statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(stat => {
                        animateValue(stat, 0, parseInt(stat.textContent), 2000);
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

// Social Animations
function setupSocialAnimations() {
    const socialIcons = document.querySelectorAll('.social-icons a');
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

// Show cart items when cart count is clicked
function showCartItems() {
    if (cartItems.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Create cart modal
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal-overlay';
    cartModal.innerHTML = `
        <div class="cart-modal">
            <div class="cart-modal-header">
                <h3>Your Cart (${cartCount} items)</h3>
                <button class="close-cart-modal">&times;</button>
            </div>
            <div class="cart-modal-content">
                ${generateCartItemsHTML()}
            </div>
            <div class="cart-modal-footer">
                <div class="cart-total">
                    Total: ${calculateCartTotal()}
                </div>
                <button class="btn btn-primary checkout-btn">Proceed to Checkout</button>
                <button class="btn btn-secondary clear-cart-btn">Clear Cart</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(cartModal);
    
    // Add event listeners for cart modal
    const closeBtn = cartModal.querySelector('.close-cart-modal');
    const clearBtn = cartModal.querySelector('.clear-cart-btn');
    const checkoutBtn = cartModal.querySelector('.checkout-btn');
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(cartModal);
    });
    
    clearBtn.addEventListener('click', clearCart);
    
    checkoutBtn.addEventListener('click', () => {
        showNotification('Proceeding to checkout...');
        // Here you would typically redirect to checkout page
    });
    
    // Add quantity button listeners
    cartModal.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', handleQuantityChange);
    });
    
    // Add remove item listeners
    cartModal.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', handleRemoveItem);
    });
    
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            document.body.removeChild(cartModal);
        }
    });
}

// Show wishlist items when wishlist count is clicked
function showWishlistItems() {
    if (wishlistItems.length === 0) {
        showNotification('Your wishlist is empty!');
        return;
    }
    
    // Create wishlist modal
    const wishlistModal = document.createElement('div');
    wishlistModal.className = 'wishlist-modal-overlay';
    wishlistModal.innerHTML = `
        <div class="wishlist-modal">
            <div class="wishlist-modal-header">
                <h3>Your Wishlist (${wishlistCount} items)</h3>
                <button class="close-wishlist-modal">&times;</button>
            </div>
            <div class="wishlist-modal-content">
                ${generateWishlistItemsHTML()}
            </div>
            <div class="wishlist-modal-footer">
                <button class="btn btn-primary add-all-to-cart-btn">Add All to Cart</button>
                <button class="btn btn-secondary clear-wishlist-btn">Clear Wishlist</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(wishlistModal);
    
    // Add event listeners for wishlist modal
    const closeBtn = wishlistModal.querySelector('.close-wishlist-modal');
    const clearBtn = wishlistModal.querySelector('.clear-wishlist-btn');
    const addAllBtn = wishlistModal.querySelector('.add-all-to-cart-btn');
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(wishlistModal);
    });
    
    clearBtn.addEventListener('click', clearWishlist);
    
    addAllBtn.addEventListener('click', addAllToCart);
    
    // Add individual item listeners
    wishlistModal.querySelectorAll('.wishlist-item .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleWishlistAddToCart);
    });
    
    wishlistModal.querySelectorAll('.wishlist-item .remove-item').forEach(btn => {
        btn.addEventListener('click', handleRemoveFromWishlist);
    });
    
    wishlistModal.addEventListener('click', (e) => {
        if (e.target === wishlistModal) {
            document.body.removeChild(wishlistModal);
        }
    });
}

// Handle quantity changes
function handleQuantityChange(event) {
    const button = event.target;
    const itemId = parseInt(button.getAttribute('data-id'));
    const isPlus = button.classList.contains('plus');
    const isMinus = button.classList.contains('minus');
    
    const item = cartItems.find(item => item.id === itemId);
    if (!item) return;
    
    if (isPlus) {
        item.quantity += 1;
    } else if (isMinus && item.quantity > 1) {
        item.quantity -= 1;
    }
    
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    updateCartCount();
    saveCartToStorage();
    
    // Refresh cart modal
    const cartModal = document.querySelector('.cart-modal-overlay');
    if (cartModal) {
        cartModal.querySelector('.cart-modal-content').innerHTML = generateCartItemsHTML();
        cartModal.querySelector('.cart-total').textContent = `Total: ${calculateCartTotal()}`;
        cartModal.querySelector('.cart-modal-header h3').textContent = `Your Cart (${cartCount} items)`;
        
        // Reattach event listeners
        cartModal.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', handleQuantityChange);
        });
        cartModal.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', handleRemoveItem);
        });
    }
}

// Handle item removal from cart
function handleRemoveItem(event) {
    const button = event.target;
    const itemId = parseInt(button.getAttribute('data-id'));
    
    cartItems = cartItems.filter(item => item.id !== itemId);
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    updateCartCount();
    saveCartToStorage();
    
    if (cartItems.length === 0) {
        const cartModal = document.querySelector('.cart-modal-overlay');
        if (cartModal) {
            document.body.removeChild(cartModal);
        }
        showNotification('Cart cleared!');
        return;
    }
    
    // Refresh cart modal
    const cartModal = document.querySelector('.cart-modal-overlay');
    if (cartModal) {
        cartModal.querySelector('.cart-modal-content').innerHTML = generateCartItemsHTML();
        cartModal.querySelector('.cart-total').textContent = `Total: ${calculateCartTotal()}`;
        cartModal.querySelector('.cart-modal-header h3').textContent = `Your Cart (${cartCount} items)`;
        
        // Reattach event listeners
        cartModal.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', handleQuantityChange);
        });
        cartModal.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', handleRemoveItem);
        });
    }
}

// Handle adding item from wishlist to cart
function handleWishlistAddToCart(event) {
    const button = event.target;
    const itemId = parseInt(button.getAttribute('data-id'));
    
    const item = wishlistItems.find(item => item.id === itemId);
    if (item) {
        addProductToCart({...item, quantity: 1});
        showNotification(`${item.title} added to cart from wishlist!`);
    }
}

// Handle removal from wishlist
function handleRemoveFromWishlist(event) {
    const button = event.target;
    const itemId = parseInt(button.getAttribute('data-id'));
    
    wishlistItems = wishlistItems.filter(item => item.id !== itemId);
    wishlistCount = wishlistItems.length;
    updateWishlistCount();
    saveWishlistToStorage();
    updateAllWishlistHearts(); // Update heart states when removing from wishlist
    
    if (wishlistItems.length === 0) {
        const wishlistModal = document.querySelector('.wishlist-modal-overlay');
        if (wishlistModal) {
            document.body.removeChild(wishlistModal);
        }
        showNotification('Wishlist cleared!');
        return;
    }
    
    // Refresh wishlist modal
    const wishlistModal = document.querySelector('.wishlist-modal-overlay');
    if (wishlistModal) {
        wishlistModal.querySelector('.wishlist-modal-content').innerHTML = generateWishlistItemsHTML();
        wishlistModal.querySelector('.wishlist-modal-header h3').textContent = `Your Wishlist (${wishlistCount} items)`;
        
        // Reattach event listeners
        wishlistModal.querySelectorAll('.wishlist-item .add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', handleWishlistAddToCart);
        });
        wishlistModal.querySelectorAll('.wishlist-item .remove-item').forEach(btn => {
            btn.addEventListener('click', handleRemoveFromWishlist);
        });
    }
}

// Generate HTML for cart items
function generateCartItemsHTML() {
    return cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <div class="cart-item-price">${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        </div>
    `).join('');
}

// Generate HTML for wishlist items
function generateWishlistItemsHTML() {
    return wishlistItems.map(item => `
        <div class="wishlist-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="wishlist-item-details">
                <h4>${item.title}</h4>
                <div class="wishlist-item-price">${item.price}</div>
            </div>
            <div class="wishlist-item-actions">
                <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            </div>
        </div>
    `).join('');
}

// Calculate cart total
function calculateCartTotal() {
    const total = cartItems.reduce((total, item) => {
        return total + ((item.numericPrice || extractNumericPrice(item.price)) * item.quantity);
    }, 0);
    return total.toLocaleString() + ' EGP';
}

// Clear cart
function clearCart() {
    cartItems = [];
    cartCount = 0;
    updateCartCount();
    saveCartToStorage();
    
    const cartModal = document.querySelector('.cart-modal-overlay');
    if (cartModal) {
        document.body.removeChild(cartModal);
    }
    
    showNotification('Cart cleared!');
}

// Clear wishlist
function clearWishlist() {
    wishlistItems = [];
    wishlistCount = 0;
    updateWishlistCount();
    saveWishlistToStorage();
    updateAllWishlistHearts(); // Reset all heart icons when clearing wishlist
    
    const wishlistModal = document.querySelector('.wishlist-modal-overlay');
    if (wishlistModal) {
        document.body.removeChild(wishlistModal);
    }
    
    showNotification('Wishlist cleared!');
}

// Add all wishlist items to cart
function addAllToCart() {
    wishlistItems.forEach(item => {
        addProductToCart({...item, quantity: 1});
    });
    
    const wishlistModal = document.querySelector('.wishlist-modal-overlay');
    if (wishlistModal) {
        document.body.removeChild(wishlistModal);
    }
    
    showNotification('All wishlist items added to cart!');
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

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('egytopiaCart', JSON.stringify(cartItems));
}

// Save wishlist to localStorage
function saveWishlistToStorage() {
    localStorage.setItem('egytopiaWishlist', JSON.stringify(wishlistItems));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('egytopiaCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        updateCartCount();
    }
}

// Load wishlist from localStorage
function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('egytopiaWishlist');
    if (savedWishlist) {
        wishlistItems = JSON.parse(savedWishlist);
        wishlistCount = wishlistItems.length;
        updateWishlistCount();
    }
}

// Animate value counter
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.textContent = value + (obj.textContent.includes('%') ? '%' : obj.textContent.includes('+') ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add CSS for notifications, cart modal, and wishlist modal
const style = document.createElement('style');
style.textContent = `
    .cart-update, .wishlist-update {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.error {
        background: #e74c3c;
    }
    
    .notification.info {
        background: #3498db;
    }
    
    .cart-modal-overlay, .wishlist-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .cart-modal, .wishlist-modal {
        background: white;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .cart-modal-header, .wishlist-modal-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .cart-modal-content, .wishlist-modal-content {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
    }
    
    .cart-modal-footer, .wishlist-modal-footer {
        padding: 20px;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .cart-item, .wishlist-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
        transition: all 0.3s ease;
    }
    
    .cart-item img, .wishlist-item img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
    }
    
    .cart-item-details, .wishlist-item-details {
        flex: 1;
    }
    
    .cart-item-details h4, .wishlist-item-details h4 {
        margin: 0 0 5px 0;
        font-size: 14px;
    }
    
    .cart-item-price, .wishlist-item-price {
        color: #e67e22;
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .wishlist-item-actions {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .quantity-btn {
        width: 25px;
        height: 25px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .quantity-btn:hover {
        background: #f5f5f5;
    }
    
    .add-to-cart-btn {
        padding: 5px 10px;
        background: #c19b53;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        transition: background 0.2s ease;
    }
    
    .add-to-cart-btn:hover {
        background: #a8853f;
    }
    
    .remove-item {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #999;
        padding: 5px;
        transition: color 0.2s ease;
    }
    
    .remove-item:hover {
        color: #e74c3c;
    }
    
    .cart-total {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        color: #2c3e50;
    }
    
    .close-cart-modal, .close-wishlist-modal {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        transition: color 0.2s ease;
    }
    
    .close-cart-modal:hover, .close-wishlist-modal:hover {
        color: #e74c3c;
    }
    
    .product-category {
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(style);
























// Logo toggle functionality
function setupLogoToggle() {
    const navLogo = document.querySelector('.nav-logo img');
    
    // Create overlay
    const logoOverlay = document.createElement('div');
    logoOverlay.className = 'logo-overlay';
    document.body.appendChild(logoOverlay);
    
    // Create logo clone for the enlarged version
    const logoClone = document.createElement('img');
    logoClone.className = 'logo-clone';
    logoClone.src = navLogo.src;
    logoClone.alt = 'Enlarged Logo';
    document.body.appendChild(logoClone);
    
    if (navLogo) {
        navLogo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the enlarged logo and overlay
            logoClone.classList.toggle('active');
            logoOverlay.classList.toggle('active');
            
            // Close when clicking outside the enlarged logo
            if (logoClone.classList.contains('active')) {
                const closeLogo = function(e) {
                    if (!logoClone.contains(e.target) && e.target !== navLogo) {
                        logoClone.classList.remove('active');
                        logoOverlay.classList.remove('active');
                        document.removeEventListener('click', closeLogo);
                    }
                };
                
                // Close after a delay to avoid immediate closing
                setTimeout(() => {
                    document.addEventListener('click', closeLogo);
                }, 100);
                
                // Also close when pressing Escape key
                const closeOnEscape = function(e) {
                    if (e.key === 'Escape') {
                        logoClone.classList.remove('active');
                        logoOverlay.classList.remove('active');
                        document.removeEventListener('keydown', closeOnEscape);
                    }
                };
                document.addEventListener('keydown', closeOnEscape);
            }
        });
        
        // Also allow clicking the enlarged logo to close it
        logoClone.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.remove('active');
            logoOverlay.classList.remove('active');
        });
    }
}

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code...
    setupLogoToggle();
    // Rest of your initialization code...
});