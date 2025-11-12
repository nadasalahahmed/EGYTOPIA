

        // Mobile Navigation Toggle
    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
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

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Optional: Add animation for stats numbers
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    });

            // Quick View Modal Functionality
        const quickViewButtons = document.querySelectorAll('.quick-view-btn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDescription = document.getElementById('modalDescription');
        const modalRating = document.querySelector('.modal-rating .stars');
        const modalRatingValue = document.querySelector('.modal-rating .rating-value');

        // Product data for quick view
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
                image: "https://images.unsplash.com/photo-1701884315096-bb754d03f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMGpld2VscnklMjBnb2xkfGVufDF8fHx8MTc2MjgxNTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" ,
                rating: 4.2,
                ratingText: "★★★★☆ (4.2)"
            },
        };

        // Open modal with product details
        quickViewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product');
                const product = products[productId];
                
                modalImg.src = product.image;
                modalImg.alt = product.title;
                modalTitle.textContent = product.title;
                modalPrice.textContent = product.price;
                modalDescription.textContent = product.description;
                
                // Update rating stars
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
                
                modalRatingValue.textContent = product.ratingText;
                
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        closeModal.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title').textContent;
                
                // Visual feedback
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '#c19b53';
                }, 2000);
                
                console.log(`Added to cart: ${productTitle}`);
            });
        });




         document.addEventListener('DOMContentLoaded', function() {
        const categoryButtons = document.querySelectorAll('.category-btn');
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
                    cat.classList.add('active');
                } else {
                    cat.classList.remove('active');
                }
            });
        }
        
        // Add to cart functionality for category products
        const categoryCartButtons = document.querySelectorAll('.category-product .add-to-cart');
        categoryCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.closest('.category-product');
                const productName = product.querySelector('h4').textContent;
                
                // Visual feedback
                this.textContent = 'Added!';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.textContent = 'Add to Cart';
                    this.style.backgroundColor = '#c19b53';
                }, 2000);
                
                console.log(`Added to cart: ${productName}`);
            });
        });
    });


      // Optional: Add animation for stats counter
    document.addEventListener('DOMContentLoaded', function() {
        // Animate stats when they come into view
        const statsSection = document.querySelector('.stats-section');
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(stat => {
                        animateValue(stat, 0, parseInt(stat.textContent), 2000);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        if (statsSection) {
            observer.observe(statsSection);
        }
        
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
    });