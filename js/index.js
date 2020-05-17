const hamburger = document.querySelector('.navigation__hamburger');

const handleClick = () => {
  hamburger.classList.toggle('open')
};

hamburger.addEventListener('click', handleClick);