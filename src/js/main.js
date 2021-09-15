/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
var number = document.querySelector('.about__number-1'),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 50);
  }
});
var number1 = document.querySelector('.about__number-2'),
  number1Top = number1.getBoundingClientRect().top,
  start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number1Top - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    var interval1 = setInterval(function () {
      number1.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval1);
      }
    }, 7);
  }
});
var number2 = document.querySelector('.about__number-3'),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML, end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number2Top - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    var interval2 = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval2);
      }
    }, 5);
  }
});



//burger


const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('burger--active');
    });



var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');
var demo3 = document.getElementById('demo3');

burgerBtn.addEventListener('click', function() {
  mobile.classList.toggle('navigation');
  document.body.classList.toggle('navigation');
}, false);

