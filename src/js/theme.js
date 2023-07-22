import { toggleThemeBtn } from './refs';

export function setTheme() {
  const colorTheme = window.localStorage.getItem('mainThemeFilmsbox');
  const themeLabel = toggleThemeBtn.closest('label');
  const body = document.body;

  if (colorTheme === 'light') {
    themeLabel.classList.remove('active');
    body.classList.add('light-theme');
  }
  if (colorTheme === 'dark') {
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
    window.localStorage.setItem('mainThemeFilmsbox', 'dark');
  } else {
    window.localStorage.setItem('mainThemeFilmsbox', 'light');
  }
}
