// EGYHome.js - COMPLETE UPDATED VERSION WITH ALL NAVIGATION

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
    initializeCounts();
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
    loadCartFromStorage();
    loadWishlistFromStorage();
    updateAllWishlistHearts();
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

// Update cart count on all pages
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('egytopiaCart')) || [];
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
        
        // Add animation class
        element.classList.add('cart-update');
        setTimeout(() => {
            element.classList.remove('cart-update');
        }, 300);
    });
}

// Update wishlist count on all pages
function updateWishlistCount() {
    const wishlistItems = JSON.parse(localStorage.getItem('egytopiaWishlist')) || [];
    const wishlistCountElements = document.querySelectorAll('.wishlist-count');
    
    wishlistCountElements.forEach(element => {
        element.textContent = wishlistItems.length;
        
        // Add animation class
        element.classList.add('wishlist-update');
        setTimeout(() => {
            element.classList.remove('wishlist-update');
        }, 300);
    });
}

// Update active navigation link - ENHANCED VERSION
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'EgyHome.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (!href || href === '#') return;
        
        // Handle home page special case
        if ((currentPage === '' || currentPage === 'EgyHome.html' || currentPage === 'index.html') && 
            (href === 'EgyHome.html' || href === 'index.html' || href === './')) {
            link.classList.add('active');
        }
        // Handle other pages - exact matching
        else if (href === currentPage) {
            link.classList.add('active');
        }
        // Handle partial matches for pages with parameters
        else if (currentPage.startsWith(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// Initialize counts when page loads
function initializeCounts() {
    updateCartCount();
    updateWishlistCount();
}

// Navigation handler - COMPLETE VERSION
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's the current page or anchor links
            if (href === '#' || href === window.location.pathname.split('/').pop()) {
                return;
            }
            
            // List of ALL existing pages
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
            
            // If it's not an existing page, show notification and prevent default
            if (!existingPages.includes(href)) {
                e.preventDefault();
                const pageName = href.replace('.html', '').replace(/-/g, ' ');
                showNotification(`${pageName.charAt(0).toUpperCase() + pageName.slice(1)} page is coming soon!`, 'info');
            }
            // For existing pages, allow normal navigation but update active state
            else {
                // Update active state immediately
                updateActiveNavLink();
                
                // For cart and wishlist pages, ensure data is loaded
                if (href === 'cart.html' || href === 'wishlist.html') {
                    // Save current state before navigation
                    saveCartToStorage();
                    saveWishlistToStorage();
                }
            }
        });
    });
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
                // Update active state after navigation
                setTimeout(updateActiveNavLink, 100);
            });
        });
    }
}

// Scroll Effects
function setupScrollEffects() {
    // Navbar scroll effect
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero-section');
    
    if (header && heroSection) {
        window.addEventListener('scroll', function() {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            
            if (window.scrollY > heroBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Quick View Modal
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
            
            // Update modal add to cart button
            if (modalAddToCart) {
                modalAddToCart.onclick = () => {
                    addProductToCart(product);
                    closeQuickViewModal();
                };
            }
            
            // Update modal wishlist button
            if (modalAddToWishlist) {
                modalAddToWishlist.onclick = () => {
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
    let cartItems = JSON.parse(localStorage.getItem('egytopiaCart')) || [];
    
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

    localStorage.setItem('egytopiaCart', JSON.stringify(cartItems));
    updateCartCount();
    showNotification(`${product.title} added to cart!`);
}

// Add product to wishlist
function addProductToWishlist(product) {
    let wishlistItems = JSON.parse(localStorage.getItem('egytopiaWishlist')) || [];
    
    // Check if product already exists in wishlist
    const existingItem = wishlistItems.find(item => item.title === product.title);
    
    if (!existingItem) {
        wishlistItems.push(product);
        localStorage.setItem('egytopiaWishlist', JSON.stringify(wishlistItems));
        updateWishlistCount();
        updateAllWishlistHearts();
        showNotification(`${product.title} added to wishlist!`);
    } else {
        showNotification(`${product.title} is already in your wishlist!`, 'info');
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