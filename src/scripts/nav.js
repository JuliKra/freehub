// Función para determinar si una imagen existe en una ruta
function checkImageExists(src, callback) {
    const img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = src;
}

// Maneja el clic en el botón de menú
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const menuButton = this;
    const logo = document.querySelector('.brand');

    // Alterna el estado del menú
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');

    if (menu.classList.contains('active')) {
        // Verifica si el logo blanco existe en la primera ruta
        checkImageExists('src/images/logo-blanco.svg', function(exists) {
            if (exists) {
                logo.src = 'src/images/logo-blanco.svg';
            } else {
                // Si no existe, intenta con la segunda ruta
                logo.src = '../src/images/logo-blanco.svg';
            }
        });
    } else {
        // Verifica si el logo de color existe en la primera ruta
        checkImageExists('src/images/logo-color.svg', function(exists) {
            if (exists) {
                logo.src = 'src/images/logo-color.svg';
            } else {
                // Si no existe, intenta con la segunda ruta
                logo.src = '../src/images/logo-color.svg';
            }
        });
    }
});

// Maneja el clic en los enlaces del menú
document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('menu');
        const menuButton = document.getElementById('menu-toggle');
        const logo = document.querySelector('.brand');

        // Cierra el menú
        menu.classList.remove('active');
        menuButton.classList.remove('active');

        // Verifica si el logo de color existe en la primera ruta
        checkImageExists('src/images/logo-color.svg', function(exists) {
            if (exists) {
                logo.src = 'src/images/logo-color.svg';
            } else {
                // Si no existe, intenta con la segunda ruta
                logo.src = '../src/images/logo-color.svg';
            }
        });
    });
});
