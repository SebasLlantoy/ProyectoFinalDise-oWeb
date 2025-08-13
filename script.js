document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica del Menú Hamburguesa ---
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const menuNav = document.getElementById('menu-nav');

    menuHamburguesa.addEventListener('click', () => {
        menuNav.classList.toggle('active');
    });

    // --- Lógica de Filtros de la Galería ---
    // Esta parte solo funcionará en galeria.html, y no dará error en las otras páginas
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const galeriaItems = document.querySelectorAll('.galeria-item');

    if (filtroBtns.length > 0) { // Comprobar si estamos en la página de la galería
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filtroBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filtro = btn.getAttribute('data-filter');

                galeriaItems.forEach(item => {
                    const categoria = item.getAttribute('data-category');
                    if (filtro === 'todos' || categoria.includes(filtro)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

});