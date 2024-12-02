document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion__content');

        // Alternar clase activa
        item.classList.toggle('accordion__item--active');

        // Cambiar la altura del contenido
        if (item.classList.contains('accordion__item--active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});
// Obtener elementos del DOM
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const images = document.querySelectorAll('.gallery__image');

// Añadir evento de clic a cada imagen de la galería
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Mostrar lightbox
        lightboxImg.src = image.src; // Cambiar la imagen del lightbox
    });
});

// Evento para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Ocultar lightbox
});

// Cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Ocultar lightbox
    }
});

// Obtener todos los botones de pestañas y contenido de pestañas
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

// Añadir evento de clic a cada botón de pestaña
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase activa de todos los botones y pestañas
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));

        // Añadir la clase activa al botón de pestaña clicado y a su contenido
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});