// Open filters list
const BUTTONS = [...document.querySelectorAll("button")];

BUTTONS.forEach((b) => {
  b.addEventListener("click", (e) => {
    const PARENT_ELEMENT =
      e.target.closest(".sort-container") ||
      e.target.closest(".more-filters-container") ||
      e.target.closest(".categories-container");

    if (PARENT_ELEMENT.querySelector("ul").style.display === "block") {
      PARENT_ELEMENT.querySelector("ul").style.display = "none";
      PARENT_ELEMENT.querySelector(".icon-tabler").style.transform =
        "scaleY(1)";
    } else {
      PARENT_ELEMENT.querySelector("ul").style.display = "block";
      PARENT_ELEMENT.querySelector(".icon-tabler").style.transform =
        "scaleY(-1)";
    }
  });
});
