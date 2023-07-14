function modalToggle() {
  const modal = document.querySelector('.modal__backdrop');

  modal.classList.toggle('is-hidden');

  if (modal.classList.contains('is-hidden')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

export default modalToggle;
