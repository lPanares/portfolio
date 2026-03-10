const btn = document.getElementById('theme-toggle');
const body = document.body;

const saved = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', saved);
btn.textContent = saved === 'dark' ? 'Switch to Light' : 'Switch to Dark';

btn.addEventListener('click', () => {
  const curr = body.getAttribute('data-theme');
  const next = curr === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.textContent = next === 'dark' ? 'Switch to Light' : 'Switch to Dark';
});
