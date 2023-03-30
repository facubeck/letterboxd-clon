// DOM
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');
const body = document.getElementById('body');


const cerrarModal = () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    document.body.style.overflow = 'visible';
    body.classList.remove('no-scroll');

    setTimeout(() => {
        if (overlay.classList.contains('hidden')) {
            let style = getComputedStyle(overlay);
            let opacity = style.opacity;
            overlay.style.display = 'none'
            console.log(opacity);
        }
    }, 700)
}

closeButton.addEventListener('click', cerrarModal);
overlay.addEventListener('click', cerrarModal);