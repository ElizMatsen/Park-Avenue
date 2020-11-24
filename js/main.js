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
//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;
//ноль можно считать положительным числом.# # #
// 4. Присвоить переменной а значение в промежутке[0. .15].С помощью оператора
//switch организовать вывод чисел от a до 15. # # # 
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор
//return.# # # 
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2– значения аргументов, operation– строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать
//switch).# # # 
//7) * Сравнить null и 0. Попробуйте объяснить результат.# # # 8) * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val– заданное число, pow– степень.


 