const SECTIONS = [...document.querySelectorAll('section')];
const TABS = [...document.querySelectorAll('li button')];

TABS.forEach(tab => {
  tab.addEventListener('click', (e) => {
    SECTIONS.forEach(section => section.style.display = 'none');

    TABS.forEach(t => {
      t.classList.remove('active');
    });

    e.target.classList.add('active');

    switch(e.target.textContent) {
      case 'Details':
        SECTIONS[0].style.display = 'block';
        break;
      case 'Tutorials':
        SECTIONS[1].style.display = 'block';
        break;
      case 'Code snippets':
        SECTIONS[2].style.display = 'block';
        break;
      default:
        SECTIONS[0].style.display = 'block';
    }
  })
})