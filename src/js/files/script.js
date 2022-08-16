// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from './functions.js';
// Подключение списка активных модулей
// import { flsModules } from './modules.js';

document.querySelectorAll('.menu__link').forEach(function (activ) {
  activ.addEventListener('click', function (e) {
    if (!activ.classList.contains('_active')) {
      activ.classList.add('_active');
    }
  });
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie('cookiecook'),
  cookiewin = document.getElementsByClassName('cookie')[0];
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != 'no') {
  // показываем
  cookiewin.style.display = 'block';
  // закрываем по клику
  document
    .getElementById('cookie__close')
    .addEventListener('click', function () {
      cookiewin.style.display = 'none';
      // записываем cookie на 1 день, с которой мы не показываем окно
      let date = new Date();
      date.setDate(date.getDate() + 30);
      document.cookie = 'cookiecook=no; path=/; expires=' + date.toUTCString();
    });
}
console.log(cookiecook);
console.log(document.cookie);

let parent = document.querySelector('.benefits__box');
let menuItem = document.querySelectorAll('.benefits__subtitle');

document.addEventListener('click', (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;

  // Проверяем тот ли это элемент который нам нужен
  if (target.classList.contains('benefits__subtitle')) {
    for (let i = 0; i < menuItem.length; i++) {
      // Убираем у других
      menuItem[i].classList.remove('_focus');
    }
    // Добавляем тому на который нажали
    target.classList.add('_focus');
  }
});
