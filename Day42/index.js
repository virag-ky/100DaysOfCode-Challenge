// Select an emoji
const EMOJIES = [...document.querySelectorAll('img')];

EMOJIES.forEach(em => {
  em.addEventListener("click", (e) => {
    EMOJIES.forEach(emo => emo.parentElement.classList.remove('selected'));

    e.target.parentElement.classList.add('selected');
  });
});