import { Notify } from 'notiflix';
import { getLocalStorage, setLocalStorage } from './localStorage';
import { QUEUE, WATCHED } from './refs';

function addToCollection(movie, e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const movieTitle =
    e.target.closest('.movie__content').firstElementChild.innerText;

  const btnType = e.target.dataset.value;
  const currentBtn = e.target;
  currentBtn.setAttribute('disabled', true);

  if (btnType === 'watched') {
    const watchedCollection = getLocalStorage(WATCHED);
    setLocalStorage(WATCHED, [...watchedCollection, movie]);
    Notify.success(`${movieTitle} add to WATCHED library`);
  }

  if (btnType === 'queue') {
    const queueCollection = getLocalStorage(QUEUE);
    setLocalStorage(QUEUE, [...queueCollection, movie]);
    Notify.success(`${movieTitle} add to QUEUE library`);
  }
}

export default addToCollection;
