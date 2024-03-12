// Select list items
const LIST_ITEMS = [...document.querySelectorAll('li')];

LIST_ITEMS.forEach(li => {
  li.addEventListener("click", () => {
    LIST_ITEMS.forEach(i => {
      i.classList.remove('active');
    });

    li.classList.add('active');
  });
});