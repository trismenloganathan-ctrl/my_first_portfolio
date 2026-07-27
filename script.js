// Logic untuk Menu Responsive Toggle (Mobile/Tablet)
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Tukar ikon menu (tiga bar kepada 'X')
    const icon = mobileMenu.querySelector('i');
    if(icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Tutup menu secara automatik apabila pautan diklik
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Penunjuk Aktif Navigasi Automatik Semasa Skrol (Scroll Active Indicator)
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section, header');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - 150 && scrollPosition < section.offsetTop + section.offsetHeight - 150) {
            let currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});