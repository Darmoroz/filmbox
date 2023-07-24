import { closeModalByClickBackdropOrBtn, closeModalEscape } from './closeModal';
import { globalHandlers, modal } from './refs';
import renderTrailer from './render/renderTrailer';

function removeListener() {
  const playTrailerBtn = document.getElementById('trailer');
  const btnCollectionBlock = document.getElementById('btn-collection');

  window.removeEventListener('keydown', closeModalEscape);
  modal.removeEventListener('click', closeModalByClickBackdropOrBtn);
  playTrailerBtn.removeEventListener('click', renderTrailer);
  btnCollectionBlock.removeEventListener(
    'click',
    globalHandlers.handleClickAddToCollection
  );
}

export default removeListener;
