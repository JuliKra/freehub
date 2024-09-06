document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu-toggle');
    const logo = document.querySelector('.brand');

    // Asegúrate de que el menú esté inicialmente oculto
    menu.classList.add('deactive');

    // Maneja el clic en el botón de menú
    menuButton.addEventListener('click', function() {
        // Alterna entre active y deactive para el menú
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('deactive');
        } else {
            menu.classList.remove('deactive');
            menu.classList.add('active');
        }

        // Alterna la clase active en el botón del menú (hamburguesa ↔ cruz)
        this.classList.toggle('active');

        // Cambiar el logo dependiendo del estado del menú
        if (menu.classList.contains('active')) {
            checkImageExists('src/images/logo-blanco.svg', function(exists) {
                logo.src = exists ? 'src/images/logo-blanco.svg' : '../src/images/logo-blanco.svg';
            });
        } else {
            checkImageExists('src/images/logo-color.svg', function(exists) {
                logo.src = exists ? 'src/images/logo-color.svg' : '../src/images/logo-color.svg';
            });
        }
    });

    // Maneja el clic en los enlaces del menú para cerrarlo
    document.querySelectorAll('.menu-items a').forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menu.classList.add('deactive');
            menuButton.classList.remove('active'); // Asegúrate de que el ícono de hamburguesa regrese al estado original
            checkImageExists('src/images/logo-color.svg', function(exists) {
                logo.src = exists ? 'src/images/logo-color.svg' : '../src/images/logo-color.svg';
            });
        });
    });
});
