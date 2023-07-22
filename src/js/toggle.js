function toggle(tag) {
  const bodyStyle = document.body.style;

  tag.classList.toggle('visually-hidden');

  if (tag.classList.contains('visually-hidden')) {
    bodyStyle.overflow = 'auto';
  } else {
    bodyStyle.overflow = 'hidden';
  }
}

export default toggle;
