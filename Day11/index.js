// Open the themes options
const PREMIUM_THEMES = document.querySelector('.current-theme');
const CURRENT_THEME_CHEVRON_DOWN = PREMIUM_THEMES.querySelector('.icon-tabler-chevron-down');
const THEME_OPTIONS_CONTAINER = document.querySelector('.theme-options');

PREMIUM_THEMES.addEventListener('click', () => {
  CURRENT_THEME_CHEVRON_DOWN.style.transition = "0.5s";

  if (THEME_OPTIONS_CONTAINER.style.display === "block") {
    CURRENT_THEME_CHEVRON_DOWN.style.transform = "scaleY(1)";
    THEME_OPTIONS_CONTAINER.style.display = "none";
  } else {
    CURRENT_THEME_CHEVRON_DOWN.style.transform = "scaleY(-1)";
    THEME_OPTIONS_CONTAINER.style.display = "block";
  }
});

// Select a theme
const THEME_OPTIONS = [...THEME_OPTIONS_CONTAINER.querySelectorAll('li')];
let currentTheme = "Cyberpunk Theme";

THEME_OPTIONS.forEach(theme => {
  theme.addEventListener("click", () => {
    CURRENT_THEME_CHEVRON_DOWN.style.transform = "scaleY(1)";
    THEME_OPTIONS_CONTAINER.style.display = "none";
    currentTheme = theme.textContent;
  })
});

// Open the promote section / Click create
const FORM = document.querySelector('form');
const PROMOTE_SECTION = document.querySelector('.promote');
const CREATE_A_LINK_CONTAINER = document.querySelector('.create-link-container');
const INPUT_URL = document.querySelector('input');
const SELECTED_THEME = document.querySelector('.selected-theme');

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (INPUT_URL.value !== "") {
    CREATE_A_LINK_CONTAINER.style.display = "none";
    PROMOTE_SECTION.style.display = "block";
    SELECTED_THEME.textContent = currentTheme;
  }
});

// Select protocol
const PROTOCOL = document.querySelector('.selected-protocol');
const PROTOCOL_CHEVRON_DOWN = PROTOCOL.querySelector('.icon-tabler-chevron-down');
const PROTOCOL_OPTIONS_CONTAINER = document.querySelector('.protocol-options');
let currentProtocol = "https://";

PROTOCOL.addEventListener("click", () => {
  PROTOCOL_CHEVRON_DOWN.style.transition = "0.5s";

  if (PROTOCOL_OPTIONS_CONTAINER.style.display === "block") {
    PROTOCOL_CHEVRON_DOWN.style.transform = "scaleY(1)";
    PROTOCOL_OPTIONS_CONTAINER.style.display = "none";
  } else {
    PROTOCOL_CHEVRON_DOWN.style.transform = "scaleY(-1)";
    PROTOCOL_OPTIONS_CONTAINER.style.display = "block";
  }
});

// Select a protocol 
const PROTOCOLS = PROTOCOL_OPTIONS_CONTAINER.querySelectorAll('li');

PROTOCOLS.forEach(p => {
  p.addEventListener("click", () => {
    PROTOCOL_OPTIONS_CONTAINER.style.display = "none";
    currentProtocol = p.textContent;
    PROTOCOL.textContent = currentProtocol;
  })
});