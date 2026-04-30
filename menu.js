// --- SELEÇÃO DE ELEMENTOS DO MENU ---
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.nav-links-overlay a');

// --- SELEÇÃO DE ELEMENTOS DO TEMA ---
const themeSwitch = document.getElementById('switch');
const body = document.body;

// ==========================================
// 1. LÓGICA DO MENU OVERLAY
// ==========================================

// Abrir o menu ao clicar no ícone de barras
if (openMenu) {
    openMenu.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });
}

// Fechar o menu ao clicar no "X"
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
}

// Fechar o menu automaticamente ao clicar em qualquer link (Sobre, Projetos, etc.)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});

// ==========================================
// 2. LÓGICA DO TEMA (DARK/LIGHT MODE)
// ==========================================

if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            // Se o checkbox estiver marcado, ativa o tema claro
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); // Salva a escolha do usuário
        } else {
            // Se desmarcado, volta para o tema escuro
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// --- VERIFICAÇÃO AO CARREGAR A PÁGINA ---
// Isso garante que, se você der F5, o tema escolhido continue lá
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