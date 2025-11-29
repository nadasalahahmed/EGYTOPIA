// Category data
const categories = [
    {
        id: "jewelry",
        title: "Jewelry Collection",
        description: "Exquisite Egyptian jewelry featuring gold, silver, and precious stones. From cartouche necklaces to symbolic ankh pendants, each piece tells a story of ancient craftsmanship.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2Vscnl8ZW58MXx8fHwxNzYyODUyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 24,
        featured: true
    },
    {
        id: "art",
        title: "Egyptian Art",
        description: "Authentic Egyptian art including papyrus paintings, hieroglyphic art, and traditional crafts. Each piece reflects the rich artistic heritage of ancient Egypt.",
        image: "https://images.unsplash.com/photo-1611279521305-d8c443925311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGFydHxlbnwxfHx8fDE3NjI4NTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 18,
        featured: true
    },
    {
        id: "textiles",
        title: "Textiles & Fabrics",
        description: "Luxurious Egyptian textiles including silk scarves, cotton fabrics, and traditional shawls. Featuring intricate patterns and traditional Egyptian designs.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHRleHRpbGVzfGVufDF8fHx8MTc2Mjg1MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 15,
        featured: false
    },
    {
        id: "sculptures",
        title: "Sculptures & Statues",
        description: "Handcrafted Egyptian sculptures and statues depicting pharaohs, gods, and symbolic figures. Made from various materials including stone, wood, and resin.",
        image: "https://images.unsplash.com/photo-1600630278838-e5a7185cca1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHNjdWxwdHVyZXN8ZW58MXx8fHwxNzYyODUyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 19,
        featured: false
    },
    {
        id: "home-decor",
        title: "Home Decor",
        description: "Egyptian-inspired home decor items including vases, pillows, and decorative pieces. Bring the elegance of ancient Egypt to your modern home.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGhvbWUlMjBkZWNvcnxlbnwxfHx8fDE3NjI4NTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 22,
        featured: true
    },
    {
        id: "traditional-crafts",
        title: "Traditional Crafts",
        description: "Authentic Egyptian traditional crafts including pottery, baskets, and handmade items. Preserving ancient techniques and artistic traditions.",
        image: "https://images.unsplash.com/photo-1578508559719-52eecc4c2a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGNyYWZ0c3xlbnwxfHx8fDE3NjI4NTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 17,
        featured: false
    },
    {
        id: "agricultural",
        title: "Agricultural Products",
        description: "Natural Egyptian agricultural products including dates, honey, herbs, and oils. Sourced from the fertile lands along the Nile River.",
        image: "https://images.unsplash.com/photo-1597872200969-2c0ba373f8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2Mjg1MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 14,
        featured: true
    },
    {
        id: "handmade",
        title: "Handmade Goods",
        description: "Unique handmade Egyptian goods including leather products, ceramics, and custom items. Each piece is crafted with care and attention to detail.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGVneXB0aWFufGVufDF8fHx8MTc2Mjg1MjAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        productCount: 21,
        featured: false
    }
];

// Cart and wishlist functionality
let cartItems = [];
let wishlistItems = [];

// DOM Elements
const cartCountElement = document.querySelector('.cart-count');
const wishlistCountElement = document.querySelector('.wishlist-count');
const cartLink = document.getElementById('cartLink');
const wishlistLink = document.getElementById('wishlistLink');
const collectionsContainer = document.getElementById('collectionsContainer');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    initializeWishlist();
    setupMobileNavigation();
    setupScrollEffects();
    displayCollections();
    setupNewsletter();
    setupCartAndWishlistLinks();
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

// Display collections
function displayCollections() {
    collectionsContainer.innerHTML = '';
    
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
    
    // Add event listener
    const viewBtn = card.querySelector('.view-collection-btn');
    viewBtn.addEventListener('click', () => {
        // Navigate to categories page with the selected category
        window.location.href = `categories.html?category=${category.id}`;
    });
    
    return card;
}

// Update cart count display
function updateCartCount() {
    if (cartCountElement) {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = count;
        
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
        wishlistCountElement.textContent = wishlistItems.length;
        
        // Add animation class
        wishlistCountElement.classList.add('wishlist-update');
        setTimeout(() => {
            wishlistCountElement.classList.remove('wishlist-update');
        }, 300);
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

// Update active navigation link based on current page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Special case for home page
    if (currentPage === 'EgyHome.html' || currentPage === '' || currentPage === 'index.html') {
        document.querySelector('a[href="EgyHome.html"]').classList.add('active');
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
});