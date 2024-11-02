document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    // Toggle para o menu principal no mobile
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Toggle para submenus no mobile
    const menuItems = document.querySelectorAll(".menu > li");

    menuItems.forEach((item) => {
        if (item.querySelector(".submenu")) {
            item.addEventListener("click", function (event) {
                event.stopPropagation();
                item.classList.toggle("active");
                const submenu = item.querySelector(".submenu");
                submenu.classList.toggle("active");
            });
        }
    });
});



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
