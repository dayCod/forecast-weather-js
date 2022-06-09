const body = document.body;
const btnTheme = document.querySelector('.nav-img');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem('body-theme');
const getBtnTheme = localStorage.getItem('btn-theme');

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('body-theme'));
  btnTheme.classList.remove(localStorage.getItem('btn-theme'));

  addThemeClass(bodyClass, btnClass);
  localStorage.setItem('body-theme', bodyClass);
  localStorage.setItem('btn-theme', btnClass);
};

btnTheme.addEventListener('click', () => {
  isDark() ? setTheme('light', btnTheme.src) : setTheme('dark', (btnTheme.src = 'assets/img/profile.png'));
});
