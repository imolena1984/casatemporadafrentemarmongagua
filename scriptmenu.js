document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu > li");

    // Toggle para o menu principal no mobile
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");

        // Animação de rotação para o ícone hambúrguer
        hamburger.classList.toggle("rotate");
    });

    // Toggle para submenus no mobile com transição suave
    menuItems.forEach((item) => {
        if (item.querySelector(".submenu")) {
            item.addEventListener("click", function (event) {
                event.stopPropagation();
                item.classList.toggle("active");
                const submenu = item.querySelector(".submenu");
                
                // Transição suave para os submenus
                submenu.classList.toggle("active");

                // Adiciona o botão de voltar no submenu
                if (!submenu.querySelector(".back-btn")) {
                    const backButton = document.createElement("li");
                    backButton.classList.add("back-btn");
                    backButton.innerHTML = "<a href='#'>Voltar</a>";
                    submenu.insertBefore(backButton, submenu.firstChild);

                    // Evento para o botão de voltar
                    backButton.addEventListener("click", function (e) {
                        e.stopPropagation();
                        item.classList.remove("active");
                        submenu.classList.remove("active");
                    });
                }
            });
        }
    });
});
