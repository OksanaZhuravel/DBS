// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.swiper')) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      observer: true,
      observeParents: true,
      spaceBetween: 25,
      speed: 800,
      // кол-во для показа
      slidesPerView: 'auto',
      // кол-во пролистываемых слайдов
      slidesPerGroup: 1,
      loopedSlides: 0,
      // активный слайд по центру
      centeredSlides: true,
      // watchOverflow: true,
      // бесконечный слайд
      loop: true,
      // Автопрокрутка
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      pagination: {
        el: '.purchasing__pagination',
        clickable: true,
        type: 'fraction',
        renderFraction: function (currentClass) {
          return '<span class="' + currentClass + '"></span>';
        },
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.purchasing__button--prev',
        nextEl: '.purchasing__button--next',
      },
    });
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
});
