// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Toggle icon
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        header.style.padding = '5px 0';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        header.style.padding = '0';
    }
});

// Search Mock
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Buscando pacotes... (Ação simulada)');
    });
}
