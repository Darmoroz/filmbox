import { toTopBtn } from './refs';

function handleScroll(e) {
  const currentScroll = document.body.scrollTop;
  const clientHeight = document.body.clientHeight;

  if (currentScroll >= clientHeight) {
    toTopBtn.classList.remove('visually-hidden');
    toTopBtn.addEventListener('click', goToTopPage);
  } else {
    toTopBtn.classList.add('visually-hidden');
    toTopBtn.removeEventListener('click', goToTopPage);
  }
}

function goToTopPage(e) {
  e.preventDefault();

  window.addEventListener('wheel', disableMouseWheelScrolling, {
    passive: false,
  });
  window.requestAnimationFrame(scrollStep);
}

function disableMouseWheelScrolling(e) {
  e.preventDefault();
}

function scrollStep() {
  const currentScroll = document.body.scrollTop;
  const newScroll = currentScroll - 70;

  document.body.scrollTo(0, newScroll);
  if (newScroll > 0) {
    window.requestAnimationFrame(scrollStep);
  } else {
    window.removeEventListener('wheel', disableMouseWheelScrolling),
      { passive: false };
  }
}

export default handleScroll;
