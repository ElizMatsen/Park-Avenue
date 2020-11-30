window.onload = function () {
   const headerBurger = document.querySelector('.header__burger')
   const headerMenu = document.querySelector('.header__menu')
   headerBurger.onclick = () => {
      headerMenu.classList.toggle('menu-active');
      headerBurger.classList.toggle('burger-active');
   }
}
var swiper = new Swiper('.swiper-container', {

   navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
   },
   loop: true,
   slidesPerView: 1,
   spaceBetween: 10,
   // init: false,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      '@0.00': {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      '@0.75': {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      '@1.00': {
         slidesPerView: 3,
         spaceBetween: 40,
      },
      '@1.50': {
         slidesPerView: 4,
         spaceBetween: 50,
      },
   }

});
