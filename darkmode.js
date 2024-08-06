'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const btnDark = document.querySelector('.slider');

  btnDark.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

      document.querySelectorAll('aside, .logo, a, .search, .dateTLZ, .transactionsColumn, .salesHistory, .copyright, .notificationImage, .transactions button')
      .forEach(element => {
          element.classList.toggle('dark-mode');
      });

      const notificationIcon = document.querySelector('.notificationImage img');
      const dashboardIcon = document.querySelector('.dashboard img');
      const analyticsIcon = document.querySelector('.analytics img');
      const salesIcon = document.querySelector('.salesIcon img');
      const productIcon = document.querySelector('.product img');
      const customersIcon = document.querySelector('.customer img');
      const payoutIcon = document.querySelector('.payout img');
      const profileIcon = document.querySelector('.profile img');
      const mailIcon = document.querySelector('.inbox img');
      const settingsIcon = document.querySelector('.settings img');
      
      if (document.body.classList.contains('dark-mode')) {
          notificationIcon.src = 'assets/img/icons/iconsDarkMode/bellDark.png'; 
          notificationIcon.style = 'position: relative; left: 2px;';
          dashboardIcon.src = 'assets/img/icons/iconsDarkMode/dashboardDark.png';
          analyticsIcon.src = 'assets/img/icons/iconsDarkMode/analyticsDark.png';
          salesIcon.src = 'assets/img/icons/iconsDarkMode/increaseDark.png'
          productIcon.src = 'assets/img/icons/iconsDarkMode/bagDark.png'
          customersIcon.src = 'assets/img/icons/iconsDarkMode/customerDark.png';
          payoutIcon.src = 'assets/img/icons/iconsDarkMode/walletDark.png';
          profileIcon.src = 'assets/img/icons/iconsDarkMode/userDark.png';
          mailIcon.src = 'assets/img/icons/iconsDarkMode/mailDark.png';
          settingsIcon.src = 'assets/img/icons/iconsDarkMode/settingsDark.png';

      } else {
          notificationIcon.src = 'assets/img/icons/bell.png';
          dashboardIcon.src = 'assets/img/icons/dashboard.png';
          analyticsIcon.src = 'assets/img/icons/analytics.png';
          salesIcon.src = 'assets/img/icons/increase.png'; 
          productIcon.src = 'assets/img/icons/bag.png';
          customersIcon.src = 'assets/img/icons/customer.png';
          payoutIcon.src = 'assets/img/icons/wallet.png';
          profileIcon.src = 'assets/img/icons/user.png';
          mailIcon.src = 'assets/img/icons/mail.png';
          settingsIcon.src = 'assets/img/icons/settings (1).png';
      }
  });
});