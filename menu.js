const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');
const themeSwitch = document.getElementById('switch');

// Abrir Menu Overlay
openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Fechar Menu Overlay
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Fechar ao clicar em um link
document.querySelectorAll('.nav-links-overlay a').forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});

// Troca de Tema
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});