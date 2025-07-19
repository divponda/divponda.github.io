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

// Custom Cursor Effects
const cursor = document.querySelector('.cursor');
const cursorTrails = [];
let mouseX = 0;
let mouseY = 0;

// Create cursor trail elements
for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    cursorTrails.push({
        element: trail,
        x: 0,
        y: 0
    });
}

// Mouse movement tracking
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update main cursor position
    if (cursor) {
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
    }
});

// Animate cursor trails
function animateTrails() {
    cursorTrails.forEach((trail, index) => {
        const delay = (index + 1) * 50;
        setTimeout(() => {
            trail.x += (mouseX - trail.x) * 0.1;
            trail.y += (mouseY - trail.y) * 0.1;
            trail.element.style.left = trail.x - 2 + 'px';
            trail.element.style.top = trail.y - 2 + 'px';
            trail.element.style.opacity = 0.7 - (index * 0.1);
        }, delay);
    });
    requestAnimationFrame(animateTrails);
}

// Start cursor trail animation
if (window.innerWidth > 768) {
    animateTrails();
}

// Cursor interactions
document.addEventListener('mousedown', () => {
    if (cursor) {
        cursor.style.transform = 'scale(0.5)';
    }
});

document.addEventListener('mouseup', () => {
    if (cursor) {
        cursor.style.transform = 'scale(1)';
    }
});

// Enhanced hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project, .skill-group');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (cursor && window.innerWidth > 768) {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.mixBlendMode = 'normal';
            cursor.style.background = 'var(--pink-accent)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        if (cursor && window.innerWidth > 768) {
            cursor.style.transform = 'scale(1)';
            cursor.style.mixBlendMode = 'difference';
            cursor.style.background = 'var(--accent)';
        }
    });
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

// Parallax effect for floating shapes
const floatingShapes = document.querySelectorAll('.floating-shape');

document.addEventListener('mousemove', (e) => {
    const mouseXPercent = e.clientX / window.innerWidth;
    const mouseYPercent = e.clientY / window.innerHeight;
    
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseXPercent - 0.5) * speed * 20;
        const y = (mouseYPercent - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
    });
});

// Text reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation to child elements
            const children = entry.target.querySelectorAll('h2, h3, p, .project, .skill-group');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0.95';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
    
    // Initially hide children for staggered animation
    const children = section.querySelectorAll('h2, h3, p, .project, .skill-group');
    children.forEach(child => {
        child.style.opacity = '0.8';
        child.style.transform = 'translateY(10px)';
        child.style.transition = 'all 0.6s ease';
    });
});

// Interactive text effects
const textElements = document.querySelectorAll('h1, h2, h3, p');

textElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '0.5px';
        this.style.textShadow = '0 2px 10px rgba(124, 58, 237, 0.2)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
        this.style.textShadow = 'none';
    });
});

// Random sparkle effect on click
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) return; // Skip on mobile
    
    for (let i = 0; i < 6; i++) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'var(--pink-accent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    const finalX = x + Math.cos(angle) * distance;
    const finalY = y + Math.sin(angle) * distance;
    
    setTimeout(() => {
        sparkle.style.transform = `translate(${finalX - x}px, ${finalY - y}px) scale(0)`;
        sparkle.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Add sparkle animation keyframe
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

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
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Remove cursor effects
    if (cursor) cursor.style.display = 'none';
    cursorTrails.forEach(trail => trail.element.style.display = 'none');
}

// Performance optimization: throttle mousemove events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to expensive operations
const throttledParallax = throttle((e) => {
    const mouseXPercent = e.clientX / window.innerWidth;
    const mouseYPercent = e.clientY / window.innerHeight;
    
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseXPercent - 0.5) * speed * 20;
        const y = (mouseYPercent - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
    });
}, 16); // ~60fps

document.addEventListener('mousemove', throttledParallax);