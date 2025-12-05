// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
  document.body.setAttribute('data-theme', storedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Background Changer
const bgChangeBtn = document.getElementById('bg-change');

bgChangeBtn.addEventListener('click', () => {
  const bgColor = prompt(
    "Enter a background color name (e.g., lightblue, #4CAF50) or 'reset' to go back:"
  );
  
  if (bgColor === null) return; // User canceled

  if (bgColor.toLowerCase() === 'reset') {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '';
    localStorage.removeItem('custom-bg');
  } else {
    // Try as color first
    const testDiv = document.createElement('div');
    testDiv.style.color = bgColor;
    if (testDiv.style.color !== '') {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = bgColor;
      localStorage.setItem('custom-bg', bgColor);
    } else {
      alert('Invalid color. Please try a valid name, hex, or "reset".');
    }
  }
});

// Load saved custom background on page load
window.addEventListener('load', () => {
  const savedBg = localStorage.getItem('custom-bg');
  if (savedBg) {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = savedBg;
  }
});