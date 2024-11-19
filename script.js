document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado con éxito.");
});
// Obtener el elemento de la línea vertical
const lineaVertical = document.querySelector('.linea-vertical');

// Función para actualizar la altura de la línea según el scroll
function actualizarAlturaLinea() {
    const scrollY = window.scrollY; // Obtener el valor de desplazamiento vertical (scroll)
    const maxHeight = 38; // La altura máxima que la línea puede alcanzar (en em o px)

    // La altura de la línea será proporcional al desplazamiento del scroll
    const newHeight = Math.min(scrollY, maxHeight); // La altura no puede superar el valor máximo

    // Establecer la nueva altura de la línea
    lineaVertical.style.height = `${newHeight}px`;
}

// Escuchar el evento de scroll
window.addEventListener('scroll', actualizarAlturaLinea);
