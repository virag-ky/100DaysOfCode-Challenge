// Select the paths/lines
const YELLOW_LINE = document.querySelector(".yellow-line");
const RED_LINE = document.querySelector(".red-line");
const GREEN_LINE = document.querySelector(".green-line");
const BLUE_LINE = document.querySelector(".blue-line");

// Select the elements
const MAIN_EL = document.querySelector(".main-element");
const YELLOW_EL = document.querySelector(".yellow");
const RED_EL = document.querySelector(".red");
const GREEN_EL = document.querySelector(".green");
const BLUE_EL = document.querySelector(".blue");

const SUB_ELEMENTS = [...document.querySelectorAll('.sub-element')];

// Draw lines
new LeaderLine(MAIN_EL, YELLOW_EL, {color: '#e1ab4e', size: 2, dash: true, endPlugColor: 'transparent'});
new LeaderLine(MAIN_EL, RED_EL, {color: '#c66a6e', size: 2, dash: true, endPlugColor: 'transparent'});
new LeaderLine(MAIN_EL, GREEN_EL, {color: '#49e2b1', size: 2, dash: true, endPlugColor: 'transparent'});
new LeaderLine(MAIN_EL, BLUE_EL, {color: '#609ee6', size: 2, dash: true, endPlugColor: 'transparent'});

SUB_ELEMENTS.forEach(el => {
  new LeaderLine(BLUE_EL, el, {color: '#6062e6b0', size: 1.5, dash: true, endPlugColor: 'transparent'})
})