// ============================================
// COUNTDOWN TIMER
// ============================================

// Set hackathon start date (3 months from now)
const hackathonStartDate = new Date();
hackathonStartDate.setMonth(hackathonStartDate.getMonth() + 3);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = hackathonStartDate.getTime() - now;

    if (distance < 0) {
        // Hackathon has started
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update with padding
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl.textContent !== String(days).padStart(2, '0')) {
        daysEl.textContent = String(days).padStart(2, '0');
        daysEl.classList.add('updated');
        setTimeout(() => daysEl.classList.remove('updated'), 500);
    }
    if (hoursEl.textContent !== String(hours).padStart(2, '0')) {
        hoursEl.textContent = String(hours).padStart(2, '0');
        hoursEl.classList.add('updated');
        setTimeout(() => hoursEl.classList.remove('updated'), 500);
    }
    if (minutesEl.textContent !== String(minutes).padStart(2, '0')) {
        minutesEl.textContent = String(minutes).padStart(2, '0');
        minutesEl.classList.add('updated');
        setTimeout(() => minutesEl.classList.remove('updated'), 500);
    }
    secondsEl.textContent = String(seconds).padStart(2, '0');
    secondsEl.classList.add('updated');
    setTimeout(() => secondsEl.classList.remove('updated'), 500);
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ============================================
// NAVIGATION BAR
// ============================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Skip empty links
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FAQ ACCORDION
// ============================================

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .theme-card, .timeline-item, .prize-card, .step-item');
    
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

    elements.forEach((el, index) => {
        // Special stagger effect for timeline items
        if (el.classList.contains('timeline-item')) {
            el.style.transitionDelay = `${index * 0.15}s`;
        }
        
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleScrollAnimations);
} else {
    handleScrollAnimations();
}

// ============================================
// UPDATE CURRENT YEAR IN FOOTER
// ============================================

document.getElementById('current-year').textContent = new Date().getFullYear();

// ============================================
// BUTTON HOVER EFFECTS (Enhanced)
// ============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });
});

// ============================================
// THEME CARD INTERACTIONS
// ============================================

document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// PRIZE CARD INTERACTIONS
// ============================================

document.querySelectorAll('.prize-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// SOCIAL LINKS HOVER EFFECTS
// ============================================

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
