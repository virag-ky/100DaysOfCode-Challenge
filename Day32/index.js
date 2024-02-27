// Close the notifications
const CLOSE_ICONS = [...document.querySelectorAll('.icon-tabler-x')];

CLOSE_ICONS.forEach(x => {
  x.addEventListener("click", (e) => {

    const PARENT_ELEMENT = e.target.closest('.top-notification') || e.target.closest('.bottom-notification')
    PARENT_ELEMENT.style.display = "none";
  })
});