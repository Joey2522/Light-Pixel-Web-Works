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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.focus();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#projectForm');
const note = document.querySelector('#formNote');
if (note) {
  note.textContent = 'Your inquiry is sent through FormSubmit so we can reply to your request.';
  note.setAttribute('role', 'status');
  note.setAttribute('aria-live', 'polite');
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const button = form.querySelector('button[type="submit"]');
  const originalLabel = button?.textContent;
  if (button) {
    button.disabled = true;
    button.textContent = 'Sending…';
  }
  if (note) {
    note.textContent = 'Sending your inquiry…';
    note.style.color = '#526b85';
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const fields = Object.fromEntries(new FormData(form).entries());
    const response = await fetch('https://formsubmit.co/ajax/hello@lightandpixelwebworks.com', {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ ...fields, _subject: 'New Light & Pixel website inquiry', _template: 'table' })
    });
    const result = await response.json();
    if (!response.ok || (result.success !== true && result.success !== 'true')) {
      throw new Error('The form service did not accept the submission.');
    }
    form.reset();
    if (note) {
      note.textContent = 'Thanks! Your inquiry was submitted. We’ll be in touch soon.';
      note.style.color = '#166534';
    }
  } catch (error) {
    if (note) {
      note.textContent = 'Sorry, we could not submit your inquiry. Please email hello@lightandpixelwebworks.com directly.';
      note.style.color = '#b91c1c';
    }
  } finally {
    clearTimeout(timeout);
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel;
    }
  }
});