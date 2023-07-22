import { closeModalBtn, modal, modalFullMovie, modalTrailer } from './refs';
import removeListener from './removeListener';
import toggle from './toggle';

export function closeModalEscape(e) {
  if (e.code !== 'Escape') {
    return;
  }

  if (modalTrailer.children.length) {
    hideTrailerMarkup();
    return;
  }

  hideModal();
}

export function closeModalByClickBackdropOrBtn(e) {
  if (e.target === modal || e.target === closeModalBtn) {
    if (modalTrailer.children.length) {
      hideTrailerMarkup();
      return;
    }

    hideModal();
  }
}

function hideTrailerMarkup() {
  modalTrailer.innerHTML = '';
  modalTrailer.style.zIndex = -1;
}

function hideModal() {
  removeListener();
  modalFullMovie.innerHTML = '';
  toggle(modal);
}
