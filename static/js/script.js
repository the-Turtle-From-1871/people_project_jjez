// // ===========================
// // Navigation Toggle for Mobile
// // ===========================

// document.addEventListener('DOMContentLoaded', function() {
//     const navToggle = document.querySelector('.nav-toggle');
//     const navMenu = document.querySelector('.nav-menu');
//     const navLinks = document.querySelectorAll('.nav-menu a');
    
//     // Toggle mobile menu
//     if (navToggle) {
//         navToggle.addEventListener('click', function() {
//             navMenu.classList.toggle('active');
            
//             // Animate hamburger icon
//             const spans = navToggle.querySelectorAll('span');
//             if (navMenu.classList.contains('active')) {
//                 spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//                 spans[1].style.opacity = '0';
//                 spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
//             } else {
//                 spans[0].style.transform = 'none';
//                 spans[1].style.opacity = '1';
//                 spans[2].style.transform = 'none';
//             }
//         });
//     }
    
//     // Close mobile menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             if (window.innerWidth <= 768) {
//                 navMenu.classList.remove('active');
//                 const spans = navToggle.querySelectorAll('span');
//                 spans[0].style.transform = 'none';
//                 spans[1].style.opacity = '1';
//                 spans[2].style.transform = 'none';
//             }
//         });
//     });
    
//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(event) {
//         const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        
//         if (!isClickInsideNav && navMenu.classList.contains('active')) {
//             navMenu.classList.remove('active');
//             const spans = navToggle.querySelectorAll('span');
//             spans[0].style.transform = 'none';
//             spans[1].style.opacity = '1';
//             spans[2].style.transform = 'none';
//         }
//     });
// });

// // ===========================
// // Smooth Scroll Enhancement
// // ===========================

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
        
//         if (target) {
//             const navHeight = document.querySelector('.navbar').offsetHeight;
//             const targetPosition = target.offsetTop - navHeight;
            
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // ===========================
// // Active Navigation Highlighting
// // ===========================

// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('.section[id]');
//     const navLinks = document.querySelectorAll('.nav-menu a');
//     const navHeight = document.querySelector('.navbar').offsetHeight;
    
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - navHeight - 100;
//         const sectionHeight = section.offsetHeight;
        
//         if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === '#' + current) {
//             link.classList.add('active');
//         }
//     });
// });

// // ===========================
// // Scroll Animations
// // ===========================

// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// // Observe sections for fade-in animation
// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');
    
//     sections.forEach(section => {
//         section.style.opacity = '0';
//         section.style.transform = 'translateY(20px)';
//         section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(section);
//     });
// });

// // ===========================
// // Card Hover Effects Enhancement
// // ===========================

// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.advantage-card, .impact-item, .theory-section');
    
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transition = 'all 0.3s ease';
//         });
//     });
// });

// // ===========================
// // Dynamic Year in Footer
// // ===========================

// document.addEventListener('DOMContentLoaded', function() {
//     const footer = document.querySelector('.footer p');
//     if (footer) {
//         const currentYear = new Date().getFullYear();
//         footer.innerHTML = footer.innerHTML.replace('2024', currentYear);
//     }
// });

// // ===========================
// // Print Optimization
// // ===========================

// window.addEventListener('beforeprint', function() {
//     // Expand all sections for printing
//     const navMenu = document.querySelector('.nav-menu');
//     if (navMenu) {
//         navMenu.style.display = 'none';
//     }
// });

// window.addEventListener('afterprint', function() {
//     // Restore navigation after printing
//     const navMenu = document.querySelector('.nav-menu');
//     if (navMenu) {
//         navMenu.style.display = '';
//     }
// });

// // ===========================
// // Keyboard Navigation
// // ===========================

// document.addEventListener('keydown', function(e) {
//     // Press 'Escape' to close mobile menu
//     if (e.key === 'Escape') {
//         const navMenu = document.querySelector('.nav-menu');
//         const navToggle = document.querySelector('.nav-toggle');
        
//         if (navMenu && navMenu.classList.contains('active')) {
//             navMenu.classList.remove('active');
//             const spans = navToggle.querySelectorAll('span');
//             spans[0].style.transform = 'none';
//             spans[1].style.opacity = '1';
//             spans[2].style.transform = 'none';
//         }
//     }
// });

// // ===========================
// // Performance: Lazy Loading Images
// // ===========================

// document.addEventListener('DOMContentLoaded', function() {
//     const imageElements = document.querySelectorAll('img[data-src]');
    
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.removeAttribute('data-src');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });
    
//     imageElements.forEach(img => imageObserver.observe(img));
// });

// // ===========================
// // Accessibility: Skip to Content
// // ===========================

// document.addEventListener('DOMContentLoaded', function() {
//     // Add skip to content link for screen readers
//     const skipLink = document.createElement('a');
//     skipLink.href = '#problem';
//     skipLink.className = 'skip-link';
//     skipLink.textContent = 'Skip to main content';
//     skipLink.style.cssText = `
//         position: absolute;
//         top: -40px;
//         left: 0;
//         background: var(--accent-color);
//         color: white;
//         padding: 8px;
//         text-decoration: none;
//         z-index: 100;
//     `;
    
//     skipLink.addEventListener('focus', function() {
//         this.style.top = '0';
//     });
    
//     skipLink.addEventListener('blur', function() {
//         this.style.top = '-40px';
//     });
    
//     document.body.insertBefore(skipLink, document.body.firstChild);
// });

// // ===========================
// // Console Info
// // ===========================

// console.log('%cROTC Excusal System Website', 'color: #3498db; font-size: 20px; font-weight: bold;');
// console.log('%cDeveloped for CMU IS Project 67-250', 'color: #2c3e50; font-size: 14px;');
// console.log('%cAuthors: Joohan Kim, Eugene Hwang, Zeeshan Shariff, Josh Yang', 'color: #7f8c8d; font-size: 12px;');