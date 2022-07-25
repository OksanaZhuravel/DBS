/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.swiper')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.swiper', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      spaceBetween: 25,
      speed: 800,
      slidesPerView: 'auto',
      loopedSlides: 0,
      centeredSlides: true,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.purchasing__button--prev',
        nextEl: '.purchasing__button--next',
      },

      // Брейкпоинты

      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 24,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     slidesPerView: 3.2,
      //     spaceBetween: 20,
      //   },
      //   1268: {
      //     slidesPerView: 'auto',
      //     spaceBetween: 20,
      //   },
      // },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
//   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
//   if (sliderScrollItems.length > 0) {
//     for (let index = 0; index < sliderScrollItems.length; index++) {
//       const sliderScrollItem = sliderScrollItems[index];
//       const sliderScrollBar =
//         sliderScrollItem.querySelector('.swiper-scrollbar');
//       const sliderScroll = new Swiper(sliderScrollItem, {
//         observer: true,
//         observeParents: true,
//         direction: 'vertical',
//         slidesPerView: 'auto',
//         freeMode: {
//           enabled: true,
//         },
//         scrollbar: {
//           el: sliderScrollBar,
//           draggable: true,
//           snapOnRelease: false,
//         },
//         mousewheel: {
//           releaseOnEdges: true,
//         },
//       });
//       sliderScroll.scrollbar.updateSize();
//     }
//   }
// }

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
