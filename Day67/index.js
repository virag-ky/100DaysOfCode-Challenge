const COLOR_COLLECTIONS = [
  {
    name: "Pastel",
    color_1: "#B5C0D0",
    color_2: "#CCD3CA",
    color_3: "#F5E8DD",
    color_4: "#EED3D9",
  },
  {
    name: "Neon",
    color_1: "#3330E4",
    color_2: "#F637EC",
    color_3: "#FBB454",
    color_4: "#FAEA48",
  },
  {
    name: "Gold",
    color_1: "#FFF7D4",
    color_2: "#FFD95A",
    color_3: "#C07F00",
    color_4: "#4C3D3D",
  },
  {
    name: "Cold",
    color_1: "#EEF5FF",
    color_2: "#B4D4FF",
    color_3: "#86B6F6",
    color_4: "#176B87",
  },
  {
    name: "Warm",
    color_1: "#FDA403",
    color_2: "#E8751A",
    color_3: "#898121",
    color_4: "#E5C287",
  },
  {
    name: "Nature",
    color_1: "#12372A",
    color_2: "#436850",
    color_3: "#ADBC9F",
    color_4: "#FBFADA",
  },
  {
    name: "Coffee",
    color_1: "#876445",
    color_2: "#CA965C",
    color_3: "#EEC373",
    color_4: "#F4DFBA",
  },
  {
    name: "Retro",
    color_1: "#0C2D57",
    color_2: "#FC6736",
    color_3: "#FFB0B0",
    color_4: "#EFECEC",
  },
  {
    name: "Spring",
    color_1: "#F2FFE9",
    color_2: "#A6CF98",
    color_3: "#557C55",
    color_4: "#FA7070",
  },
];

const COLOR_TYPE = document.querySelector("h2");
const GENERATE_COLOR_BTN = document.querySelector("button");
const COLORS = [...document.querySelectorAll(".color-bg")];
const COLOR_CODES = [...document.querySelectorAll(".hex-code")];

GENERATE_COLOR_BTN.addEventListener("click", () => generateColors());

function generateColors () {
  const RANDOM_NUMBER = Math.round(Math.random() * 8);

  COLOR_TYPE.textContent = `${COLOR_COLLECTIONS[RANDOM_NUMBER].name} colors`;
  for (let i = 0; i < COLORS.length; i += 1) {
    COLORS[i].style.background = COLOR_COLLECTIONS[RANDOM_NUMBER][`color_${i + 1}`];
    COLOR_CODES[i].textContent = COLOR_COLLECTIONS[RANDOM_NUMBER][`color_${i + 1}`];
  }
}

// On page load generate initial colors
generateColors();
