const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
        });
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks) {
        navLinks.style.display = 'flex';
    }
});

console.log('✅ Diakhaby Plomberie - Site Web Chargé!');