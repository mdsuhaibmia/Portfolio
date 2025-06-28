function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.querySelector('.hero').classList.add('inactive');
    document.querySelector('.hero').classList.remove('active');

    if (id === 'home') {
      document.querySelector('.hero').classList.add('active');
      document.querySelector('.hero').classList.remove('inactive');
    } else {
      document.getElementById(id).classList.add('active');
    }
  }