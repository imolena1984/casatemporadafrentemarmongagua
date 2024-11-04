 // Variáveis para controlar o estado do menu e submenu
    let currentSubmenu = null;
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');

    function toggleMenu() {
        menu.classList.toggle('show');
        menuBtn.classList.toggle('active');

        // Fecha o submenu aberto, se houver
        if (currentSubmenu) {
            currentSubmenu.classList.remove('show');
            currentSubmenu = null;
        }
    }

    function openSubmenu(id) {
        // Fecha o menu principal
        menu.classList.remove('show');

        // Abre o submenu selecionado
        const submenu = document.getElementById(id);
        submenu.classList.add('show');
        currentSubmenu = submenu;
    }

    function goBack() {
        // Fecha o submenu atual
        if (currentSubmenu) {
            currentSubmenu.classList.remove('show');
            currentSubmenu = null;
        }

        // Reabre o menu principal
        menu.classList.add('show');
    }

    // Fecha o menu ao clicar fora
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-container')) {
            menu.classList.remove('show');
            if (currentSubmenu) currentSubmenu.classList.remove('show');
            menuBtn.classList.remove('active');
            currentSubmenu = null;
        }
    });
