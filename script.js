// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .product-card, .about-text, .quality-feature, .contact-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form handling
const inquiryForm = document.getElementById('inquiryForm');

inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Basic validation
    const requiredFields = ['name', 'email', 'country', 'message'];
    const missingFields = requiredFields.filter(field => !formObject[field] || formObject[field].trim() === '');
    
    if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formObject.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Create email content
    const emailSubject = `Rice Export Inquiry from ${formObject.name}`;
    const emailBody = `
New inquiry from your website:

Name: ${formObject.name}
Email: ${formObject.email}
Company: ${formObject.company || 'Not provided'}
Phone: ${formObject.phone || 'Not provided'}
Country: ${formObject.country}
Rice Variety: ${formObject.product || 'Not specified'}
Estimated Quantity: ${formObject.quantity ? formObject.quantity + ' MT' : 'Not specified'}

Message:
${formObject.message}

---
This inquiry was submitted through your website contact form.
    `.trim();
    
    // Create mailto link (for demonstration - in production, you'd send to a server)
    const mailtoLink = `mailto:info@ahmedawaisrice.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formObject);
        
        // Open default email client (for demonstration)
        window.location.href = mailtoLink;
        
        alert('Thank you for your inquiry! Your default email client should open with a pre-filled message. If it doesn\'t open automatically, please copy the inquiry details and send them to info@ahmedawaisrice.com');
        
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Add number formatting for quantity field
const quantityInput = document.getElementById('quantity');
quantityInput.addEventListener('input', function() {
    // Ensure only positive numbers
    if (this.value < 0) {
        this.value = 0;
    }
    // Add commas for thousands
    if (this.value) {
        const formattedValue = parseInt(this.value).toLocaleString();
        // Note: We don't update the display value as it interferes with typing
    }
});

// Country suggestions (basic implementation)
const countryInput = document.getElementById('country');
const commonCountries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
    'France', 'Italy', 'Spain', 'Netherlands', 'Belgium', 'Switzerland',
    'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Japan',
    'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'Philippines',
    'Indonesia', 'Vietnam', 'India', 'Bangladesh', 'Sri Lanka',
    'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman',
    'South Africa', 'Egypt', 'Morocco', 'Nigeria', 'Kenya', 'Brazil',
    'Argentina', 'Chile', 'Mexico', 'Russia', 'China', 'Hong Kong'
];

// Add autocomplete functionality
countryInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    if (value.length < 2) return;
    
    const matches = commonCountries.filter(country => 
        country.toLowerCase().includes(value)
    );
    
    // Create datalist if it doesn't exist
    let datalist = document.getElementById('country-list');
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = 'country-list';
        document.body.appendChild(datalist);
        this.setAttribute('list', 'country-list');
    }
    
    // Update datalist options
    datalist.innerHTML = matches.map(country => 
        `<option value="${country}">`
    ).join('');
});

// Add phone number formatting (basic)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function() {
    // Remove all non-numeric characters except + at the beginning
    let value = this.value.replace(/[^\d+]/g, '');
    
    // Ensure + only at the beginning
    if (value.includes('+') && value.indexOf('+') !== 0) {
        value = value.replace(/\+/g, '');
    }
    
    this.value = value;
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const step = target / (duration / 16); // 60fps
    
    function updateCounter() {
        start += step;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const stats = document.querySelectorAll('.stat h4');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/[^\d]/g, ''));
            
            entry.target.classList.add('animated');
            animateCounter(entry.target, number);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

// Add loading state management
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Replace with placeholder if image fails to load
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNjYuNTY5IDE4Ni41NjkgMTgwIDE3MCAxODBDMTUzLjQzMSAxODAgMTQwIDE2Ni41NjkgMTQwIDE1MEMxNDAgMTMzLjQzMSAxNTMuNDMxIDEyMCAxNzAgMTIwQzE4Ni41NjkgMTIwIDIwMCAxMzMuNDMxIDIwMCAxNTBaIiBmaWxsPSIjOEI5NUEyIi8+CjxwYXRoIGQ9Ik0yNDAgMTgwTDIwMCAyMDBMMTYwIDE2MEwxMjAgMjAwSDI4MEwyNDAgMTgwWiIgZmlsbD0iIzhCOTVBMiIvPgo8L3N2Zz4K';
        this.alt = 'Rice product image';
    });
});

// Scroll to top functionality (if you want to add a scroll-to-top button)
let scrollToTopBtn = null;

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2c5530;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(44, 85, 48, 0.3);
    `;
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.background = '#1e3a21';
        scrollToTopBtn.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.background = '#2c5530';
        scrollToTopBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(scrollToTopBtn);
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (!scrollToTopBtn) createScrollToTopButton();
    
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

console.log('Ahmed Awais Rice Exporters website loaded successfully!');