// Add new board
const ADD_BOARD = document.querySelector(".add-board");
const PAGE_STATUS = document.querySelector(".page-status");
const INSTRUCTIONS = document.querySelector(".instructions");
const DIALOG = document.querySelector("dialog");
const SAVE_BUTTON = document.getElementById("save");
const INCREMENT_BUTTON = document.querySelector(".increment");
const DECREMENT_BUTTON = document.querySelector(".decrement");
const TASKS = document.getElementById("tasks");
const BOARD_TITLE = document.getElementById("board-title");
const BOARDS_SECTION = document.querySelector(".boards");
const TOTAL_BOARDS = document.querySelector(".total-boards");
const TOTAL_TASKS = document.querySelector(".total-tasks");

ADD_BOARD.addEventListener("click", () => {
  DIALOG.showModal();
});

DIALOG.addEventListener("close", () => {
  if (DIALOG.returnValue === "cancel") {
    return;
  } else {
    PAGE_STATUS.style.display = "none";
    INSTRUCTIONS.style.display = "none";
    const TITLE = BOARD_TITLE.value !== "" ? BOARD_TITLE.value : "No Title";
    const NEW_BOARD = document.createElement("div");
    NEW_BOARD.classList.add('board');
    NEW_BOARD.innerHTML = `<h2>${TITLE}</h2>
      <h3>Tasks: <span>${TASKS.value}</span></h3>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checklist" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" /><path d="M14 19l2 2l4 -4" /><path d="M9 8h4" /><path d="M9 12h2" /></svg>
    `;

    BOARDS_SECTION.appendChild(NEW_BOARD);

    // Sum the tasks number
    const NUM_OF_TASKS = [...document.querySelectorAll("h3 span")].map(sp => parseInt(sp.textContent)).reduce((prev, num) => num + prev, 0 );
    TOTAL_TASKS.textContent = NUM_OF_TASKS;

    // Sum the boards number
    TOTAL_BOARDS.textContent = [...document.querySelectorAll('.board')].length;
  }
});

SAVE_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  DIALOG.close(`${BOARD_TITLE.value} ${TASKS.value}`);
});

// Increment tasks
INCREMENT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  if (TASKS.value === "5") {
    return;
  } else {
    TASKS.value = parseInt(TASKS.value) + 1;
  }
});

// Decrement tasks
DECREMENT_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  if (TASKS.value === "1") {
    return;
  } else {
    TASKS.value = parseInt(TASKS.value) - 1;
  }
});
