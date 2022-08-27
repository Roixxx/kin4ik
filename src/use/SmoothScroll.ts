export default function smoothScroll(elem: HTMLElement, offset = 0) {
  const rect = elem.getBoundingClientRect();
  const targetPosition = rect.top + window.pageYOffset + offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });

  return new Promise((resolve, reject) => {
    const failed = setTimeout(() => {
      reject();
    }, 500);

    const scrollHandler = () => {
      if (window.pageYOffset === targetPosition) {
        window.removeEventListener('scroll', scrollHandler);
        clearTimeout(failed);
        resolve(null);
      }
    };
    if (window.pageYOffset === targetPosition) {
      clearTimeout(failed);
      resolve(null);
    } else {
      window.addEventListener('scroll', scrollHandler);
    }
  }).catch((e) => e);
}
