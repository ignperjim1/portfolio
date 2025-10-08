// ============================================
// VIDEO FADE-IN ON LOAD
// ============================================
const backgroundVideo = document.getElementById('background-video');

if (backgroundVideo) {
    // Fade in video once it's ready to play
    backgroundVideo.addEventListener('canplay', function() {
        this.classList.add('loaded');
    });
    
    // Fallback: if video is already loaded when script runs
    if (backgroundVideo.readyState >= 3) {
        backgroundVideo.classList.add('loaded');
    }
}

// ============================================
// PARTICLES.JS CONFIGURATION
// ============================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 40,
            density: {
                enable: false,
                value_area: 800
            }
        },
        color: {
            value: ['#48bfe3', '#64dfdf', '#80ffdb', '#5390d9']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3.25,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2.2,
            direction: 'top-right',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: false
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                size: 3,
                duration: 2,
                opacity: 0.5,
                speed: 2
            }
        }
    },
    retina_detect: true
});

// ============================================
// TYPING ANIMATION - DISABLED
// ============================================
// Typing animation removed - using static text instead

// ============================================
// STICKY HEADER ON SCROLL WITH ANIMATION
// ============================================
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const heroSection = document.querySelector('.hero-section[data-hero="true"]');
    
    // If there's a hero section on this page, use the animated transition
    if (heroSection) {
        // Get the header's position relative to viewport
        const headerRect = header.getBoundingClientRect();
        const headerOffsetTop = headerRect.top + window.scrollY;
        
        // Make sticky when header starts to go out of view (within 100px of top)
        if (window.scrollY > headerOffsetTop - 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    // If no hero section, header is already sticky (no-hero class)
});

// ============================================
// DETECT PAGE TYPE AND SET INITIAL HEADER STATE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const heroSection = document.querySelector('.hero-section[data-hero="true"]');
    
    // If this page doesn't have a hero section, make header sticky from start
    if (!heroSection) {
        header.classList.add('no-hero');
    }

    // Set active nav link based on current page
    setActiveNavLink();
});

// ============================================
// SET ACTIVE NAVIGATION LINK
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Check if link matches current page
        if (linkHref.includes(currentPage) || 
            (currentPage === '' && linkHref.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (this.classList.contains('nav-link')) {
                    this.classList.add('active');
                }

                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                navMenu.classList.remove('active');
            }
        }
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const fadeElements = document.querySelectorAll('.project-card, .skill-badge, .experience-item, .company-logo, .timeline-item');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// ============================================
// ACTIVE NAVIGATION ON SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (correspondingLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                correspondingLink.classList.add('active');
            }
        }
    });
});

// ============================================
// PORTFOLIO HOVER EFFECTS
// ============================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// PREVENT DEFAULT ON EMPTY LINKS
// ============================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
const modalCloses = document.querySelectorAll('.modal-close');
const modals = document.querySelectorAll('.modal');

// Open modal
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

console.log('Portfolio loaded successfully! ✨');
  
