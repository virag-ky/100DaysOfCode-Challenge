// Click circles
const circles = [...document.querySelectorAll('.circle')];

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => {
      c.classList.remove('selected')
    });

    circle.classList.add('selected')
  })
});

// Click the checkbox
const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('click', () => {
  if (checkbox.classList.contains('checked')) {
    checkbox.innerHTML = '';
    checkbox.classList.remove('checked');
  } else {
  checkbox.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
  `;

  checkbox.classList.add('checked');
  }
});