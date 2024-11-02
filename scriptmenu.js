 // Função para alternar a exibição do menu principal no modo mobile
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    // Função para abrir um submenu específico
    function openSubmenu(id) {
        const submenu = document.getElementById(id);
        submenu.classList.add('active');
        document.querySelector('.menu').classList.remove('active'); // Fechar menu principal
    }

    // Função para voltar ao menu principal a partir de um submenu
    function goBack() {
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach((submenu) => submenu.classList.remove('active'));
        document.querySelector('.menu').classList.add('active'); // Reabrir menu principal
    }

//extras    
// Seleciona o modal
const modal = document.getElementById("calcModal");

// Seleciona o elemento <span> que fecha o modal
const closeModalSpan = document.getElementsByClassName("close")[0];

// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fecha o modal
closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Ao carregar a página, abre o modal
document.addEventListener("DOMContentLoaded", function() {
    openModal(); // Abre o modal automaticamente
});
