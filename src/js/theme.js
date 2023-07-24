import { getLocalStorage, setLocalStorage } from './localStorage';
import { DARK_THEME, LIGHT_THEME, THEME, toggleThemeBtn } from './refs';

export function setTheme(colorTheme) {
  const themeLabel = toggleThemeBtn.closest('label');
  const body = document.body;

  if (colorTheme === LIGHT_THEME) {
    themeLabel.classList.remove('active');
    body.classList.add('light-theme');
  }
  if (colorTheme === DARK_THEME) {
    themeLabel.classList.add('active');
    body.classList.add('dark-theme');
  }
}

export function toggleTheme(e) {
  const targetElement = e.target.closest('label');

  targetElement.classList.toggle('active');
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
  if (targetElement.classList.contains('active')) {
    setLocalStorage(THEME, DARK_THEME);
  } else {
    setLocalStorage(THEME, LIGHT_THEME);
  }
}

export function setThemeFirstRender() {
  const currentTheme = getLocalStorage(THEME);
  if (!currentTheme.length) {
    setLocalStorage(THEME, LIGHT_THEME);
    document.body.classList.add('light-theme');
  } else {
    setTheme(currentTheme);
  }
}
