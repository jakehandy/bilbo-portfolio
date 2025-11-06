/**
 * Bilbo Baggins Portfolio - Interactive JavaScript
 * Handles navigation, expandable cards, form submission, and smooth scrolling
 */

// ============================================
// NAVIGATION
// ============================================

/**
 * Mobile navigation toggle functionality
 */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Update active link on scroll
window.addEventListener('scroll', updateActiveNavLink);

/**
 * Add shadow to navbar on scroll
 */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// ============================================
// WORK CARDS - EXPANDABLE FUNCTIONALITY
// ============================================

/**
 * Handle expandable work cards
 */
const workCards = document.querySelectorAll('.work-card');

workCards.forEach(card => {
    const expandButton = card.querySelector('.work-card-expand');
    
    // Handle expand button click
    expandButton?.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click event
        toggleCard(card);
    });
    
    // Handle card click (expand/collapse)
    card.addEventListener('click', () => {
        toggleCard(card);
    });
    
    // Prevent clicks inside card details from toggling
    const cardDetails = card.querySelector('.work-card-details');
    cardDetails?.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

/**
 * Toggle card expanded state
 * @param {HTMLElement} card - The card element to toggle
 */
function toggleCard(card) {
    const isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse the card
        card.classList.remove('expanded');
        card.setAttribute('aria-expanded', 'false');
    } else {
        // Collapse all other cards first (optional - remove if you want multiple cards open)
        workCards.forEach(otherCard => {
            otherCard.classList.remove('expanded');
            otherCard.setAttribute('aria-expanded', 'false');
        });
        
        // Expand this card
        card.classList.add('expanded');
        card.setAttribute('aria-expanded', 'true');
        
        // Smooth scroll to card if it's partially off-screen
        setTimeout(() => {
            const cardRect = card.getBoundingClientRect();
            const isPartiallyHidden = cardRect.bottom > window.innerHeight;
            
            if (isPartiallyHidden) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 300); // Wait for expansion animation
    }
}

// ============================================
// CONTACT FORM
// ============================================

/**
 * Handle contact form submission
 */
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission (replace with actual API call)
    try {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log form data (in production, send to backend)
        console.log('Form submitted with data:', data);
        
        // Show success message
        showFormResponse('success', 'Thank you for your message! I\'ll get back to you as soon as I return from my next adventure.');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message
        showFormResponse('error', 'Oops! Something went wrong. Please try again or send a raven instead.');
        
        // Reset button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }
});

/**
 * Display form response message
 * @param {string} type - 'success' or 'error'
 * @param {string} message - Message to display
 */
function showFormResponse(type, message) {
    if (!formResponse) return;
    
    formResponse.className = `form-response ${type}`;
    formResponse.textContent = message;
    formResponse.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formResponse.style.display = 'none';
    }, 5000);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

/**
 * Smooth scroll to sections when clicking navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash
        if (href === '#') return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const navHeight = nav?.offsetHeight || 60;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ============================================

/**
 * Add fade-in animation to elements as they enter viewport
 */
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

// Observe work cards for animation
workCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

/**
 * Handle keyboard navigation for expandable cards
 */
workCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    
    card.addEventListener('keydown', (e) => {
        // Enter or Space key
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCard(card);
        }
    });
});

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the page when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎒 Welcome to Bilbo Baggins\' Portfolio!');
    console.log('✨ "It\'s a dangerous business, going out your door."');
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Add animation delay to work cards
    workCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit how often a function is called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
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

// Optimize scroll event listeners with debouncing
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

