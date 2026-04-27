document.addEventListener('DOMContentLoaded', function () {
    // Fade-in on scroll
    const fadeEls = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    fadeEls.forEach((el) => fadeObserver.observe(el));

    const sections = document.querySelectorAll('main section[id]');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

    /**
     * Highlights the nav link for the section currently at/above the header line.
     * `window.location.href === link.href` only ran once and never updates while you scroll,
     * and the hash does not change when you scroll by wheel/touch — so we use scroll position.
     */
    function activeNav(){
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            if (window.location.href === link.href) {
                link.classList.add("active");
            }
            else{
                link.classList.remove("active");
            }
        });
    }

    let navScrollScheduled = false;
    function onScrollOrResize() {
        if (navScrollScheduled) return;
        navScrollScheduled = true;
        requestAnimationFrame(() => {
            navScrollScheduled = false;
            activeNav();
        });
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('hashchange', activeNav);
    activeNav();

    // Hamburger menu toggle
    const toggle = document.querySelector('.nav-toggle');

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
            requestAnimationFrame(activeNav);
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', false);
                requestAnimationFrame(activeNav);
            });
        });

        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', false);
            }
        });
    }
});
