// ===== VIDEO HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all video elements
    const videos = document.querySelectorAll('.lazy-video');
    
    videos.forEach(video => {
        const card = video.closest('.job-card');
        
        if (card) {
            // Play video on hover
            card.addEventListener('mouseenter', function() {
                video.play().catch(error => {
                    console.log('Video play failed:', error);
                });
            });
            
            // Pause video when not hovering
            card.addEventListener('mouseleave', function() {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    // ===== LAZY LOAD VIDEOS =====
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const sources = video.querySelectorAll('source');
                
                sources.forEach(source => {
                    if (source.dataset.src) {
                        source.src = source.dataset.src;
                    }
                });
                
                video.load();
                video.closest('.job-card-video')?.classList.add('video-loaded');
                observer.unobserve(video);
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for actual anchor links (not just "#")
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== SCROLL ANIMATION FOR ELEMENTS =====
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.job-card, .about-information, .information-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    animateOnScroll();

    // ===== CARD CLICK HANDLER (Optional - for future expansion) =====
    const cards = document.querySelectorAll('.job-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add modal or page navigation here
            console.log('Card clicked:', this.querySelector('h3')?.textContent);
        });
    });

    // ===== PARALLAX EFFECT ON SCROLL (Optional) =====
    let scrollY = 0;
    
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // You can add parallax effects here
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });

    // ===== TYPING ANIMATION FOR HEADER (Optional) =====
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    };

    // Uncomment to enable typing animation
    // const headerLink = document.querySelector('.header-link');
    // if (headerLink) {
    //     const originalText = headerLink.textContent;
    //     typeWriter(headerLink, originalText, 100);
    // }

    // ===== BADGE ANIMATION =====
    const badges = document.querySelectorAll('.badge');
    
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.05}s`;
        badge.style.animation = 'fadeIn 0.5s ease forwards';
    });

    // ===== RESPONSIVE MENU TOGGLE (for future mobile menu) =====
    // This is a placeholder for when you want to add a mobile hamburger menu
    const createMobileMenu = () => {
        // Future implementation
    };

    console.log('Portfolio loaded successfully!');
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
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

