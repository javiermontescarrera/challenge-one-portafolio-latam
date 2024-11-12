//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

const botonModo = document.getElementById('boton-modo');
const body = document.body;

// Comprobamos el modo al cargar la página
if(localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('modo-oscuro');
    body.classList.remove('modo-claro');
    botonModo.textContent = '🌙'; // Modo oscuro, ícono de luna
} else {
    body.classList.add('modo-claro');
    body.classList.remove('modo-oscuro');
    botonModo.textContent = '☀️'; // Modo claro, ícono de sol
}

// Función para alternar el modo
botonModo.addEventListener('click', () => {
    if (body.classList.contains('modo-oscuro')) {
        body.classList.remove('modo-oscuro');
        body.classList.add('modo-claro');
        botonModo.textContent = '☀️'; // Cambia el icono a sol
        localStorage.setItem('modo', 'claro'); // Guardamos la preferencia
    } else {
        body.classList.remove('modo-claro');
        body.classList.add('modo-oscuro');
        botonModo.textContent = '🌙'; // Cambia el icono a luna
        localStorage.setItem('modo', 'oscuro'); // Guardamos la preferencia
    }
});