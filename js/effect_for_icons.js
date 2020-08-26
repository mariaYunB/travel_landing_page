const icons = document.querySelectorAll(`.privileges__icon`);

icons.forEach(icon => {
  icon.style.filter = `opacity(0.2)`;
  icon.style.height = 50 + `px`;
})

function isElementVisible(el) {
  const rect   = el.getBoundingClientRect(),
      vWidth   = window.innerWidth || document.documentElement.clientWidth,
      vHeight  = window.innerHeight || document.documentElement.clientHeight,
      efp      = (x, y) => document.elementFromPoint(x, y);

  // Return false if el isn`t in the viewport
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
    return false;

  // Return true if any of el`s four corners are visible
  return (el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}

window.addEventListener(`scroll`, () => {
  icons.forEach(icon => {
    setTimeout(() => {
      if (isElementVisible(icon)) {
        icon.style.filter = null;
        icon.style.height = null;
        console.log(`fgjhr`)
      } else {
        icon.style.filter = `opacity(0.2)`;
        icon.style.height = 50 + `px`;
      }
    }, 1000);
  })
});
