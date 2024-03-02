// Open dialog/popup
const GET_THE_APP_BTN = document.querySelector("button");
const POPUP = document.querySelector("dialog");

GET_THE_APP_BTN.addEventListener("click", () => {
  POPUP.showModal();
});

// Close the dialog/popup
const CLOSE_BTN = document.querySelector('.icon-tabler-x');

CLOSE_BTN.addEventListener("click", () => {
  POPUP.close();
})