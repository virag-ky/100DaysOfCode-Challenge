// Select interests
const TOPICS = [...document.querySelectorAll('.topic')];
const TOPIC_IMAGES = [...document.querySelectorAll('.topic .image-container')];

TOPIC_IMAGES.forEach((img, index) => {
  img.addEventListener("click", () => {
    TOPICS[index].classList.toggle('selected')
  });
});

// Select nav item
const NAV_ITEMS = [...document.querySelectorAll('li')];

NAV_ITEMS.forEach(li => {
  li.addEventListener("click", (e) => {
    NAV_ITEMS.forEach(i => {
      i.classList.remove('active');
    });

    li.classList.add('active')
  });
});