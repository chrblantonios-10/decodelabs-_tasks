// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

  navToggle.setAttribute('aria-expanded', String(!isOpen));
  primaryNav.classList.toggle('open');
});

// Close the mobile menu automatically when a nav link is clicked
primaryNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('open');
  }
});
