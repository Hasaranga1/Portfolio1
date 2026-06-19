/* ==================== MOBILE NAVIGATION TOGGLE ==================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
});
});

/* ==================== STICKY HEADER ==================== */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('sticky');
} else {
header.classList.remove('sticky');
}
});

/* ==================== ACTIVE NAVIGATION HIGHLIGHTING ==================== */
const sections = document.querySelectorAll('section');

function updateActiveNav() {
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop - 200) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').includes(current)) {
link.classList.add('active');
}
});
}

window.addEventListener('scroll', updateActiveNav);

/* ==================== TYPING ANIMATION ==================== */
const typingElement = document.getElementById('typing-text');
const typingTexts = ['Web Developer', 'Front-End Developer', 'UI Designer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
const currentText = typingTexts[textIndex];

if (isDeleting) {
typingElement.textContent = currentText.substring(0, charIndex - 1);
charIndex--;
typingDelay = 50;
} else {
typingElement.textContent = currentText.substring(0, charIndex + 1);
charIndex++;
typingDelay = 100;
}

if (!isDeleting && charIndex === currentText.length) {
isDeleting = true;
typingDelay = 2000; // Pause at end
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
textIndex = (textIndex + 1) % typingTexts.length;
typingDelay = 500; // Pause before typing next
}

setTimeout(typeEffect, typingDelay);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', typeEffect);

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
// Optional: Stop observing once revealed
// revealObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
revealObserver.observe(element);
});

/* ==================== ANIMATED PROGRESS BARS ==================== */
const progressBars = document.querySelectorAll('.progress-bar');

const progressObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const width = entry.target.getAttribute('data-width');
entry.target.style.width = width;
}
});
}, {
threshold: 0.5
});

progressBars.forEach(bar => {
progressObserver.observe(bar);
});

/* ==================== ANIMATED COUNTER FOR STATS ==================== */
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const target = parseInt(entry.target.getAttribute('data-target'));
const duration = 2000; // 2 seconds
const increment = target / (duration / 16); // 60fps
let current = 0;

const updateCounter = () => {
current += increment;
if (current < target) {
entry.target.textContent = Math.ceil(current);
requestAnimationFrame(updateCounter);
} else {
entry.target.textContent = target + '+';
}
};

updateCounter();
counterObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.5
});

statNumbers.forEach(stat => {
counterObserver.observe(stat);
});

/* ==================== BACK TO TOP BUTTON ==================== */
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
backToTopBtn.classList.add('active');
} else {
backToTopBtn.classList.remove('active');
}
});

// Smooth scroll for back to top
backToTopBtn.addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

/* ==================== CONTACT FORM HANDLING ==================== */
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
e.preventDefault();

// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

// Simple validation feedback
if (name && email && subject && message) {
// Show success message
const btn = contactForm.querySelector('button[type="submit"]');
const originalText = btn.innerHTML;

btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

// Reset form
contactForm.reset();

// Reset button after 3 seconds
setTimeout(() => {
btn.innerHTML = originalText;
btn.style.background = '';
}, 3000);
}
});

/* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */
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

/* ==================== PARALLAX EFFECT FOR HERO BLOBS ==================== */
/* document.addEventListener('mousemove', (e) => {
const blobs = document.querySelectorAll('.blob');
const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

blobs.forEach((blob, index) => {
const speed = (index + 1) * 20;
const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

blob.style.transform = translate(${xOffset}px, ${yOffset}px)scale(${1+index * 0.1}); */
document.addEventListener('mousemove', (e) => {

  const blobs = document.querySelectorAll('.blob');

  blobs.forEach((blob, index) => {

    const speed = (index + 1) * 20;

    const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
    const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

    blob.style.transform = 
      `translate(${xOffset}px, ${yOffset}px) scale(${1 + index * 0.1})`;

  });


});
