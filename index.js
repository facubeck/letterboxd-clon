// DOM
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

// const mostrarModal = () => {
//     overlay.classList.add('active');
//     modal.classList.add('active');
// }

const cerrarModal = () => {
    overlay.classList.add('close');
    modal.classList.add('close');
}

// closeButton.onclick - cerrarModal();