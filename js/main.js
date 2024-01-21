//Mobile nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');


mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mob-nav__wrap--open')
}

const ContactLinks = document.querySelector('#ContactLinks');

ContactLinks.onclick = function () {
  mobileNav.classList.remove('mob-nav__wrap--open')
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mob-nav__wrap--open')
}

//Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});