
// =========================================================
//   ARPAN KUMAR MOHARANA — PORTFOLIO
//   script.js
// =========================================================


// =========================
//   ACTIVE NAV ON SCROLL
// =========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(
                `.desktop-nav a[href="#${entry.target.id}"]`
            );
            if (active) active.classList.add('active');
        }
    });
}, {
    rootMargin: '-30% 0px -60% 0px'
});

sections.forEach(section => observer.observe(section));
