const DAYS_BLOCK = document.querySelector('.days');
const HOURS_BLOCK = document.querySelector('.hours');
const MINUTES_BLOCK = document.querySelector('.minutes');
const SECONDS_BLOCK = document.querySelector('.seconds');

// Get final time
const FINAL_TIME = new Date("Jan 1, 2077 00:00:01").getTime();

const COUNTDOWN = setInterval(() => {

// Get current time
const CURRENT_TIME = new Date().getTime();

// Get difference from final and current time
const DIFFERENCE_TIME = FINAL_TIME - CURRENT_TIME;

// Get days
const DAYS = Math.floor(DIFFERENCE_TIME / (1000 * 60 * 60 * 24));

// Get hours
const HOURS = Math.floor(DIFFERENCE_TIME % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

// Get minutes
const MINUTES = Math.floor(DIFFERENCE_TIME % (1000 * 60 * 60) / (1000 * 60));

// Get seconds
const SECONDS = Math.floor(DIFFERENCE_TIME % (1000 * 60) / 1000);

DAYS_BLOCK.innerHTML = DAYS;
HOURS_BLOCK.innerHTML = HOURS;
MINUTES_BLOCK.innerHTML = MINUTES;
SECONDS_BLOCK.innerHTML = SECONDS;

if (DIFFERENCE_TIME < 0) {
  clearInterval(COUNTDOWN);
}

}, 1000);