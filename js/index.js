const hamburger = document.querySelector('.navigation__hamburger');
const hamburgerBox = document.querySelector('.navigation__hamburger__box');
const navList = document.querySelector('.navigation__list');
const drkBackground = document.querySelector('.dark-background');

const handleClick = () => {
  hamburgerBox.classList.toggle('open');
  navList.classList.toggle('show');
  drkBackground.classList.toggle('dark-background--off');
};

hamburger.addEventListener('click', handleClick);
