const BUTTON_CONTAINER = document.querySelector('.container');
const COLORED_CIRCLE = document.querySelector('.colored-circle');

BUTTON_CONTAINER.addEventListener("click", () => {
  document.body.classList.toggle('colored-bg');
  COLORED_CIRCLE.classList.toggle('active');
})