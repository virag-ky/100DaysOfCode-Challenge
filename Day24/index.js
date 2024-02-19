// Get current time and date
const DISPLAYED_TIME = document.querySelector(".display time");
const MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const CURRENT_DATE = document.querySelector(".date");

setInterval(() => {
  const CURRENT_HOUR = new Date().toLocaleTimeString().split(":")[0];
  const CURRENT_MINUTES = new Date().toLocaleTimeString().split(":")[1];
  const DAY = new Date().toLocaleDateString().split("/")[0];
  const MONTH = parseInt(new Date().toLocaleDateString().split("/")[1]);
  DISPLAYED_TIME.textContent = `${CURRENT_HOUR}:${CURRENT_MINUTES} ${
    CURRENT_HOUR >= 12 ? "PM" : "AM"
  }`;
  CURRENT_DATE.textContent = `${DAY} ${MONTHS[MONTH - 1]}`;
}, 1000);

// Toggle alarm
const SAVED_ALARMS = [...document.querySelectorAll(".saved-alarm")];

SAVED_ALARMS.forEach((alarm, index) => {
  alarm.querySelector(".toggle-button").addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    SAVED_ALARMS[index]
      .querySelector(".saved-alarm-time time")
      .classList.toggle("active-alarm");
    SAVED_ALARMS[index].querySelectorAll(".week .day").forEach((day) => {
     
      if (day.classList.contains('active-alarm') && SAVED_ALARMS[index]
      .querySelector(".saved-alarm-time time")
      .classList.contains("active-alarm")) {
        day.style.color = '#fff';
      } else if (day.classList.contains('active-alarm') && !SAVED_ALARMS[index]
      .querySelector(".saved-alarm-time time")
      .classList.contains("active-alarm")) {
        day.style.color = '#ffffff33';
      } else if (!SAVED_ALARMS[index]
        .querySelector(".saved-alarm-time time")
        .classList.contains("active-alarm") && !day.classList.contains('active-alarm')) {
         day.style.color = '#ffffff0a'
      }
      
      day.addEventListener("click", (e) => {
        if (
          SAVED_ALARMS[index]
            .querySelector(".saved-alarm-time time")
            .classList.contains("active-alarm") && !day.classList.contains('active-alarm')
        ) {
          day.classList.toggle('active-alarm');
          day.style.color = '#fff';
        } else if (
          SAVED_ALARMS[index]
            .querySelector(".saved-alarm-time time")
            .classList.contains("active-alarm") && day.classList.contains('active-alarm')
        ) {
          day.classList.toggle('active-alarm');
          day.style.color = '#ffffff33';
        } 
      });
    });
  });
});
