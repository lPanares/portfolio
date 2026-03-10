const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

// Update button text based on current theme
toggleBtn.textContent = savedTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark';

toggleBtn.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  toggleBtn.textContent = newTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
});
