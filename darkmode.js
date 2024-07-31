'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const btnDark = document.querySelector('.slider');
  
    btnDark.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
  
      document.querySelectorAll('aside, .logo, a, .search, .dateTLZ, .transactionsColumn, .salesHistory, .copyright').forEach(element => {
          element.classList.toggle('dark-mode');
      });
    });
  });