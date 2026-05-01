const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.nav-links-overlay a');

const themeSwitch = document.getElementById('switch');
const body = document.body;


if (openMenu) {
    openMenu.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
}


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});


if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); 
        } else {
           
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        if (themeSwitch) themeSwitch.checked = true;
    } else {
        body.setAttribute('data-theme', 'dark');
        if (themeSwitch) themeSwitch.checked = false;
    }
});