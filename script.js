// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateDarkModeIcon(true);
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon
    updateDarkModeIcon(isDarkMode);
});

function updateDarkModeIcon(isDarkMode) {
    const icon = darkModeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll(
    '.about-content, .portfolio-card, .skill-category, .timeline-item, .achievement-item, .contact-content'
);

elementsToAnimate.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 200);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission (replace with actual API call)
    try {
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.className = 'form-message error';
        
        // Reset button
        const submitBtn = contactForm.querySelector('.btn-primary');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
});

// ===== ACTIVE NAVIGATION LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== PARALLAX EFFECT FOR HERO SECTION (SUBTLE) =====
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.3;
    if (heroSection) {
        heroSection.style.transform = `translateY(${parallax}px)`;
    }
});

// ===== TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     setTimeout(() => {
//         typeWriter(heroSubtitle, originalText, 80);
//     }, 1000);
// }

// ===== CURSOR TRAIL EFFECT (OPTIONAL ENHANCEMENT) =====
// Uncomment for a subtle cursor follower effect
/*
const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background-color: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursorDot.style.display = 'block';
    cursorDot.style.left = e.clientX - 4 + 'px';
    cursorDot.style.top = e.clientY - 4 + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorDot.style.display = 'none';
});
*/

// ===== ADD HOVER EFFECT TO PORTFOLIO CARDS =====
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border-color)';
    });
});

// ===== PORTFOLIO IMAGE LIGHTBOX =====
const imageTriggers = document.querySelectorAll('.portfolio-image-trigger');
const lightbox = document.getElementById('portfolioLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxNext = document.getElementById('lightboxNext');

if (lightbox && lightboxImage && lightboxClose && lightboxNext) {
    let currentImages = [];
    let currentImageIndex = 0;
    let currentImageTitle = 'Portfolio image';

    const setLightboxImage = () => {
        lightboxImage.src = currentImages[currentImageIndex];
        lightboxImage.alt = currentImageTitle;
    };

    const updateNextVisibility = () => {
        lightboxNext.classList.toggle('hidden', currentImages.length <= 1);
    };

    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const imageList = trigger.getAttribute('data-images');
            const imageSrc = trigger.getAttribute('data-image');

            currentImages = imageList
                ? imageList.split('|').map(item => item.trim()).filter(Boolean)
                : [imageSrc].filter(Boolean);

            if (currentImages.length === 0) {
                return;
            }

            currentImageIndex = 0;
            currentImageTitle = trigger.getAttribute('data-title') || 'Portfolio image';

            setLightboxImage();
            updateNextVisibility();
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });

    lightboxNext.addEventListener('click', () => {
        if (currentImages.length <= 1) {
            return;
        }

        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        setLightboxImage();
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        currentImages = [];
        currentImageIndex = 0;
        updateNextVisibility();
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }

        if (event.key === 'ArrowRight' && lightbox.classList.contains('active') && currentImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
            setLightboxImage();
        }
    });
}

// ===== BACK TO TOP BUTTON (OPTIONAL) =====
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-heart"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 8px 20px rgba(214, 51, 132, 0.4);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.1)';
    this.style.boxShadow = '0 12px 30px rgba(214, 51, 132, 0.5)';
});

backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 8px 20px rgba(214, 51, 132, 0.4)';
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to my portfolio!', 'color: #1a365d; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #2c5282; font-size: 14px;');

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animation to hero section
    const heroElements = document.querySelectorAll('.fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Initial call to set active nav
    updateActiveNav();
});
