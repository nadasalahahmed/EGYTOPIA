// DOM Elements
const authSection = document.getElementById('authSection');
const profileSection = document.getElementById('profileSection');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const showcaseFeature = document.getElementById('showcaseFeature');
const earnFeature = document.getElementById('earnFeature');
const communityFeature = document.getElementById('communityFeature');
const addProductBtn = document.getElementById('addProductBtn');
const logoutBtn = document.getElementById('logoutBtn');
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
const productsCount = document.getElementById('productsCount');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const switchToSignup = document.getElementById('switchToSignup');
const switchToSignin = document.getElementById('switchToSignin');
const modalTitle = document.getElementById('modalTitle');

// Current user and products data
let currentUser = null;
let artisanProductsData = [];
let editingProductId = null;

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsStorage();
    checkAuthStatus();
    setupMobileNavigation();
    setupScrollEffects();
    setupAuthEventListeners();
});

// Initialize products storage for artisan items only
function initializeProductsStorage() {
    const existingArtisanProducts = localStorage.getItem('egytopiaArtisanProducts');
    if (!existingArtisanProducts) {
        // Initialize with empty array for artisan products only
        localStorage.setItem('egytopiaArtisanProducts', JSON.stringify([]));
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

// Check authentication status
function checkAuthStatus() {
    const savedUser = localStorage.getItem('egytopiaArtisan');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showProfile();
    } else {
        showAuth();
    }
}

// Show authentication section
function showAuth() {
    authSection.style.display = 'flex';
    profileSection.style.display = 'none';
    
    // Setup feature click events
    setupFeatureClicks();
}

// Show profile section
function showProfile() {
    authSection.style.display = 'none';
    profileSection.style.display = 'block';
    
    // Update profile info
    profileName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
    
    // Load artisan's products
    loadArtisanProducts();
    
    // Setup profile event listeners
    setupProfileEventListeners();
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
                formTitle.textContent = 'Welcome Back';
                formSubtitle.textContent = 'Sign in to your artisan account';
            } else {
                formTitle.textContent = 'Join Our Community';
                formSubtitle.textContent = 'Create your artisan account';
            }
        });
    });

    // Switch between sign in and sign up
    switchToSignup.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="signup"]').classList.add('active');
        
        authForms.forEach(form => form.classList.remove('active'));
        signupForm.classList.add('active');
        
        formTitle.textContent = 'Join Our Community';
        formSubtitle.textContent = 'Create your artisan account';
    });

    switchToSignin.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        document.querySelector('[data-tab="signin"]').classList.add('active');
        
        authForms.forEach(form => form.classList.remove('active'));
        signinForm.classList.add('active');
        
        formTitle.textContent = 'Welcome Back';
        formSubtitle.textContent = 'Sign in to your artisan account';
    });

    // Sign in form submission
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        
        // Simple validation - in a real app, this would be a server request
        const users = JSON.parse(localStorage.getItem('egytopiaArtisans') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('egytopiaArtisan', JSON.stringify(currentUser));
            showProfile();
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
        
        // Validation
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters long!', 'error');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('egytopiaArtisans') || '[]');
        if (users.find(u => u.email === email)) {
            showNotification('User with this email already exists!', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            joined: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('egytopiaArtisans', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('egytopiaArtisan', JSON.stringify(currentUser));
        
        showProfile();
        showNotification('Account created successfully!', 'success');
    });
}

// Setup feature click events
function setupFeatureClicks() {
    // All features trigger the sign in flow
    showcaseFeature.addEventListener('click', function() {
        document.getElementById('signinEmail').focus();
        showNotification('Please sign in to access your artisan profile');
    });
    
    earnFeature.addEventListener('click', function() {
        document.getElementById('signinEmail').focus();
        showNotification('Please sign in to start earning from your craft');
    });
    
    communityFeature.addEventListener('click', function() {
        document.getElementById('signinEmail').focus();
        showNotification('Please sign in to join our artisan community');
    });
}

// Setup profile event listeners
function setupProfileEventListeners() {
    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('egytopiaArtisan');
        currentUser = null;
        showAuth();
        showNotification('Successfully logged out!', 'success');
    });

    // Add product button
    addProductBtn.addEventListener('click', function() {
        openProductModal();
    });

    // Close product modal
    closeProductModal.addEventListener('click', closeProductModalFunc);
    cancelProductBtn.addEventListener('click', closeProductModalFunc);

    // Image upload functionality
    uploadImageBtn.addEventListener('click', function() {
        productImage.click();
    });

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

    // Save product
    saveProductBtn.addEventListener('click', saveProduct);
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