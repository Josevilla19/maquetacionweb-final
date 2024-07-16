// JavaScript para mostrar/ocultar menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    menuToggle.addEventListener('click', function () {
        menuLinks.classList.toggle('show');
    });
});

// JavaScript para mostrar/ocultar botón de subir arriba
document.addEventListener('DOMContentLoaded', function () {
    const subirArribaBtn = document.getElementById('subir-arriba-btn');

    // Muestra u oculta el botón basado en la posición del scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Cambia 300 por la posición deseada para mostrar el botón
            subirArribaBtn.style.display = 'block';
        } else {
            subirArribaBtn.style.display = 'none';
        }
    });

    // Sube al inicio de la página cuando se hace clic en el botón
    subirArribaBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});