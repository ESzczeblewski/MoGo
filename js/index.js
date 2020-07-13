
const mainImgsInfo = document.querySelectorAll('.main__imgs__pic__info');
const weDoElement = document.querySelector('.we-do__info__block');
const weDoArrow = document.querySelector('.we-do__info__block__arrow');
const weDoDes = document.querySelector('.we-do__info__block__des');


document.querySelectorAll('.main__imgs__pic').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('main__imgs--focus');
    item.querySelectorAll('.main__imgs__pic__info').forEach(element => {
      element.classList.toggle('show');
    })
  })
})

document.querySelectorAll('.team__member__img').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('team__member__img--focus');
    item.querySelectorAll('.team__member__img__social').forEach(element => {
      element.classList.toggle('show-social');
    })
  })
})

const open = () => {
  weDoArrow.classList.toggle('js-open__turn');
  weDoDes.classList.toggle('js-open__des');
  weDoElement.classList.toggle('js-open');
}

weDoArrow.addEventListener('click', open);