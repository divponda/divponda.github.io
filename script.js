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

// Custom Cursor Effects - Toned Down
const cursor = document.querySelector('.cursor');
const cursorTrails = [];
let mouseX = 0;
let mouseY = 0;

// Create fewer cursor trail elements for subtlety
for (let i = 0; i < 3; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    cursorTrails.push({
        element: trail,
        x: 0,
        y: 0
    });
}

// Mouse movement tracking - smoother and less aggressive
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update main cursor position
    if (cursor) {
        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';
    }
});

// Animate cursor trails with more subtle movement
function animateTrails() {
    cursorTrails.forEach((trail, index) => {
        const delay = (index + 1) * 100; // Slower, more elegant
        setTimeout(() => {
            trail.x += (mouseX - trail.x) * 0.05; // Much slower following
            trail.y += (mouseY - trail.y) * 0.05;
            trail.element.style.left = trail.x - 1.5 + 'px';
            trail.element.style.top = trail.y - 1.5 + 'px';
            trail.element.style.opacity = 0.4 - (index * 0.1); // More subtle opacity
        }, delay);
    });
    requestAnimationFrame(animateTrails);
}

// Start cursor trail animation only on desktop
if (window.innerWidth > 768) {
    animateTrails();
}

// Subtle cursor interactions
document.addEventListener('mousedown', () => {
    if (cursor) {
        cursor.style.transform = 'scale(0.8)'; // Less dramatic scaling
    }
});

document.addEventListener('mouseup', () => {
    if (cursor) {
        cursor.style.transform = 'scale(1)';
    }
});

// Enhanced hover effects for interactive elements - more subtle
const interactiveElements = document.querySelectorAll('a, button, .card, .hobby-item');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (cursor && window.innerWidth > 768) {
            cursor.style.transform = 'scale(1.2)'; // Smaller scale change
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

// Navigation active link highlighting
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Update active link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Subtle parallax effect for floating shapes - much reduced
const floatingShapes = document.querySelectorAll('.floating-shape');

document.addEventListener('mousemove', (e) => {
    const mouseXPercent = e.clientX / window.innerWidth;
    const mouseYPercent = e.clientY / window.innerHeight;
    
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1; // Much slower movement
        const x = (mouseXPercent - 0.5) * speed * 5; // Reduced range
        const y = (mouseYPercent - 0.5) * speed * 5;
        
        shape.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
    });
});

// Gentle fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for gentle animations
document.querySelectorAll('.section, .card, .post-preview').forEach(element => {
    element.style.opacity = '0.9';
    element.style.transform = 'translateY(10px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// Subtle text effects - less aggressive
const textElements = document.querySelectorAll('h1, h2, h3');

textElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '0.2px'; // Reduced spacing
        this.style.textShadow = '0 1px 5px rgba(99, 102, 241, 0.1)'; // Much subtler shadow
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
        this.style.textShadow = 'none';
    });
});

// Subtle click effects - no more sparkles, just gentle feedback
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) return;
    
    // Create a subtle ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX - 10 + 'px';
    ripple.style.top = e.clientY - 10 + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'var(--accent)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.opacity = '0.3';
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'all 0.3s ease-out';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.style.transform = 'scale(3)';
        ripple.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        ripple.remove();
    }, 300);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Prefers reduced motion check
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable all animations for accessibility
    document.documentElement.style.setProperty('--transition-duration', '0s');
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Remove cursor effects
    if (cursor) cursor.style.display = 'none';
    cursorTrails.forEach(trail => trail.element.style.display = 'none');
    
    // Remove floating shapes animation
    floatingShapes.forEach(shape => {
        shape.style.animation = 'none';
    });
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
        const speed = (index + 1) * 0.1;
        const x = (mouseXPercent - 0.5) * speed * 5;
        const y = (mouseYPercent - 0.5) * speed * 5;
        
        shape.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
    });
}, 32); // ~30fps for smoother performance

document.addEventListener('mousemove', throttledParallax);

// Smooth page transitions (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility changes to pause animations when not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause expensive animations when page is not visible
        floatingShapes.forEach(shape => {
            shape.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page becomes visible
        floatingShapes.forEach(shape => {
            shape.style.animationPlayState = 'running';
        });
    }
});