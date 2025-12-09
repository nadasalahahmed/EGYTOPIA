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
const addFirstProductBtn = document.getElementById('addFirstProductBtn');
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
const notificationContainer = document.getElementById('notificationContainer');

// Current user and products data
let currentUser = null;
let artisanProductsData = [];
let editingProductId = null;
let selectedUserType = null;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Egytopia User Portal...');
    
    // Initialize storage
    initializeProductsStorage();
    
    // Check authentication status
    checkAuthStatus();
    
    // Setup event listeners
    setupMobileNavigation();
    setupScrollEffects();
    setupUserTypeSelection();
    setupAuthEventListeners();
    setupCustomerDashboard();
    
    // Setup feature clicks
    setupFeatureClicks();
    
    // Setup form validation
    setupFormValidation();
    
    // Add debug info
    console.log('Initialization complete');
    console.log('Current user:', currentUser);
});

// Initialize products storage
function initializeProductsStorage() {
    console.log('Initializing storage...');
    
    // Initialize users storage if not exists
    if (!localStorage.getItem('egytopiaUsers')) {
        console.log('Creating initial users storage');
        const testUsers = [
            {
                id: 1,
                name: 'Test Customer',
                email: 'customer@example.com',
                password: 'Password123!',
                userType: 'customer',
                joined: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Test Artisan',
                email: 'artisan@example.com',
                password: 'Password123!',
                userType: 'artisan',
                joined: new Date().toISOString()
            }
        ];
        localStorage.setItem('egytopiaUsers', JSON.stringify(testUsers));
        console.log('Test users created:');
        console.log('- Customer: customer@example.com / Password123!');
        console.log('- Artisan: artisan@example.com / Password123!');
    }
    
    // Initialize customer data storage
    if (!localStorage.getItem('egytopiaWishlist')) {
        localStorage.setItem('egytopiaWishlist', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('egytopiaCart')) {
        localStorage.setItem('egytopiaCart', JSON.stringify([]));
    }
    
    console.log('Storage initialized');
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

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(event.target) && 
                !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    
    if (header) {
        // Initial check
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

// Setup user type selection
function setupUserTypeSelection() {
    console.log('Setting up user type selection...');
    
    if (!typeOptions || typeOptions.length === 0) {
        console.error('Type options not found!');
        return;
    }
    
    typeOptions.forEach(option => {
        option.addEventListener('click', function() {
            console.log('User type clicked:', this.getAttribute('data-type'));
            
            // Remove selected class from all options
            typeOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Get selected type
            selectedUserType = this.getAttribute('data-type');
            console.log('Selected user type:', selectedUserType);
            
            // Enable continue button
            if (continueBtn) {
                continueBtn.disabled = false;
                console.log('Continue button enabled');
            }
            
            // Update features display
            updateFeaturesDisplay(selectedUserType);
            
            // Update form titles
            updateFormTitles(selectedUserType);
        });
    });

    // Continue button click
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            console.log('Continue button clicked');
            
            if (selectedUserType) {
                console.log('Proceeding with user type:', selectedUserType);
                
                // Set the hidden input value
                if (userTypeInput) {
                    userTypeInput.value = selectedUserType;
                    console.log('User type input set to:', userTypeInput.value);
                }
                
                // Show auth form container with animation
                if (authFormContainer) {
                    authFormContainer.style.display = 'block';
                    setTimeout(() => {
                        authFormContainer.style.opacity = '1';
                        authFormContainer.style.transform = 'translateY(0)';
                    }, 10);
                    console.log('Auth form container shown');
                }
                
                // Hide user type selector with animation
                if (userTypeSelector) {
                    userTypeSelector.style.opacity = '0';
                    userTypeSelector.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        userTypeSelector.style.display = 'none';
                    }, 300);
                    console.log('User type selector hidden');
                }
                
                // Hide features that don't match the selected type
                if (selectedUserType === 'customer') {
                    if (artisanFeatures) artisanFeatures.style.display = 'none';
                    if (customerFeatures) {
                        customerFeatures.style.display = 'grid';
                        setTimeout(() => {
                            customerFeatures.style.opacity = '1';
                        }, 10);
                    }
                } else {
                    if (customerFeatures) customerFeatures.style.display = 'none';
                    if (artisanFeatures) {
                        artisanFeatures.style.display = 'grid';
                        setTimeout(() => {
                            artisanFeatures.style.opacity = '1';
                        }, 10);
                    }
                }
            } else {
                console.error('No user type selected!');
                showNotification('Please select a user type first!', 'warning');
            }
        });
    } else {
        console.error('Continue button not found!');
    }
}

// Update features display based on user type
function updateFeaturesDisplay(userType) {
    console.log('Updating features display for:', userType);
    
    if (userType === 'customer') {
        if (customerFeatures) {
            customerFeatures.style.display = 'grid';
            customerFeatures.style.opacity = '0';
            setTimeout(() => {
                customerFeatures.style.opacity = '1';
            }, 10);
        }
        if (artisanFeatures) artisanFeatures.style.display = 'none';
    } else {
        if (customerFeatures) customerFeatures.style.display = 'none';
        if (artisanFeatures) {
            artisanFeatures.style.display = 'grid';
            artisanFeatures.style.opacity = '0';
            setTimeout(() => {
                artisanFeatures.style.opacity = '1';
            }, 10);
        }
    }
}

// Update form titles based on user type
function updateFormTitles(userType) {
    console.log('Updating form titles for:', userType);
    
    if (!formTitle || !formSubtitle) return;
    
    const activeTab = document.querySelector('.auth-tab.active');
    if (activeTab) {
        if (activeTab.getAttribute('data-tab') === 'signin') {
            if (userType === 'customer') {
                formTitle.textContent = 'Welcome to Egytopia';
                formSubtitle.textContent = 'Sign in to start shopping';
            } else {
                formTitle.textContent = 'Welcome to Artisan Portal';
                formSubtitle.textContent = 'Sign in to manage your crafts';
            }
        } else {
            if (userType === 'customer') {
                formTitle.textContent = 'Join Egytopia';
                formSubtitle.textContent = 'Create your shopping account';
            } else {
                formTitle.textContent = 'Join Our Community';
                formSubtitle.textContent = 'Create your artisan account';
            }
        }
    } else {
        // Default titles if no active tab
        if (userType === 'customer') {
            formTitle.textContent = 'Welcome to Egytopia';
            formSubtitle.textContent = 'Sign in to start shopping';
        } else {
            formTitle.textContent = 'Welcome to Artisan Portal';
            formSubtitle.textContent = 'Sign in to manage your crafts';
        }
    }
}

// Check authentication status
function checkAuthStatus() {
    console.log('Checking authentication status...');
    
    const savedUser = localStorage.getItem('egytopiaUser');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            console.log('User found:', currentUser);
            
            // Update navigation bar
            updateNavigationBar();
            
            // Check user type and show appropriate dashboard
            if (currentUser.userType === 'artisan') {
                showProfile();
            } else {
                showCustomerDashboard();
            }
        } catch (e) {
            console.error('Error parsing user data:', e);
            localStorage.removeItem('egytopiaUser');
            showAuth();
        }
    } else {
        console.log('No user logged in');
        showAuth();
    }
}

// Update navigation bar for logged in users
function updateNavigationBar() {
    console.log('Updating navigation bar...');
    
    if (currentUser && userNavItem) {
        // Show user navigation
        userNavItem.style.display = 'flex';
        if (navUserName) navUserName.textContent = currentUser.name;
        if (navUserType) navUserType.textContent = currentUser.userType === 'artisan' ? 'Artisan' : 'Customer';
        
        // Setup logout button in nav
        navLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            logoutUser();
        });
    } else if (userNavItem) {
        userNavItem.style.display = 'none';
    }
}

// Show authentication section
function showAuth() {
    console.log('Showing auth section');
    
    // Reset all sections
    if (authSection) {
        authSection.style.display = 'flex';
        authSection.style.opacity = '1';
    }
    if (customerDashboard) customerDashboard.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';
    
    // Reset form visibility
    if (userTypeSelector) {
        userTypeSelector.style.display = 'block';
        userTypeSelector.style.opacity = '1';
        userTypeSelector.style.transform = 'translateY(0)';
    }
    if (authFormContainer) {
        authFormContainer.style.display = 'none';
        authFormContainer.style.opacity = '0';
        authFormContainer.style.transform = 'translateY(20px)';
    }
    if (customerFeatures) {
        customerFeatures.style.display = 'none';
        customerFeatures.style.opacity = '0';
    }
    if (artisanFeatures) {
        artisanFeatures.style.display = 'none';
        artisanFeatures.style.opacity = '0';
    }
    
    // Reset selections
    if (typeOptions && typeOptions.length > 0) {
        typeOptions.forEach(opt => opt.classList.remove('selected'));
    }
    if (continueBtn) continueBtn.disabled = true;
    selectedUserType = null;
    if (userTypeInput) userTypeInput.value = '';
    
    // Reset form to sign in
    if (authTabs && authTabs.length > 0) {
        authTabs.forEach(t => t.classList.remove('active'));
        const signinTab = document.querySelector('[data-tab="signin"]');
        if (signinTab) signinTab.classList.add('active');
    }
    
    if (authForms && authForms.length > 0) {
        authForms.forEach(form => form.classList.remove('active'));
        if (signinForm) signinForm.classList.add('active');
    }
    
    // Reset form titles
    if (formTitle) formTitle.textContent = 'Welcome Back';
    if (formSubtitle) formSubtitle.textContent = 'Sign in to your account';
    
    // Clear form fields and validation
    if (signinForm) {
        signinForm.reset();
        const inputs = signinForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
    }
    
    if (signupForm) {
        signupForm.reset();
        const inputs = signupForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
        
        const validationMessages = signupForm.querySelectorAll('.validation-message');
        validationMessages.forEach(msg => {
            msg.classList.remove('valid', 'invalid');
            msg.style.display = 'none';
        });
        
        // Reset password requirements
        const requirements = signupForm.querySelectorAll('.requirement');
        requirements.forEach(req => {
            req.classList.remove('met', 'unmet', 'highlight');
            const icon = req.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-circle';
            }
        });
        
        const passwordRequirements = signupForm.querySelector('.password-requirements');
        if (passwordRequirements) {
            passwordRequirements.classList.remove('show');
        }
    }
    
    // Update navigation bar
    updateNavigationBar();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show customer dashboard
function showCustomerDashboard() {
    console.log('Showing customer dashboard');
    
    // Hide other sections
    if (authSection) authSection.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';
    
    // Show dashboard
    if (customerDashboard) {
        customerDashboard.style.display = 'block';
        setTimeout(() => {
            customerDashboard.style.opacity = '1';
        }, 10);
    }
    
    // Update customer info
    if (customerName) customerName.textContent = currentUser.name;
    if (customerEmail) customerEmail.textContent = currentUser.email;
    
    // Update stats
    updateCustomerStats();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show profile section (for artisans only)
function showProfile() {
    console.log('Showing artisan profile');
    
    // Hide other sections
    if (authSection) authSection.style.display = 'none';
    if (customerDashboard) customerDashboard.style.display = 'none';
    
    // Show profile
    if (profileSection) {
        profileSection.style.display = 'block';
        setTimeout(() => {
            profileSection.style.opacity = '1';
        }, 10);
    }
    
    // Update profile info
    if (profileName) profileName.textContent = currentUser.name;
    if (profileEmail) profileEmail.textContent = currentUser.email;
    
    // Load artisan's products
    loadArtisanProducts();
    
    // Setup profile event listeners
    setupProfileEventListeners();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Setup customer dashboard
function setupCustomerDashboard() {
    if (customerLogoutBtn) {
        customerLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
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
                    if (typeOptions && typeOptions.length > 0) {
                        typeOptions.forEach(opt => {
                            if (opt.getAttribute('data-type') === 'artisan') {
                                opt.click();
                            }
                        });
                        if (continueBtn) continueBtn.click();
                    }
                }, 100);
            }
        });
    }
}

// Update customer stats
function updateCustomerStats() {
    // Get wishlist and cart from localStorage
    const wishlist = JSON.parse(localStorage.getItem('egytopiaWishlist') || '[]');
    const cart = JSON.parse(localStorage.getItem('egytopiaCart') || '[]');
    
    // Update counts
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
        if (wishlist.length > 0) {
            wishlistCount.classList.add('cart-update');
            setTimeout(() => {
                wishlistCount.classList.remove('cart-update');
            }, 300);
        }
    }
    
    if (cartCount) {
        const totalCartItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        cartCount.textContent = totalCartItems;
        if (totalCartItems > 0) {
            cartCount.classList.add('cart-update');
            setTimeout(() => {
                cartCount.classList.remove('cart-update');
            }, 300);
        }
    }
}

// Setup authentication event listeners
function setupAuthEventListeners() {
    console.log('Setting up auth event listeners...');
    
    // Auth tabs functionality
    if (authTabs && authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                console.log('Auth tab clicked:', tab.getAttribute('data-tab'));
                
                const tabName = tab.getAttribute('data-tab');
                
                // Update active tab
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding form
                if (authForms && authForms.length > 0) {
                    authForms.forEach(form => {
                        form.classList.remove('active');
                        if (form.id === `${tabName}Form`) {
                            form.classList.add('active');
                            console.log('Showing form:', form.id);
                        }
                    });
                }
                
                // Update form titles based on selected user type
                if (selectedUserType) {
                    updateFormTitles(selectedUserType);
                }
            });
        });
    } else {
        console.error('Auth tabs not found!');
    }

    // Switch between sign in and sign up
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Switch to signup clicked');
            
            if (authTabs && authTabs.length > 0) {
                authTabs.forEach(t => t.classList.remove('active'));
                const signupTab = document.querySelector('[data-tab="signup"]');
                if (signupTab) signupTab.classList.add('active');
            }
            
            if (authForms && authForms.length > 0) {
                authForms.forEach(form => form.classList.remove('active'));
                if (signupForm) signupForm.classList.add('active');
            }
            
            // Update form titles
            if (formTitle && formSubtitle) {
                if (selectedUserType) {
                    updateFormTitles(selectedUserType);
                } else {
                    formTitle.textContent = 'Create Account';
                    formSubtitle.textContent = 'Sign up for a new account';
                }
            }
            
            // Scroll to form
            authFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (switchToSignin) {
        switchToSignin.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Switch to signin clicked');
            
            if (authTabs && authTabs.length > 0) {
                authTabs.forEach(t => t.classList.remove('active'));
                const signinTab = document.querySelector('[data-tab="signin"]');
                if (signinTab) signinTab.classList.add('active');
            }
            
            if (authForms && authForms.length > 0) {
                authForms.forEach(form => form.classList.remove('active'));
                if (signinForm) signinForm.classList.add('active');
            }
            
            // Update form titles
            if (formTitle && formSubtitle) {
                if (selectedUserType) {
                    updateFormTitles(selectedUserType);
                } else {
                    formTitle.textContent = 'Welcome Back';
                    formSubtitle.textContent = 'Sign in to your account';
                }
            }
            
            // Scroll to form
            authFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Sign in form submission
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Sign in form submitted');
            
            const email = document.getElementById('signinEmail').value.trim();
            const password = document.getElementById('signinPassword').value;
            
            console.log('Sign in attempt:', { email });
            
            // Basic validation
            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Get users from storage
            const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
            console.log('All users in storage:', users.length);
            
            // Find user
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                console.log('User found:', user.name);
                currentUser = user;
                localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
                
                // Update navigation bar
                updateNavigationBar();
                
                // Show appropriate dashboard
                if (currentUser.userType === 'artisan') {
                    showProfile();
                } else {
                    showCustomerDashboard();
                }
                
                showNotification('Successfully signed in! Welcome back, ' + user.name + '!', 'success');
            } else {
                console.log('Invalid credentials');
                showNotification('Invalid email or password. Please try again.', 'error');
                
                // Highlight the incorrect fields
                const emailInput = document.getElementById('signinEmail');
                const passwordInput = document.getElementById('signinPassword');
                
                if (emailInput) emailInput.classList.add('invalid');
                if (passwordInput) passwordInput.classList.add('invalid');
                
                // Remove invalid class after 2 seconds
                setTimeout(() => {
                    if (emailInput) emailInput.classList.remove('invalid');
                    if (passwordInput) passwordInput.classList.remove('invalid');
                }, 2000);
            }
        });
    } else {
        console.error('Signin form not found!');
    }

    // Sign up form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Sign up form submitted');
            
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Get user type
            let userType = userTypeInput ? userTypeInput.value : null;
            if (!userType) {
                userType = selectedUserType;
                if (userTypeInput) userTypeInput.value = userType;
            }
            
            console.log('Sign up data:', { name, email, userType });
            
            // Validation
            if (!validateName(name) || !validateEmail(email) || !validatePassword(password) || !validateConfirmPassword(confirmPassword)) {
                showNotification('Please fix the validation errors before submitting.', 'error');
                return;
            }
            
            if (!userType) {
                showNotification('Please select a user type first!', 'error');
                // Go back to user type selection
                if (userTypeSelector) {
                    userTypeSelector.style.display = 'block';
                    userTypeSelector.style.opacity = '1';
                    userTypeSelector.style.transform = 'translateY(0)';
                }
                if (authFormContainer) {
                    authFormContainer.style.display = 'none';
                }
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
            if (users.find(u => u.email === email)) {
                showNotification('User with this email already exists! Please use a different email or sign in.', 'error');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now(),
                name,
                email,
                password,
                userType,
                joined: new Date().toISOString()
            };
            
            console.log('Creating new user:', newUser);
            
            // Save user
            users.push(newUser);
            localStorage.setItem('egytopiaUsers', JSON.stringify(users));
            
            currentUser = newUser;
            localStorage.setItem('egytopiaUser', JSON.stringify(currentUser));
            
            console.log('User created and logged in:', currentUser);
            
            // Update navigation bar
            updateNavigationBar();
            
            // Show appropriate dashboard
            if (currentUser.userType === 'artisan') {
                showProfile();
            } else {
                showCustomerDashboard();
            }
            
            showNotification('Account created successfully! Welcome to Egytopia, ' + name + '!', 'success');
        });
    } else {
        console.error('Signup form not found!');
    }
}

// Real-time form validation with highlighting
function setupFormValidation() {
    console.log('Setting up form validation...');
    
    // Name validation
    const signupName = document.getElementById('signupName');
    if (signupName) {
        signupName.addEventListener('input', function() {
            validateName(this.value);
        });
        signupName.addEventListener('blur', function() {
            validateName(this.value);
        });
    }
    
    // Email validation
    const signupEmail = document.getElementById('signupEmail');
    if (signupEmail) {
        signupEmail.addEventListener('input', function() {
            validateEmail(this.value);
        });
        signupEmail.addEventListener('blur', function() {
            validateEmail(this.value);
        });
    }
    
    // Password validation
    const signupPassword = document.getElementById('signupPassword');
    if (signupPassword) {
        signupPassword.addEventListener('input', function() {
            validatePassword(this.value);
        });
        signupPassword.addEventListener('focus', function() {
            showPasswordRequirements();
        });
        signupPassword.addEventListener('blur', function() {
            validatePassword(this.value);
        });
    }
    
    // Confirm password validation
    const signupConfirmPassword = document.getElementById('signupConfirmPassword');
    if (signupConfirmPassword) {
        signupConfirmPassword.addEventListener('input', function() {
            validateConfirmPassword(this.value);
        });
        signupConfirmPassword.addEventListener('blur', function() {
            validateConfirmPassword(this.value);
        });
    }
}

// Show password requirements
function showPasswordRequirements() {
    const passwordRequirements = document.querySelector('.password-requirements');
    if (passwordRequirements) {
        passwordRequirements.classList.add('show');
    }
}

// Validate name
function validateName(name) {
    const nameInput = document.getElementById('signupName');
    const nameValidation = document.getElementById('nameValidation');
    
    if (!nameInput || !nameValidation) return false;
    
    // Clear any previous states
    nameInput.classList.remove('valid', 'invalid');
    nameValidation.classList.remove('valid', 'invalid');
    nameValidation.style.display = 'none';
    
    if (!name.trim()) {
        nameInput.classList.add('invalid');
        nameValidation.textContent = 'Name is required';
        nameValidation.classList.add('invalid');
        nameValidation.style.display = 'block';
        return false;
    }
    
    // Check if name contains only letters and spaces
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!nameRegex.test(name)) {
        nameInput.classList.add('invalid');
        nameValidation.textContent = 'Name should contain only letters and spaces (min 2 characters)';
        nameValidation.classList.add('invalid');
        nameValidation.style.display = 'block';
        return false;
    }
    
    nameInput.classList.add('valid');
    nameValidation.textContent = '✓ Name looks good!';
    nameValidation.classList.add('valid');
    nameValidation.style.display = 'block';
    return true;
}

// Validate email
function validateEmail(email) {
    const emailInput = document.getElementById('signupEmail');
    const emailValidation = document.getElementById('emailValidation');
    
    if (!emailInput || !emailValidation) return false;
    
    // Clear any previous states
    emailInput.classList.remove('valid', 'invalid');
    emailValidation.classList.remove('valid', 'invalid');
    emailValidation.style.display = 'none';
    
    if (!email.trim()) {
        emailInput.classList.add('invalid');
        emailValidation.textContent = 'Email is required';
        emailValidation.classList.add('invalid');
        emailValidation.style.display = 'block';
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add('invalid');
        emailValidation.textContent = 'Please enter a valid email address';
        emailValidation.classList.add('invalid');
        emailValidation.style.display = 'block';
        return false;
    }
    
    emailInput.classList.add('valid');
    emailValidation.textContent = '✓ Email looks good!';
    emailValidation.classList.add('valid');
    emailValidation.style.display = 'block';
    return true;
}

// Validate password with real-time requirement checking
function validatePassword(password) {
    const passwordInput = document.getElementById('signupPassword');
    const passwordValidation = document.getElementById('passwordValidation');
    
    if (!passwordInput || !passwordValidation) return false;
    
    // Clear any previous states
    passwordInput.classList.remove('valid', 'invalid');
    passwordValidation.classList.remove('valid', 'invalid');
    passwordValidation.style.display = 'none';
    
    if (!password) {
        passwordInput.classList.add('invalid');
        passwordValidation.textContent = 'Password is required';
        passwordValidation.classList.add('invalid');
        passwordValidation.style.display = 'block';
        updatePasswordRequirements(password);
        return false;
    }
    
    // Check password requirements
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*#?&]/.test(password);
    
    // Update requirement indicators with highlight effect
    updatePasswordRequirements(password);
    
    if (!hasMinLength || !hasLetter || !hasNumber || !hasSpecialChar) {
        passwordInput.classList.add('invalid');
        passwordValidation.textContent = 'Password does not meet all requirements';
        passwordValidation.classList.add('invalid');
        passwordValidation.style.display = 'block';
        return false;
    }
    
    passwordInput.classList.add('valid');
    passwordValidation.textContent = '✓ Password is strong!';
    passwordValidation.classList.add('valid');
    passwordValidation.style.display = 'block';
    return true;
}

// Update password requirement indicators with highlighting
function updatePasswordRequirements(password) {
    const requirements = {
        length: document.getElementById('lengthReq'),
        letter: document.getElementById('letterReq'),
        number: document.getElementById('numberReq'),
        special: document.getElementById('specialReq')
    };
    
    if (!password) {
        // Reset all requirements
        Object.values(requirements).forEach(req => {
            if (req) {
                req.classList.remove('met', 'unmet', 'highlight');
                const icon = req.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-circle';
                }
            }
        });
        return;
    }
    
    // Check each requirement
    const checks = {
        length: password.length >= 8,
        letter: /[a-zA-Z]/.test(password),
        number: /\d/.test(password),
        special: /[@$!%*#?&]/.test(password)
    };
    
    // Update each requirement indicator
    Object.keys(requirements).forEach(key => {
        const req = requirements[key];
        if (!req) return;
        
        // Remove previous states
        req.classList.remove('met', 'unmet', 'highlight');
        
        const icon = req.querySelector('i');
        if (!icon) return;
        
        if (checks[key]) {
            // Requirement met
            req.classList.add('met');
            icon.className = 'fas fa-check-circle';
            
            // Add highlight effect when requirement is newly met
            if (password.length > 0) {
                req.classList.add('highlight');
                setTimeout(() => {
                    req.classList.remove('highlight');
                }, 500);
            }
        } else {
            // Requirement not met
            req.classList.add('unmet');
            icon.className = 'fas fa-times-circle';
        }
    });
}

// Validate confirm password
function validateConfirmPassword(confirmPassword) {
    const confirmPasswordInput = document.getElementById('signupConfirmPassword');
    const confirmPasswordValidation = document.getElementById('confirmPasswordValidation');
    const password = document.getElementById('signupPassword')?.value;
    
    if (!confirmPasswordInput || !confirmPasswordValidation) return false;
    
    // Clear any previous states
    confirmPasswordInput.classList.remove('valid', 'invalid');
    confirmPasswordValidation.classList.remove('valid', 'invalid');
    confirmPasswordValidation.style.display = 'none';
    
    if (!confirmPassword) {
        confirmPasswordInput.classList.add('invalid');
        confirmPasswordValidation.textContent = 'Please confirm your password';
        confirmPasswordValidation.classList.add('invalid');
        confirmPasswordValidation.style.display = 'block';
        return false;
    }
    
    if (confirmPassword !== password) {
        confirmPasswordInput.classList.add('invalid');
        confirmPasswordValidation.textContent = 'Passwords do not match';
        confirmPasswordValidation.classList.add('invalid');
        confirmPasswordValidation.style.display = 'block';
        return false;
    }
    
    confirmPasswordInput.classList.add('valid');
    confirmPasswordValidation.textContent = '✓ Passwords match!';
    confirmPasswordValidation.classList.add('valid');
    confirmPasswordValidation.style.display = 'block';
    return true;
}

// Setup feature click events
function setupFeatureClicks() {
    // All features trigger the sign in flow
    if (showcaseFeature) {
        showcaseFeature.addEventListener('click', function() {
            if (!currentUser) {
                if (authFormContainer && authFormContainer.style.display === 'block') {
                    const signinEmail = document.getElementById('signinEmail');
                    if (signinEmail) signinEmail.focus();
                }
                showNotification('Please sign in to access your artisan profile', 'warning');
            }
        });
    }
    
    if (earnFeature) {
        earnFeature.addEventListener('click', function() {
            if (!currentUser) {
                if (authFormContainer && authFormContainer.style.display === 'block') {
                    const signinEmail = document.getElementById('signinEmail');
                    if (signinEmail) signinEmail.focus();
                }
                showNotification('Please sign in to start earning from your craft', 'warning');
            }
        });
    }
    
    if (communityFeature) {
        communityFeature.addEventListener('click', function() {
            if (!currentUser) {
                if (authFormContainer && authFormContainer.style.display === 'block') {
                    const signinEmail = document.getElementById('signinEmail');
                    if (signinEmail) signinEmail.focus();
                }
                showNotification('Please sign in to join our artisan community', 'warning');
            }
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

    // Add first product button
    if (addFirstProductBtn) {
        addFirstProductBtn.addEventListener('click', function() {
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
            if (productImage) productImage.click();
        });
    }

    if (productImage) {
        productImage.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                // Validate file type
                const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
                if (!validTypes.includes(file.type)) {
                    showNotification('Please select a valid image file (JPEG, PNG, GIF, WebP)', 'error');
                    this.value = '';
                    return;
                }
                
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showNotification('Image size should be less than 5MB', 'error');
                    this.value = '';
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    if (imagePreview) {
                        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Product preview">`;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save product
    if (saveProductBtn) {
        saveProductBtn.addEventListener('click', saveProduct);
    }

    // Close modal when clicking outside
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === productModal) {
                closeProductModalFunc();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeProductModalFunc();
        }
    });
}

// Logout user
function logoutUser() {
    console.log('Logging out user');
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
        if (modalTitle) modalTitle.textContent = 'Edit Product';
        if (saveProductBtn) saveProductBtn.textContent = 'Update Product';
        
        const product = artisanProductsData.find(p => p.id === productId);
        if (product) {
            document.getElementById('productName').value = product.title;
            document.getElementById('productPrice').value = product.numericPrice;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productCategory').value = product.category;
            
            // Set image preview
            if (imagePreview) {
                imagePreview.innerHTML = `<img src="${product.image}" alt="Product preview">`;
            }
        }
    } else {
        // Adding new product
        if (modalTitle) modalTitle.textContent = 'Add New Product';
        if (saveProductBtn) saveProductBtn.textContent = 'Add Product';
        
        // Reset form
        if (productForm) productForm.reset();
        if (imagePreview) {
            imagePreview.innerHTML = `
                <div class="image-placeholder">
                    <i class="fas fa-image" style="font-size: 48px; margin-bottom: 10px;"></i>
                    <p>No image selected</p>
                </div>
            `;
        }
    }
    
    if (productModal) {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = document.getElementById('productName');
            if (firstInput) firstInput.focus();
        }, 100);
    }
}

// Close product modal
function closeProductModalFunc() {
    if (productModal) {
        productModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    editingProductId = null;
}

// Save product
function saveProduct() {
    const productName = document.getElementById('productName').value.trim();
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value.trim();
    const productCategory = document.getElementById('productCategory').value;
    const productImageFile = productImage ? productImage.files[0] : null;
    
    // Validation
    if (!productName) {
        showNotification('Please enter product name!', 'error');
        document.getElementById('productName').focus();
        return;
    }
    
    if (!productPrice || parseFloat(productPrice) <= 0) {
        showNotification('Please enter a valid price!', 'error');
        document.getElementById('productPrice').focus();
        return;
    }
    
    if (!productDescription) {
        showNotification('Please enter product description!', 'error');
        document.getElementById('productDescription').focus();
        return;
    }
    
    if (!productCategory) {
        showNotification('Please select a category!', 'error');
        document.getElementById('productCategory').focus();
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
        if (uploadImageBtn) uploadImageBtn.click();
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
            isArtisanProduct: true
        };
        
        // Save product to artisan's collection
        artisanProductsData.push(newProduct);
        saveArtisanProducts();
        
        // ALSO SAVE TO MAIN PRODUCTS STORAGE
        saveToMainProducts(newProduct);
        
        // Update UI
        loadArtisanProducts();
        closeProductModalFunc();
        showNotification('Product added successfully! It will appear in the ' + productCategory + ' category.', 'success');
    };
    reader.onerror = function() {
        showNotification('Error reading image file. Please try again.', 'error');
    };
    reader.readAsDataURL(productImageFile);
}

// Save product to main products storage
function saveToMainProducts(product) {
    // Get existing products from main storage
    const mainProductsKey = 'egytopiaProducts';
    let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
    
    // Add the new product
    allProducts.push(product);
    
    // Save back to main storage
    localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
    
    console.log('Product saved to main storage in category:', product.category);
    
    // Also save to category-specific storage if your site uses that
    const categoryProductsKey = `egytopiaProducts_${product.category}`;
    let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
    categoryProducts.push(product);
    localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
}

// Update product in main storage
function updateInMainStorage(updatedProduct) {
    const mainProductsKey = 'egytopiaProducts';
    let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
    
    // Find and update the product
    const index = allProducts.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
        allProducts[index] = updatedProduct;
        localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
    }
    
    // Also update in category storage
    const categoryProductsKey = `egytopiaProducts_${updatedProduct.category}`;
    let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
    const catIndex = categoryProducts.findIndex(p => p.id === updatedProduct.id);
    if (catIndex !== -1) {
        categoryProducts[catIndex] = updatedProduct;
        localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
    }
}

// Update existing product
function updateProduct(productName, productPrice, productDescription, productCategory, productImageFile) {
    const productIndex = artisanProductsData.findIndex(p => p.id === editingProductId);
    if (productIndex === -1) {
        showNotification('Product not found!', 'error');
        return;
    }
    
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
        reader.onerror = function() {
            showNotification('Error reading image file. Please try again.', 'error');
        };
        reader.readAsDataURL(productImageFile);
    } else {
        completeProductUpdate();
    }
    
    function completeProductUpdate() {
        // Save updated products
        saveArtisanProducts();
        
        // ALSO UPDATE IN MAIN STORAGE
        updateInMainStorage(artisanProductsData[productIndex]);
        
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
    if (productsCount) {
        productsCount.textContent = artisanProductsData.length;
        if (artisanProductsData.length > 0) {
            productsCount.classList.add('cart-update');
            setTimeout(() => {
                productsCount.classList.remove('cart-update');
            }, 300);
        }
    }
    
    // Show/hide no products message
    if (artisanProducts && noProductsMessage) {
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
}

// Create product card for artisan's dashboard
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description.substring(0, 100)}${product.description.length > 100 ? '...' : ''}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small edit-product" data-id="${product.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-secondary btn-small delete-product" data-id="${product.id}">
                    <i class="fas fa-trash"></i> Delete
                </button>
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

// Delete product from main storage
function deleteFromMainStorage(productId, category) {
    const mainProductsKey = 'egytopiaProducts';
    let allProducts = JSON.parse(localStorage.getItem(mainProductsKey) || '[]');
    allProducts = allProducts.filter(p => p.id !== productId);
    localStorage.setItem(mainProductsKey, JSON.stringify(allProducts));
    
    // Also delete from category storage
    const categoryProductsKey = `egytopiaProducts_${category}`;
    let categoryProducts = JSON.parse(localStorage.getItem(categoryProductsKey) || '[]');
    categoryProducts = categoryProducts.filter(p => p.id !== productId);
    localStorage.setItem(categoryProductsKey, JSON.stringify(categoryProducts));
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
        // Find the product first to get its category
        const productToDelete = artisanProductsData.find(p => p.id === productId);
        
        artisanProductsData = artisanProductsData.filter(product => product.id !== productId);
        saveArtisanProducts();
        
        // ALSO DELETE FROM MAIN STORAGE
        if (productToDelete) {
            deleteFromMainStorage(productId, productToDelete.category);
        }
        
        loadArtisanProducts();
        showNotification('Product deleted successfully!', 'success');
    }
}

// Save artisan's products to localStorage
function saveArtisanProducts() {
    localStorage.setItem(`egytopiaArtisanProducts_${currentUser.id}`, JSON.stringify(artisanProductsData));
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Set icon based on type
    let icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    if (type === 'warning') icon = 'fas fa-exclamation-triangle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add to notification container
    notificationContainer.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Debug: Add clear storage button (only in development)
function addDebugButton() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const debugBtn = document.createElement('button');
        debugBtn.textContent = 'Clear Storage (Debug)';
        debugBtn.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 9999;
            padding: 10px 15px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            opacity: 0.7;
            transition: opacity 0.3s;
        `;
        
        debugBtn.addEventListener('click', function() {
            if (confirm('Clear all localStorage data and reload?')) {
                localStorage.clear();
                location.reload();
            }
        });
        
        debugBtn.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
        });
        
        debugBtn.addEventListener('mouseleave', function() {
            this.style.opacity = '0.7';
        });
        
        document.body.appendChild(debugBtn);
    }
}

// Add debug buttons in development
addDebugButton();

// Export functions for debugging in console
window.debugEgytopia = {
    showAuth,
    showCustomerDashboard,
    showProfile,
    logoutUser,
    clearStorage: function() {
        localStorage.clear();
        location.reload();
    },
    getCurrentUser: function() {
        return currentUser;
    },
    getAllUsers: function() {
        return JSON.parse(localStorage.getItem('egytopiaUsers') || '[]');
    }
};

console.log('Egytopia User Portal loaded successfully!');
console.log('Debug commands available in window.debugEgytopia');