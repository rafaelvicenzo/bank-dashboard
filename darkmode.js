'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btnDark = document.querySelector('.slider');

  btnDark.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

      document.querySelectorAll('aside, .logo, a, .search, .dateTLZ, .transactionsColumn, .salesHistory, .copyright, .notificationImage').forEach(element => {
          element.classList.toggle('dark-mode');
      });

      const notificationIcon = document.querySelector('.notificationImage img');
      
      if (document.body.classList.contains('dark-mode')) {
          notificationIcon.src = 'assets/img/icons/iconsDarkMode/bellDark.png'; 
          notificationIcon.style = 'position: relative; left: 2px;'
      } else {
          notificationIcon.src = 'assets/img/icons/bell.png'; 
      }
  });
});