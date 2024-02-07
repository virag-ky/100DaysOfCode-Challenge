// Open menu
const MENU_BTN = document.querySelector(".icon-tabler-dots");
const MENU_LIST = document.querySelector(".menu-list");

MENU_BTN.addEventListener("click", () => {
  if (MENU_LIST.style.display === "none") {
    MENU_LIST.style.display = "block";
  } else {
    MENU_LIST.style.display = "none";
  }
});

// Select menu list item
const MENU_LIST_ITEMS = MENU_LIST.querySelectorAll("li");

MENU_LIST_ITEMS.forEach((item) => {
  item.addEventListener("click", () => {
    MENU_LIST.style.display = "none";
  });
});

// Select radio buttons
const RADIO_BTNS = document.querySelectorAll(".radio-btn");

RADIO_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    RADIO_BTNS.forEach((b) => {
      b.querySelector(".btn").classList.remove("selected");
    });

    btn.querySelector(".btn").classList.add("selected");
  });
});

// Select checkbox
const CHECKBOXES = document.querySelectorAll(".checkbox");

CHECKBOXES.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.querySelector(".check").classList.contains("checked")) {
      box.querySelector(".check").classList.remove("checked");
    } else {
      box.querySelector(".check").classList.add("checked");
    }
  });
});
