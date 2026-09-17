const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.querySelector('#projectForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  if (note) {
    note.textContent = 'Thanks! The form layout is ready. We’ll connect real message delivery before launch.';
    note.style.fontWeight = '700';
    note.style.color = '#2878ff';
  }
});