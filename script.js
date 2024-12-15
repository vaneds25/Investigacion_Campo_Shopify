document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon'); // El ícono de hamburguesa
    const navLinks = document.querySelector('.nav-links'); // El menú de navegación

    // Añadir un evento de clic al ícono de hamburguesa
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Muestra u oculta el menú
    });
});
