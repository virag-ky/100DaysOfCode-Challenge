// Open mobile menu
const MOBILE_MENU_ICON = document.querySelector('.icon-tabler-menu-2');
const MOBILE_MENU_LIST = document.querySelector('.mobile-menu');

MOBILE_MENU_ICON.addEventListener("click", () => {
  MOBILE_MENU_LIST.classList.toggle('open');
});

// Hide mobile menu when resizing the window
window.addEventListener("resize", () => {
  if (window.innerWidth > 400) {
    MOBILE_MENU_LIST.classList.remove('open')
  }
})