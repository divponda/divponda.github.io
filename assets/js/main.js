// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 120; // Offset for navbar
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveLink);

// Update active link on page load
document.addEventListener('DOMContentLoaded', updateActiveLink);

// Intersection Observer for fade-in animations (optional, keeping minimal)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for subtle animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0.95';
    section.style.transform = 'translateY(10px)';
    observer.observe(section);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle escape key to blur focused elements
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Prefers reduced motion check
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-duration', '0s');
    
    // Remove smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';
}