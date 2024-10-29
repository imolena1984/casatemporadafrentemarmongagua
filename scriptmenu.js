// Seleciona o botão e o menu
const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    menu.classList.toggle('active');
}

// Adiciona um evento de clique ao botão hambúrguer
hamburgerButton.addEventListener('click', toggleMenu);
