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

function abrirModal(titulo, descricao, imagem, link) {
    const modal = document.getElementById("meuModal");
    
    // Preenche os campos do modal com as informações do projeto clicado
    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-descricao").innerText = descricao;
    document.getElementById("modal-img").src = imagem;
    document.getElementById("modal-link").href = link;
    modal.style.display = "block";
}

function fecharModal() {
    const modal = document.getElementById("meuModal");
    modal.style.display = "none"; // Aqui ele muda o CSS para 'none' (escondido)
    document.body.style.overflow = "auto"; // Devolve o scroll para a página
}