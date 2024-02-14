// Active nav list item
const NAV_LIST_ITEMS = [...document.querySelectorAll('li')];

NAV_LIST_ITEMS.forEach(item => {
  item.addEventListener("click", (e) => {
    NAV_LIST_ITEMS.forEach(i => {
      i.classList.remove('active');
    });

    e.target.classList.add('active');
  })
});

// Search
const USERS = [...document.querySelectorAll('.user')];
const USERS_CONTAINER = document.querySelector('.grid-container');
const SEARCH_INPUT = document.querySelector('input');
const SEARCH_ICON = document.querySelector('.icon-tabler-search');

function searchUsers () {
  USERS.forEach(user => {
    user.style.display = "none";
  });

  USERS.filter(u => u.querySelector('h2').textContent.toLowerCase().includes(SEARCH_INPUT.value.toLowerCase())).forEach(res => res.style.display = "flex");
};

SEARCH_INPUT.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    if (e.target.value.length === 1) {
      USERS.forEach(us => us.style.display = "flex")
    }
  }

  if (e.key === 'Enter') {
    searchUsers();
  }
});

SEARCH_ICON.addEventListener("click", () => {
  SEARCH_INPUT.value !== "" ? searchUsers() : ""
})