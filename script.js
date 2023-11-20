'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
console.log(document.documentElement);
// console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and anlytics.<button class="btn btn--close-cookie">Got it</button>';
header.append(message);
// header.append(message.cloneNode(true))
// header.after(message)

//deleting in DOM
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.backgroundColor);
// console.log(message.style.height)
// console.log(getComputedStyle(message).backgroundRepeat)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
logo.setAttribute('master', 'aarushi');

// const link=logo(logo.getAttribute('link'));
// console.log(link);
// const logoo= document.querySelector('.footer__logo');
// console.log(logoo.src)
// console.log(logoo.getAttribute('src'))

//console.log(logo.dataset.versionNumber);

// logo.classList.add('f');
// logo.classList.remove('g');
// logo.classList.toggle('p');
// logo.classList.contains('q');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
