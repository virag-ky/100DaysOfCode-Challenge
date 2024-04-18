const SHOW_MORE_LINK = document.querySelector('a');
const HIDDEN_LIST_ITEMS = [...document.querySelectorAll('.hidden')];

SHOW_MORE_LINK.addEventListener("click", (e) => {
  if (e.target.textContent === "Show more") {
    e.target.textContent = "Show less";
    HIDDEN_LIST_ITEMS.forEach(item => {
      item.style.display = "flex";
    })
  } else {
    e.target.textContent = "Show more";
    HIDDEN_LIST_ITEMS.forEach(item => {
      item.style.display = "none";
    })
  }
})