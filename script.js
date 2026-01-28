// Initialize Animation Library
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Animation speed in milliseconds
        once: true,     // Whether animation should happen only once
        offset: 100     // Offset from the original trigger point
    });
});

// Smooth Scrolling for Navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#002663'; // Darker blue on scroll
        nav.style.padding = '0.5rem 10%';
    } else {
        nav.style.background = '#003a8c';
        nav.style.padding = '1rem 10%';
    }
});