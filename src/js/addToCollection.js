import { getLocalStorage, setLocalStorage } from './localStorage';
import { QUEUE, WATCHED } from './refs';

function addToCollection(movie, e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const btnType = e.target.dataset.value;
  const currentBtn = e.target;
  currentBtn.setAttribute('disabled', true);

  if (btnType === 'watched') {
    const watchedCollection = getLocalStorage(WATCHED);
    setLocalStorage(WATCHED, [...watchedCollection, movie]);
  }

  if (btnType === 'queue') {
    const queueCollection = getLocalStorage(QUEUE);
    setLocalStorage(QUEUE, [...queueCollection, movie]);
  }
}

export default addToCollection;
