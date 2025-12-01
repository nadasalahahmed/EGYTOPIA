// shared.js - Centralized cart and wishlist manager for all pages

// Global cart and wishlist manager
window.cartManager = {
    // Load cart from localStorage
    loadCart: function() {
        try {
            const savedCart = localStorage.getItem('egytopiaCart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    },
    
    // Load wishlist from localStorage
    loadWishlist: function() {
        try {
            const savedWishlist = localStorage.getItem('egytopiaWishlist');
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch (error) {
            console.error('Error loading wishlist:', error);
            return [];
        }
    },
    
    // Save cart to localStorage
    saveCart: function(cartItems) {
        try {
            localStorage.setItem('egytopiaCart', JSON.stringify(cartItems));
            this.updateCartCount(cartItems);
            // Trigger storage event for other tabs/pages
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'egytopiaCart',
                newValue: JSON.stringify(cartItems)
            }));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    },
    
    // Save wishlist to localStorage
    saveWishlist: function(wishlistItems) {
        try {
            localStorage.setItem('egytopiaWishlist', JSON.stringify(wishlistItems));
            this.updateWishlistCount(wishlistItems);
            // Trigger storage event for other tabs/pages
            window.dispatchEvent(new StorageEvent('storage', {
                key: 'egytopiaWishlist',
                newValue: JSON.stringify(wishlistItems)
            }));
        } catch (error) {
            console.error('Error saving wishlist:', error);
        }
    },
    
    // Update cart count display on ALL pages
    updateCartCount: function(cartItems) {
        const count = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
        document.querySelectorAll('.cart-count').forEach(element => {
            element.textContent = count;
            element.classList.add('cart-update');
            setTimeout(() => {
                element.classList.remove('cart-update');
            }, 300);
        });
    },
    
    // Update wishlist count display on ALL pages
    updateWishlistCount: function(wishlistItems) {
        const count = wishlistItems.length;
        document.querySelectorAll('.wishlist-count').forEach(element => {
            element.textContent = count;
            element.classList.add('wishlist-update');
            setTimeout(() => {
                element.classList.remove('wishlist-update');
            }, 300);
        });
    },
    
    // Initialize counts on page load
    initializeCounts: function() {
        const cartItems = this.loadCart();
        const wishlistItems = this.loadWishlist();
        this.updateCartCount(cartItems);
        this.updateWishlistCount(wishlistItems);
        return { cartItems, wishlistItems };
    },
    
    // Add to cart with immediate sync
    addToCart: function(product) {
        const cartItems = this.loadCart();
        const existingItem = cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cartItems.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart(cartItems);
        return cartItems;
    },
    
    // Remove from cart with immediate sync
    removeFromCart: function(productId) {
        const cartItems = this.loadCart();
        const updatedCart = cartItems.filter(item => item.id !== productId);
        this.saveCart(updatedCart);
        return updatedCart;
    },
    
    // Update cart quantity with immediate sync
    updateCartQuantity: function(productId, change) {
        const cartItems = this.loadCart();
        const itemIndex = cartItems.findIndex(item => item.id === productId);
        
        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity += change;
            if (cartItems[itemIndex].quantity < 1) {
                cartItems.splice(itemIndex, 1);
            }
            this.saveCart(cartItems);
        }
        
        return cartItems;
    },
    
    // Toggle wishlist with immediate sync
    toggleWishlist: function(product) {
        const wishlistItems = this.loadWishlist();
        const existingItemIndex = wishlistItems.findIndex(item => item.id === product.id);
        
        if (existingItemIndex !== -1) {
            // Remove from wishlist
            wishlistItems.splice(existingItemIndex, 1);
        } else {
            // Add to wishlist
            wishlistItems.push(product);
        }
        
        this.saveWishlist(wishlistItems);
        return wishlistItems;
    },
    
    // Check if product is in wishlist
    isInWishlist: function(productId) {
        const wishlistItems = this.loadWishlist();
        return wishlistItems.some(item => item.id === productId);
    },
    
    // Get all cart items
    getCartItems: function() {
        return this.loadCart();
    },
    
    // Get all wishlist items
    getWishlistItems: function() {
        return this.loadWishlist();
    },
    
    // Calculate cart total
    getCartTotal: function() {
        const cartItems = this.loadCart();
        return cartItems.reduce((total, item) => {
            return total + ((item.numericPrice || 0) * (item.quantity || 1));
        }, 0);
    }
};

// Listen for storage changes from other tabs/pages
window.addEventListener('storage', function(e) {
    if (e.key === 'egytopiaCart') {
        try {
            const cartItems = e.newValue ? JSON.parse(e.newValue) : [];
            window.cartManager.updateCartCount(cartItems);
        } catch (error) {
            console.error('Error parsing cart storage event:', error);
        }
    }
    
    if (e.key === 'egytopiaWishlist') {
        try {
            const wishlistItems = e.newValue ? JSON.parse(e.newValue) : [];
            window.cartManager.updateWishlistCount(wishlistItems);
        } catch (error) {
            console.error('Error parsing wishlist storage event:', error);
        }
    }
});

// Initialize counts when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.cartManager.initializeCounts();
});