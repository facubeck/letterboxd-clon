// DOM
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

// const mostrarModal = () => {
//     overlay.classList.add('active');
//     modal.classList.add('active');
// }

const cerrarModal = () => {
    // overlay.style.display = 'none';
    // modal.style.display = 'none';
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    document.body.style.overflow = 'visible'
}

closeButton.addEventListener('click', cerrarModal);
overlay.addEventListener('click', cerrarModal);

// closeButton.onclick - cerrarModal();