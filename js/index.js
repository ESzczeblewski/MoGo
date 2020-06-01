const hamburger = document.querySelector('.navigation__hamburger');
const hamburgerBox = document.querySelector('.navigation__hamburger__box');
const navList = document.querySelector('.navigation__list');
const drkBackground = document.querySelector('.dark-background');
const mainImgsInfo = document.querySelectorAll('.main__imgs__pic__info');

const handleClick = () => {
  hamburgerBox.classList.toggle('open');
  navList.classList.toggle('show');
  drkBackground.classList.toggle('dark-background--off');
};

hamburger.addEventListener('click', handleClick);

document.querySelectorAll('.main__imgs__pic').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('main__imgs--focus');
    item.querySelectorAll('.main__imgs__pic__info').forEach(element => {
      element.classList.toggle('show');
    })
  })
})
