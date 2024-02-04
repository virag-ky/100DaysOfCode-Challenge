new Splide( '.splide' ).mount();

// Add contact buttons
const addContactBtns = [...document.querySelectorAll('.profile button')];

addContactBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {

    if (btn.textContent === 'Added') {
      btn.classList.remove('added');
      e.target.textContent = 'Add contact';
    } else {
      btn.classList.add('added');
      e.target.textContent = 'Added';
    }
  })
})