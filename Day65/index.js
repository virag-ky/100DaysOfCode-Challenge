// Close popup
const EXIT_BUTTON = document.querySelector('.icon-tabler-x');
const OKAY_BUTTON = document.querySelector('.okay');
const COOKIE_POPUP = document.querySelector('.cookie-popup');

function closePopup () {
  COOKIE_POPUP.style.display = "none";
};

EXIT_BUTTON.addEventListener("click", () => closePopup());
OKAY_BUTTON.addEventListener("click", () => closePopup());