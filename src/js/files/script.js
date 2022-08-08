// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.querySelectorAll('.menu__link').forEach(function (activ) {
  activ.addEventListener('click', function (e) {
    if (!activ.classList.contains('_active')) {
      activ.classList.add('_active');
    }
  });
});
