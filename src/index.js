import './sass/main.css';
import data from './menu.json';
import markup from './template/card.hbs';
const menuRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('.theme-switch__toggle');
menuRef.insertAdjacentHTML('afterbegin', markup(data));
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const theme = localStorage.getItem('theme') || LIGHT;
switchRef.checked = theme === DARK;
updateClass(theme);

switchRef.addEventListener('change', updatePage);
function updatePage(event) {
  let theme = LIGHT;
  if (event.target.checked) {
    theme = DARK;
  }
  updateDataLocalStorage(theme);
  updateClass(theme);
}
function updateDataLocalStorage(value) {
  localStorage.setItem('theme', value);
}
function updateClass(name) {
  document.body.classList = name;
}
