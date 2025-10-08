// ============================================
// VIDEO SOURCE BASED ON DEVICE & FADE-IN ON LOAD
// ============================================
const backgroundVideo = document.getElementById('background-video');

if (backgroundVideo) {
    // Set video source based on screen size
    function setVideoSource() {
        const isMobile = window.innerWidth <= 768;
        const videoSource = backgroundVideo.querySelector('source');
        
        if (videoSource) {
            // Define your video paths
            const mobileVideo = 'videos/AfterWorld/survival9_16.mp4';
            const desktopVideo = 'videos/AfterWorld/survival16_9.mp4';
            
            const newSource = isMobile ? mobileVideo : desktopVideo;
            
            // Only change if different to avoid reload
            if (videoSource.src !== newSource && !videoSource.src.includes(newSource)) {
                videoSource.src = newSource;
                backgroundVideo.load(); // Reload video with new source
                
                // Force play after load (especially important for mobile)
                backgroundVideo.addEventListener('loadeddata', function() {
                    const playPromise = backgroundVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log('Autoplay prevented:', error);
                            // Autoplay was prevented, video will show play button
                        });
                    }
                }, { once: true });
            }
        }
    }
    
    // Set initial source
    setVideoSource();
    
    // Attempt to play video (mobile requires user interaction or muted + playsinline)
    const attemptPlay = () => {
        const playPromise = backgroundVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Video playing successfully
                backgroundVideo.classList.add('loaded');
            }).catch(error => {
                console.log('Autoplay prevented, trying muted play:', error);
                // If autoplay fails, ensure it's muted and try again
                backgroundVideo.muted = true;
                backgroundVideo.play().catch(e => {
                    console.log('Video play failed:', e);
                });
            });
        }
    };
    
    // Fade in video once it's ready to play
    backgroundVideo.addEventListener('canplay', function() {
        this.classList.add('loaded');
        attemptPlay();
    });
    
    // Fallback: if video is already loaded when script runs
    if (backgroundVideo.readyState >= 3) {
        backgroundVideo.classList.add('loaded');
        attemptPlay();
    }
    
    // Optional: Update video source on resize (debounced to avoid constant reloads)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            setVideoSource();
        }, 500);
    });
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
// STICKY HEADER ON SCROLL WITH ANIMATION (Desktop only)
// ============================================
let initialHeaderOffset = null;

// Store initial header position on load
window.addEventListener('load', function() {
    // Only run animations on desktop (>768px)
    if (window.innerWidth > 768) {
        const header = document.getElementById('header');
        const heroSection = document.querySelector('.hero-section[data-hero="true"]');
        
        if (heroSection && header && !header.classList.contains('sticky')) {
            const headerRect = header.getBoundingClientRect();
            initialHeaderOffset = headerRect.top + window.scrollY;
        }
    }
});

window.addEventListener('scroll', function() {
    // Only run animations on desktop (>768px)
    if (window.innerWidth > 768) {
        const header = document.getElementById('header');
        const heroSection = document.querySelector('.hero-section[data-hero="true"]');
        
        // If there's a hero section on this page, use the animated transition
        if (heroSection && initialHeaderOffset !== null) {
            // Make sticky when header starts to go out of view (within 100px of top)
            if (window.scrollY > initialHeaderOffset - 100) {
                // Fade out original, then show sticky
                if (!header.classList.contains('sticky')) {
                    header.classList.add('fading-out');
                    setTimeout(() => {
                        header.classList.remove('fading-out');
                        header.classList.add('sticky');
                    }, 300); // Match the fade-out duration
                }
            } else {
                // Remove sticky and fade back in
                if (header.classList.contains('sticky')) {
                    header.classList.remove('sticky');
                    // Small delay to ensure smooth transition
                    setTimeout(() => {
                        header.classList.remove('fading-out');
                    }, 50);
                }
            }
        }
    }
    // Mobile: no-hero class is set but no scroll animations
});

// ============================================
// DETECT PAGE TYPE AND SET INITIAL HEADER STATE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const heroSection = document.querySelector('.hero-section[data-hero="true"]');
    
    // Desktop only: If this page doesn't have a hero section, make header sticky from start
    if (!heroSection && window.innerWidth > 768) {
        header.classList.add('no-hero');
    }

    // Set active nav link based on current page
    setActiveNavLink();
    
    // If on index page at the top (no hash or #home), clear all section highlights
    const isIndexPage = window.location.pathname.endsWith('index.html') || 
                        window.location.pathname === '/' || 
                        window.location.pathname === '';
    const hash = window.location.hash;
    
    if (isIndexPage && (!hash || hash === '#home')) {
        // We're at the top of the home page, remove all section link highlighting
        document.querySelectorAll('.nav-link[href^="#"], .nav-link[href*="index.html#"]').forEach(link => {
            link.classList.remove('active');
        });
    }
});

// ============================================
// SET ACTIVE NAVIGATION LINK
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isIndexPage = currentPage === 'index.html' || currentPage === '';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Only mark page links (not section anchors) as active
        // Page links: games.html, index.html (without hash)
        if (!linkHref.includes('#')) {
            // This is a page link, check if it matches current page
            // Don't highlight "Home" link on index page (we're already there)
            if (isIndexPage && linkHref.includes('index.html')) {
                link.classList.remove('active');
            } else if (linkHref.includes(currentPage)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        } else if (isIndexPage && linkHref.startsWith('#')) {
            // On index page, section links will be handled by scroll event
            // Don't set any as active initially (even home)
            link.classList.remove('active');
        } else if (isIndexPage && linkHref.includes('index.html#')) {
            // Cross-page section links on index page
            link.classList.remove('active');
        } else {
            // Cross-page anchor links (index.html#something) from other pages
            const currentHash = window.location.hash;
            if (linkHref.includes(currentPage) && linkHref.includes(currentHash) && currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
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
// ACTIVE NAVIGATION ON SCROLL (Section-based highlighting)
// ============================================
window.addEventListener('scroll', function() {
    // Only update section highlighting on index page
    const isIndexPage = window.location.pathname.endsWith('index.html') || 
                        window.location.pathname === '/' || 
                        window.location.pathname === '';
    
    if (isIndexPage) {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        let activeSection = null;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                activeSection = sectionId;
            }
        });

        // Remove active from all section links
        document.querySelectorAll('.nav-link[href^="#"], .nav-link[href*="index.html#"]').forEach(link => {
            link.classList.remove('active');
        });

        // Only add active if we're in a specific section (not home/hero)
        if (activeSection && activeSection !== 'home') {
            const correspondingLink = document.querySelector(`.nav-link[href="#${activeSection}"], .nav-link[href="index.html#${activeSection}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
        // If in home section or at top, no section links are active
    }
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
  
