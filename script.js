// Desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Resaltar habilidades al pasar el ratón
const skillItems = document.querySelectorAll('.skill-grid li');
skillItems.forEach(item => {
    item.classList.add('skill-item'); //Añade la clase para el efecto hover
});