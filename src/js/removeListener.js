import { closeModalByClickBackdropOrBtn, closeModalEscape } from './closeModal';
import { modal } from './refs';
import renderTrailer from './render/renderTrailer';

function removeListener() {
  const playTrailerBtn = document.getElementById('trailer');

  window.removeEventListener('keydown', closeModalEscape);
  modal.removeEventListener('click', closeModalByClickBackdropOrBtn);
  playTrailerBtn.removeEventListener('click', renderTrailer);
}

export default removeListener;
