function loader() {
  const loader = document.querySelector('.loader');

  loader.classList.toggle('visually-hidden');

  if (!loader.classList.contains('visually-hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

export default loader;
