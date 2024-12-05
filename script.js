const contentStep = document.querySelector(".content__step"); // Selecciona el contenedor

// Botones de navegación
const btnLeft = document.querySelector(".button--left");
const btnRight = document.querySelector(".button--right");

// Control de desplazamiento
btnLeft.addEventListener("click", () => {
  contentStep.scrollBy({ left: -200, behavior: "smooth" }); // Mueve hacia la izquierda
});

btnRight.addEventListener("click", () => {
  contentStep.scrollBy({ left: 200, behavior: "smooth" }); // Mueve hacia la derecha
});


// movimiento de los proyectos

// Selección de elementos
const container = document.querySelector('.conteiner__card');
const buttonLeft = document.getElementById('buttonLeft');
const buttonRight = document.getElementById('buttonRight');

// Configuración de desplazamiento
const scrollAmount = 300; // Cantidad de píxeles a desplazar

// Función para desplazar hacia la izquierda
buttonLeft.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// Función para desplazar hacia la derecha
buttonRight.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});