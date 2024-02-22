const ADD_HOURS_BUTTON = document.querySelector(".add-hours");
const DIALOG = document.querySelector("dialog");
const SAVE_BUTTON = document.getElementById("save");
const SELECT = document.querySelector("select");
const HOURS = document.getElementById("hours");
const STATUS_SECTION = document.querySelector(".status");
const MAIN = document.querySelector("main");
const INCREMENT_BUTTON = document.querySelector(".increment");
const DECREMENT_BUTTON = document.querySelector(".decrement");

// Open modal
ADD_HOURS_BUTTON.addEventListener("click", () => {
  DIALOG.showModal();
});

// Set the values on close
DIALOG.addEventListener("close", () => {
  if (DIALOG.returnValue === "cancel") {
    return;
  } else {
    STATUS_SECTION.style.display = "none";
    SAVE_BUTTON.value = `${SELECT.value} hours: ${HOURS.value}`;
    const LOGGED_HOURS = document.createElement("p");
    LOGGED_HOURS.textContent = SAVE_BUTTON.value;
    LOGGED_HOURS.classList.add('logged-hours');

    MAIN.appendChild(LOGGED_HOURS);
  }
});

// Save hours + close modal
SAVE_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  DIALOG.close(`${SELECT.value} hours: ${HOURS.value}`);
});

// Increment hours
INCREMENT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  HOURS.value = parseInt(HOURS.value) + 1;
});

// Decrement hours
DECREMENT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  if (HOURS.value === "1") {
    return;
  } else {
    HOURS.value = parseInt(HOURS.value) - 1;
  }
});

// Set back page
const SET_BACK_ARROW = document.querySelector('.icon-tabler-arrow-back-up');

SET_BACK_ARROW.addEventListener("click", () => {
  [...document.querySelectorAll('.logged-hours')].forEach(hour => hour.remove());

  STATUS_SECTION.style.display = "block";
})