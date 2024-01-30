const bell = document.querySelector('.icon-tabler-bell');
const notificationContainer = document.querySelector('.notification');

// Toggle notification container
bell.addEventListener('click', () => {

  if (notificationContainer.style.transform === 'scale(0)') {
    notificationContainer.style.transform = 'scale(1)';
  } else {
    notificationContainer.style.transform = 'scale(0)';
  }
});