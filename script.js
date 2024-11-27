document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio cargado con éxito.");
});
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".titule span");
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Retraso de 0.1s por letra
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const arrowDown = document.querySelector(".arrow-down");
    const targetSection = document.querySelector(".container2");

    arrowDown.addEventListener("click", () => {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"      
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`; // Retraso progresivo
    });
});
const items = document.querySelectorAll('.project-item');
const radius = 150; // Distancia en 3D entre los elementos
const angleStep = 360 / items.length; // Ángulo entre cada elemento

// Posicionar los elementos en un círculo
items.forEach((item, index) => {
    const angle = angleStep * index;
    item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
});

// Detectar el elemento al que pasas el mouse
items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        items.forEach((otherItem, otherIndex) => {
            const newAngle = angleStep * (otherIndex - index); // Recalcula las posiciones
            otherItem.style.transform = `rotateY(${newAngle}deg) translateZ(${radius}px)`;
        });
    });
});
