// Search with keyword
const STATISTICS = [...document.querySelectorAll('.statistics')];
const INPUT_CONTAINER = document.querySelector('input');

function searchKeyword () {
  STATISTICS.forEach(s => {
    s.style.display = "none";
  });

  STATISTICS.filter(n => n.querySelector('h2').textContent.toLowerCase().includes(INPUT_CONTAINER.value.toLowerCase())).forEach(stat => stat.style.display = "flex");
}

INPUT_CONTAINER.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (e.target.value.length === 1) {
      STATISTICS.forEach(stat => {
        stat.style.display = "flex";
      });
    }
  };

  if (e.key === "Enter") {
    e.preventDefault();
    searchKeyword();
  }
});

// Click the search icon
const SEARCH_ICON = document.querySelector('.icon-tabler-search');

SEARCH_ICON.addEventListener("click", () => {
  INPUT_CONTAINER.value !== "" ? searchKeyword() : "";
});