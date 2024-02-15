const IMAGE_SOURCES = [
  {
    source: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D",
    alternative_text: "green woman's handbag",
    liked: false,
    id: 1,
  },
  {
    source: "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    alternative_text: "green backpack",
    liked: false,
    id: 2,
  },
  {
    source: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhZ3N8ZW58MHx8MHx8fDA%3D",
    alternative_text: "beige woman's handbag",
    liked: false,
    id: 3,
  },
  {
    source: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2twYWNrfGVufDB8fDB8fHww",
    alternative_text: "reddish leather backpack",
    liked: false,
    id: 4,
  },
];

// Set nav list items active
const NAV_LIST_ITEMS = [...document.querySelectorAll('.nav-list li')];

NAV_LIST_ITEMS.forEach(item => {
  item.addEventListener("click", (e) => {
    NAV_LIST_ITEMS.forEach(i => {
      i.classList.remove('active');
    });

    e.target.classList.add('active');
  });
});

// Click the heart 
const HEART_ICON = document.querySelector('.icon-tabler-heart');
const IMAGE = document.querySelector('img');
const PAGINATION_PARTS = [...document.querySelectorAll('.pagination-part')];
let imgID = IMAGE.id;
let currentImg = 0;

HEART_ICON.addEventListener("click", () => {
  
  if (IMAGE_SOURCES[currentImg].liked === true){
    HEART_ICON.style.fill = "none";
    HEART_ICON.style.stroke = "#000";
    IMAGE_SOURCES[currentImg].liked = false;
  } else {
    HEART_ICON.style.fill = "#fb625b";
    HEART_ICON.style.stroke = "none";
    IMAGE_SOURCES[currentImg].liked = true;
  }
});

IMAGE.addEventListener("click", () => {
  PAGINATION_PARTS.forEach(part => {
    part.classList.remove('selected');
  });

  if (currentImg === 3) {
    currentImg = 0;
    IMAGE.src = IMAGE_SOURCES[currentImg].source;
    imgID = IMAGE_SOURCES[currentImg].id;
    PAGINATION_PARTS[currentImg].classList.add('selected');
  } else {
    IMAGE.src = IMAGE_SOURCES[currentImg + 1].source;
    imgID = IMAGE_SOURCES[currentImg + 1].id;
    PAGINATION_PARTS[currentImg + 1].classList.add('selected');
    currentImg += 1;
  }

  if (IMAGE_SOURCES[currentImg].liked === true) {
    HEART_ICON.style.fill = "#fb625b";
    HEART_ICON.style.stroke = "none";
  } else {
    HEART_ICON.style.fill = "none";
    HEART_ICON.style.stroke = "#000";
  }
  console.log(IMAGE_SOURCES[currentImg].liked)
});
