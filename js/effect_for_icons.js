const icons = document.querySelectorAll(`.privileges__icon`);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetIcon = entry.target;
      targetIcon.style.opacity = 1;
      observer.unobserve(targetIcon);
    }
  })
}, options)

icons.forEach(icon => {
    icon.style.opacity = 0;
    observer.observe(icon);
})
