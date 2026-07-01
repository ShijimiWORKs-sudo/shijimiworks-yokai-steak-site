const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }));
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('[data-reveal], [data-flip-block]');
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1, rootMargin: '0px 0px -35px' });
  revealItems.forEach(el => observer.observe(el));
} else {
  revealItems.forEach(el => el.classList.add('is-visible'));
}

const header = document.querySelector('[data-header]');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.global-nav a[href^="#"]');
if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    const active = entries.find(entry => entry.isIntersecting);
    if (!active) return;
    navLinks.forEach(link => link.classList.toggle('is-current', link.getAttribute('href') === `#${active.target.id}`));
  }, { rootMargin: '-30% 0px -60%' });
  sections.forEach(section => sectionObserver.observe(section));
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`制作相談：${data.get('subject')}`);
    const body = encodeURIComponent(`お名前：${data.get('name')}\n返信先：${data.get('email')}\n\n${data.get('message')}`);
    // TODO: 正式な問い合わせメールアドレス確定後、mailto: の宛先を追加する。
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    document.querySelector('[data-form-note]').textContent = 'メールアプリを開きました。宛先を入力して送信してください。';
  });
}

const homePage = document.querySelector('.home-page');
if (homePage) {
  requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add('is-home-loaded')));

  const fusion = document.querySelector('[data-hero-fusion]');
  const homeCursorLabel = document.querySelector('.home-cursor span');
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let fusionX = 0;
  let fusionY = 0;
  let targetFusionX = 0;
  let targetFusionY = 0;

  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', event => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      targetFusionX = (event.clientX / window.innerWidth - .5) * 2;
      targetFusionY = (event.clientY / window.innerHeight - .5) * 2;
      document.documentElement.classList.add('home-has-pointer');
    }, { passive: true });
    window.addEventListener('pointerleave', () => document.documentElement.classList.remove('home-has-pointer'));

    const animateHome = () => {
      fusionX += (targetFusionX - fusionX) * .055;
      fusionY += (targetFusionY - fusionY) * .055;
      document.documentElement.style.setProperty('--home-cx', `${pointerX}px`);
      document.documentElement.style.setProperty('--home-cy', `${pointerY}px`);
      if (fusion) {
        fusion.style.setProperty('--fusion-x', fusionX.toFixed(3));
        fusion.style.setProperty('--fusion-y', fusionY.toFixed(3));
      }
      requestAnimationFrame(animateHome);
    };
    animateHome();

    document.querySelectorAll('a, button, .works-grid').forEach(element => {
      element.addEventListener('pointerenter', () => {
        document.documentElement.classList.add('home-cursor-active');
        if (homeCursorLabel) homeCursorLabel.textContent = element.classList.contains('works-grid') ? 'DRAG' : 'VIEW';
      });
      element.addEventListener('pointerleave', () => document.documentElement.classList.remove('home-cursor-active'));
    });
  }

  const worksTrack = document.querySelector('.works-grid');
  if (worksTrack) {
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    worksTrack.addEventListener('pointerdown', event => {
      dragging = true;
      startX = event.clientX;
      startScroll = worksTrack.scrollLeft;
      worksTrack.classList.add('is-dragging');
      worksTrack.setPointerCapture(event.pointerId);
    });
    worksTrack.addEventListener('pointermove', event => {
      if (dragging) worksTrack.scrollLeft = startScroll - (event.clientX - startX);
    });
    const endDrag = () => { dragging = false; worksTrack.classList.remove('is-dragging'); };
    worksTrack.addEventListener('pointerup', endDrag);
    worksTrack.addEventListener('pointercancel', endDrag);
  }

  const workFilters = document.querySelectorAll('[data-work-filter]');
  const workCards = document.querySelectorAll('[data-work-category]');
  workFilters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.workFilter;
    workFilters.forEach(item => item.classList.toggle('is-active', item === button));
    workCards.forEach(card => card.classList.toggle('is-filtered-out', category !== 'all' && card.dataset.workCategory !== category));
  }));

  const parallaxSymbol = document.querySelector('[data-parallax-symbol]');
  if (parallaxSymbol && !reduceMotion) {
    let parallaxQueued = false;
    const updateAboutParallax = () => {
      const rect = parallaxSymbol.getBoundingClientRect();
      const shift = Math.max(-18, Math.min(18, (rect.top + rect.height / 2 - window.innerHeight / 2) * -.035));
      parallaxSymbol.style.setProperty('--about-shift', shift.toFixed(2));
      parallaxQueued = false;
    };
    window.addEventListener('scroll', () => {
      if (!parallaxQueued) { parallaxQueued = true; requestAnimationFrame(updateAboutParallax); }
    }, { passive: true });
    updateAboutParallax();
  }

  const newsletter = document.querySelector('[data-newsletter]');
  if (newsletter) newsletter.addEventListener('submit', event => {
    event.preventDefault();
    newsletter.querySelector('[data-newsletter-note]').textContent = '配信開始前のため、現在は登録されません。公開時に受付を開始します。';
  });
}
