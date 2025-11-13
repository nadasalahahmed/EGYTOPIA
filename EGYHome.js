// EGYHome.js

// Cart functionality
let cartCount = 0;
let cartItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const quickViewButtons = document.querySelectorAll('.quick-view-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const categoryButtons = document.querySelectorAll('.category-btn');

// Product data for quick view modal
const products = {
    1: {
        title: "Gold Cartouche Necklace",
        price: "2,850 EGP",
        description: "This exquisite 18k gold-plated cartouche necklace features custom hieroglyphic inscriptions. Each piece is carefully crafted by skilled Egyptian artisans, making it a unique and personalized jewelry item. Perfect as a gift or for personal use.",
        image: "https://images.unsplash.com/photo-1677194370385-d7aebb01a4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBvdHRlcnklMjBjZXJhbWljfGVufDF8fHx8MTc2Mjg0NjE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 5,
        ratingText: "★★★★★ (5)"
    },
    2: {
        title: "Ceramic Lotus Vase",
        price: "890 EGP",
        description: "Hand-painted traditional Egyptian pottery featuring the iconic lotus flower design. This beautiful vase is made from high-quality ceramic and showcases the rich artistic heritage of Egypt. Perfect for home decoration or as a special gift.",
        image: "https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBhcHlydXMlMjBhcnR8ZW58MXx8fHwxNzYyODE1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.8,
        ratingText: "★★★★★ (4.8)"
    },
    3: {
        title: "Silver Ankh Pendant",
        price: "1,450 EGP",
        description: "This sterling silver ankh pendant represents the ancient Egyptian symbol of life. Meticulously crafted with attention to detail, it makes a meaningful addition to any jewelry collection. Comes with a matching silver chain.",
        image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        rating: 4.2,
        ratingText: "★★★★☆ (4.2)"
    },
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    setupMobileNavigation();
    setupScrollEffects();
    setupQuickViewModal();
    setupAddToCart();
    setupCategoryFiltering();
    setupStatsAnimation();
    setupNewsletter();
    setupSocialAnimations();
    loadCartFromStorage();
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
                const product = {
                    id: Date.now(),
                    title: productCard.querySelector('h3, h4')?.textContent || 'Unknown Product',
                    price: productCard.querySelector('.current-price, .price')?.textContent || '0 EGP',
                    image: productCard.querySelector('img')?.src || '',
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

// Add product to cart
function addProductToCart(product) {
    // Check if product already exists in cart
    const existingItem = cartItems.find(item => item.title === product.title);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push(product);
    }

    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${product.title} added to cart!`);
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

// Handle item removal
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

// Calculate cart total
function calculateCartTotal() {
    const total = cartItems.reduce((total, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        return total + (price * item.quantity);
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

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('egytopiaCart');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        updateCartCount();
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

// Add CSS for notifications and cart modal
const style = document.createElement('style');
style.textContent = `
    .cart-update {
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
    
    .cart-modal-overlay {
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
    
    .cart-modal {
        background: white;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    
    .cart-modal-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .cart-modal-content {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
    }
    
    .cart-modal-footer {
        padding: 20px;
        border-top: 1px solid #eee;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .cart-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
        transition: all 0.3s ease;
    }
    
    .cart-item img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
    }
    
    .cart-item-details {
        flex: 1;
    }
    
    .cart-item-details h4 {
        margin: 0 0 5px 0;
        font-size: 14px;
    }
    
    .cart-item-price {
        color: #e67e22;
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
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
    
    .close-cart-modal {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        transition: color 0.2s ease;
    }
    
    .close-cart-modal:hover {
        color: #e74c3c;
    }
    
    .product-category {
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(style);