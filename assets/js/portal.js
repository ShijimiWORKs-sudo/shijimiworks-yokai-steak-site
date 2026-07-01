const page = document.documentElement;
const stage = document.querySelector('[data-gate-stage]');
const choices = document.querySelectorAll('[data-gate-choice]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

requestAnimationFrame(() => requestAnimationFrame(() => page.classList.add('is-loaded')));

if (stage && !reduced && window.matchMedia('(pointer: fine)').matches) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let cursorX = innerWidth / 2;
  let cursorY = innerHeight / 2;

  const render = () => {
    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;
    stage.style.setProperty('--px', currentX.toFixed(3));
    stage.style.setProperty('--py', currentY.toFixed(3));
    page.style.setProperty('--cx', `${cursorX}px`);
    page.style.setProperty('--cy', `${cursorY}px`);
    requestAnimationFrame(render);
  };

  window.addEventListener('pointermove', event => {
    targetX = (event.clientX / innerWidth - .5) * 2;
    targetY = (event.clientY / innerHeight - .5) * 2;
    cursorX = event.clientX;
    cursorY = event.clientY;
    page.classList.add('has-pointer');
  }, { passive: true });
  window.addEventListener('pointerleave', () => page.classList.remove('has-pointer'));
  choices.forEach(choice => {
    choice.addEventListener('pointerenter', () => page.classList.add('is-choice'));
    choice.addEventListener('pointerleave', () => page.classList.remove('is-choice'));
    choice.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey) return;
      event.preventDefault();
      page.classList.add('is-leaving');
      document.querySelectorAll('.gate-curtain').forEach(curtain => curtain.style.transform = 'translateX(0)');
      setTimeout(() => { window.location.href = choice.href; }, 620);
    });
  });
  render();
}
