// Open account menu
const ACCOUNT_BTN = document.querySelector(".account");
const SECTIONS = [...document.querySelectorAll("section")];
const CHEVRON_DOWN = document.querySelector(".icon-tabler-chevron-down");
const ACCOUNT_SECTION = SECTIONS[2];

ACCOUNT_BTN.addEventListener("click", () => {
  if (ACCOUNT_SECTION.classList.contains("active")) {
    ACCOUNT_SECTION.classList.remove("active");
    CHEVRON_DOWN.style.transform = "scaleY(1)";
  } else {
    SECTIONS.forEach((s) => {
      s.classList.remove("active");
    });
    ACCOUNT_SECTION.classList.add("active");
    CHEVRON_DOWN.style.transform = "scaleY(-1)";
  }
});

// Open notifications
const NOTIFICATION_ICON = document.querySelector(".icon-tabler-bell");
const NOTIFICATION_DOT = document.querySelector(".dot");
const NOTIFICATIONS = SECTIONS[1];

NOTIFICATION_ICON.addEventListener("click", () => {
  if (NOTIFICATIONS.classList.contains("active")) {
    NOTIFICATIONS.classList.remove("active");
  } else {
    SECTIONS.forEach((section) => {
      section.classList.remove("active");
    });

    NOTIFICATIONS.classList.add("active");
    CHEVRON_DOWN.style.transform = "scaleY(1)";
  }
});

// Open messages
const MESSAGE_ICON = document.querySelector(".icon-tabler-mail");
const MESSAGES = SECTIONS[0];

MESSAGE_ICON.addEventListener("click", () => {
  if (MESSAGES.classList.contains("active")) {
    MESSAGES.classList.remove("active");
  } else {
    SECTIONS.forEach((s) => {
      s.classList.remove("active");
    });

    MESSAGES.classList.add("active");
    CHEVRON_DOWN.style.transform = "scaleY(1)";
  }
});

// Clear all notifications
const CLEAR_ALL_BTN = document.querySelector(".clear-all-notifications");
const NOTIFICATIONS_LIST = document.querySelector(".notifications-list");
const NOTIFICATION_MESSAGE = NOTIFICATIONS.querySelector("p");

CLEAR_ALL_BTN.addEventListener("click", (e) => {
  NOTIFICATIONS_LIST.style.display = "none";
  NOTIFICATION_MESSAGE.textContent = "No new notifications";
  NOTIFICATION_DOT.style.display = "none";
  e.target.style.display = "none";
});

document.body.addEventListener("click", (e) => {
  if (!e.target.closest('.icon-tabler-mail') && !e.target.closest('.icon-tabler-bell') && !e.target.closest('.account')) {
    SECTIONS.forEach((s) => {
      s.classList.remove("active");
      CHEVRON_DOWN.style.transform = "scaleY(1)";
    });
  }
});
