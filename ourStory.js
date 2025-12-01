// Mobile Navigation
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Effects (Works even if .story-hero doesn't exist)
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.story-hero');

    window.addEventListener('scroll', function () {

        // If hero exists → use it
        if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            if (window.scrollY > heroBottom - 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Otherwise → simple scroll behavior
        else {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Active navigation
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Home page exception
    if (currentPage === '' || currentPage === 'index.html' || currentPage === 'EgyHome.html') {
        const home = document.querySelector('a[href="EgyHome.html"]');
        if (home) home.classList.add('active');
    }
}


// Initialize Everything
document.addEventListener('DOMContentLoaded', function () {
    setupMobileNavigation();
    setupScrollEffects();
    updateActiveNavLink();
  
});
