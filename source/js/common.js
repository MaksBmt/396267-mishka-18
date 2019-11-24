var navTop = document.querySelector('.nav-menu');
var navTopToggle = document.querySelector('.nav-menu__button');

navTop.classList.remove('nav-menu--nojs');

navTopToggle.addEventListener('click', function () {
  if (navTop.classList.contains('nav-menu--closed')) {
    navTop.classList.remove('nav-menu--closed');
    navTop.classList.add('nav-menu--opened');
  } else {
    navTop.classList.add('nav-menu--closed');
    navTop.classList.remove('nav-menu--opened');
  }
});
