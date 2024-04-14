const USERS_CHART = new Chart(document.querySelector('.users'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Users',
      data: [10, 5, 15, 2, 8],
      fill: true,
      borderColor: '#9c75ff',
      backgroundColor: '#f3f3ff'
    }]
  },
  options: {
    responsive: true
  }
});

const NEW_USERS_CHART = new Chart(document.querySelector('.new-users'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'New users',
      data: [0, 10, 3, 12, 6],
      fill: true,
      borderColor: '#9c75ff',
      backgroundColor: '#f3f3ff'
    }]
  },
  options: {
    responsive: true
  }
});
