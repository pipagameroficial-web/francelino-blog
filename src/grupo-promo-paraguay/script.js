

// Interaction: Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Cursor parallax - LIMITED TO HERO SECTION
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow-overlay');
    if (!glow) return;

    // Only apply if we are close to the top of the page
    if (window.scrollY > window.innerHeight) return;

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 92, 0, 0.1), transparent 70%)`;
});
