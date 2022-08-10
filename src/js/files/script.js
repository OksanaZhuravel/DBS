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
