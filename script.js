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
    item.addEventListener('mouseover', () => {
        item.classList.add('skill-item-hover'); // Clase CSS para el efecto hover
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('skill-item-hover');
    });
});

// Botón de Instagram con transición de degradado
const instagramButton = document.querySelector('.instagram-button');
const gradient1 = 'linear-gradient(to right, #fccc63, #fbad50, #cd486b, #4c68d7)';
const gradient2 = 'linear-gradient(to right, #ffffff, #ffffff, #ffffff, #ffffff)';
instagramButton.dataset.text = instagramButton.querySelector('span').textContent;

instagramButton.addEventListener('mouseover', () => {
    gsap.to(instagramButton, { duration: 0.3, backgroundImage: gradient2 });
    gsap.to(instagramButton, { duration: 0.3, backgroundImage: gradient1, modifiers: { backgroundImage: "::before" } }); // Cambiado para seleccionar el pseudo-elemento correctamente
});

instagramButton.addEventListener('mouseout', () => {
    gsap.to(instagramButton, { duration: 0.3, backgroundImage: gradient1 });
    gsap.to(instagramButton, { duration: 0.3, backgroundImage: gradient2, modifiers: { backgroundImage: "::before" } }); // Cambiado para seleccionar el pseudo-elemento correctamente
});

instagramButton.addEventListener('mouseover', () => {
    instagramButton.classList.add('hover');
});

instagramButton.addEventListener('mouseout', () => {
    instagramButton.classList.remove('hover');
});
